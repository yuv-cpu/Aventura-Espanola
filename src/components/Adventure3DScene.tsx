import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { useGame } from '../context/GameContext';
import { soundService } from '../services/soundService';
import { 
  ArrowLeft, 
  Map as MapIcon, 
  BookOpen, 
  User, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert,
  Flame,
  Star,
  Coins
} from 'lucide-react';

export interface AdventureStation3D {
  id: string;
  x: number;
  z: number;
  label: string;
  subLabel?: string;
  icon?: string;
  status: 'completed' | 'unlocked' | 'locked';
  color: number;
  goodsColor?: number;
  onInteract: () => void;
}

export interface Adventure3DSceneProps {
  cityName: string;
  cityNumber?: number;
  totalCities?: number;
  regionName?: string;
  accentColor?: string;
  moduleName?: string;
  landmarkName?: string;
  stations: AdventureStation3D[];
  bossStation?: {
    label: string;
    bossName: string;
    isPassed: boolean;
    allLevelsDone: boolean;
    onInteract: () => void;
  };
  exitGate?: {
    targetCityName?: string;
    isUnlocked: boolean;
    onWalkThrough: () => void;
  };
  onBackToMap: () => void;
}

// Low-poly human character generator using Three.js primitives
function createPersonMesh(
  shirtColor: number,
  hairColor: number,
  pantsColor: number,
  skinColor: number
): THREE.Group {
  const g = new THREE.Group();
  const mat = (c: number) => new THREE.MeshLambertMaterial({ color: c });

  const addMesh = (
    geo: THREE.BufferGeometry,
    c: number,
    x: number,
    y: number,
    z: number,
    sx = 1,
    sy = 1,
    sz = 1
  ): THREE.Mesh => {
    const m = new THREE.Mesh(geo, mat(c));
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.castShadow = true;
    g.add(m);
    return m;
  };

  const addLimb = (
    a: [number, number, number],
    b: [number, number, number],
    r1: number,
    r2: number,
    c: number
  ): THREE.Mesh => {
    const A = new THREE.Vector3(...a);
    const B = new THREE.Vector3(...b);
    const v = B.clone().sub(A);
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(r2, r1, v.length(), 10),
      mat(c)
    );
    m.position.copy(A.clone().add(B).multiplyScalar(0.5));
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize());
    m.castShadow = true;
    g.add(m);
    return m;
  };

  // Legs, knees and shoes
  addLimb([-0.12, 0.82, 0], [-0.14, 0.35, 0], 0.105, 0.085, pantsColor);
  addLimb([0.12, 0.82, 0], [0.14, 0.35, 0], 0.105, 0.085, pantsColor);
  addMesh(new THREE.SphereGeometry(0.09, 12, 10), pantsColor, -0.14, 0.35, 0, 1, 0.9, 1);
  addMesh(new THREE.SphereGeometry(0.09, 12, 10), pantsColor, 0.14, 0.35, 0, 1, 0.9, 1);
  addMesh(new THREE.BoxGeometry(0.19, 0.12, 0.31), 0x332c2a, -0.14, 0.11, 0.07, 1, 1, 1);
  addMesh(new THREE.BoxGeometry(0.19, 0.12, 0.31), 0x332c2a, 0.14, 0.11, 0.07, 1, 1, 1);

  // Hips and torso
  addMesh(new THREE.SphereGeometry(0.2, 14, 12), pantsColor, 0, 0.83, 0, 1, 0.72, 0.78);
  addMesh(new THREE.CylinderGeometry(0.22, 0.29, 0.62, 12), shirtColor, 0, 1.22, 0, 1, 1, 1);
  addMesh(new THREE.SphereGeometry(0.235, 14, 12), shirtColor, 0, 1.48, 0, 1, 0.55, 0.8);

  // Collar and neck
  addMesh(new THREE.CylinderGeometry(0.075, 0.08, 0.14, 10), skinColor, 0, 1.62, 0);
  addMesh(new THREE.TorusGeometry(0.105, 0.025, 6, 12), 0xf2e6d4, 0, 1.48, 0.12, 1, 1, 0.65);

  // Arms with elbows and hands
  addLimb([-0.23, 1.48, 0], [-0.36, 1.16, 0.035], 0.085, 0.065, shirtColor);
  addLimb([-0.36, 1.16, 0.035], [-0.34, 0.96, 0.1], 0.065, 0.045, shirtColor);
  addLimb([0.23, 1.48, 0], [0.36, 1.16, 0.035], 0.085, 0.065, shirtColor);
  addLimb([0.36, 1.16, 0.035], [0.34, 0.96, 0.1], 0.065, 0.045, shirtColor);
  addMesh(new THREE.SphereGeometry(0.055, 10, 8), skinColor, -0.34, 0.93, 0.105);
  addMesh(new THREE.SphereGeometry(0.055, 10, 8), skinColor, 0.34, 0.93, 0.105);

  // Head and ears
  addMesh(new THREE.SphereGeometry(0.235, 20, 18), skinColor, 0, 1.86, 0, 0.93, 1.08, 0.86);
  addMesh(new THREE.SphereGeometry(0.052, 12, 10), skinColor, -0.222, 1.83, 0, 1, 0.95, 0.7);
  addMesh(new THREE.SphereGeometry(0.052, 12, 10), skinColor, 0.222, 1.83, 0, 1, 0.95, 0.7);

  // Hair cap, locks and fringe
  addMesh(new THREE.SphereGeometry(0.242, 18, 14), hairColor, 0, 1.98, -0.018, 1.02, 0.56, 0.94);
  addMesh(new THREE.SphereGeometry(0.105, 12, 10), hairColor, -0.18, 1.87, 0.035, 0.72, 1.15, 0.7);
  addMesh(new THREE.SphereGeometry(0.105, 12, 10), hairColor, 0.18, 1.87, 0.035, 0.72, 1.15, 0.7);
  addMesh(new THREE.SphereGeometry(0.105, 12, 10), hairColor, -0.075, 2.005, 0.166, 1, 0.48, 0.45);
  addMesh(new THREE.SphereGeometry(0.095, 12, 10), hairColor, 0.055, 2.015, 0.166, 1, 0.45, 0.45);

  // Eyes
  [-1, 1].forEach(side => {
    addMesh(new THREE.SphereGeometry(0.047, 14, 12), 0xfff8ef, side * 0.082, 1.86, 0.188, 1, 0.82, 0.48);
    addMesh(new THREE.SphereGeometry(0.026, 12, 10), 0x5a3828, side * 0.078, 1.858, 0.211, 1, 1, 0.65);
    addMesh(new THREE.SphereGeometry(0.014, 10, 8), 0x17191d, side * 0.078, 1.858, 0.226);
    addMesh(new THREE.SphereGeometry(0.008, 8, 8), 0xffffff, side * 0.069, 1.87, 0.234);
    const brow = addMesh(new THREE.BoxGeometry(0.09, 0.022, 0.025), hairColor, side * 0.082, 1.93, 0.195);
    brow.rotation.z = side * -0.08;
  });

  // Nose and smile
  addMesh(new THREE.SphereGeometry(0.031, 12, 10), skinColor, 0, 1.805, 0.215, 0.78, 1.25, 0.8);
  addMesh(new THREE.SphereGeometry(0.026, 12, 10), skinColor, 0, 1.785, 0.232, 1, 0.7, 0.8);
  const smile = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.052, 1.735, 0.202),
    new THREE.Vector3(0, 1.72, 0.216),
    new THREE.Vector3(0.052, 1.735, 0.202)
  ]);
  const mouth = new THREE.Mesh(new THREE.TubeGeometry(smile, 8, 0.009, 5, false), mat(0x713b3b));
  g.add(mouth);

  return g;
}

export const Adventure3DScene: React.FC<Adventure3DSceneProps> = ({
  cityName,
  cityNumber = 1,
  totalCities = 15,
  regionName = 'España',
  accentColor = '#C60B1E',
  moduleName,
  landmarkName,
  stations,
  bossStation,
  exitGate,
  onBackToMap
}) => {
  const { progress } = useGame();
  const mountRef = useRef<HTMLDivElement>(null);
  const minimapCanvasRef = useRef<HTMLCanvasElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  // Toast message
  const [toastText, setToastText] = useState<string | null>(null);
  const toastTimeoutRef = useRef<any>(null);

  const showToast = useCallback((msg: string) => {
    setToastText(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToastText(null), 2800);
  }, []);

  // Keyboard state
  const keysRef = useRef<Record<string, boolean>>({});

  // Mobile pad key press
  const handleTouchKey = (key: string, pressed: boolean) => {
    keysRef.current[key] = pressed;
  };

  // Convert player profile to colors
  const skinHex = {
    light: 0xfddcb5,
    'medium-light': 0xe8b98a,
    medium: 0xc8956c,
    'medium-dark': 0x9a6b4a,
    dark: 0x6b4226
  }[progress.profile?.character?.skinTone || 'medium'] || 0xc8956c;

  const hairHex = {
    black: 0x1a1a2e,
    brown: 0x6b3a2a,
    blonde: 0xe8c96a,
    red: 0xb34233,
    gray: 0x9ca3af
  }[progress.profile?.character?.hairColor || 'brown'] || 0x6b3a2a;

  const shirtHex = {
    casual: 0x3b82f6,
    traveler: 0xb45309,
    flamenco: 0xc60b1e,
    sporty: 0x16a34a,
    elegant: 0x7c3aed
  }[progress.profile?.character?.outfit || 'traveler'] || 0xb45309;

  const pantsHex = 0x2b3a67;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    const worldGroup = new THREE.Group();

    // Scene & Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9fd0f0);
    scene.fog = new THREE.Fog(0x9fd0f0, 45, 110);
    scene.add(worldGroup);

    camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );

    // Lights
    scene.add(new THREE.HemisphereLight(0xdcefff, 0x8a7a5a, 0.95));
    const sun = new THREE.DirectionalLight(0xfff0d0, 0.85);
    sun.position.set(18, 34, 12);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, {
      left: -32,
      right: 32,
      top: 32,
      bottom: -32,
      far: 90
    });
    scene.add(sun);

    // Materials helper
    const mat = (c: number | string) => new THREE.MeshLambertMaterial({ color: c });
    const addBox = (w: number, h: number, d: number, c: number | string, x: number, y: number, z: number, p?: THREE.Group) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));
      m.position.set(x, y + h / 2, z);
      m.castShadow = true;
      m.receiveShadow = true;
      (p || worldGroup).add(m);
      return m;
    };

    // Obstacles collision list: [x, z, radius]
    const obstacles: [number, number, number][] = [];

    // 1. Plaza ground
    const baseColor = new THREE.Color(accentColor).offsetHSL(0, -0.2, 0.2);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), mat(baseColor.clone().multiplyScalar(0.75).getHex()));
    gr.rotation.x = -Math.PI / 2;
    worldGroup.add(gr);

    const plazaFloor = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), mat(baseColor.getHex()));
    plazaFloor.rotation.x = -Math.PI / 2;
    plazaFloor.position.y = 0.02;
    plazaFloor.receiveShadow = true;
    worldGroup.add(plazaFloor);

    // 2. Perimeter Spanish town buildings
    const wallCol = new THREE.Color(0xd4c3a3);
    const buildHouse = (x: number, z: number, w: number, d: number, h: number) => {
      addBox(w, h, d, wallCol.getHex(), x, 0, z);
      // Windows
      for (let y = 2.5; y < h - 1; y += 3) {
        addBox(w + 0.1, 1, d + 0.1, 0x2c3a55, x, y, z);
      }
    };

    for (let k = -4; k <= 4; k++) {
      const h = 8 + (Math.abs(k) % 3) * 3;
      if (Math.abs(k) > 1) buildHouse(k * 6.5, -27, 6, 6, h);
      buildHouse(27, k * 6.5, 6, 6, 8 + (Math.abs(k) % 2) * 4);
      buildHouse(-27, k * 6.5, 6, 6, 8 + (Math.abs(k) % 2) * 4);
      buildHouse(k * 6.5, 27, 6, 6, 8 + (Math.abs(k) % 3) * 3);
    }

    // 3. Cathedral Facade at North Plaza Head
    addBox(14, 12, 8, 0xd9c9a6, 0, 0, -27);
    [-5.5, 5.5].forEach(x => {
      addBox(4, 20, 4, 0xd9c9a6, x, 0, -27);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(3, 5, 4), mat(0x5b6b74));
      cone.position.set(x, 22.5, -27);
      cone.castShadow = true;
      worldGroup.add(cone);
    });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 8, 0, 6.3, 0, 1.57), mat(0x8fa0a6));
    dome.position.set(0, 12, -27);
    worldGroup.add(dome);

    // 4. Central Fountain
    const f1 = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 0.7, 20), mat(0xb8b0a0));
    f1.position.set(0, 0.35, -5);
    worldGroup.add(f1);
    const f2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.2, 8), mat(0xb8b0a0));
    f2.position.set(0, 1.2, -5);
    worldGroup.add(f2);
    const fWater = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.9, 0.75, 20), mat(0x4fa8d8));
    fWater.position.set(0, 0.4, -5);
    worldGroup.add(fWater);
    obstacles.push([0, -5, 2.5]);

    // 5. Spanish Flagpole & Waving Flag
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 12, 8), mat(0xcccccc));
    pole.position.set(0, 6, -12);
    worldGroup.add(pole);

    const flagGroup = new THREE.Group();
    // Spanish flag red/yellow stripes
    const redStripe1 = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.8, 0.05), new THREE.MeshBasicMaterial({ color: 0xc60b1e }));
    redStripe1.position.set(0, 0.8, 0);
    flagGroup.add(redStripe1);
    const yellowStripe = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 0.05), new THREE.MeshBasicMaterial({ color: 0xffc400 }));
    yellowStripe.position.set(0, 0, 0);
    flagGroup.add(yellowStripe);
    const redStripe2 = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.8, 0.05), new THREE.MeshBasicMaterial({ color: 0xc60b1e }));
    redStripe2.position.set(0, -0.8, 0);
    flagGroup.add(redStripe2);
    flagGroup.position.set(1.8, 10.4, -12);
    worldGroup.add(flagGroup);

    // 6. Perimeter Trees
    for (let j = 0; j < 10; j++) {
      const a = j * 0.63;
      const x = Math.cos(a) * 19;
      const z = Math.sin(a) * 19;
      if (x > 17 && Math.abs(z) < 4) continue;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 2, 6), mat(0x6b4a2a));
      trunk.position.set(x, 1, z);
      worldGroup.add(trunk);
      const foliage = new THREE.Mesh(new THREE.SphereGeometry(1.5, 10, 8), mat(0x3f8f4a));
      foliage.position.set(x, 3.2, z);
      worldGroup.add(foliage);
      obstacles.push([x, z, 0.8]);
    }

    // 7. Exit Gate at x = 22
    addBox(0.6, 5, 0.6, 0xc8b080, 22, 0, -2.6);
    addBox(0.6, 5, 0.6, 0xc8b080, 22, 0, 2.6);
    addBox(0.8, 0.8, 6, 0xc8b080, 22, 5, 0);

    const isGateOpen = Boolean(exitGate?.isUnlocked);
    const gateMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4.6, 4.8),
      new THREE.MeshBasicMaterial({
        color: isGateOpen ? 0x40ff90 : 0xff5050,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      })
    );
    gateMesh.rotation.y = Math.PI / 2;
    gateMesh.position.set(22, 2.5, 0);
    worldGroup.add(gateMesh);

    // 8. 3D Market Stalls for each Station
    const stationElements: {
      station: AdventureStation3D;
      pos: { x: number; z: number };
      tagEl: HTMLDivElement;
    }[] = [];

    const tagsContainer = tagsContainerRef.current;
    if (tagsContainer) tagsContainer.innerHTML = '';

    stations.forEach((station) => {
      const x = station.x;
      const z = station.z;

      // Stall Group
      const sg = new THREE.Group();
      // Counter
      addBox(3.2, 1.05, 1.2, 0x80502f, x, 0, z, sg);
      addBox(3.4, 0.16, 1.3, 0xd7b78a, x, 1.05, z, sg);
      // Posts
      [-1.3, 1.3].forEach(dx => addBox(0.12, 2.1, 0.12, 0x68452e, x + dx, 0, z - 0.5, sg));
      // Awning
      addBox(3.6, 0.18, 1.8, station.color, x, 2.2, z - 0.4, sg);
      for (let j = 0; j < 5; j++) {
        addBox(0.65, 0.2, 1.82, j % 2 ? 0xf8e8c9 : station.color, x - 1.3 + j * 0.65, 2.2, z - 0.4, sg);
      }
      // Food/goods on counter
      for (let j = 0; j < 4; j++) {
        const prod = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat(station.goodsColor || 0xffc94a));
        prod.position.set(x - 0.9 + j * 0.6, 1.38, z - 0.1);
        prod.castShadow = true;
        sg.add(prod);
      }
      worldGroup.add(sg);

      // 3D NPC Vendor behind stall
      const vendor = createPersonMesh(station.color, 0x2a1a10, 0x374151, 0xc58c5f);
      vendor.position.set(x, 0, z - 1.35);
      vendor.rotation.y = 0;
      worldGroup.add(vendor);

      obstacles.push([x, z, 2.0]);

      // Floating 2D/3D projected tag element
      const tagEl = document.createElement('div');
      tagEl.className = 'absolute transform -translate-x-1/2 -translate-y-full text-center pointer-events-none transition-opacity select-none';
      if (tagsContainer) tagsContainer.appendChild(tagEl);

      stationElements.push({
        station,
        pos: { x, z: z + 2.4 }, // interaction spot in front of counter
        tagEl
      });
    });

    // 9. Boss Station at North end of Plaza (if provided)
    let bossTagEl: HTMLDivElement | null = null;
    if (bossStation) {
      const bx = 0;
      const bz = -20;
      // Grand Palace Tent Archway
      addBox(8, 0.3, 4, 0x22182d, bx, 0, bz);
      addBox(0.4, 4, 0.4, 0xffc400, bx - 3.8, 0, bz);
      addBox(0.4, 4, 0.4, 0xffc400, bx + 3.8, 0, bz);
      addBox(8.4, 0.5, 0.6, 0xc60b1e, bx, 4, bz);

      // Grand Boss NPC
      const bossChar = createPersonMesh(0xc60b1e, 0x1a1a2e, 0x1f2937, 0xe0b08a);
      bossChar.position.set(bx, 0, bz);
      bossChar.scale.set(1.25, 1.25, 1.25);
      worldGroup.add(bossChar);

      obstacles.push([bx, bz, 2.6]);

      bossTagEl = document.createElement('div');
      bossTagEl.className = 'absolute transform -translate-x-1/2 -translate-y-full text-center pointer-events-none transition-opacity select-none';
      if (tagsContainer) tagsContainer.appendChild(bossTagEl);
    }

    // 10. Gate Tag
    const gateTagEl = document.createElement('div');
    gateTagEl.className = 'absolute transform -translate-x-1/2 -translate-y-full text-center pointer-events-none transition-opacity select-none';
    if (tagsContainer) tagsContainer.appendChild(gateTagEl);

    // 11. Walking Pedestrians / Crowd AI
    interface Pedestrian {
      mesh: THREE.Group;
      tx: number;
      tz: number;
    }
    const pedestrians: Pedestrian[] = [];
    const pColors = [0x4d908e, 0xe09f3e, 0x457b9d, 0xd6577a, 0x6d597a, 0x588157];
    for (let k = 0; k < 6; k++) {
      const pm = createPersonMesh(
        pColors[k % pColors.length],
        [0x2a1a10, 0x302c2a, 0x8b552b][k % 3],
        0x343a40,
        [0xc58c5f, 0xe0b08a, 0x8d5a3b][k % 3]
      );
      const px = -8 + Math.random() * 26;
      const pz = -14 + Math.random() * 28;
      pm.position.set(px, 0, pz);
      worldGroup.add(pm);
      pedestrians.push({ mesh: pm, tx: px, tz: pz });
    }

    // 12. Playable 3D Player Character
    const playerMesh = createPersonMesh(shirtHex, hairHex, pantsHex, skinHex);
    scene.add(playerMesh);

    // Player position & angle state
    const playerPos = { x: -10, z: 0 };
    let playerAngle = -Math.PI / 2;

    // Mouse drag for camera rotation
    let isDragging = false;
    let prevMouseX = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };
    const onPointerUp = () => {
      isDragging = false;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevMouseX;
        playerAngle -= dx * 0.006;
        prevMouseX = e.clientX;
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);

    // Keyboard handlers. Use KeyboardEvent.code for physical key detection so
    // E/e and keyboard layouts behave consistently. Interaction range matches
    // the range used to display the on-screen prompt below.
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const code = e.code;
      keysRef.current[key] = true;
      if (code) keysRef.current[code] = true;

      const isInteractKey = code === 'KeyE' || key === 'e' || key === 'Enter' || code === 'NumpadEnter';
      if (!isInteractKey || e.repeat) return;

      // Capture the key before app-level handlers can swallow it.
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

      // Use the same front-of-stall interaction point used to show the prompt,
      // with a forgiving radius so small movement/camera differences do not block play.
      let bestDist = 5.0;
      let bestStation: AdventureStation3D | null = null;
      stationElements.forEach(item => {
        const d = Math.hypot(playerPos.x - item.pos.x, playerPos.z - item.pos.z);
        if (d <= bestDist) {
          bestDist = d;
          bestStation = item.station;
        }
      });

      if (bestStation) {
        (bestStation as AdventureStation3D).onInteract();
        return;
      }

      if (bossStation) {
        const bossDistance = Math.hypot(playerPos.x, playerPos.z + 18);
        if (bossDistance < 5.0) {
          bossStation.onInteract();
          return;
        }
      }

      showToast('Acércate hasta ver el botón “E · Interactuar” y pulsa E.');
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      keysRef.current[key] = false;
      if (e.code) keysRef.current[e.code] = false;
    };

    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('keyup', onKeyUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Helper to project 3D point to screen
    const projVector = new THREE.Vector3();
    const projectToScreen = (x: number, y: number, z: number, el: HTMLDivElement) => {
      projVector.set(x, y, z).project(camera);
      const isVisible = projVector.z < 1;
      el.style.display = isVisible ? 'block' : 'none';
      if (isVisible) {
        const sx = ((projVector.x + 1) / 2) * container.clientWidth;
        const sy = ((1 - projVector.y) / 2) * container.clientHeight;
        el.style.left = `${sx}px`;
        el.style.top = `${sy}px`;
      }
    };

    // Render Minimap Radar
    const drawMinimap = () => {
      const mmCanvas = minimapCanvasRef.current;
      if (!mmCanvas) return;
      const ctx = mmCanvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, 96, 96);
      ctx.save();
      ctx.beginPath();
      ctx.arc(48, 48, 45, 0, Math.PI * 2);
      ctx.clip();

      // Background
      ctx.fillStyle = '#1D2133';
      ctx.fillRect(0, 0, 96, 96);

      // Coordinate converter (centered on player)
      const toMinimap = (wx: number, wz: number): [number, number] => {
        return [48 + (wx - playerPos.x) * 1.8, 48 + (wz - playerPos.z) * 1.8];
      };

      // Draw fountain
      const [fx, fz] = toMinimap(0, -5);
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(fx, fz, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw stations
      stations.forEach(s => {
        const [sx, sz] = toMinimap(s.x, s.z);
        ctx.fillStyle = s.status === 'completed' ? '#4ADE80' : s.status === 'unlocked' ? '#FBBF24' : '#64748B';
        ctx.beginPath();
        ctx.arc(sx, sz, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Exit Gate
      const [gx, gz] = toMinimap(22, 0);
      ctx.fillStyle = isGateOpen ? '#4ADE80' : '#EF4444';
      ctx.fillRect(gx - 3, gz - 4, 6, 8);

      // Draw player arrow in center
      ctx.translate(48, 48);
      ctx.rotate(-playerAngle);
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.lineTo(5, 5);
      ctx.lineTo(-5, 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    // Main Animation Loop
    let lastTime = performance.now();
    let totalTime = 0;

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;
      totalTime += dt;

      // Handle player movement
      const keys = keysRef.current;
      const f = (keys.w || keys.W || keys.ArrowUp ? 1 : 0) - (keys.s || keys.S || keys.ArrowDown ? 1 : 0);
      const r = (keys.a || keys.A || keys.ArrowLeft ? 1 : 0) - (keys.d || keys.D || keys.ArrowRight ? 1 : 0);

      playerAngle += r * 2.2 * dt;

      let isMoving = false;
      if (f !== 0) {
        isMoving = true;
        const speed = (f > 0 ? 4.8 : 2.6) * dt * f;
        let nx = playerPos.x - Math.sin(playerAngle) * speed;
        let nz = playerPos.z - Math.cos(playerAngle) * speed;

        // Boundaries
        const boundLimit = (x: number, z: number) => (Math.abs(z) < 2.5 && x > 0 ? 23.5 : 20.5);
        nx = Math.max(-20.5, Math.min(boundLimit(nx, nz), nx));
        nz = Math.max(-20.5, Math.min(20.5, nz));

        // Obstacle collisions
        obstacles.forEach(o => {
          const dx = nx - o[0];
          const dz = nz - o[1];
          const dist = Math.hypot(dx, dz);
          if (dist < o[2]) {
            nx = o[0] + (dx / dist) * o[2];
            nz = o[1] + (dz / dist) * o[2];
          }
        });

        playerPos.x = nx;
        playerPos.z = nz;

        // Check Exit Gate trigger
        if (playerPos.x > 21.6) {
          if (exitGate?.isUnlocked) {
            exitGate.onWalkThrough();
          } else {
            playerPos.x = 21.0;
            showToast('🚪 Completa todos los niveles y el boss para desbloquear el camino');
          }
        }
      }

      // Update Player Mesh position & rotation
      playerMesh.position.set(
        playerPos.x,
        isMoving ? Math.abs(Math.sin(totalTime * 9)) * 0.06 : 0,
        playerPos.z
      );
      playerMesh.rotation.y = playerAngle + Math.PI;

      // Camera follow lerp
      const camTargetX = playerPos.x + Math.sin(playerAngle) * 5.2;
      const camTargetZ = playerPos.z + Math.cos(playerAngle) * 5.2;
      camera.position.lerp(new THREE.Vector3(camTargetX, 3.2, camTargetZ), 1 - Math.exp(-9 * dt));
      camera.lookAt(playerPos.x, 1.7, playerPos.z);

      // Animate Flag
      flagGroup.rotation.y = Math.sin(totalTime * 2) * 0.25;

      // Animate Pedestrians Wander AI
      pedestrians.forEach(ped => {
        const dx = ped.tx - ped.mesh.position.x;
        const dz = ped.tz - ped.mesh.position.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.3) {
          ped.tx = -8 + Math.random() * 26;
          ped.tz = -14 + Math.random() * 28;
        } else {
          ped.mesh.position.x += (dx / d) * 1.5 * dt;
          ped.mesh.position.z += (dz / d) * 1.5 * dt;
          ped.mesh.rotation.y = Math.atan2(dx, dz);
          ped.mesh.position.y = Math.abs(Math.sin(totalTime * 8 + ped.tx)) * 0.05;
        }
      });

      // Update Floating HUD Tags
      stationElements.forEach(item => {
        const d = Math.hypot(playerPos.x - item.pos.x, playerPos.z - item.pos.z);
        const isNearby = d < 3.8;
        const st = item.station;

        item.tagEl.innerHTML = `
          <div class="pointer-events-auto flex flex-col items-center">
            <div class="px-2.5 py-1 rounded-full text-[11px] font-black shadow-lg border backdrop-blur-md ${
              st.status === 'completed'
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60'
                : st.status === 'unlocked'
                ? 'bg-[#1C2133]/90 text-amber-300 border-amber-400/50'
                : 'bg-slate-900/80 text-slate-400 border-slate-700'
            }">
              <span>${st.status === 'completed' ? '✔' : st.status === 'locked' ? '🔒' : '🏪'} ${st.label}</span>
            </div>
            ${
              isNearby
                ? `<button class="mt-1 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg border border-white hover:scale-105 active:scale-95 transition-all">
                    E · Interactuar
                  </button>`
                : ''
            }
          </div>
        `;

        if (isNearby) {
          const btn = item.tagEl.querySelector('button');
          if (btn) btn.onclick = () => st.onInteract();
        }

        projectToScreen(st.x, 3.4, st.z, item.tagEl);
      });

      // Update Boss Tag
      if (bossTagEl && bossStation) {
        const bd = Math.hypot(playerPos.x - 0, playerPos.z - (-18));
        const isNearBoss = bd < 4.2;
        bossTagEl.innerHTML = `
          <div class="pointer-events-auto flex flex-col items-center">
            <div class="px-3 py-1 rounded-full text-xs font-black shadow-lg border backdrop-blur-md ${
              bossStation.isPassed
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500'
                : bossStation.allLevelsDone
                ? 'bg-rose-950/90 text-rose-300 border-rose-500 glow-red'
                : 'bg-slate-900/90 text-slate-400 border-slate-700'
            }">
              <span>👑 ${bossStation.label}</span>
            </div>
            ${
              isNearBoss
                ? `<button class="mt-1 px-3.5 py-1.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-black text-xs rounded-xl shadow-lg border border-white hover:scale-105 active:scale-95 transition-all">
                    E · Misión Jefe (Boss)
                  </button>`
                : ''
            }
          </div>
        `;

        if (isNearBoss) {
          const btn = bossTagEl.querySelector('button');
          if (btn) btn.onclick = () => bossStation.onInteract();
        }
        projectToScreen(0, 4.8, -20, bossTagEl);
      }

      // Update Gate Tag
      if (gateTagEl) {
        gateTagEl.innerHTML = `
          <div class="px-2.5 py-1 rounded-full text-xs font-black shadow-lg border backdrop-blur-md ${
            isGateOpen
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400'
              : 'bg-rose-950/80 text-rose-300 border-rose-500/60'
          }">
            <span>${isGateOpen ? '🚪 ' + (exitGate?.targetCityName || 'Siguiente Ciudad') : '🔒 Camino Cerrado'}</span>
          </div>
        `;
        projectToScreen(22, 5.5, 0, gateTagEl);
      }

      // Draw radar
      drawMinimap();

      // Render Scene
      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
    };
  }, [accentColor, exitGate, stations, bossStation, shirtHex, hairHex, pantsHex, skinHex, showToast]);

  const completedCount = stations.filter(s => s.status === 'completed').length;
  const totalStars = Object.values(progress.completedLevels).reduce((acc, lvl) => acc + (lvl.stars || 0), 0);

  return (
    <div className="relative w-full h-[680px] sm:h-[760px] rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-[#0F111D] select-none">
      
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Projected Floating Tags Container */}
      <div ref={tagsContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* ========================================================
          TOP-LEFT HUD: MINIMAP RADAR & QUEST INFO
          ======================================================== */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-auto">
        <div className="flex items-center space-x-2.5 p-2 rounded-2xl bg-[#141724]/90 backdrop-blur-md border border-amber-400/40 shadow-xl">
          {/* Circular Radar Minimap Canvas */}
          <canvas
            ref={minimapCanvasRef}
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/50 shadow-inner"
          />

          {/* Location & Status Info */}
          <div className="flex flex-col pr-2">
            <div className="flex items-center space-x-1.5">
              <span className="text-sm sm:text-base font-black text-white">{cityName}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                {cityNumber}/{totalCities}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-400">{regionName}</span>
            <span className="text-[10px] font-bold text-amber-300/90 mt-1">
              🎯 {completedCount}/{stations.length} Misiones
            </span>
          </div>
        </div>

        {/* Back to map button */}
        <button
          onClick={onBackToMap}
          className="self-start flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 shadow-md transition-all hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
          <span>Volver al Mapa</span>
        </button>
      </div>

      {/* ========================================================
          TOP-RIGHT HUD: PLAYER STATS CAPSULE
          ======================================================== */}
      <div className="absolute top-3 right-3 flex items-center space-x-2 pointer-events-auto">
        <div className="flex items-center space-x-2.5 bg-[#141724]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-400/40 text-xs font-black shadow-xl">
          <div className="flex items-center space-x-1 text-amber-300" title="Estrellas">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{totalStars}</span>
          </div>
          <div className="h-3 w-px bg-slate-700" />
          <div className="flex items-center space-x-1 text-amber-300" title="Monedas">
            <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
            <span>{progress.stats.coins.toLocaleString()}</span>
          </div>
          <div className="h-3 w-px bg-slate-700 hidden sm:block" />
          <div className="hidden sm:flex items-center space-x-1 text-orange-400" title="Racha">
            <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            <span>{progress.stats.streak}d</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM CONTROLS & HINT BAR
          ======================================================== */}
      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
        
        {/* Mobile Touch D-Pad */}
        <div className="pointer-events-auto grid grid-cols-3 gap-1 bg-[#141724]/85 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700 sm:hidden">
          <span />
          <button
            onPointerDown={() => handleTouchKey('ArrowUp', true)}
            onPointerUp={() => handleTouchKey('ArrowUp', false)}
            className="w-10 h-10 rounded-xl bg-slate-800 active:bg-amber-500 active:text-slate-950 text-white font-black flex items-center justify-center text-sm shadow"
          >
            ▲
          </button>
          <span />
          <button
            onPointerDown={() => handleTouchKey('ArrowLeft', true)}
            onPointerUp={() => handleTouchKey('ArrowLeft', false)}
            className="w-10 h-10 rounded-xl bg-slate-800 active:bg-amber-500 active:text-slate-950 text-white font-black flex items-center justify-center text-sm shadow"
          >
            ◀
          </button>
          <button
            onPointerDown={() => handleTouchKey('ArrowDown', true)}
            onPointerUp={() => handleTouchKey('ArrowDown', false)}
            className="w-10 h-10 rounded-xl bg-slate-800 active:bg-amber-500 active:text-slate-950 text-white font-black flex items-center justify-center text-sm shadow"
          >
            ▼
          </button>
          <button
            onPointerDown={() => handleTouchKey('ArrowRight', true)}
            onPointerUp={() => handleTouchKey('ArrowRight', false)}
            className="w-10 h-10 rounded-xl bg-slate-800 active:bg-amber-500 active:text-slate-950 text-white font-black flex items-center justify-center text-sm shadow"
          >
            ▶
          </button>
        </div>

        {/* Keyboard Controls Legend (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3 px-4 py-2 rounded-2xl bg-[#141724]/90 backdrop-blur-md border border-slate-700/80 text-xs text-slate-300 pointer-events-auto shadow-xl">
          <span className="font-bold text-amber-300">Controles 3D:</span>
          <span>Camina con <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 font-mono text-[11px] text-white">W</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 font-mono text-[11px] text-white">A</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 font-mono text-[11px] text-white">S</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 font-mono text-[11px] text-white">D</kbd> o Flechas</span>
          <span>•</span>
          <span>Pulsa <kbd className="px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400 font-mono text-[11px] text-amber-300 font-bold">E</kbd> para interactuar</span>
          <span>•</span>
          <span>Arrastra con el ratón para rotar la cámara</span>
        </div>

        {/* Quest Status Pill */}
        <div className="hidden md:flex items-center space-x-2 px-3.5 py-2 rounded-2xl bg-[#141724]/90 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-200 pointer-events-auto shadow-xl">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{landmarkName || 'Plaza Mayor Histórica'}</span>
        </div>

      </div>

      {/* Toast Notification */}
      {toastText && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 rounded-2xl bg-[#1A1D2E]/95 border-2 border-amber-400 text-amber-200 font-black text-sm shadow-2xl backdrop-blur-md animate-bounceIn z-30 pointer-events-none">
          {toastText}
        </div>
      )}

    </div>
  );
};

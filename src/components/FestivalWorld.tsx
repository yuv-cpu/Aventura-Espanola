import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FESTIVAL_STALLS, FESTIVAL_CHARACTERS } from '../data/festivalData';
import { FestivalStall, FestivalCharacter } from '../types';
import { soundService } from '../services/soundService';
import { PlayerAvatar } from './PlayerAvatar';
import confetti from 'canvas-confetti';
import { Adventure3DScene, AdventureStation3D } from './Adventure3DScene';
import { 
  ArrowLeft, 
  PartyPopper, 
  Sparkles, 
  Award, 
  Coins, 
  CheckCircle2, 
  Volume2, 
  MessageCircle, 
  GraduationCap,
  Store,
  Users,
  Star,
  Check,
  X,
  MapPin,
  ChevronRight,
  Eye,
  HelpCircle,
  Flame,
  Gamepad2
} from 'lucide-react';

interface FestivalWorldProps {
  onBackToMap: () => void;
  onStartFinalAssessment: () => void;
}

export const FestivalWorld: React.FC<FestivalWorldProps> = ({
  onBackToMap,
  onStartFinalAssessment
}) => {
  const { progress, visitFestivalStall, recordDialogueCompleted } = useGame();

  // Active interactive modals
  const [activeNpc, setActiveNpc] = useState<FestivalCharacter | null>(null);
  const [npcQuizAnswer, setNpcQuizAnswer] = useState<string | null>(null);
  const [npcQuizFeedback, setNpcQuizFeedback] = useState<{ isCorrect: boolean; show: boolean }>({
    isCorrect: false,
    show: false
  });
  const [showEnglishTranslation, setShowEnglishTranslation] = useState<boolean>(false);

  // Stall Quiz modal state
  const [activeStall, setActiveStall] = useState<FestivalStall | null>(null);
  const [stallAnswer, setStallAnswer] = useState<string>('');
  const [stallFeedback, setStallFeedback] = useState<{ isCorrect: boolean; show: boolean }>({
    isCorrect: false,
    show: false
  });

  // View mode: '3d' (Three.js exploration) | 'plaza' (illustrated 2.5D square) | 'list' (detailed directory)
  const [viewMode, setViewMode] = useState<'3d' | 'plaza' | 'list'>('3d');

  // Coordinates for the 6 stalls and 14 characters in 3D
  const stallCoords: Record<string, { x: number; z: number }> = {
    'stall-tapas': { x: -14, z: 8 },
    'stall-flamenco': { x: -14, z: 0 },
    'stall-libreria': { x: -14, z: -8 },
    'stall-relojero': { x: 14, z: 8 },
    'stall-estacion': { x: 14, z: 0 },
    'stall-capitania': { x: 14, z: -8 },
  };

  const stallColors: Record<string, number> = {
    'stall-tapas': 0xc60b1e,
    'stall-flamenco': 0xe07a5f,
    'stall-libreria': 0x1d3557,
    'stall-relojero': 0x2a9d8f,
    'stall-estacion': 0xf59e0b,
    'stall-capitania': 0x0284c7,
  };

  const festival3DStations: AdventureStation3D[] = [
    // 6 Market Stalls
    ...FESTIVAL_STALLS.map(stall => {
      const visited = progress.festivalVisitedStalls.includes(stall.id);
      const pos = stallCoords[stall.id] || { x: -10, z: 0 };
      return {
        id: stall.id,
        x: pos.x,
        z: pos.z,
        label: stall.title,
        subLabel: stall.vendorName,
        status: visited ? ('completed' as const) : ('unlocked' as const),
        color: stallColors[stall.id] || 0xf59e0b,
        goodsColor: 0xffc94a,
        onInteract: () => handleOpenStall(stall)
      };
    }),
    // 14 Interactive NPCs (radial around square)
    ...FESTIVAL_CHARACTERS.map((char, idx) => {
      const chatted = progress.rewardedDialogueIds.includes(char.id);
      const angle = (idx / FESTIVAL_CHARACTERS.length) * Math.PI * 2;
      const radius = 6.8 + (idx % 2) * 2.2;
      const nx = Math.cos(angle) * radius;
      const nz = -5 + Math.sin(angle) * radius;

      return {
        id: char.id,
        x: nx,
        z: nz,
        label: `${char.name} (${char.originCity})`,
        subLabel: char.role,
        status: chatted ? ('completed' as const) : ('unlocked' as const),
        color: parseInt((char.avatarColor || '#E11D48').replace('#', ''), 16),
        goodsColor: 0x38bdf8,
        onInteract: () => handleOpenNpc(char)
      };
    })
  ];

  const examStationData = {
    label: 'Carpa Real Academia Española',
    bossName: 'Examen Oficial Acumulativo BAESP101',
    isPassed: Boolean(progress.finalAssessmentCompleted),
    allLevelsDone: true,
    onInteract: () => onStartFinalAssessment()
  };

  const playerName = progress.profile?.character?.name || progress.profile?.displayName || 'Viajero';
  const leftStalls = FESTIVAL_STALLS.filter(s => s.side === 'left');
  const rightStalls = FESTIVAL_STALLS.filter(s => s.side === 'right');
  const visitedStallsCount = progress.festivalVisitedStalls.length;
  const rewardedDialoguesCount = progress.rewardedDialogueIds.length;

  // Open NPC dialogue
  const handleOpenNpc = (npc: FestivalCharacter) => {
    setActiveNpc(npc);
    setNpcQuizAnswer(null);
    setNpcQuizFeedback({ isCorrect: false, show: false });
    setShowEnglishTranslation(false);
    soundService.speakSpanish(npc.dialogue);
  };

  // Check NPC interactive quiz answer
  const handleAnswerNpcQuiz = (option: string) => {
    if (!activeNpc?.interactiveQuestion) return;
    setNpcQuizAnswer(option);
    const correct = option === activeNpc.interactiveQuestion.correctAnswer;
    setNpcQuizFeedback({ isCorrect: correct, show: true });

    if (correct) {
      soundService.playCorrect();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
      recordDialogueCompleted(activeNpc.id);
    } else {
      soundService.playIncorrect();
    }
  };

  // Open Market Stall mini-quiz
  const handleOpenStall = (stall: FestivalStall) => {
    setActiveStall(stall);
    setStallAnswer('');
    setStallFeedback({ isCorrect: false, show: false });
    if (stall.miniQuiz.audioText) {
      soundService.speakSpanish(stall.miniQuiz.audioText);
    }
  };

  // Check Stall mini-quiz answer
  const handleCheckStallQuiz = () => {
    if (!activeStall || !stallAnswer) return;
    const q = activeStall.miniQuiz;

    let correct = false;
    if (Array.isArray(q.correctAnswer)) {
      correct = q.correctAnswer.some(a => a.toLowerCase().trim() === stallAnswer.toLowerCase().trim());
    } else {
      correct = q.correctAnswer.toLowerCase().trim() === stallAnswer.toLowerCase().trim();
    }

    setStallFeedback({ isCorrect: correct, show: true });
    if (correct) {
      soundService.playCorrect();
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.55 }
        });
      } catch {
        // Safe fallback
      }
      visitFestivalStall(activeStall.id, activeStall.rewardCoins);
    } else {
      soundService.playIncorrect();
    }
  };

  return (
    <div className="min-h-[calc(100vh-68px)] flex flex-col bg-[#120F1D] text-slate-100">
      
      {/* ========================================================
          1. FESTIVAL TOP BAR & QUICK CONTROLS
          ======================================================== */}
      <div className="bg-[#1A1528] border-b border-amber-500/30 px-4 py-2.5 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Back to map button */}
          <button
            onClick={onBackToMap}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 hover:border-amber-400/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Volver al Mapa de España</span>
          </button>

          {/* Festival Title Pill */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-400/40 text-amber-300 font-extrabold text-xs sm:text-sm glow-gold">
            <PartyPopper className="w-4 h-4 text-amber-400" />
            <span>La Gran Fiesta • Plaza Mayor de la Celebración</span>
          </div>

          {/* Progress & View Toggle */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-xs font-bold px-3 py-1 bg-slate-900/80 rounded-lg border border-slate-700 text-slate-300">
              <span className="text-amber-400">🎪 {visitedStallsCount}/6 Puestos</span>
              <span>•</span>
              <span className="text-rose-400">💬 {rewardedDialoguesCount}/14 Amigos</span>
            </div>

            <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setViewMode('3d')}
                className={`px-3 py-1 rounded-md transition-all flex items-center space-x-1 ${
                  viewMode === '3d'
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Plaza 3D</span>
              </button>
              <button
                onClick={() => setViewMode('plaza')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewMode === 'plaza'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎪 Ilustrada
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📋 Directorio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. VIEW 0: PLAYABLE 3D FESTIVAL PLAZA
          ======================================================== */}
      {viewMode === '3d' && (
        <div className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
          <Adventure3DScene
            cityName="La Gran Fiesta Española"
            cityNumber={16}
            totalCities={16}
            regionName="Plaza Mayor de la Celebración"
            accentColor="#C60B1E"
            landmarkName="Carpa de la Real Academia & Puestos"
            stations={festival3DStations}
            bossStation={examStationData}
            onBackToMap={onBackToMap}
          />
        </div>
      )}

      {/* ========================================================
          3. VIEW 1: THE ILLUSTRATED FESTIVAL PLAZA ARENA
          ======================================================== */}
      {viewMode === 'plaza' && (
        <div className="relative flex-1 w-full overflow-hidden flex flex-col justify-between select-none">
          
          {/* Main Visual Arena Container */}
          <div className="relative w-full max-w-7xl mx-auto p-4 sm:p-6 my-auto">
            
            {/* The Illustrated Plaza Card Canvas */}
            <div className="relative w-full min-h-[720px] rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl flex flex-col justify-between" style={{ backgroundImage: 'linear-gradient(180deg, rgba(21,32,52,.25), rgba(39,23,28,.3)), url(/game-art/madrid-plaza.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              
              {/* --- SKY AND FESTIVE BACKDROP --- */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Sunset twilight ambient glow */}
                <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-indigo-950/80 via-purple-900/40 to-transparent" />
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />
                <div className="absolute top-36 left-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
                <div className="absolute top-36 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

                {/* Illustrated Spanish Town Skyline Silhouettes */}
                <svg className="absolute top-0 inset-x-0 w-full h-44 opacity-25" viewBox="0 0 1200 200" preserveAspectRatio="none">
                  {/* Church bell tower in center-left */}
                  <path d="M 400,200 L 400,90 L 415,70 L 415,30 L 425,10 L 435,30 L 435,70 L 450,90 L 450,200 Z" fill="#FBBF24" />
                  {/* Cross on top of spire */}
                  <line x1="425" y1="5" x2="425" y2="15" stroke="#FBBF24" strokeWidth="2" />
                  <line x1="421" y1="8" x2="429" y2="8" stroke="#FBBF24" strokeWidth="2" />
                  {/* Cathedral dome in center-right */}
                  <path d="M 720,200 L 720,100 Q 755,40 790,100 L 790,200 Z" fill="#F59E0B" />
                  {/* Terracotta Mediterranean town roofs across the horizon */}
                  <path d="M 0,200 L 0,130 L 60,100 L 120,130 L 180,110 L 240,140 L 300,115 L 360,135 L 480,130 L 540,105 L 600,135 L 660,110 L 720,130 L 820,115 L 880,135 L 940,105 L 1000,135 L 1060,110 L 1140,135 L 1200,115 L 1200,200 Z" fill="#DEB887" />
                </svg>

                {/* Decorative Fiesta Bunting (Papel Picado strings draped across the sky) */}
                <svg className="absolute top-0 inset-x-0 w-full h-32" viewBox="0 0 1000 120" preserveAspectRatio="none">
                  {/* Top Catenary String 1 */}
                  <path d="M 0,15 Q 250,55 500,20 Q 750,55 1000,15" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  {/* Hanging festive flags on string 1 */}
                  {[
                    { x: 50, y: 22, color: '#EF4444' },
                    { x: 120, y: 32, color: '#3B82F6' },
                    { x: 190, y: 39, color: '#10B981' },
                    { x: 260, y: 40, color: '#F59E0B' },
                    { x: 330, y: 38, color: '#8B5CF6' },
                    { x: 400, y: 30, color: '#EC4899' },
                    { x: 470, y: 22, color: '#FBBF24' },
                    { x: 540, y: 24, color: '#EF4444' },
                    { x: 610, y: 32, color: '#10B981' },
                    { x: 680, y: 39, color: '#3B82F6' },
                    { x: 750, y: 40, color: '#F59E0B' },
                    { x: 820, y: 36, color: '#EC4899' },
                    { x: 890, y: 28, color: '#8B5CF6' },
                    { x: 960, y: 19, color: '#FBBF24' }
                  ].map((flag, idx) => (
                    <polygon
                      key={idx}
                      points={`${flag.x - 12},${flag.y} ${flag.x + 12},${flag.y} ${flag.x},${flag.y + 20}`}
                      fill={flag.color}
                      opacity="0.85"
                    />
                  ))}

                  {/* Hanging Glowing Lanterns */}
                  {[100, 240, 380, 520, 660, 800, 920].map((lx, idx) => (
                    <g key={idx}>
                      <line x1={lx} y1="35" x2={lx} y2="55" stroke="#FDE68A" strokeWidth="1" />
                      <circle cx={lx} cy="62" r="7" fill="#F59E0B" opacity="0.9" />
                      <circle cx={lx} cy="62" r="14" fill="#FBBF24" opacity="0.25" className="animate-pulse" />
                    </g>
                  ))}
                </svg>

                {/* Cobblestone Plaza Floor with Mediterranean Warm Paving Pattern */}
                <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#251A15] via-[#2F211A] to-transparent">
                  <div className="w-full h-full opacity-15" style={{
                    backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px), radial-gradient(#E07A5F 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px'
                  }} />
                </div>
              </div>

              {/* --- TOP BACKSTAGE: CARPA DE LA REAL ACADEMIA (ACADEMY EXAM STAGE) --- */}
              <div className="relative z-10 pt-6 px-4 text-center max-w-2xl mx-auto">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#2B1B3D]/90 via-[#231530]/90 to-[#190E24]/90 border-2 border-amber-400 shadow-2xl backdrop-blur-md space-y-2 glow-gold">
                  
                  {/* Academy Stage Ribbon */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-[11px] sm:text-xs font-black uppercase tracking-wider border border-amber-400/40">
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                    <span>Carpa de la Real Academia Española</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white font-serif tracking-tight">
                    Gran Examen Oficial Acumulativo BAESP101
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
                    Culmina tu recorrido por las 15 ciudades. Pon a prueba tus conocimientos en los 5 módulos del sílabo y consigue tu <strong>Diploma Oficial A1</strong>.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onStartFinalAssessment}
                      className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-rose-500 hover:from-amber-300 hover:to-rose-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all glow-gold"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Presentarse al Examen Oficial (30 preguntas)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* --- MIDDLE & LOWER ARENA: MARKET STALLS ON SIDES + CENTRAL PLAZA WITH NPCS --- */}
              <div className="relative z-10 flex-1 px-3 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                
                {/* LEFT MARKET STALLS (3 Stalls) */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                  <div className="text-left">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center space-x-1">
                      <Store className="w-3.5 h-3.5" />
                      <span>Puestos Tradicionales (Oeste)</span>
                    </span>
                  </div>

                  {leftStalls.map((stall) => {
                    const visited = progress.festivalVisitedStalls.includes(stall.id);
                    return (
                      <div
                        key={stall.id}
                        onClick={() => handleOpenStall(stall)}
                        className={`group relative p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left shadow-lg hover:scale-102 active:scale-98 ${
                          visited
                            ? 'bg-[#182333]/90 border-emerald-500/70 hover:border-emerald-400'
                            : 'bg-[#22182D]/90 border-amber-400/40 hover:border-amber-400 hover:bg-[#2A1D38]'
                        }`}
                      >
                        {/* Decorative Striped Canopy Roof on top of stall card */}
                        <div 
                          className="h-2 rounded-t-lg -mx-3 -mt-3 mb-2 opacity-90"
                          style={{
                            background: `repeating-linear-gradient(90deg, ${stall.canopyColor || '#C60B1E'}, ${stall.canopyColor || '#C60B1E'} 12px, #FFF 12px, #FFF 24px)`
                          }}
                        />

                        <div className="flex items-start justify-between gap-1 mb-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl filter drop-shadow">{stall.icon || '🎪'}</span>
                            <span className="text-xs font-black text-amber-300 truncate">
                              {stall.title}
                            </span>
                          </div>
                          {visited && (
                            <span className="shrink-0 text-[10px] text-emerald-400 font-extrabold flex items-center space-x-0.5 bg-emerald-950/60 px-1.5 py-0.5 rounded-full border border-emerald-500/40">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Hecho</span>
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-300 line-clamp-1">
                          {stall.vendorName} • {stall.specialty}
                        </p>

                        <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-700/60">
                          <span className="text-amber-300 font-bold flex items-center space-x-1">
                            <Coins className="w-3 h-3 text-amber-400" />
                            <span>+{stall.rewardCoins} monedas</span>
                          </span>
                          <span className="text-slate-400 group-hover:text-amber-300 font-bold transition-colors">
                            Reto cultural →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CENTRAL PLAZA SQUARE (Fountain + Visible Player Avatar + Stationed NPCs) */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center py-4 relative min-h-[380px]">
                  
                  {/* Central Decorative Stone Fountain */}
                  <div className="relative flex flex-col items-center mb-6">
                    {/* Fountain Water Spray animation */}
                    <div className="w-20 h-20 rounded-full border-4 border-sky-400/40 bg-gradient-to-b from-sky-400/20 to-sky-600/30 flex items-center justify-center shadow-lg relative">
                      <div className="w-12 h-12 rounded-full border-2 border-amber-300/60 bg-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl filter drop-shadow animate-bounce">⛲</span>
                      </div>
                      {/* Water ripple ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-sky-300/30 animate-ping pointer-events-none" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300/80 mt-1">
                      Fuente de los Viajeros
                    </span>
                  </div>

                  {/* Player's Avatar In the Plaza Center */}
                  <div className="flex flex-col items-center relative z-20 mb-6">
                    {/* Speech bubble above player */}
                    <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-xs shadow-md border border-white mb-2 animate-bounce">
                      <span>¡{playerName} en la fiesta!</span>
                    </div>

                    <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-yellow-400 shadow-xl glow-gold">
                      <PlayerAvatar character={progress.profile?.character} size={58} />
                    </div>
                  </div>

                  {/* Stationed NPC Tokens Grid across the Plaza */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2 px-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-rose-300 flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Amigos de las 15 Ciudades en la Plaza (Toca para charlar)</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">
                        {rewardedDialoguesCount}/14 Charlados (+250 🟡)
                      </span>
                    </div>

                    {/* NPC tokens distributed across the square */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                      {FESTIVAL_CHARACTERS.map((npc) => {
                        const chatted = progress.rewardedDialogueIds.includes(npc.id);
                        return (
                          <button
                            key={npc.id}
                            onClick={() => handleOpenNpc(npc)}
                            className={`group flex flex-col items-center p-2 rounded-2xl border transition-all text-center focus:outline-none hover:scale-110 active:scale-95 shadow-md ${
                              chatted
                                ? 'bg-[#1E273A]/90 border-emerald-500/60'
                                : 'bg-[#251A31]/90 border-amber-400/40 hover:border-amber-400 hover:bg-[#311E44]'
                            }`}
                            title={`Hablar con ${npc.name} (${npc.originCity})`}
                          >
                            <div className="relative">
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md border-2 border-white/80 group-hover:scale-105 transition-transform"
                                style={{ backgroundColor: npc.avatarColor || '#E11D48' }}
                              >
                                {npc.avatar}
                              </div>

                              {/* Completed star badge or chat bubble */}
                              {chatted ? (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-black shadow">
                                  ✓
                                </span>
                              ) : (
                                <span className="absolute -top-1 -right-1 px-1 bg-amber-400 text-slate-950 rounded-full text-[9px] font-black animate-pulse shadow">
                                  💬
                                </span>
                              )}
                            </div>

                            <span className="text-[11px] font-black text-white mt-1 group-hover:text-amber-300 truncate max-w-[65px]">
                              {npc.name}
                            </span>
                            <span className="text-[9px] text-amber-300 font-bold truncate max-w-[65px]">
                              {npc.originCity}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* RIGHT MARKET STALLS (3 Stalls) */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                  <div className="text-left">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center space-x-1">
                      <Store className="w-3.5 h-3.5" />
                      <span>Puestos Tradicionales (Este)</span>
                    </span>
                  </div>

                  {rightStalls.map((stall) => {
                    const visited = progress.festivalVisitedStalls.includes(stall.id);
                    return (
                      <div
                        key={stall.id}
                        onClick={() => handleOpenStall(stall)}
                        className={`group relative p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left shadow-lg hover:scale-102 active:scale-98 ${
                          visited
                            ? 'bg-[#182333]/90 border-emerald-500/70 hover:border-emerald-400'
                            : 'bg-[#22182D]/90 border-purple-400/40 hover:border-purple-400 hover:bg-[#2A1D38]'
                        }`}
                      >
                        {/* Decorative Striped Canopy Roof on top of stall card */}
                        <div 
                          className="h-2 rounded-t-lg -mx-3 -mt-3 mb-2 opacity-90"
                          style={{
                            background: `repeating-linear-gradient(90deg, ${stall.canopyColor || '#2A9D8F'}, ${stall.canopyColor || '#2A9D8F'} 12px, #FFF 12px, #FFF 24px)`
                          }}
                        />

                        <div className="flex items-start justify-between gap-1 mb-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl filter drop-shadow">{stall.icon || '🎪'}</span>
                            <span className="text-xs font-black text-purple-200 truncate">
                              {stall.title}
                            </span>
                          </div>
                          {visited && (
                            <span className="shrink-0 text-[10px] text-emerald-400 font-extrabold flex items-center space-x-0.5 bg-emerald-950/60 px-1.5 py-0.5 rounded-full border border-emerald-500/40">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Hecho</span>
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-300 line-clamp-1">
                          {stall.vendorName} • {stall.specialty}
                        </p>

                        <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-700/60">
                          <span className="text-amber-300 font-bold flex items-center space-x-1">
                            <Coins className="w-3 h-3 text-amber-400" />
                            <span>+{stall.rewardCoins} monedas</span>
                          </span>
                          <span className="text-slate-400 group-hover:text-purple-300 font-bold transition-colors">
                            Reto cultural →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Plaza Promenade Footnote */}
              <div className="relative z-10 px-4 py-2 border-t border-amber-500/20 bg-[#140E22]/80 backdrop-blur-sm text-center text-[11px] text-amber-200/80">
                <span>🌟 Explora los puestos de ambos lados de la plaza, conversa con cada amigo para ganar monedas y pulsa en la Carpa para el Examen Oficial.</span>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. VIEW 2: ACCESSIBLE DETAILED DIRECTORY LIST
          ======================================================== */}
      {viewMode === 'list' && (
        <div className="flex-1 max-w-7xl mx-auto p-4 sm:p-6 w-full space-y-6">
          
          {/* Academy Stage Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2F1522] via-[#2A1E38] to-[#1B2640] border-2 border-amber-400 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                Examen Oficial Acumulativo
              </span>
              <h2 className="text-2xl font-black text-white font-serif">
                Real Academia Española • Nivel A1
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                30 preguntas que cubren los 5 módulos del sílabo oficial BAESP101. Genera Diploma Oficial.
              </p>
            </div>
            <button
              onClick={onStartFinalAssessment}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-black text-sm shadow-xl hover:scale-105 transition-all shrink-0 glow-gold"
            >
              Comenzar Examen Oficial
            </button>
          </div>

          {/* Stalls Grid */}
          <div className="space-y-3">
            <h3 className="text-lg font-black text-white flex items-center space-x-2">
              <Store className="w-5 h-5 text-amber-400" />
              <span>Puestos y Pabellones de la Feria (6 en total)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FESTIVAL_STALLS.map((stall) => {
                const visited = progress.festivalVisitedStalls.includes(stall.id);
                return (
                  <div
                    key={stall.id}
                    onClick={() => handleOpenStall(stall)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      visited
                        ? 'bg-[#182333] border-emerald-500/60'
                        : 'bg-[#1C1F32] hover:bg-[#252942] border-slate-700 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl">{stall.icon || '🎪'}</span>
                      {visited ? (
                        <span className="text-xs text-emerald-400 font-bold flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Completado</span>
                        </span>
                      ) : (
                        <span className="text-xs text-amber-400 font-bold">+{stall.rewardCoins} 🟡</span>
                      )}
                    </div>
                    <h4 className="text-sm font-black text-white mt-1">{stall.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{stall.description}</p>
                    <div className="mt-3 text-xs text-amber-300 font-bold flex items-center justify-between">
                      <span>{stall.vendorName}</span>
                      <span>Probar reto →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Characters Grid */}
          <div className="space-y-3">
            <h3 className="text-lg font-black text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-rose-400" />
              <span>Personajes de las 15 Ciudades (14 amigos)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FESTIVAL_CHARACTERS.map((char) => {
                const chatted = progress.rewardedDialogueIds.includes(char.id);
                return (
                  <div
                    key={char.id}
                    onClick={() => handleOpenNpc(char)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      chatted
                        ? 'bg-[#182333] border-emerald-500/60'
                        : 'bg-[#1C1F32] hover:bg-[#252942] border-slate-700 hover:border-rose-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow"
                        style={{ backgroundColor: char.avatarColor || '#E11D48' }}
                      >
                        {char.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">{char.name}</h4>
                        <p className="text-xs text-amber-300 font-bold">{char.originCity} • {char.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic line-clamp-2">"{char.dialogue}"</p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-700/60">
                      <span className="text-slate-400">Sabiduría de {char.originCity}</span>
                      {chatted ? (
                        <span className="text-emerald-400 font-bold">✓ Charlado</span>
                      ) : (
                        <span className="text-amber-300 font-bold">Charlar (+250 🟡) →</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================
          4. INTERACTIVE NPC DIALOGUE MODAL
          ======================================================== */}
      {activeNpc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#181C2E] border-2 border-amber-400 rounded-3xl shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            
            {/* Header: NPC Profile */}
            <div className="flex items-start justify-between border-b border-slate-700/80 pb-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 border-amber-300 shrink-0"
                  style={{ backgroundColor: activeNpc.avatarColor || '#E11D48' }}
                >
                  {activeNpc.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-black text-white">{activeNpc.name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black border border-amber-400/40">
                      {activeNpc.originCity}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400">{activeNpc.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => soundService.speakSpanish(activeNpc.dialogue)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 transition-colors"
                  title="Escuchar saludo"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveNpc(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Speech Bubble: Spanish Dialogue */}
            <div className="p-4 rounded-2xl bg-[#0F111D] border border-amber-400/30 text-slate-100 text-sm font-medium leading-relaxed relative">
              <div className="absolute -top-2 left-6 px-1.5 bg-[#181C2E] text-[10px] font-black text-amber-300 uppercase tracking-wider">
                Saludo en Español
              </div>
              "{activeNpc.dialogue}"
            </div>

            {/* English translation toggle */}
            <div>
              <button
                onClick={() => setShowEnglishTranslation(!showEnglishTranslation)}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showEnglishTranslation ? 'Ocultar traducción al inglés' : 'Ver traducción al inglés'}</span>
              </button>
              {showEnglishTranslation && (
                <div className="mt-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 italic animate-fadeIn">
                  "{activeNpc.englishDialogue}"
                </div>
              )}
            </div>

            {/* Cultural Wisdom / Trivia */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
              <span className="font-black text-amber-300 block mb-0.5">
                💡 Sabiduría de {activeNpc.originCity}:
              </span>
              <p>{activeNpc.trivia}</p>
            </div>

            {/* Interactive Conversational Question */}
            {activeNpc.interactiveQuestion && (
              <div className="p-4 rounded-2xl bg-[#141726] border border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-300 flex items-center space-x-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pregunta de Conversación</span>
                  </span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-full">
                    +250 monedas
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-white">
                  {activeNpc.interactiveQuestion.prompt}
                </p>

                {/* 3 Selectable Answers */}
                <div className="space-y-2">
                  {activeNpc.interactiveQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={npcQuizFeedback.show && npcQuizFeedback.isCorrect}
                      onClick={() => handleAnswerNpcQuiz(option)}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
                        npcQuizAnswer === option
                          ? npcQuizFeedback.isCorrect
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                            : 'bg-rose-950/60 border-rose-500 text-rose-200'
                          : 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200 hover:border-amber-400/60'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Question Feedback */}
                {npcQuizFeedback.show && (
                  <div className={`p-3 rounded-xl border text-xs animate-fadeIn ${
                    npcQuizFeedback.isCorrect
                      ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
                      : 'bg-rose-950/50 border-rose-500 text-rose-200'
                  }`}>
                    <p className="font-black text-sm">
                      {npcQuizFeedback.isCorrect 
                        ? activeNpc.interactiveQuestion.reactionCorrect 
                        : activeNpc.interactiveQuestion.reactionIncorrect}
                    </p>
                    <p className="mt-1 text-slate-300">{activeNpc.interactiveQuestion.explanation}</p>
                    {npcQuizFeedback.isCorrect && (
                      <p className="mt-1 font-bold text-amber-300">
                        ⭐ ¡Has ganado +250 monedas por conversar con {activeNpc.name}!
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-end pt-2 border-t border-slate-700">
              <button
                onClick={() => setActiveNpc(null)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow transition-all"
              >
                ¡Hasta luego, {activeNpc.name}!
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================
          5. INTERACTIVE MARKET STALL QUIZ MODAL
          ======================================================== */}
      {activeStall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#181C2E] border-2 border-amber-400 rounded-3xl shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            
            {/* Header: Stall title & canopy stripe */}
            <div>
              <div 
                className="h-2.5 rounded-t-xl -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-3 opacity-90"
                style={{
                  background: `repeating-linear-gradient(90deg, ${activeStall.canopyColor || '#C60B1E'}, ${activeStall.canopyColor || '#C60B1E'} 16px, #FFF 16px, #FFF 32px)`
                }}
              />
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{activeStall.icon || '🎪'}</span>
                    <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                      {activeStall.spanishTitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white">{activeStall.title}</h3>
                  <p className="text-xs font-semibold text-slate-400">{activeStall.vendorName}</p>
                </div>
                <button
                  onClick={() => setActiveStall(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Specialty & prompt */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200">
              <span className="font-black text-amber-300 block mb-0.5">Especialidad del puesto:</span>
              <p>{activeStall.specialty}</p>
            </div>

            {/* Mini Quiz Area */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                  Reto del Puesto
                </span>
                {activeStall.miniQuiz.audioText && (
                  <button
                    onClick={() => soundService.speakSpanish(activeStall.miniQuiz.audioText!)}
                    className="p-1.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors"
                    title="Escuchar pista"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <p className="text-sm sm:text-base font-bold text-white">
                {activeStall.miniQuiz.prompt}
              </p>

              {activeStall.miniQuiz.options ? (
                <div className="space-y-2">
                  {activeStall.miniQuiz.options.map((opt, i) => (
                    <button
                      key={i}
                      disabled={stallFeedback.show && stallFeedback.isCorrect}
                      onClick={() => setStallAnswer(opt)}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
                        stallAnswer === opt
                          ? 'bg-amber-500/20 border-amber-400 text-white'
                          : 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  disabled={stallFeedback.show && stallFeedback.isCorrect}
                  value={stallAnswer}
                  onChange={e => setStallAnswer(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 font-medium"
                />
              )}

              {stallFeedback.show && (
                <div className={`p-3.5 rounded-xl border text-xs animate-fadeIn ${
                  stallFeedback.isCorrect
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/50 border-rose-500 text-rose-200'
                }`}>
                  <p className="font-black text-sm">
                    {stallFeedback.isCorrect 
                      ? `¡Excelente! Has ganado +${activeStall.rewardCoins} monedas y la insignia "${activeStall.rewardBadge}".` 
                      : 'Incorrecto. Vuelve a intentarlo.'}
                  </p>
                  <p className="mt-1 text-slate-300">{activeStall.miniQuiz.explanation}</p>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-2 pt-2 border-t border-slate-700">
              <button
                onClick={handleCheckStallQuiz}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow transition-all"
              >
                Comprobar Respuesta
              </button>
              {stallFeedback.isCorrect && (
                <button
                  onClick={() => setActiveStall(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow transition-all"
                >
                  Continuar
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

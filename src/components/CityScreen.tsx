import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { City, Level, DifficultyTier } from '../types';
import { LevelDetailsModal } from './LevelDetailsModal';
import { Adventure3DScene, AdventureStation3D } from './Adventure3DScene';
import { getNextCity } from '../data/citiesData';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  Lock, 
  Sparkles, 
  ShieldAlert, 
  Play, 
  Trophy, 
  BookOpen, 
  ChevronRight,
  Flame,
  Route,
  LayoutGrid,
  Gamepad2
} from 'lucide-react';

interface CityScreenProps {
  city: City;
  onBackToMap: () => void;
  onOpenLevel: (levelId: string) => void;
  onOpenBoss: () => void;
}

export const CityScreen: React.FC<CityScreenProps> = ({
  city,
  onBackToMap,
  onOpenLevel,
  onOpenBoss
}) => {
  const { progress } = useGame();
  const [selectedLevelForPreview, setSelectedLevelForPreview] = useState<Level | null>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'path' | 'grid'>('3d');

  const getTierBadge = (tier: DifficultyTier) => {
    switch (tier) {
      case 'easy':
        return { label: 'Fácil (Easy)', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' };
      case 'medium':
        return { label: 'Medio (Medium)', color: 'bg-sky-500/20 text-sky-300 border-sky-500/40' };
      case 'tough':
        return { label: 'Exigente (Tough)', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' };
      case 'hard':
        return { label: 'Difícil (Hard)', color: 'bg-orange-500/20 text-orange-300 border-orange-500/40' };
      case 'hot':
        return { label: 'Candente (Hot)', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40' };
    }
  };

  const bossRecord = progress.completedBosses[city.id];
  const isBossPassed = Boolean(bossRecord?.passed);
  const completedLevels = city.levels.filter(l => Boolean(progress.completedLevels[l.id]));
  const allLevelsDone = completedLevels.length === 10;

  // Group levels into the 5 tiers (2 levels per tier)
  const tiersOrder: DifficultyTier[] = ['easy', 'medium', 'tough', 'hard', 'hot'];

  // Check if a level is unlocked (sequential progression: level 1 is always unlocked; level N is unlocked if level N-1 is completed)
  const isLevelUnlocked = (levelIndex: number): boolean => {
    if (levelIndex === 0) return true;
    const prevLevel = city.levels[levelIndex - 1];
    return Boolean(progress.completedLevels[prevLevel.id]);
  };

  // 3D Adventure Stalls Layout (positions matching the square)
  const STALL_POSITIONS = [
    { x: -8, z: 8 },
    { x: 8, z: 8 },
    { x: -14, z: 2 },
    { x: -14, z: -6 },
    { x: -8, z: -14 },
    { x: 8, z: -14 },
    { x: 14, z: -6 },
    { x: 14, z: 2 },
    { x: -4, z: 12 },
    { x: 4, z: 12 },
  ];

  const TIER_COLORS: Record<DifficultyTier, number> = {
    easy: 0x10b981,
    medium: 0x38bdf8,
    tough: 0xf59e0b,
    hard: 0xf97316,
    hot: 0xf43f5e
  };

  const stations3D: AdventureStation3D[] = city.levels.map((lvl, idx) => {
    const isCompleted = Boolean(progress.completedLevels[lvl.id]);
    const isUnlocked = isLevelUnlocked(idx);
    const pos = STALL_POSITIONS[idx] || { x: 0, z: 0 };

    return {
      id: lvl.id,
      x: pos.x,
      z: pos.z,
      label: `Nivel ${lvl.levelNumber}: ${lvl.title}`,
      subLabel: lvl.subtitle,
      status: isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked',
      color: TIER_COLORS[lvl.tier] || 0xf59e0b,
      goodsColor: 0xffc94a,
      onInteract: () => {
        if (isUnlocked) {
          setSelectedLevelForPreview(lvl);
        }
      }
    };
  });

  const nextCity = getNextCity(city.id);
  const exitGateData = {
    targetCityName: nextCity?.name || 'La Gran Fiesta',
    isUnlocked: isBossPassed || allLevelsDone,
    onWalkThrough: () => {
      onBackToMap();
    }
  };

  const bossStationData = city.bossMission ? {
    label: city.bossMission.title,
    bossName: city.bossMission.characterName,
    isPassed: isBossPassed,
    allLevelsDone,
    onInteract: () => {
      onOpenBoss();
    }
  } : undefined;

  return (
    <div className="min-h-[calc(100vh-68px)] p-4 sm:p-6 max-w-6xl mx-auto flex flex-col gap-6">
      {/* Back button and breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToMap}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-fiesta-card hover:bg-slate-700 text-slate-200 text-sm font-medium border border-fiesta-border transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Mapa de España</span>
        </button>

        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            <span>{city.region}</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{city.moduleName}</span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                viewMode === '3d'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Aventura 3D</span>
            </button>
            <button
              onClick={() => setViewMode('path')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'path'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Route className="w-3.5 h-3.5" />
              <span>Ruta</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Sílabo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Atmospheric City Header Card (Panel 6 Style) */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-amber-200 shadow-2xl p-6 sm:p-8" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,37,53,.88), rgba(15,37,53,.55) 60%, rgba(15,37,53,.18)), url(/game-art/madrid-plaza.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Decorative architectural silhouettes */}
        <div 
          className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: city.accentColor }}
        />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            {/* City Tag Ribbon */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3">
              <span>Ciudad {city.number} de 15</span>
              <span>•</span>
              <span>{city.landmark}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
              {city.name}
            </h1>
            <p className="text-amber-300 font-semibold text-sm mt-1">
              {city.number === 1 ? 'Ciudad de los Comienzos (City of Beginnings)' : `Región: ${city.region}`}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
              {city.description}
            </p>
          </div>

          {/* Quick city progress summary badge */}
          <div className="bg-[#121422]/95 border-2 border-fiesta-border rounded-2xl p-4 flex flex-col items-center justify-center min-w-[210px] text-center shrink-0 shadow-xl">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
              Progreso en {city.name}
            </span>
            <div className="text-3xl font-black text-amber-400">
              {completedLevels.length} / 10
            </div>
            <span className="text-xs text-slate-400">Niveles Superados</span>

            <div className="w-full bg-slate-800 h-2.5 rounded-full mt-3 overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500 rounded-full"
                style={{ width: `${(completedLevels.length / 10) * 100}%` }}
              />
            </div>

            <div className="mt-3 text-xs font-bold flex items-center space-x-1">
              {isBossPassed ? (
                <span className="text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Jefe Superado ({bossRecord?.scorePercent}%)</span>
                </span>
              ) : (
                <span className="text-amber-400 flex items-center space-x-1">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Jefe Pendiente (80% req.)</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* VIEW MODE 0: Playable 3D Town Adventure (Real-time Third-Person Exploration) */}
      {viewMode === '3d' && (
        <Adventure3DScene
          cityName={city.name}
          cityNumber={city.number}
          totalCities={15}
          regionName={city.region}
          accentColor={city.accentColor}
          moduleName={city.moduleName}
          landmarkName={city.landmark}
          stations={stations3D}
          bossStation={bossStationData}
          exitGate={exitGateData}
          onBackToMap={onBackToMap}
        />
      )}

      {/* VIEW MODE 1: Interactive Winding Adventure Path (Matching Panel 6) */}
      {viewMode === 'path' && (
        <div className="relative rounded-3xl bg-[#141829] border-2 border-fiesta-border p-6 sm:p-8 shadow-2xl overflow-hidden">
          {/* Cobblestone road background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Path Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 relative z-10">
            <div>
              <h2 className="text-xl font-black text-white flex items-center space-x-2">
                <Route className="w-5 h-5 text-amber-400" />
                <span>Ruta de Aventura de {city.name}</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Avanza nodo a nodo completando misiones para desbloquear el reto final del jefe.
              </p>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span>Superado</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse inline-block" />
                <span>Disponible</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                <span>Bloqueado</span>
              </span>
            </div>
          </div>

          {/* Winding Adventure Road Layout (Two Rows connected like Panel 6) */}
          <div className="relative z-10 space-y-12 my-4">
            {/* ROW 1: Levels 1 to 5 */}
            <div className="relative">
              {/* Connector line behind row 1 */}
              <div className="absolute top-1/2 left-8 right-8 h-2 -translate-y-1/2 bg-slate-800 rounded-full z-0 hidden md:block" />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 relative z-10">
                {city.levels.slice(0, 5).map((level, idx) => {
                  const record = progress.completedLevels[level.id];
                  const isDone = Boolean(record);
                  const isUnlocked = isLevelUnlocked(idx);
                  const stars = record ? record.stars : 0;
                  const isCurrent = isUnlocked && !isDone;

                  return (
                    <div key={level.id} className="flex flex-col items-center text-center">
                      <button
                        disabled={!isUnlocked}
                        onClick={() => setSelectedLevelForPreview(level)}
                        className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-black transition-all duration-300 shadow-xl border-4 ${
                          isDone
                            ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 border-emerald-300 text-white shadow-emerald-500/30 hover:scale-110'
                            : isCurrent
                            ? 'bg-gradient-to-tr from-amber-400 to-orange-500 border-amber-200 text-slate-950 shadow-amber-500/50 glow-gold hover:scale-110 animate-bounce'
                            : 'bg-slate-800/90 border-slate-700 text-slate-500 cursor-not-allowed opacity-60'
                        }`}
                      >
                        {isDone ? (
                          <span className="text-xl sm:text-2xl font-black">{level.levelNumber}</span>
                        ) : isUnlocked ? (
                          <span className="text-xl sm:text-2xl font-black">{level.levelNumber}</span>
                        ) : (
                          <Lock className="w-6 h-6 text-slate-500" />
                        )}
                      </button>

                      {/* Stars earned under node */}
                      <div className="flex items-center space-x-1 mt-2 h-4">
                        {[1, 2, 3].map((starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-3.5 h-3.5 ${
                              stars >= starIdx 
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-slate-700'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Level title label */}
                      <span className="text-xs font-bold text-white mt-1 max-w-[110px] truncate">
                        {level.title}
                      </span>
                      <span className="text-[10px] text-amber-300/80 font-medium uppercase">
                        {level.tier}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ROW 2: Levels 6 to 10 + Boss Node */}
            <div className="relative">
              {/* Connector line behind row 2 */}
              <div className="absolute top-1/2 left-8 right-8 h-2 -translate-y-1/2 bg-slate-800 rounded-full z-0 hidden md:block" />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-4 relative z-10">
                {city.levels.slice(5, 10).map((level, idx) => {
                  const actualIdx = idx + 5;
                  const record = progress.completedLevels[level.id];
                  const isDone = Boolean(record);
                  const isUnlocked = isLevelUnlocked(actualIdx);
                  const stars = record ? record.stars : 0;
                  const isCurrent = isUnlocked && !isDone;

                  return (
                    <div key={level.id} className="flex flex-col items-center text-center">
                      <button
                        disabled={!isUnlocked}
                        onClick={() => setSelectedLevelForPreview(level)}
                        className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-black transition-all duration-300 shadow-xl border-4 ${
                          isDone
                            ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 border-emerald-300 text-white shadow-emerald-500/30 hover:scale-110'
                            : isCurrent
                            ? 'bg-gradient-to-tr from-amber-400 to-orange-500 border-amber-200 text-slate-950 shadow-amber-500/50 glow-gold hover:scale-110 animate-bounce'
                            : 'bg-slate-800/90 border-slate-700 text-slate-500 cursor-not-allowed opacity-60'
                        }`}
                      >
                        {isDone ? (
                          <span className="text-xl sm:text-2xl font-black">{level.levelNumber}</span>
                        ) : isUnlocked ? (
                          <span className="text-xl sm:text-2xl font-black">{level.levelNumber}</span>
                        ) : (
                          <Lock className="w-6 h-6 text-slate-500" />
                        )}
                      </button>

                      {/* Stars earned under node */}
                      <div className="flex items-center space-x-1 mt-2 h-4">
                        {[1, 2, 3].map((starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-3.5 h-3.5 ${
                              stars >= starIdx 
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-slate-700'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Level title label */}
                      <span className="text-xs font-bold text-white mt-1 max-w-[110px] truncate">
                        {level.title}
                      </span>
                      <span className="text-[10px] text-amber-300/80 font-medium uppercase">
                        {level.tier}
                      </span>
                    </div>
                  );
                })}

                {/* Final Node: The City Boss! */}
                <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
                  <button
                    onClick={onOpenBoss}
                    className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-black transition-all duration-300 shadow-2xl border-4 ${
                      isBossPassed
                        ? 'bg-gradient-to-tr from-purple-600 to-pink-600 border-amber-300 text-white hover:scale-110 shadow-purple-500/50'
                        : allLevelsDone
                        ? 'bg-gradient-to-tr from-fiesta-red to-rose-600 border-amber-300 text-white glow-red hover:scale-110 animate-pulse'
                        : 'bg-gradient-to-tr from-[#2D1B22] to-[#1C1828] border-rose-900/60 text-rose-300/80 hover:scale-105'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl">{city.bossMission.badgeIcon}</span>
                  </button>

                  <div className="flex items-center space-x-1 mt-2 h-4">
                    <span className="text-[11px] font-extrabold text-amber-400">
                      {isBossPassed ? '¡SUPERADO!' : 'RETO FINAL'}
                    </span>
                  </div>

                  <span className="text-xs font-black text-white mt-1 max-w-[110px] truncate">
                    Misión de Jefe
                  </span>
                  <span className="text-[10px] text-rose-400 font-bold uppercase">
                    Umbral: 80%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: Curriculum Grid (5 Tiers Breakdown) */}
      {viewMode === 'grid' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Niveles Curriculares por Dificultad (BAESP101)</span>
            </h2>
            <span className="text-xs text-slate-400">
              5 Dificultades • 2 Niveles por Nivel
            </span>
          </div>

          {tiersOrder.map(tier => {
            const tierLevels = city.levels.filter(l => l.tier === tier);
            const badge = getTierBadge(tier);

            return (
              <div 
                key={tier}
                className="p-5 rounded-2xl bg-[#141724] border border-fiesta-border/70 shadow-lg space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {tierLevels.filter(l => Boolean(progress.completedLevels[l.id])).length} / 2 completados
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tierLevels.map(level => {
                    const record = progress.completedLevels[level.id];
                    const isCompleted = Boolean(record);

                    return (
                      <div
                        key={level.id}
                        onClick={() => setSelectedLevelForPreview(level)}
                        className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between cursor-pointer group hover:scale-[1.01] ${
                          isCompleted
                            ? 'bg-[#1C2033] hover:bg-[#252A44] border-emerald-500/40 shadow-sm'
                            : 'bg-[#181B2B] hover:bg-[#22263C] border-slate-700 shadow-md'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-slate-400">
                              Nivel {level.levelNumber}
                            </span>
                            <div className="flex items-center space-x-1 text-amber-400">
                              {[1, 2, 3].map(starIndex => (
                                <Star
                                  key={starIndex}
                                  className={`w-3.5 h-3.5 ${
                                    record && record.stars >= starIndex
                                      ? 'fill-amber-400 text-amber-400'
                                      : 'text-slate-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <h3 className="text-base font-bold text-white group-hover:text-fiesta-yellow transition-colors">
                            {level.title}
                          </h3>
                          <p className="text-xs text-slate-300 mt-0.5">
                            {level.subtitle}
                          </p>
                          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                            {level.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="text-sky-300/90 font-medium">
                            +{level.xpReward} XP • +{level.coinReward} monedas
                          </span>
                          <div className="flex items-center space-x-1 font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                            <span>{isCompleted ? 'Repasar' : 'Comenzar'}</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Boss Mission Encounter Banner Gate */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B1B1E] via-[#2A1E30] to-[#1B1F38] border-2 border-fiesta-red/60 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-bold mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Misión de Jefe de la Ciudad • Umbral de Maestría: 80%</span>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">{city.bossMission.badgeIcon}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {city.bossMission.title}
              </h3>
            </div>
            <p className="text-sm font-semibold text-amber-300 mb-2">
              Personaje: {city.bossMission.characterName} ({city.bossMission.characterRole})
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {city.bossMission.scenario}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-200">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 font-bold">
                +{city.bossMission.coinReward} monedas de bonificación
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-500/30 font-bold">
                +{city.bossMission.xpReward} XP
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 font-bold">
                Trofeo: {city.bossMission.badgeName}
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="flex flex-col items-center justify-center shrink-0 min-w-[200px]">
            <button
              onClick={onOpenBoss}
              className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center space-x-2 border-2 ${
                isBossPassed
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/50 shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-fiesta-red to-amber-600 hover:from-red-600 hover:to-amber-500 text-white border-amber-400/50 shadow-rose-600/30 glow-gold'
              }`}
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{isBossPassed ? 'Reintentar Desafío' : 'Afrontar Desafío del Jefe'}</span>
            </button>
            <p className="text-[11px] text-slate-400 mt-2 text-center">
              {isBossPassed 
                ? `Superado con éxito (${bossRecord?.scorePercent}%). Próxima ciudad desbloqueada.` 
                : 'Se requiere un mínimo de 80% para desbloquear la siguiente ciudad.'}
            </p>
          </div>
        </div>
      </div>

      {/* Level Details Modal (Screen 7 Preview) */}
      {selectedLevelForPreview && (
        <LevelDetailsModal
          level={selectedLevelForPreview}
          cityName={city.name}
          onClose={() => setSelectedLevelForPreview(null)}
          onStartLevel={() => {
            const lvlId = selectedLevelForPreview.id;
            setSelectedLevelForPreview(null);
            onOpenLevel(lvlId);
          }}
        />
      )}
    </div>
  );
};

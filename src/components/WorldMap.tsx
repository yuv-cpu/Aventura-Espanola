import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ALL_CITIES } from '../data/citiesData';
import { City } from '../types';
import { 
  Lock, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Trophy, 
  ChevronRight, 
  Sparkles, 
  PartyPopper,
  Compass,
  ArrowRight
} from 'lucide-react';

interface WorldMapProps {
  onSelectCity: (cityId: string) => void;
  onOpenFestival: () => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({ onSelectCity, onOpenFestival }) => {
  const { progress } = useGame();
  const [selectedCityInfo, setSelectedCityInfo] = useState<City | null>(null);

  const getCityStatus = (cityId: string) => {
    const isUnlocked = progress.unlockedCityIds.includes(cityId);
    const bossCompleted = Boolean(progress.completedBosses[cityId]?.passed);
    const city = ALL_CITIES.find(c => c.id === cityId);
    let completedLevelsCount = 0;
    if (city) {
      completedLevelsCount = city.levels.filter(l => Boolean(progress.completedLevels[l.id])).length;
    }
    return { isUnlocked, bossCompleted, completedLevelsCount };
  };

  const all15BossesCompleted = ALL_CITIES.every(c => Boolean(progress.completedBosses[c.id]?.passed));

  // Module badge colors
  const getModuleBadgeColor = (moduleIndex: number) => {
    switch (moduleIndex) {
      case 1: return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 2: return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      case 3: return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 4: return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 5: return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      default: return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <div className="min-h-[calc(100vh-68px)] p-4 sm:p-6 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Intro banner */}
      <div className="world-intro relative overflow-hidden rounded-2xl border-2 border-amber-300 p-5 sm:p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#102b43]/90 via-[#102b43]/65 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-fiesta-red/20 border border-fiesta-red/40 text-rose-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Itinerario Pedagógico BAESP101 • 15 Ciudades + La Gran Fiesta</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
            Mapa del Viajero por España
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Inicia tu ruta en <strong>Madrid</strong>. Supera los 10 niveles y la misión de jefe de cada ciudad para desbloquear la siguiente región. Cuando domines las 15 ciudades, se abrirán las puertas doradas de <strong>La Gran Fiesta</strong>.
          </p>
        </div>
      </div>

      {/* Main Map & Cities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Map Visualization */}
        <div className="lg:col-span-2 rounded-2xl bg-[#141724] border border-fiesta-border p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-fiesta-yellow" />
              <span>Ruta de la Península Ibérica</span>
            </h2>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span>Superada</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
                <span>Activa</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                <span>Bloqueada</span>
              </span>
            </div>
          </div>

          {/* Stylized SVG Map of Spain with interconnected travel nodes */}
          <div className="world-map-scene relative w-full aspect-[4/3] rounded-2xl border-4 border-[#f8d27a] overflow-hidden shadow-inner flex items-center justify-center p-2">
            <img src="/game-art/spain-map.png" alt="Illustrated adventure map of Spain with coastal villages, castles and mountains" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-300/5 via-transparent to-emerald-950/15 pointer-events-none" />
            {/* Soft Iberian peninsula silhouette background */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-[0.035]"
            >
              <path
                d="M 16,18 L 68,14 L 88,32 L 86,52 L 72,60 L 52,86 L 30,85 L 22,78 L 18,55 L 14,35 Z"
                fill="#3A4060"
                stroke="#545B82"
                strokeWidth="1"
              />
            </svg>

            {/* Connecting travel trails SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {ALL_CITIES.map((city, idx) => {
                if (idx === ALL_CITIES.length - 1) return null;
                const nextCity = ALL_CITIES[idx + 1];
                const isUnlocked = progress.unlockedCityIds.includes(nextCity.id);
                return (
                  <line
                    key={`line-${city.id}-${nextCity.id}`}
                    x1={city.coordinates.x}
                    y1={city.coordinates.y}
                    x2={nextCity.coordinates.x}
                    y2={nextCity.coordinates.y}
                    stroke={isUnlocked ? '#fff0a8' : '#fff8dc'}
                    strokeWidth={isUnlocked ? '1.35' : '0.75'}
                    strokeDasharray={isUnlocked ? '1.2,0.7' : '1.1,1.5'}
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(84,48,8,.65))' }}
                    className={isUnlocked ? 'transition-all duration-700' : ''}
                  />
                );
              })}
            </svg>

            {/* City interactive pins */}
            {ALL_CITIES.map(city => {
              const { isUnlocked, bossCompleted, completedLevelsCount } = getCityStatus(city.id);
              const isSelected = selectedCityInfo?.id === city.id;

              return (
                <div
                  key={city.id}
                  style={{
                    position: 'absolute',
                    left: `${city.coordinates.x}%`,
                    top: `${city.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className="z-20"
                >
                  <button
                    onClick={() => {
                      setSelectedCityInfo(city);
                      if (isUnlocked) {
                        onSelectCity(city.id);
                      }
                    }}
                    onMouseEnter={() => setSelectedCityInfo(city)}
                    className={`group relative flex flex-col items-center focus:outline-none transition-all duration-300 ${
                      !isUnlocked ? 'cursor-not-allowed opacity-50 grayscale' : 'hover:scale-125'
                    }`}
                    title={`${city.name} (${completedLevelsCount}/10 niveles)`}
                  >
                    {/* Node circle */}
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-black text-sm sm:text-base shadow-lg border-[3px] transition-all ${
                        bossCompleted
                          ? 'bg-emerald-500 border-amber-300 text-white shadow-emerald-500/40'
                          : isUnlocked
                          ? 'bg-amber-500 border-white text-slate-950 font-extrabold animate-bounce shadow-amber-500/50'
                          : 'bg-slate-800 border-slate-600 text-slate-400'
                      } ${isSelected ? 'ring-4 ring-amber-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                    >
                      {bossCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : isUnlocked ? (
                        <span>{city.number}</span>
                      ) : (
                        <Lock className="w-3.5 h-3.5" />
                      )}
                    </div>

                    {/* Small City Name Pill */}
                    <div className={`mt-1 px-2 py-1 rounded-md text-[10px] sm:text-xs font-extrabold border-2 shadow-[0_2px_0_rgba(82,45,13,.35)] whitespace-nowrap pointer-events-none ${isUnlocked ? 'bg-[#fff3c5] text-[#693c14] border-white' : 'bg-[#efe4c8]/95 text-[#5c5140] border-[#d5c5a2]'}`}>
                      {city.name}
                    </div>
                  </button>
                </div>
              );
            })}

            {/* La Gran Fiesta Landmark on Map */}
            <div
              style={{
                position: 'absolute',
                left: '60%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              className="z-30"
            >
              <button
                onClick={onOpenFestival}
                className="group relative flex flex-col items-center hover:scale-110 transition-transform"
                title="La Gran Fiesta - Celebración y Examen Final"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-200 via-rose-500 to-amber-300 p-1 shadow-xl glow-gold flex items-center justify-center border-2 border-white">
                  <div className="w-full h-full bg-[#8e2f31] rounded-full flex items-center justify-center text-2xl">
                    🎉
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-1 rounded-full bg-gradient-to-b from-[#ffe780] to-[#ffb300] text-[#5b3210] font-black text-[10px] sm:text-xs shadow-lg border-2 border-white whitespace-nowrap">
                  La Gran Fiesta
                </div>
              </button>
            </div>
          </div>

          {/* Quick festival prompt banner at bottom of map */}
          <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 via-fiesta-navy to-purple-950/40 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎊</span>
              <div>
                <p className="text-sm font-bold text-amber-200">Destino Final: La Gran Fiesta y Examen BAESP101</p>
                <p className="text-xs text-slate-300">
                  {all15BossesCompleted 
                    ? '¡Has completado las 15 ciudades! Las puertas de la fiesta están totalmente abiertas.' 
                    : `Progreso: ${Object.keys(progress.completedBosses).filter(k => progress.completedBosses[k]?.passed).length} de 15 jefes derrotados.`}
                </p>
              </div>
            </div>
            <button
              onClick={onOpenFestival}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition-all flex items-center space-x-1"
            >
              <span>Entrar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Col: City Selector & Inspector Sidebar */}
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-fiesta-card border border-fiesta-border shadow-md">
            <h3 className="text-base font-bold text-white mb-2 flex items-center justify-between">
              <span>Listado de las 15 Ciudades</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-normal">
                {progress.unlockedCityIds.length} / 15 Desbloqueadas
              </span>
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Haz clic en cualquier ciudad desbloqueada para explorar sus 10 niveles y jefe:
            </p>

            <div className="max-h-[500px] overflow-y-auto space-y-2 pr-1">
              {ALL_CITIES.map(city => {
                const { isUnlocked, bossCompleted, completedLevelsCount } = getCityStatus(city.id);
                return (
                  <div
                    key={city.id}
                    onClick={() => {
                      if (isUnlocked) onSelectCity(city.id);
                    }}
                    className={`p-3 rounded-lg border transition-all text-left flex items-center justify-between ${
                      isUnlocked
                        ? 'bg-[#1C2033] hover:bg-[#252A44] border-slate-700 cursor-pointer'
                        : 'bg-slate-900/50 border-slate-800/70 opacity-60 cursor-not-allowed'
                    } ${selectedCityInfo?.id === city.id ? 'ring-2 ring-fiesta-yellow' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          bossCompleted
                            ? 'bg-emerald-500 text-white'
                            : isUnlocked
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {bossCompleted ? '✓' : city.number}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-white">{city.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border ${getModuleBadgeColor(city.moduleIndex)}`}>
                            M{city.moduleIndex}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate max-w-[160px]">{city.landmark}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      {isUnlocked ? (
                        <div className="flex items-center space-x-1 text-xs text-amber-300 font-semibold">
                          <span>{completedLevelsCount}/10</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ) : (
                        <Lock className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

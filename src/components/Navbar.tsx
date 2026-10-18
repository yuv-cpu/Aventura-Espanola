import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { PlayerAvatar } from './PlayerAvatar';
import { 
  Coins, 
  Flame, 
  Star, 
  Sparkles,
  Map as MapIcon, 
  BookOpen, 
  Calendar, 
  Award, 
  Trophy, 
  PartyPopper, 
  Volume2, 
  VolumeX, 
  Settings, 
  User,
  Menu,
  X,
  ChevronRight,
  UserCog
} from 'lucide-react';

interface NavbarProps {
  onOpenMap: () => void;
  onOpenNotebook: () => void;
  onOpenStudyPlan: () => void;
  onOpenSyllabus: () => void;
  onOpenAchievements: () => void;
  onOpenSettings: () => void;
  onOpenFestival: () => void;
  onOpenCharacterCreator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMap,
  onOpenNotebook,
  onOpenStudyPlan,
  onOpenSyllabus,
  onOpenAchievements,
  onOpenSettings,
  onOpenFestival,
  onOpenCharacterCreator
}) => {
  const { progress, soundMuted, toggleSound } = useGame();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mistakeCount = Object.values(progress.incorrectQuestions).filter(q => !q.mastered).length;
  const totalStars = Object.values(progress.completedLevels).reduce((acc, lvl) => acc + (lvl.stars || 0), 0);
  const playerName = progress.profile?.character?.name || progress.profile?.displayName || 'Viajero';
  const xpInCurrentLevel = progress.stats.xp % 300;

  const handleNavClick = (callback: () => void) => {
    callback();
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Compact Top Game HUD */}
      <header className="sticky top-0 z-40 bg-[#141724]/95 backdrop-blur-md border-b-2 border-amber-500/30 shadow-lg px-3 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo & Fast Primary Map Link */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onOpenMap}
              className="flex items-center space-x-2 text-left group focus:outline-none transition-transform hover:scale-105"
              title="Volver al Mapa de España"
            >
              <span className="text-2xl sm:text-3xl filter drop-shadow">🇪🇸</span>
              <div className="hidden xs:block">
                <div className="flex items-center space-x-1.5">
                  <span className="font-black text-base sm:text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors font-serif">
                    ¡Aventura Española!
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    A1
                  </span>
                </div>
              </div>
            </button>

            {/* Quick Primary Actions: Map & Festival */}
            <div className="hidden sm:flex items-center space-x-1.5">
              <button
                onClick={onOpenMap}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-all hover:border-amber-400/50"
                title="Mapa de España"
              >
                <MapIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Mapa</span>
              </button>

              <button
                onClick={onOpenFestival}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600/90 to-rose-600/90 hover:from-amber-500 hover:to-rose-500 text-white text-xs font-bold shadow-sm transition-all border border-amber-400/40 glow-gold"
                title="La Gran Fiesta y Examen Oficial"
              >
                <PartyPopper className="w-3.5 h-3.5 text-amber-200" />
                <span>La Fiesta</span>
              </button>
            </div>
          </div>

          {/* Center/Right: Compact Game HUD Stats */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-[#1D2133] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/30 text-xs sm:text-sm shadow-inner">
              
              {/* Traveler Avatar & Name (Click to Customize) */}
              <button
                onClick={onOpenCharacterCreator}
                className="flex items-center space-x-1.5 hover:opacity-85 transition-opacity focus:outline-none group"
                title="Personalizar tu viajero"
              >
                <PlayerAvatar character={progress.profile?.character} size={26} />
                <span className="font-bold text-white text-xs hidden md:inline group-hover:text-amber-300 transition-colors max-w-[90px] truncate">
                  {playerName}
                </span>
              </button>

              <div className="h-3.5 w-px bg-slate-700" />

              {/* Stars */}
              <div className="flex items-center space-x-1 text-amber-300 font-extrabold" title="Estrellas acumuladas">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{totalStars}</span>
              </div>

              <div className="h-3.5 w-px bg-slate-700" />

              {/* Coins */}
              <div className="flex items-center space-x-1 text-amber-300 font-extrabold" title="Monedas de oro">
                <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                <span>{progress.stats.coins.toLocaleString()}</span>
              </div>

              <div className="h-3.5 w-px bg-slate-700 hidden sm:block" />

              {/* Streak */}
              <div className="hidden sm:flex items-center space-x-1 text-orange-400 font-bold" title="Racha de estudio">
                <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400 animate-pulse" />
                <span>{progress.stats.streak}d</span>
              </div>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              title={soundMuted ? 'Activar sonido' : 'Silenciar sonido'}
              aria-label="Toggle sound"
            >
              {soundMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* Menu / Pause Button (☰) */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
              title="Abrir menú de herramientas y opciones"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">Menú</span>
              {mistakeCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-rose-600 text-white text-[10px] font-black rounded-full animate-bounce shadow">
                  {mistakeCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Game Drawer / Pause Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
          {/* Backdrop */}
          <div 
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-84 max-w-[88vw] bg-[#161a29] border-l-2 border-amber-400/40 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideInRight">
            
            {/* Drawer Header & Profile Card */}
            <div className="p-5 border-b border-slate-800 space-y-4 bg-gradient-to-b from-[#1E2337] to-[#161A29]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-wider uppercase text-amber-400 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cuaderno de Viaje</span>
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Traveler Card */}
              <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-[#0F111A] border border-amber-400/30">
                <PlayerAvatar character={progress.profile?.character} size={46} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-white truncate">{playerName}</h3>
                  <div className="flex items-center space-x-2 text-[11px] text-amber-300 font-bold mt-0.5">
                    <span>Nivel {progress.stats.level}</span>
                    <span>•</span>
                    <span className="text-slate-400">{progress.stats.xp} XP total</span>
                  </div>
                  {/* Small XP bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-rose-500 h-full rounded-full transition-all"
                      style={{ width: `${Math.min(100, (xpInCurrentLevel / 300) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Options List */}
            <div className="p-4 space-y-1.5 flex-1">
              
              {/* Mapa de España */}
              <button
                onClick={() => handleNavClick(onOpenMap)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-400/50 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <MapIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors block">
                      Mapa de España
                    </span>
                    <span className="text-[11px] text-slate-400">15 ciudades y 150 niveles</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </button>

              {/* La Gran Fiesta */}
              <button
                onClick={() => handleNavClick(onOpenFestival)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-rose-500/10 hover:from-amber-500/20 hover:to-rose-500/20 border border-amber-400/30 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                    <PartyPopper className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-amber-200 group-hover:text-white transition-colors block">
                      La Gran Fiesta
                    </span>
                    <span className="text-[11px] text-amber-300/80">Plaza, personajes y Examen A1</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>

              {/* Cuaderno de Repaso */}
              <button
                onClick={() => handleNavClick(onOpenNotebook)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-rose-400/50 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                        Cuaderno de Repaso
                      </span>
                      {mistakeCount > 0 && (
                        <span className="px-1.5 py-0.2 bg-rose-600 text-white text-[10px] font-bold rounded-full">
                          {mistakeCount}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">Repaso espaciado de errores</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
              </button>

              {/* Plan de Estudio (35 Días) */}
              <button
                onClick={() => handleNavClick(onOpenStudyPlan)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-400/50 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors block">
                      Plan de Estudio 35 Días
                    </span>
                    <span className="text-[11px] text-slate-400">Ruta guiada por el sílabo</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </button>

              {/* Matriz del Sílabo BAESP101 */}
              <button
                onClick={() => handleNavClick(onOpenSyllabus)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-400/50 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors block">
                      Matriz del Sílabo
                    </span>
                    <span className="text-[11px] text-slate-400">Cobertura de 5 módulos A1</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </button>

              {/* Logros */}
              <button
                onClick={() => handleNavClick(onOpenAchievements)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-yellow-400/50 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors block">
                      Logros y Trofeos
                    </span>
                    <span className="text-[11px] text-slate-400">Desafíos y medallas de España</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 transition-colors" />
              </button>

              {/* Personalizar Personaje */}
              {onOpenCharacterCreator && (
                <button
                  onClick={() => handleNavClick(onOpenCharacterCreator)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-400/50 transition-all group text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                      <UserCog className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors block">
                        Personalizar Viajero
                      </span>
                      <span className="text-[11px] text-slate-400">Cambiar aspecto y ropa</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </button>
              )}

              {/* Ajustes */}
              <button
                onClick={() => handleNavClick(onOpenSettings)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/50 text-slate-300 flex items-center justify-center font-bold">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors block">
                      Ajustes y Datos
                    </span>
                    <span className="text-[11px] text-slate-400">Guardado, audio y tutorial</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-800 bg-[#111422] space-y-3 text-center">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Sonido del juego:</span>
                <button
                  onClick={toggleSound}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 font-bold hover:bg-slate-700 transition-colors flex items-center space-x-1"
                >
                  {soundMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                      <span>Silenciado</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Activado</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-slate-500 leading-tight">
                ¡Aventura Española! • Basado en el sílabo oficial <strong>BAESP101 Spanish Level I</strong> y <strong>Nuevo Español sin Fronteras</strong>.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

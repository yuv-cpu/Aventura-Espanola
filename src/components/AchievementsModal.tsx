import React from 'react';
import { useGame } from '../context/GameContext';
import { INITIAL_ACHIEVEMENTS } from '../data/achievementsData';
import { X, Trophy, Award, CheckCircle2, Lock } from 'lucide-react';

interface AchievementsModalProps {
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ onClose }) => {
  const { progress } = useGame();

  const total = INITIAL_ACHIEVEMENTS.length;
  const unlockedCount = INITIAL_ACHIEVEMENTS.filter(a => Boolean(progress.achievements[a.id])).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141724] border border-fiesta-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-[#1A1D2E] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/40">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white">Logros y Trofeos de España</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  {unlockedCount} / {total} Desbloqueados
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Insignias conseguidas superando niveles, derrotando jefes y manteniendo la racha.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-2">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500"
            style={{ width: `${(unlockedCount / total) * 100}%` }}
          />
        </div>

        {/* Achievements Grid */}
        <div className="p-5 sm:p-6 overflow-y-auto grow grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {INITIAL_ACHIEVEMENTS.map(ach => {
            const unlockedDate = progress.achievements[ach.id];
            const isUnlocked = Boolean(unlockedDate);

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-xl border transition-all flex items-start space-x-3.5 text-left ${
                  isUnlocked
                    ? 'bg-[#1C2033] border-amber-400/40 shadow-sm'
                    : 'bg-slate-900/40 border-slate-800/80 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${
                    isUnlocked
                      ? 'bg-amber-500/20 border-amber-400/50 shadow-inner'
                      : 'bg-slate-800 border-slate-700'
                  }`}
                >
                  {isUnlocked ? ach.icon : <Lock className="w-5 h-5 text-slate-500" />}
                </div>

                <div className="space-y-1 grow">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}`}>
                      {ach.title}
                    </h3>
                    {isUnlocked && (
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Conseguido</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                  {isUnlocked && (
                    <p className="text-[10px] text-slate-500 font-mono">
                      {new Date(unlockedDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

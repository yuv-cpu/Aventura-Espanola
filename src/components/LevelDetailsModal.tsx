import React from 'react';
import { Level, DifficultyTier } from '../types';
import { useGame } from '../context/GameContext';
import { 
  X, 
  Star, 
  Coins, 
  Sparkles, 
  Play, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

interface LevelDetailsModalProps {
  level: Level;
  cityName: string;
  onClose: () => void;
  onStartLevel: () => void;
}

export const LevelDetailsModal: React.FC<LevelDetailsModalProps> = ({
  level,
  cityName,
  onClose,
  onStartLevel
}) => {
  const { progress } = useGame();
  const record = progress.completedLevels[level.id];
  const starsEarned = record ? record.stars : 0;

  const getTierBadge = (tier: DifficultyTier) => {
    switch (tier) {
      case 'easy':
        return { label: 'Easy', bg: 'bg-emerald-500 text-white' };
      case 'medium':
        return { label: 'Medium', bg: 'bg-sky-500 text-white' };
      case 'tough':
        return { label: 'Tough', bg: 'bg-amber-500 text-slate-950' };
      case 'hard':
        return { label: 'Hard', bg: 'bg-orange-500 text-white' };
      case 'hot':
        return { label: 'Hot', bg: 'bg-rose-500 text-white' };
    }
  };

  const badge = getTierBadge(level.tier);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Warm Parchment Card (Panel 7 Style) */}
      <div className="relative w-full max-w-md bg-[#FFFDF0] border-4 border-amber-400 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-900 animate-slideUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Level Number & 3 Golden Stars (Panel 7) */}
        <div className="pt-6 pb-2 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            Level {level.levelNumber}
          </h2>

          {/* 3 Large Stars (Panel 7) */}
          <div className="flex items-center justify-center space-x-2 my-2">
            {[1, 2, 3].map((starIdx) => (
              <Star
                key={starIdx}
                className={`w-8 h-8 transition-all ${
                  starsEarned >= starIdx 
                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(255,196,0,0.7)] scale-110' 
                    : 'text-amber-200 fill-amber-100'
                }`}
              />
            ))}
          </div>

          {/* Difficulty Tier Pill (Panel 7: Easy/Medium/Hard) */}
          <span className={`inline-block text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm ${badge.bg}`}>
            {badge.label}
          </span>
        </div>

        {/* Content Body: Thumbnail + Learning Objectives (Panel 7) */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-4 p-3.5 rounded-2xl bg-amber-100/60 border border-amber-300">
            {/* Thumbnail Graphic */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-400 p-0.5 shadow shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#FFFBEB] rounded-2xl flex flex-col items-center justify-center text-3xl">
                <span>{level.levelNumber <= 2 ? '☕' : level.levelNumber <= 4 ? '🥖' : level.levelNumber <= 6 ? '💃' : level.levelNumber <= 8 ? '🏛️' : '🔥'}</span>
              </div>
            </div>

            {/* Level Title & Learn Bullets (Panel 7) */}
            <div className="grow min-w-0">
              <h3 className="text-base font-black text-slate-900 leading-tight">
                {level.title}
              </h3>
              <p className="text-xs font-bold text-amber-800 mt-0.5">
                {level.subtitle}
              </p>

              <div className="mt-2 text-xs text-slate-700 space-y-0.5">
                <span className="font-black text-slate-900 block">Learn (Aprende):</span>
                <p className="text-[11px] leading-tight text-slate-600">
                  • {level.syllabusTopic}
                </p>
                <p className="text-[11px] leading-tight text-slate-600">
                  • {level.questions.length} ejercicios prácticos con audio nativo
                </p>
                <p className="text-[11px] leading-tight text-slate-600">
                  • Vocabulario y frases cotidianas de {cityName}
                </p>
              </div>
            </div>
          </div>

          {/* Rewards Box (Panel 7) */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-center">
            <span className="text-[11px] font-black uppercase text-amber-800 tracking-wider block mb-1">
              Recompensas al superar el nivel:
            </span>
            <div className="flex items-center justify-center space-x-6 text-sm font-black">
              <div className="flex items-center space-x-1.5 text-amber-600">
                <Coins className="w-5 h-5 text-amber-500 fill-amber-500/30" />
                <span>+{level.coinReward} coins</span>
              </div>
              <div className="flex items-center space-x-1.5 text-sky-600">
                <Sparkles className="w-5 h-5 text-sky-500" />
                <span>+{level.xpReward} XP</span>
              </div>
            </div>
          </div>

          {/* Action Button: Green Start Level (Panel 7) */}
          <button
            onClick={() => {
              onClose();
              onStartLevel();
            }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base shadow-xl transition-all flex items-center justify-center space-x-2 border-2 border-emerald-300 hover:scale-[1.02] active:scale-98"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{record ? 'Repasar Nivel' : 'Start Level'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

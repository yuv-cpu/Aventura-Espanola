import React, { useState, useCallback, useEffect } from 'react';
import {
  Coins,
  Star,
  Map as MapIcon,
  BookOpen,
  Languages,
  Trophy,
  ChevronRight,
  ChevronLeft,
  X,
  Sparkles,
  Lightbulb,
  Rocket,
} from 'lucide-react';

interface TutorialScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

/* ── Sofia NPC avatar (simple SVG) ──────────────────────────── */
const SofiaAvatar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Sofia, your tutorial guide"
  >
    {/* Background circle */}
    <circle cx="60" cy="60" r="58" fill="url(#sofiaGrad)" stroke="#E07A5F" strokeWidth="3" />
    <defs>
      <linearGradient id="sofiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFC400" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#E07A5F" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    {/* Hair (back) */}
    <ellipse cx="60" cy="46" rx="32" ry="30" fill="#2C1810" />
    <ellipse cx="60" cy="65" rx="26" ry="18" fill="#2C1810" />
    {/* Face */}
    <ellipse cx="60" cy="52" rx="24" ry="26" fill="#DEB887" />
    {/* Hair (front bangs) */}
    <path d="M36 42 Q45 28 60 30 Q75 28 84 42 Q82 34 72 30 Q65 26 60 27 Q55 26 48 30 Q38 34 36 42Z" fill="#2C1810" />
    {/* Side hair strands */}
    <path d="M36 42 Q34 55 36 68" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M84 42 Q86 55 84 68" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
    {/* Eyes */}
    <ellipse cx="50" cy="50" rx="3.5" ry="4" fill="#1B2838" />
    <ellipse cx="70" cy="50" rx="3.5" ry="4" fill="#1B2838" />
    {/* Eye sparkles */}
    <circle cx="51.5" cy="48.5" r="1.2" fill="white" />
    <circle cx="71.5" cy="48.5" r="1.2" fill="white" />
    {/* Eyebrows */}
    <path d="M45 43 Q50 40 55 43" stroke="#2C1810" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M65 43 Q70 40 75 43" stroke="#2C1810" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Friendly smile */}
    <path d="M50 61 Q60 70 70 61" stroke="#C0392B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Cheek blush */}
    <circle cx="42" cy="57" r="4" fill="#E07A5F" opacity="0.4" />
    <circle cx="78" cy="57" r="4" fill="#E07A5F" opacity="0.4" />
    {/* Body / shirt */}
    <path d="M35 88 Q38 78 60 76 Q82 78 85 88 L88 105 Q60 110 32 105 Z" fill="#E07A5F" />
    {/* Shirt collar */}
    <path d="M52 78 L60 86 L68 78" stroke="#C0392B" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Flower accessory in hair */}
    <circle cx="80" cy="36" r="5" fill="#FFC400" />
    <circle cx="80" cy="36" r="2.5" fill="#E07A5F" />
  </svg>
);

/* ── Tutorial step data ─────────────────────────────────────── */
interface TutorialStep {
  title: string;
  message: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    title: '¡Bienvenido!',
    message:
      "¡Hola! I'm Sofia, your guide through Spain! Together we'll travel across beautiful cities, learn Spanish, and have an amazing adventure. Let me show you how it all works!",
    icon: <Sparkles className="w-6 h-6" />,
    illustration: (
      <div className="flex items-center justify-center gap-3">
        <span className="text-5xl">🇪🇸</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">🎒</span>
          <span className="text-xs text-fiesta-sand/70 font-bold mt-1">¡Aventura!</span>
        </div>
        <span className="text-5xl">✨</span>
      </div>
    ),
  },
  {
    title: 'Earn Coins',
    message:
      'Complete tasks to earn coins! You start each question with potential bonus coins. Answer correctly and quickly to maximize your reward. Save up to unlock hints and special items!',
    icon: <Coins className="w-6 h-6" />,
    illustration: (
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fiesta-yellow to-fiesta-amber flex items-center justify-center border-3 border-yellow-600 shadow-lg">
            <Coins className="w-7 h-7 text-yellow-900" />
          </div>
          <span className="text-fiesta-yellow font-black text-lg">+100</span>
        </div>
        <div className="text-3xl">→</div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-game-panel to-game-panel-light flex items-center justify-center border-2 border-fiesta-border">
            <Lightbulb className="w-7 h-7 text-fiesta-yellow" />
          </div>
          <span className="text-fiesta-sand/70 font-bold text-xs">Hints</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Earn Stars',
    message:
      'Each level is rated with 1 to 3 stars based on your score. Get 80% for 1 star, 90% for 2 stars, and 100% for a perfect 3-star rating! Aim for perfection!',
    icon: <Star className="w-6 h-6" />,
    illustration: (
      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex flex-col items-center gap-1">
            <Star
              className={`w-10 h-10 ${
                n <= 3 ? 'text-fiesta-yellow fill-fiesta-yellow star-earned' : 'text-gray-600'
              }`}
            />
            <span className="text-xs font-bold text-fiesta-sand/60">
              {n === 1 ? '80%' : n === 2 ? '90%' : '100%'}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Explore Spain',
    message:
      'Unlock new cities across Spain as you progress! From Madrid to Barcelona, Sevilla to Valencia — each city brings new challenges and cultural discoveries. Clear all levels to unlock the next city!',
    icon: <MapIcon className="w-6 h-6" />,
    illustration: (
      <div className="flex items-center justify-center gap-3">
        {['🏰', '⛪', '🏖️'].map((emoji, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-warm/30 to-fiesta-teal/30 flex items-center justify-center border-2 border-fiesta-teal/40">
              <span className="text-3xl">{emoji}</span>
            </div>
            <span className="text-[10px] font-bold text-fiesta-sand/60">
              {['Madrid', 'Barcelona', 'Valencia'][i]}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Answer in Spanish',
    message:
      'Practice with different question types! Multiple choice questions test your knowledge, fill-in-the-blank challenges your recall, and word-order tasks build sentence skills. All in Spanish!',
    icon: <Languages className="w-6 h-6" />,
    illustration: (
      <div className="flex flex-col items-center gap-2 w-full max-w-[260px] mx-auto">
        <div className="w-full rounded-lg bg-gradient-to-r from-game-panel to-game-panel-light border border-fiesta-border p-2.5 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-fiesta-teal shrink-0" />
          <span className="text-xs font-bold text-fiesta-sand/80">MCQ: Choose the correct answer</span>
        </div>
        <div className="w-full rounded-lg bg-gradient-to-r from-game-panel to-game-panel-light border border-fiesta-border p-2.5 flex items-center gap-2">
          <Languages className="w-4 h-4 text-fiesta-yellow shrink-0" />
          <span className="text-xs font-bold text-fiesta-sand/80">Fill: "Yo ____ español"</span>
        </div>
        <div className="w-full rounded-lg bg-gradient-to-r from-game-panel to-game-panel-light border border-fiesta-border p-2.5 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-fiesta-terracotta shrink-0" />
          <span className="text-xs font-bold text-fiesta-sand/80">Word Order: Build sentences</span>
        </div>
      </div>
    ),
  },
  {
    title: '¡Buena Suerte!',
    message:
      'Use coins to buy translation hints when you\'re stuck. Defeat city bosses to prove your mastery, and complete all 15 cities to reach the Grand Festival Finale! ¡Vamos!',
    icon: <Trophy className="w-6 h-6" />,
    illustration: (
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fiesta-yellow to-fiesta-amber flex items-center justify-center border-2 border-yellow-600">
            <Coins className="w-5 h-5 text-yellow-900" />
          </div>
          <span className="text-[10px] font-bold text-fiesta-sand/60">Hints</span>
        </div>
        <span className="text-2xl">→</span>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fiesta-red to-red-700 flex items-center justify-center border-2 border-red-400">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-bold text-fiesta-sand/60">Bosses</span>
        </div>
        <span className="text-2xl">→</span>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fiesta-teal to-emerald-600 flex items-center justify-center border-2 border-emerald-400">
            <span className="text-xl">🎉</span>
          </div>
          <span className="text-[10px] font-bold text-fiesta-sand/60">Festival</span>
        </div>
      </div>
    ),
  },
];

/* ── Main Component ─────────────────────────────────────────── */
export const TutorialScreen: React.FC<TutorialScreenProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const isLastStep = currentStep === TUTORIAL_STEPS.length - 1;
  const isFirstStep = currentStep === 0;
  const step = TUTORIAL_STEPS[currentStep];

  const goToStep = useCallback(
    (next: number, direction: 'left' | 'right') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSlideDirection(direction);
      setAnimationKey((k) => k + 1);

      // Small delay so exit-anim can play
      setTimeout(() => {
        setCurrentStep(next);
        setIsAnimating(false);
      }, 80);
    },
    [isAnimating]
  );

  const handleNext = useCallback(() => {
    if (isLastStep) {
      onComplete();
      return;
    }
    goToStep(currentStep + 1, 'right');
  }, [currentStep, isLastStep, onComplete, goToStep]);

  const handlePrev = useCallback(() => {
    if (isFirstStep) return;
    goToStep(currentStep - 1, 'left');
  }, [currentStep, isFirstStep, goToStep]);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onSkip();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleNext, handlePrev, onSkip]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Warm radial background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(224,122,95,0.25) 0%, rgba(27,40,56,0.97) 60%, #0F1923 100%)',
        }}
      />

      {/* Subtle decorative dots */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, #FFC400 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Skip button */}
      <button
        onClick={onSkip}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-fiesta-sand/60 hover:text-fiesta-sand hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold backdrop-blur-sm"
      >
        <X className="w-3.5 h-3.5" />
        Skip
      </button>

      {/* Main content card */}
      <div className="relative z-10 w-full max-w-lg mx-4 flex flex-col items-center">
        {/* Sofia avatar */}
        <div className="float-animation mb-[-20px] z-20">
          <SofiaAvatar className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl" />
        </div>

        {/* Speech bubble + content panel */}
        <div className="w-full game-panel p-0 animate-fadeIn">
          {/* Header strip */}
          <div className="game-panel-header flex items-center gap-2">
            <span className="text-fiesta-terracotta">{step.icon}</span>
            <span className="font-game-title text-sm text-fiesta-sand tracking-wide">
              Sofia — Your Guide
            </span>
          </div>

          {/* Animated slide area */}
          <div className="p-5 sm:p-6 overflow-hidden">
            <div
              key={animationKey}
              className={
                slideDirection === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'
              }
            >
              {/* Step title */}
              <h2 className="font-game-title text-xl sm:text-2xl text-fiesta-yellow mb-3 text-center">
                {step.title}
              </h2>

              {/* Speech bubble */}
              <div className="speech-bubble mb-5 text-sm sm:text-[0.9rem]">
                {step.message}
              </div>

              {/* Illustration area */}
              <div className="rounded-xl bg-game-bg/60 border border-fiesta-border/50 p-4 mb-1">
                {step.illustration}
              </div>
            </div>
          </div>

          {/* Navigation area */}
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-col gap-4">
            {/* Step indicators */}
            <div className="flex items-center justify-center gap-2">
              {TUTORIAL_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === currentStep) return;
                    goToStep(i, i > currentStep ? 'right' : 'left');
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? 'w-8 h-3 bg-gradient-to-r from-fiesta-yellow to-fiesta-amber shadow-md shadow-fiesta-yellow/30'
                      : i < currentStep
                      ? 'w-3 h-3 bg-fiesta-teal/60 hover:bg-fiesta-teal'
                      : 'w-3 h-3 bg-fiesta-border hover:bg-fiesta-border/80'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrev}
                disabled={isFirstStep}
                className={`btn-game btn-game-secondary text-sm flex-1 max-w-[130px] ${
                  isFirstStep ? 'opacity-0 pointer-events-none' : ''
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {isLastStep ? (
                <button
                  onClick={onComplete}
                  className="btn-game btn-game-primary text-sm flex-1 glow-gold"
                >
                  <Rocket className="w-4 h-4" />
                  ¡Let's Go!
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="btn-game btn-game-primary text-sm flex-1 max-w-[160px]"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Step counter text */}
        <p className="mt-3 text-[11px] text-fiesta-sand/40 font-bold tracking-wider">
          STEP {currentStep + 1} / {TUTORIAL_STEPS.length}
        </p>
      </div>
    </div>
  );
};

export default TutorialScreen;

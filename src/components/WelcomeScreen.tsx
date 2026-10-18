import React, { useEffect, useState } from 'react';
import { Play, LogIn, UserPlus, User } from 'lucide-react';

interface WelcomeScreenProps {
  onStartJourney: () => void;
  onLogin: () => void;
  onCreateAccount: () => void;
  onContinueAsGuest: () => void;
}

/* ──────────────────────────────────────────────
   Sparkle particle — a small ✦ that fades in/out
   at a random position with staggered delay
   ────────────────────────────────────────────── */
const Sparkle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span
    className="absolute pointer-events-none text-fiesta-yellow/70 select-none"
    style={{
      fontSize: `${8 + Math.random() * 10}px`,
      animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 3}s`,
      ...style,
    }}
  >
    ✦
  </span>
);

/* ──────────────────────────────────────────────
   Cloud SVG that drifts across the sky
   ────────────────────────────────────────────── */
const Cloud: React.FC<{
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  top?: string;
}> = ({ className = '', size = 120, duration = 45, delay = 0, top = '8%' }) => (
  <svg
    viewBox="0 0 120 50"
    width={size}
    height={size * 0.42}
    className={`absolute opacity-30 ${className}`}
    style={{
      top,
      animation: `cloudDrift ${duration}s linear ${delay}s infinite`,
    }}
  >
    <ellipse cx="60" cy="32" rx="50" ry="16" fill="white" />
    <ellipse cx="38" cy="24" rx="26" ry="14" fill="white" />
    <ellipse cx="75" cy="22" rx="30" ry="16" fill="white" />
    <ellipse cx="55" cy="18" rx="22" ry="12" fill="white" />
  </svg>
);

/* ──────────────────────────────────────────────
   Spanish skyline silhouette (church spires, arches,
   bell towers) — purely decorative
   ────────────────────────────────────────────── */
const SpanishSkyline: React.FC = () => (
  <svg
    viewBox="0 0 1200 220"
    className="absolute bottom-0 left-0 w-full"
    preserveAspectRatio="none"
    style={{ height: '22vh', minHeight: '120px' }}
  >
    <defs>
      <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1D3557" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#0F1923" stopOpacity="1" />
      </linearGradient>
    </defs>
    {/* Main building mass */}
    <path
      d="
        M0 220 L0 160
        L40 160 L40 130 L55 110 L70 130 L70 160
        L110 160 L110 140 L120 120 L125 90 L130 120 L140 140 L140 160
        L200 160 L200 120 L210 100 L220 80 L230 100 L240 120 L240 160
        L280 160 L280 150 L300 150 L300 160
        L340 160 L340 110 L350 90 L355 60 L360 90 L370 110 L370 160
        L420 160 L420 130 L440 130 L440 120 L450 120 L450 130 L470 130 L470 160
        L530 160 L530 100 L545 80 L560 100 L560 160
        L600 160 L600 140 L610 140 L610 120 L615 85 L620 120 L620 140 L630 140 L630 160
        L680 160 L680 130 L700 130 L700 110 L710 90 L720 70 L730 90 L740 110 L740 130 L760 130 L760 160
        L800 160 L800 145 L815 145 L815 135 L830 135 L830 145 L845 145 L845 160
        L900 160 L900 100 L910 80 L915 50 L920 80 L930 100 L930 160
        L970 160 L970 140 L980 140 L980 130 L990 130 L990 140 L1000 140 L1000 160
        L1040 160 L1040 120 L1055 100 L1070 120 L1070 160
        L1120 160 L1120 110 L1130 90 L1135 65 L1140 90 L1150 110 L1150 160
        L1200 160 L1200 220 Z
      "
      fill="url(#skylineGrad)"
    />
    {/* Small windows — yellow glowing rectangles */}
    {[
      [50, 140], [125, 145], [215, 110], [350, 100],
      [435, 135], [545, 95], [615, 130], [720, 100],
      [915, 90], [1055, 115], [1135, 100],
      [280, 155], [465, 140], [680, 140], [830, 140],
      [985, 135], [1040, 130],
    ].map(([x, y], i) => (
      <rect
        key={i}
        x={x}
        y={y}
        width="6"
        height="8"
        rx="1"
        fill="#FFC400"
        opacity={0.6 + Math.sin(i) * 0.3}
      />
    ))}
    {/* Arches along the bottom for a colonnade feel */}
    {[100, 250, 400, 550, 700, 850, 1000, 1150].map((cx, i) => (
      <path
        key={`arch-${i}`}
        d={`M${cx - 18} 190 A18 22 0 0 1 ${cx + 18} 190`}
        fill="none"
        stroke="#3D5068"
        strokeWidth="2"
        opacity="0.5"
      />
    ))}
  </svg>
);

/* ──────────────────────────────────────────────
   Cute traveler SVG character (geometric/simple)
   ────────────────────────────────────────────── */
const TravelerCharacter: React.FC = () => (
  <svg viewBox="0 0 140 200" className="w-32 h-44 sm:w-44 sm:h-60 md:w-52 md:h-72 drop-shadow-lg">
    {/* ── Hat (beret) ── */}
    <ellipse cx="70" cy="42" rx="32" ry="8" fill="#C60B1E" />
    <path d="M42 42 Q44 18 70 15 Q96 18 98 42 Z" fill="#C60B1E" />
    <circle cx="70" cy="18" r="5" fill="#C60B1E" />

    {/* ── Head ── */}
    <circle cx="70" cy="60" r="24" fill="#F5DEB3" />
    {/* Eyes */}
    <circle cx="60" cy="56" r="3.5" fill="#1D3557" />
    <circle cx="80" cy="56" r="3.5" fill="#1D3557" />
    <circle cx="61" cy="54.5" r="1.2" fill="white" />
    <circle cx="81" cy="54.5" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M60 68 Q70 78 80 68" stroke="#E07A5F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Blush */}
    <ellipse cx="52" cy="64" rx="5" ry="3" fill="#FFAFA3" opacity="0.5" />
    <ellipse cx="88" cy="64" rx="5" ry="3" fill="#FFAFA3" opacity="0.5" />

    {/* ── Body (shirt) ── */}
    <rect x="50" y="84" width="40" height="50" rx="8" fill="#FFC400" />
    {/* Shirt detail stripe */}
    <rect x="50" y="95" width="40" height="6" fill="#F59E0B" rx="2" />

    {/* ── Arms ── */}
    <rect x="32" y="88" width="18" height="12" rx="6" fill="#F5DEB3" />
    <rect x="90" y="88" width="18" height="12" rx="6" fill="#F5DEB3" />

    {/* ── Backpack ── */}
    <rect x="90" y="82" width="22" height="36" rx="6" fill="#E07A5F" />
    <rect x="94" y="88" width="14" height="10" rx="3" fill="#C65D45" />
    <rect x="98" y="78" width="6" height="6" rx="3" fill="#E07A5F" />

    {/* ── Legs (pants) ── */}
    <rect x="54" y="132" width="14" height="30" rx="6" fill="#1D3557" />
    <rect x="72" y="132" width="14" height="30" rx="6" fill="#1D3557" />

    {/* ── Shoes ── */}
    <ellipse cx="61" cy="164" rx="10" ry="5" fill="#8B4513" />
    <ellipse cx="79" cy="164" rx="10" ry="5" fill="#8B4513" />
  </svg>
);

/* ──────────────────────────────────────────────
   Spanish flag ribbon decoration
   ────────────────────────────────────────────── */
const FlagRibbon: React.FC = () => (
  <div className="flex items-center justify-center gap-0 h-2 w-40 sm:w-56 rounded-full overflow-hidden shadow-md mx-auto">
    <div className="h-full flex-1 bg-fiesta-red" />
    <div className="h-full flex-[2] bg-fiesta-yellow" />
    <div className="h-full flex-1 bg-fiesta-red" />
  </div>
);

/* ══════════════════════════════════════════════
   WELCOME SCREEN — Main Export
   ══════════════════════════════════════════════ */
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartJourney,
  onLogin,
  onCreateAccount,
  onContinueAsGuest,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay so the staggered animations all play visibly after mount
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Generate sparkle positions once
  const sparkles = React.useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        top: `${5 + Math.random() * 65}%`,
        left: `${Math.random() * 100}%`,
      })),
    [],
  );

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, rgba(36,104,157,.22), rgba(27,36,50,.18)), url(/game-art/spain-sunset.png) center / cover no-repeat',
      }}
    >
      {/* ── Sparkle particles ── */}
      {sparkles.map((pos, i) => (
        <Sparkle key={i} style={pos} />
      ))}

      {/* ── Floating clouds ── */}
      <Cloud size={140} duration={50} delay={0} top="5%" />
      <Cloud size={100} duration={38} delay={8} top="12%" />
      <Cloud size={110} duration={55} delay={15} top="3%" />
      <Cloud size={80} duration={42} delay={22} top="16%" />

      {/* ── Sun glow behind the skyline ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: '280px',
          height: '280px',
          bottom: '18vh',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(circle, rgba(255,196,0,0.45) 0%, rgba(255,107,53,0.2) 45%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Architectural skyline at the bottom ── */}
      <SpanishSkyline />

      {/* ═══ Main content column ═══ */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-36 sm:pb-44 gap-2 sm:gap-3 max-w-lg w-full">
        {/* ── Game title ── */}
        <h1
          className={`font-game-title text-center leading-tight transition-all duration-700
            text-4xl sm:text-5xl md:text-6xl
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
          style={{
            color: '#FFC400',
            textShadow: `
              0 2px 0 #E8A800,
              0 4px 0 #CC8E00,
              0 6px 0 #B37400,
              0 8px 16px rgba(0,0,0,0.35),
              0 0 40px rgba(255,196,0,0.3)
            `,
            WebkitTextStroke: '1px rgba(180,120,0,0.3)',
          }}
        >
          ¡Aventura
          <br />
          Española!
        </h1>

        {/* ── Flag ribbon ── */}
        <div
          className={`transition-all duration-700 delay-150
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        >
          <FlagRibbon />
        </div>

        {/* ── Subtitle ── */}
        <p
          className={`text-white/90 text-center text-sm sm:text-base font-semibold mt-1 tracking-wide
            transition-all duration-700 delay-200
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          Learn Spanish. Explore Spain. Complete the Adventure!
        </p>

        {/* ── Traveler character ── */}
        <div
          className={`mt-2 float-animation transition-all duration-700 delay-300
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        >
          <TravelerCharacter />
        </div>

        {/* ── Buttons ── */}
        <div className="flex flex-col items-center gap-3 mt-4 w-full max-w-xs">
          {/* Primary: Start Journey */}
          <button
            onClick={onStartJourney}
            className={`btn-game btn-game-primary w-full text-base sm:text-lg glow-gold
              transition-all duration-700 delay-500
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ padding: '0.9rem 1.5rem' }}
          >
            <Play size={22} strokeWidth={3} />
            <span>Start Journey</span>
          </button>

          {/* Secondary: Login */}
          <button
            onClick={onLogin}
            className={`btn-game btn-game-secondary w-full
              transition-all duration-700 delay-[600ms]
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <LogIn size={18} />
            <span>Login</span>
          </button>

          {/* Secondary: Create Account */}
          <button
            onClick={onCreateAccount}
            className={`btn-game btn-game-secondary w-full
              transition-all duration-700 delay-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <UserPlus size={18} />
            <span>Create Account</span>
          </button>

          {/* Tertiary: Continue as Guest */}
          <button
            onClick={onContinueAsGuest}
            className={`group mt-1 text-white/70 hover:text-white text-sm font-semibold
              flex items-center gap-1.5 transition-all duration-300
              hover:gap-2.5 cursor-pointer
              transition-all duration-700 delay-[800ms]
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
          >
            <User size={15} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white/70 transition-all">
              Continue as Guest
            </span>
          </button>
        </div>
      </div>

      {/* ── Bottom fade into game background ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(18,34,47,.88), transparent)',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default WelcomeScreen;

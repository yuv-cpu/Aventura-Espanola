import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from 'lucide-react';

interface AuthScreenProps {
  mode: 'login' | 'register';
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string) => void;
  onContinueAsGuest: () => void;
  onBack: () => void;
  onSwitchMode: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  mode,
  onLogin,
  onRegister,
  onContinueAsGuest,
  onBack,
  onSwitchMode
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin(email, password);
    } else {
      onRegister(email, password, name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #1D3557 0%, #2A3A50 40%, #E07A5F 100%)'
      }}
    >
      {/* Decorative buildings silhouette */}
      <div className="fixed bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,120 L0,80 L40,80 L40,60 L50,40 L60,60 L80,60 L80,50 L100,50 L100,70 L140,70 L140,40 L150,20 L160,40 L180,40 L180,55 L220,55 L220,30 L240,30 L240,65 L280,65 L280,45 L290,25 L300,45 L320,45 L320,75 L360,75 L360,50 L380,50 L380,35 L390,15 L400,35 L420,35 L420,60 L460,60 L460,40 L480,40 L480,70 L520,70 L520,55 L540,55 L540,45 L550,30 L560,45 L580,45 L580,65 L620,65 L620,50 L640,50 L640,75 L680,75 L680,55 L700,55 L700,40 L710,20 L720,40 L740,40 L740,60 L780,60 L780,45 L800,45 L800,70 L840,70 L840,50 L860,50 L860,35 L870,15 L880,35 L900,35 L900,55 L940,55 L940,40 L960,40 L960,65 L1000,65 L1000,50 L1020,50 L1020,75 L1060,75 L1060,55 L1080,55 L1080,40 L1090,25 L1100,40 L1120,40 L1120,60 L1160,60 L1160,80 L1200,80 L1200,120 Z" 
            fill="#1D3557" />
        </svg>
      </div>

      <div className="w-full max-w-md animate-slideUp">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Auth Card */}
        <div className="game-panel p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-game-title text-white mb-2">
              {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
            </h1>
            <p className="text-sm text-slate-400">
              {mode === 'login' 
                ? 'Continue your Spanish adventure' 
                : 'Start your journey through Spain'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name (register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Display Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your adventure name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1B2838] border-2 border-[#3D5068] text-white placeholder-slate-500 focus:border-fiesta-yellow focus:outline-none transition-colors text-sm font-semibold"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Email / Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1B2838] border-2 border-[#3D5068] text-white placeholder-slate-500 focus:border-fiesta-yellow focus:outline-none transition-colors text-sm font-semibold"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-[#1B2838] border-2 border-[#3D5068] text-white placeholder-slate-500 focus:border-fiesta-yellow focus:outline-none transition-colors text-sm font-semibold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Info banner for local-only mode */}
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30">
              <p className="text-xs text-sky-300">
                <strong>Note:</strong> This is a local profile. Your progress is saved in your browser. 
                No server authentication is configured in this version.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-game btn-game-primary w-full text-base"
            >
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#3D5068]" />
            <span className="text-xs font-bold text-slate-500 uppercase">OR</span>
            <div className="flex-1 h-px bg-[#3D5068]" />
          </div>

          {/* Guest / Switch */}
          <button
            onClick={onContinueAsGuest}
            className="btn-game btn-game-secondary w-full mb-3"
          >
            Continue as Guest
          </button>

          <p className="text-center text-sm text-slate-400">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={onSwitchMode}
              className="text-fiesta-yellow hover:text-fiesta-amber font-bold transition-colors"
            >
              {mode === 'login' ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

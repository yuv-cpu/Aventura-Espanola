import React, { useEffect } from 'react';
import { City } from '../types';
import { getCityById } from '../data/citiesData';
import { Trophy, Compass, ArrowRight, Sparkles, Star, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CityUnlockModalProps {
  completedCityName: string;
  nextCityId?: string;
  bonusCoinsAwarded?: number;
  onContinue: () => void;
}

export const CityUnlockModal: React.FC<CityUnlockModalProps> = ({
  completedCityName,
  nextCityId,
  bonusCoinsAwarded = 500,
  onContinue,
}) => {
  const nextCity: City | undefined = nextCityId ? getCityById(nextCityId) : undefined;

  useEffect(() => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore in test environments
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#1E293B] via-[#141B2D] to-[#0F172A] border-4 border-amber-400 rounded-3xl shadow-2xl overflow-hidden text-center p-6 sm:p-8 my-auto">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top celebratory banner ribbon */}
        <div className="relative inline-block mb-4">
          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-fiesta-red to-amber-500 text-white font-extrabold text-base sm:text-lg shadow-lg border-2 border-amber-300 uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>¡{completedCityName} Completada!</span>
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
        </div>

        {/* Central trophy/landmark art */}
        <div className="my-4 relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-1 mx-auto shadow-2xl glow-gold flex items-center justify-center">
            <div className="w-full h-full bg-[#1A1D2E] rounded-full flex items-center justify-center text-4xl">
              🏰
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>+500 Monedas de Bonus</span>
          </div>
        </div>

        {/* Success message */}
        <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-5">
          ¡Misión Cumplida!
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-sm mx-auto">
          Has dominado los desafíos y la misión del jefe de <strong>{completedCityName}</strong>. 
          ¡El camino hacia el resto de España continúa!
        </p>

        {/* Next City Destination Card */}
        {nextCity ? (
          <div className="mt-6 p-4 rounded-2xl bg-[#1E293B]/80 border-2 border-amber-400/50 shadow-inner text-left flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-3xl shrink-0">
              📍
            </div>
            <div className="grow">
              <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Próxima Parada...</span>
              </span>
              <h3 className="text-xl font-black text-white">{nextCity.name}</h3>
              <p className="text-xs text-slate-300 line-clamp-1">{nextCity.landmark} • {nextCity.region}</p>
            </div>
          </div>
        ) : (
          <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-400/50 text-amber-200 text-sm">
            🎉 ¡Has completado todas las 15 ciudades de la ruta! ¡Las puertas de <strong>La Gran Fiesta</strong> están abiertas de par en par!
          </div>
        )}

        {/* Action button */}
        <div className="mt-6">
          <button
            onClick={onContinue}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base shadow-xl transition-all flex items-center justify-center space-x-2 border-2 border-emerald-300/50 hover:scale-[1.02]"
          >
            <span>Continuar el Viaje</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { STUDY_SCHEDULE_35_DAYS } from '../data/studyPlanData';
import { ALL_CITIES } from '../data/citiesData';
import { 
  X, 
  Calendar, 
  CheckCircle, 
  Circle, 
  Compass, 
  Trophy, 
  ArrowRight,
  Flame
} from 'lucide-react';

interface StudyPlanModalProps {
  onClose: () => void;
  onGoToCity: (cityId: string) => void;
  onGoToFestival: () => void;
}

export const StudyPlanModal: React.FC<StudyPlanModalProps> = ({
  onClose,
  onGoToCity,
  onGoToFestival
}) => {
  const { progress, completeStudyDay } = useGame();
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');

  const filteredDays = STUDY_SCHEDULE_35_DAYS.filter(d => {
    if (selectedModule === 'all') return true;
    return d.moduleNumber === selectedModule;
  });

  const completedCount = progress.completedStudyDays.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141724] border border-fiesta-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-[#1A1D2E] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white">Plan de Estudio de 35 Días</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40">
                  {completedCount} / 35 Completados
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Secuencia diaria guiada que cubre el 100% del sílabo BAESP101 Nivel I.
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

        {/* Module Filter Pills */}
        <div className="px-5 py-2.5 bg-slate-900/90 border-b border-fiesta-border/70 flex flex-wrap items-center gap-1.5 text-xs font-semibold shrink-0">
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedModule === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Todos los 35 Días
          </button>
          {[1, 2, 3, 4, 5].map(modNum => (
            <button
              key={modNum}
              onClick={() => setSelectedModule(modNum)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedModule === modNum
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Módulo {modNum}
            </button>
          ))}
        </div>

        {/* Days List */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3 grow">
          {filteredDays.map(day => {
            const isCompleted = progress.completedStudyDays.includes(day.dayNumber);
            const city = ALL_CITIES.find(c => c.name.toLowerCase() === day.targetCity.toLowerCase());

            return (
              <div
                key={day.dayNumber}
                className={`p-4 rounded-xl border transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  day.isMilestone
                    ? 'bg-gradient-to-r from-amber-950/30 via-[#1C2033] to-purple-950/30 border-amber-500/50 shadow-md'
                    : isCompleted
                    ? 'bg-slate-900/60 border-emerald-500/30'
                    : 'bg-[#181B2B] border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start space-x-3 max-w-2xl">
                  <button
                    onClick={() => completeStudyDay(day.dayNumber)}
                    className="mt-0.5 text-slate-500 hover:text-emerald-400 transition-colors shrink-0"
                    title={isCompleted ? 'Día completado (+50 monedas ya ganadas)' : 'Marcar día como completado (+50 monedas)'}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 hover:text-amber-400" />
                    )}
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-amber-400">
                        Día {day.dayNumber}
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs px-2 py-0.2 rounded bg-slate-800 text-slate-300 font-medium">
                        Módulo {day.moduleNumber}
                      </span>
                      {day.isMilestone && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center space-x-1">
                          <Trophy className="w-3 h-3" />
                          <span>Hito de Evaluación</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {day.title}
                    </h3>
                    <p className="text-xs text-slate-300">
                      <strong>Objetivo:</strong> {day.objective}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Destino: <span className="text-amber-300 font-semibold">{day.targetCity}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                  {day.targetCity === 'La Gran Fiesta' ? (
                    <button
                      onClick={() => {
                        onClose();
                        onGoToFestival();
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-bold text-xs flex items-center space-x-1"
                    >
                      <span>Ir a la Fiesta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : city ? (
                    <button
                      onClick={() => {
                        onClose();
                        onGoToCity(city.id);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center space-x-1 transition-colors"
                    >
                      <span>Ir a {city.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

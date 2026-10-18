import React, { useState } from 'react';
import { SYLLABUS_MODULES } from '../data/syllabusData';
import { getCityById } from '../data/citiesData';
import { 
  X, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Compass, 
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SyllabusCoverageModalProps {
  onClose: () => void;
  onGoToCity?: (cityId: string) => void;
}

export const SyllabusCoverageModal: React.FC<SyllabusCoverageModalProps> = ({
  onClose,
  onGoToCity
}) => {
  const [selectedModuleNum, setSelectedModuleNum] = useState<number>(1);

  const activeModule = SYLLABUS_MODULES.find(m => m.moduleNumber === selectedModuleNum) || SYLLABUS_MODULES[0];

  const totalTopics = SYLLABUS_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
  const coveredTopics = SYLLABUS_MODULES.reduce(
    (acc, m) => acc + m.topics.filter(t => t.coveredInCityIds.length > 0).length,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141724] border border-fiesta-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-[#1A1D2E] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white">Matriz de Cobertura del Sílabo BAESP101</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Cobertura ({coveredTopics}/{totalTopics} Temas)</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Curso: Spanish Level I • Total 15 horas de clase mapeadas exhaustivamente en las 15 ciudades.
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

        {/* Module Selector Tabs */}
        <div className="px-5 py-2.5 bg-slate-900 border-b border-fiesta-border/70 flex flex-wrap items-center gap-1.5 text-xs font-semibold shrink-0">
          {SYLLABUS_MODULES.map(mod => (
            <button
              key={mod.moduleNumber}
              onClick={() => setSelectedModuleNum(mod.moduleNumber)}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                selectedModuleNum === mod.moduleNumber
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>Módulo {mod.moduleNumber}</span>
              <span className="text-[10px] opacity-75">({mod.hours}h)</span>
            </button>
          ))}
        </div>

        {/* Module Details & Topics List */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 grow">
          {/* Active Module Summary Box */}
          <div className="p-4 rounded-xl bg-[#1C2033] border border-fiesta-border/80 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-white">
                Módulo {activeModule.moduleNumber}: {activeModule.title}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono flex items-center space-x-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{activeModule.hours} horas lectivas</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeModule.summary}
            </p>
          </div>

          {/* Topics Table / Cards */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Objetivos y Temas Mapeados ({activeModule.topics.length} temas):
            </h4>

            {activeModule.topics.map(topic => (
              <div
                key={topic.id}
                className="p-3.5 rounded-xl bg-[#181B2B] border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-amber-400 font-mono">
                      {topic.code}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {topic.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.2 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {topic.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {topic.description}
                  </p>
                </div>

                {/* Cities where topic is covered */}
                <div className="flex flex-wrap items-center gap-1.5 shrink-0 self-start sm:self-center">
                  <span className="text-[11px] text-slate-400 mr-1">Cubierto en:</span>
                  {topic.coveredInCityIds.map(cityId => {
                    const c = getCityById(cityId);
                    return (
                      <span
                        key={cityId}
                        className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold"
                      >
                        {c ? c.name : cityId}
                      </span>
                    );
                  })}
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Academic References Note */}
          <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
            <p className="font-bold text-slate-300">Fuentes Académicas Oficiales Mapeadas:</p>
            <p>1. <strong>BAESP101 Spanish Level I Syllabus</strong> (Board of Studies approved, 15 Lecture Hours).</p>
            <p>2. <strong>Nuevo Español sin Fronteras ESF 1</strong> (Sánchez Lobato, Moreno García et al., SGEL / Aula Internacional 1 Goyal Publishers).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

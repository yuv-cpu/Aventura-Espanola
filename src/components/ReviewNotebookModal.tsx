import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { getQuestionById, getCityById } from '../data/citiesData';
import { soundService } from '../services/soundService';
import { Question } from '../types';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  RotateCcw, 
  Volume2, 
  Sparkles, 
  Check, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface ReviewNotebookModalProps {
  onClose: () => void;
}

export const ReviewNotebookModal: React.FC<ReviewNotebookModalProps> = ({ onClose }) => {
  const { progress, markMistakeMastered } = useGame();
  const [filter, setFilter] = useState<'pending' | 'mastered' | 'all'>('pending');
  const [activePracticeQuestion, setActivePracticeQuestion] = useState<Question | null>(null);
  const [practiceAnswer, setPracticeAnswer] = useState<string>('');
  const [practiceFeedback, setPracticeFeedback] = useState<{ isCorrect: boolean; show: boolean }>({
    isCorrect: false,
    show: false
  });

  const mistakesList = Object.values(progress.incorrectQuestions);
  const pendingMistakes = mistakesList.filter(m => !m.mastered);
  const masteredMistakes = mistakesList.filter(m => m.mastered);

  const displayedList = filter === 'pending'
    ? pendingMistakes
    : filter === 'mastered'
    ? masteredMistakes
    : mistakesList;

  const handleStartPractice = (questionId: string) => {
    const q = getQuestionById(questionId);
    if (q) {
      setActivePracticeQuestion(q);
      setPracticeAnswer('');
      setPracticeFeedback({ isCorrect: false, show: false });
      if (q.audioText) {
        soundService.speakSpanish(q.audioText);
      }
    }
  };

  const handleCheckPractice = () => {
    if (!activePracticeQuestion || !practiceAnswer) return;

    let correct = false;
    if (Array.isArray(activePracticeQuestion.correctAnswer)) {
      correct = activePracticeQuestion.correctAnswer.some(
        ans => ans.toLowerCase().trim() === practiceAnswer.toLowerCase().trim()
      );
    } else {
      correct = activePracticeQuestion.correctAnswer.toLowerCase().trim() === practiceAnswer.toLowerCase().trim();
    }

    setPracticeFeedback({ isCorrect: correct, show: true });

    if (correct) {
      markMistakeMastered(activePracticeQuestion.id);
    } else {
      soundService.playIncorrect();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#141724] border border-fiesta-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-[#1A1D2E] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/40">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Cuaderno de Repaso y Errores</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">
                  {pendingMistakes.length} pendientes
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Sistema de repaso espaciado: practica tus fallos hasta dominarlos (+25 XP por corrección).
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

        {/* Filter tabs */}
        <div className="px-5 py-2.5 bg-slate-900/90 border-b border-fiesta-border/70 flex items-center space-x-2 text-xs font-semibold shrink-0">
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'pending'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Pendientes ({pendingMistakes.length})
          </button>
          <button
            onClick={() => setFilter('mastered')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'mastered'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Dominadas ({masteredMistakes.length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Todas ({mistakesList.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 grow">
          {/* Active Practice Interactive Card */}
          {activePracticeQuestion && (
            <div className="p-5 rounded-2xl bg-[#1C2033] border-2 border-amber-400 shadow-xl space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Modo Práctica de Repaso</span>
                </span>
                <button
                  onClick={() => setActivePracticeQuestion(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cerrar Práctica ✕
                </button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-bold text-white leading-relaxed">
                  {activePracticeQuestion.prompt}
                </p>
                {activePracticeQuestion.audioText && (
                  <button
                    onClick={() => soundService.speakSpanish(activePracticeQuestion.audioText!)}
                    className="p-2 rounded-full bg-slate-800 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors shrink-0"
                    title="Escuchar audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Multiple Choice Options or Text Input */}
              {activePracticeQuestion.options ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePracticeQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      disabled={practiceFeedback.show && practiceFeedback.isCorrect}
                      onClick={() => setPracticeAnswer(opt)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                        practiceAnswer === opt
                          ? 'bg-amber-500/20 border-amber-400 text-white'
                          : 'bg-fiesta-card hover:bg-slate-700/60 border-slate-700 text-slate-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  disabled={practiceFeedback.show && practiceFeedback.isCorrect}
                  value={practiceAnswer}
                  onChange={e => setPracticeAnswer(e.target.value)}
                  placeholder="Escribe la corrección..."
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              )}

              {/* Feedback box */}
              {practiceFeedback.show && (
                <div className={`p-3.5 rounded-xl border text-xs sm:text-sm ${
                  practiceFeedback.isCorrect
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/40 border-rose-500 text-rose-200'
                }`}>
                  <div className="font-bold flex items-center space-x-1.5 mb-1">
                    {practiceFeedback.isCorrect ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>¡Excelente! Pregunta dominada (+25 XP ganados).</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span>Aún no es correcto. Vuelve a intentarlo.</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs">{activePracticeQuestion.explanation}</p>
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  onClick={handleCheckPractice}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-bold text-xs sm:text-sm shadow"
                >
                  Comprobar Repaso
                </button>
              </div>
            </div>
          )}

          {/* List of mistakes */}
          {displayedList.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                ✨
              </div>
              <h3 className="text-lg font-bold text-white">
                {filter === 'pending' ? '¡Sin errores pendientes!' : 'No hay preguntas en este filtro'}
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {filter === 'pending'
                  ? '¡Excelente trabajo! Has dominado todas las preguntas o aún no has fallado ninguna.'
                  : 'Continúa jugando para registrar tu historial de aprendizaje.'}
              </p>
            </div>
          ) : (
            displayedList.map(item => {
              const city = getCityById(item.cityId);
              return (
                <div
                  key={item.questionId}
                  className={`p-4 rounded-xl border transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.mastered
                      ? 'bg-slate-900/40 border-slate-800'
                      : 'bg-[#181B2B] border-slate-700/80 shadow-sm hover:border-slate-600'
                  }`}
                >
                  <div className="space-y-1 max-w-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-amber-400">
                        {city ? city.name : 'España'}
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs text-slate-400">
                        Fallada {item.failCount} {item.failCount === 1 ? 'vez' : 'veces'}
                      </span>
                      {item.mastered && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Dominada</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-white leading-relaxed">
                      {item.prompt}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {item.explanation}
                    </p>
                  </div>

                  <button
                    onClick={() => handleStartPractice(item.questionId)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center justify-center space-x-1.5 self-start sm:self-center"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{item.mastered ? 'Repasar de nuevo' : 'Practicar y dominar'}</span>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

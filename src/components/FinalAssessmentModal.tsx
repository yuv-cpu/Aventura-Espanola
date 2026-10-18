import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CUMULATIVE_FINAL_ASSESSMENT } from '../data/festivalData';
import { Question } from '../types';
import { soundService } from '../services/soundService';
import { 
  X, 
  GraduationCap, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Trophy, 
  Volume2, 
  Award, 
  Download, 
  Printer,
  Sparkles
} from 'lucide-react';

interface FinalAssessmentModalProps {
  onClose: () => void;
}

export const FinalAssessmentModal: React.FC<FinalAssessmentModalProps> = ({ onClose }) => {
  const { recordFinalAssessment, progress } = useGame();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<{
    correctCount: number;
    scorePercent: number;
    passed: boolean;
    certificateId: string;
    moduleBreakdown: Record<number, { correct: number; total: number }>;
  } | null>(null);

  const [studentName, setStudentName] = useState<string>('Alex el Viajero');

  const totalQuestions = CUMULATIVE_FINAL_ASSESSMENT.length;
  const currentQ: Question = CUMULATIVE_FINAL_ASSESSMENT[currentIndex];

  // Set up word order words if current question is word-order
  React.useEffect(() => {
    if (currentQ.type === 'word-order' && currentQ.sentencePieces) {
      if (!answers[currentQ.id]) {
        setConstructedWords([]);
        setAvailableWords([...currentQ.sentencePieces]);
      } else {
        const parts = answers[currentQ.id].split(' ');
        setConstructedWords(parts);
        setAvailableWords(currentQ.sentencePieces.filter(w => !parts.includes(w)));
      }
    }
  }, [currentIndex, currentQ.id]);

  const handleSelectOption = (opt: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: opt
    }));
  };

  const addWord = (word: string, index: number) => {
    const updated = [...constructedWords, word];
    setConstructedWords(updated);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: updated.join(' ')
    }));
  };

  const removeWord = (word: string, index: number) => {
    const updated = constructedWords.filter((_, i) => i !== index);
    setConstructedWords(updated);
    setAvailableWords(prev => [...prev, word]);
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: updated.join(' ')
    }));
  };

  const handleFinishExam = () => {
    let correctCount = 0;
    const moduleBreakdown: Record<number, { correct: number; total: number }> = {
      1: { correct: 0, total: 6 },
      2: { correct: 0, total: 6 },
      3: { correct: 0, total: 6 },
      4: { correct: 0, total: 6 },
      5: { correct: 0, total: 6 }
    };

    CUMULATIVE_FINAL_ASSESSMENT.forEach((q, idx) => {
      const userAns = (answers[q.id] || '').trim().toLowerCase();
      const modNum = Math.floor(idx / 6) + 1;

      let isCorrect = false;
      if (Array.isArray(q.correctAnswer)) {
        isCorrect = q.correctAnswer.some(a => a.toLowerCase().trim() === userAns);
      } else {
        isCorrect = q.correctAnswer.toLowerCase().trim() === userAns;
      }

      if (isCorrect) {
        correctCount++;
        moduleBreakdown[modNum].correct++;
      }
    });

    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const res = recordFinalAssessment(scorePercent);

    setFinalScore({
      correctCount,
      scorePercent,
      passed: res.passed,
      certificateId: res.certificateId,
      moduleBreakdown
    });
    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141724] border-2 border-amber-400 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-gradient-to-r from-[#2B1B2A] to-[#1C1F33] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 text-xl">
              🎓
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white">Examen Oficial Acumulativo BAESP101</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  30 Preguntas • Módulos 1 a 5
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Certificación oficial de competencia lingüística en español A1.
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

        {!isSubmitted ? (
          <>
            {/* Question Quick Grid Navigator */}
            <div className="px-5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto shrink-0">
              {CUMULATIVE_FINAL_ASSESSMENT.map((q, idx) => {
                const isAnswered = Boolean(answers[q.id]);
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition-all ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950 ring-2 ring-white scale-110'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Exam Content Body */}
            <div className="p-6 overflow-y-auto space-y-5 grow text-left">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                <span>PREGUNTA {currentIndex + 1} DE {totalQuestions}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  Módulo {Math.floor(currentIndex / 6) + 1}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                  {currentQ.prompt}
                </p>
                {currentQ.audioText && (
                  <button
                    onClick={() => soundService.speakSpanish(currentQ.audioText!)}
                    className="p-2.5 rounded-full bg-slate-800 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors shrink-0"
                    title="Escuchar audio"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Multiple Choice */}
              {currentQ.type === 'multiple-choice' && currentQ.options && (
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                        answers[currentQ.id] === opt
                          ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                          : 'bg-[#181B2B] hover:bg-slate-700/60 border-slate-700 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full bg-slate-800 text-xs font-bold flex items-center justify-center text-slate-400">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Fill in the blank */}
              {currentQ.type === 'fill-blank' && (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={answers[currentQ.id] || ''}
                    onChange={e => handleSelectOption(e.target.value)}
                    placeholder="Escribe tu respuesta aquí..."
                    className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white text-base focus:outline-none focus:border-amber-400"
                  />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(char => (
                      <button
                        key={char}
                        type="button"
                        onClick={() => handleSelectOption((answers[currentQ.id] || '') + char)}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-sm border border-slate-700 transition-colors"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Word Order */}
              {currentQ.type === 'word-order' && (
                <div className="space-y-4">
                  <div className="min-h-[64px] p-3 rounded-xl bg-slate-900/90 border-2 border-dashed border-slate-700 flex flex-wrap items-center gap-2">
                    {constructedWords.length === 0 ? (
                      <span className="text-xs text-slate-500 italic">
                        Pulsa las palabras para ordenar la frase...
                      </span>
                    ) : (
                      constructedWords.map((word, idx) => (
                        <button
                          key={`fc-${idx}`}
                          onClick={() => removeWord(word, idx)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow hover:bg-amber-400"
                        >
                          {word} ✕
                        </button>
                      ))
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {availableWords.map((word, idx) => (
                      <button
                        key={`fa-${idx}`}
                        onClick={() => addWord(word, idx)}
                        className="px-3.5 py-2 rounded-lg bg-fiesta-card hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 shadow-sm"
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigator Footer */}
            <div className="px-6 py-4 bg-[#1A1D2E] border-t border-fiesta-border flex items-center justify-between shrink-0">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 font-bold text-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="text-xs text-slate-400">
                Respondidas: <strong>{Object.keys(answers).length}</strong> de {totalQuestions}
              </div>

              {currentIndex + 1 < totalQuestions ? (
                <button
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="flex items-center space-x-1 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishExam}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg"
                >
                  Entregar Examen Oficial
                </button>
              )}
            </div>
          </>
        ) : (
          /* Official Exam Result & Certificate Generator */
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-center grow">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto text-4xl shadow-2xl border-2 border-amber-300 bg-amber-500/20">
              {finalScore?.passed ? '🏆' : '📚'}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                {finalScore?.passed ? '¡ENHORABUENA! EXAMEN OFICIAL SUPERADO' : 'EXAMEN NO SUPERADO'}
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-lg mx-auto">
                {finalScore?.passed
                  ? `Has obtenido un ${finalScore.scorePercent}% (${finalScore.correctCount}/${totalQuestions} aciertos). Has acreditado oficialmente el dominio del curso Spanish Level I (BAESP101).`
                  : `Has obtenido un ${finalScore?.scorePercent}% (${finalScore?.correctCount}/${totalQuestions}). Se requiere un 70% para aprobar. Puedes repasar y volver a intentarlo.`}
              </p>
            </div>

            {/* Module Breakdown Grid */}
            {finalScore && (
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-2xl mx-auto text-left">
                {[1, 2, 3, 4, 5].map(m => (
                  <div key={m} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-amber-400 font-bold block">Módulo {m}</span>
                    <span className="text-sm font-extrabold text-white">
                      {finalScore.moduleBreakdown[m].correct} / {finalScore.moduleBreakdown[m].total}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Official Diploma Certificate Preview (Printable) */}
            {finalScore?.passed && (
              <div id="diploma-certificate" className="p-8 rounded-3xl bg-gradient-to-b from-[#FDFBF7] to-[#F5EEDC] text-slate-900 border-8 border-double border-[#966827] shadow-2xl max-w-2xl mx-auto my-6 text-center font-serif relative overflow-hidden">
                <div className="absolute top-2 left-2 text-2xl opacity-40">👑</div>
                <div className="absolute top-2 right-2 text-2xl opacity-40">🇪🇸</div>

                <div className="space-y-3">
                  <span className="text-xs font-black tracking-widest uppercase text-amber-900 block">
                    REINO DE ESPAÑA • ACADEMIA DE LA LENGUA ESPAÑOLA
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    Diploma de Nivel I (A1)
                  </h4>
                  <p className="text-xs text-slate-700 italic">
                    Conforme al Plan Curricular Oficial BAESP101 y Marco Común Europeo (MCER)
                  </p>

                  <div className="my-4 pt-2">
                    <p className="text-xs text-slate-600">Se certifica con honores que el viajero:</p>
                    <input
                      type="text"
                      value={studentName}
                      onChange={e => setStudentName(e.target.value)}
                      className="text-2xl font-black text-center text-[#8B2635] bg-transparent border-b-2 border-[#8B2635]/40 focus:outline-none w-full max-w-md my-1 font-serif"
                    />
                  </div>

                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                    Ha completado con éxito la expedición lingüística de 15 ciudades en <strong>¡Aventura Española!</strong> y superado el Examen Acumulativo con una calificación sobresaliente del <strong>{finalScore.scorePercent}%</strong>.
                  </p>

                  <div className="pt-6 border-t border-amber-900/20 flex items-center justify-between text-xs text-slate-800">
                    <div>
                      <p className="font-bold">Fecha de expedición:</p>
                      <p className="font-mono">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#8B2635] flex items-center justify-center text-xs font-bold text-[#8B2635]">
                      SELLO OFICIAL
                    </div>
                    <div>
                      <p className="font-bold">Código de Certificado:</p>
                      <p className="font-mono text-[11px]">{finalScore.certificateId}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Certificate Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {finalScore?.passed && (
                <button
                  onClick={handlePrint}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center space-x-2 border border-slate-700"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir Diploma</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-8 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg"
              >
                Volver a La Fiesta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

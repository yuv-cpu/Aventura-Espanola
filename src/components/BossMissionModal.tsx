import React, { useState, useEffect } from 'react';
import { useGame, REWARD_CONFIG } from '../context/GameContext';
import { BossMission, Question } from '../types';
import { soundService } from '../services/soundService';
import { 
  X, 
  ShieldAlert, 
  Volume2, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Coins, 
  Sparkles,
  Lock,
  Play
} from 'lucide-react';

interface BossMissionModalProps {
  bossMission: BossMission;
  cityName: string;
  onClose: () => void;
  onSuccess: (unlockedNextCityId?: string) => void;
}

export const BossMissionModal: React.FC<BossMissionModalProps> = ({
  bossMission,
  cityName,
  onClose,
  onSuccess
}) => {
  const { recordBossCompleted, progress } = useGame();

  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [fillBlankInput, setFillBlankInput] = useState<string>('');
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [resultSummary, setResultSummary] = useState<{
    passed: boolean;
    unlockedNextCityId?: string;
    scorePercent: number;
    bonusCoins: number;
  } | null>(null);

  const currentQuestion: Question = bossMission.questions[currentIndex];

  useEffect(() => {
    setSelectedOption('');
    setFillBlankInput('');
    setHasSubmitted(false);
    setIsCorrect(false);

    if (currentQuestion?.type === 'word-order' && currentQuestion?.sentencePieces) {
      setConstructedWords([]);
      setAvailableWords([...currentQuestion.sentencePieces]);
    }

    if (hasStarted && currentQuestion?.audioText) {
      soundService.speakSpanish(currentQuestion.audioText);
    }
  }, [currentIndex, currentQuestion?.id, hasStarted]);

  const addWordToConstructed = (word: string, index: number) => {
    if (hasSubmitted) return;
    setConstructedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
  };

  const removeWordFromConstructed = (word: string, index: number) => {
    if (hasSubmitted) return;
    setConstructedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const insertAccent = (char: string) => {
    setFillBlankInput(prev => prev + char);
  };

  const handleCheck = () => {
    if (hasSubmitted) return;

    let userVal = '';
    if (currentQuestion.type === 'multiple-choice') {
      userVal = selectedOption;
    } else if (currentQuestion.type === 'fill-blank') {
      userVal = fillBlankInput.trim();
    } else if (currentQuestion.type === 'word-order') {
      userVal = constructedWords.join(' ').trim();
    }

    if (!userVal) return;

    let correct = false;
    if (Array.isArray(currentQuestion.correctAnswer)) {
      correct = currentQuestion.correctAnswer.some(
        ans => ans.toLowerCase().trim() === userVal.toLowerCase().trim()
      );
    } else {
      correct = currentQuestion.correctAnswer.toLowerCase().trim() === userVal.toLowerCase().trim();
    }

    setIsCorrect(correct);
    setHasSubmitted(true);

    if (correct) {
      soundService.playCorrect();
      setCorrectCount(prev => prev + 1);
    } else {
      soundService.playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < bossMission.questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Evaluate Boss Mastery
      const total = bossMission.questions.length;
      const finalCorrect = correctCount + (isCorrect ? 1 : 0);
      const scorePercent = Math.round((finalCorrect / total) * 100);
      const res = recordBossCompleted(bossMission.cityId, scorePercent);
      setResultSummary({
        passed: res.passed,
        unlockedNextCityId: res.unlockedNextCityId,
        scorePercent,
        bonusCoins: res.bonusCoins
      });
      setIsFinished(true);
    }
  };

  const handleRetryBoss = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setIsFinished(false);
    setResultSummary(null);
    setHasStarted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#141624] border-3 border-fiesta-red rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Boss Header Banner */}
        <div className="px-6 py-4 border-b-2 border-fiesta-border/80 flex items-center justify-between bg-gradient-to-r from-[#2B1418] via-[#201A2C] to-[#141624]">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{bossMission.badgeIcon}</span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black text-rose-400 uppercase tracking-wider">
                  Misión de Jefe • {cityName}
                </span>
                {hasStarted && (
                  <span className="text-xs text-slate-400">
                    (Fase {currentIndex + 1} de {bossMission.questions.length})
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {bossMission.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCREEN 12: Boss Mission Intro Briefing (Before starting) */}
        {!hasStarted ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            {/* Illustrated Boss Portrait */}
            <div className="relative w-28 h-28 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-rose-600 via-amber-500 to-rose-400 p-1 shadow-2xl glow-red flex items-center justify-center">
                <div className="w-full h-full bg-[#1A1828] rounded-full overflow-hidden flex items-center justify-center text-5xl">
                  {/* Boss Matador / Hidalgo SVG Portrait */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="#1C1826" />
                    {/* Cape */}
                    <path d="M 15 100 Q 50 65 85 100 Z" fill="#C60B1E" />
                    {/* Neck & Face */}
                    <ellipse cx="50" cy="52" rx="20" ry="22" fill="#DEB887" />
                    {/* Eyes */}
                    <circle cx="43" cy="50" r="2.5" fill="#1A1A1A" />
                    <circle cx="57" cy="50" r="2.5" fill="#1A1A1A" />
                    {/* Curled Mustache */}
                    <path d="M 36 60 Q 50 56 64 60 Q 58 64 50 62 Q 42 64 36 60 Z" fill="#2C1810" />
                    {/* Spanish Hat / Cordobés */}
                    <ellipse cx="50" cy="38" rx="34" ry="7" fill="#1A1A1A" />
                    <rect x="30" y="20" width="40" height="18" rx="3" fill="#1A1A1A" />
                    <rect x="30" y="32" width="40" height="5" fill="#C60B1E" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Reto Cumbre de {cityName}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                ¡Bienvenido al Desafío de {bossMission.characterName}!
              </h3>
              <p className="text-xs font-bold text-rose-400 mt-0.5">
                {bossMission.characterRole}
              </p>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-3 leading-relaxed">
                "{bossMission.scenario}"
              </p>
            </div>

            {/* Boss requirements pill */}
            <div className="p-4 rounded-2xl bg-[#1C1F33] border border-rose-500/40 text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-300 uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Condiciones de Victoria:</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 pl-2">
                <li>• Responder {bossMission.questions.length} situaciones comunicativas en español.</li>
                <li>• Obtener al menos un <strong>80% de aciertos</strong> para desbloquear la siguiente ciudad.</li>
                <li>• Recompensa: <strong>+{bossMission.coinReward} monedas</strong> y el trofeo <strong>{bossMission.badgeName}</strong>.</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setHasStarted(true);
                soundService.playCorrect();
              }}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-fiesta-red via-red-600 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-black text-base shadow-2xl transition-all border-2 border-amber-300/60 glow-red hover:scale-105"
            >
              Comenzar Desafío del Jefe (Start Boss Challenge)
            </button>
          </div>
        ) : !isFinished ? (
          <div>
            {/* Boss Live Gauge */}
            <div className="px-6 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Umbral de Victoria: <strong>80% de aciertos</strong></span>
              </div>
              <div className="font-bold text-amber-400">
                Aciertos: {correctCount} / {bossMission.questions.length}
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* NPC Boss Prompt Header with speech bubble */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#1A1E30] border border-fiesta-border/80">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 border-2 border-rose-500/50 text-2xl flex items-center justify-center shrink-0">
                  {bossMission.badgeIcon}
                </div>
                <div className="grow">
                  <span className="text-xs font-bold text-amber-300 block">
                    {bossMission.characterName} ({bossMission.characterRole})
                  </span>
                  <p className="text-sm sm:text-base text-white mt-1 font-semibold leading-relaxed">
                    {currentQuestion.prompt}
                  </p>
                  {currentQuestion.englishPrompt && (
                    <p className="text-xs text-slate-400 mt-1 italic">
                      {currentQuestion.englishPrompt}
                    </p>
                  )}
                </div>
                {currentQuestion.audioText && (
                  <button
                    onClick={() => soundService.speakSpanish(currentQuestion.audioText!)}
                    className="p-2 rounded-full bg-slate-800 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors shrink-0"
                    title="Escuchar audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Question Interaction (Panel 8 Style) */}
              {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = selectedOption === opt;
                    const isAnswer = hasSubmitted && opt === currentQuestion.correctAnswer;
                    const isWrongSelection = hasSubmitted && isSelected && !isCorrect;

                    return (
                      <button
                        key={idx}
                        disabled={hasSubmitted}
                        onClick={() => setSelectedOption(opt)}
                        className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base transition-all flex items-center justify-between shadow-md active:scale-98 ${
                          isAnswer
                            ? 'bg-gradient-to-r from-emerald-600 to-green-600 border-emerald-300 text-white shadow-emerald-500/30'
                            : isWrongSelection
                            ? 'bg-rose-950/80 border-rose-500 text-rose-100'
                            : isSelected
                            ? 'bg-amber-500/25 border-amber-400 text-white shadow-amber-500/20'
                            : 'bg-[#1E243A] hover:bg-[#272E4A] border-slate-700/80 text-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className={`w-9 h-9 rounded-full font-black text-sm flex items-center justify-center shrink-0 shadow-md ${
                            isAnswer
                              ? 'bg-white text-emerald-700'
                              : isSelected
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-blue-600 text-white'
                          }`}>
                            {letter}
                          </div>
                          <span>{opt}</span>
                        </div>
                        {isAnswer && (
                          <div className="w-7 h-7 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow font-black text-base shrink-0">
                            ✓
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'fill-blank' && (
                <div className="space-y-3">
                  <input
                    type="text"
                    disabled={hasSubmitted}
                    value={fillBlankInput}
                    onChange={e => setFillBlankInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleCheck()}
                    placeholder="Escribe la respuesta exacta..."
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-fiesta-border text-white text-base focus:outline-none focus:border-amber-400"
                  />
                  {!hasSubmitted && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(char => (
                        <button
                          key={char}
                          type="button"
                          onClick={() => insertAccent(char)}
                          className="w-8 h-8 rounded-lg bg-fiesta-card hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-sm border border-fiesta-border transition-colors flex items-center justify-center"
                        >
                          {char}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {currentQuestion.type === 'word-order' && (
                <div className="space-y-4">
                  <div className="min-h-[64px] p-3 rounded-xl bg-slate-900/90 border-2 border-dashed border-fiesta-border flex flex-wrap items-center gap-2">
                    {constructedWords.length === 0 ? (
                      <span className="text-xs text-slate-500 italic">
                        Construye la frase del jefe pulsando las palabras en orden...
                      </span>
                    ) : (
                      constructedWords.map((word, idx) => (
                        <button
                          key={`bc-${idx}`}
                          disabled={hasSubmitted}
                          onClick={() => removeWordFromConstructed(word, idx)}
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
                        key={`ba-${idx}`}
                        disabled={hasSubmitted}
                        onClick={() => addWordToConstructed(word, idx)}
                        className="px-3.5 py-2 rounded-lg bg-fiesta-card hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-fiesta-border shadow-sm active:scale-95 transition-all"
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Explanation drawer */}
              {hasSubmitted && (
                <div className={`p-4 rounded-xl border animate-fadeIn ${
                  isCorrect 
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' 
                    : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
                }`}>
                  <div className="flex items-center space-x-2 font-bold text-sm mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span>¡Fase del jefe superada!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-400" />
                        <span>Fallo en la respuesta</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {currentQuestion.explanation}
                  </p>
                  {!isCorrect && (
                    <p className="text-xs text-amber-300 font-semibold mt-1">
                      Respuesta correcta: {Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(' / ') : currentQuestion.correctAnswer}
                    </p>
                  )}
                </div>
              )}

              {/* Submit / Next Buttons */}
              <div className="pt-3 border-t border-fiesta-border/70 flex justify-end">
                {!hasSubmitted ? (
                  <button
                    onClick={handleCheck}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fiesta-red to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-extrabold text-sm shadow-md transition-all"
                  >
                    Confirmar al Jefe
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center space-x-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md transition-all"
                  >
                    <span>{currentIndex + 1 < bossMission.questions.length ? 'Siguiente Fase' : 'Veredicto Final'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Boss Mission Final Verdict */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto text-4xl shadow-2xl border-2 border-amber-300 bg-amber-500/20">
              {resultSummary?.passed ? bossMission.badgeIcon : '❌'}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                {resultSummary?.passed ? '¡VICTORIA Y MAESTRÍA DEMOSTRADA!' : 'UMBRAL DE MAESTRÍA NO ALCANZADO'}
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-md mx-auto">
                {resultSummary?.passed
                  ? `Has obtenido un ${resultSummary.scorePercent}% de aciertos (mínimo 80% superado). ${bossMission.characterName} te otorga su máxima bendición y el salvoconducto.`
                  : `Has obtenido un ${resultSummary?.scorePercent}%. Se requiere un 80% o más para abrir la siguiente ciudad. Repasa los niveles y vuelve a intentarlo.`}
              </p>
            </div>

            {resultSummary?.passed && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#1C1F33] p-4 rounded-xl border border-fiesta-border max-w-lg mx-auto">
                <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
                  <Coins className="w-5 h-5 text-amber-400" />
                  <span>+{bossMission.coinReward} Monedas de Bonificación</span>
                </div>
                <div className="flex items-center space-x-2 text-sky-300 font-bold text-sm">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                  <span>+{bossMission.xpReward} XP</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300 font-bold text-sm">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span>{bossMission.badgeName}</span>
                </div>
              </div>
            )}

            <div className="flex justify-center space-x-3">
              {resultSummary?.passed ? (
                <button
                  onClick={() => {
                    onSuccess(resultSummary.unlockedNextCityId);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm shadow-xl transition-all"
                >
                  Continuar hacia la Próxima Ciudad
                </button>
              ) : (
                <button
                  onClick={handleRetryBoss}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reintentar Misión de Jefe</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

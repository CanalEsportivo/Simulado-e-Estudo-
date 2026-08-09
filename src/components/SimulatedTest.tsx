import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { Clock, ChevronLeft, ChevronRight, Home, CheckCircle, AlertTriangle, HelpCircle, BookOpen } from 'lucide-react';

interface SimulatedTestProps {
  questions: Question[];
  title: string;
  isSimulatedMode: boolean; // true = 30-min timer exam, false = study mode
  onFinish: (answers: Record<number, string>, timeSpentSeconds: number) => void;
  onExit: () => void;
  onSaveMistake?: (idx: number) => void;
  onRemoveMistake?: (idx: number) => void;
}

export const SimulatedTest: React.FC<SimulatedTestProps> = ({
  questions,
  title,
  isSimulatedMode,
  onFinish,
  onExit,
  onSaveMistake,
  onRemoveMistake,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedStudy, setCheckedStudy] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
  const startTimeRef = useRef(Date.now());

  const currentQ = questions[currentIndex];
  const total = questions.length;
  const currentAnswer = answers[currentIndex];

  // Timer effect for simulated mode
  useEffect(() => {
    if (!isSimulatedMode) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, 60 * 60 - elapsed);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        handleFinishTest();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isSimulatedMode]);

  const handleSelectOption = (letter: string) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: letter }));
    if (!isSimulatedMode && checkedStudy) {
      setCheckedStudy(false);
    }
  };

  const handleCheckStudy = () => {
    if (!currentAnswer) {
      alert('Por favor, selecione uma alternativa antes de verificar.');
      return;
    }

    if (!checkedStudy) {
      if (currentAnswer !== currentQ.answer) {
        if (onSaveMistake) onSaveMistake(currentQ.idx);
      } else {
        if (onRemoveMistake) onRemoveMistake(currentQ.idx);
      }
      setCheckedStudy(true);
    } else {
      // Go to next
      if (currentIndex < total - 1) {
        setCurrentIndex(prev => prev + 1);
        setCheckedStudy(false);
      } else {
        handleFinishTest();
      }
    }
  };

  const handleNext = () => {
    if (isSimulatedMode && !currentAnswer) {
      alert('Selecione uma alternativa antes de continuar.');
      return;
    }

    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinishTest();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setCheckedStudy(false);
    }
  };

  const handleFinishTest = () => {
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    onFinish(answers, timeSpent);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const progressPercent = ((currentIndex + 1) / total) * 100;

  if (!currentQ) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn pb-12">
      {/* Test Bar / Status */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#62748a] dark:text-slate-400 uppercase tracking-wider block">
            {title}
          </span>
          <div className="text-base font-extrabold text-[#172b4d] dark:text-slate-100">
            Questão {currentIndex + 1} <span className="text-[#62748a] dark:text-slate-400 text-sm font-semibold">de {total}</span>
          </div>
        </div>

        {isSimulatedMode ? (
          <div className="flex items-center gap-2 bg-[#102a43] dark:bg-slate-900 text-white px-3.5 py-1.5 rounded-xl font-mono font-bold text-sm shadow-inner border border-transparent dark:border-slate-700">
            <Clock className="w-4 h-4 text-blue-300" />
            <span id="timer">{formatTime(timeLeft)}</span>
          </div>
        ) : (
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-[#1769aa] dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Modo Estudo
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-[#1769aa] dark:bg-blue-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Group Tag */}
        <div className="inline-block px-3 py-1 rounded-full bg-[#f4f7fb] dark:bg-slate-800 border border-[#dbe4ee] dark:border-slate-700 text-xs font-bold text-[#172b4d] dark:text-slate-200">
          {currentQ.group}
        </div>

        {/* Question Text & Image */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#1769aa] dark:text-blue-400">Questão #{String(currentQ.number).padStart(2, '0')} do banco de dados do IMT</div>

          {currentQ.imageUrl && (
            <div className="w-full rounded-xl overflow-hidden border border-[#dbe4ee] dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-900 max-h-72 flex items-center justify-center p-2">
              <img
                src={currentQ.imageUrl}
                alt={`Imagem da questão ${currentQ.number}`}
                className="max-h-64 object-contain rounded-lg w-full"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <h2 className="text-lg md:text-xl font-bold text-[#172b4d] dark:text-slate-100 leading-relaxed whitespace-pre-line">
            {currentQ.question}
          </h2>
        </div>

        {/* Alternatives List */}
        <div className="space-y-3 pt-2">
          {currentQ.alternatives.map(alt => {
            const isSelected = currentAnswer === alt.letter;
            const isCorrect = alt.letter === currentQ.answer;

            let buttonStyle = 'bg-white dark:bg-slate-800/80 border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200 hover:border-[#1769aa]/50 dark:hover:border-blue-500';

            if (isSimulatedMode) {
              if (isSelected) {
                buttonStyle = 'bg-[#eef7ff] dark:bg-blue-950/60 border-2 border-[#1769aa] dark:border-blue-500 text-[#172b4d] dark:text-blue-100 shadow-sm';
              }
            } else {
              // Study Mode with check
              if (checkedStudy) {
                if (isCorrect) {
                  buttonStyle = 'bg-[#eaf8f0] dark:bg-emerald-950/70 border-2 border-[#16794b] dark:border-emerald-500 text-[#16794b] dark:text-emerald-300 font-bold';
                } else if (isSelected && !isCorrect) {
                  buttonStyle = 'bg-[#fff0ee] dark:bg-rose-950/70 border-2 border-[#b42318] dark:border-rose-500 text-[#b42318] dark:text-rose-300 font-bold';
                } else {
                  buttonStyle = 'bg-slate-50 dark:bg-slate-900/40 border-[#dbe4ee] dark:border-slate-800 text-slate-400 dark:text-slate-600 opacity-60';
                }
              } else if (isSelected) {
                buttonStyle = 'bg-[#eef7ff] dark:bg-blue-950/60 border-2 border-[#1769aa] dark:border-blue-500 text-[#172b4d] dark:text-blue-100 shadow-sm';
              }
            }

            return (
              <button
                key={alt.letter}
                onClick={() => handleSelectOption(alt.letter)}
                className={`w-full text-left p-4 rounded-xl border text-sm md:text-base font-semibold transition-all flex items-start gap-3 ${buttonStyle}`}
              >
                <span className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
                  {alt.letter}
                </span>
                <span className="flex-1 leading-relaxed whitespace-pre-line">{alt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Study Mode Feedback Box */}
        {!isSimulatedMode && checkedStudy && (
          <div className="space-y-3">
            <div
              className={`p-4 rounded-xl text-sm font-medium border flex items-start gap-3 ${
                currentAnswer === currentQ.answer
                  ? 'bg-[#eaf8f0] dark:bg-emerald-950/60 border-[#16794b]/30 dark:border-emerald-800 text-[#16794b] dark:text-emerald-300'
                  : 'bg-[#fff0ee] dark:bg-rose-950/60 border-[#b42318]/30 dark:border-rose-800 text-[#b42318] dark:text-rose-300'
              }`}
            >
              {currentAnswer === currentQ.answer ? (
                <>
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#16794b] dark:text-emerald-400" />
                  <div>
                    <strong>Resposta Correta!</strong> A alternativa <strong>{currentQ.answer}</strong> está certa.
                  </div>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-[#b42318] dark:text-rose-400" />
                  <div>
                    <strong>Resposta Incorreta.</strong> A alternativa correta é a <strong>{currentQ.answer}</strong>.
                  </div>
                </>
              )}
            </div>

            {/* Explanation / Justification Box */}
            <div className="p-4 rounded-xl bg-[#f0f7ff] dark:bg-blue-950/50 border border-[#1769aa]/20 dark:border-blue-800 text-[#102a43] dark:text-slate-200 space-y-1.5 text-sm">
              <div className="flex items-center gap-2 font-bold text-[#1769aa] dark:text-blue-300">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Justificação / Motivo da Resposta:</span>
              </div>
              {currentQ.explanation ? (
                <p className="text-xs md:text-sm leading-relaxed text-[#172b4d] dark:text-slate-200 font-normal pt-1">
                  {currentQ.explanation}
                </p>
              ) : (
                <p className="text-xs text-[#62748a] dark:text-slate-400 pt-1 leading-relaxed">
                  Pode fornecer os links ou justificações das questões para preenchermos este campo para todas as perguntas do módulo.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#dbe4ee]">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 rounded-xl border border-[#dbe4ee] text-xs font-bold text-[#172b4d] bg-[#f4f7fb] hover:bg-[#e6edf4] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          {isSimulatedMode ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-[#1769aa] hover:bg-[#125387] text-white text-xs font-extrabold shadow-sm flex items-center gap-1.5 transition-all"
            >
              {currentIndex === total - 1 ? 'Finalizar Simulado' : 'Próxima'} <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleCheckStudy}
              className="px-6 py-2.5 rounded-xl bg-[#1769aa] hover:bg-[#125387] text-white text-xs font-extrabold shadow-sm flex items-center gap-1.5 transition-all"
            >
              {checkedStudy ? (currentIndex === total - 1 ? 'Finalizar' : 'Continuar') : 'Verificar Resposta'}
            </button>
          )}
        </div>
      </div>

      {/* Quick Navigation Dots / Quick Switcher */}
      <div className="bg-white border border-[#dbe4ee] rounded-2xl p-4 shadow-sm space-y-2">
        <div className="text-xs font-bold text-[#62748a] flex items-center justify-between">
          <span>Navegador de Questões</span>
          <span>{Object.keys(answers).length} de {total} respondidas</span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pt-1">
          {questions.map((q, idx) => {
            const isAns = answers[idx] !== undefined;
            const isCurr = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setCheckedStudy(false);
                }}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all border ${
                  isCurr
                    ? 'ring-2 ring-[#1769aa] bg-[#102a43] text-white border-[#102a43]'
                    : isAns
                    ? 'bg-blue-100 text-[#1769aa] border-blue-200'
                    : 'bg-[#f4f7fb] text-[#62748a] border-[#dbe4ee] hover:border-slate-400'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Exit Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => {
            if (confirm('Sair do teste atual e voltar ao menu principal?')) {
              onExit();
            }
          }}
          className="text-xs font-bold text-[#62748a] hover:text-[#b42318] flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-all"
        >
          <Home className="w-3.5 h-3.5" /> Voltar ao Menu Principal
        </button>
      </div>
    </div>
  );
};

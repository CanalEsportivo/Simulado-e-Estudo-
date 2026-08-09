import React from 'react';
import { Question } from '../types';
import { Trophy, XCircle, CheckCircle2, RotateCcw, Home, AlertCircle } from 'lucide-react';

interface ResultViewProps {
  questions: Question[];
  userAnswers: Record<number, string>;
  timeSpentSeconds: number;
  onReviewMistakes: (wrongQuestions: Question[]) => void;
  onRestart: () => void;
  onGoHome: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  onReviewMistakes,
  onRestart,
  onGoHome,
}) => {
  const PASS_SCORE = 27; // 27 out of 30 = 90%
  const total = questions.length;

  let correctCount = 0;
  const wrongQuestions: Question[] = [];

  questions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    if (userAns === q.answer) {
      correctCount++;
    } else {
      wrongQuestions.push(q);
    }
  });

  const isPassed = correctCount >= PASS_SCORE;
  const wrongCount = total - correctCount;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Result Overview Header Card */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm text-center space-y-4">
        <div
          className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center shadow-lg ${
            isPassed ? 'bg-[#16794b] text-white shadow-emerald-900/10' : 'bg-[#b42318] text-white shadow-red-900/10'
          }`}
        >
          {isPassed ? <Trophy className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
        </div>

        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 ${
              isPassed ? 'bg-emerald-100 dark:bg-emerald-950/80 text-[#16794b] dark:text-emerald-300' : 'bg-red-100 dark:bg-red-950/80 text-[#b42318] dark:text-red-300'
            }`}
          >
            {isPassed ? 'Aprovado' : 'Não Aprovado'}
          </span>
          <div className="text-5xl md:text-6xl font-black text-[#172b4d] dark:text-slate-100 tracking-tight">
            {correctCount} <span className="text-2xl md:text-3xl font-bold text-[#62748a] dark:text-slate-400">/ {total}</span>
          </div>
          <p className="text-xs md:text-sm font-semibold text-[#62748a] dark:text-slate-300 mt-2">
            {isPassed
              ? `Parabéns! Atingiu o mínimo de ${PASS_SCORE} acertos para ser aprovado.`
              : `São necessárias pelo menos ${PASS_SCORE} respostas certas (90%) para ser aprovado.`}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#dbe4ee] dark:border-slate-800">
          <div className="p-3 bg-[#f4f7fb] dark:bg-slate-800/60 rounded-xl text-center">
            <span className="block text-xl font-bold text-[#16794b] dark:text-emerald-400">{correctCount}</span>
            <span className="text-[11px] font-semibold text-[#62748a] dark:text-slate-300">Acertos</span>
          </div>
          <div className="p-3 bg-[#f4f7fb] dark:bg-slate-800/60 rounded-xl text-center">
            <span className="block text-xl font-bold text-[#b42318] dark:text-rose-400">{wrongCount}</span>
            <span className="text-[11px] font-semibold text-[#62748a] dark:text-slate-300">Erros</span>
          </div>
          <div className="p-3 bg-[#f4f7fb] dark:bg-slate-800/60 rounded-xl text-center">
            <span className="block text-xl font-bold text-[#172b4d] dark:text-slate-100">{formatTime(timeSpentSeconds)}</span>
            <span className="text-[11px] font-semibold text-[#62748a] dark:text-slate-300">Tempo Gasto</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {wrongQuestions.length > 0 && (
            <button
              onClick={() => onReviewMistakes(wrongQuestions)}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" /> Revisar Apenas Erros ({wrongQuestions.length})
            </button>
          )}

          <button
            onClick={onRestart}
            className="flex-1 bg-[#1769aa] hover:bg-[#125387] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Novo Simulado
          </button>

          <button
            onClick={onGoHome}
            className="bg-[#f4f7fb] dark:bg-slate-800 hover:bg-[#e6edf4] dark:hover:bg-slate-700 text-[#172b4d] dark:text-slate-100 font-bold py-3.5 px-4 rounded-xl text-sm border border-[#dbe4ee] dark:border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Menu Principal
          </button>
        </div>
      </div>

      {/* Breakdown Table Card */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-extrabold text-[#172b4d] dark:text-slate-100 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#1769aa] dark:text-blue-400" /> Resumo de Respostas do Simulado
        </h3>

        <div className="divide-y divide-[#dbe4ee] dark:divide-slate-800 max-h-96 overflow-y-auto pr-1">
          {questions.map((q, idx) => {
            const userAns = userAnswers[idx];
            const isOk = userAns === q.answer;

            return (
              <div key={q.idx} className="py-3 flex items-start gap-3 text-xs md:text-sm">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    isOk ? 'bg-[#eaf8f0] dark:bg-emerald-950/80 text-[#16794b] dark:text-emerald-400' : 'bg-[#fff0ee] dark:bg-rose-950/80 text-[#b42318] dark:text-rose-400'
                  }`}
                >
                  {isOk ? '✓' : '✕'}
                </span>

                <div className="flex-1 space-y-1">
                  <div className="font-bold text-[#172b4d] dark:text-slate-100">
                    Questão #{String(q.number).padStart(2, '0')} do banco de dados do IMT
                  </div>
                  <p className="text-[#62748a] dark:text-slate-300 line-clamp-2">{q.question}</p>
                  {q.explanation && (
                    <p className="text-[11px] text-[#1769aa] dark:text-blue-300 bg-[#f0f7ff] dark:bg-blue-950/50 p-2 rounded-lg border border-[#1769aa]/10 dark:border-blue-800 leading-snug mt-1">
                      <strong>Motivo:</strong> {q.explanation}
                    </p>
                  )}
                </div>

                <div className="text-right shrink-0 font-medium space-y-1">
                  <div>
                    Sua: <span className={isOk ? 'text-[#16794b] dark:text-emerald-400 font-bold' : 'text-[#b42318] dark:text-rose-400 font-bold'}>{userAns || '—'}</span>
                  </div>
                  {!isOk && (
                    <div className="text-[#16794b] dark:text-emerald-400">
                      Certa: <span className="font-bold">{q.answer}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

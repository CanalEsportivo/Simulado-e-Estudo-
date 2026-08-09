import React, { useState, useMemo } from 'react';
import { Question } from '../types';
import { Search, Filter, Home, CheckCircle2, AlertTriangle, Layers, BookOpen } from 'lucide-react';

interface QuestionsBankViewProps {
  questions: Question[];
  onGoHome: () => void;
}

export const QuestionsBankView: React.FC<QuestionsBankViewProps> = ({ questions, onGoHome }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const groups = useMemo(() => {
    const set = new Set<string>();
    questions.forEach(q => set.add(q.group));
    return Array.from(set);
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchGroup = selectedGroup === 'all' || q.group === selectedGroup;
      const term = searchTerm.toLowerCase().trim();
      const matchText =
        !term ||
        q.question.toLowerCase().includes(term) ||
        String(q.number).includes(term) ||
        q.alternatives.some(a => a.text.toLowerCase().includes(term));

      return matchGroup && matchText;
    });
  }, [questions, searchTerm, selectedGroup]);

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn pb-12">
      {/* Header */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#172b4d] dark:text-slate-100 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#1769aa] dark:text-blue-400" /> Banco Completo (316 Questões)
          </h2>
          <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1">
            Consulte todas as questões do exame com texto integral, opções e gabarito oficial.
          </p>
        </div>

        <button
          onClick={onGoHome}
          className="p-2.5 rounded-xl border border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200 bg-[#f4f7fb] dark:bg-slate-800 hover:bg-[#e6edf4] dark:hover:bg-slate-700 transition-all text-xs font-bold flex items-center gap-1 shrink-0 self-start md:self-auto"
        >
          <Home className="w-4 h-4" /> Menu
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#62748a] dark:text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por texto da questão, palavra-chave ou nº..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f4f7fb] dark:bg-slate-800 border border-[#dbe4ee] dark:border-slate-700 rounded-xl text-xs font-semibold text-[#172b4d] dark:text-slate-100 placeholder-[#62748a] dark:placeholder-slate-400 focus:outline-none focus:border-[#1769aa] dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
          </div>

          <div className="sm:w-64">
            <select
              value={selectedGroup}
              onChange={e => setSelectedGroup(e.target.value)}
              className="w-full py-2.5 px-3 bg-[#f4f7fb] dark:bg-slate-800 border border-[#dbe4ee] dark:border-slate-700 rounded-xl text-xs font-bold text-[#172b4d] dark:text-slate-100 focus:outline-none focus:border-[#1769aa] dark:focus:border-blue-500 transition-all"
            >
              <option value="all" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">Todos os Grupos ({questions.length})</option>
              {groups.map(g => (
                <option key={g} value={g} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-xs font-semibold text-[#62748a] dark:text-slate-400 flex items-center justify-between px-1">
          <span>A mostrar {filteredQuestions.length} questões</span>
          {(searchTerm || selectedGroup !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGroup('all');
              }}
              className="text-[#1769aa] dark:text-blue-400 hover:underline font-bold"
            >
              Limpar Filtros
            </button>
          )}
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-8 text-center space-y-2">
            <p className="text-sm font-bold text-[#172b4d] dark:text-slate-100">Nenhuma questão encontrada</p>
            <p className="text-xs text-[#62748a] dark:text-slate-400">Tente buscar por outros termos ou selecionar outro grupo.</p>
          </div>
        ) : (
          filteredQuestions.map(q => (
            <div key={q.idx} className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#f4f7fb] dark:bg-slate-800 border border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200">
                  {q.group}
                </span>
                <span className="text-xs font-bold text-[#1769aa] dark:text-blue-400">Questão #{String(q.number).padStart(2, '0')} do banco de dados do IMT</span>
              </div>

              <h3 className="text-sm md:text-base font-bold text-[#172b4d] dark:text-slate-100 leading-relaxed whitespace-pre-line">
                {q.question}
              </h3>

              {q.imageUrl && (
                <div className="w-full rounded-xl overflow-hidden border border-[#dbe4ee] dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-900 p-2 max-h-60 flex items-center justify-center">
                  <img
                    src={q.imageUrl}
                    alt={`Imagem da questão ${q.number}`}
                    className="max-h-52 object-contain rounded-lg w-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="space-y-2 pt-1">
                {q.alternatives.map(alt => {
                  const isAnswer = alt.letter === q.answer;
                  return (
                    <div
                      key={alt.letter}
                      className={`p-3 rounded-xl border text-xs md:text-sm font-medium flex items-start gap-3 ${
                        isAnswer
                          ? 'bg-[#eaf8f0] dark:bg-emerald-950/70 border-[#16794b] dark:border-emerald-500 text-[#16794b] dark:text-emerald-300 font-bold shadow-sm'
                          : 'bg-white dark:bg-slate-800/80 border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
                        {alt.letter}
                      </span>
                      <span className="flex-1 leading-relaxed whitespace-pre-line">{alt.text}</span>
                      {isAnswer && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#16794b] dark:bg-emerald-600 text-white shrink-0 self-center">
                          Gabarito
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {q.explanation && (
                <div className="p-3.5 rounded-xl bg-[#f0f7ff] dark:bg-blue-950/50 border border-[#1769aa]/20 dark:border-blue-800 text-[#102a43] dark:text-slate-200 space-y-1 text-xs md:text-sm">
                  <div className="flex items-center gap-2 font-bold text-[#1769aa] dark:text-blue-300">
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>Justificação / Motivo da Resposta:</span>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#172b4d] dark:text-slate-200 font-normal pt-0.5">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

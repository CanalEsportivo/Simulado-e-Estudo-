import React from 'react';
import { ViewMode, Question } from '../types';
import { Play, BookOpen, AlertTriangle, Search, Trophy, Trash2, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

interface HomeViewProps {
  questions: Question[];
  mistakesCount: number;
  onStartSim: () => void;
  onSelectGroup: (groupName: string) => void;
  onStartMistakes: () => void;
  onNavigate: (view: ViewMode) => void;
  onClearMistakes: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  questions,
  mistakesCount,
  onStartSim,
  onSelectGroup,
  onStartMistakes,
  onNavigate,
  onClearMistakes,
}) => {
  // Extract groups from questions
  const groupMap = React.useMemo(() => {
    const map = new Map<string, number>();
    questions.forEach(q => {
      map.set(q.group, (map.get(q.group) || 0) + 1);
    });
    return map;
  }, [questions]);

  const groups = Array.from(groupMap.keys());

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner Intro */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/80 text-[#1769aa] dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 px-3 py-1 rounded-full text-xs font-bold">
              <Award className="w-3.5 h-3.5" /> Exame de Certificação TVDE Portugal
            </div>
            <h2 className="text-2xl font-black text-[#172b4d] dark:text-slate-100 tracking-tight">
              Prepare-se para o Exame Oficial
            </h2>
            <p className="text-sm text-[#62748a] dark:text-slate-300 max-w-xl leading-relaxed">
              Base de dados cruzada com <strong className="text-[#172b4d] dark:text-white">316 questões</strong> oficiais do programa de formação de motoristas TVDE (IMT).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onStartSim}
              className="bg-[#1769aa] hover:bg-[#125387] text-white font-extrabold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto"
            >
              <Play className="w-5 h-5 fill-current" />
              Iniciar Simulado
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-[#dbe4ee] dark:border-slate-800">
          <div className="bg-[#f4f7fb] dark:bg-slate-800/60 p-3.5 rounded-xl text-center">
            <span className="block text-2xl font-black text-[#172b4d] dark:text-slate-100">30</span>
            <span className="text-xs text-[#62748a] dark:text-slate-300 font-semibold">Questões / Teste</span>
          </div>
          <div className="bg-[#f4f7fb] dark:bg-slate-800/60 p-3.5 rounded-xl text-center">
            <span className="block text-2xl font-black text-[#172b4d] dark:text-slate-100">60 min</span>
            <span className="text-xs text-[#62748a] dark:text-slate-300 font-semibold">Tempo Limite</span>
          </div>
          <div className="bg-[#f4f7fb] dark:bg-slate-800/60 p-3.5 rounded-xl text-center">
            <span className="block text-2xl font-black text-[#16794b] dark:text-emerald-400">27 / 30</span>
            <span className="text-xs text-[#62748a] dark:text-slate-300 font-semibold">Mínimo para Aprovação (90%)</span>
          </div>
          <div className="bg-[#f4f7fb] dark:bg-slate-800/60 p-3.5 rounded-xl text-center">
            <span className="block text-2xl font-black text-[#1769aa] dark:text-blue-400">316</span>
            <span className="text-xs text-[#62748a] dark:text-slate-300 font-semibold">Questões Totais</span>
          </div>
        </div>
      </div>

      {/* Main Options Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Full Sim Card */}
        <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-[#1769aa]/40 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/40 text-[#1769aa] dark:text-blue-300 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#172b4d] dark:text-slate-100">Simulado Oficial</h3>
              <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1 leading-relaxed">
                Gera um teste aleatório com 30 questões, contagem de tempo de 60 minutos e pontuação para simular a prova real.
              </p>
            </div>
          </div>
          <button
            onClick={onStartSim}
            className="mt-5 w-full bg-[#1769aa] text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#125387] transition-all"
          >
            <Play className="w-4 h-4 fill-current" /> Começar Simulado
          </button>
        </div>

        {/* Study Groups Card */}
        <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-[#1769aa]/40 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 text-[#16794b] dark:text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#172b4d] dark:text-slate-100">Estudo por Módulo</h3>
              <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1 leading-relaxed">
                Estude as questões divididas por grupos temáticos do programa de estudo TVDE (Comunicação, Legislação, etc.).
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('groups')}
            className="mt-5 w-full bg-[#f4f7fb] dark:bg-slate-800 hover:bg-[#e6edf4] dark:hover:bg-slate-700 text-[#172b4d] dark:text-slate-100 font-bold py-3 px-4 rounded-xl text-sm border border-[#dbe4ee] dark:border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            Escolher Módulo ({groups.length})
          </button>
        </div>

        {/* Questions Bank Card */}
        <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-[#1769aa]/40 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100/80 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#172b4d] dark:text-slate-100">Banco de 316 Questões</h3>
              <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1 leading-relaxed">
                Pesquise e consulte o texto, alternativas e respostas corretas de todas as 316 questões cadastradas.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('bank')}
            className="mt-5 w-full bg-[#f4f7fb] dark:bg-slate-800 hover:bg-[#e6edf4] dark:hover:bg-slate-700 text-[#172b4d] dark:text-slate-100 font-bold py-3 px-4 rounded-xl text-sm border border-[#dbe4ee] dark:border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            Ver Todas as Questões
          </button>
        </div>

        {/* Saved Mistakes Card */}
        <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-[#1769aa]/40 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#172b4d] dark:text-slate-100">Questões Erradas</h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                  {mistakesCount}
                </span>
              </div>
              <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1 leading-relaxed">
                Revisão focada em questões que você errou nos simulados anteriores para reforçar seu aprendizado.
              </p>
            </div>
          </div>
          {mistakesCount > 0 ? (
            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={onStartMistakes}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all"
              >
                Praticar Erros
              </button>
              <button
                onClick={onClearMistakes}
                title="Limpar histórico de erros"
                className="p-3 bg-red-50 dark:bg-red-950/50 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-xl transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="mt-5 py-2.5 px-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 rounded-xl text-xs font-medium text-center border border-emerald-200 dark:border-emerald-800 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Nenhum erro registado no momento!
            </div>
          )}
        </div>
      </div>

      {/* Group List Preview */}
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-base font-extrabold text-[#172b4d] dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#1769aa] dark:text-blue-400" /> Grupos de Estudo Oficiais
        </h3>

        <div className="grid sm:grid-cols-2 gap-2.5">
          {groups.map(group => {
            const count = groupMap.get(group) || 0;
            return (
              <button
                key={group}
                onClick={() => onSelectGroup(group)}
                className="p-3.5 rounded-xl border border-[#dbe4ee] dark:border-slate-800 bg-[#f4f7fb] dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 hover:border-[#1769aa] dark:hover:border-blue-500 hover:shadow-sm text-left transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-bold text-[#172b4d] dark:text-slate-200 group-hover:text-[#1769aa] dark:group-hover:text-blue-400 line-clamp-1 pr-2">
                  {group}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-[#dbe4ee] dark:border-slate-700 text-[#62748a] dark:text-slate-300 shrink-0">
                  {count} q.
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Nota do Simulado:</strong> O app utiliza o gabarito das 316 questões cruzadas com os testes oficiais do simulador de formação TVDE.
        </div>
      </div>
    </div>
  );
};

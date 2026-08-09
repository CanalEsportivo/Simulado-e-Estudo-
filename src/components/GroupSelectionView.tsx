import React from 'react';
import { Question } from '../types';
import { BookOpen, ChevronRight, Home, Layers } from 'lucide-react';

interface GroupSelectionViewProps {
  questions: Question[];
  onSelectGroup: (groupName: string) => void;
  onGoHome: () => void;
}

export const GroupSelectionView: React.FC<GroupSelectionViewProps> = ({
  questions,
  onSelectGroup,
  onGoHome,
}) => {
  const groupMap = React.useMemo(() => {
    const map = new Map<string, number>();
    questions.forEach(q => {
      map.set(q.group, (map.get(q.group) || 0) + 1);
    });
    return map;
  }, [questions]);

  const groups = Array.from(groupMap.keys());

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-fadeIn pb-12">
      <div className="bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#172b4d] dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#1769aa] dark:text-blue-400" /> Módulos & Grupos Temáticos
          </h2>
          <p className="text-xs text-[#62748a] dark:text-slate-300 mt-1">
            Escolha um grupo específico para estudar as questões em sequência com gabarito imediato.
          </p>
        </div>

        <button
          onClick={onGoHome}
          className="p-2.5 rounded-xl border border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200 bg-[#f4f7fb] dark:bg-slate-800 hover:bg-[#e6edf4] dark:hover:bg-slate-700 transition-all text-xs font-bold flex items-center gap-1 shrink-0"
        >
          <Home className="w-4 h-4" /> Menu
        </button>
      </div>

      <div className="grid gap-3">
        {groups.map(g => {
          const count = groupMap.get(g) || 0;
          return (
            <button
              key={g}
              onClick={() => onSelectGroup(g)}
              className="w-full bg-white dark:bg-[#111c38] border border-[#dbe4ee] dark:border-slate-800 hover:border-[#1769aa] dark:hover:border-blue-500 rounded-2xl p-5 shadow-sm text-left transition-all flex items-center justify-between group hover:shadow-md"
            >
              <div className="space-y-1 pr-4">
                <span className="text-xs font-bold text-[#1769aa] dark:text-blue-400 uppercase tracking-wider block">
                  Grupo Temático
                </span>
                <h3 className="text-sm md:text-base font-extrabold text-[#172b4d] dark:text-slate-100 group-hover:text-[#1769aa] dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {g}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#f4f7fb] dark:bg-slate-800 border border-[#dbe4ee] dark:border-slate-700 text-[#172b4d] dark:text-slate-200">
                  {count} questões
                </span>
                <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-[#1769aa] dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

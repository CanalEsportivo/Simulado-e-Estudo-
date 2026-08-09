import React from 'react';
import { ViewMode } from '../types';
import { Car, BookOpen, AlertTriangle, FileText, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  mistakesCount: number;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  mistakesCount,
  theme,
  onThemeChange,
}) => {
  return (
    <header className="bg-gradient-to-r from-[#102a43] to-[#1769aa] dark:from-[#091322] dark:to-[#0f2847] text-white shadow-md sticky top-0 z-20 border-b dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
              <Car className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight leading-tight">Simulado TVDE</h1>
                <span className="text-[10px] uppercase font-bold bg-white/20 px-2 py-0.5 rounded-full text-blue-100">
                  v2.0
                </span>
              </div>
              <p className="text-xs text-blue-100/90 font-medium">316 Questões de Exame • Portugal</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold justify-between sm:justify-end">
          <nav className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                currentView === 'home'
                  ? 'bg-white dark:bg-slate-800 text-[#102a43] dark:text-white shadow-sm font-bold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              Início
            </button>
            
            <button
              onClick={() => onNavigate('groups')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                currentView === 'groups'
                  ? 'bg-white dark:bg-slate-800 text-[#102a43] dark:text-white shadow-sm font-bold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Módulos
            </button>

            <button
              onClick={() => onNavigate('bank')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                currentView === 'bank'
                  ? 'bg-white dark:bg-slate-800 text-[#102a43] dark:text-white shadow-sm font-bold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Banco 316
            </button>

            {mistakesCount > 0 && (
              <button
                onClick={() => onNavigate('study')}
                className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap bg-amber-500/90 text-white font-bold hover:bg-amber-500 ${
                  currentView === 'study' ? 'ring-2 ring-white' : ''
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                Erros ({mistakesCount})
              </button>
            )}
          </nav>

          {/* Theme Toggle Button - Far Right */}
          <button
            onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-white/20 dark:border-slate-700/80 rounded-xl px-3 py-1.5 text-xs font-bold transition-all text-white shrink-0 active:scale-95 cursor-pointer ml-auto sm:ml-2"
            title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            aria-label="Alternar Tema Claro / Escuro"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Modo Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-200" />
                <span>Modo Escuro</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};


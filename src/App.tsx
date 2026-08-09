import React, { useState, useEffect, useCallback } from 'react';
import { Mail } from 'lucide-react';
import { QUESTIONS, Question } from './data/questions';
import { ViewMode, TestResult } from './types';
import { getMistakes, saveMistake, removeMistake, clearMistakes, saveTestResult } from './utils/storage';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { SimulatedTest } from './components/SimulatedTest';
import { ResultView } from './components/ResultView';
import { GroupSelectionView } from './components/GroupSelectionView';
import { QuestionsBankView } from './components/QuestionsBankView';
import { PWAInstallBanner } from './components/PWAInstallBanner';

// Helper to shuffle questions randomly
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [mistakes, setMistakes] = useState<number[]>([]);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>('Simulado TVDE');
  const [isSimulated, setIsSimulated] = useState<boolean>(true);

  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('tvde_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tvde_theme', theme);
  }, [theme]);

  // Result state
  const [lastUserAnswers, setLastUserAnswers] = useState<Record<number, string>>({});
  const [lastTimeSpent, setLastTimeSpent] = useState<number>(0);

  // Load initial mistakes from localStorage
  useEffect(() => {
    setMistakes(getMistakes());
  }, []);

  const handleStartSimulatedTest = useCallback(() => {
    // 30 random questions from the pool of 316
    const shuffled = shuffleArray(QUESTIONS).slice(0, 30);
    setActiveQuestions(shuffled);
    setActiveTitle('Simulado Oficial (30 Questões)');
    setIsSimulated(true);
    setViewMode('sim');
  }, []);

  const handleStartGroupStudy = useCallback((groupName: string) => {
    const groupQuestions = QUESTIONS.filter(q => q.group === groupName);
    setActiveQuestions(groupQuestions);
    setActiveTitle(groupName);
    setIsSimulated(false);
    setViewMode('study');
  }, []);

  const handleStartMistakesStudy = useCallback(() => {
    const mistakeIndexes = getMistakes();
    const mistakeQuestions = QUESTIONS.filter(q => mistakeIndexes.includes(q.idx));
    if (mistakeQuestions.length === 0) {
      alert('Não há questões erradas guardadas no momento.');
      return;
    }
    setActiveQuestions(mistakeQuestions);
    setActiveTitle('Revisão de Erros');
    setIsSimulated(false);
    setViewMode('study');
  }, []);

  const handleSaveSingleMistake = useCallback((idx: number) => {
    saveMistake(idx);
    setMistakes(getMistakes());
  }, []);

  const handleRemoveSingleMistake = useCallback((idx: number) => {
    removeMistake(idx);
    setMistakes(getMistakes());
  }, []);

  const handleClearAllMistakes = useCallback(() => {
    if (confirm('Tem a certeza que deseja limpar todo o histórico de questões erradas?')) {
      clearMistakes();
      setMistakes([]);
    }
  }, []);

  const handleFinishTest = useCallback((answers: Record<number, string>, timeSpentSeconds: number) => {
    let correctCount = 0;
    const wrongIndexes: number[] = [];

    activeQuestions.forEach((q, idx) => {
      const ans = answers[idx];
      if (ans === q.answer) {
        correctCount++;
        removeMistake(q.idx);
      } else {
        saveMistake(q.idx);
        wrongIndexes.push(q.idx);
      }
    });

    // Update stored mistakes
    setMistakes(getMistakes());

    // Save history if simulated mode
    if (isSimulated) {
      const result: TestResult = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('pt-PT'),
        score: correctCount,
        total: activeQuestions.length,
        passed: correctCount >= 27,
        timeSpentSeconds,
        wrongQuestionIndexes: wrongIndexes,
      };
      saveTestResult(result);
    }

    setLastUserAnswers(answers);
    setLastTimeSpent(timeSpentSeconds);
    setViewMode('result' as any);
  }, [activeQuestions, isSimulated]);

  const handleReviewMistakesFromResult = useCallback((wrongQuestions: Question[]) => {
    setActiveQuestions(wrongQuestions);
    setActiveTitle('Revisão dos Erros do Último Simulado');
    setIsSimulated(false);
    setViewMode('study');
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7fb] dark:bg-[#0b1329] text-[#172b4d] dark:text-[#f1f5f9] font-sans antialiased flex flex-col transition-colors duration-200">
      <Header
        currentView={viewMode}
        onNavigate={setViewMode}
        mistakesCount={mistakes.length}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
        {viewMode === 'home' && (
          <HomeView
            questions={QUESTIONS}
            mistakesCount={mistakes.length}
            onStartSim={handleStartSimulatedTest}
            onSelectGroup={handleStartGroupStudy}
            onStartMistakes={handleStartMistakesStudy}
            onNavigate={setViewMode}
            onClearMistakes={handleClearAllMistakes}
          />
        )}

        {(viewMode === 'sim' || viewMode === 'study') && (
          <SimulatedTest
            questions={activeQuestions}
            title={activeTitle}
            isSimulatedMode={isSimulated}
            onFinish={handleFinishTest}
            onExit={() => setViewMode('home')}
            onSaveMistake={handleSaveSingleMistake}
            onRemoveMistake={handleRemoveSingleMistake}
          />
        )}

        {(viewMode as string) === 'result' && (
          <ResultView
            questions={activeQuestions}
            userAnswers={lastUserAnswers}
            timeSpentSeconds={lastTimeSpent}
            onReviewMistakes={handleReviewMistakesFromResult}
            onRestart={handleStartSimulatedTest}
            onGoHome={() => setViewMode('home')}
          />
        )}

        {viewMode === 'groups' && (
          <GroupSelectionView
            questions={QUESTIONS}
            onSelectGroup={handleStartGroupStudy}
            onGoHome={() => setViewMode('home')}
          />
        )}

        {viewMode === 'bank' && (
          <QuestionsBankView
            questions={QUESTIONS}
            onGoHome={() => setViewMode('home')}
          />
        )}
      </main>

      <PWAInstallBanner />

      <footer className="border-t border-[#dbe4ee] dark:border-slate-800 bg-white dark:bg-[#111c38] py-6 mt-12 text-center text-xs text-[#62748a] dark:text-slate-400">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-bold text-[#172b4d] dark:text-slate-200">Simulado TVDE — Exames Oficiais Portugal (316 Questões)</p>
          <p>Preparação para Motoristas de Plataformas Eletrónicas (TVDE)</p>
          <p className="pt-2 text-[#486581] dark:text-slate-300">
            Criado por <strong className="text-[#102a43] dark:text-white">Eduardo Piccoli</strong>
          </p>
          <p className="pt-1">
            <a
              href="mailto:piccolli@hotmail.com?subject=Simulado%20TVDE%20-%20Contacto%20/%20Atualização"
              className="inline-flex items-center gap-1.5 text-[#1769aa] dark:text-blue-400 hover:underline font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Encontrou algum erro ou necessita de alguma atualização? Clique aqui para contactar por email</span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

import { TestResult } from '../types';

const MISTAKES_KEY = 'tvde_mistakes_v2';
const HISTORY_KEY = 'tvde_history_v2';

export function getMistakes(): number[] {
  try {
    const data = localStorage.getItem(MISTAKES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse mistakes from localStorage', e);
    return [];
  }
}

export function saveMistake(idx: number): void {
  try {
    const mistakes = getMistakes();
    if (!mistakes.includes(idx)) {
      mistakes.push(idx);
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
    }
  } catch (e) {
    console.error('Failed to save mistake', e);
  }
}

export function removeMistake(idx: number): void {
  try {
    const mistakes = getMistakes().filter(i => i !== idx);
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
  } catch (e) {
    console.error('Failed to remove mistake', e);
  }
}

export function clearMistakes(): void {
  try {
    localStorage.removeItem(MISTAKES_KEY);
  } catch (e) {
    console.error('Failed to clear mistakes', e);
  }
}

export function getHistory(): TestResult[] {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse test history', e);
    return [];
  }
}

export function saveTestResult(result: TestResult): void {
  try {
    const history = getHistory();
    history.unshift(result);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
  } catch (e) {
    console.error('Failed to save test result', e);
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error('Failed to clear history', e);
  }
}

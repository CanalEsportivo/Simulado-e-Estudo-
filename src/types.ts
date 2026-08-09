export interface Alternative {
  letter: string;
  text: string;
}

export interface Question {
  idx: number;
  number: number;
  group: string;
  question: string;
  alternatives: Alternative[];
  answer: string;
  hasImageNotice?: boolean;
  imageUrl?: string;
  explanation?: string;
}

export type ViewMode = 'home' | 'sim' | 'study' | 'bank' | 'history' | 'groups';

export interface TestResult {
  id: string;
  date: string;
  score: number;
  total: number;
  passed: boolean;
  timeSpentSeconds: number;
  wrongQuestionIndexes: number[];
}

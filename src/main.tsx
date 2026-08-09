import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {QUESTIONS} from './data/questions';
import './index.css';

// GitHub Pages publica este projeto dentro de /Simulado-e-Estudo-/.
// As questões usam caminhos /assets/..., que apontam para a raiz
// do domínio e não para a raiz do projeto. Convertemos para caminhos
// relativos para funcionar corretamente no GitHub Pages.
QUESTIONS.forEach(question => {
  if (question.imageUrl?.startsWith('/assets/')) {
    question.imageUrl = `.${question.imageUrl}`;
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
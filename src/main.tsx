import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {QUESTIONS} from './data/questions';
import './index.css';

// Corrige os caminhos das imagens para funcionar no GitHub Pages.
// O site é publicado em:
// /Simulado-e-Estudo-/
QUESTIONS.forEach(question => {
  if (question.imageUrl) {
    const path = question.imageUrl.replace(/^\/+/, '');

    if (path.startsWith('assets/')) {
      question.imageUrl = `${import.meta.env.BASE_URL}${path}`;
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
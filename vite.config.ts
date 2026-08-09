import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {

  return {

    base: '/Simulado-e-Estudo-/',

    plugins: [

      react(),

      tailwindcss(),

    ],

  };

});
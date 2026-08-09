import React, { useState, useEffect } from 'react';
import { Smartphone, X, Share, PlusSquare } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    const isIosDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    setIsIOS(isIosDevice);

    if (!isStandalone && isIosDevice) {
      const dismissed = localStorage.getItem('tvde_pwa_dismissed');
      if (!dismissed) {
        setShowBanner(true);
      }
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto bg-[#102a43] text-white p-4 rounded-2xl shadow-2xl border border-white/10 animate-bounce-short">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1769aa] flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold leading-tight">Instalar no iPhone / iPad</h4>
            <p className="text-xs text-blue-200 leading-snug">
              Toque no ícone <Share className="w-3 h-3 inline text-blue-300" /> <b>Compartilhar</b> e depois em{' '}
              <PlusSquare className="w-3 h-3 inline text-blue-300" /> <b>Adicionar à Tela de Início</b>.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setShowBanner(false);
            localStorage.setItem('tvde_pwa_dismissed', 'true');
          }}
          className="p-1 rounded-lg hover:bg-white/10 text-white/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

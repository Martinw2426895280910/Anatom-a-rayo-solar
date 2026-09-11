import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, Settings, Download, Sparkles, Clock } from 'lucide-react';
import { CampaignConfig } from '../types';

interface HeaderProps {
  config: CampaignConfig;
  onOpenSettings: () => void;
  onOpenDownload: () => void;
  onCheckoutClick: (location: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onOpenSettings,
  onOpenDownload,
  onCheckoutClick
}) => {
  // 12 hours countdown simulated or stored
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 11,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07090e]/90 border-b border-amber-500/20">
      {/* Top Launch Urgency Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
            </span>
            <span className="font-semibold tracking-wide uppercase flex items-center gap-1.5 text-[11px] sm:text-xs">
              <Flame className="w-3.5 h-3.5 text-yellow-300" />
              ¡Promoción exclusiva de lanzamiento!
            </span>
            <span className="hidden md:inline text-amber-100">
              | Ahorra más del 37% por tiempo limitado
            </span>
          </div>

          <div className="flex items-center gap-3 mx-auto sm:mx-0 text-xs">
            <div className="flex items-center gap-1.5 bg-black/30 px-2.5 py-1 rounded-md border border-white/10 font-mono font-bold text-yellow-200">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <button
              onClick={() => onCheckoutClick('top-banner')}
              className="text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-400 text-neutral-950 font-bold px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-lg transition-all shadow-md shadow-orange-600/50 cursor-pointer whitespace-nowrap animate-fire-pulse font-cinzel tracking-wider flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 text-red-700 animate-bounce" />
              <span>Aprovechar Oferta de Lanzamiento</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-[2px] shadow-lg shadow-orange-500/30 group-hover:shadow-amber-400/50 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-[#0b0f17] flex items-center justify-center">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-mono font-semibold">
              FUTURA BIOTECH
            </div>
            <div className="font-cinzel text-base sm:text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
              ANATOMÍA SOLAR
            </div>
          </div>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <a href="#viaje" className="hover:text-amber-400 transition-colors">El Viaje</a>
          <a href="#beneficios" className="hover:text-amber-400 transition-colors">Beneficios</a>
          <a href="#capitulos" className="hover:text-amber-400 transition-colors">Capítulos</a>
          <a href="#sabias-que" className="hover:text-amber-400 transition-colors">¿Sabías qué?</a>
          <a href="#autor" className="hover:text-amber-400 transition-colors">Redactor</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </nav>

        {/* Right Tools & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Author settings button to configure Hotmart URL & pixel */}
          <button
            onClick={onOpenSettings}
            title="Configurar URL de Hotmart y Pixels de seguimiento"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-neutral-300 hover:text-amber-400 transition-colors text-xs flex items-center gap-1.5"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Configurar Hotmart</span>
          </button>

          {/* Download standalone HTML button requested in prompt */}
          <button
            onClick={onOpenDownload}
            title="Descargar código HTML listo para Vercel o Hosting gratuito"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-neutral-300 hover:text-amber-400 transition-colors text-xs flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Descargar HTML</span>
          </button>

          {/* Primary CTA with fire pulsating style without price */}
          <button
            onClick={() => onCheckoutClick('header-cta')}
            className="fire-btn text-neutral-950 font-cinzel font-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm tracking-widest uppercase cursor-pointer whitespace-nowrap shadow-lg flex items-center gap-2 border border-yellow-300/40"
          >
            <Flame className="w-4 h-4 text-neutral-950 animate-pulse" />
            <span>Adquirir Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
};

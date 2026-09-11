import React from 'react';
import { Flame, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { CampaignConfig } from '../types';
import { ASSETS } from '../assets';

interface StickyMobileCTAProps {
  config: CampaignConfig;
  onCheckoutClick: (location: string) => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ config, onCheckoutClick }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-t border-amber-500/30 p-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] animate-slideUp">
      <div className="flex items-center justify-between gap-3">
        
        {/* Book thumbnail & info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-11 h-15 rounded-lg overflow-hidden border border-amber-500/40 shrink-0 shadow-md">
            <img
              src={ASSETS.bookCover}
              alt="Anatomía Solar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="truncate">
            <div className="font-cinzel text-xs font-bold text-white truncate">
              ANATOMÍA SOLAR
            </div>
            <div className="text-[11px] text-amber-300 font-semibold truncate flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-400 shrink-0" />
              <span>Edición Oficial Ebook</span>
            </div>
            <div className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5" />
              <span>Garantía 7 días Hotmart</span>
            </div>
          </div>
        </div>

        {/* Enormous Pulsating Fire CTA Button direct to Hotmart */}
        <button
          onClick={() => onCheckoutClick('sticky-mobile-bar')}
          className="fire-btn shrink-0 py-3.5 px-6 rounded-xl font-cinzel font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950 shadow-xl shadow-orange-600/50 active:scale-95 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap border border-yellow-300/60"
        >
          <Flame className="w-4 h-4 text-neutral-950 animate-bounce" />
          <span>Comprar en Hotmart</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
        </button>

      </div>
    </div>
  );
};

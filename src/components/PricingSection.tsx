import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Gift, 
  Sparkles, 
  CreditCard, 
  Smartphone,
  Flame,
  Award
} from 'lucide-react';
import { CampaignConfig } from '../types';
import { BOOK_SPECS } from '../data/solarData';

interface PricingSectionProps {
  config: CampaignConfig;
  onCheckoutClick: (location: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ config, onCheckoutClick }) => {
  return (
    <section id="comprar" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0e1424] to-[#07090e] border-t border-neutral-800">
      
      {/* Background Solar Flare Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-amber-600/15 via-orange-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            Acceso Digital
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Consigue tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">Copia Digital</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Descarga inmediata con 3 bonus incluidos y 7 días de garantía.
          </p>
        </div>

        {/* Pricing Offer Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-[#0b101c] border-2 border-amber-500/50 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] p-6 sm:p-8 backdrop-blur-xl">
            
            {/* Top Launch Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-neutral-950 font-bold font-mono text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-black" />
                LANZAMIENTO DIGITAL
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              
              {/* Left Column: What's included */}
              <div className="md:col-span-7 space-y-3">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Paquete Completo
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Anatomía Solar
                </h3>
                
                <div className="space-y-2 text-xs sm:text-sm text-neutral-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Ebook en PDF Retina + ePub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Bonus 1: Guía de observación solar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Bonus 2: Infografía 8K del Sol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Bonus 3: Glosario de clima espacial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Acceso vitalicio sin mensualidades</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant Access Card & Button */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center p-5 rounded-2xl bg-black/60 border-2 border-amber-500/40 text-center md:text-right shadow-2xl relative overflow-hidden">
                <div className="my-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-cinzel tracking-tight">
                    Acceso Inmediato
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
                    Pago único y 100% seguro
                  </span>
                </div>

                <button
                  onClick={() => onCheckoutClick('pricing-table-cta')}
                  className="fire-btn w-full mt-3 py-4 px-6 rounded-2xl font-cinzel font-black text-sm uppercase tracking-widest text-neutral-950 shadow-xl shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-yellow-300/60"
                >
                  <Flame className="w-5 h-5 text-neutral-950 animate-bounce" />
                  <span>COMPRAR EN HOTMART</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950" />
                </button>

                {/* Hotmart Official Widget Anchor integration */}
                <div className="mt-2.5 flex flex-col items-center justify-center">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      onCheckoutClick('pricing-hotmart-btn');
                      return false;
                    }}
                    href={`https://pay.hotmart.com/V102119673D?checkoutMode=2${config.campaignSource ? `&src=${config.campaignSource}` : ''}`}
                    className="hotmart-fb hotmart__button-checkout inline-block hover:opacity-95 transition-opacity cursor-pointer"
                    title="Pago Seguro Hotmart"
                  >
                    <img
                      src="https://static.hotmart.com/img/btn-buy-green.png"
                      alt="Comprar ahora en Hotmart"
                      className="h-10 w-auto object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>

                <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 font-medium">
                  <Lock className="w-3 h-3 text-amber-400" />
                  <span>Checkout Seguro Hotmart</span>
                </div>
              </div>

            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Garantía de 7 Días</div>
                  <div className="text-[11px] text-neutral-400">Reembolso incondicional</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Entrega Instantánea</div>
                  <div className="text-[11px] text-neutral-400">Descarga a tu correo</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Múltiples Pagos</div>
                  <div className="text-[11px] text-neutral-400">Tarjetas, Pix y PayPal</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

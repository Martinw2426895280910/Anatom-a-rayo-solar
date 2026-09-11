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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-orange-400" />
            Acceso Completo & Garantizado
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comienza Hoy Tu Viaje al <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">
              Corazón del Sol
            </span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Obtén la edición digital completa de <em>Anatomía Solar</em> con todos los bonus incluidos y el respaldo incondicional de Hotmart.
          </p>
        </div>

        {/* Pricing Offer Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-[#0b101c] border-2 border-amber-500/50 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] p-6 sm:p-10 backdrop-blur-xl">
            
            {/* Top Launch Pill */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                ¡OFERTA ESPECIAL DE LANZAMIENTO!
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
              
              {/* Left Column: What's included */}
              <div className="md:col-span-7 space-y-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Paquete Digital Completo • Edición Autor
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Anatomía Solar: Ebook & Recursos
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-neutral-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Ebook Oficial Completo:</strong> 312 páginas con diagramas astronómicos en alta resolución.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Multi-formato universal:</strong> PDF interactivo para computadoras/tablets y ePub para Kindle.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Bonus 1:</strong> Guía de Observación Solar Segura (Valor: R$ 65,00).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Bonus 2:</strong> Infografía Gigante 8K del Sol (Valor: R$ 49,00).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Bonus 3:</strong> Glosario de Climatología Espacial (Valor: R$ 38,00).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Acceso vitalicio:</strong> Descarga permanente y actualizaciones futuras gratuitas.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant Access Card & Enormous Fire Button */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center p-6 sm:p-7 rounded-2xl bg-black/60 border-2 border-amber-500/40 text-center md:text-right shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Flame className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
                  Edición Digital Completa
                </div>
                
                <div className="my-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel tracking-tight">
                    Acceso Instantáneo
                  </div>
                  <span className="text-xs font-mono text-emerald-400 block mt-1">
                    Pago único y 100% seguro • Sin cobros recurrentes
                  </span>
                </div>

                <button
                  onClick={() => onCheckoutClick('pricing-table-cta')}
                  className="fire-btn w-full mt-4 py-5 px-6 sm:px-8 rounded-2xl font-cinzel font-black text-base sm:text-xl uppercase tracking-widest text-neutral-950 shadow-2xl shadow-orange-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-yellow-300/60"
                >
                  <Flame className="w-6 h-6 text-neutral-950 animate-bounce" />
                  <span>COMPRAR EN HOTMART</span>
                  <ArrowRight className="w-6 h-6 text-neutral-950" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-300 font-medium">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Procesado por Hotmart Checkout Seguro</span>
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

import React from 'react';
import { 
  Brain, 
  Sparkles, 
  Eye, 
  Lightbulb, 
  Zap, 
  BookMarked, 
  ShieldAlert, 
  HeartHandshake, 
  ArrowRight,
  Flame 
} from 'lucide-react';
import { CampaignConfig } from '../types';

interface BenefitsProps {
  config: CampaignConfig;
  onCheckoutClick: (location: string) => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ config, onCheckoutClick }) => {
  const benefitsList = [
    {
      icon: Brain,
      title: 'Física sin tecnicismos',
      readerBenefit: 'Analogías claras para entender fusión nuclear, radiación y magnetismo.',
      badge: 'Claridad'
    },
    {
      icon: Eye,
      title: 'Gráficos en Alta Definición',
      readerBenefit: 'Esquemas a escala, cortes transversales y mapas a todo color.',
      badge: 'Visual HD'
    },
    {
      icon: ShieldAlert,
      title: 'Clima espacial y satélites',
      readerBenefit: 'Impacto real del viento solar en telecomunicaciones y la Tierra.',
      badge: 'Tormentas'
    },
    {
      icon: Sparkles,
      title: 'Conexión con la vida',
      readerBenefit: 'Cómo la energía solar sustenta la biología y el metabolismo celular.',
      badge: 'Biología'
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            Beneficios Clave
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Lo que vas a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">Descubrir</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Astrofísica explicada de forma visual, directa y entretenida.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-[#0d131f] border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {item.readerBenefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page Conversion Trigger with Fire Effects */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121927] via-[#1c1822] to-[#121927] border-2 border-amber-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="text-center lg:text-left relative z-10">
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
              Desciende al corazón de nuestra estrella
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Descarga inmediata del libro en PDF + ePub con 3 bonus incluidos.
            </p>
          </div>
          <button
            onClick={() => onCheckoutClick('benefits-mid-cta')}
            className="fire-btn shrink-0 py-4 px-6 sm:px-8 rounded-2xl font-cinzel font-black text-sm sm:text-base uppercase tracking-widest text-neutral-950 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5 border-2 border-yellow-300/60 relative z-10"
          >
            <Flame className="w-5 h-5 text-neutral-950 animate-bounce" />
            <span>COMPRAR EN HOTMART</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </button>
        </div>

      </div>
    </section>
  );
};

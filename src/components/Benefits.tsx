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
      title: 'Comprende la física estelar sin necesidad de ser astrofísico',
      readerBenefit: 'Despídete de fórmulas incomprensibles y tecnicismos áridos. El autor traduce conceptos como el túnel cuántico y la magnetohidrodinámica en analogías cotidianas y cristalinas que se quedan grabadas para siempre en tu memoria.',
      badge: 'Claridad Total'
    },
    {
      icon: Sparkles,
      title: 'Una perspectiva cósmica que cambiará cómo ves tu vida',
      readerBenefit: 'Descubrirás la íntima conexión bioquímica entre el Sol y tu propio cuerpo. Desde el origen del calcio de tus huesos en núcleos estelares hasta cómo tus mitocondrias procesan la energía solar capturada por las plantas.',
      badge: 'Impacto Biológico'
    },
    {
      icon: Zap,
      title: 'El futuro de la energía: La promesa de la fusión nuclear en la Tierra',
      readerBenefit: 'Entenderás los avances reales de proyectos como ITER y el confinamiento magnético: el esfuerzo humano más titánico por embotellar el poder de una estrella en la Tierra para obtener energía limpia e inagotable.',
      badge: 'Tecnología de Vanguardia'
    },
    {
      icon: ShieldAlert,
      title: 'Meteorología espacial y el riesgo de un colapso eléctrico global',
      readerBenefit: 'Sabrás distinguir entre el pánico infundado y las amenazas reales de una gran tormenta geomagnética (como el Evento Carrington). Conoce cómo se protegen los satélites, redes de alta tensión y astronautas.',
      badge: 'Realidad Científica'
    },
    {
      icon: Eye,
      title: 'Una experiencia visual inmersiva en cada página',
      readerBenefit: 'No es solo texto: más de 300 páginas acompañadas de gráficos de alta definición, cortes esquemáticos, mapas magnéticos y comparativas a escala que despiertan el asombro en cada capítulo.',
      badge: 'Visual HD'
    },
    {
      icon: BookMarked,
      title: 'Herramienta definitiva para docentes, estudiantes y curiosos',
      readerBenefit: 'Ya sea que quieras preparar clases de ciencias inolvidables, responder las preguntas de tus hijos o enriquecer tus conversaciones con datos rigurosos y fascinantes, este libro será tu referencia de cabecera.',
      badge: 'Valor Permanente'
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            Lo que este libro hace por ti
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Diseñado para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">Expandir tu Mente</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Más allá de describir qué es el Sol, <em>Anatomía Solar</em> transforma tu manera de relacionarte con el universo, 
            la ciencia moderna y tu propia existencia biológica.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative p-7 rounded-2xl bg-[#0d131f] border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/40 flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {item.readerBenefit}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center text-xs text-amber-400 font-semibold gap-1.5 opacity-80 group-hover:opacity-100">
                  <span>Revelado en los capítulos del libro</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page Conversion Trigger with Fire Effects */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#121927] via-[#1c1822] to-[#121927] border-2 border-amber-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
              Lectura Científica Fascinante
            </div>
            <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              ¿Listo para adentrarte en el corazón de nuestra estrella?
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl">
              Asegura tu copia digital con acceso inmediato en Hotmart y recibe los 3 bonus exclusivos de climatología espacial.
            </p>
          </div>
          <button
            onClick={() => onCheckoutClick('benefits-mid-cta')}
            className="fire-btn shrink-0 py-5 px-8 sm:px-10 rounded-2xl font-cinzel font-black text-base sm:text-xl uppercase tracking-widest text-neutral-950 shadow-2xl shadow-orange-600/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-3 border-2 border-yellow-300/60 relative z-10"
          >
            <Flame className="w-6 h-6 text-neutral-950 animate-bounce" />
            <span>OBTENER COPIA DIGITAL</span>
            <ArrowRight className="w-5 h-5 text-neutral-950" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Experiencias de Lectores
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Lo que Dicen Quienes Ya Viajaron al <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
              Corazón de Nuestra Estrella
            </span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Más de 850 divulgadores, docentes, ingenieros y entusiastas de la ciencia ya disfrutan de <em>Anatomía Solar</em>.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-2xl bg-[#0c121e] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-neutral-600" />
                </div>

                <h3 className="font-cinzel text-base sm:text-lg font-bold text-amber-200 mb-3">
                  “{test.highlight}”
                </h3>

                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {test.comment}
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                    {test.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-neutral-400">
                    {test.role} • <span className="text-neutral-500">{test.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Compra Verificada
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

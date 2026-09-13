import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Reseñas Verificadas
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Opiniones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">Lectores</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Valoración promedio 4.9/5 de más de 1.400 estudiantes y aficionados.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c121e] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-neutral-600" />
                </div>

                <h3 className="font-cinzel text-sm sm:text-base font-bold text-amber-200 mb-2">
                  “{test.highlight}”
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  {test.comment}
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    {test.name}
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {test.role} • <span className="text-neutral-500">{test.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

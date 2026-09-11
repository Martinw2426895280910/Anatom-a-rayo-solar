import React from 'react';
import { ShieldCheck, Award, Star, Globe2, CreditCard, Sparkles } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  return (
    <div className="border-y border-neutral-800 bg-[#0a0e17]/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-sm font-bold text-white tracking-wide">4.9 / 5 Calificación</div>
            <div className="text-xs text-neutral-400">Basado en reseñas de lectores</div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-1 border border-orange-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white tracking-wide">Hotmart Verified</div>
            <div className="text-xs text-neutral-400">Checkout 100% encriptado</div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1 border border-amber-500/20">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white tracking-wide">7 Días de Garantía</div>
            <div className="text-xs text-neutral-400">Devolución sin preguntas</div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-1 border border-emerald-500/20">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-white tracking-wide">+14 Países</div>
            <div className="text-xs text-neutral-400">Comunidad hispanohablante</div>
          </div>

        </div>
      </div>
    </div>
  );
};

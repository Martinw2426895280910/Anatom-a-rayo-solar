import React from 'react';
import { ASSETS } from '../assets';

export const AuthorSection: React.FC = () => {
  return (
    <section id="autor" className="py-16 md:py-24 relative bg-gradient-to-b from-[#07090e] via-[#0a0f1c] to-[#07090e] border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Minimal clean presentation: Only the image and role */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md sm:max-w-lg">
            {/* Warm subtle ambient glow behind photo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-orange-600/20 to-purple-600/20 blur-2xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-neutral-900">
              <img
                src={ASSETS.authorPortrait}
                alt="Bioq. Dr. Alberto Martin White - Redactor del PDF infolibro"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Bottom label: Bioq. Dr. Alberto Martin White - Redactor del PDF infolibro */}
              <div className="p-4 sm:p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Bioq. Dr. Alberto Martin White
                </div>
                <div className="text-sm sm:text-base font-mono font-semibold text-amber-400 mt-1">
                  Redactor del PDF infolibro
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/solarData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
            Dudas Comunes
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Respuestas rápidas sobre la descarga y garantía en Hotmart.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0e1422] border-amber-500/50 shadow-md' 
                    : 'bg-[#090d16] hover:bg-[#0c121e] border-neutral-800'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="font-cinzel text-xs sm:text-sm font-semibold text-white">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-amber-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-neutral-800/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="font-bold text-xs sm:text-sm text-white flex items-center justify-center sm:justify-start gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              ¿Tienes alguna duda adicional?
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              Escríbenos para recibir asistencia directa.
            </div>
          </div>
          <a
            href="mailto:soporte@futurabiotech.com"
            className="text-xs font-mono font-semibold px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-neutral-700 transition-colors whitespace-nowrap"
          >
            Contactar Soporte
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/solarData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            Resolvemos Todas Tus Dudas
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Todo lo que necesitas saber sobre el libro, el proceso de compra seguro en Hotmart y la entrega inmediata.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-cinzel text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-amber-400">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-neutral-800/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-bold text-sm text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              ¿Tienes alguna duda adicional sobre el libro?
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">
              El equipo de divulgación de Futura Biotech está a tu disposición para ayudarte.
            </div>
          </div>
          <a
            href="mailto:soporte@futurabiotech.com"
            className="text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-neutral-700 transition-colors whitespace-nowrap"
          >
            Contactar Soporte
          </a>
        </div>

      </div>
    </section>
  );
};

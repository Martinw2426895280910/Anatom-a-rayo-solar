import React, { useState } from 'react';
import { HelpCircle, Sun, Flame, Globe, Zap, Shield, Activity, Sparkles, ChevronRight } from 'lucide-react';
import { SOLAR_FACTS } from '../data/solarData';

export const DidYouKnow: React.FC = () => {
  const [selectedFact, setSelectedFact] = useState<string>(SOLAR_FACTS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'Flame': return Flame;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Shield': return Shield;
      default: return Activity;
    }
  };

  return (
    <section id="sabias-que" className="py-16 md:py-24 relative bg-[#07090e] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
            Datos Asombrosos
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            ¿Sabías que...?
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Cifras reales que revelan el inmenso poder estelar.
          </p>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLAR_FACTS.map((fact) => {
            const Icon = getIcon(fact.iconName);
            const isSelected = selectedFact === fact.id;

            return (
              <div
                key={fact.id}
                onClick={() => setSelectedFact(fact.id)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141d2c] border-amber-400 shadow-xl'
                    : 'bg-[#0a0e17]/90 hover:bg-[#0f1422] border-neutral-800 hover:border-amber-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {fact.statistic}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white mb-2">
                    {fact.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-3">
                    {fact.explanation}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-amber-200/90 italic flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{fact.curiosity}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

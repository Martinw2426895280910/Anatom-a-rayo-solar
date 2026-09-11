import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Gift, 
  FileText, 
  Sparkles, 
  ArrowRight,
  Download,
  Lock,
  Flame
} from 'lucide-react';
import { SOLAR_CHAPTERS, BOOK_SPECS } from '../data/solarData';
import { CampaignConfig } from '../types';

interface BookPreviewProps {
  config: CampaignConfig;
  onCheckoutClick: (location: string) => void;
}

export const BookPreview: React.FC<BookPreviewProps> = ({ config, onCheckoutClick }) => {
  const [openChapter, setOpenChapter] = useState<number | null>(1);
  const [showSampleModal, setShowSampleModal] = useState(false);

  const toggleChapter = (num: number) => {
    setOpenChapter(openChapter === num ? null : num);
  };

  return (
    <section id="capitulos" className="py-20 md:py-28 relative bg-gradient-to-b from-[#07090e] via-[#090d16] to-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Estructura Temática Completa
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Contenido y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">Capítulos del Libro</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            8 capítulos minuciosamente organizados que te guían desde el nacimiento del Sol hasta su destino final, 
            combinando rigor astrofísico, biología celular y narrativa inmersiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Chapters Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {SOLAR_CHAPTERS.map((chap) => {
              const isOpen = openChapter === chap.number;
              return (
                <div 
                  key={chap.number}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#0f1624] border-amber-500/50 shadow-lg shadow-orange-950/30' 
                      : 'bg-[#0b0f18]/80 hover:bg-[#0f1420] border-neutral-800'
                  }`}
                >
                  <button
                    onClick={() => toggleChapter(chap.number)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-cinzel font-bold text-base shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-neutral-950 shadow-md' 
                          : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        0{chap.number}
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-0.5">
                          {chap.depthKm} • {chap.temperature}
                        </div>
                        <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">
                          {chap.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                          {chap.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-neutral-400">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-800/80 text-sm text-neutral-300 font-light animate-fadeIn">
                      <p className="mb-4 leading-relaxed text-neutral-200">
                        {chap.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                          Temas clave revelados en este capítulo:
                        </span>
                        {chap.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Read Sample CTA */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>¿Quieres explorar el contenido antes de comprar?</span>
              </div>
              <button
                onClick={() => setShowSampleModal(true)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Ver Muestra Gratuita (Capítulo 1)
              </button>
            </div>
          </div>

          {/* Right Column: Book Specifications & 3 Included Free Bonuses */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Specifications Card */}
            <div className="p-6 rounded-2xl bg-[#0c121e] border border-amber-500/30 shadow-xl">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-4 pb-3 border-b border-neutral-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Ficha Técnica Oficial
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Título:</span>
                  <span className="text-white font-medium text-right font-cinzel">ANATOMÍA SOLAR</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Autor:</span>
                  <span className="text-amber-300 font-medium text-right">Bioq. Dr. Alberto Martin White</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Sello editorial:</span>
                  <span className="text-white font-medium text-right">FUTURA BIOTECH</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Extensión:</span>
                  <span className="text-white font-medium text-right">{BOOK_SPECS.pages}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Formatos:</span>
                  <span className="text-white font-medium text-right">PDF HD + ePub (Multidispositivo)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Plataforma de entrega:</span>
                  <span className="text-emerald-400 font-medium text-right">Hotmart (Inmediato)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Actualizaciones:</span>
                  <span className="text-white font-medium text-right">De por vida sin costo</span>
                </div>
              </div>
            </div>

            {/* Included Exclusive Bonuses */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141b2b] to-[#0c121e] border border-amber-500/40 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
                <Gift className="w-3.5 h-3.5" />
                Incluidos 100% Gratis con tu orden
              </div>

              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                3 Materiales Exclusivos de Regalo
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Valorados en más de R$ 150,00, hoy incluidos a costo cero al ordenar tu copia de Anatomía Solar:
              </p>

              <div className="space-y-4">
                {BOOK_SPECS.bonuses.map((bonus, bIndex) => (
                  <div key={bIndex} className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-amber-300">{bonus.title}</span>
                      <span className="text-[11px] font-mono text-neutral-500 line-through">Valor: {bonus.value}</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onCheckoutClick('chapters-sidebar-cta')}
                  className="fire-btn w-full py-4 px-6 rounded-2xl font-cinzel font-black text-sm sm:text-base uppercase tracking-widest text-neutral-950 shadow-xl shadow-orange-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 border border-yellow-300/50"
                >
                  <Flame className="w-5 h-5 text-neutral-950 animate-bounce" />
                  <span>DESCARGAR LIBRO & TODOS LOS BONUS</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Free Sample Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0e1422] border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative text-neutral-200">
            <button
              onClick={() => setShowSampleModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 text-sm font-mono cursor-pointer"
            >
              ✕ Cerrar
            </button>

            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              Fragmento Oficial • Capítulo 1
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              El Primer Aliento de la Estrella
            </h3>
            <p className="text-xs text-neutral-400 italic mb-6">
              Por Bioq. Dr. Alberto Martin White (Futura Biotech)
            </p>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300 font-light border-y border-neutral-800 py-4 my-4">
              <p>
                «Cierra los ojos e imagina el frío más absoluto que la física permite concebir: apenas unos diez grados por encima del cero absoluto. En ese vacío glacial, hace unos cuatro mil seiscientos millones de años, flotaba una nube gigantesca compuesta casi en su totalidad por átomos primordiales de hidrógeno y helio, aderezada con trazas microscópicas de polvo eyectado por supernovas olvidadas.
              </p>
              <p>
                Nada en aquella nube sugería la existencia del fuego. Sin embargo, una pequeña perturbación gravitatoria —quizás la onda de choque de una estrella agonizante a años luz de distancia— bastó para que el equilibrio se rompiera. Las partículas comenzaron a caer unas sobre otras. La gravedad, paciente e implacable, inició la contracción.
              </p>
              <p>
                A medida que la masa se compactaba, la energía potencial gravitatoria se transformaba en calor. La temperatura en el centro trepó a miles, luego a cientos de miles, y finalmente a millones de grados. Cuando el termómetro cósmico alcanzó los 10 millones de grados Kelvin, ocurrió el milagro cuántico: la fuerza nuclear fuerte venció la repulsión electrostática entre los protones. 
              </p>
              <p>
                El Sol encendió su primer reactor termonuclear. La oscuridad del Sistema Solar quedó desterrada para siempre...»
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-neutral-400">
                Continúa leyendo los 8 capítulos completos en la edición oficial.
              </div>
              <button
                onClick={() => {
                  setShowSampleModal(false);
                  onCheckoutClick('sample-modal-cta');
                }}
                className="fire-btn w-full sm:w-auto py-3.5 px-7 rounded-xl font-cinzel font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950 shadow-lg shadow-orange-600/40 cursor-pointer flex items-center justify-center gap-2 border border-yellow-300/40"
              >
                <Flame className="w-4 h-4 text-neutral-950 animate-bounce" />
                <span>Comprar Libro Completo en Hotmart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

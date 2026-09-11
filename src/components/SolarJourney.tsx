import React, { useState } from 'react';
import { Flame, Compass, Eye, Thermometer, Layers, ChevronRight, Zap, Orbit, ArrowDown } from 'lucide-react';
import { ASSETS } from '../assets';

interface LayerInfo {
  id: string;
  name: string;
  depth: string;
  temperature: string;
  phenomenon: string;
  description: string;
  quote: string;
}

const LAYERS: LayerInfo[] = [
  {
    id: 'corona',
    name: '1. Corona y Viento Solar',
    depth: 'Hasta millones de km en el espacio',
    temperature: '1.000.000 °C a 3.000.000 °C',
    phenomenon: 'Reconexión magnética y eyecciones de masa coronal (CME)',
    description: 'La misteriosa atmósfera exterior del Sol. Paradójicamente es cientos de veces más caliente que la superficie visible, impulsando un viento de partículas cargadas que abraza a toda la Tierra y esculpe las auroras boreales.',
    quote: '“En la corona, las líneas de fuerza magnética se retuercen como cuerdas de acero bajo tensión hasta romperse y liberar en un segundo la energía de millones de bombas nucleares.”'
  },
  {
    id: 'fotosfera',
    name: '2. Fotosfera y Manchas Solares',
    depth: 'Espesor aprox. 500 km',
    temperature: '5.500 °C (3.800 °C en manchas)',
    phenomenon: 'Granulación brillante y campos magnéticos concentrados',
    description: 'La superficie visible que emite casi toda la luz que llega a la Tierra. Aquí surgen las manchas solares: inmensos vórtices fríos producidos por campos magnéticos que sofocan la convección.',
    quote: '“Cada gránulo de la fotosfera tiene el tamaño de Texas o Europa occidental; burbujea furiosamente durante 10 minutos antes de enfriarse y hundirse de nuevo en el abismo.”'
  },
  {
    id: 'convectiva',
    name: '3. Zona Convectiva',
    depth: '200.000 km de profundidad',
    temperature: '2.000.000 °C en la base',
    phenomenon: 'Hervideros colosales de plasma y dinamo solar',
    description: 'Un caldero turbulento donde el plasma asciende caliente y desciende frío, creando corrientes titánicas. Este gigantesco dinamo es el responsable de generar el campo magnético del Sol y su ciclo de 11 años.',
    quote: '“Imagina una olla de agua hirviendo con la escala de 100 planetas Júpiter; el calor no viaja por radiación sino transportado por tempestades de plasma viviente.”'
  },
  {
    id: 'radiativa',
    name: '4. Zona Radiativa',
    depth: '300.000 km de espesor',
    temperature: '7.000.000 °C a 2.000.000 °C',
    phenomenon: 'El camino aleatorio del fotón (100.000 años de absorción y reemisión)',
    description: 'Un laberinto de densidad inconcebible. Los fotones nacidos en el núcleo tardan más de cien mil años en sortear billones de choques contra electrones antes de alcanzar la zona convectiva.',
    quote: '“La luz que hoy ilumina tus ojos fue generada cuando nuestra especie aún compartía el planeta con los hombres de Neandertal en el Pleistoceno.”'
  },
  {
    id: 'nucleo',
    name: '5. Núcleo Termonuclear',
    depth: '0 a 175.000 km (El centro absoluto)',
    temperature: '15.700.000 °C',
    phenomenon: 'Fusión de hidrógeno mediante túnel cuántico (E = mc²)',
    description: 'La forja primordial. Con una presión 250.000 millones de veces la atmósfera terrestre y una densidad 150 veces mayor que el agua, 600 millones de toneladas de hidrógeno se fusionan en helio cada segundo.',
    quote: '“Aquí la física cuántica deja de ser una abstracción de laboratorio y se convierte en el fuego que alimenta los océanos, los bosques y cada latido del corazón humano.”'
  }
];

export const SolarJourney: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerInfo>(LAYERS[4]); // Start at the Core!

  return (
    <section id="viaje" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0c101c] to-[#07090e]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Orbit className="w-4 h-4 text-orange-400" />
            Exploración Capa por Capa
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Un Viaje al <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">Corazón del Sol</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            En <em>Anatomía Solar</em>, no eres un simple espectador terrestre. El libro te equipa con una sonda imaginaria 
            para descender desde el espacio interplanetario hasta el horno termonuclear más extremo del Sistema Solar.
          </p>
        </div>

        {/* Interactive Anatomy Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Scientific Visual of Sun's Anatomy */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-orange-950/50 bg-black group">
              <img
                src={ASSETS.sunAnatomy}
                alt="Corte transversal científico del Sol mostrando núcleo, zona radiativa, convectiva y corona"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Layer Telemetry overlay badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-mono text-amber-300 font-bold uppercase">SONDA SOLAR PARKER / SDO</span>
                </div>
                <div className="font-mono text-neutral-300 text-[11px]">
                  Corte Transversal 8K
                </div>
              </div>

              {/* Bottom Quick Fact on Graphic */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-amber-500/20 text-xs text-neutral-200">
                <p className="flex items-center gap-2 font-medium">
                  <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>El libro traduce estos diagramas a explicaciones visuales fascinantes que cualquiera puede comprender.</span>
                </p>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Selecciona una capa a la derecha para ver los secretos revelados en el libro</span>
            </div>
          </div>

          {/* Right Column: Layer Selector and Book Excerpts */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Layer Selection Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {LAYERS.map((layer) => {
                const isSelected = activeLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-400 text-amber-200 shadow-md shadow-orange-500/20 font-bold'
                        : 'bg-neutral-900/60 hover:bg-neutral-800/80 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="truncate font-mono text-[11px] opacity-75">{layer.name.split('.')[0]}</div>
                    <div className="truncate font-medium">{layer.name.split('.')[1] || layer.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Detailed Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c121e] border border-amber-500/40 shadow-xl relative overflow-hidden">
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  {activeLayer.name}
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                  {activeLayer.temperature}
                </span>
              </div>

              {/* Telemetry row */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Profundidad / Escala</span>
                  <span className="text-neutral-200 font-semibold">{activeLayer.depth}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Fenómeno Principal</span>
                  <span className="text-amber-300 font-semibold truncate block">{activeLayer.phenomenon}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-5 font-light">
                {activeLayer.description}
              </p>

              {/* Book quote / extract */}
              <blockquote className="p-4 rounded-xl bg-amber-500/5 border-l-2 border-amber-400 text-xs sm:text-sm text-amber-100/90 italic">
                {activeLayer.quote}
                <div className="mt-2 text-right font-mono text-[11px] text-amber-400/80 not-italic">
                  — Anatomía Solar, Cap. correspondiente
                </div>
              </blockquote>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

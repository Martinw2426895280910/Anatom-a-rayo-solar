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
}

const LAYERS: LayerInfo[] = [
  {
    id: 'corona',
    name: '1. Corona',
    depth: 'Exterior',
    temperature: '1M a 3M °C',
    phenomenon: 'Viento solar y auroras',
    description: 'La atmósfera exterior, cientos de veces más caliente que la superficie visible.'
  },
  {
    id: 'fotosfera',
    name: '2. Fotosfera',
    depth: '500 km',
    temperature: '5.500 °C',
    phenomenon: 'Manchas y granulación',
    description: 'La superficie visible que ilumina la Tierra y donde emergen intensos campos magnéticos.'
  },
  {
    id: 'convectiva',
    name: '3. Zona Convectiva',
    depth: '200.000 km',
    temperature: '2.000.000 °C',
    phenomenon: 'Corrientes de plasma',
    description: 'Columnas gigantescas de plasma en ebullición que impulsan el dinamo magnético solar.'
  },
  {
    id: 'radiativa',
    name: '4. Zona Radiativa',
    depth: '300.000 km',
    temperature: '7M a 2M °C',
    phenomenon: 'Odisea del fotón',
    description: 'Plasma ultra denso donde la luz tarda más de 100.000 años en viajar al exterior.'
  },
  {
    id: 'nucleo',
    name: '5. Núcleo',
    depth: 'Centro (0-175k km)',
    temperature: '15.700.000 °C',
    phenomenon: 'Fusión de hidrógeno',
    description: 'El reactor central donde 600 millones de toneladas de hidrógeno se transforman en luz por segundo.'
  }
];

export const SolarJourney: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerInfo>(LAYERS[4]); // Start at the Core!

  return (
    <section id="viaje" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0c101c] to-[#07090e]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Orbit className="w-3.5 h-3.5 text-orange-400" />
            Capas Solares
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Estructura del <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">Sol</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Selecciona una capa para explorar qué ocurre en cada nivel.
          </p>
        </div>

        {/* Interactive Anatomy Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Scientific Visual of Sun's Anatomy */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
              <img
                src={ASSETS.sunAnatomy}
                alt="Corte transversal del Sol"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Layer Telemetry overlay badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-mono text-amber-300 font-bold text-[11px] uppercase">Corte Transversal 8K</span>
                </div>
                <div className="font-mono text-neutral-400 text-[10px]">
                  Datos Parker & SDO
                </div>
              </div>
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
                    className={`py-2 px-3 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md font-bold'
                        : 'bg-neutral-900/60 hover:bg-neutral-800/80 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="truncate">{layer.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Detailed Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c121e] border border-amber-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  {activeLayer.name}
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                  {activeLayer.temperature}
                </span>
              </div>

              {/* Telemetry row */}
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Profundidad</span>
                  <span className="text-neutral-200 font-semibold">{activeLayer.depth}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Fenómeno</span>
                  <span className="text-amber-300 font-semibold truncate block">{activeLayer.phenomenon}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {activeLayer.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  DownloadCloud, 
  Smartphone, 
  BookOpen, 
  Star,
  Lock,
  Compass
} from 'lucide-react';
import { CampaignConfig } from '../types';
import { ASSETS } from '../assets';

interface HeroProps {
  config: CampaignConfig;
  onCheckoutClick: (location: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onCheckoutClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(-5);
  const [rotateY, setRotateY] = useState(15);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth angle calculations
    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 22;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(-4);
    setRotateY(14);
    setIsHovered(false);
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Cosmic Deep Space & Solar Aura */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Core Radial Sunlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent blur-3xl opacity-70 animate-solar-pulse" />
        
        {/* Secondary Warm Highlights */}
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[120px]" />
        
        {/* Starfield grid simulation with subtle stars */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Exclusive Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-red-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-amber-500/10 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="font-semibold uppercase tracking-wider">
                ¡Promoción exclusive! • Edición Oficial
              </span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>

            {/* Author Attribution */}
            <div className="flex items-center gap-2.5 mb-3 text-neutral-400 text-xs sm:text-sm tracking-wider uppercase font-medium">
              <span className="text-amber-400 font-semibold">FUTURA BIOTECH</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">Bioq. Dr. Alberto Martin White</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              ANATOMÍA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500">SOLAR</span>
            </h1>

            {/* Subheadline: The Voyage to the Core */}
            <p className="font-cinzel text-lg sm:text-2xl text-amber-200/90 font-medium italic mb-6 max-w-2xl">
              “Un viaje al corazón ardiente de nuestra estrella”
            </p>

            {/* Emotional hook / narrative intro */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-light">
              Desciende a través de <strong className="text-amber-300 font-semibold">15 millones de grados</strong>, 
              sigue el titánico viaje de un fotón durante 100.000 años y descubre cómo el reactor más colosal de nuestro sistema 
              gobierna el clima espacial, la física cuántica y el propio origen de la vida en la Tierra.
            </p>

            {/* Action Card & Enormous Fire-Pulsing CTA */}
            <div className="w-full max-w-xl p-6 sm:p-7 rounded-3xl bg-[#0e1422]/95 border-2 border-amber-500/40 shadow-2xl shadow-orange-950/60 backdrop-blur-md mb-6 relative overflow-hidden">
              {/* Subtle background solar flame glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-amber-500/20 to-red-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-neutral-800/90 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
                    Edición Oficial • Acceso Inmediato
                  </div>
                  <div className="text-sm sm:text-base text-neutral-200 font-medium mt-1">
                    Descarga completa del Ebook + 3 Bonus Exclusivos
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    4.9/5 • Más de 850 lectores
                  </span>
                </div>
              </div>

              {/* Enormous Pulsating Fire Button with Solar Flare */}
              <div className="relative z-10">
                <button
                  onClick={() => onCheckoutClick('hero-main')}
                  className="fire-btn w-full py-5 sm:py-6 px-8 rounded-2xl font-cinzel font-black text-lg sm:text-2xl uppercase tracking-widest text-neutral-950 shadow-2xl shadow-orange-600/60 hover:shadow-orange-500/90 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group border-2 border-yellow-300/60"
                >
                  <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-950 animate-bounce group-hover:scale-125 transition-transform" />
                  <span className="tracking-widest">OBTENER EL LIBRO AHORA</span>
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-950 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Trust Badges under CTA */}
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs text-neutral-300 relative z-10 font-medium">
                <div className="flex items-center justify-center gap-1.5">
                  <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Plataforma Oficial Hotmart</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 border-x border-neutral-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantía de 7 Días</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Entrega Digital Inmediata</span>
                </div>
              </div>
            </div>

            {/* Quick Feature Bullets */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-300 justify-center lg:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Edición digital con ilustraciones en alta definición
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Formatos PDF Retina + ePub Kindle
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                3 Bonus exclusivos de climatología espacial
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Book Mockup & Solar Flares */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* 3D Perspective Book Wrapper */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000 cursor-pointer py-4"
              onClick={() => onCheckoutClick('hero-3d-book')}
            >
              {/* Pulsing Solar Backlight Aura */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-orange-600/30 to-red-600/40 blur-2xl opacity-80 animate-solar-pulse -z-10" />

              {/* 3D Book Container */}
              <div 
                className="relative transition-transform duration-300 ease-out transform-style-3d"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
                }}
              >
                {/* Book Spine Simulation (Left Edge Depth) */}
                <div 
                  className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#151a24] via-[#1f2737] to-[#0d121c] rounded-l-md origin-right border-y border-l border-amber-500/30"
                  style={{
                    transform: 'rotateY(-90deg) translateX(-100%)',
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <span className="text-[10px] text-amber-400/80 font-cinzel font-bold tracking-widest rotate-90 uppercase whitespace-nowrap">
                      ANATOMÍA SOLAR • MARTIN WHITE
                    </span>
                  </div>
                </div>

                {/* Book Front Cover */}
                <div className="relative w-[280px] sm:w-[330px] md:w-[370px] rounded-r-xl rounded-l-sm overflow-hidden shadow-[25px_30px_60px_-15px_rgba(0,0,0,0.95)] border border-amber-500/40 bg-neutral-950 group">
                  {/* Gloss / Light reflection overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none z-10 transition-opacity duration-300"
                    style={{
                      opacity: isHovered ? 0.45 : 0.2
                    }}
                  />

                  {/* High Quality Book Cover Image */}
                  <img
                    src={ASSETS.bookCover}
                    alt="Portada del libro ANATOMÍA SOLAR de Alberto Martin White"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Bottom Spine Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 py-1.5 px-3 rounded bg-black/80 backdrop-blur-md border border-amber-500/30 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                      Ebook Digital Oficial
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Edición Completa
                    </span>
                  </div>
                </div>

                {/* Book Pages Edge Thickness (Bottom/Right shadow) */}
                <div 
                  className="absolute top-1 bottom-1 right-0 w-3 bg-neutral-200 border-y border-r border-neutral-400 rounded-r-sm shadow-md"
                  style={{
                    transform: 'rotateY(90deg) translateX(50%)',
                    background: 'repeating-linear-gradient(90deg, #f3f4f6, #f3f4f6 1px, #e5e7eb 1px, #e5e7eb 2px)'
                  }}
                />
              </div>

              {/* Interactive prompt under book */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>Pasa el cursor para rotar en 3D • Clic para comprar</span>
              </div>
            </div>

            {/* Instant delivery pill */}
            <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Compatible con iPhone, Android, Kindle, iPad y PC</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

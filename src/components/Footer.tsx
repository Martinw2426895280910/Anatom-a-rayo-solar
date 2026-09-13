import React from 'react';
import { Flame, ShieldCheck, Lock, Mail, Heart } from 'lucide-react';
import { CampaignConfig } from '../types';

interface FooterProps {
  config: CampaignConfig;
  onOpenSettings: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings, onOpenDownload }) => {
  return (
    <footer className="bg-[#05070a] border-t border-neutral-800/80 pt-16 pb-24 md:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#0b0f17] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-cinzel text-lg font-bold text-white tracking-wider">
                ANATOMÍA SOLAR
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Divulgación científica por Bioq. Dr. Alberto Martin White (Futura Biotech).
            </p>
            <div className="flex items-center gap-3 text-xs">
              <button 
                onClick={onOpenSettings}
                className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
              >
                Configurar Hotmart
              </button>
              <span>•</span>
              <button 
                onClick={onOpenDownload}
                className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
              >
                Exportar HTML
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-cinzel font-bold text-white text-xs uppercase tracking-wider mb-3">
              Navegación
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#viaje" className="hover:text-amber-400 transition-colors">Estructura</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors">Beneficios</a></li>
              <li><a href="#capitulos" className="hover:text-amber-400 transition-colors">Capítulos</a></li>
              <li><a href="#sabias-que" className="hover:text-amber-400 transition-colors">Curiosidades</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Security & Hotmart Trust */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-cinzel font-bold text-white text-xs uppercase tracking-wider mb-3">
              Seguridad
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Checkout Seguro Hotmart</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Pagos encriptados con garantía incondicional de devolución de 7 días.
              </p>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>contacto@futurabiotech.com</span>
            </div>
          </div>

        </div>

        {/* Disclaimer on Hotmart */}
        <div className="border-t border-neutral-900 pt-8 pb-4 text-[10px] text-neutral-400 leading-relaxed space-y-2">
          <p>
            <strong>Aviso de exención de responsabilidad de Hotmart:</strong> Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un control editorial previo de los productos vendidos, ni valora la tecnicidad y experiencia de quienes los elaboran. La existencia de un producto y su adquisición a través de la plataforma no puede ser considerada como garantía de calidad de contenido y resultado, en ningún caso. Al adquirirlo, el comprador declara conocer esta información. Puedes consultar los términos y políticas de Hotmart en cualquier momento en su sitio web oficial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-900/60 text-neutral-400">
            <div>
              © {new Date().getFullYear()} ANATOMÍA SOLAR — Futura Biotech • Bioq. Dr. Alberto Martin White. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacidad</span>
              <span>•</span>
              <span>Términos de Uso</span>
              <span>•</span>
              <span>Garantía de Satisfacción</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

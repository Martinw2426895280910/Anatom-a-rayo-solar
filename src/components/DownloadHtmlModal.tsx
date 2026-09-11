import React, { useState } from 'react';
import { Download, Copy, Check, X, FileCode, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { CampaignConfig } from '../types';

interface DownloadHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CampaignConfig;
}

export const DownloadHtmlModal: React.FC<DownloadHtmlModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const checkoutLink = `${config.hotmartCheckoutUrl}${config.hotmartCheckoutUrl.includes('?') ? '&' : '?'}src=${config.campaignSource}`;

  const generatedHtml = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ANATOMÍA SOLAR — Alberto Martin White | Libro Oficial</title>
  <meta name="description" content="Un viaje al corazón ardiente de nuestra estrella. De Alberto Martin White (Futura Biotech). ¡Adquiérelo hoy por ${config.priceCurrency} ${config.priceAmount}!" />
  <!-- Meta / Facebook Pixel Code -->
  ${config.metaPixelId ? `
  <script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${config.metaPixelId}');
    fbq('track', 'PageView');
  </script>
  ` : '<!-- No Meta Pixel configured -->'}
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Outfit', sans-serif; background-color: #07090e; color: #e8ecf4; }
    .font-cinzel { font-family: 'Cinzel', serif; }
  </style>
</head>
<body class="selection:bg-amber-500 selection:text-black">
  <!-- Top Urgency Bar -->
  <div class="bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 text-white text-xs font-medium py-2.5 px-4 text-center">
    🔥 ¡PROMOCIÓN EXCLUSIVA DE LANZAMIENTO! — DESCUENTO ESPECIAL POR TIEMPO LIMITADO
  </div>

  <!-- Hero Section -->
  <main class="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
    <div class="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-6 uppercase tracking-wider">
      FUTURA BIOTECH • Bioq. Dr. Alberto Martin White
    </div>
    <h1 class="font-cinzel text-4xl sm:text-6xl font-extrabold text-white mb-4">
      ANATOMÍA <span class="text-amber-400">SOLAR</span>
    </h1>
    <p class="font-cinzel text-xl sm:text-2xl text-amber-200/90 italic mb-6">
      “Un viaje al corazón ardiente de nuestra estrella”
    </p>
    <p class="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
      Desciende a través de 15 millones de grados, sigue la odisea de un fotón durante 100.000 años y descubre cómo el reactor más colosal gobierna la vida en la Tierra.
    </p>

    <!-- Action Card -->
    <div class="max-w-md mx-auto p-8 rounded-3xl bg-[#0e1422] border-2 border-amber-500/50 shadow-2xl mb-8">
      <div class="text-xs uppercase text-amber-400 font-mono tracking-widest mb-2 font-bold">Edición Oficial Digital Completa</div>
      <div class="text-2xl font-extrabold text-white font-cinzel mb-2">
        Acceso Inmediato
      </div>
      <div class="text-xs text-emerald-400 font-mono mb-6">Descarga Inmediata • Garantía 7 días Hotmart</div>
      <a href="${checkoutLink}" target="_blank" rel="noopener noreferrer" class="block w-full py-5 rounded-2xl font-cinzel font-black text-lg uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 text-neutral-950 hover:from-yellow-300 hover:to-orange-400 transition-all shadow-xl shadow-orange-500/50 transform hover:scale-105">
        🔥 OBTENER EL LIBRO AHORA →
      </a>
    </div>
  </main>

  <!-- Sticky Mobile Bar -->
  <div class="fixed bottom-0 inset-x-0 bg-[#0a0e17]/95 border-t border-amber-500/30 p-3 sm:hidden flex items-center justify-between">
    <div>
      <div class="text-xs font-bold text-white">ANATOMÍA SOLAR</div>
      <div class="text-xs text-amber-400 font-medium">Edición Digital Oficial</div>
    </div>
    <a href="${checkoutLink}" class="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 text-xs font-black uppercase shadow-lg tracking-wider">
      Comprar
    </a>
  </div>
</body>
</html>`;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedHtml], { type: 'text/html;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'index.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d131f] border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-neutral-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Descargar Landing Page ANATOMÍA SOLAR
            </h2>
            <p className="text-xs text-neutral-400">
              Exporta tu landing page en un único archivo HTML listo para Vercel, Netlify o cualquier hosting gratis
            </p>
          </div>
        </div>

        {/* Benefits of this export */}
        <div className="my-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Enlace de Hotmart preconfigurado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Listo para Vercel Drag-and-Drop</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Carga ultrarrápida para Facebook Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% responsivo para móviles</span>
          </div>
        </div>

        {/* Code Preview box */}
        <div className="relative rounded-xl overflow-hidden border border-neutral-700 bg-neutral-950 font-mono text-xs">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
            <span className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-amber-400" />
              index.html (Autónomo)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>
          <pre className="p-4 text-neutral-300 max-h-56 overflow-y-auto leading-relaxed">
            {generatedHtml}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Puedes subir este archivo directamente a vercel.com/new</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
            >
              Cerrar
            </button>
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar index.html</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DEFAULT_CONFIG } from './data/solarData';
import { CampaignConfig } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { SolarJourney } from './components/SolarJourney';
import { Benefits } from './components/Benefits';
import { BookPreview } from './components/BookPreview';
import { DidYouKnow } from './components/DidYouKnow';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { HotmartConfigModal } from './components/HotmartConfigModal';
import { DownloadHtmlModal } from './components/DownloadHtmlModal';
import { Footer } from './components/Footer';
import { ExternalLink, CheckCircle2, ShieldCheck, Lock, X } from 'lucide-react';
import { initHotmartWidget, triggerHotmartCheckout } from './utils/hotmartWidget';

export default function App() {
  const [config, setConfig] = useState<CampaignConfig>(() => {
    // Check localStorage for saved author settings
    try {
      const saved = localStorage.getItem('solar_landing_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Replace old placeholder with official Hotmart checkout link with checkoutMode=2
        if (!parsed.hotmartCheckoutUrl || parsed.hotmartCheckoutUrl.includes('PROMO-ANATOMIA-SOLAR') || !parsed.hotmartCheckoutUrl.includes('V102119673D')) {
          parsed.hotmartCheckoutUrl = 'https://pay.hotmart.com/V102119673D?checkoutMode=2';
          localStorage.setItem('solar_landing_config', JSON.stringify(parsed));
        } else if (!parsed.hotmartCheckoutUrl.includes('checkoutMode=2')) {
          parsed.hotmartCheckoutUrl = parsed.hotmartCheckoutUrl.includes('?') 
            ? `${parsed.hotmartCheckoutUrl}&checkoutMode=2`
            : `${parsed.hotmartCheckoutUrl}?checkoutMode=2`;
          localStorage.setItem('solar_landing_config', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_CONFIG;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [checkoutModalUrl, setCheckoutModalUrl] = useState<string | null>(null);

  // Initialize Hotmart official script on mount
  useEffect(() => {
    initHotmartWidget();
  }, []);

  // Adopt traffic parameters from URL if present (e.g. ?src=fb_ad or ?utm_source=instagram)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const src = params.get('src') || params.get('utm_source');
      if (src && src !== config.campaignSource) {
        setConfig(prev => ({ ...prev, campaignSource: src }));
      }
    }
  }, []);

  const handleSaveConfig = (newConfig: CampaignConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('solar_landing_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  // Direct checkout action handler
  const handleCheckoutClick = (locationSource: string) => {
    const destination = config.hotmartCheckoutUrl || 'https://pay.hotmart.com/V102119673D?checkoutMode=2';
    const separator = destination.includes('?') ? '&' : '?';
    const finalUrl = config.campaignSource
      ? `${destination}${separator}src=${config.campaignSource}_${locationSource}&utm_source=${config.campaignSource}`
      : destination;

    // Meta Pixel event simulation if configured
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'Anatomia Solar Ebook',
          value: parseFloat(config.priceAmount.replace(',', '.')),
          currency: config.priceCurrency === 'R$' ? 'BRL' : 'USD',
        });
      } catch {
        // ignore
      }
    }

    // Trigger Hotmart official widget first
    try {
      triggerHotmartCheckout(destination, {
        src: config.campaignSource ? `${config.campaignSource}_${locationSource}` : undefined,
        utm_source: config.campaignSource || undefined
      });
    } catch {
      // ignore
    }

    // Direct window open in a new tab if outside iframe or as backup
    let openedWindow: Window | null = null;
    try {
      openedWindow = window.open(finalUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // ignore
    }

    // If opening was blocked by browser sandbox or popup blocker, show checkout modal fallback
    if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === 'undefined') {
      setCheckoutModalUrl(finalUrl);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e8ecf4] font-['Outfit',sans-serif] selection:bg-amber-500 selection:text-black">
      {/* Top Fixed Header with Launch Urgency Timer */}
      <Header
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
        onCheckoutClick={handleCheckoutClick}
      />

      {/* Main Sections */}
      <main>
        {/* Hero with 3D Book Mockup, Pricing R$ 220,00 and Solar Glow */}
        <Hero
          config={config}
          onCheckoutClick={handleCheckoutClick}
        />

        {/* Social Proof Badges & Ratings */}
        <SocialProofBar />

        {/* Concept: "Un Viaje al Corazón del Sol" - Layer by Layer */}
        <SolarJourney />

        {/* Reader-Oriented Benefits */}
        <Benefits
          config={config}
          onCheckoutClick={handleCheckoutClick}
        />

        {/* Chapters & Content with Accordion & Free Sample Excerpt */}
        <BookPreview
          config={config}
          onCheckoutClick={handleCheckoutClick}
        />

        {/* "¿Sabías que...?" Engaging Trivia & Cosmic Facts */}
        <DidYouKnow />

        {/* Reader Reviews & Testimonials */}
        <Testimonials />

        {/* Core Pricing & Hotmart Confidence Block */}
        <PricingSection
          config={config}
          onCheckoutClick={handleCheckoutClick}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer with Legal & Hotmart Disclaimers */}
      <Footer
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Sticky Bottom Bar for Mobile Visitors */}
      <StickyMobileCTA
        config={config}
        onCheckoutClick={handleCheckoutClick}
      />

      {/* Author Hotmart URL & Pixel Settings Modal */}
      <HotmartConfigModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Download Standalone HTML Modal (for Vercel / Netlify / Hosting) */}
      <DownloadHtmlModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        config={config}
      />

      {/* Checkout Confirmation / Direct Redirection Overlay */}
      {checkoutModalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="max-w-md w-full rounded-3xl bg-[#0d131f] border-2 border-amber-500/50 p-6 sm:p-8 text-center shadow-2xl relative">
            <button
              onClick={() => setCheckoutModalUrl(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
              Plataforma Oficial Hotmart
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Conectando con el Checkout Seguro
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6 font-light">
              Estás a un paso de acceder a la edición oficial completa de <strong className="text-amber-300">ANATOMÍA SOLAR</strong> con entrega inmediata.
            </p>

            <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono text-neutral-400 mb-6 break-all text-left">
              <span className="text-[10px] text-amber-400 block mb-1 uppercase font-semibold">Enlace de pago:</span>
              {checkoutModalUrl}
            </div>

            <div className="space-y-3">
              <a
                href={checkoutModalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCheckoutModalUrl(null)}
                className="fire-btn w-full py-4 px-6 rounded-2xl font-cinzel font-black text-sm sm:text-base uppercase tracking-wider text-neutral-950 shadow-xl shadow-orange-600/40 flex items-center justify-center gap-2 cursor-pointer border border-yellow-300/50"
              >
                <span>Ir al Pago en Hotmart</span>
                <ExternalLink className="w-4 h-4 text-neutral-950" />
              </a>

              <button
                onClick={() => {
                  setCheckoutModalUrl(null);
                  setIsSettingsOpen(true);
                }}
                className="w-full py-2 text-xs text-neutral-400 hover:text-amber-300 cursor-pointer"
              >
                ¿Eres el autor? Cambia la URL de tu checkout aquí
              </button>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantía incondicional de 7 días y encriptación SSL</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

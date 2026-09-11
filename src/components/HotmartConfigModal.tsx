import React, { useState } from 'react';
import { Settings, Check, ExternalLink, Link2, Target, BarChart3, Copy, Sparkles, X } from 'lucide-react';
import { CampaignConfig } from '../types';

interface HotmartConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CampaignConfig;
  onSaveConfig: (newConfig: CampaignConfig) => void;
}

export const HotmartConfigModal: React.FC<HotmartConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<CampaignConfig>({ ...config });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    onClose();
  };

  // Build the live preview of the Hotmart URL
  const getFullUrl = () => {
    try {
      const url = new URL(formData.hotmartCheckoutUrl);
      if (formData.campaignSource) {
        url.searchParams.set('src', formData.campaignSource);
        url.searchParams.set('utm_source', formData.campaignSource);
      }
      return url.toString();
    } catch {
      return `${formData.hotmartCheckoutUrl}?src=${formData.campaignSource}`;
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(getFullUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d131f] border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-neutral-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Panel de Configuración Hotmart & Tráfico
            </h2>
            <p className="text-xs text-neutral-400">
              Personaliza tu enlace de pago, etiquetas de origen y códigos de medición
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          
          {/* Hotmart Checkout URL */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5" />
              URL de Checkout Hotmart Oficial:
            </label>
            <input
              type="text"
              value={formData.hotmartCheckoutUrl}
              onChange={(e) => setFormData({ ...formData, hotmartCheckoutUrl: e.target.value })}
              placeholder="https://pay.hotmart.com/V102119673D"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white font-mono text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              required
            />
            <span className="text-[11px] text-neutral-400 mt-1 block">
              Pega aquí el enlace de pago de tu producto en Hotmart. Todos los botones de la página enviarán al usuario a esta dirección.
            </span>
          </div>

          {/* Pricing Config */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-neutral-300 mb-1">
                Precio Oferta ({formData.priceCurrency}):
              </label>
              <input
                type="text"
                value={formData.priceAmount}
                onChange={(e) => setFormData({ ...formData, priceAmount: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white font-mono text-xs sm:text-sm focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-neutral-300 mb-1">
                Precio Original ({formData.priceCurrency}):
              </label>
              <input
                type="text"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white font-mono text-xs sm:text-sm focus:border-amber-400"
              />
            </div>
          </div>

          {/* Traffic Source / Campaign Presets */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              Etiqueta de Origen de Campaña (Hotmart SRC / UTM):
            </label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {['fb_ads', 'instagram_reels', 'whatsapp_direct', 'youtube_solar', 'tiktok'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setFormData({ ...formData, campaignSource: preset })}
                  className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-colors cursor-pointer ${
                    formData.campaignSource === preset
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  +{preset}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={formData.campaignSource}
              onChange={(e) => setFormData({ ...formData, campaignSource: e.target.value })}
              placeholder="Ej: fb_ads_video1"
              className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-700 text-white font-mono text-xs sm:text-sm focus:border-amber-400"
            />
            <span className="text-[11px] text-neutral-400 mt-1 block">
              Permite a Hotmart Analytics y a ti rastrear exactamente qué anuncio o red social generó cada venta.
            </span>
          </div>

          {/* Analytics / Pixel IDs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-neutral-300 mb-1 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                Meta Pixel ID (Facebook Ads):
              </label>
              <input
                type="text"
                value={formData.metaPixelId}
                onChange={(e) => setFormData({ ...formData, metaPixelId: e.target.value })}
                placeholder="Ej: 893452109876543"
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white font-mono text-xs focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-neutral-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                Hotmart Analytics ID:
              </label>
              <input
                type="text"
                value={formData.hotmartAnalyticsId}
                onChange={(e) => setFormData({ ...formData, hotmartAnalyticsId: e.target.value })}
                placeholder="Ej: HOTMART-ANALYTICS-ID"
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white font-mono text-xs focus:border-amber-400"
              />
            </div>
          </div>

          {/* Live URL Preview */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/20 text-xs">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
              URL resultante para los botones de compra:
            </span>
            <div className="flex items-center justify-between gap-2 overflow-x-auto py-1">
              <code className="text-neutral-300 text-xs font-mono break-all">
                {getFullUrl()}
              </code>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-amber-300 flex items-center gap-1 text-[11px] cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Save Action */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-neutral-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 cursor-pointer shadow-md"
            >
              Guardar y Aplicar Cambios
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

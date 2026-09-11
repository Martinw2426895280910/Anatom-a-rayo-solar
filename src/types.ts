export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  depthKm: string;
  temperature: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  highlight: string;
  avatarUrl?: string;
}

export interface SolarFact {
  id: string;
  title: string;
  statistic: string;
  explanation: string;
  curiosity: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'compra' | 'contenido' | 'garantia' | 'soporte';
}

export interface CampaignConfig {
  hotmartCheckoutUrl: string;
  priceCurrency: string;
  priceAmount: string;
  originalPrice: string;
  metaPixelId: string;
  hotmartAnalyticsId: string;
  campaignSource: string;
  enableCountdown: boolean;
  whatsappSupportNumber: string;
}

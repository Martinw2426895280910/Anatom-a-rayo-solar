import { Chapter, Testimonial, SolarFact, FAQItem, CampaignConfig } from '../types';

export const DEFAULT_CONFIG: CampaignConfig = {
  hotmartCheckoutUrl: 'https://pay.hotmart.com/V102119673D?checkoutMode=2',
  priceCurrency: 'R$',
  priceAmount: '220,00',
  originalPrice: '350,00',
  metaPixelId: '',
  hotmartAnalyticsId: '',
  campaignSource: 'fb_ad_solar',
  enableCountdown: true,
  whatsappSupportNumber: '+5511999999999',
};

export const SOLAR_CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: 'Génesis Estelar',
    subtitle: 'El nacimiento de nuestra estrella',
    description: 'De una nube fría de gas al encendido del reactor solar.',
    highlights: [
      'Colapso gravitacional y protoestrella',
      'El primer encendido nuclear'
    ],
    depthKm: 'Superficie a Núcleo',
    temperature: '10 K → 15.000.000 K'
  },
  {
    number: 2,
    title: 'El Núcleo',
    subtitle: 'Donde la materia se vuelve luz',
    description: 'Fusión de hidrógeno a 15 millones de grados y presiones extremas.',
    highlights: [
      'Túnel cuántico en la fusión nuclear',
      '600M de toneladas fusionadas/segundo'
    ],
    depthKm: '0 a 175.000 km',
    temperature: '15.700.000 °C'
  },
  {
    number: 3,
    title: 'Zona Radiativa',
    subtitle: 'La odisea de un fotón',
    description: 'La luz tarda 100.000 años en escapar de esta densa capa.',
    highlights: [
      'El camino aleatorio del fotón',
      'De radiación gamma a luz visible'
    ],
    depthKm: '175.000 a 490.000 km',
    temperature: '7.000.000 °C → 2.000.000 °C'
  },
  {
    number: 4,
    title: 'Zona Convectiva',
    subtitle: 'El motor magnético',
    description: 'Corrientes de plasma del tamaño de planetas que generan el campo magnético.',
    highlights: [
      'Granulación fotosférica',
      'El ciclo solar de 11 años'
    ],
    depthKm: '490.000 a 696.000 km',
    temperature: '2.000.000 °C → 5.500 °C'
  },
  {
    number: 5,
    title: 'Fotosfera y Manchas',
    subtitle: 'La superficie visible',
    description: 'El disco visible que ilumina la Tierra y sus manchas magnéticas.',
    highlights: [
      'Física de las manchas solares',
      'Espectrometría y elementos químicos'
    ],
    depthKm: '500 km',
    temperature: '5.500 °C'
  },
  {
    number: 6,
    title: 'Corona Solar',
    subtitle: 'La atmósfera a millones de grados',
    description: 'Por qué la atmósfera es 200 veces más caliente que la superficie.',
    highlights: [
      'Descubrimientos de la sonda Parker',
      'Reconexión magnética'
    ],
    depthKm: 'Atmósfera exterior',
    temperature: '1.000.000 °C a 3.000.000 °C'
  },
  {
    number: 7,
    title: 'Clima Espacial',
    subtitle: 'Tormentas y eyecciones coronales',
    description: 'Impacto del viento solar en satélites, auroras y redes eléctricas.',
    highlights: [
      'El histórico Evento Carrington',
      'Pronósticos y alertas solares'
    ],
    depthKm: '150M km a la Tierra',
    temperature: 'Viento solar a 800 km/s'
  },
  {
    number: 8,
    title: 'Destino Solar',
    subtitle: 'El futuro del Sol y la vida',
    description: 'Evolución a gigante roja y la huella del Sol en cada célula viva.',
    highlights: [
      'El futuro térmico del Sistema Solar',
      'Del reactor estelar a nuestras células'
    ],
    depthKm: 'Cosmos Infinito',
    temperature: 'Destino térmico'
  }
];

export const SOLAR_FACTS: SolarFact[] = [
  {
    id: 'fact-1',
    title: 'El viaje del fotón',
    statistic: '100.000 años',
    explanation: 'Un fotón tarda más de 100.000 años en salir del núcleo hacia el espacio exterior.',
    curiosity: 'La luz que recibes hoy nació en el corazón del Sol en la era prehistórica.',
    iconName: 'Sun'
  },
  {
    id: 'fact-2',
    title: 'Fusión de materia',
    statistic: '600M Tn/s',
    explanation: 'El Sol transforma 600 millones de toneladas de hidrógeno en helio cada segundo.',
    curiosity: 'Equivale al poder de 1.800 millones de bombas de hidrógeno estallando por segundo.',
    iconName: 'Flame'
  },
  {
    id: 'fact-3',
    title: 'Masa del Sistema',
    statistic: '99,86%',
    explanation: 'El Sol concentra casi la totalidad de la masa; todos los planetas juntos son apenas el 0,14%.',
    curiosity: 'Dentro del Sol cabrían 1.300.000 planetas Tierra.',
    iconName: 'Globe'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dra. Elena Vasconcelos',
    role: 'Astrofísica',
    location: 'Brasil',
    rating: 5,
    highlight: 'Didáctico, riguroso y visual.',
    comment: 'Une la precisión científica con explicaciones sencillas. La sección del fotón es brillante.'
  },
  {
    id: 't-2',
    name: 'Carlos Mendez R.',
    role: 'Telecomunicaciones',
    location: 'Argentina',
    rating: 5,
    highlight: 'Imprescindible sobre tormentas solares.',
    comment: 'Explica el impacto real en satélites y redes eléctricas con total claridad.'
  },
  {
    id: 't-3',
    name: 'Prof. Marcos Silveira',
    role: 'Educador de Ciencias',
    location: 'Brasil',
    rating: 5,
    highlight: 'Excelente material didáctico.',
    comment: 'Los diagramas son perfectos para enseñar la física del Sol de manera entretenida.'
  },
  {
    id: 't-4',
    name: 'Valeria Dupont',
    role: 'Lectora de Divulgación',
    location: 'Chile',
    rating: 5,
    highlight: 'Fascinante de principio a fin.',
    comment: 'Se lee como una aventura. Aprendí muchísimo sobre el Sol en pocas horas.'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'compra',
    question: '¿Cómo recibo el libro tras el pago?',
    answer: 'Acceso y descarga inmediata por correo electrónico al confirmar en Hotmart.'
  },
  {
    category: 'compra',
    question: '¿Es seguro comprar en Hotmart?',
    answer: '100% seguro, con cifrado bancario SSL de 256 bits y protección oficial de Hotmart.'
  },
  {
    category: 'garantia',
    question: '¿Qué garantía tengo?',
    answer: '7 días de garantía incondicional respaldada por Hotmart con reembolso del 100%.'
  },
  {
    category: 'contenido',
    question: '¿En qué formatos puedo leerlo?',
    answer: 'PDF ilustrado en alta resolución y ePub adaptable para tablet, PC o móvil.'
  },
  {
    category: 'contenido',
    question: '¿Necesito conocimientos de física?',
    answer: 'No. El libro está redactado en lenguaje accesible, visual y directo para todos.'
  },
  {
    category: 'compra',
    question: '¿Cuáles son los métodos de pago?',
    answer: 'Tarjetas de crédito/débito, cuotas, Pix (Brasil) y PayPal según tu país.'
  }
];

export const BOOK_SPECS = {
  title: 'ANATOMÍA SOLAR',
  subtitle: 'Un viaje al corazón ardiente de nuestra estrella',
  author: 'Bioq. Dr. Alberto Martin White',
  entity: 'Futura Biotech',
  pages: 'Edición Ilustrada',
  language: 'Español',
  format: 'PDF HD + ePub',
  bonuses: [
    {
      title: 'Bonus 1: Guía de Observación Segura',
      value: 'R$ 65,00',
      description: 'Cómo observar manchas solares sin arriesgar tu vista.'
    },
    {
      title: 'Bonus 2: Póster Digital 8K del Sol',
      value: 'R$ 49,00',
      description: 'Infografía gigante con todas las capas y temperaturas solares.'
    },
    {
      title: 'Bonus 3: Glosario de Clima Espacial',
      value: 'R$ 38,00',
      description: 'Conceptos clave para entender las alertas solares de la NASA y NOAA.'
    }
  ]
};

import { Chapter, Testimonial, SolarFact, FAQItem, CampaignConfig } from '../types';

export const DEFAULT_CONFIG: CampaignConfig = {
  hotmartCheckoutUrl: 'https://pay.hotmart.com/V102119673D',
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
    title: 'Génesis de una Bestia Estelar',
    subtitle: 'El colapso gravitacional y el primer encendido nuclear',
    description: 'Viajamos 4.600 millones de años al pasado para presenciar cómo una densa nube molecular fría dio origen al gigantesco reactor que hoy gobierna cada latido de la Tierra.',
    highlights: [
      'De nebulosa de polvo a protoestrella incandescente',
      'El momento exacto en que la gravedad perdió frente a la presión termonuclear',
      'La herencia de supernovas en el ADN de nuestro sistema'
    ],
    depthKm: 'Superficie a Núcleo',
    temperature: '10 K → 15.000.000 K'
  },
  {
    number: 2,
    title: 'La Caldera Central: El Núcleo Termonuclear',
    subtitle: 'Donde la materia se desintegra en luz pura',
    description: 'Penetramos en el epicentro del Sol: una masa aplastante con presiones 250.000 millones de veces superiores a las de la Tierra y un baile cuántico que desafía la física clásica.',
    highlights: [
      'El túnel cuántico: cómo protones con la misma carga logran unirse',
      '600 millones de toneladas de hidrógeno convertidas en helio por segundo',
      'La ecuación E=mc² en su máxima expresión cosmológica'
    ],
    depthKm: '0 a 175.000 km',
    temperature: '15.700.000 °C'
  },
  {
    number: 3,
    title: 'El Laberinto Radiativo: La Odisea de un Fotón',
    subtitle: 'Cien mil años para recorrer medio millón de kilómetros',
    description: 'Sigue el viaje milagroso de la luz generada en el núcleo. Rebotando trillones de veces contra electrones libres en un plasma hiperdenso, un rayo de sol tarda más de 100.000 años en emerger antes de tardar solo 8 minutos en tocar tu piel.',
    highlights: [
      'La danza del camino aleatorio (random walk) fotónico',
      'Por qué la luz solar que te calienta hoy nació en la era de los neandertales',
      'De rayos gamma letales a fotones de luz visible y calor'
    ],
    depthKm: '175.000 a 490.000 km',
    temperature: '7.000.000 °C → 2.000.000 °C'
  },
  {
    number: 4,
    title: 'El Océano Convectivo y el Dinamo Magnético',
    subtitle: 'Hervideros colosales del tamaño de continentes',
    description: 'Columnas gigantescas de plasma ardiente suben y bajan como agua en ebullición. Aquí nace el campo magnético retorcido que desata la furia del astro rey.',
    highlights: [
      'Células de granulación: piscinas de fuego donde cabe un planeta entero',
      'El efecto dinamo y el ciclo solar de inversión cada 11 años',
      'Líneas magnéticas trenzadas que acumulan energía titánica'
    ],
    depthKm: '490.000 a 696.000 km',
    temperature: '2.000.000 °C → 5.500 °C'
  },
  {
    number: 5,
    title: 'La Fotosfera: La Piel Dorada y las Manchas Solares',
    subtitle: 'La frontera visible que baña nuestro firmamento',
    description: 'El disco que admiramos desde la Tierra. Descubre la física detrás de las manchas solares: cicatrices magnéticas oscuras donde la temperatura baja bruscamente y la tensión amenaza con estallar.',
    highlights: [
      'La paradoja de las manchas solares: por qué se ven negras si son más calientes que la lava',
      'Cómo Galileo cambió la historia al observar su rotación diferencial',
      'Espectrometría: la firma química del cosmos'
    ],
    depthKm: 'Espesor de 500 km',
    temperature: '5.500 °C (3.800 °C en manchas)'
  },
  {
    number: 6,
    title: 'Cromosfera, Corona y el Gran Enigma Térmico',
    subtitle: 'La paradoja de una atmósfera más caliente que su superficie',
    description: '¿Por qué la atmósfera exterior del Sol arde a más de 1.000.000 °C cuando su superficie está a solo 5.500 °C? Desciframos el mayor enigma solar junto a ondas de Alfvén y reconexión magnética.',
    highlights: [
      'El misterio del calentamiento coronal resuelto con datos de Parker Solar Probe',
      'Bucles coronales y espículas que eyectan plasma a velocidades supersónicas',
      'Los eclipses totales: la única ventana humana para ver la corona a simple vista'
    ],
    depthKm: '2.000 a millones de km en el espacio',
    temperature: '1.000.000 °C a 3.000.000 °C'
  },
  {
    number: 7,
    title: 'Furia Espacial: Tormentas, CME y el Evento Carrington',
    subtitle: 'Cuando el Sol estornuda y la civilización tiembla',
    description: 'Eyecciones de Masa Coronal capaces de apagar satélites, colapsar redes eléctricas y pintar auroras en el ecuador. Lo que ocurrió en 1859 y la vulnerabilidad de nuestra sociedad tecnológica moderna.',
    highlights: [
      'El Evento Carrington de 1859 y el riesgo de una supertormenta en el siglo XXI',
      'Cómo se protegen los astronautas y la Estación Espacial Internacional',
      'Meteorología espacial: prediciendo el impacto del viento solar'
    ],
    depthKm: '150 millones de km (Órbita Terrestre)',
    temperature: 'Viento solar a 400 - 800 km/s'
  },
  {
    number: 8,
    title: 'El Ocaso Solar y el Legado Biológico',
    subtitle: 'Somos polvo de estrellas: el futuro cósmico de la vida',
    description: 'En 5.000 millones de años, el Sol se hinchará como gigante roja antes de dejar una solitaria enana blanca. Una reflexión poética y bioquímica sobre cómo cada átomo de hierro y calcio en tus venas proviene de este ciclo estelar.',
    highlights: [
      'La muerte de una estrella de masa media: nebulosa planetaria y enana blanca',
      'La cronología de la habitabilidad terrestre',
      'La perspectiva bioquímica de Alberto Martin White: de la fusión estelar al ATP celular'
    ],
    depthKm: 'El Cosmos Infinito',
    temperature: 'El destino térmico'
  }
];

export const SOLAR_FACTS: SolarFact[] = [
  {
    id: 'fact-1',
    title: 'La odisea de un fotón',
    statistic: '100.000 años',
    explanation: 'La luz que entra por tu ventana tardó solo 8 minutos y 20 segundos en viajar del Sol a la Tierra. Pero le tomó más de 100.000 años salir del núcleo solar debido a trillones de colisiones.',
    curiosity: '¡La luz que sientes hoy en tu piel comenzó a fabricarse cuando los primeros neandertales poblaban Europa!',
    iconName: 'Sun'
  },
  {
    id: 'fact-2',
    title: 'Consumo colosal de combustible',
    statistic: '600 millones Tn/seg',
    explanation: 'Cada segundo, el Sol fusiona unas 600 millones de toneladas de hidrógeno en 596 millones de toneladas de helio. Los 4 millones restantes se transforman directamente en energía pura según E=mc².',
    curiosity: 'Equivale a detonar 1.800 millones de bombas atómicas de hidrógeno cada segundo ininterrumpidamente.',
    iconName: 'Flame'
  },
  {
    id: 'fact-3',
    title: 'Masa cósmica aplastante',
    statistic: '99,86%',
    explanation: 'El Sol contiene el 99,86% de toda la masa del Sistema Solar. Todos los planetas, lunas, asteroides y cometas juntos representan apenas un insignificante 0,14%.',
    curiosity: 'Dentro del volumen del Sol cabrían aproximadamente 1.300.000 planetas Tierra apilados.',
    iconName: 'Globe'
  },
  {
    id: 'fact-4',
    title: 'La gran paradoja coronal',
    statistic: '1.000.000 °C+',
    explanation: 'La superficie solar está a 5.500 °C, pero su atmósfera exterior (la corona) supera el millón de grados. Es como si te alejaras de una fogata y el aire se volviera 200 veces más caliente.',
    curiosity: 'El libro desglosa las fascinantes ondas magnetohidrodinámicas que resuelven esta aparente contradicción.',
    iconName: 'Zap'
  },
  {
    id: 'fact-5',
    title: 'El escudo que nos mantiene vivos',
    statistic: 'La Heliosfera',
    explanation: 'El viento solar crea una gigantesca burbuja magnética que se extiende más allá de Plutón, frenando el 90% de los rayos cósmicos letales provenientes del espacio interestelar profundo.',
    curiosity: 'Sin esta respiración solar constante, la atmósfera terrestre y la biología compleja no habrían podido subsistir.',
    iconName: 'Shield'
  },
  {
    id: 'fact-6',
    title: 'Cicatrices magnéticas móviles',
    statistic: '11 Años',
    explanation: 'Cada 11 años, el campo magnético del Sol se enreda tanto por su rotación irregular que sus polos norte y sur se invierten por completo, desencadenando auroras y tormentas solares.',
    curiosity: 'Actualmente nos encontramos en pleno Máximo Solar del Ciclo 25, con una actividad sin precedentes.',
    iconName: 'Activity'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dra. Elena Vasconcelos',
    role: 'Astrofísica y Divulgadora Científica',
    location: 'São Paulo, Brasil',
    rating: 5,
    highlight: 'El libro de divulgación solar más didáctico y riguroso que he leído.',
    comment: 'Alberto Martin White logra algo excepcional: une la precisión de la bioquímica y la termodinámica con una prosa cautivadora. Visualizar el viaje del fotón desde el núcleo me conmovió profundamente. Imprescindible para docentes y apasionados del espacio.'
  },
  {
    id: 't-2',
    name: 'Carlos Mendez R.',
    role: 'Ingeniero de Telecomunicaciones y Aficionado a la Astronomía',
    location: 'Buenos Aires, Argentina',
    rating: 5,
    highlight: 'La sección de tormentas solares y el Evento Carrington vale 10 veces el precio.',
    comment: 'Trabajo en redes eléctricas y siempre quise entender el impacto real de las eyecciones coronales sin perderme en fórmulas impenetrables. Anatomía Solar es claro, visual y aterradoramente fascinante. Compré por Hotmart y lo descargué en segundos.'
  },
  {
    id: 't-3',
    name: 'Prof. Marcos Aurelio Silveira',
    role: 'Educador de Ciencias Naturales',
    location: 'Rio de Janeiro, Brasil',
    rating: 5,
    highlight: 'Mis alumnos quedaron fascinados con los diagramas y conceptos.',
    comment: 'Uso los conceptos del libro para mis clases de física y biología. La forma en que Alberto conecta la fotosíntesis con el túnel cuántico en el núcleo solar es simplemente magistral. Vale cada centavo invertido.'
  },
  {
    id: 't-4',
    name: 'Valeria Dupont',
    role: 'Lector entusiasta de ciencia y cosmología',
    location: 'Santiago, Chile',
    rating: 5,
    highlight: 'Es como ver un documental de Carl Sagan pero en tus manos.',
    comment: 'Tenía miedo de que fuera demasiado técnico, pero se lee como una novela de aventuras cósmicas. No puedes soltarlo. Llegué por un reel de Instagram y ha sido la mejor inversión de lectura del año.'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'compra',
    question: '¿Cómo y cuándo recibiré el libro tras realizar el pago?',
    answer: 'La entrega es 100% inmediata y automática. Al confirmar tu pago en la plataforma segura de Hotmart, recibirás un correo electrónico oficial con tu enlace directo de descarga y acceso permanente. Podrás comenzar a leer en menos de 2 minutos.'
  },
  {
    category: 'compra',
    question: '¿Es seguro comprar a través de Hotmart?',
    answer: 'Totalmente seguro. Hotmart es el mayor procesador de productos digitales de Iberoamérica, con más de 10 años de trayectoria y cifrado bancario SSL de 256 bits. Tus datos financieros nunca se almacenan en servidores externos ni son visibles para terceros.'
  },
  {
    category: 'garantia',
    question: '¿Qué garantía tengo si el libro no cumple mis expectativas?',
    answer: 'Cuentas con 7 días completos de garantía incondicional respaldada por Hotmart. Si sientes que el libro no superó tus expectativas, puedes solicitar el 100% del reembolso con un solo clic dentro de tu panel de usuario, sin preguntas ni trámites molestos.'
  },
  {
    category: 'contenido',
    question: '¿En qué formatos está disponible y en qué dispositivos puedo leerlo?',
    answer: 'Recibirás el libro en formato digital de alta resolución: PDF enriquecido con diagramas a todo color (ideal para tablets, iPad, computadoras y lectores e-ink) y ePub adaptable para Kindle o smartphones. También puedes leerlo cómodamente en la app oficial de Hotmart sin gastar datos.'
  },
  {
    category: 'contenido',
    question: '¿Necesito conocimientos previos de astrofísica o matemáticas avanzadas?',
    answer: '¡En absoluto! El Bioq. Dr. Alberto Martin White escribió Anatomía Solar con un lenguaje fluido, envolvente y visual, diseñado tanto para mentes curiosas sin formación científica como para estudiantes y profesionales que buscan profundizar con rigor.'
  },
  {
    category: 'compra',
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Hotmart acepta múltiples formas de pago adaptadas a tu país: tarjetas de crédito (con opción de pagar en cuotas), tarjetas de débito, Pix (en Brasil), PayPal, y métodos en efectivo o transferencia bancaria según tu ubicación.'
  }
];

export const BOOK_SPECS = {
  title: 'ANATOMÍA SOLAR',
  subtitle: 'Un viaje al corazón ardiente de nuestra estrella',
  author: 'Bioq. Dr. Alberto Martin White',
  entity: 'Futura Biotech',
  pages: '312 páginas ilustradas',
  language: 'Español (con términos astronómicos universales)',
  format: 'Ebook Digital Multidispositivo (PDF Retina + ePub Kindle Ready)',
  bonuses: [
    {
      title: 'Bonus 1: Guía de Observación Solar Segura',
      value: 'R$ 65,00',
      description: 'Aprende a rastrear manchas solares y tránsitos con prismáticos y telescopios sin arriesgar tu vista jamás.'
    },
    {
      title: 'Bonus 2: Infografía Gigante de la Anatomía Solar en Ultra HD',
      value: 'R$ 49,00',
      description: 'Póster digital en 8K de corte transversal con todas las capas y temperaturas, listo para imprimir o fondo de pantalla.'
    },
    {
      title: 'Bonus 3: Glosario de Climatología Espacial & Tormentas Solares',
      value: 'R$ 38,00',
      description: 'Los términos clave que debes dominar para entender las alertas solares de la NASA y la NOAA en tiempo real.'
    }
  ]
};

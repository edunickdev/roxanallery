import type { Project } from "@/types";

// ─── Mock Data ────────────────────────────────────────────────────────────────
// This file contains all mock data. When the API is ready, replace the service
// layer (src/services/) to fetch from the backend instead.

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "identidad-florencia",
    title: "Florencia Boutique",
    category: "Identidad Visual",
    year: 2024,
    client: "Florencia Boutique",
    services: ["Branding", "Diseño de Logo", "Manual de Marca", "Papelería"],
    description:
      "Creación de identidad visual completa para una boutique de moda femenina de lujo. El concepto gira en torno a la elegancia atemporal y la feminidad contemporánea, usando formas fluidas y una paleta en crema y dorado envejecido.",
    coverImage:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    coverAlt: "Identidad visual Florencia Boutique",
    images: [
      {
        id: "1a",
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
        alt: "Logo Florencia",
        width: 1200,
        height: 800,
      },
      {
        id: "1b",
        url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80",
        alt: "Papelería Florencia",
        width: 1200,
        height: 800,
      },
      {
        id: "1c",
        url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
        alt: "Manual de marca",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Branding", "Luxury", "Fashion", "2024"],
    featured: true,
    siteUrl: "https://florencia.com",
  },
  {
    id: "2",
    slug: "editorial-memoria",
    title: "Memoria Colectiva",
    category: "Editorial",
    year: 2024,
    client: "Editorial Sur",
    services: ["Dirección de Arte", "Diseño Editorial", "Tipografía"],
    description:
      "Diseño editorial para una colección de ensayos sobre memoria histórica latinoamericana. El libro utiliza una estructura visual que mezcla fotografía de archivo intervenida con tipografía bold y espacio negativo para evocar la tensión entre el recuerdo y el olvido.",
    coverImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    coverAlt: "Libro Memoria Colectiva",
    images: [
      {
        id: "2a",
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
        alt: "Portada libro",
        width: 1200,
        height: 800,
      },
      {
        id: "2b",
        url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80",
        alt: "Interior páginas",
        width: 1200,
        height: 800,
      },
      {
        id: "2c",
        url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&q=80",
        alt: "Detalle tipografía",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Editorial", "Libros", "Tipografía", "2024"],
    featured: true,
  },
  {
    id: "3",
    slug: "motion-origen",
    title: "Origen — Brand Film",
    category: "Motion",
    year: 2023,
    client: "Origen Foods",
    services: ["Motion Design", "Animación", "Dirección de Arte"],
    description:
      "Película de marca para una empresa de alimentos orgánicos. Combinando animación 2D con secuencias de video real, el film narra el viaje del producto desde la tierra hasta la mesa, con una estética visual cálida y orgánica.",
    coverImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    coverAlt: "Still del brand film Origen",
    images: [
      {
        id: "3a",
        url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
        alt: "Still film 1",
        width: 1200,
        height: 800,
      },
      {
        id: "3b",
        url: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=1200&q=80",
        alt: "Still film 2",
        width: 1200,
        height: 800,
      },
      {
        id: "3c",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        alt: "Still film 3",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Motion", "Animación", "Branding", "2023"],
    featured: false,
  },
  {
    id: "4",
    slug: "fotografia-silencios",
    title: "Silencios Urbanos",
    category: "Fotografía",
    year: 2024,
    client: "Galería Abstracta CDMX",
    services: ["Fotografía", "Edición", "Dirección CreativaMedia"],
    description:
      "Serie fotográfica que explora los espacios vacíos y la arquitectura efímera de la ciudad. Cada imagen captura el silencio entre el ruido urbano: pasillos desiertos al amanecer, sombras geométricas, reflejos en charcos.",
    coverImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    coverAlt: "Fotografía Silencios Urbanos",
    images: [
      {
        id: "4a",
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
        alt: "Silencio 1",
        width: 1200,
        height: 800,
      },
      {
        id: "4b",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        alt: "Silencio 2",
        width: 1200,
        height: 800,
      },
      {
        id: "4c",
        url: "https://images.unsplash.com/photo-1514565131-fce0801e6785?w=1200&q=80",
        alt: "Silencio 3",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Fotografía", "Fine Art", "Urbano", "2024"],
    featured: true,
  },
  {
    id: "5",
    slug: "web-aurora-studio",
    title: "Aurora Studio",
    category: "Web",
    year: 2023,
    client: "Aurora Creative Studio",
    services: ["Diseño Web", "UI/UX", "Prototipado", "Design System"],
    description:
      "Diseño completo para una agencia creativa internacional. El sitio cuenta con un sistema de diseño modular, micro-interacciones elaboradas y una experiencia de navegación inmersiva que refleja el nivel de trabajo de la agencia.",
    coverImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    coverAlt: "Website Aurora Studio",
    images: [
      {
        id: "5a",
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
        alt: "Homepage Aurora",
        width: 1200,
        height: 800,
      },
      {
        id: "5b",
        url: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=1200&q=80",
        alt: "Design System",
        width: 1200,
        height: 800,
      },
      {
        id: "5c",
        url: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80",
        alt: "Mobile view",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["UI/UX", "Web Design", "Design System", "2023"],
    featured: false,
    siteUrl: "https://aurora-studio.com",
  },
  {
    id: "6",
    slug: "identidad-nocturne",
    title: "Nocturne Bar",
    category: "Identidad Visual",
    year: 2023,
    client: "Nocturne Bar & Lounge",
    services: ["Branding", "Señalética", "Packaging", "Social Media Kit"],
    description:
      "Identidad visual para un bar de cócteles de autor de alto nivel. La estética evoca el jazz de los años 40 reinterpretado para el público contemporáneo: negro profundo, dorado bruñido, ilustraciones art déco con toque surreal.",
    coverImage:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    coverAlt: "Identidad Nocturne Bar",
    images: [
      {
        id: "6a",
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80",
        alt: "Logo Nocturne",
        width: 1200,
        height: 800,
      },
      {
        id: "6b",
        url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80",
        alt: "Packaging Nocturne",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Branding", "Nightlife", "Art Déco", "2023"],
    featured: false,
  },
  {
    id: "7",
    slug: "editorial-waves",
    title: "Waves Magazine Issue 12",
    category: "Editorial",
    year: 2024,
    client: "Waves Studio",
    services: ["Diseño Editorial", "Fotografía de Moda", "Retoque"],
    description:
      'Dirección de arte para la edición aniversario de la revista independiente Waves. El tema central "Umbral" explora la transición entre estados con imágenes de doble exposición y composición geométrica en la maquetación.',
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
    coverAlt: "Waves Magazine Issue 12",
    images: [
      {
        id: "7a",
        url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80",
        alt: "Cover Waves",
        width: 1200,
        height: 800,
      },
      {
        id: "7b",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
        alt: "Feature spread",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Editorial", "Magazine", "Fashion", "2024"],
    featured: false,
  },
  {
    id: "8",
    slug: "fotografia-retratos",
    title: "Retratos del Alma",
    category: "Fotografía",
    year: 2023,
    client: "Autorretrato",
    services: ["Fotografía de Retrato", "Post-producción", "Exhibición"],
    description:
      "Proyecto personal de retratos que busca capturar la vulnerabilidad y la fuerza en el mismo instante. Utilizando luz natural y mínima intervención digital, la serie busca la honestidad y la conexión humana a través del lente.",
    coverImage:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    coverAlt: "Retratos del Alma",
    images: [
      {
        id: "8a",
        url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
        alt: "Retrato 1",
        width: 1200,
        height: 800,
      },
      {
        id: "8b",
        url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=1200&q=80",
        alt: "Retrato 2",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Fotografía", "Retratos", "Fine Art", "2023"],
    featured: true,
  },
  {
    id: "9",
    slug: "motion-verbo",
    title: "Verbo — Animación Tipográfica",
    category: "Motion",
    year: 2024,
    client: "Festival Iberoamericano de Diseño",
    services: ["Motion Graphics", "Tipografía Cinética", "Sound Design"],
    description:
      "Pieza de motion design seleccionada para el Festival Iberoamericano de Diseño. Explora el peso y el ritmo de las palabras en movimiento, donde cada letra obedece a las leyes del mundo físico pero escapa de ellas en el momento del significado.",
    coverImage:
      "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800&q=80",
    coverAlt: "Still animación Verbo",
    images: [
      {
        id: "9a",
        url: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1200&q=80",
        alt: "Verbo still 1",
        width: 1200,
        height: 800,
      },
      {
        id: "9b",
        url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&q=80",
        alt: "Verbo still 2",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Motion", "Tipografía", "Experimental", "2024"],
    featured: false,
  },
  {
    id: "10",
    slug: "web-botanica-lab",
    title: "Botánica Lab",
    category: "Web",
    year: 2024,
    client: "Botánica Lab",
    services: ["UI Design", "UX Research", "Prototipado", "Handoff"],
    description:
      "Diseño UX/UI para tienda en línea de cosméticos botánicos. El reto fue equilibrar la calidez orgánica de la marca con una experiencia de compra fluida y de alta conversión. El resultado es un diseño que se siente como una visita a un jardín privado.",
    coverImage:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    coverAlt: "Website Botánica Lab",
    images: [
      {
        id: "10a",
        url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
        alt: "Botánica home",
        width: 1200,
        height: 800,
      },
      {
        id: "10b",
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
        alt: "Product page",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["UI/UX", "E-commerce", "Web Design", "2024"],
    featured: false,
    siteUrl: "https://botanicalab.co",
  },
  {
    id: "11",
    slug: "identidad-minerva",
    title: "Minerva Architecture",
    category: "Identidad Visual",
    year: 2024,
    client: "Minerva Architecture Studio",
    services: ["Rebranding", "Diseño Editorial", "Señalética", "Digital Kit"],
    description:
      "Rebranding estratégico para un estudio de arquitectura con 20 años de historia. El nuevo sistema visual mantiene la autoridad y confianza ganadas, pero les da un lenguaje contemporáneo capaz de competir en el mercado global.",
    coverImage:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80",
    coverAlt: "Identidad Minerva Architecture",
    images: [
      {
        id: "11a",
        url: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1200&q=80",
        alt: "Minerva logo",
        width: 1200,
        height: 800,
      },
      {
        id: "11b",
        url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1200&q=80",
        alt: "Minerva brand",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Branding", "Arquitectura", "Rebranding", "2024"],
    featured: false,
  },
  {
    id: "12",
    slug: "editorial-cartografias",
    title: "Cartografías Invisibles",
    category: "Editorial",
    year: 2023,
    client: "Museo de Arte Contemporáneo",
    services: ["Catálogo de Exhibición", "Diseño Editorial", "Ilustración"],
    description:
      "Catálogo editorial para una exposición de arte contemporáneo que mapea las geografías invisibles del deseo, el miedo y la memoria. Cada sección tiene un sistema visual propio que evoluciona al interior del libro.",
    coverImage:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80",
    coverAlt: "Catálogo Cartografías Invisibles",
    images: [
      {
        id: "12a",
        url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80",
        alt: "Catálogo portada",
        width: 1200,
        height: 800,
      },
      {
        id: "12b",
        url: "https://images.unsplash.com/photo-1595617795501-9661aafda72a?w=1200&q=80",
        alt: "Interior spread",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["Editorial", "Arte", "Catálogo", "2023"],
    featured: true,
  },
];

export const CATEGORIES: ReadonlyArray<import("@/types").Category> = [
  "Todos",
  "Identidad Visual",
  "Motion",
  "Editorial",
  "Fotografía",
  "Web",
];

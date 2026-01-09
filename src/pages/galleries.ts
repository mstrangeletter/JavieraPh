// ===========================================================
// Tipos de datos
// ===========================================================
export type GalleryItem = { url: string; alt?: string };
export type Gallery = {
  slug: string; // URL: /portafolio/:slug
  title: string;
  description?: string;
  coverUrl?: string;
  items: GalleryItem[];
};

// Helper para generar arrays de imágenes consecutivas
const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

// ===========================================================
// Galerías (según tus carpetas en /public/img)
// ===========================================================
export const galleries: Gallery[] = [
  {
    slug: "recien-nacidos",
    title: "Recién Nacidos",
    description: "Sesiones tiernas de los primeros días de vida.",
    coverUrl: "/img/bebesrn/Rnacido1.jpg",
    items: range(1, 4).map((n) => ({
      url: `/img/bebesrn/Rnacido${n}.jpg`,
      alt: `Recién nacido ${n}`,
    })),
  },
  {
    slug: "retrato",
    title: "Retrato Individual",
    description: "Retratos personales con dirección de arte y luz natural.",
    coverUrl: "/img/retrato/individuales1.jpg",
    items: range(1, 3).map((n) => ({
      url: `/img/retrato/individuales${n}.jpg`,
      alt: `Retrato ${n}`,
    })),
  },
  {
    slug: "interiores",
    title: "Interiores",
    description: "Casonas y espacios con historia y carácter.",
    coverUrl: "/img/interiores/Interiores1.jpg",
    items: range(1, 4).map((n) => ({
      url: `/img/interiores/Interiores${n}.jpg`,
      alt: `Interiores ${n}`,
    })),
  },
  {
    slug: "matrimonios",
    title: "Matrimonios",
    description: "Historias de amor que perduran en el tiempo.",
    coverUrl: "/img/matrimonios/Matris1.jpg",
    items: range(1, 5).map((n) => ({
      url: `/img/matrimonios/Matris${n}.jpg`,
      alt: `Matrimonio ${n}`,
    })),
  },
  {
    slug: "Pre-bodas",
    title: "Pre-Bodas",
    description: "El inicio de una nueva historia juntos.",
    coverUrl: "/img/preboda/Preboda1.jpg",
    items: range(1, 4).map((n) => ({
      url: `/img/preboda/Preboda${n}.jpg`,
      alt: `Preboda ${n}`,
    })),
  },
  {
    slug: "maternidad",
    title: "Maternidad",
    description: "Esperando una nueva vida, con ternura y emoción.",
    coverUrl: "/img/pregnancy/pregnancy1.jpg",
    items: range(1, 2).map((n) => ({
      url: `/img/pregnancy/pregnancy${n}.jpg`,
      alt: `Maternidad ${n}`,
    })),
  },
  {
    slug: "sanpedro",
    title: "San Pedro de Atacama",
    description: "El desierto más árido del mundo en su luz más viva.",
    coverUrl: "/public/img/sanpedro/sanpedro11.jpg",
    items: range(1, 11).map((n) => ({
      url: `/public/img/sanpedro/sanpedro${n}.jpg`,
      alt: `San Pedro ${n}`,
    })),
  },
  {
    slug: "vinedo",
    title: "Viñedo",
    description: "Luz, textura y color entre las parras.",
    coverUrl: "/public/img/viñedo/Vinedo6.jpg",
    items: range(1, 6).map((n) => ({
      url: `/img/viñedo/Vinedo${n}.jpg`,
      alt: `Viñedo ${n}`,
    })),
  },
];

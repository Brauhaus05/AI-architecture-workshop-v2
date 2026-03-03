export interface CurriculumModule {
  num: string;
  title: string;
  desc: string;
  tag1: string;
  tag2: string;
}

export interface GalleryImage {
  src: string;
  aspect: string;
  id: string;
  engine: string;
  meta1: string;
  filter: string;
  alt: string;
}

export interface FAQEntry {
  q: string;
  a: string;
}

export const curriculumModules: CurriculumModule[] = [
  {
    num: "01",
    title: "Ideación y Conceptos",
    desc: "Desarrolla narrativas de proyecto y mood boards con IA. Aprende a traducir ideas espaciales en conceptos visuales estructurados.",
    tag1: "Creative_Narrative",
    tag2: "v2.0",
  },
  {
    num: "02",
    title: "De Planos a Fotorrealismo",
    desc: "Transforma planos básicos y bocetos en renders impresionantes de alta fidelidad con absoluta precisión arquitectónica.",
    tag1: "Rendering_Pipeline",
    tag2: "v3.1",
  },
  {
    num: "03",
    title: "Arquitectura de Prompts",
    desc: "Crea prompts precisos para controlar iluminación, materiales y estilos arquitectónicos usando lógica espacial avanzada de LLMs.",
    tag1: "Linguistic_Control",
    tag2: "v1.5",
  },
  {
    num: "04",
    title: "Movimiento y Progreso",
    desc: "Genera animaciones complejas para mostrar fases de construcción o recorridos espaciales usando modelos de generación de video.",
    tag1: "Temporal_Viz",
    tag2: "v2.2",
  },
  {
    num: "05",
    title: "Sonido y Narración",
    desc: "Añade narración profesional y audio atmosférico a tus presentaciones de proyecto para una experiencia cinematográfica completa.",
    tag1: "Audio_Design",
    tag2: "v1.1",
  },
  {
    num: "06",
    title: "Edición y Ensamblaje",
    desc: "Logra un acabado profesional para tu video promocional final. Integra todos los recursos en una presentación ganadora.",
    tag1: "Post_Production",
    tag2: "v4.0",
  },
];

export const galleryFilters = [
  "ALL_GENS",
  "MIDJOURNEY",
  "KLING_3",
  "VEO_3",
  "FLUX.1",
  "RUNWAY",
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-05.jpg",
    aspect: "aspect-[4/5]",
    id: "#8472",
    engine: "FLUX.1",
    meta1: "ITER: 150",
    filter: "FLUX.1",
    alt: "Exterior de villa moderna de lujo con iluminación dramática y área de piscina paisajizada",
  },
  {
    src: "/images/gallery-06.jpg",
    aspect: "aspect-[3/4]",
    id: "#2293",
    engine: "SAMP_METHOD: EULER_A",
    meta1: "CFG: 7.5",
    filter: "MIDJOURNEY",
    alt: "Interior arquitectónico en tonos cálidos con madera natural e iluminación ambiental",
  },
  {
    src: "/images/gallery-07.jpg",
    aspect: "aspect-[1/1]",
    id: "#9104",
    engine: "LATENT_SPACE: V4_HQ",
    meta1: "SEED: 88291",
    filter: "VEO_3",
    alt: "Estructura brutalista de concreto con geometría angular en un bosque brumoso",
  },
  {
    src: "/images/gallery-04.jpg",
    aspect: "aspect-[16/9]",
    id: "#4052",
    engine: "GEN_ENGINE: FLUX.PRO",
    meta1: "POS: TOP_VIEW",
    filter: "FLUX.1",
    alt: "Vista aérea de un campus contemporáneo con techos verdes y patios",
  },
];

export const faqs: FAQEntry[] = [
  {
    q: "¿Necesito experiencia previa?",
    a: "Para nada. Este curso está diseñado tanto para principiantes como para profesionales experimentados de la industria. Si eres nuevo en la producción audiovisual, aprenderás los fundamentos paso a paso. Si ya usas herramientas como AutoCAD o SketchUp, descubrirás cómo acelerar drásticamente tu flujo de trabajo.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No se requiere programación. Todas las herramientas que usaremos están diseñadas para creativos. Aprenderás a través de prompts conversacionales, interfaces intuitivas y flujos de trabajo establecidos.",
  },
  {
    q: "¿Cómo se imparte el curso?",
    a: "El curso es 100% en línea, impartido a través de 4 sesiones en vivo (cada una de 2 horas). También tendrás acceso a las sesiones grabadas, recursos descargables y una comunidad privada en Slack de profesionales AEC.",
  },
  {
    q: "¿Qué equipo necesito?",
    a: "Un portátil estándar con una conexión a internet confiable es suficiente, ya que la mayoría de estas herramientas de IA son basadas en la nube. Te guiaremos a través de plataformas como Midjourney, Veo 3 y Nano Banana Pro, explicando los niveles de precios para que se ajusten a tu presupuesto.",
  },
];

export const techStackItems = [
  "CHATGPT",
  "GEMINI",
  "MIDJOURNEY",
  "FLUX",
  "VEO 3",
  "KLING 3",
  "SEEEDANCE",
  "NANO BANANA PRO",
];

// Gallery preview images (used in the GalleryPreview section)
export const galleryPreviewImages = {
  master: {
    src: "/images/gallery-01.jpg",
    alt: "Villa moderna de lujo con piscina infinita frente a un paisaje montañoso al atardecer",
  },
  detail: {
    src: "/images/gallery-02.jpg",
    alt: "Fachada residencial contemporánea con iluminación interior cálida y jardín paisajizado",
  },
  alt: {
    src: "/images/gallery-03.jpg",
    alt: "Edificio minimalista de concreto con patrones geométricos y entorno natural",
  },
};

export const instructorImage = {
  src: "/images/instructor-portrait.jpg",
  alt: "Braulio Brauhaus, instructor del taller con más de 20 años de experiencia en diseño y publicidad",
};

export const heroImage = {
  src: "/images/hero-wireframe.jpg",
  alt: "Wireframe técnico de una estructura arquitectónica",
};

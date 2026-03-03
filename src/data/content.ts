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
  { num: "01", title: "Ideation & Concepts", desc: "Develop project narratives and mood boards using AI. Learn to translate spatial ideas into structured visual concepts.", tag1: "Creative_Narrative", tag2: "v2.0" },
  { num: "02", title: "Floor Plans to Photorealism", desc: "Transform basic layouts and sketches into stunning, high-fidelity renders with absolute architectural precision.", tag1: "Rendering_Pipeline", tag2: "v3.1" },
  { num: "03", title: "Prompting Architecture", desc: "Craft precise prompts to control lighting, materials, and architectural styles using advanced LLM spatial logic.", tag1: "Linguistic_Control", tag2: "v1.5" },
  { num: "04", title: "Motion & Progress", desc: "Generate complex animations to showcase construction phases or spatial walkthroughs using video generation models.", tag1: "Temporal_Viz", tag2: "v2.2" },
  { num: "05", title: "Sound & Voice Over", desc: "Add professional narration and atmospheric audio to your project pitches for a complete cinematic experience.", tag1: "Audio_Design", tag2: "v1.1" },
  { num: "06", title: "Editing & Assembly", desc: "Achieve a professional polish for your final promotional video. Integrate all assets into a pitch-winning showcase.", tag1: "Post_Production", tag2: "v4.0" },
];

export const galleryFilters = ["ALL_GENS", "MIDJOURNEY", "KLING_3", "VEO_3", "FLUX.1", "RUNWAY"];

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-05.jpg", aspect: "aspect-[4/5]", id: "#8472", engine: "FLUX.1", meta1: "ITER: 150", filter: "FLUX.1", alt: "Luxury modern villa exterior with dramatic lighting and landscaped pool area" },
  { src: "/images/gallery-02.jpg", aspect: "aspect-[3/4]", id: "#2293", engine: "SAMP_METHOD: EULER_A", meta1: "CFG: 7.5", filter: "MIDJOURNEY", alt: "Warm-toned architectural interior with natural wood and ambient lighting" },
  { src: "/images/gallery-03.jpg", aspect: "aspect-[1/1]", id: "#9104", engine: "LATENT_SPACE: V4_HQ", meta1: "SEED: 88291", filter: "VEO_3", alt: "Brutalist concrete structure with angular geometry set against a misty forest" },
  { src: "/images/gallery-04.jpg", aspect: "aspect-[16/9]", id: "#4052", engine: "GEN_ENGINE: FLUX.PRO", meta1: "POS: TOP_VIEW", filter: "FLUX.1", alt: "Aerial view of a contemporary campus with green rooftops and courtyards" },
];

export const faqs: FAQEntry[] = [
  { q: "Do I need previous experience?", a: "Not at all. This course is designed for both beginners and seasoned industry professionals. If you're new to audiovisual production, you'll learn the fundamentals step by step. If you already use tools like AutoCAD or SketchUp, you'll discover how to drastically accelerate your workflow." },
  { q: "Do I need to know how to code?", a: "No coding required. All the tools we'll use are designed for creatives. You'll learn through conversational prompts, user-friendly interfaces, and established workflows." },
  { q: "How is the course delivered?", a: "The course is 100% online, delivered through 4 live sessions (each 2 hours long). You'll also get access to recorded sessions, downloadable resources, and a private Slack community of AEC professionals." },
  { q: "What equipment do I need?", a: "A standard laptop with a reliable internet connection is enough, as most of these AI tools are cloud-based. We'll guide you through platforms like Midjourney, Veo 3, and Nano Banana Pro, explaining pricing tiers so you can fit your budget." },
];

export const techStackItems = ["CHATGPT", "GEMINI", "MIDJOURNEY", "FLUX", "VEO 3", "KLING 3", "SEEEDANCE", "NANO BANANA PRO"];

// Gallery preview images (used in the GalleryPreview section)
export const galleryPreviewImages = {
  master: { src: "/images/gallery-01.jpg", alt: "Modern luxury villa with infinity pool overlooking a mountainous landscape at sunset" },
  detail: { src: "/images/gallery-02.jpg", alt: "Contemporary residential facade with warm interior lighting and landscaped garden" },
  alt: { src: "/images/gallery-03.jpg", alt: "Minimalist concrete building with geometric patterns and natural surroundings" },
};

export const instructorImage = {
  src: "/images/instructor-portrait.jpg",
  alt: "Braulio Brauhaus, workshop instructor with 20+ years of design and advertising experience",
};

export const heroImage = {
  src: "/images/hero-wireframe.jpg",
  alt: "Technical wireframe of an architectural structure",
};

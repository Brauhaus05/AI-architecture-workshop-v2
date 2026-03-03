import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const APPLY_URL = "#apply"; // TODO: Replace with actual application form URL
const WAITLIST_URL = "#waitlist"; // TODO: Replace with actual waitlist form URL
const CORPORATE_EMAIL = "mailto:corporate@brauhaus.studio?subject=Corporate%20Training%20Inquiry";

const Crosshairs = () => (
  <>
    <div className="crosshair ch-tl"></div>
    <div className="crosshair ch-tr"></div>
    <div className="crosshair ch-bl"></div>
    <div className="crosshair ch-br"></div>
  </>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-grid-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-lg font-bold">architecture</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">A.I. ARCHITECT</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-muted tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="text-primary">●</span> NEXT_COHORT: MAY_2026</span>
            <span className="flex items-center gap-2"><span className="text-primary">●</span> LIMITED_SPOTS</span>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-tighter uppercase">
            <a className="hover:text-primary transition-colors" href="#curriculum">CURRICULUM</a>
            <a className="hover:text-primary transition-colors" href="#stack">TECH_STACK</a>
            <a className="hover:text-primary transition-colors" href="#instructor">INSTRUCTOR</a>
          </div>
          <a href={APPLY_URL} className="hidden sm:block bg-primary text-white font-mono text-xs font-bold px-6 py-2 hover:brightness-110 transition-all cursor-pointer">
            APPLY NOW_
          </a>
          {/* Mobile hamburger button */}
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-grid-line bg-background-dark/95 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#curriculum" onClick={() => setMenuOpen(false)}>CURRICULUM</a>
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#stack" onClick={() => setMenuOpen(false)}>TECH_STACK</a>
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#instructor" onClick={() => setMenuOpen(false)}>INSTRUCTOR</a>
              <div className="border-t border-grid-line pt-4 flex flex-col gap-3">
                <a href={APPLY_URL} className="bg-primary text-white font-mono text-xs font-bold px-6 py-3 text-center hover:brightness-110 transition-all uppercase">APPLY NOW_</a>
                <a href={WAITLIST_URL} className="border border-grid-line text-white font-mono text-xs font-bold px-6 py-3 text-center hover:bg-surface transition-colors uppercase">JOIN WAITLIST</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative border-b border-grid-line overflow-hidden" aria-label="Hero">
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div className="z-10">
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span>
          CREATIVE PARTNERSHIP // V2.0
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8"
        >
          REVOLUTIONIZE<br />SPATIAL<br />STORYTELLING
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed"
        >
          Welcome to a hands-on program where you'll learn to use AI as a creative partner to revolutionize how you present spaces, structures, and concepts. Designed specifically for architects, interior designers, and construction managers harnessing generative artificial intelligence.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <a href={APPLY_URL} className="bg-primary text-white font-mono px-10 py-4 text-sm font-bold hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(255,107,0,0.3)] uppercase cursor-pointer inline-block">
            Apply Now
          </a>
          <a href={WAITLIST_URL} className="border border-grid-line bg-surface/50 font-mono px-10 py-4 text-sm font-bold hover:bg-surface transition-colors uppercase cursor-pointer inline-block">
            Join Waitlist
          </a>
        </motion.div>
      </div>
      <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 border border-primary/40 animate-[spin_20s_linear_infinite] relative">
            <div className="absolute inset-4 border border-primary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-primary/10 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -top-1 -left-1 text-primary material-symbols-outlined text-xs">add</div>
            <div className="absolute -top-1 -right-1 text-primary material-symbols-outlined text-xs">add</div>
            <div className="absolute -bottom-1 -left-1 text-primary material-symbols-outlined text-xs">add</div>
            <div className="absolute -bottom-1 -right-1 text-primary material-symbols-outlined text-xs">add</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              alt="Technical wireframe of an architectural structure" 
              className="w-4/5 h-4/5 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLoxbMrmvkpNnr_KyT1kxnJ7aJKkOwdJ4o4EqpuELkyZo7M_HK6xrL-uG4cBf2RAWdkYvDQAVdKMCxYVSQ65XWABLKJV4rmYxmsK7Hzg9fK4bEezpmoVRraVwRSkwTELjngDeuRRtZkQlz1w8L_dOKrAB01vGIlyuTQrsN1jA1IVAGe3ML68IOnOlmGTYZ5QmOKQbjtNosCxOUBiX0X2GYMgYTMinQcNtPvR3GiJTuktal1CNYvWz8cYxJhYG6qplO_4DjVapiw59Z" 
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 opacity-30 font-mono text-[10px] uppercase hidden md:flex">
      <span className="flex-1 h-px bg-muted"></span>
      <span>SEC_01 // SYSTEM_INIT</span>
      <span className="flex-1 h-px bg-muted"></span>
      <span>DATA: SPATIAL_GEN_AI</span>
      <span className="flex-1 h-px bg-muted"></span>
    </div>
  </section>
);

const PhaseShift = () => (
  <section className="border-b border-grid-line bg-surface/30" aria-label="Industry Evolution">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-[1px] bg-grid-line">
      <div className="bg-background-dark p-12 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-muted/20"></div>
        <div className="font-mono text-muted text-xs mb-8 uppercase tracking-widest">PHASE_01 // THE_EVOLUTION</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-white mb-6 uppercase italic tracking-tighter"
        >
          The Industry Shift
        </motion.h2>
        <p className="text-slate-400 leading-relaxed border-l border-muted pl-6 italic">
          Architectural visualization is evolving. As AI becomes integrated into the design and presentation process, creating photorealistic project showcases with AI will soon be the industry standard.
        </p>
        <div className="mt-12 flex items-center gap-4 text-muted font-mono text-[10px]">
          <span className="material-symbols-outlined text-base">history</span>
          <span>TRADITIONAL_BOTTLENECKS</span>
        </div>
      </div>
      <div className="bg-background-dark p-12 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="font-mono text-primary text-xs mb-8 uppercase tracking-widest">PHASE_02 // THE_AI_ADVANTAGE</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl font-bold text-white mb-6 uppercase tracking-tighter"
        >
          Reduced Lead Times
        </motion.h2>
        <p className="text-slate-200 leading-relaxed border-l border-primary pl-6">
          This evolution opens the door for any professional to drastically reduce rendering times and elevate their pitches. What sets you apart is spatial storytelling and your capacity to connect with clients.
        </p>
        <div className="mt-12 flex items-center gap-4 text-primary font-mono text-[10px]">
          <span className="material-symbols-outlined text-base">bolt</span>
          <span>ACCELERATED_WORKFLOW</span>
        </div>
      </div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section className="py-24 max-w-7xl mx-auto px-6 border-b border-grid-line" aria-label="Gallery Preview">
    <div className="flex flex-col gap-8">
      <div className="relative group">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
        >
          <Crosshairs />
          <div className="relative overflow-hidden aspect-video">
            <img alt="Modern luxury villa with infinity pool overlooking a mountainous landscape at sunset" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1bWFH7MozgGxboSlVJ5pfUluqBR8B3myhablsVVnZI2CrSfg7k0TUip60uuSgRJfWdwkWBdePlIF5xAwS2QFzbJOxotEBnU7momPSB8BGISnEw0pcl8MwK0rWlCUagl7xCsWBgpzsx34y-lhlD-NRbzlqcb5kPwvyJI-oax9-ZMNsqXn2q1UGlY6_EjwVbMzr1gYWIY1ZI95TJANVMWEal5_uICFFDA2_iDu6u0B83V2TgQftJ3CaBENQzWzxVb-vFjH5gAMoj6-t" />
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Master_View // 01</div>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
          >
            <Crosshairs />
            <div className="relative overflow-hidden aspect-video">
              <img alt="Contemporary residential facade with warm interior lighting and landscaped garden" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUgQIFFI05tqnwYPme-GGNsEQdfShyy5-VD5unfu8VdpT4eGHzHERwNNNNu9snAMtydAmglMgeFlxm9iOrYl_MfomuNjgnUUzD-OR_oq7L0g8ji1vTBLL084t10N4SNeGQIlaYr4EbepvW8P8rPMED1KGkE6jeu43PDnzlAx9wctaqqrf24ICGwMKW1gZfAy4-AZcWSI8_CDmX_quJacp0Kjm9O4ndu2hGw2KuNS1x6Yi6mwStI1aVxFhXShBSR4aBy_k3p3sHYD8J" />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Detail_Perspective // 02</div>
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
          >
            <Crosshairs />
            <div className="relative overflow-hidden aspect-video">
              <img alt="Minimalist concrete building with geometric patterns and natural surroundings" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzIQI4Q_yXLAWXHt3mORXtFmSStzsq82MWCWFVTWD3dC_GwjPQm3WVQB-5nNzG4h4rPLVK8LQNCAg-OCmmy7gqRPIjXDj9hUG4QOk1oVikNnCIm_ikv-hd6jox97J2tAi0XnBtSGsA7RT07l9QBMSD3-dTVysIkbCTUF8gKc5rFtjxvRkL2J202C0WuFc6Wii4EQGgN92QYixs2j28QA6i09U3mXG36yEd7hA6-FeitFLrU5FrtpAJmVca4K06cc9riKW53R8C7sGK" />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Alt_Environment // 03</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Curriculum = () => {
  const modules = [
    { num: "01", title: "Ideation & Concepts", desc: "Develop project narratives and mood boards using AI. Learn to translate spatial ideas into structured visual concepts.", tag1: "Creative_Narrative", tag2: "v2.0" },
    { num: "02", title: "Floor Plans to Photorealism", desc: "Transform basic layouts and sketches into stunning, high-fidelity renders with absolute architectural precision.", tag1: "Rendering_Pipeline", tag2: "v3.1" },
    { num: "03", title: "Prompting Architecture", desc: "Craft precise prompts to control lighting, materials, and architectural styles using advanced LLM spatial logic.", tag1: "Linguistic_Control", tag2: "v1.5" },
    { num: "04", title: "Motion & Progress", desc: "Generate complex animations to showcase construction phases or spatial walkthroughs using video generation models.", tag1: "Temporal_Viz", tag2: "v2.2" },
    { num: "05", title: "Sound & Voice Over", desc: "Add professional narration and atmospheric audio to your project pitches for a complete cinematic experience.", tag1: "Audio_Design", tag2: "v1.1" },
    { num: "06", title: "Editing & Assembly", desc: "Achieve a professional polish for your final promotional video. Integrate all assets into a pitch-winning showcase.", tag1: "Post_Production", tag2: "v4.0" },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="curriculum" aria-label="Curriculum Modules">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">COURSE_TOPICS</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-bold text-white uppercase tracking-tighter mb-4"
          >
            01_CURRICULUM_MODULES
          </motion.h2>
          <p className="text-muted text-sm leading-relaxed">
            The program focuses on Artificial Intelligence, Tools, and the Creative Workflow across 4 two-hour sessions plus individual coaching.
          </p>
        </div>
        <div className="font-mono text-muted text-[10px] uppercase text-left md:text-right leading-tight">
          TOTAL_HOURS: 08 + 1 COACHING<br />
          PROJECT: 2MIN_PROMO_VIDEO<br />
          ACCESS: PRIVATE_COMMUNITY
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <motion.div 
            key={mod.num} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-surface p-8 blueprint-border hover:border-primary transition-all duration-300"
          >
            <Crosshairs />
            <div className="font-mono text-primary text-2xl font-bold mb-8">{mod.num}</div>
            <h3 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-tight">{mod.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-8">{mod.desc}</p>
            <div className="pt-6 border-t border-grid-line font-mono text-[10px] text-muted uppercase flex justify-between">
              <span>{mod.tag1}</span>
              <span>{mod.tag2}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ArchiveGallery = () => {
  const filters = ["ALL_GENS", "MIDJOURNEY", "KLING_3", "VEO_3", "FLUX.1", "RUNWAY"];
  const [activeFilter, setActiveFilter] = useState("ALL_GENS");

  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1bWFH7MozgGxboSlVJ5pfUluqBR8B3myhablsVVnZI2CrSfg7k0TUip60uuSgRJfWdwkWBdePlIF5xAwS2QFzbJOxotEBnU7momPSB8BGISnEw0pcl8MwK0rWlCUagl7xCsWBgpzsx34y-lhlD-NRbzlqcb5kPwvyJI-oax9-ZMNsqXn2q1UGlY6_EjwVbMzr1gYWIY1ZI95TJANVMWEal5_uICFFDA2_iDu6u0B83V2TgQftJ3CaBENQzWzxVb-vFjH5gAMoj6-t", aspect: "aspect-[4/5]", id: "#8472", engine: "FLUX.1", meta1: "ITER: 150", filter: "FLUX.1", alt: "Luxury modern villa exterior with dramatic lighting and landscaped pool area" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUgQIFFI05tqnwYPme-GGNsEQdfShyy5-VD5unfu8VdpT4eGHzHERwNNNNu9snAMtydAmglMgeFlxm9iOrYl_MfomuNjgnUUzD-OR_oq7L0g8ji1vTBLL084t10N4SNeGQIlaYr4EbepvW8P8rPMED1KGkE6jeu43PDnzlAx9wctaqqrf24ICGwMKW1gZfAy4-AZcWSI8_CDmX_quJacp0Kjm9O4ndu2hGw2KuNS1x6Yi6mwStI1aVxFhXShBSR4aBy_k3p3sHYD8J", aspect: "aspect-[3/4]", id: "#2293", engine: "SAMP_METHOD: EULER_A", meta1: "CFG: 7.5", filter: "MIDJOURNEY", alt: "Warm-toned architectural interior with natural wood and ambient lighting" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzIQI4Q_yXLAWXHt3mORXtFmSStzsq82MWCWFVTWD3dC_GwjPQm3WVQB-5nNzG4h4rPLVK8LQNCAg-OCmmy7gqRPIjXDj9hUG4QOk1oVikNnCIm_ikv-hd6jox97J2tAi0XnBtSGsA7RT07l9QBMSD3-dTVysIkbCTUF8gKc5rFtjxvRkL2J202C0WuFc6Wii4EQGgN92QYixs2j28QA6i09U3mXG36yEd7hA6-FeitFLrU5FrtpAJmVca4K06cc9riKW53R8C7sGK", aspect: "aspect-[1/1]", id: "#9104", engine: "LATENT_SPACE: V4_HQ", meta1: "SEED: 88291", filter: "VEO_3", alt: "Brutalist concrete structure with angular geometry set against a misty forest" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfm7VDrenyyFCOgYLXm9zi5ffOU4UNZMriaagqxamotoiOiqFtV6MxNWHkO9SOfGCEwUejRXSS1-Z6O1y5KJ5qNzwBr-xRyNIhjCJ8kTCQU5E24BEDg3j1LFA-KsmLI8ME5q1rm6ytfP5Lva8yaKXgArb4eNt6bILO-t8CDrh7c3ms8ohW5ntdFEdd0Yw2dQcnWLxrp9bwuSr6PyhZNEEMsBWtbomcVoc3Azr7XMB31OpWpptfIYZZx3BUtJrTd3PgGXbt-5HAsFoD", aspect: "aspect-[16/9]", id: "#4052", engine: "GEN_ENGINE: FLUX.PRO", meta1: "POS: TOP_VIEW", filter: "FLUX.1", alt: "Aerial view of a contemporary campus with green rooftops and courtyards" },
  ];

  const filtered = activeFilter === "ALL_GENS"
    ? images
    : images.filter(img => img.filter === activeFilter);

  return (
    <section className="py-24 border-t border-grid-line bg-background-dark/50" id="archive_gallery" aria-label="AI-Generated Archive Gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-wrap items-center gap-0 border border-grid-line bg-surface/50">
          <div className="flex items-center px-4 py-3 border-r border-grid-line bg-primary/5">
            <span className="material-symbols-outlined text-primary text-sm mr-2">filter_list</span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Filter_Params:</span>
          </div>
          <div className="flex flex-wrap flex-1" role="tablist" aria-label="Filter gallery by AI engine">
            {filters.map(f => (
              <button 
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-3 font-mono text-[10px] tracking-widest uppercase border-r border-grid-line transition-all cursor-pointer ${activeFilter === f ? 'bg-primary text-white font-bold hover:bg-primary/80' : 'text-muted hover:text-primary hover:bg-surface'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="hidden xl:flex items-center px-4 py-3 border-l border-grid-line ml-auto">
            <span className="font-mono text-[9px] text-muted uppercase">Archive_Index: [001-096]</span>
          </div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" role="tabpanel">
          <AnimatePresence mode="wait">
            {filtered.map((img, i) => (
              <motion.div 
                key={img.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group break-inside-avoid"
              >
                <div className="blueprint-border bg-surface p-1 transition-all duration-300 group-hover:border-primary">
                  <Crosshairs />
                  <div className={`relative overflow-hidden ${img.aspect}`}>
                    <img alt={img.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" loading="lazy" src={img.src} />
                  </div>
                  <div className="mt-3 px-2 pb-2 flex flex-col gap-1">
                    <p className="font-mono text-[10px] text-primary/80 tracking-tighter uppercase">PROMPT_ID: {img.id}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-mono text-[10px] text-muted uppercase">{img.engine}</p>
                      <p className="font-mono text-[10px] text-muted/60">{img.meta1}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 font-mono text-muted text-sm uppercase tracking-widest">
              NO_RESULTS // FILTER: {activeFilter}
            </div>
          )}
        </div>
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex gap-4 p-1 bg-surface border border-grid-line flex-wrap justify-center">
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line opacity-50 cursor-not-allowed" aria-disabled="true">
              <span className="material-symbols-outlined text-primary">download</span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">BATCH_EXPORT</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line opacity-50 cursor-not-allowed" aria-disabled="true">
              <span className="material-symbols-outlined text-primary">share</span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">GRID_SHARE</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line opacity-50 cursor-not-allowed" aria-disabled="true">
              <span className="material-symbols-outlined text-primary">fullscreen</span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">EXPAND_ALL</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] opacity-50 cursor-not-allowed" aria-disabled="true">
              <span className="material-symbols-outlined text-primary">info</span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">GLOBAL_META</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const items = ["CHATGPT", "GEMINI", "MIDJOURNEY", "FLUX", "VEO 3", "KLING 3", "SEEEDANCE", "NANO BANANA PRO"];
  return (
    <section className="py-12 border-y border-grid-line overflow-hidden bg-surface/20" id="stack" aria-label="Technology Stack">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-24 px-12">
          {items.map((item) => (
            <span key={item} className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12">
          {items.map((item) => (
            <span key={`dup-${item}`} className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Instructor = () => (
  <section className="py-24 max-w-7xl mx-auto px-6" id="instructor" aria-label="Instructor Bio">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute -top-4 -left-4 font-mono text-[10px] text-primary bg-background-dark px-2 z-10">SOURCE_ARCHIVE: BRAUHAUS_VANCOUVER</div>
        <div className="blueprint-border p-4">
          <div className="relative aspect-square overflow-hidden grayscale contrast-125 brightness-90 transition-all group-hover:grayscale-0 group-hover:contrast-100">
            <img alt="Braulio Brauhaus, workshop instructor with 20+ years of design and advertising experience" className="w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Aq47LEUt8oafwshmraVg8XoqIXszP424UifX0t8ITh1UhZ75VIwLUlltrNK3vm66kdAXG12QhlmaqCgqZjxR8euBUwYOu5-AeImXKBt9RZXDtpEzN0_g3LW5sjFbiNZgEcJps7iG41CTIQMEiNK_3cmxNSd_uian8AuWIyjFT-s4DBHo9GNfrxrwYFeU6JE0HUryfikckhhg8JVWql09EcvBBQEmcRsxhVnJJsqvmwT2AhzlHODmKxcWhbMgc41lBLVBGc-KXzg6" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-primary text-white font-mono text-xs px-4 py-2 uppercase font-bold tracking-widest">
          20+ YRS_EXP
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">MEET_YOUR_INSTRUCTOR</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">BRAULIO &ldquo;BRAUHAUS&rdquo;</h2>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Braulio has spent 20+ years at the intersection of design, advertising, and audiovisual production. Founder of Doodzoo Studio in Vancouver, he specializes in AI-powered concept development and audiovisual projects.
        </p>
        <ul className="space-y-4 font-mono text-sm text-muted">
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">school</span> FORMER DIRECTOR AT MIAMI AD SCHOOL MEXICO CITY</li>
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">workspaces</span> FOUNDER OF DOODZOO STUDIO VANCOUVER</li>
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">public</span> EDUCATOR ACROSS LATAM, CANADA & U.S.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string, answer: string, id: string }> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnId = `faq-btn-${id}`;
  const panelId = `faq-panel-${id}`;
  return (
    <div className="py-6 border-b border-grid-line last:border-b-0">
      <button 
        id={btnId}
        className="flex items-center justify-between w-full text-left focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-display text-lg font-bold text-white uppercase hover:text-primary transition-colors pr-4">{question}</span>
        <span className="material-symbols-outlined text-primary shrink-0">{isOpen ? 'remove' : 'add'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 text-slate-400 text-sm leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Do I need previous experience?", a: "Not at all. This course is designed for both beginners and seasoned industry professionals. If you're new to audiovisual production, you'll learn the fundamentals step by step. If you already use tools like AutoCAD or SketchUp, you'll discover how to drastically accelerate your workflow." },
    { q: "Do I need to know how to code?", a: "No coding required. All the tools we'll use are designed for creatives. You'll learn through conversational prompts, user-friendly interfaces, and established workflows." },
    { q: "How is the course delivered?", a: "The course is 100% online, delivered through 4 live sessions (each 2 hours long). You'll also get access to recorded sessions, downloadable resources, and a private Slack community of AEC professionals." },
    { q: "What equipment do I need?", a: "A standard laptop with a reliable internet connection is enough, as most of these AI tools are cloud-based. We'll guide you through platforms like Midjourney, Veo 3, and Nano Banana Pro, explaining pricing tiers so you can fit your budget." },
  ];

  return (
    <section className="py-24 border-t border-grid-line bg-surface/10" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">FREQUENTLY_ASKED_QUESTIONS</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-bold text-white tracking-tighter uppercase"
          >
            Support_Protocols
          </motion.h2>
        </div>
        <div className="border-t border-grid-line">
          {faqs.map((faq, i) => <FAQItem key={faq.q} question={faq.q} answer={faq.a} id={String(i)} />)}
        </div>
      </div>
    </section>
  );
};

const CorporateTraining = () => (
  <section className="py-24 border-t border-grid-line bg-primary/5" aria-label="Corporate Training">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      <div className="blueprint-border p-8 bg-surface">
        <div className="font-mono text-primary text-xs mb-4 uppercase tracking-widest">CORPORATE_TRAINING</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-white mb-6 uppercase tracking-tighter"
        >
          Build an Internal Creative Laboratory
        </motion.h2>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Upskill your entire studio with customized training tailored to your firm's DNA. Use your actual floor plans and project briefs as the foundation for practical exercises.
        </p>
        <a href={CORPORATE_EMAIL} className="w-full border border-primary text-primary font-mono py-4 text-xs font-bold hover:bg-primary hover:text-white transition-all uppercase cursor-pointer block text-center">
          Request Corporate Proposal
        </a>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-tight italic">Why Train as a Team?</h3>
        <ul className="space-y-4 font-mono text-xs text-muted">
          <li className="flex gap-4"><span>[01]</span> <span>Tailor-made exercises using your firm's proprietary floor plans.</span></li>
          <li className="flex gap-4"><span>[02]</span> <span>Unified visual identity matching your distinct architectural style.</span></li>
          <li className="flex gap-4"><span>[03]</span> <span>Confidential and focused discussion on internal bottlenecks.</span></li>
        </ul>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background-dark border-t border-grid-line py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="inline-block border border-primary p-2 mb-12">
        <div className="bg-primary text-white font-mono px-8 py-2 uppercase font-bold text-xs">
          ENROLLMENT OPENS: MAY 2026
        </div>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter uppercase leading-[0.9]"
      >
        READY TO CREATE THE FUTURE<br />OF VISUALIZATION?
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href={APPLY_URL} className="bg-primary text-white font-mono px-12 py-5 text-lg font-bold hover:scale-105 transition-transform uppercase cursor-pointer inline-block">
          Apply Now
        </a>
        <a href={WAITLIST_URL} className="border border-grid-line text-white font-mono px-12 py-5 text-lg font-bold hover:bg-surface transition-colors uppercase cursor-pointer inline-block">
          Join Waitlist
        </a>
      </div>
      <div className="mt-24 pt-12 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-muted uppercase">
        <div>&copy; 2026 A.I. ARCHITECT // BRAUHAUS WORKSHOPS</div>
        <div className="flex items-center gap-12">
          <a className="hover:text-primary" href="#">PRIVACY_POLICY</a>
          <a className="hover:text-primary" href="#">TERMS_OF_SERVICE</a>
          <a className="hover:text-primary" href="#">CORPORATE_TRAINING</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-success">●</span>
          SYSTEM_STATUS: NOMINAL
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <PhaseShift />
        <GalleryPreview />
        <Curriculum />
        <ArchiveGallery />
        <TechStack />
        <Instructor />
        <FAQ />
        <CorporateTraining />
      </main>
      <Footer />
    </div>
  );
}

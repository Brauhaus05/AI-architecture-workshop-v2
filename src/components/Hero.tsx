import { motion } from 'motion/react';
import { APPLY_URL, WAITLIST_URL } from '../data/constants';
import { heroImage } from '../data/content';

const Hero = () => (
  <section className="relative border-b border-grid-line overflow-hidden" aria-label="Héroe">
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div className="z-10">
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span>
          ALIANZA CREATIVA // V2.0
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8"
        >
          REVOLUCIONA<br />LA NARRATIVA<br />ESPACIAL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed"
        >
          Bienvenido a un programa práctico donde aprenderás a usar la IA como aliada creativa para revolucionar la forma en que presentas espacios, estructuras y conceptos. Diseñado específicamente para arquitectos, diseñadores de interiores y gerentes de construcción que aprovechan la inteligencia artificial generativa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <a href={APPLY_URL} className="bg-primary text-white font-mono px-10 py-4 text-sm font-bold hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(255,107,0,0.3)] uppercase cursor-pointer inline-block">
            Inscríbete
          </a>
          <a href={WAITLIST_URL} className="border border-grid-line bg-surface/50 font-mono px-10 py-4 text-sm font-bold hover:bg-surface transition-colors uppercase cursor-pointer inline-block">
            Lista de Espera
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
              alt={heroImage.alt}
              className="w-4/5 h-4/5 object-contain"
              src={heroImage.src}
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

export default Hero;

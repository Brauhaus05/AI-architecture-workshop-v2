import { motion } from 'motion/react';
import { instructorImage } from '../data/content';

const Instructor = () => (
  <section className="py-24 max-w-7xl mx-auto px-6" id="instructor" aria-label="Biografía del Instructor">
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
            <img alt={instructorImage.alt} className="w-full h-full object-cover" loading="lazy" src={instructorImage.src} />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-primary text-white font-mono text-xs px-4 py-2 uppercase font-bold tracking-widest">
          20+ AÑOS_EXP
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">CONOCE_A_TU_INSTRUCTOR</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">BRAULIO &ldquo;BRAUHAUS&rdquo;</h2>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Braulio ha dedicado más de 20 años a la intersección del diseño, la publicidad y la producción audiovisual. Fundador de Doodzoo Studio en Vancouver, se especializa en desarrollo de conceptos potenciado por IA y proyectos audiovisuales.
        </p>
        <ul className="space-y-4 font-mono text-sm text-muted">
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">school</span> EX DIRECTOR EN MIAMI AD SCHOOL CIUDAD DE MÉXICO</li>
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">workspaces</span> FUNDADOR DE DOODZOO STUDIO VANCOUVER</li>
          <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">public</span> EDUCADOR EN LATAM, CANADÁ Y EE.UU.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Instructor;

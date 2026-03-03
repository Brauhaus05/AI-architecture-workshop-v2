import { motion } from 'motion/react';
import Crosshairs from './ui/Crosshairs';
import { curriculumModules } from '../data/content';

const Curriculum = () => (
  <section className="py-24 max-w-7xl mx-auto px-6" id="curriculum" aria-label="Módulos del Programa">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
      <div className="max-w-2xl">
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">TEMAS_DEL_CURSO</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-bold text-white uppercase tracking-tighter mb-4"
        >
          01_MÓDULOS_DEL_PROGRAMA
        </motion.h2>
        <p className="text-muted text-sm leading-relaxed">
          El programa se enfoca en Inteligencia Artificial, Herramientas y el Flujo de Trabajo Creativo a través de 4 sesiones de dos horas más coaching individual.
        </p>
      </div>
      <div className="font-mono text-muted text-[10px] uppercase text-left md:text-right leading-tight">
        TOTAL_HORAS: 08 + 1 COACHING<br />
        PROYECTO: VIDEO_PROMO_2MIN<br />
        ACCESO: COMUNIDAD_PRIVADA
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {curriculumModules.map((mod, i) => (
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

export default Curriculum;

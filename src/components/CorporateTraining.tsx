import { motion } from 'motion/react';
import { CORPORATE_EMAIL } from '../data/constants';

const CorporateTraining = () => (
  <section className="py-24 border-t border-grid-line bg-primary/5" aria-label="Capacitación Corporativa">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      <div className="blueprint-border p-8 bg-surface">
        <div className="font-mono text-primary text-xs mb-4 uppercase tracking-widest">CAPACITACIÓN_CORPORATIVA</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-white mb-6 uppercase tracking-tighter"
        >
          Construye un Laboratorio Creativo Interno
        </motion.h2>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Capacita a todo tu estudio con entrenamiento personalizado adaptado al ADN de tu firma. Usa tus propios planos y briefings de proyecto como base para ejercicios prácticos.
        </p>
        <a href={CORPORATE_EMAIL} className="w-full border border-primary text-primary font-mono py-4 text-xs font-bold hover:bg-primary hover:text-white transition-all uppercase cursor-pointer block text-center">
          Solicitar Propuesta Corporativa
        </a>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-tight italic">¿Por Qué Capacitarse en Equipo?</h3>
        <ul className="space-y-4 font-mono text-xs text-muted">
          <li className="flex gap-4"><span>[01]</span> <span>Ejercicios a la medida usando los planos propietarios de tu firma.</span></li>
          <li className="flex gap-4"><span>[02]</span> <span>Identidad visual unificada que refleje tu estilo arquitectónico.</span></li>
          <li className="flex gap-4"><span>[03]</span> <span>Discusión confidencial y enfocada sobre cuellos de botella internos.</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default CorporateTraining;

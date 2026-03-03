import { motion } from 'motion/react';
import { APPLY_URL, WAITLIST_URL } from '../data/constants';

const Footer = () => (
  <footer className="bg-background-dark border-t border-grid-line py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="inline-block border border-primary p-2 mb-12">
        <div className="bg-primary text-white font-mono px-8 py-2 uppercase font-bold text-xs">
          INSCRIPCIONES ABIERTAS: MAYO 2026
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter uppercase leading-[0.9]"
      >
        ¿LISTO PARA CREAR EL FUTURO<br />DE LA VISUALIZACIÓN?
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href={APPLY_URL} className="bg-primary text-white font-mono px-12 py-5 text-lg font-bold hover:scale-105 transition-transform uppercase cursor-pointer inline-block">
          Inscríbete
        </a>
        <a href={WAITLIST_URL} className="border border-grid-line text-white font-mono px-12 py-5 text-lg font-bold hover:bg-surface transition-colors uppercase cursor-pointer inline-block">
          Lista de Espera
        </a>
      </div>
      <div className="mt-24 pt-12 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-muted uppercase">
        <div>&copy; 2026 A.I. ARCHITECT // BRAUHAUS WORKSHOPS</div>
        <div className="flex items-center gap-12">
          <a className="hover:text-primary" href="#">POLÍTICA_DE_PRIVACIDAD</a>
          <a className="hover:text-primary" href="#">TÉRMINOS_DE_SERVICIO</a>
          <a className="hover:text-primary" href="#">CAPACITACIÓN_CORPORATIVA</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-success">●</span>
          SYSTEM_STATUS: NOMINAL
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

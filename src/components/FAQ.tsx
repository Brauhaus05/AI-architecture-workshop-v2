import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data/content';

const FAQItem: React.FC<{ question: string; answer: string; id: string }> = ({ question, answer, id }) => {
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

const FAQ = () => (
  <section className="py-24 border-t border-grid-line bg-surface/10" aria-label="Preguntas Frecuentes">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase">PREGUNTAS_FRECUENTES</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-bold text-white tracking-tighter uppercase"
        >
          Protocolos_de_Soporte
        </motion.h2>
      </div>
      <div className="border-t border-grid-line">
        {faqs.map((faq, i) => <FAQItem key={faq.q} question={faq.q} answer={faq.a} id={String(i)} />)}
      </div>
    </div>
  </section>
);

export default FAQ;

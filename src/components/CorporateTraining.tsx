import { motion } from 'motion/react';
import { CORPORATE_EMAIL } from '../data/constants';

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

export default CorporateTraining;

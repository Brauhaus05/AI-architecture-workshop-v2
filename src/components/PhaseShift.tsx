import { motion } from 'motion/react';

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

export default PhaseShift;

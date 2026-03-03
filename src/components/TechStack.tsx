import { techStackItems } from '../data/content';

const TechStack = () => (
  <section className="py-12 border-y border-grid-line overflow-hidden bg-surface/20" id="stack" aria-label="Technology Stack">
    <div className="flex animate-marquee whitespace-nowrap">
      <div className="flex items-center gap-24 px-12">
        {techStackItems.map((item) => (
          <span key={item} className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default">{item}</span>
        ))}
      </div>
      <div className="flex items-center gap-24 px-12">
        {techStackItems.map((item) => (
          <span key={`dup-${item}`} className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default">{item}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;

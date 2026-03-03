import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Crosshairs from './ui/Crosshairs';
import { galleryFilters, galleryImages } from '../data/content';

const ArchiveGallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL_GENS");

  const filtered = activeFilter === "ALL_GENS"
    ? galleryImages
    : galleryImages.filter(img => img.filter === activeFilter);

  return (
    <section className="py-24 border-t border-grid-line bg-background-dark/50" id="archive_gallery" aria-label="AI-Generated Archive Gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-wrap items-center gap-0 border border-grid-line bg-surface/50">
          <div className="flex items-center px-4 py-3 border-r border-grid-line bg-primary/5">
            <span className="material-symbols-outlined text-primary text-sm mr-2">filter_list</span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Filter_Params:</span>
          </div>
          <div className="flex flex-wrap flex-1" role="tablist" aria-label="Filter gallery by AI engine">
            {galleryFilters.map(f => (
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

export default ArchiveGallery;

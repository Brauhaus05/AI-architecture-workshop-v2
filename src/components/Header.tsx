import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APPLY_URL, WAITLIST_URL } from '../data/constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-grid-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-lg font-bold">architecture</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">A.I. ARCHITECT</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-muted tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="text-primary">●</span> NEXT_COHORT: MAY_2026</span>
            <span className="flex items-center gap-2"><span className="text-primary">●</span> LIMITED_SPOTS</span>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-tighter uppercase">
            <a className="hover:text-primary transition-colors" href="#curriculum">CURRICULUM</a>
            <a className="hover:text-primary transition-colors" href="#stack">TECH_STACK</a>
            <a className="hover:text-primary transition-colors" href="#instructor">INSTRUCTOR</a>
          </div>
          <a href={APPLY_URL} className="hidden sm:block bg-primary text-white font-mono text-xs font-bold px-6 py-2 hover:brightness-110 transition-all cursor-pointer">
            APPLY NOW_
          </a>
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-grid-line bg-background-dark/95 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#curriculum" onClick={() => setMenuOpen(false)}>CURRICULUM</a>
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#stack" onClick={() => setMenuOpen(false)}>TECH_STACK</a>
              <a className="font-mono text-sm tracking-tighter uppercase hover:text-primary transition-colors py-2" href="#instructor" onClick={() => setMenuOpen(false)}>INSTRUCTOR</a>
              <div className="border-t border-grid-line pt-4 flex flex-col gap-3">
                <a href={APPLY_URL} className="bg-primary text-white font-mono text-xs font-bold px-6 py-3 text-center hover:brightness-110 transition-all uppercase">APPLY NOW_</a>
                <a href={WAITLIST_URL} className="border border-grid-line text-white font-mono text-xs font-bold px-6 py-3 text-center hover:bg-surface transition-colors uppercase">JOIN WAITLIST</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

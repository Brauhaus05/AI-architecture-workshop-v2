import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-primary text-white size-12 flex items-center justify-center shadow-lg hover:brightness-110 transition-all cursor-pointer"
          aria-label="Volver arriba"
        >
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

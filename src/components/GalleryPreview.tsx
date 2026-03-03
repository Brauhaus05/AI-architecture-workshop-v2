import { motion } from 'motion/react';
import Crosshairs from './ui/Crosshairs';
import { galleryPreviewImages } from '../data/content';

const GalleryPreview = () => (
  <section className="py-24 max-w-7xl mx-auto px-6 border-b border-grid-line" aria-label="Gallery Preview">
    <div className="flex flex-col gap-8">
      <div className="relative group">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
        >
          <Crosshairs />
          <div className="relative overflow-hidden aspect-video">
            <img alt={galleryPreviewImages.master.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src={galleryPreviewImages.master.src} />
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Master_View // 01</div>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
          >
            <Crosshairs />
            <div className="relative overflow-hidden aspect-video">
              <img alt={galleryPreviewImages.detail.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src={galleryPreviewImages.detail.src} />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Detail_Perspective // 02</div>
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blueprint-border p-1 bg-surface transition-all duration-300 group-hover:border-primary"
          >
            <Crosshairs />
            <div className="relative overflow-hidden aspect-video">
              <img alt={galleryPreviewImages.alt.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src={galleryPreviewImages.alt.src} />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 px-2 py-1 uppercase tracking-widest">Alt_Environment // 03</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryPreview;

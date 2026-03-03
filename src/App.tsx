import Header from './components/Header';
import Hero from './components/Hero';
import PhaseShift from './components/PhaseShift';
import GalleryPreview from './components/GalleryPreview';
import Curriculum from './components/Curriculum';
import ArchiveGallery from './components/ArchiveGallery';
import TechStack from './components/TechStack';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import CorporateTraining from './components/CorporateTraining';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <PhaseShift />
        <GalleryPreview />
        <Curriculum />
        <ArchiveGallery />
        <TechStack />
        <Instructor />
        <FAQ />
        <CorporateTraining />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

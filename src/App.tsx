import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import MobileStickyBar from './components/MobileStickyBar';
import BackToTop from './components/BackToTop';
import AdmissionPopupModal from './components/AdmissionPopupModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import { useGsapScroll } from './hooks/useGsapScroll';
import { LanguageProvider } from './context/LanguageContext';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Offers from './pages/Offers';
import BatchesAndFees from './pages/BatchesAndFees';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy'; 
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  // Initialize GSAP scroll-triggered animations across routes
  useGsapScroll();

  return (
    <div className="min-h-screen bg-white text-[#0B0B0B] flex flex-col justify-between selection:bg-[#C41E1E] selection:text-white">
      <ScrollProgressBar />
      <div>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/batches" element={<BatchesAndFees />} />
            <Route path="/admissions" element={<BatchesAndFees />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <WhatsAppFAB />
      <MobileStickyBar />
      <BackToTop />
      <AdmissionPopupModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </LanguageProvider>
  );
}

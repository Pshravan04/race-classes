import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import MobileStickyBar from './components/MobileStickyBar';
import BackToTop from './components/BackToTop';
import AdmissionPopupModal from './components/AdmissionPopupModal';
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

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FBF9F5] text-[#1C2430] flex flex-col justify-between selection:bg-[#C59B27] selection:text-[#071B3A]">
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
      </BrowserRouter>
    </LanguageProvider>
  );
}

import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import TrustStrip from '../components/TrustStrip'
import AboutSection from '../components/AboutSection'
import CourseCarousel from '../components/CourseCarousel'
import LearningProcess from '../components/LearningProcess'
import AdmissionsBanner from '../components/AdmissionsBanner'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <SEO
        title="Practical Computer & IT Training in Virar East"
        description="Learn practical computer skills at Race Reddys Advanced Computer Education, Virar East. Software development, Tally GST, Graphic Design, AI & Machine Learning, Office skills, and Cyber Security. Admissions open."
        canonical="/"
      />

      {/* 1. Large Photographic Hero with Dark Forest Overlay */}
      <HeroSection />

      {/* 2. Compact 4-Item Benefits Strip */}
      <TrustStrip />

      {/* 3. Editorial Two-Column About Section */}
      <AboutSection />

      {/* 4. Horizontal Image-Rich Course Carousel */}
      <CourseCarousel />

      {/* 5. Bento-Grid 4-Step Learning Journey */}
      <LearningProcess />

      {/* 6. Admissions 50% Special Offer Banner */}
      <AdmissionsBanner />

      {/* 7. Clean Accessible FAQ Accordion */}
      <FAQSection />

      {/* 8. Contact Information & Admission Enquiry Form */}
      <ContactSection />
    </>
  )
}

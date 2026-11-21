import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MapPin,
  Phone,
  Send,
  Award,
  Monitor,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/config';

interface BentoMediaItem {
  id: string;
  category: 'lab' | 'mentoring' | 'ladies' | 'certificate';
  title: string;
  tag: string;
  image: string;
  description: string;
  spanClass: string; // Tailwind bento grid span class
  isFeatured?: boolean;
}

const BENTO_ITEMS: BentoMediaItem[] = [
  // 01. Hero Bento Tile (Large 2x2)
  {
    id: 'bento-1',
    category: 'lab',
    title: 'Individual Workstations & Lab Overview',
    tag: '1 Student : 1 PC',
    image: '/images/real-lab-wide.jpg',
    description: 'Spacious air-conditioned lab with 20+ dedicated desktop computer terminals. Every student gets their own PC with zero machine sharing.',
    spanClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2',
    isFeatured: true,
  },
  // 02. Tall Vertical Bento Tile (1x2)
  {
    id: 'bento-2',
    category: 'mentoring',
    title: '1-on-1 Faculty Desk Coaching',
    tag: '1:1 Mentoring',
    image: '/images/real-instructor-mentoring.jpg',
    description: 'Instructors sit directly alongside students, resolving code bugs, Excel formulas, and Tally voucher questions step-by-step.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-2',
  },
  // 03. Square Bento Tile (1x1)
  {
    id: 'bento-3',
    category: 'ladies',
    title: 'Special Ladies Batch (12:30 PM)',
    tag: 'Ladies Batch',
    image: '/images/ladies-guidance.jpg',
    description: 'Dedicated afternoon timing slot providing a comfortable, patient learning environment for homemakers and female students.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 04. Square Bento Tile (1x1)
  {
    id: 'bento-4',
    category: 'certificate',
    title: 'ISO Accredited Certification Day',
    tag: 'Certification',
    image: '/images/certificate-success.jpg',
    description: 'Proud students receiving their ISO 9001:2015 accredited course completion certificates after final project assessments.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 05. Wide Horizontal Bento Tile (2x1)
  {
    id: 'bento-5',
    category: 'lab',
    title: 'TallyPrime & GST Accounting Practice',
    tag: 'Accounting Lab',
    image: '/images/tally-practice.jpg',
    description: 'Live GST invoicing, E-Way bills, bank reconciliations, and balance sheet preparation on dual-screen workstations.',
    spanClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
  },
  // 06. Square Bento Tile (1x1)
  {
    id: 'bento-6',
    category: 'lab',
    title: 'Web & Software Development Coding',
    tag: 'Full-Stack Lab',
    image: '/images/student-coding.jpg',
    description: 'Students building responsive React frontends, Node backends, and live MySQL databases on dedicated development setups.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 07. Square Bento Tile (1x1)
  {
    id: 'bento-7',
    category: 'lab',
    title: 'Business Analytics & Data Charts',
    tag: 'Advanced Excel',
    image: '/images/real-data-chart-session.jpg',
    description: 'Practical analysis of sales data, pivot tables, VLOOKUP/XLOOKUP, and interactive financial dashboard visualizations.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 08. Wide Horizontal Bento Tile (2x1)
  {
    id: 'bento-8',
    category: 'mentoring',
    title: 'Interactive Concept Lectures & Board Work',
    tag: 'Theory Clarity',
    image: '/images/real-teacher-lecture.jpg',
    description: 'Fundamental architecture and programming logic explained clearly on whiteboards before students execute them on lab PCs.',
    spanClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
  },
  // 09. Square Bento Tile (1x1)
  {
    id: 'bento-9',
    category: 'lab',
    title: 'Dedicated Study & Practice Aisles',
    tag: 'Quiet Ambience',
    image: '/images/real-lab-aisle.jpg',
    description: 'Distraction-free environment allowing learners to practice typing drills, programming assignments, and mock interview tests.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 10. Square Bento Tile (1x1)
  {
    id: 'bento-10',
    category: 'mentoring',
    title: 'Student Presentation & Project Reviews',
    tag: 'Peer Learning',
    image: '/images/real-students-presentation.jpg',
    description: 'Encouraging public speaking, resume walkthroughs, and technical assignment demonstrations among peer students.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
  // 11. Wide Horizontal Bento Tile (2x1)
  {
    id: 'bento-11',
    category: 'lab',
    title: 'Daily Hands-On Computer Sessions',
    tag: '100% Practical',
    image: '/images/hero-lab.jpg',
    description: 'Students of all age groups mastering mouse handling, Windows shortcuts, MS Office, and internet safety tools.',
    spanClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
  },
  // 12. Square Bento Tile (1x1)
  {
    id: 'bento-12',
    category: 'lab',
    title: 'Touch Typing & GCC-TBC Speed Lab',
    tag: 'Speed Typing',
    image: '/images/lab-students.jpg',
    description: 'Scientific touch-typing training for English and Marathi keyboard layouts for Maharashtra clerical and government exams.',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'lab', label: 'Computer Labs & 1:1 PCs' },
  { id: 'mentoring', label: '1:1 Mentorship' },
  { id: 'ladies', label: 'Ladies Special Batch' },
  { id: 'certificate', label: 'Certifications & Success' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<BentoMediaItem | null>(null);

  const filteredItems = BENTO_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // Modal navigation
  const currentIndex = activeItem
    ? filteredItems.findIndex((m) => m.id === activeItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, currentIndex, filteredItems]);

  return (
    <>
      <SEO
        title="Campus Gallery & Lab Photos | RACE Computer Education Virar East"
        description="Explore authentic photos of our computer lab, individual workstations, 1:1 faculty desk guidance, and ladies batches at Raut Arcade, opposite Virar East railway station."
        canonical="/gallery"
      />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 01 – EDITORIAL HERO
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Gallery Hero" className="bg-[#001752] text-white pt-10 sm:pt-14 pb-14 sm:pb-18 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C41E1E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 mb-8 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">Campus Gallery</span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-400">Raut Arcade 202, Opp. Virar East Railway Station</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-wider uppercase mb-4 text-[#DF8383]">
                <Sparkles size={13} />
                <span>Authentic Institute Photography · Zero Stock Photos</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-[1.15] mb-4">
                Inside Our Computer Labs at <span className="text-[#DF8383]">Raut Arcade 202</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Genuine glimpses of daily lab sessions, dedicated computer workstations, 1-on-1 faculty desk coaching, and student certification ceremonies directly opposite the Virar East railway subway.
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl px-4 py-3 border border-white/15 text-center">
                <strong className="block text-xl font-bold text-white font-heading">100%</strong>
                <span className="text-[11px] text-slate-300">Real Lab Photos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl px-4 py-3 border border-white/15 text-center">
                <strong className="block text-xl font-bold text-[#10b981] font-heading">1:1 PC</strong>
                <span className="text-[11px] text-slate-300">Dedicated Workstation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl px-4 py-3 border border-white/15 text-center">
                <strong className="block text-xl font-bold text-white font-heading">2 Min</strong>
                <span className="text-[11px] text-slate-300">From Station Subway</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 02 – BENTO GRID GALLERY (White Canvas)
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Bento Gallery" className="bg-white py-12 sm:py-18 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#001752] text-white shadow-xs'
                      : 'bg-[#F6F7F9] text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="font-bold text-[#001752]">{filteredItems.length}</span> authentic photos
            </div>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] sm:auto-rows-[240px] gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer ${item.spanClass}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
                aria-label={`View photo: ${item.title}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

                {/* Top Floating Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#001752] text-[10.5px] font-bold shadow-xs backdrop-blur-xs">
                    <ImageIcon size={11} className="text-[#C41E1E]" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Center / Top-Right Expand Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <span className="w-11 h-11 rounded-full bg-[#001752]/85 text-white flex items-center justify-center shadow-lg backdrop-blur-xs">
                    <Maximize2 size={16} />
                  </span>
                </div>

                {/* Featured Ribbon for Hero Tile */}
                {item.isFeatured && (
                  <div className="absolute top-3.5 right-3.5 hidden sm:block z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C41E1E] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      <Monitor size={10} />
                      <span>Dedicated Workstations</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Lab Amenities Strip */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F6F7F9] border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#001752] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                <Monitor size={22} className="text-[#C41E1E]" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#001752] block">High-Speed Terminals</strong>
                <span className="text-xs text-slate-500">Core i5/i7 PCs with SSDs &amp; licensed software</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#001752] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                <Heart size={22} className="text-[#C41E1E]" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#001752] block">Comfortable AC Environment</strong>
                <span className="text-xs text-slate-500">Quiet, ergonomic chairs &amp; generator power backup</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#001752] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                <MapPin size={22} className="text-[#C41E1E]" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#001752] block">Virar Subway 2-Min</strong>
                <span className="text-xs text-slate-500">Opposite Platform 1/2 exit on Station Road</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 03 – FEATURED STATION WALK-IN CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Walk-in CTA" className="bg-[#F6F7F9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001752] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#001752]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C41E1E]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7">
                <span className="text-[#DF8383] text-xs font-bold tracking-wider uppercase block mb-1">
                  EXPERIENCE OUR LAB IN PERSON
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight mb-3">
                  Visit Raut Arcade &amp; Take a Free Demo Class
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 max-w-xl">
                  Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Sit on a dedicated computer workstation, meet our instructors, and inspect our lab setup for yourself.
                </p>

                {/* Direct Helplines */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  <a
                    href="tel:8793314239"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#DF8383]" />
                    <span>Admissions: 8793314239</span>
                  </a>

                  <a
                    href="tel:8482881614"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#DF8383]" />
                    <span>Counseling: 8482881614</span>
                  </a>

                  <a
                    href="https://wa.me/919794323963"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-colors"
                  >
                    <Send size={13} className="text-[#25D366]" />
                    <span>WhatsApp: 9794323963</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      'Hello! I saw your lab photos on the gallery page. I would like to visit Raut Arcade 202 for a free demo session.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Book a Free Demo Pass →
                  </a>

                  <a
                    href={SITE_CONFIG.address.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Station Proximity Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 text-[#001752] border border-white/20 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C41E1E] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Prime Station Location</span>
                </div>
                <h3 className="text-lg font-bold text-[#001752] mb-2 leading-snug">
                  2 Minutes on Foot from Virar Railway Station
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Located on the 2nd Floor of Raut Arcade, directly facing the railway subway stairs on Station Road East. You can walk straight in after getting off the train without needing an auto-rickshaw.
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[#C41E1E]" />
                    <span>202, Raut Arcade, Station Road, Virar East</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={13} className="text-[#C41E1E]" />
                    <span>ISO 9001:2015 Accredited Institute</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          INTERACTIVE LIGHTBOX MODAL
          ══════════════════════════════════════════════════════════════════════ */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Image Container */}
          <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center">
            <div className="w-full max-h-[72vh] flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/15"
              />
            </div>

            {/* Modal Bottom Metadata & WhatsApp Action */}
            <div className="w-full mt-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm sm:text-base text-white">{activeItem.title}</span>
                  <span className="bg-[#C41E1E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {activeItem.tag}
                  </span>
                </div>
                <p className="text-slate-300 text-xs">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-400 font-mono text-xs">
                  {currentIndex + 1} of {filteredItems.length}
                </span>

                <a
                  href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello RACE! I am viewing '${activeItem.title}' in your campus gallery. I want to book a free demo at this lab.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send size={12} />
                  <span>Book Demo at this Lab</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

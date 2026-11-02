import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/images/real-lab-classroom.jpg',
    badge: 'Raut Arcade Lab 202 · Virar East',
    badgeColor: 'bg-[#F5BE4F] text-[#001752]',
    title: '100% Practical Machine Time for Every Learner',
    description: 'Every student learns directly on their own confirmed desktop workstation with uninterrupted power and high-speed internet. Zero screen sharing or theory-only lectures.',
    stats: [
      { label: 'Workstation Ratio', value: '1 Student : 1 PC' },
      { label: 'Lab Hours', value: '9:00 AM – 7:00 PM' },
      { label: 'Location', value: 'Opp. Station Subway' }
    ]
  },
  {
    id: 2,
    image: '/images/real-instructor-mentoring.jpg',
    badge: 'Desk-to-Desk 1-on-1 Mentorship',
    badgeColor: 'bg-[#C41E1E] text-white',
    title: 'Personalized Coaching at Your Individual PC',
    description: 'Experienced trainers sit directly beside you to resolve doubts, guide mouse navigation and keyboard placement, and walk through real practical exercises step by step.',
    stats: [
      { label: 'Mentorship', value: '1-on-1 Desk-to-Desk' },
      { label: 'Pace', value: 'Your Own Speed' },
      { label: 'Atmosphere', value: 'Friendly & Supportive' }
    ]
  },
  {
    id: 3,
    image: '/images/real-teacher-lecture.jpg',
    badge: 'Dedicated Batches · Ladies Slot 12:30–4 PM',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Safe, Focused & Structured Classroom Learning',
    description: 'Comfortable, quiet batches tailored for students, housewives, and working professionals. Instructors clarify fundamental concepts clearly before practical machine drills.',
    stats: [
      { label: 'Batch Type', value: 'Ladies & General' },
      { label: 'Timing', value: 'Flexible Slots' },
      { label: 'Environment', value: 'Safe & Clean' }
    ]
  },
  {
    id: 4,
    image: '/images/real-data-chart-session.jpg',
    badge: 'TallyPrime, Excel & Data Analytics',
    badgeColor: 'bg-[#001752] text-white',
    title: 'Live Business Data, Financial Reports & Chart Analysis',
    description: 'Master live company accounts, GST return filing, MIS reports, dynamic charts, and automated Excel workbooks for immediate employability in Virar, Vasai, and Mumbai.',
    stats: [
      { label: 'Curriculum', value: 'TallyPrime + Adv Excel' },
      { label: 'Target', value: 'Job & Business' },
      { label: 'Offer', value: 'Flat 50% Concession' }
    ]
  },
  {
    id: 5,
    image: '/images/real-lab-wide.jpg',
    badge: 'Opposite Virar East Station Subway Exit',
    badgeColor: 'bg-[#001752] text-white',
    title: 'Modern Lab Infrastructure · 5,000+ Alumni Since 2014',
    description: 'High-speed broadband, uninterrupted power backup, ergonomic seating, and licensed software. Eliminate the exhausting 4-hour commute to South Mumbai.',
    stats: [
      { label: 'Walk from Station', value: '2 Minutes Flat' },
      { label: 'Alumni Network', value: '5,000+ Trained' },
      { label: 'Support', value: 'Free Lifetime Doubts' }
    ]
  }
];

export default function CampusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides every 5.5 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
      }, 5500);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section 
      className="py-16 sm:py-20 bg-white border-y border-slate-200/80 overflow-hidden" 
      aria-label="Campus Life & Lab Image Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41E1E]/10 text-[#C41E1E] text-xs font-bold uppercase tracking-wider border border-[#C41E1E]/20">
                <Sparkles size={13} />
                Live Campus Experience
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Virar East Station Subway
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#001752] tracking-tight leading-tight">
              Life Inside Our <span className="text-[#C41E1E]">Practical IT Lab</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore authentic daily sessions at Raut Arcade 202. Experience individual computer workstations, patient teaching, and job-ready practical learning.
            </p>
          </div>

          {/* Slider Controls (Desktop Top-Right) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001752] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#001752] hover:bg-[#C41E1E] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[440px] sm:min-h-[500px]">
          
          {/* Active Image */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-102"
              />

              {/* Gradient Vignettes for cinematic contrast and text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none hidden md:block" />
            </div>
          ))}

          {/* Slide Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white pointer-events-none">
            
            {/* Top Bar on Slide */}
            <div className="flex items-center justify-between gap-4 pointer-events-auto">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm ${currentSlide.badgeColor}`}>
                <MapPin size={12} className="stroke-[2.5]" />
                {currentSlide.badge}
              </span>

              <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-200 border border-white/20">
                {currentIndex + 1} / {SLIDES.length}
              </div>
            </div>

            {/* Bottom Caption Block */}
            <div className="max-w-3xl pointer-events-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug drop-shadow-sm mb-2.5">
                {currentSlide.title}
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed max-w-2xl drop-shadow-sm mb-5 font-normal">
                {currentSlide.description}
              </p>

              {/* Quick Key Facts Pills */}
              <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
                {currentSlide.stats.map((st, i) => (
                  <div 
                    key={i} 
                    className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2"
                  >
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-300 font-medium">{st.label}:</span>
                    <strong className="text-white font-bold">{st.value}</strong>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact#demo"
                  className="inline-flex items-center justify-center bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  Book Free Demo Visit
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all border border-white/30"
                >
                  View All Campus Photos →
                </Link>
              </div>

            </div>

          </div>

          {/* Slide Indicator Dots (Bottom Right) */}
          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                className={`transition-all rounded-full ${
                  i === currentIndex
                    ? 'w-6 h-2 bg-[#C41E1E]'
                    : 'w-2 h-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

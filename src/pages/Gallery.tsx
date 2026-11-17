import { useState, useEffect } from 'react';
import {
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MessageCircle,
  Eye,
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/config';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  tag: string;
  image: string;
  duration?: string;
  videoNote?: string;
}

const GALLERY_MEDIA: MediaItem[] = [
  // ─── Video Glimpses ───
  {
    id: 'vid-1',
    type: 'video',
    title: 'Lab 202 Walkthrough & Workstation Tour',
    tag: 'Video Tour',
    image: '/images/real-lab-wide.jpg',
    duration: '1:15 min',
    videoNote: 'Guided walkthrough of our air-conditioned computer lab, student aisles, and dedicated terminals.',
  },
  {
    id: 'vid-2',
    type: 'video',
    title: 'Hands-On Practical & Typing Session',
    tag: 'Lab Session',
    image: '/images/real-lab-classroom.jpg',
    duration: '0:48 min',
    videoNote: 'Students working through live exercises and speed typing evaluations with 1:1 supervision.',
  },
  {
    id: 'vid-3',
    type: 'video',
    title: '1-on-1 Faculty Desk Coaching Demo',
    tag: 'Mentorship',
    image: '/images/real-instructor-mentoring.jpg',
    duration: '0:55 min',
    videoNote: 'Close-up of faculty mentoring a student through Excel formulas, voucher entries, and code execution.',
  },
  {
    id: 'vid-4',
    type: 'video',
    title: 'Tally GST & Live Business Accounts',
    tag: 'Live Practical',
    image: '/images/real-data-chart-session.jpg',
    duration: '1:04 min',
    videoNote: 'Real-time billing, tax invoices, and financial chart generation displayed directly on workstations.',
  },

  // ─── Real Campus Photos ───
  {
    id: 'img-1',
    type: 'image',
    title: 'Individual Student Workstations',
    tag: '1 Student : 1 PC',
    image: '/images/real-lab-classroom.jpg',
  },
  {
    id: 'img-2',
    type: 'image',
    title: '1-on-1 Personalized Mentoring',
    tag: 'Desk Coaching',
    image: '/images/real-instructor-mentoring.jpg',
  },
  {
    id: 'img-3',
    type: 'image',
    title: 'Whiteboard Concept Lecture',
    tag: 'Theory Clarity',
    image: '/images/real-teacher-lecture.jpg',
  },
  {
    id: 'img-4',
    type: 'image',
    title: 'Advanced Excel & Business Analytics',
    tag: 'Tally & GST Lab',
    image: '/images/real-data-chart-session.jpg',
  },
  {
    id: 'img-5',
    type: 'image',
    title: 'Spacious Lab Facility Overview',
    tag: 'Raut Arcade 202',
    image: '/images/real-lab-wide.jpg',
  },
  {
    id: 'img-6',
    type: 'image',
    title: 'Dedicated Study & Practice Aisles',
    tag: 'Quiet Ambience',
    image: '/images/real-lab-aisle.jpg',
  },
  {
    id: 'img-7',
    type: 'image',
    title: 'Interactive Student Group Session',
    tag: 'Peer Learning',
    image: '/images/real-students-presentation.jpg',
  },
  {
    id: 'img-8',
    type: 'image',
    title: 'Daily Hands-On Lab Work',
    tag: '100% Practical',
    image: '/images/lab-students.jpg',
  },
  {
    id: 'img-9',
    type: 'image',
    title: 'Special Ladies Batch Guidance',
    tag: '12:30–4 PM Slot',
    image: '/images/ladies-guidance.jpg',
  },
  {
    id: 'img-10',
    type: 'image',
    title: 'Accounting & Voucher Entry Lab',
    tag: 'TallyPrime',
    image: '/images/tally-practice.jpg',
  },
  {
    id: 'img-11',
    type: 'image',
    title: 'Web & Software Development Practice',
    tag: 'Coding Lab',
    image: '/images/student-coding.jpg',
  },
  {
    id: 'img-12',
    type: 'image',
    title: 'Course Completion & Certification',
    tag: 'Certificate Day',
    image: '/images/certificate-success.jpg',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);

  const filteredMedia = GALLERY_MEDIA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  // Navigate lightbox
  const currentFilteredIndex = activeItem
    ? filteredMedia.findIndex((m) => m.id === activeItem.id)
    : -1;

  const handlePrev = () => {
    if (currentFilteredIndex > 0) {
      setActiveItem(filteredMedia[currentFilteredIndex - 1]);
    } else {
      setActiveItem(filteredMedia[filteredMedia.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentFilteredIndex < filteredMedia.length - 1) {
      setActiveItem(filteredMedia[currentFilteredIndex + 1]);
    } else {
      setActiveItem(filteredMedia[0]);
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
  }, [activeItem, currentFilteredIndex, filteredMedia]);

  return (
    <>
      <SEO
        title="Campus Gallery & Lab Videos | RACE Computer Education Virar East"
        description="Authentic photos and lab video tours from RACE Computer Education at Raut Arcade, opposite Virar East railway station. 1 Student : 1 PC practical training."
        canonical="/gallery"
      />

      {/* ─── Minimal Header (No Content Bloat) ─── */}
      <section className="bg-[#0e2340] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#c6383b]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-slate-200 border border-white/15 mb-3 backdrop-blur-xs">
                <Sparkles size={13} className="text-[#A2D016]" />
                <span>Raut Arcade 202 · Opposite Virar East Station</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Campus <span className="text-[#A2D016]">Photos &amp; Videos</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Authentic glimpses of daily sessions, dedicated computer terminals, and faculty desk coaching.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md self-start md:self-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#A2D016] text-[#0e2340] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                All Media ({GALLERY_MEDIA.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('image')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === 'image'
                    ? 'bg-[#A2D016] text-[#0e2340] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <ImageIcon size={14} />
                <span>Photos (12)</span>
              </button>
              <button
                type="button"
                onClick={() => setFilter('video')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === 'video'
                    ? 'bg-[#A2D016] text-[#0e2340] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <VideoIcon size={14} />
                <span>Videos (4)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pure Media Grid (Images & Videos Only) ─── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredMedia.map((item) => {
              const isVideo = item.type === 'video';

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                  aria-label={`${isVideo ? 'Play video' : 'View photo'}: ${item.title}`}
                >
                  {/* Media Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs ${
                        isVideo
                          ? 'bg-[#c6383b] text-white'
                          : 'bg-[#0e2340]/90 text-white backdrop-blur-xs'
                      }`}
                    >
                      {isVideo ? <VideoIcon size={10} /> : <ImageIcon size={10} />}
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Centered Play Button (For Videos) */}
                  {isVideo ? (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 text-[#0e2340] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#A2D016] group-hover:text-[#0e2340]">
                        <Play size={20} className="fill-current ml-0.5" />
                      </div>
                    </div>
                  ) : (
                    /* Subtle Expand Indicator on Hover (For Images) */
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center">
                        <Maximize2 size={12} />
                      </span>
                    </div>
                  )}

                  {/* Clean 1-Line Bottom Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between text-white text-xs">
                    <span className="font-bold truncate text-[11px] sm:text-xs drop-shadow-sm pr-2">
                      {item.title}
                    </span>
                    {isVideo && item.duration ? (
                      <span className="shrink-0 bg-black/60 backdrop-blur-xs text-[#A2D016] font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                        {item.duration}
                      </span>
                    ) : (
                      <Eye size={13} className="text-white/60 shrink-0 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Bottom Bar (No Text Clutter) */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-sm font-bold text-[#0e2340]">
                Want to experience our lab in person?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Walk in anytime between 9:00 AM – 7:00 PM at Raut Arcade 202, opposite Virar East station subway.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-xs">
              <span className="text-slate-500 font-semibold">Call:</span>
              <a href="tel:8793314239" className="font-bold text-[#0e2340] hover:text-[#c6383b]">8793314239</a>
              <span className="text-slate-300">/</span>
              <a href="tel:8482881614" className="font-bold text-[#0e2340] hover:text-[#c6383b]">8482881614</a>
              <span className="text-slate-300">/</span>
              <a href="tel:9794323963" className="font-bold text-[#0e2340] hover:text-[#c6383b]">9794323963</a>

              <a
                href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  'Hello RACE! I saw your lab gallery photos & videos. I would like to visit Raut Arcade for a free demo session.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Interactive Lightbox & Video Player Modal ─── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close media viewer"
          >
            <X size={20} />
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Next item"
          >
            <ChevronRight size={24} />
          </button>

          {/* Content Wrapper */}
          <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center">
            {activeItem.type === 'video' ? (
              /* ─── Video Player Container ─── */
              <div className="w-full bg-black rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <div className="relative aspect-[16/9] w-full bg-slate-900 flex items-center justify-center group/vid">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Centered Glowing Play Action */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A2D016] text-[#0e2340] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                      <Play size={28} className="fill-current ml-1" />
                    </div>
                    <span className="text-white text-xs sm:text-sm font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      Previewing Video · {activeItem.duration}
                    </span>
                  </div>

                  {/* Video Note Bar */}
                  {activeItem.videoNote && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                      <span className="text-slate-200">{activeItem.videoNote}</span>
                      <a
                        href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                          `Hello RACE! I am watching the '${activeItem.title}' video on your site. Please send the full lab video clip on WhatsApp.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle size={13} />
                        <span>Request Video on WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ─── High-Res Image Display ─── */
              <div className="w-full max-h-[80vh] flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/15"
                />
              </div>
            )}

            {/* Modal Bottom Metadata */}
            <div className="w-full mt-3 px-2 flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white">{activeItem.title}</span>
                <span className="bg-white/10 text-[#A2D016] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/15">
                  {activeItem.tag}
                </span>
              </div>
              <span className="text-slate-400 font-mono text-xs">
                {currentFilteredIndex + 1} of {filteredMedia.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

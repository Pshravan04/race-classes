import { MessageSquare, Upload } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SITE_CONFIG } from '../data/config';

const GALLERY_ITEMS = [
  {
    image: '/images/real-lab-classroom.jpg',
    alt: 'Students practicing on computers in Virar East lab at Raut Arcade',
    badge: 'Raut Arcade Lab 202',
    badgeClass: 'bg-[#001752] text-white',
    bottomLeft: 'Virar East Subway Exit',
    bottomRight: '1 Student : 1 PC',
    bottomRightClass: 'text-emerald-400',
    title: 'Individual Practical Workstations',
    description:
      'Genuine daily sessions at Raut Arcade 202, opposite Virar East railway subway. Every student has a dedicated computer terminal.',
  },
  {
    image: '/images/real-instructor-mentoring.jpg',
    alt: 'Faculty assisting student hands-on at computer desk at RACE',
    badge: '1-on-1 Faculty Mentorship',
    badgeClass: 'bg-[#C41E1E] text-white',
    bottomLeft: 'Desk Coaching',
    bottomRight: 'Patient Guidance',
    bottomRightClass: 'text-sky-300',
    title: 'Hands-On Desk Coaching',
    description:
      'Faculty directly guide students with mouse navigation, typing mechanics, voucher entries, and code execution step by step.',
  },
  {
    image: '/images/real-teacher-lecture.jpg',
    alt: 'Teacher explaining concept at whiteboard to computer students at RACE',
    badge: 'Structured Classroom Batches',
    badgeClass: 'bg-emerald-600 text-white',
    bottomLeft: 'Daily Batches',
    bottomRight: 'Ladies 12:30–4 PM',
    bottomRightClass: 'text-white',
    title: 'Interactive Whiteboard Lectures',
    description:
      'Detailed concept explanations before hands-on computer execution. Safe, welcoming environment for school, college, and ladies batches.',
  },
  {
    image: '/images/real-data-chart-session.jpg',
    alt: 'Students analyzing Excel charts and financial data on screen at RACE',
    badge: 'Advanced Excel & Business Analytics',
    badgeClass: 'bg-[#001752] text-white',
    bottomLeft: 'TallyPrime + GST',
    bottomRight: 'Live Projects',
    bottomRightClass: 'text-yellow-300',
    title: 'Practical Chart & Report Generation',
    description:
      'Real-time financial charts, pivot summaries, and invoice automation displayed directly on digital screens for deep practical learning.',
  },
  {
    image: '/images/real-lab-wide.jpg',
    alt: 'Panoramic view of full computer lab inside Raut Arcade Virar East',
    badge: 'Spacious Lab Infrastructure',
    badgeClass: 'bg-[#001752] text-white',
    bottomLeft: '2nd Floor 202',
    bottomRight: '100% Practical',
    bottomRightClass: 'text-emerald-400',
    title: 'Full Facility Panoramic View',
    description:
      'Air-conditioned learning booths with individual high-speed desktop PCs, uninterrupted power backup, and quiet study ambiance.',
  },
  {
    image: '/images/real-lab-aisle.jpg',
    alt: 'Students seated in booths working with course material at RACE Virar',
    badge: 'Authentic Study Materials',
    badgeClass: 'bg-[#C41E1E] text-white',
    bottomLeft: 'Since 2014',
    bottomRight: '5,000+ Alumni',
    bottomRightClass: 'text-emerald-400',
    title: 'Focused Practice & Reference Books',
    description:
      'Students working through syllabus modules, textbook examples, and real-world accounting entries under mentor supervision.',
  },
];

export default function Gallery() {
  return (
    <>
      <SEO
        title="Student Success & Gallery | RACE Virar East"
        description="Authentic moments from our computer lab at Raut Arcade, Virar East. Hands-on learning, practical typing tests, and real student achievements."
        canonical="/gallery"
      />

      <PageHero
        eyebrow="Authentic Lab Moments"
        title="Gallery & Student Learning Journey"
        description="We stand for genuine, grounded education. Explore authentic daily sessions, active workstation practice, and student certification milestones at Raut Arcade, Virar East."
        aside={
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src="/images/real-lab-classroom.jpg"
                  alt="Real students learning in the RACE computer lab"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="relative mt-7 aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src="/images/real-instructor-mentoring.jpg"
                  alt="Faculty desk guidance at RACE"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/95 p-3 text-center shadow-xl backdrop-blur-md">
              <strong className="block text-xs font-black text-[#001752]">Raut Arcade Lab 202</strong>
              <span className="text-[10px] font-semibold text-slate-500">
                Real sessions · 1 Student : 1 PC
              </span>
            </div>
          </div>
        }
      />
                                                                              
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span
                    className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-sm ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <span>{item.bottomLeft}</span>
                    <span className={`font-bold ${item.bottomRightClass}`}>{item.bottomRight}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-1 pt-3">
                  <strong className="block text-sm font-bold text-[#001752]">{item.title}</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Share your story */}
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-slate-200 bg-[#F8F9FA] p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FAD4D4] bg-[#FDF2F2] text-[#C41E1E]">
              <Upload size={22} />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#001752]">
              Are you an alumni of RACE? Share Your Story!
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We love celebrating our students’ achievements. Send us your photo, the course you
              completed, and what you’re currently working on. We will feature your genuine journey
              right here on our student showcase wall.
            </p>

            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello RACE! I am an alumni of the institute. I would like to share my review and photo for the website showcase.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C41E1E] hover:bg-[#A81717] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all active:scale-95 sm:text-sm"
            >
              <MessageSquare size={16} />
              <span>Send Your Story on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Visit Our Lab"
        title="Experience our 1 Student : 1 PC learning environment in person"
        description="Walk in anytime between 9:00 AM and 7:00 PM at Raut Arcade, opposite Virar East railway subway. Sit down for a free demo session on any workstation."
      />
    </>
  );
}

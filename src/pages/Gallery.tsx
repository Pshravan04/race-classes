import { MessageSquare, Upload } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SITE_CONFIG } from '../data/config';

const GALLERY_ITEMS = [
  {
    image: '/images/lab-students.jpg',
    alt: 'Students practicing on computers in Virar East lab',
    badge: 'Live Classroom',
    badgeClass: 'bg-[#0084FF] text-white',
    bottomLeft: 'Raut Arcade Lab 202',
    bottomRight: '1 Student : 1 PC',
    bottomRightClass: 'text-emerald-400',
    title: 'Individual Practical Workstations',
    description:
      'Morning & Afternoon batches at Raut Arcade. Confirmed machine time with zero sharing.',
  },
  {
    image: '/images/instructor-teaching.jpg',
    alt: 'Faculty assisting student 1-on-1 at computer desk',
    badge: '1-on-1 Mentorship',
    badgeClass: 'bg-emerald-600 text-white',
    bottomLeft: 'Desk Guidance',
    bottomRight: 'Zero Hesitation',
    bottomRightClass: 'text-sky-300',
    title: 'Patient, Step-by-Step Teaching',
    description:
      'Teachers answer every doubt directly at the student’s desk. Ideal for absolute beginners.',
  },
  {
    image: '/images/student-coding.jpg',
    alt: 'Student working on coding and typing exercise',
    badge: 'Coding & Typing',
    badgeClass: 'bg-violet-600 text-white',
    bottomLeft: 'GCC-TBC Pattern',
    bottomRight: 'English & Marathi',
    bottomRightClass: 'text-amber-300',
    title: 'Speed Typing & Web Development',
    description:
      'Timed speed assessments for government exam preparation and modern software projects.',
  },
  {
    image: '/images/certificate-success.jpg',
    alt: 'Student celebrating course completion and certification at Race Reddys',
    badge: 'Recognized Diploma',
    badgeClass: 'bg-amber-500 text-white',
    bottomLeft: '5,000+ Alumni',
    bottomRight: '100% Certified',
    bottomRightClass: 'text-emerald-400',
    title: 'Course Completion Moments',
    description:
      'Celebrating students completing career certifications and stepping into corporate roles.',
  },
  {
    image: '/images/tally-practice.jpg',
    alt: 'Student practicing TallyPrime accounting with GST in lab',
    badge: 'Accounting & GST',
    badgeClass: 'bg-blue-600 text-white',
    bottomLeft: 'TallyPrime + GST',
    bottomRight: 'Live Billing',
    bottomRightClass: 'text-yellow-300',
    title: 'Accounting & GST Computation',
    description:
      'Hands-on voucher entries, bank reconciliations, and tax returns for office jobs.',
  },
  {
    image: '/images/ladies-guidance.jpg',
    alt: 'Encouraging environment for ladies and students at Race Reddys',
    badge: 'Ladies Exclusive',
    badgeClass: 'bg-rose-600 text-white',
    bottomLeft: '12:30 PM – 4:00 PM',
    bottomRight: 'Safe & Quiet',
    bottomRightClass: 'text-white',
    title: 'Safe & Encouraging Space',
    description:
      'Empowering homemakers, working women, and young students with digital confidence.',
  },
];

export default function Gallery() {
  return (
    <>
      <SEO
        title="Student Success & Gallery | Race Reddys Virar East"
        description="Authentic moments from our computer lab at Raut Arcade, Virar East. Hands-on learning, practical typing tests, and real student achievements."
        canonical="/gallery"
      />

      <PageHero
        eyebrow="Authentic Lab Moments · खरी प्रगती"
        title="Gallery & Student Learning Journey"
        description="We stand for genuine, grounded education. Explore authentic daily sessions, active workstation practice, and student certification milestones at Raut Arcade, Virar East."
        aside={
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src="/images/lab-students.jpg"
                  alt="Students learning in the Race Reddys lab"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="relative mt-7 aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src="/images/ladies-guidance.jpg"
                  alt="Ladies batch guidance at Race Reddys"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/95 p-3 text-center shadow-xl backdrop-blur-md">
              <strong className="block text-xs font-black text-[#111827]">Raut Arcade Lab 202</strong>
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
                  <strong className="block text-sm font-bold text-[#111827]">{item.title}</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Share your story */}
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-slate-200 bg-[#F8F9FA] p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-[#0084FF]">
              <Upload size={22} />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
              Are you an alumni of Race Reddys? Share Your Story!
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We love celebrating our students’ achievements. Send us your photo, the course you
              completed, and what you’re currently working on. We will feature your genuine journey
              right here on our student showcase wall.
            </p>

            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello Race Reddys! I am an alumni of the institute. I would like to share my review and photo for the website showcase.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20BA5A] active:scale-95 sm:text-sm"
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

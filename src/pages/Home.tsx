import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2,
  Clock,
  Monitor
} from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/config';
import { ToolLogo } from '../components/ToolIcons';

interface FeaturedCourse {
  id: string;
  category: string;
  categoryGroup: 'all' | 'career' | 'coding-ai' | 'accounting' | 'design-marketing' | 'foundations';
  title: string;
  duration: string;
  hours: string;
  mode: string;
  image: string;
  link: string;
  shortDesc: string;
  urgency: string;
  seatsLeft: number;
  tools: string[];
  features: string[];
  offerBadge?: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'career', label: 'Career Diplomas' },
  { id: 'coding-ai', label: 'Software & AI' },
  { id: 'accounting', label: 'Accounting & Banking' },
  { id: 'design-marketing', label: 'Design & Marketing' },
  { id: 'foundations', label: 'Spoken English & Basics' },
];

const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: 'full-stack-developer-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'coding-ai',
    title: 'Full Stack Web Development',
    duration: '6 Months',
    hours: '300+ Lab Hours',
    mode: '1:1 PC · Daily / Weekend',
    image: '/images/student-coding.jpg',
    link: '/courses/full-stack-developer-course',
    shortDesc: 'Master front-end, back-end APIs, cloud deployment, and database architecture through live commercial projects.',
    urgency: 'Next batch starts Monday',
    seatsLeft: 3,
    tools: ['AWS', 'Java', 'JavaScript', 'CSS', 'HTML'],
    features: ['Front-end + Back-end + DB', 'Live Production Capstone', '100% Placement Support'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'data-science-and-ai',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'coding-ai',
    title: 'Data Science & Analytics with AI',
    duration: '6 Months',
    hours: '280+ Lab Hours',
    mode: '1:1 PC · Daily / Weekend',
    image: '/images/real-data-chart-session.jpg',
    link: '/courses/data-science-and-ai',
    shortDesc: 'Hands-on Python, SQL, Tableau dashboards, predictive analytics, and practical AI models on real corporate datasets.',
    urgency: 'Filling fast',
    seatsLeft: 4,
    tools: ['Python', 'Tableau', 'NumPy', 'TensorFlow', 'Excel'],
    features: ['Live Tableau Dashboards', 'Predictive ML Modeling', 'Free Basic Course Included'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'english-speaking',
    category: 'COMMUNICATION',
    categoryGroup: 'foundations',
    title: 'Spoken English & Personality Development',
    duration: '8 to 10 Weeks',
    hours: '60+ Practice Hours',
    mode: '1:1 Desk Mentoring',
    image: '/images/real-students-presentation.jpg',
    link: '/courses/english-speaking',
    shortDesc: 'Overcome hesitation, master corporate fluency, group discussions, vocabulary drills, and interview simulations.',
    urgency: 'Special Evening Batch',
    seatsLeft: 5,
    tools: ['Fluency Drills', 'Grammar Lab', 'Phonics & Accent', 'GD & Extempore', 'Interview Prep'],
    features: ['Daily Extempore & GD', 'Confidence Building Drills', 'Mock HR Interviews'],
    offerBadge: 'Popular Career Add-on',
  },
  {
    id: 'advanced-tally-with-gst',
    category: 'ACCOUNTING & TAX',
    categoryGroup: 'accounting',
    title: 'Advanced Tally with GST',
    duration: '8 to 10 Weeks',
    hours: '80+ Lab Hours',
    mode: '1:1 PC · Flexible Batches',
    image: '/images/tally-practice.jpg',
    link: '/courses/advanced-tally-with-gst',
    shortDesc: 'Corporate bookkeeping, real voucher entries, GST returns filing, E-way bills, TDS, and payroll management.',
    urgency: 'Morning & Afternoon Batches',
    seatsLeft: 2,
    tools: ['TallyPrime', 'GST', 'Excel', 'E-Way Bill', 'Income Tax'],
    features: ['Live GST Portal Simulation', 'Bank & Accounts Reconciliation', 'Govt. Recognized Certification'],
    offerBadge: 'Free Basic Computer Included',
  },
  {
    id: 'devops-with-aws-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'coding-ai',
    title: 'DevOps with AWS Cloud',
    duration: '5 to 6 Months',
    hours: '240+ Lab Hours',
    mode: '1:1 PC · Weekend & Weekday',
    image: '/images/real-instructor-mentoring.jpg',
    link: '/courses/devops-with-aws-course',
    shortDesc: 'Containerize with Docker, orchestrate with Kubernetes, automate CI/CD pipelines, and manage AWS infrastructure.',
    urgency: 'Admissions Open',
    seatsLeft: 4,
    tools: ['Grafana', 'Prometheus', 'Ansible', 'Jenkins', 'Docker'],
    features: ['CI/CD Pipeline Automation', 'AWS Architecture Practice', 'Interview Preparation'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'digital-marketing-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'design-marketing',
    title: 'Digital Marketing with AI',
    duration: '4 to 5 Months',
    hours: '200+ Lab Hours',
    mode: '1:1 PC · Hands-on Campaigns',
    image: '/images/course-graphic-design.jpg',
    link: '/courses/digital-marketing-course',
    shortDesc: 'Run live Google Ads campaigns, Meta advertising, technical SEO audits, social media growth, and conversion analytics.',
    urgency: 'Filling Fast',
    seatsLeft: 5,
    tools: ['Google Ads', 'Meta Ads', 'GA4', 'SEO', 'Canva'],
    features: ['Live Ad Budget Execution', 'Google & Meta Certification', '100% Placement Assistance'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'cyber-security-ethical-hacking-with-ai-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'coding-ai',
    title: 'Cyber Security & Ethical Hacking with AI',
    duration: '5 to 6 Months',
    hours: '240+ Lab Hours',
    mode: '1:1 PC · Isolated Sandbox',
    image: '/images/real-lab-classroom.jpg',
    link: '/courses/cyber-security-ethical-hacking-with-ai-course',
    shortDesc: 'Vulnerability assessment, network penetration testing, defensive hardening, OWASP Top 10, and Kali Linux toolchains.',
    urgency: 'Limited Intake',
    seatsLeft: 3,
    tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap', 'Python'],
    features: ['Sandboxed Penetration Labs', 'OWASP Top 10 Hardening', 'Govt. Recognized Certification'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'software-testing-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'coding-ai',
    title: 'Software Testing with AI',
    duration: '4 Months',
    hours: '180+ Lab Hours',
    mode: '1:1 PC · Practical Lab',
    image: '/images/real-lab-aisle.jpg',
    link: '/courses/software-testing-course',
    shortDesc: 'Manual test cases, automated Selenium testing with Java, API testing using Postman, and Jira bug logging.',
    urgency: 'Next batch starting soon',
    seatsLeft: 4,
    tools: ['Selenium', 'Java', 'Jira', 'Postman', 'SQL'],
    features: ['Manual + Automation Testing', 'API & Database Validation', 'Live Bug Tracking Projects'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'investment-banking-course',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'accounting',
    title: 'Investment Banking with AI',
    duration: '4 to 6 Months',
    hours: '220+ Lab Hours',
    mode: '1:1 PC · Practical Modeling',
    image: '/images/real-teacher-lecture.jpg',
    link: '/courses/investment-banking-course',
    shortDesc: 'Financial modeling, three-statement projections, discounted cash flow (DCF) valuation, M&A, and equity research.',
    urgency: 'Admissions Open',
    seatsLeft: 3,
    tools: ['Excel', 'FinModel', 'Valuation', 'M&A', 'PowerPoint'],
    features: ['Three-Statement Financial Models', 'Real Company DCF Valuation', 'Corporate Finance Guidance'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'graphic-designing',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'design-marketing',
    title: 'Graphic Designing Masterclass',
    duration: '4 to 6 Months',
    hours: '180+ Lab Hours',
    mode: '1:1 PC · Studio Practice',
    image: '/images/course-graphic-design.jpg',
    link: '/courses/graphic-designing',
    shortDesc: 'Create brand identities, social media creatives, print layouts, vector illustrations, and commercial design portfolios.',
    urgency: 'Special Afternoon Slot',
    seatsLeft: 4,
    tools: ['Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign', 'Canva'],
    features: ['Logo & Branding Kit Creation', 'Print & Packaging Workflows', 'Client Portfolio Development'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'dfa',
    category: 'CAREER DIPLOMA',
    categoryGroup: 'accounting',
    title: 'DFA – Diploma in Financial Accounting',
    duration: '4 to 6 Months',
    hours: '160+ Lab Hours',
    mode: '1:1 PC · Flexible Batches',
    image: '/images/tally-practice.jpg',
    link: '/courses/dfa',
    shortDesc: 'Comprehensive commercial accounting: TallyPrime, advanced Excel, GST portal filings, TDS calculation, and balance sheets.',
    urgency: 'Filling Fast',
    seatsLeft: 3,
    tools: ['TallyPrime', 'GST', 'Excel', 'TDS', 'Income Tax'],
    features: ['End-to-End Accounting Lifecycle', 'Statutory Returns Compliance', 'Job Placement Support'],
    offerBadge: '50% Concession Eligible',
  },
  {
    id: 'basic-computer',
    category: 'FOUNDATION',
    categoryGroup: 'foundations',
    title: 'Basic Computer Foundation',
    duration: '4 to 6 Weeks',
    hours: '40+ Lab Hours',
    mode: '1:1 PC · Rolling Batches',
    image: '/images/ladies-guidance.jpg',
    link: '/courses/basic-computer',
    shortDesc: 'Start from absolute scratch: Windows 11 navigation, keyboarding, folder management, email, and safe internet browsing.',
    urgency: 'Daily Rolling Batches',
    seatsLeft: 6,
    tools: ['Windows 11', 'MS Paint', 'Typing', 'Internet', 'Gmail'],
    features: ['Zero Prior Knowledge Required', 'Individual Instructor Desk Help', 'Free with Career Courses'],
    offerBadge: 'FREE with Any Career Course',
  },
  {
    id: 'ms-office',
    category: 'OFFICE PRODUCTIVITY',
    categoryGroup: 'foundations',
    title: 'MS-Office (Word, Excel, PowerPoint)',
    duration: '6 to 8 Weeks',
    hours: '60+ Lab Hours',
    mode: '1:1 PC · Ladies Batch (12:30 PM)',
    image: '/images/course-excel-office.jpg',
    link: '/courses/ms-office',
    shortDesc: 'VLOOKUP, Pivot Tables, SUMIFS, corporate letter drafting, presentation decks, and automated business workflows.',
    urgency: 'Special Afternoon Slot',
    seatsLeft: 4,
    tools: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive'],
    features: ['Advanced Excel Formulas & Charts', 'Office Reporting Automation', 'ISO Certified Credential'],
    offerBadge: 'Practical Job Skills',
  },
  {
    id: 'typing-english-marathi',
    category: 'GOVT. CERTIFICATION',
    categoryGroup: 'foundations',
    title: 'GCC-TBC Typing (English & Marathi)',
    duration: '2 to 3 Months',
    hours: 'Continuous Speed Drills',
    mode: '1:1 PC · Flexible Slots',
    image: '/images/lab-students.jpg',
    link: '/courses/typing-english-marathi',
    shortDesc: 'Master touch typing with 30 WPM and 40 WPM speed benchmarks, passage accuracy drills, and GCC-TBC exam preparation.',
    urgency: 'Continuous Practice Slots',
    seatsLeft: 5,
    tools: ['GCC-TBC', 'Speed 30WPM', 'Speed 40WPM', 'Accuracy', 'Typing Master'],
    features: ['Government Exam Simulation', 'Speed Benchmark Tracking', 'Zero Terminal Sharing'],
    offerBadge: 'Exam-Ready Training',
  },
];

const FAQS_DATA = [
  {
    q: 'Do I need prior computer knowledge to join RACE?',
    a: 'No prior experience is necessary. We start from basic computer operations, Windows navigation, and keyboard skills before advancing to specialized accounting, programming, or AI tools.',
  },
  {
    q: 'Is there an individual computer guaranteed for every student?',
    a: 'Yes, absolutely. We strictly guarantee a 1 Student : 1 PC ratio. You will never share a computer terminal with anyone. Every minute of class is dedicated hands-on practical practice.',
  },
  {
    q: 'What batch timings are available?',
    a: 'We offer flexible Morning batches (8 AM–11 AM), Afternoon slots (12 PM–3 PM), Special Ladies Batch (12:30 PM–3 PM), and Evening batches (5 PM–7:30 PM). Weekend slots are also available.',
  },
  {
    q: 'What is included in the free Basic Computer Course offer?',
    a: 'When you enroll in any career-track diploma program, the complete foundational Basic Computer module is included without extra tuition charge, covering Windows OS navigation, internet safety, and typing fundamentals.',
  },
  {
    q: 'Do students receive a verified certificate upon completion?',
    a: 'Yes. Upon successfully finishing your coursework and practical exams, you will receive an authorized certificate from RACE along with ISO 9001:2015 accredited course completion credentials recognized by recruiters.',
  },
  {
    q: 'Where is the institute located?',
    a: 'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East railway station subway entrance (less than a 2-minute walk from Platform 1/2 exit).',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const filteredCourses = FEATURED_COURSES.filter((course) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'career') return course.category === 'CAREER DIPLOMA';
    return course.categoryGroup === activeCategory;
  });

  const checkScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const cardWidth = 350 + 20;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentSlideIndex(Math.max(0, Math.min(index, filteredCourses.length - 1)));
  }, [filteredCourses.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);
    checkScrollState();
    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState, activeCategory]);

  const slideLeft = () => {
    if (!sliderRef.current) return;
    const scrollAmount = Math.max(340, sliderRef.current.clientWidth * 0.75);
    sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const scrollAmount = Math.max(340, sliderRef.current.clientWidth * 0.75);
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <>
      <SEO
        title="RACE | Practical Computer & IT Training Institute Virar East"
        description="Build skills. Shape your future. Practical, career-focused computer education in Vasai-Virar. 1 Student : 1 PC guarantee, air-conditioned lab opposite station subway."
        canonical="/"
      />

      <div className="w-full text-[#0B0B0B] font-body selection:bg-[#C41E1E] selection:text-white">

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 01 – HERO (Seamless White Canvas Flowing from Header)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Hero" className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Red Eyebrow */}
            <div className="mb-4">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                PRACTICAL IT &amp; COMPUTER EDUCATION
              </span>
            </div>

            {/* Split Top Row: Headline Left, CTAs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-10">
              
              {/* Left Column: Two-line Headline + Subtitle */}
              <div className="lg:col-span-7 space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#001752] font-heading leading-[1.08] tracking-tight">
                  Build skills.<br />
                  Shape your future.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-normal pt-1 max-w-lg">
                  Practical, career-focused computer education in Vasai-Virar.
                </p>
              </div>

              {/* Right Column: Workstation Note, Dual Buttons, Subway Note */}
              <div className="lg:col-span-5 flex flex-col lg:items-end space-y-4 pt-1 lg:pt-2">
                <p className="text-xs sm:text-sm text-slate-600 lg:text-right max-w-sm">
                  100% individual workstation time, certification, and flexible batches.
                </p>

                {/* Two Action Buttons Side-by-Side */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Explore courses</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book a demo</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <span className="text-[11px] text-slate-400 font-medium lg:text-right">
                  Opp. Virar East Railway Station Subway
                </span>
              </div>

            </div>

            {/* Dominant Hero Image Container with Rounded Corners */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] bg-slate-900 border border-slate-200">
              <img
                src="/hero-lab.jpg"
                alt="Students practicing in computer lab at RACE Virar East"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                }}
              />

              {/* Floating White Pill Inside Bottom-Left of Image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-[#001752] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>1 Student : 1 PC Guaranteed · Air-conditioned lab</span>
                </div>
              </div>
            </div>

            {/* Caption Line Below Image */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-3.5 px-1 font-medium">
              <span>Individual machine time · No sharing</span>
              <span>Raut Arcade 202, Virar East</span>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 02 – INTRODUCTION & 3 METRIC CARDS (Full-Width Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Digital Skills Today" className="bg-[#F6F7F9] py-16 sm:py-24 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                DIGITAL SKILLS TODAY
              </span>
            </div>

            {/* Top Text Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-10 sm:mb-12">
              <div className="lg:col-span-7 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Digital skills today.<br />
                  New possibilities tomorrow.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 max-w-xl">
                  Since 2014, Reddys Advanced Computer Education has helped ambitious learners in Vasai-Virar build practical skills. Through 1:1 desk coaching, we make tech careers accessible without the daily Mumbai commute.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col lg:items-end justify-center space-y-1 text-xs text-slate-500 lg:text-right pt-2 lg:pt-6 font-medium">
                <p className="text-slate-700 font-semibold">Air-conditioned labs, 1:1 desk support.</p>
                <p>Opposite subway, Virar East station.</p>
              </div>
            </div>

            {/* Three White Metric Cards with Subtle Red Bottom Borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    10+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Years of experience
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Dedicated practical computer training for learners of all backgrounds.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    5,000+
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Students trained
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    From beginners to working professionals across Vasai, Virar, and Palghar.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] border-b-2 border-b-[#C41E1E] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#001752] font-heading block tracking-tight">
                    1:1
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">
                    Student to PC guarantee
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Your own dedicated computer during every session. Zero machine sharing.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 03 – EXPLORE OUR COURSES (Rich Slider & Category Filter)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Explore Our Courses" className="bg-white py-16 sm:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                EXPLORE OUR COURSES
              </span>
            </div>

            {/* Split Header Row: Heading + Subtitle on Left, Controls on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8">
              
              <div className="lg:col-span-8 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  Find your next step.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Practical, career-focused computer courses tailored for local students, graduates, and working professionals in Vasai-Virar. 100% individual workstation time with verified ISO certification.
                </p>
              </div>

              {/* Slider Controls & Slide Counter */}
              <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-4">
                
                {/* Slide Counter */}
                <div className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                  <span className="text-[#001752] text-sm">
                    {String(Math.min(currentSlideIndex + 1, filteredCourses.length)).padStart(2, '0')}
                  </span>
                  <span className="mx-1.5 text-slate-300">/</span>
                  <span>{String(filteredCourses.length).padStart(2, '0')}</span>
                </div>

                {/* Circular Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={slideLeft}
                    disabled={!canScrollLeft}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                      canScrollLeft
                        ? 'border-slate-300 bg-white text-slate-800 hover:border-[#001752] hover:bg-slate-50 active:scale-95 cursor-pointer shadow-2xs'
                        : 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                    aria-label="Previous courses"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={slideRight}
                    disabled={!canScrollRight}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                      canScrollRight
                        ? 'bg-[#001752] hover:bg-[#16345c] text-white active:scale-95 cursor-pointer shadow-xs'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                    aria-label="Next courses"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <Link
                  to="/courses"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#C41E1E] transition-colors"
                >
                  <span>All 23 courses</span>
                  <ArrowRight size={13} />
                </Link>

              </div>

            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#001752] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Interactive Carousel Track */}
            <div
              ref={sliderRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeaveOrUp}
              onMouseUp={onMouseLeaveOrUp}
              onMouseMove={onMouseMove}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="w-[315px] sm:w-[350px] md:w-[370px] shrink-0 snap-start bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#001752]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Top Urgency Header */}
                    <div className="px-4 py-2 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-600 font-medium truncate">
                        {course.urgency}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C41E1E] bg-[#FCF4F4] border border-[#F8E4E4] px-2 py-0.5 rounded-full shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E] animate-pulse" />
                        <span>{course.seatsLeft} seats left</span>
                      </span>
                    </div>

                    {/* Image Container with Rounded Top & Floating Badges */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                        }}
                      />
                      
                      {/* Floating Category Badge (Top-Left) */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#001752]/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
                          {course.category}
                        </span>
                      </div>

                      {/* Floating 1:1 PC Badge (Bottom-Left) */}
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white/95 backdrop-blur-xs text-[#001752] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>1 Student : 1 PC</span>
                        </span>
                      </div>
                    </div>

                    {/* 5-Tool Logo Strip */}
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Tools Mastered
                      </span>
                      <div className="flex items-center gap-1.5">
                        {course.tools.slice(0, 5).map((tool) => (
                          <div
                            key={tool}
                            title={tool}
                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5 shadow-2xs hover:border-[#001752] transition-colors"
                          >
                            <ToolLogo name={tool} className="w-3.5 h-3.5" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-3">
                      
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#001752] group-hover:text-[#C41E1E] transition-colors leading-snug line-clamp-2 min-h-[2.75rem]">
                          <Link to={course.link}>
                            {course.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Key Features Bullets */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                        {course.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-[#10b981] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Duration & Mode Logistics */}
                      <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-slate-400 shrink-0" />
                          <span>{course.duration} ({course.hours})</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Monitor size={12} className="text-slate-400 shrink-0" />
                          <span>{course.mode}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Dual Action Buttons Footer */}
                  <div className="p-4 pt-3 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      to={course.link}
                      className="flex-1 text-center py-2 px-3 rounded-lg border border-slate-300 hover:border-[#001752] hover:bg-white text-xs font-bold text-slate-800 transition-all cursor-pointer"
                    >
                      View Details
                    </Link>

                    <Link
                      to={`/contact?course=${course.id}#enquiry`}
                      className="flex-1 text-center py-2 px-3 rounded-lg bg-[#C41E1E] hover:bg-[#931616] text-white text-xs font-bold transition-all shadow-xs inline-flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Section Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>100% Individual Machine Time Guaranteed across all courses</span>
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#001752] hover:text-[#C41E1E] transition-colors group cursor-pointer"
              >
                <span>Explore all 24 courses and full syllabus</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 04 – FROM LEARNING TO REAL-WORLD SKILLS (Full-Width Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Process" className="bg-[#F6F7F9] py-16 sm:py-24 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                HOW WE WORK, START TO FINISH
              </span>
            </div>

            {/* Heading & Subtitle */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mb-10 sm:mb-12">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight">
                  From learning to<br />
                  real-world skills.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right pt-1 lg:pt-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A structured four-step path to build practical skills that lead to real career opportunities.
                </p>
              </div>
            </div>

            {/* Top Row: 3 White Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-6">
              
              {/* Step 01 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 01
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Understand your goals
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    1-on-1 personalized counseling to align your learning with your career objectives.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/ladies-guidance.jpg"
                    alt="Counseling session at RACE"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 02 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 02
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Learn by doing
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    100% lab practice on your own PC. Live demos, syntax, and step-by-step exercises.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Practical lab session"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 03 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step 03
                  </span>
                  <h3 className="text-base font-bold text-[#001752] mb-1.5">
                    Build real projects
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Company vouchers, dynamic web apps, database models, and live campaigns.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Student coding projects"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Row: Wide Split Navy Card */}
            <div className="bg-[#001752] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#00113E] grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-5">
                <div>
                  <span className="text-[11px] font-bold text-[#DF8383] uppercase tracking-wider block mb-2">
                    STEP 04 · CAREER ACCELERATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-tight mb-2.5">
                    More than a course.<br />
                    A career-ready you.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
                    Resume workshops, mock interviews, and ISO 9001:2015 certification recognized across Mumbai.
                  </p>
                </div>

                {/* Key Career Highlights Bullets */}
                <div className="space-y-2 pt-1 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#10b981] shrink-0" />
                    <span>Dedicated placement cell & interview scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#10b981] shrink-0" />
                    <span>ISO 9001:2015 accredited course completion certificate</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact#demo"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#001752] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Book a free demo</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    to="/placements"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
                  >
                    <span>View placement assistance</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right Image Container - Constrained, landscape cropped, never stretches */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[220px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-slate-900">
                <img
                  src="/images/real-lab-wide.jpg"
                  alt="Students and practical learning at RACE computer lab Virar East"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/real-lab-classroom.jpg';
                  }}
                />
                
                {/* Subtle Left Gradient Overlay to blend with navy card on desktop */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#001752] to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10">
                  <div className="inline-flex items-center gap-2 bg-[#001752]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-medium shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span>Individual Workstations · Virar East</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 05 – THE RACE EXPERIENCE (Full-Width White Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Gallery" className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Eyebrow */}
            <div className="mb-3">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                THE RACE EXPERIENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001752] font-heading leading-tight tracking-tight mb-2">
              More than learning.<br />
              Building your future.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mb-8 sm:mb-10">
              Inside the classrooms and computer labs of RACE, Virar East.
            </p>

            {/* Bento Grid Layout Matching Mockup */}
            <div className="space-y-4">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                
                {/* Photo 1: Lab Classroom (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Air-conditioned lab 202"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Air-conditioned lab 202
                  </span>
                </div>

                {/* Photo 2: Coding session (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/student-coding.jpg"
                    alt="Coding session"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Coding session
                  </span>
                </div>

                {/* Card: A Campus Built Around You (3 cols) */}
                <div className="lg:col-span-3 bg-[#F6F7F9] rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#001752] leading-snug mb-3">
                      A campus built<br />around you.
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>2 min from Virar East station</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>1 Student : 1 PC guaranteed</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>Air-conditioned labs</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#C41E1E] shrink-0" />
                        <span>Special ladies batch (12:30–3 PM)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Photo 3: 1:1 Desk Mentoring (3 cols) */}
                <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto bg-slate-900 group">
                  <img
                    src="/images/real-instructor-mentoring.jpg"
                    alt="1:1 desk mentoring"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    1:1 desk mentoring
                  </span>
                </div>

              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* Photo 4 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-lab-wide.jpg"
                    alt="Practical lab"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Practical lab
                  </span>
                </div>

                {/* Photo 5 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/real-data-chart-session.jpg"
                    alt="Personal workstation"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Personal workstation
                  </span>
                </div>

                {/* Photo 6 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/lab-students.jpg"
                    alt="Computer workstations"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Computer workstations
                  </span>
                </div>

                {/* Photo 7 */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/images/certificate-success.jpg"
                    alt="Job-ready skills"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Job-ready skills
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Caption Line */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium">
              <span>A training environment that feels like a real office.</span>
              <span>Opposite Virar East subway, Platform 1/2.</span>
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 06 – FEATURED CTA (Contained Banner on White Canvas)
            ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Call to Action" className="bg-white py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001752] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#00113E]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-[11px] font-bold text-[#DF8383] uppercase tracking-wider block">
                    LIMITED SEATS · ADMISSION OPEN
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-white tracking-tight leading-tight">
                    Ready to take the next<br />
                    step in your career?
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                    Build the practical skills that move your future forward. Enquire today for 50% concession on career diplomas and a free Basic Computer module.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/contact#enquiry"
                      className="inline-flex items-center gap-1.5 bg-[#C41E1E] hover:bg-[#931616] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
                    >
                      <span>Enquire now</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      to="/courses"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
                    >
                      <span>View all courses</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: 50% Concession Pass Card */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="w-full max-w-xs bg-white text-[#001752] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-xl space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      SPECIAL CONCESSION PASS
                    </span>

                    <div className="text-5xl sm:text-6xl font-black text-[#C41E1E] font-heading tracking-tight">
                      50%
                    </div>

                    <span className="text-xs font-black tracking-widest uppercase text-[#001752] block">
                      CONCESSION
                    </span>

                    <p className="text-[11px] text-slate-600 leading-tight pt-1">
                      On all career diploma programs
                    </p>

                    <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                      Limited seats available for 2026 batches
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 07 – FAQ (Full-Width Pale Section)
            ══════════════════════════════════════════════════════════════════════ */}
        <section id="faq" aria-label="Frequently Asked Questions" className="bg-[#F6F7F9] py-16 sm:py-24 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Red Eyebrow */}
            <div className="text-center mb-2">
              <span className="text-[#C41E1E] text-xs font-bold tracking-wider uppercase">
                HAVE QUESTIONS? WE ARE HERE TO HELP.
              </span>
            </div>

            {/* Centered Heading & Subtitle */}
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 space-y-1.5">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001752] font-heading tracking-tight leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Everything you need to know about courses, admissions, and training methods at RACE.
              </p>
            </div>

            {/* Two-Column Grid: Left Navy Card + Right Accordion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-6">
              
              {/* Left Column: Navy Question Card */}
              <div className="lg:col-span-4 bg-[#001752] text-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-md">
                <span className="text-[10px] font-bold text-[#DF8383] uppercase tracking-wider block">
                  ADMISSIONS HELP
                </span>

                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-bold">
                  ?
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                    You're not alone.<br />
                    Our guidance.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Our counselors are available Monday to Saturday, 9 AM – 7 PM to answer any questions.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <Link
                    to="/contact#demo"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#001752] text-xs font-bold py-2.5 px-4 rounded-full transition-all shadow-xs"
                  >
                    <span>Contact admissions desk</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center text-xs font-semibold text-[#4ADE80] hover:underline pt-1"
                  >
                    WhatsApp: 9794323963
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Accordion List */}
              <div className="lg:col-span-8 space-y-2.5">
                {FAQS_DATA.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div
                      key={idx}
                      className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#001752] hover:text-[#C41E1E] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F6F7F9]/40">
                          <p className="pt-2">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Centered Subtitle */}
            <div className="text-center text-xs text-slate-400 pt-6 border-t border-slate-200">
              Raut Arcade 202, 2nd Floor, Opposite Subway / Opposite Virar East Railway Station, Maharashtra 401305.
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

// ============================================================
// SITE CONFIGURATION — RACE REDDYS ADVANCED COMPUTER EDUCATION
// All business facts, courses, batches, and offers live here.
// Non-developers can edit values here safely.
// ============================================================

export const SITE_CONFIG = {
  name: 'Race Reddys',
  fullName: 'Race Reddys – Advanced Computer Education',
  tagline: 'Practical IT & Computer Training in Virar East',
  motto: 'Ab Mumbai jaane ki zarurat nahi — Learn quality IT skills right at your station.',
  description:
    'Hands-on computer training institute opposite Virar East railway station. 100% practical lab training, certification, placement assistance, flexible morning/evening batches, and special batches for ladies & students.',

  contact: {
    phone: '9794323963',
    phoneRaw: '+919794323963',
    phoneDisplay: '+91 97943 23963',
    whatsapp: 'https://wa.me/919794323963',
    whatsappNumber: '919794323963',
    whatsappDefaultMessage: encodeURIComponent('Hello! I am interested in admissions at Race Reddys Virar East.'),
    timings: 'Monday to Saturday: 9:00 AM – 7:00 PM (Sunday Closed)',
  },

  address: {
    line1: '202, 2nd Floor, Raut Arcade',
    line2: 'Opposite Subway / Opposite Virar East Railway Station',
    landmark: 'Right outside Platform 2 exit / subway',
    city: 'Virar East',
    district: 'Palghar',
    state: 'Maharashtra',
    pin: '401305',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.665330374182!2d72.81165!3d19.4678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9bdc99b8b39%3A0x6b3b244799015c7e!2sRaut%20Arcade%2C%20Virar%20East!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    googleMapsDirectLink:
      'https://maps.google.com/?q=Raut+Arcade+Virar+East+Maharashtra+401305',
    googleMapsSearch:
      'https://maps.google.com/?q=Raut+Arcade+Virar+East+Maharashtra+401305',
  },

  seo: {
    canonicalBase: 'https://racereddys.com',
    ogImage: '/logo-wordmark.jpg',
  },
};

// ============================================================
// EDITABLE SEASONAL OFFERS (Change here for Diwali, New Year, etc.)
// ============================================================
export const ACTIVE_OFFER = {
  active: true,
  headline: 'Admissions Open',
  badge: '50% Off',
  tagline: 'Enrol in any career course and get a Free Basic Computer Course.',
  disclaimer: 'Offer terms must be confirmed directly with institute administration.',
};

export const OFFERS_CONFIG = {
  active: true,
  seasonName: 'Admissions Special Concession', // Change to 'Diwali Dhamaka Offer', 'Summer Fast-Track Offer', etc.
  bannerHeadline: 'Limited-Time Admissions Offer — Flat 50% Concession',
  badge: '50% DISCOUNT',
  ticketCode: 'VIRAR-FAST-50',
  primaryOffer: {
    title: '50% Discount on Course Fees',
    badge: '50% OFF',
    description:
      'Special community subsidy for local Virar and Palghar district students, housewives, and early batch registrations.',
    tagline: 'Quality education made accessible without commuting to Mumbai.',
  },
  bonusOffer: {
    title: 'FREE Basic Computer Course',
    badge: 'FREE BONUS',
    description:
      'Enroll in any career-objective course and get the complete Basic Computer foundation course (Windows, Internet, typing fundamentals) at zero additional charge.',
    tagline: 'Ideal for beginners and career changers starting from scratch.',
  },
  validityNote: 'Offer available for current admission slots. Terms apply.',
};

// ============================================================
// BATCHES & TIMINGS (Monday to Saturday, 9:00 AM to 7:00 PM)
// ============================================================
export interface BatchSlot {
  name: string;
  timing: string;
  targetAudience: string;
  status: 'Filling Fast' | 'Available' | 'Special Dedicated Batch';
  highlight?: boolean;
}

export const BATCHES_SCHEDULE: BatchSlot[] = [
  {
    name: 'Early Morning College Batch',
    timing: '7:30 AM – 9:00 AM',
    targetAudience: 'College students before lectures begin',
    status: 'Available',
  },
  {
    name: 'Morning General Batch',
    timing: '9:00 AM – 10:30 AM',
    targetAudience: 'Job seekers & fresh graduates',
    status: 'Filling Fast',
  },
  {
    name: 'Late Morning Batch',
    timing: '10:30 AM – 12:00 PM',
    targetAudience: 'Commerce students, Tally & Typing learners',
    status: 'Available',
  },
  {
    name: 'Special Ladies & Homemakers Batch',
    timing: '12:30 PM – 2:00 PM',
    targetAudience: 'Housewives, working women & first-time female learners',
    status: 'Special Dedicated Batch',
    highlight: true,
  },
  {
    name: 'Afternoon Practical Lab Session',
    timing: '2:30 PM – 4:00 PM',
    targetAudience: 'School kids & self-paced practical project practice',
    status: 'Available',
  },
  {
    name: 'Late Afternoon Batch',
    timing: '4:30 PM – 6:00 PM',
    targetAudience: 'Students returning from college',
    status: 'Filling Fast',
  },
  {
    name: 'Evening Working Professionals Batch',
    timing: '6:00 PM – 7:30 PM',
    targetAudience: 'Office commuters & business owners',
    status: 'Filling Fast',
  },
  {
    name: 'Weekend Fast-Track Batch',
    timing: 'Saturday special sessions (by appointment)',
    targetAudience: 'Working professionals needing intensive modules',
    status: 'Available',
  },
];

// ============================================================
// COURSE TYPES & GOALS
// ============================================================
export type CourseType = 'short-term' | 'career';
export type CourseGoal = 'job' | 'business' | 'skill' | 'kids';

export interface Course {
  id: string;
  name: string;
  type: CourseType;
  goals: CourseGoal[];
  shortDesc: string;
  whoFor: string;
  topics: string[];
  durationPlaceholder: string;
  mode: string;
  certificate: string;
  whatsappMessage: string;
}

// Exactly 23 distinct courses from prompt:
// Short-term (12): Basic Computer, MS-Office, Advanced Tally with GST, GST, CCC, Typing (English and Marathi), Illustrator, Photoshop, HTML, CSS, Hardware, A+ and N+
// Career-objective (11): Software Development, DFA, Animation, AI & ML, Digital Marketing, Web & App Development, Ethical Hacking, AI Prompt Engineering, Data Science, Cyber Security, Graphic Designing
export const COURSES: Course[] = [
  // ─── SHORT-TERM COURSES (12) ───
  {
    id: 'basic-computer',
    name: 'Basic Computer',
    type: 'short-term',
    goals: ['kids', 'skill'],
    shortDesc: 'Start from absolute scratch: computer anatomy, Windows navigation, file management, and internet safety.',
    whoFor: 'Complete beginners of any age, housewives, school kids, and first-time computer users.',
    topics: [
      'Understanding PC hardware, CPU, mouse & keyboard controls',
      'Windows OS navigation, desktop personalization, and folder organisation',
      'Browsing the World Wide Web safely and searching with Google',
      'Setting up and writing professional emails via Gmail',
      'Pen drive data transfer, saving files, and antivirus basics',
      'Online bill payments, net banking security, and digital safety',
    ],
    durationPlaceholder: '4 to 6 Weeks (Fast-track available)',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certification of Computer Literacy & Basic Lab Proficiency',
    whatsappMessage: 'Hello! I want to enquire about the Basic Computer Course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'ms-office',
    name: 'MS-Office (Word, Excel, PowerPoint)',
    type: 'short-term',
    goals: ['job', 'business', 'skill'],
    shortDesc: 'Master Microsoft Word documents, Excel spreadsheets & formulas, and PowerPoint presentations for workplace readiness.',
    whoFor: 'College students, office assistants, job seekers, and business owners creating invoices.',
    topics: [
      'MS Word: Professional letter writing, tables, mail merge, formatting, resumes',
      'MS Excel: Data entry, SUM/AVERAGE/IF formulas, VLOOKUP, XLOOKUP',
      'MS Excel: Pivot Tables, interactive charts, filtering, conditional formatting',
      'MS PowerPoint: Slide layouts, transitions, business pitch decks',
      'Printing, PDF conversions, and collaborative Google Docs/Sheets',
    ],
    durationPlaceholder: '6 to 8 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'MS Office Specialist Practical Certificate',
    whatsappMessage: 'Hello! I want to enquire about the MS-Office (Word, Excel, PowerPoint) course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'advanced-tally-with-gst',
    name: 'Advanced Tally with GST',
    type: 'short-term',
    goals: ['job', 'business'],
    shortDesc: 'Complete industry accounting with TallyPrime, voucher entry, inventory tracking, GST calculation, and balance sheets.',
    whoFor: 'Commerce students, aspiring accountants, bookkeepers, and retail shop owners.',
    topics: [
      'Company creation, ledger groups, voucher entry (Sales, Purchase, Payment, Receipt)',
      'GST configuration: CGST, SGST, IGST calculation on goods and services',
      'Inventory management: Stock groups, units of measure, godowns',
      'E-way bills, E-invoicing, and GSTR-1, GSTR-3B report generation',
      'Bank reconciliation, Profit & Loss accounts, and Balance Sheet finalisation',
      'TallyPrime shortcuts, security controls, and audit trails',
    ],
    durationPlaceholder: '8 to 10 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Advanced TallyPrime with GST Industry Certificate',
    whatsappMessage: 'Hello! I want to enquire about the Advanced Tally with GST course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'gst',
    name: 'GST (Goods and Services Tax)',
    type: 'short-term',
    goals: ['job', 'business'],
    shortDesc: 'Focused legal and practical compliance training on GST laws, portals, return filing, and input tax credit (ITC).',
    whoFor: 'Accountants, tax consultants, CA interns, and business proprietors.',
    topics: [
      'GST concepts: Dual GST structure, tax rates, threshold limits & composition scheme',
      'GST registration process and portal navigation',
      'Input Tax Credit (ITC) rules, eligibility, and reconciliation (GSTR-2B vs 3B)',
      'Filing monthly returns: GSTR-1 (outward supplies) and GSTR-3B (tax payment)',
      'Generating E-way bills and complying with E-invoicing mandates',
      'Handling GST notices, penalties, and reverse charge mechanism (RCM)',
    ],
    durationPlaceholder: '4 to 6 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Practical GST Compliance & E-Filing',
    whatsappMessage: 'Hello! I want to enquire about the GST course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'ccc',
    name: 'CCC (Course on Computer Concepts)',
    type: 'short-term',
    goals: ['job', 'kids', 'skill'],
    shortDesc: 'Government-recognised foundational syllabus required for state government exams, clerical posts, and public recruitment.',
    whoFor: 'Aspirants preparing for government, banking, municipal, and clerical recruitment exams.',
    topics: [
      'Introduction to computers and GUI-based operating systems',
      'Word processing elements (formatting, tables, spell check)',
      'Spreadsheets: data manipulation and basic arithmetic functions',
      'Presentations: slide design and animation effects',
      'Internet, WWW, web browsers, search engines, and social media',
      'Digital financial services, UPI, Net banking, and e-Governance schemes',
      'Mock test practice and CCC exam question papers',
    ],
    durationPlaceholder: '6 to 8 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'CCC Exam Preparation & Institute Completion Certificate',
    whatsappMessage: 'Hello! I want to enquire about the CCC course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'typing-english-marathi',
    name: 'Typing (English and Marathi)',
    type: 'short-term',
    goals: ['job', 'skill'],
    shortDesc: 'Touch typing accuracy and speed training in English and Marathi (InScript / Remington) for government typing exams and offices.',
    whoFor: 'Government clerical candidates, court stenographer aspirants, data entry operators, and students.',
    topics: [
      'Ergonomic home row posture and touch-typing technique',
      'English typing speed building from 30 WPM to 40+ WPM',
      'Marathi typing using standard InScript and phonetic layouts',
      'Official letter formatting, statement typing, and passage tests',
      'Timed speed-building software with real-time error percentage tracking',
      'Preparation for GCC-TBC and government commercial certificate exams',
    ],
    durationPlaceholder: '2 to 3 Months (Continuous speed training)',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate of Typing Speed Proficiency (English & Marathi)',
    whatsappMessage: 'Hello! I want to enquire about English & Marathi Typing at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    type: 'short-term',
    goals: ['job', 'business', 'skill'],
    shortDesc: 'Master vector artwork, custom logo creation, typography, iconography, and print-ready digital branding.',
    whoFor: 'Creative students, social media content creators, aspiring brand designers, and print shop staff.',
    topics: [
      'Pen tool mastery: Bezier curves, anchor points, and shape drawing',
      'Logo design principles, geometric grid construction, and monograms',
      'Typography, font pairing, text effects, and path text',
      'Color palettes, gradients, mesh tool, and vector patterns',
      'Designing visiting cards, flyers, standees, and brochures for print',
      'Exporting SVG, EPS, high-res PDF, and web-optimised assets',
    ],
    durationPlaceholder: '6 to 8 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Adobe Illustrator Vector Design',
    whatsappMessage: 'Hello! I want to enquire about the Illustrator course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    type: 'short-term',
    goals: ['job', 'business', 'skill'],
    shortDesc: 'Professional photo editing, image manipulation, background removal, retouching, and social media banner design.',
    whoFor: 'Photographers, graphic designers, digital marketers, and photo studio operators.',
    topics: [
      'Layers, masks, blend modes, and non-destructive image editing',
      'Selection tools: Object selection, lasso, pen tool, and refine edge',
      'Portrait retouching: Healing brush, frequency separation, blemish removal',
      'Color grading, adjustment layers, curves, and photo composites',
      'Designing social media posts, YouTube thumbnails, and marketing banners',
      'Image resizing, compression, and print resolution standards (300 DPI)',
    ],
    durationPlaceholder: '6 to 8 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Adobe Photoshop & Digital Image Editing',
    whatsappMessage: 'Hello! I want to enquire about the Photoshop course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'html',
    name: 'HTML (HyperText Markup Language)',
    type: 'short-term',
    goals: ['job', 'kids', 'skill'],
    shortDesc: 'The foundation of the World Wide Web: build clean, accessible, semantic web pages with HTML5 standard tags.',
    whoFor: 'Absolute beginner coders, school/college students, and aspiring web developers.',
    topics: [
      'HTML document skeleton, head metadata, and character encoding',
      'Semantic tags: header, nav, main, section, article, footer',
      'Text formatting, headings, lists, tables, and hyperlinks',
      'Embedding images, audio, video, and responsive picture elements',
      'HTML5 form controls: inputs, select dropdowns, radio/checkboxes, validation',
      'SEO meta tags, open graph attributes, and web accessibility (a11y) basics',
    ],
    durationPlaceholder: '4 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in HTML5 Web Foundations',
    whatsappMessage: 'Hello! I want to enquire about the HTML course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'css',
    name: 'CSS (Cascading Style Sheets)',
    type: 'short-term',
    goals: ['job', 'kids', 'skill'],
    shortDesc: 'Transform plain HTML into gorgeous, responsive websites with CSS3 styling, Flexbox, Grid, and subtle animations.',
    whoFor: 'Beginner web designers, students with basic HTML knowledge, and UI enthusiasts.',
    topics: [
      'CSS selectors, specificity, cascade, and the box model (margin, padding, border)',
      'Modern layouts with CSS Flexbox: axis alignment, wrapping, flex items',
      'CSS Grid systems: rows, columns, template areas, and auto-fit grids',
      'Responsive web design with media queries for mobile, tablet, and desktop',
      'Typography, web fonts, shadows, gradients, and custom scrollbars',
      'Transitions, hover states, keyframe animations, and transform effects',
    ],
    durationPlaceholder: '4 to 6 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in CSS3 Responsive Web Styling',
    whatsappMessage: 'Hello! I want to enquire about the CSS course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'hardware',
    name: 'Hardware',
    type: 'short-term',
    goals: ['job', 'skill'],
    shortDesc: 'Hands-on computer assembling, motherboard diagnosis, processor socketing, RAM/SSD installation, and troubleshooting.',
    whoFor: 'Aspiring computer technicians, hardware shop staff, and students wanting hardware diagnostic skills.',
    topics: [
      'PC anatomy: Motherboard chipset, CPU sockets, RAM types (DDR4/DDR5), SSD/HDD',
      'SMPS power supply testing, wattage calculations, and cable routing',
      'Complete desktop computer assembling from scratch',
      'BIOS/UEFI setup, boot priority, overclocking safety, and firmware updates',
      'Windows OS installation, disk partitioning, driver configuration',
      'Diagnosing common hardware issues: Blue Screen (BSOD), overheating, beep codes',
    ],
    durationPlaceholder: '6 to 8 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Computer Hardware Assembly & Troubleshooting',
    whatsappMessage: 'Hello! I want to enquire about the Hardware course at Race Reddys Virar East. Please share batch timings and fee details.',
  },
  {
    id: 'a-plus-and-n-plus',
    name: 'A+ and N+',
    type: 'short-term',
    goals: ['job', 'skill'],
    shortDesc: 'Professional IT support and network administration syllabus aligned with industry benchmark certification standards.',
    whoFor: 'IT helpdesk technicians, system administrators, and graduates seeking IT infrastructure jobs.',
    topics: [
      'CompTIA A+ syllabus: Hardware components, mobile devices, OS troubleshooting',
      'Command-line utilities: CMD, PowerShell, ipconfig, ping, tracert, chkdsk',
      'CompTIA N+ syllabus: OSI model, TCP/IP protocols, IPv4 & IPv6 addressing, subnetting',
      'Cabling & connectors: Crimping RJ45 Ethernet cables, patch panels, switch configuration',
      'Router configuration, Wi-Fi security (WPA3), DHCP, DNS, and NAT protocols',
      'Network security, firewall configuration, remote desktop, and VPN setup',
    ],
    durationPlaceholder: '8 to 12 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in A+ (Hardware Support) and N+ (Networking)',
    whatsappMessage: 'Hello! I want to enquire about the A+ and N+ course at Race Reddys Virar East. Please share batch timings and fee details.',
  },

  // ─── CAREER-OBJECTIVE COURSES (11) ───
  {
    id: 'software-development',
    name: 'Software Development',
    type: 'career',
    goals: ['job'],
    shortDesc: 'Comprehensive coding career track covering core programming logic, algorithms, OOP, database design, and real-world project builds.',
    whoFor: 'BCA, BSc IT, engineering students, graduates, and career switchers wanting software developer jobs.',
    topics: [
      'Programming fundamentals: Variables, data types, control flow, loops, functions',
      'Object-Oriented Programming (OOP): Classes, inheritance, polymorphism, encapsulation',
      'Data Structures & Algorithms: Arrays, lists, stacks, queues, searching & sorting',
      'Relational Database Management with SQL (MySQL / PostgreSQL)',
      'Git version control, GitHub repositories, and collaborative branching workflows',
      'Building a complete end-to-end capstone software application',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Diploma in Software Development & Engineering Foundations',
    whatsappMessage: 'Hello! I want to enquire about the Software Development career course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'dfa',
    name: 'DFA (Diploma in Financial Accounting)',
    type: 'career',
    goals: ['job', 'business'],
    shortDesc: 'Complete corporate accounting diploma integrating Manual Accounting, Advanced TallyPrime, GST E-filing, Payroll, and Taxation.',
    whoFor: 'Commerce graduates, accountants seeking promotions, and small business managers.',
    topics: [
      'Fundamental principles of accounting, golden rules, journal entries & ledgers',
      'Trial Balance, Profit & Loss Accounts, and Balance Sheet finalisation',
      'TallyPrime with GST, Inventory control, cost centres, and multi-currency',
      'Payroll management in Tally: PF, ESI, TDS calculation, salary slips',
      'GST returns (GSTR-1, GSTR-3B) and online portal submission',
      'Income Tax fundamentals, TDS return filing, and audit documentation',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Professional Diploma in Financial Accounting (DFA)',
    whatsappMessage: 'Hello! I want to enquire about the DFA (Diploma in Financial Accounting) at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'animation',
    name: 'Animation',
    type: 'career',
    goals: ['job', 'skill'],
    shortDesc: 'Step into the creative world of 2D/3D animation, character rigging, motion timing, visual storytelling, and video production.',
    whoFor: 'Creative students, visual artists, aspiring animators, and game/multimedia enthusiasts.',
    topics: [
      'The 12 golden principles of animation (squash & stretch, anticipation, timing)',
      'Storyboarding, character concept sketch, and visual narrative planning',
      'Vector animation, digital puppets, and character rigging techniques',
      'Keyframe animation, lip-syncing with audio, and walk cycles',
      'Motion graphics for advertising, social media reels, and explainer videos',
      'Video editing, sound design integration, and rendering portfolio reels',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Diploma in Digital Animation & Motion Graphics',
    whatsappMessage: 'Hello! I want to enquire about the Animation course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'ai-ml',
    name: 'AI & ML',
    type: 'career',
    goals: ['job', 'skill'],
    shortDesc: 'Demystify Machine Learning and Artificial Intelligence with Python: linear models, classifiers, neural networks, and computer vision.',
    whoFor: 'Tech graduates, programmers, data analysts, and engineering students.',
    topics: [
      'Python for Machine Learning: NumPy arrays, Pandas DataFrames, Matplotlib',
      'Supervised Learning: Linear regression, logistic regression, decision trees',
      'Unsupervised Learning: K-Means clustering, PCA dimensionality reduction',
      'Model evaluation: Train-test split, cross-validation, precision, recall, F1 score',
      'Introduction to Neural Networks, Deep Learning, and TensorFlow/PyTorch concepts',
      'Deploying an ML model as a functional web application',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Applied AI & Machine Learning Foundations',
    whatsappMessage: 'Hello! I want to enquire about the AI & ML course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    type: 'career',
    goals: ['job', 'business'],
    shortDesc: 'Launch client campaigns with Search Engine Optimisation (SEO), Meta Ads, Google Search Ads, Social Media Marketing, and Analytics.',
    whoFor: 'Job seekers, marketing graduates, freelancers, and business owners wanting online customers.',
    topics: [
      'SEO fundamentals: Keyword research, on-page optimization, backlink strategies',
      'Local SEO & Google Business Profile optimization for Virar/Mumbai shops',
      'Meta Ads Manager: Facebook and Instagram lead generation and retargeting campaigns',
      'Google Ads: Search campaigns, PPC bidding, quality score, and conversion tracking',
      'Content marketing, Canva banner design, copy strategies, and email campaigns',
      'Google Analytics (GA4) traffic measurement and client ROI reporting',
    ],
    durationPlaceholder: '3 to 4 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Professional Diploma in Digital Marketing & Growth Strategy',
    whatsappMessage: 'Hello! I want to enquire about the Digital Marketing course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'web-and-app-development',
    name: 'Web & App Development',
    type: 'career',
    goals: ['job', 'business'],
    shortDesc: 'Full-stack development: build modern responsive web applications and mobile apps from database schema to cloud deployment.',
    whoFor: 'Aspiring web developers, full-stack engineers, and tech entrepreneurs.',
    topics: [
      'Frontend mastery: HTML5, CSS3, modern JavaScript (ES6+), and responsive UI',
      'Component-driven frontend architecture with React / Vue concepts',
      'Backend server development: Node.js, Express REST APIs, authentication (JWT)',
      'Database integration: MongoDB / PostgreSQL CRUD operations',
      'Mobile-first and hybrid mobile app foundations with web technologies',
      'Cloud deployment (Vercel, Netlify, Render), domains, and live project launch',
    ],
    durationPlaceholder: '5 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Professional Diploma in Full-Stack Web & App Development',
    whatsappMessage: 'Hello! I want to enquire about the Web & App Development course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking',
    type: 'career',
    goals: ['job', 'skill'],
    shortDesc: 'Learn defensive and offensive cybersecurity techniques, penetration testing, vulnerability assessment, and network defence.',
    whoFor: 'IT students, networking professionals, and security career aspirants.',
    topics: [
      'Ethical hacking laws, compliance, and cybercrime jurisdiction in India',
      'Reconnaissance and footprinting: Nmap port scanning, OSINT techniques',
      'Network penetration testing: Wireshark packet analysis, man-in-the-middle attacks',
      'Web application vulnerabilities: OWASP Top 10 (SQL injection, XSS, CSRF)',
      'Wireless security testing, password auditing tools, and security hardening',
      'Vulnerability scanning reports and client remediation guidelines',
    ],
    durationPlaceholder: '4 to 5 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Ethical Hacking & Penetration Testing Basics',
    whatsappMessage: 'Hello! I want to enquire about the Ethical Hacking course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'ai-prompt-engineering',
    name: 'AI Prompt Engineering',
    type: 'career',
    goals: ['job', 'business', 'skill'],
    shortDesc: 'Master generative AI workflows with ChatGPT, Gemini, Midjourney, and Claude to multiply work productivity by 10x.',
    whoFor: 'Working professionals, content writers, business owners, students, and consultants.',
    topics: [
      'How Large Language Models (LLMs) work: Tokens, temperature, and hallucinations',
      'Prompt crafting frameworks: Few-shot prompting, chain-of-thought, role persona prompts',
      'Automating office work: Drafting reports, summarizing long documents, creating emails',
      'Coding assistance: Writing, debugging, and explaining code with AI',
      'AI for image generation: Crafting prompts for Midjourney, DALL-E, and marketing art',
      'Building custom GPTs, workflow automations, and AI ethical best practices',
    ],
    durationPlaceholder: '4 to 6 Weeks',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in AI Prompt Engineering & Productivity Workflows',
    whatsappMessage: 'Hello! I want to enquire about the AI Prompt Engineering course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    type: 'career',
    goals: ['job', 'skill'],
    shortDesc: 'Extract valuable business insights from raw data: Python programming, exploratory data analysis, statistical modeling, and dashboards.',
    whoFor: 'Graduates in math, stats, engineering, commerce, or anyone seeking high-paying data analyst jobs.',
    topics: [
      'Python for data analysis: Data structures, NumPy, Pandas wrangling & cleaning',
      'Data visualization: Matplotlib, Seaborn, interactive Power BI / Tableau dashboards',
      'Statistical inference: Probability distributions, hypothesis testing, correlation analysis',
      'Feature engineering, handling missing data, outlier detection, scaling',
      'Predictive modeling algorithms: Regression, classification, customer segmentation',
      'Presenting data stories and insights to business stakeholders',
    ],
    durationPlaceholder: '5 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Professional Diploma in Practical Data Science & Analytics',
    whatsappMessage: 'Hello! I want to enquire about the Data Science course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    type: 'career',
    goals: ['job', 'skill'],
    shortDesc: 'Protect enterprise servers, corporate data, and personal devices from malware, ransomware, identity theft, and cyber threats.',
    whoFor: 'System administrators, IT graduates, and security operations center (SOC) aspirants.',
    topics: [
      'Cybersecurity landscape: Threat actors, attack vectors, defense in depth',
      'Operating system hardening: Windows Server & Linux security policies',
      'Network defense: Firewalls, IDS/IPS, secure network segmentation, and zero trust',
      'Cryptography: Symmetric vs asymmetric encryption, hashing, SSL/TLS certificates',
      'Incident response and digital forensics: Log analysis, malware triage',
      'Security compliance, data protection standards, and ISO 27001 awareness',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Certificate in Enterprise Cyber Security & System Defense',
    whatsappMessage: 'Hello! I want to enquire about the Cyber Security course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    type: 'career',
    goals: ['job', 'business', 'skill'],
    shortDesc: 'Comprehensive professional design career diploma covering Photoshop, Illustrator, CorelDraw/InDesign, visual identity, and advertising.',
    whoFor: 'Creative students, freelancers, print shop operators, and advertising agency aspirants.',
    topics: [
      'Design fundamentals: Color theory, typography hierarchy, layout composition',
      'Adobe Photoshop: Image manipulation, photo composition, digital matte painting',
      'Adobe Illustrator: Vector logo creation, icon design, brand identity systems',
      'CorelDraw / InDesign: Multi-page catalogues, newspapers, packaging design',
      'Social media creative campaigns, print specifications, pre-press checks',
      'Building a professional physical and Behance design portfolio',
    ],
    durationPlaceholder: '4 to 6 Months',
    mode: '100% In-Person Practical Lab (Virar East)',
    certificate: 'Professional Diploma in Graphic Designing & Visual Communication',
    whatsappMessage: 'Hello! I want to enquire about the Graphic Designing career course at Race Reddys Virar East. Please share syllabus, fees, and batch details.',
  },
];

// ============================================================
// FREQUENTLY ASKED QUESTIONS (Friendly, warm, local Virar context)
// ============================================================
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_LIST: FAQItem[] = [
  {
    question: 'Where exactly is the institute located in Virar?',
    answer:
      'We are located at 202, 2nd Floor, Raut Arcade, directly opposite the Virar East Railway Station subway. If you step out of Platform 2 or take the railway subway towards the East, Raut Arcade is just a 2-minute walk away. You do not need to take an auto or bus.',
  },
  {
    question: 'I have never touched a computer before. Can I join?',
    answer:
      'Yes, absolutely! Many of our students are first-time computer users, including homemakers, school students, and seniors. Our instructors teach in simple Hindi, Marathi, or English with immense patience. You get your own computer to practice right from day one.',
  },
  {
    question: 'How does the 50% discount and Free Basic Computer offer work?',
    answer:
      'For our current admission batch, we are offering up to 50% fee concession on standard course charges. Additionally, when you enroll in any career-objective program (such as Software Development, DFA, Web Development, or Digital Marketing), you get the complete Basic Computer foundation course completely free of charge. Please confirm eligibility and seat availability with the institute office.',
  },
  {
    question: 'Are there separate batches for ladies or housewives?',
    answer:
      'Yes! We run a dedicated, comfortable ladies’ batch between 12:30 PM and 2:00 PM (and 2:30 PM to 4:00 PM). It provides a quiet, supportive environment where homemakers and women can learn at their own pace without hesitation.',
  },
  {
    question: 'Can I attend a free demo class before paying fees?',
    answer:
      'Yes. We strongly encourage every student and parent to book a free demo class. You can sit in the lab, observe the teaching method, interact with the instructor, and then make a confident decision.',
  },
  {
    question: 'What if I have doubts after completing my course?',
    answer:
      'Race Reddys offers Free Lifetime Doubt-Solving Support. Even months or years after completing your training, if you face a difficulty with Tally, coding, GST filing, or design at your workplace, you are welcome to visit the lab and ask our teachers for guidance.',
  },
  {
    question: 'Do you offer Marathi typing as well as English typing?',
    answer:
      'Yes. We provide complete touch-typing training for both English and Marathi (including standard InScript and Remington keyboard layouts), which is essential for Maharashtra government exams, clerical posts, and legal offices.',
  },
  {
    question: 'What are the batch timings?',
    answer:
      'Batches run from Monday to Saturday, between 9:00 AM and 7:00 PM. We offer early morning slots (7:30 AM onwards) for college goers, afternoon slots for women, and evening slots (until 7:30 PM) for working commuters.',
  },
];

// ============================================================
// OWNER'S CHECKLIST OF PLACEHOLDERS TO PROVIDE REAL CONTENT
// (Documented for seamless handoff to the institute owner)
// ============================================================
export const PLACEHOLDERS_CHECKLIST = [
  {
    item: 'Lab Photographs',
    location: 'About & Home Page lab showcase slots',
    currentStatus: 'Visual photo slot with clear dimension instructions (recommended 1200x800px, natural lighting showing students on workstations)',
    actionRequired: 'Provide 3-4 genuine, unedited photos of students practicing in the Raut Arcade 2nd floor lab.',
  },
  {
    item: 'Faculty Headshots & Bios',
    location: 'About Page faculty section',
    currentStatus: 'Clearly marked placeholder card showing teaching experience and subjects',
    actionRequired: 'Provide names, qualifications (e.g. MCA, B.E., M.Com), and photos of the primary instructors.',
  },
  {
    item: 'Exact Fee Schedule & Installment Slabs',
    location: 'Batches & Fees / WhatsApp inquiry response',
    currentStatus: 'Handled via direct "Ask for Fee Details" CTA to enable personalized installment plans and 50% discount calculation',
    actionRequired: 'Provide final fee chart if institute desires publishing exact numeric fees publicly on the website.',
  },
  {
    item: 'Real Student Reviews & Placement Photos',
    location: 'Student Success / Gallery page',
    currentStatus: 'Authentic "Share your story" invitation box with zero fake testimonials, zero invented student names, and zero fake stats',
    actionRequired: 'Collect authentic written feedback, photos, and job placement letters from real alumni to showcase.',
  },
  {
    item: 'Exact Course Durations & Batch Start Dates',
    location: 'Course detail cards and drawer',
    currentStatus: 'Realistic industry benchmark duration range (e.g., 4-6 weeks for short-term, 4-6 months for career diploma) with note that fast-track is available',
    actionRequired: 'Confirm if specific calendar batch dates should be listed for upcoming admissions.',
  },
];

// ============================================================
// SITE CONFIGURATION — RACE ADVANCED COMPUTER EDUCATION
// All business facts, courses, batches, and offers live here.
// Non-developers can edit values here safely.
// ============================================================

export const SITE_CONFIG = {
  name: 'RACE',
  fullName: 'RACE – Advanced Computer Education',
  tagline: 'Practical IT & Computer Training',
  motto: 'Ab Mumbai jaane ki zarurat nahi — Learn quality IT skills right at your station.',
  description:
    'Hands-on computer training institute opposite Virar East railway station. 100% practical lab training, certification, placement assistance, flexible morning/evening batches, and special batches for ladies & students.',

  contact: {
    phone: '9794323963',
    phoneRaw: '+919794323963',
    phoneDisplay: '+91 97943 23963',
    whatsapp: 'https://wa.me/919794323963',
    whatsappNumber: '919794323963',
    whatsappDefaultMessage: encodeURIComponent('Hello! I am interested in admissions at RACE.'),
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
    ogImage: '/final-logo-1.png',
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
      'Special community subsidy for local students, housewives, and early batch registrations.',
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

export interface CourseProject {
  title: string;
  desc: string;
  tech: string;
  category?: string;
}

export interface CourseModule {
  title: string;
  duration?: string;
  topics: string[];
}

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

  // Career & Project-Oriented Enhancements (ITVedant Pattern)
  badge?: string;
  rating?: string;
  reviewsCount?: string;
  hours?: string;
  caseStudiesCount?: string;
  tools?: string[];
  projects?: CourseProject[];
  modules?: CourseModule[];
  careerRoles?: string[];
  avgSalary?: string;
  highlights?: string[];
  aliases?: string[];
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certification of Computer Literacy & Basic Lab Proficiency',
    whatsappMessage: 'Hello! I want to enquire about the Basic Computer Course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'MS Office Specialist Practical Certificate',
    whatsappMessage: 'Hello! I want to enquire about the MS-Office (Word, Excel, PowerPoint) course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Advanced TallyPrime with GST Industry Certificate',
    whatsappMessage: 'Hello! I want to enquire about the Advanced Tally with GST course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in Practical GST Compliance & E-Filing',
    whatsappMessage: 'Hello! I want to enquire about the GST course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'CCC Exam Preparation & Institute Completion Certificate',
    whatsappMessage: 'Hello! I want to enquire about the CCC course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate of Typing Speed Proficiency (English & Marathi)',
    whatsappMessage: 'Hello! I want to enquire about English & Marathi Typing at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in Adobe Illustrator Vector Design',
    whatsappMessage: 'Hello! I want to enquire about the Illustrator course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in Adobe Photoshop & Digital Image Editing',
    whatsappMessage: 'Hello! I want to enquire about the Photoshop course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in HTML5 Web Foundations',
    whatsappMessage: 'Hello! I want to enquire about the HTML course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in CSS3 Responsive Web Styling',
    whatsappMessage: 'Hello! I want to enquire about the CSS course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in Computer Hardware Assembly & Troubleshooting',
    whatsappMessage: 'Hello! I want to enquire about the Hardware course at RACE. Please share batch timings and fee details.',
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
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in A+ (Hardware Support) and N+ (Networking)',
    whatsappMessage: 'Hello! I want to enquire about the A+ and N+ course at RACE. Please share batch timings and fee details.',
  },

  // ─── FLAGSHIP CAREER & PROJECT-ORIENTED PROGRAMS (ITVedant Style) ───
  {
    id: 'data-science-and-ai',
    aliases: ['data-science', 'ai-ml'],
    name: 'Data Science & Analytics with AI',
    type: 'career',
    badge: "Master's Career Program · AI Integrated",
    goals: ['job', 'skill'],
    rating: '4.9/5',
    reviewsCount: '5,200+ Alumni',
    durationPlaceholder: '6 Months (280+ Live Session Hours)',
    hours: '280+ Practical Lab Hours',
    caseStudiesCount: '30+ Industry Case Studies & Projects',
    avgSalary: '₹4.5 LPA – ₹9.5 LPA',
    shortDesc: 'Master Python, SQL, Power BI, Advanced Machine Learning, Deep Learning, and Generative AI. Work on 30+ live business case studies with 100% practical lab training.',
    whoFor: 'Graduates, Engineers, Commerce/Arts students, IT and non-IT professionals looking to transition into high-growth Data Science, BI, and AI engineering roles.',
    tools: [
      'Python', 'SQL', 'Power BI', 'Tableau', 'Advanced Excel', 'Pandas', 'NumPy',
      'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Apache Spark', 'Hadoop', 'ChatGPT', 'TensorFlow'
    ],
    highlights: [
      '30+ Live Industry Case Studies',
      '10+ Modern Data & AI Tools Mastered',
      '1:1 Dedicated Desktop Workstation (No Sharing)',
      'Dual Recognized Certification (ISO 9001:2015 & Course Diploma)',
      '100% Interview Prep, Resume Building & Mock Rounds',
      'Zero Mumbai Commute — Direct Station Subway Access'
    ],
    projects: [
      {
        title: 'Global E-Commerce Sales BI Dashboard',
        desc: 'Constructed an interactive multi-page Power BI dashboard connected to live SQL relational databases to visualize customer retention, SKU margins, and regional sales velocity.',
        tech: 'Power BI, SQL, Advanced Excel'
      },
      {
        title: 'Predictive Customer Churn Classifier',
        desc: 'Engineered an end-to-end Machine Learning classification pipeline using Pandas, NumPy, and Scikit-Learn to forecast customer churn with 89% precision.',
        tech: 'Python, Scikit-Learn, Pandas'
      },
      {
        title: 'Healthcare Diagnostics Classification AI',
        desc: 'Implemented deep learning neural networks and computer vision to automate medical diagnostic pattern recognition and structured report categorisation.',
        tech: 'Python, TensorFlow, Deep Learning'
      },
      {
        title: 'Big Data Streaming Pipeline',
        desc: 'Configured high-volume distributed data processing with Apache Spark and Hadoop for real-time financial market analytics and transaction fraud detection.',
        tech: 'Apache Spark, Hadoop, PySpark'
      }
    ],
    modules: [
      {
        title: 'Module 1: Python for Data Science & SQL Architecture',
        duration: '60 Hours',
        topics: [
          'Python syntax, data types, loops, functions, and Object-Oriented Programming (OOP)',
          'Data manipulation with NumPy arrays and multi-dimensional indexing',
          'Relational database architecture: SQL queries, joins, aggregations, subqueries, and window functions',
          'Database schema design, normalization, and connecting Python with live SQL databases'
        ]
      },
      {
        title: 'Module 2: Exploratory Data Analysis & Business Intelligence (Power BI & Tableau)',
        duration: '55 Hours',
        topics: [
          'Advanced Excel: Pivot tables, VLOOKUP/XLOOKUP, and business financial modelling',
          'Power BI: DAX formulas, interactive relationship models, KPI cards, and custom reporting',
          'Tableau visual storytelling, dynamic filters, and executive dashboard delivery',
          'Data visualization aesthetics using Matplotlib, Seaborn, and statistical heatmaps'
        ]
      },
      {
        title: 'Module 3: Machine Learning & Predictive Modeling',
        duration: '65 Hours',
        topics: [
          'Supervised Learning: Linear Regression, Logistic Regression, Decision Trees, Random Forests, XGBoost',
          'Unsupervised Learning: K-Means clustering, hierarchical clustering, and PCA dimensionality reduction',
          'Model evaluation metrics: Confusion matrix, Precision, Recall, F1 Score, and ROC-AUC curves',
          'Hyperparameter tuning, cross-validation, and pipeline building with Scikit-Learn'
        ]
      },
      {
        title: 'Module 4: Deep Learning, NLP & Generative AI',
        duration: '50 Hours',
        topics: [
          'Neural network foundations: Perceptrons, activation functions, backpropagation, and loss functions',
          'Natural Language Processing (NLP): Tokenization, TF-IDF, sentiment analysis, and word embeddings',
          'Generative AI workflows: Prompt engineering, LLM fine-tuning concepts, and integrating OpenAI/Claude APIs',
          'Computer vision fundamentals and image classification using convolutional layers'
        ]
      },
      {
        title: 'Module 5: Big Data Engineering & Capstone Portfolio',
        duration: '50 Hours',
        topics: [
          'Introduction to Big Data ecosystems: Hadoop distributed architecture and HDFS',
          'PySpark distributed processing, DataFrame transformations, and Spark SQL',
          'Building end-to-end industry capstone projects with full documentation and GitHub hosting',
          'Technical mock interviews, corporate resume structuring, and recruiter showcase preparation'
        ]
      }
    ],
    careerRoles: [
      'Data Scientist', 'Data Analyst', 'Business Intelligence (BI) Analyst',
      'Machine Learning Associate', 'AI Data Specialist', 'Python Data Engineer'
    ],
    topics: [
      'Python programming, NumPy arrays, Pandas DataFrames & statistical analysis',
      'SQL querying, database joins, window functions, and schema architecture',
      'Power BI DAX formulas, interactive KPI dashboards, and Tableau visual storytelling',
      'Supervised & Unsupervised Machine Learning (Regression, Classification, Clustering)',
      'Deep Learning, Neural Networks, NLP text processing, and Generative AI workflows',
      'Big Data processing with Apache Spark, Hadoop, and portfolio capstone builds'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Data Science & Analytics with AI',
    whatsappMessage: 'Hello! I want to enquire about the Data Science & Analytics with AI career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'full-stack-developer-course',
    aliases: ['software-development', 'web-and-app-development'],
    name: 'Full Stack Development',
    type: 'career',
    badge: 'Master Software Engineering Track',
    goals: ['job', 'skill'],
    rating: '4.9/5',
    reviewsCount: '6,400+ Alumni',
    durationPlaceholder: '6 Months (300+ Live Lab Hours)',
    hours: '300+ Practical Lab Hours',
    caseStudiesCount: '30+ Web Projects & Case Studies',
    avgSalary: '₹4.2 LPA – ₹9.0 LPA',
    shortDesc: 'Project-First Full Stack software development covering Modern JavaScript, React.js, Node.js, Express, MongoDB, SQL, and Cloud Deployment. Build real web apps from scratch.',
    whoFor: 'Aspiring software engineers, college students (BCA, BSc IT, BE, BTech), career changers from non-coding fields, and self-taught coders wanting job-ready portfolio projects.',
    tools: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js',
      'MongoDB', 'MySQL', 'Git & GitHub', 'Postman', 'TailwindCSS', 'Redux Toolkit', 'Docker', 'REST APIs'
    ],
    highlights: [
      '30+ Industry Web Projects & Case Studies',
      'Production-Grade MERN Architecture',
      '100% In-Person Coding at Station Lab',
      'GitHub Portfolio & Clean Code Reviews',
      'Technical Interview Question Bank',
      'Placement Drives Across Mumbai MMR'
    ],
    projects: [
      {
        title: 'BiteBox - Full Stack Food Ordering Application',
        desc: 'Developed a production-ready food delivery portal with dynamic menu filtering, cart state management with Redux, and user authentication.',
        tech: 'React.js, Node.js, Express, MongoDB, TailwindCSS'
      },
      {
        title: 'DevConnect - Tech Professional Network',
        desc: 'Engineered a LinkedIn-style networking portal featuring developer portfolios, post feeds, comments, and real-time MongoDB database syncing.',
        tech: 'MERN Stack, JWT Auth, REST APIs'
      },
      {
        title: 'StreamHub - Live Video & Interactive Community',
        desc: 'Created a responsive video streaming and content delivery web platform using React, Node.js microservices, and third-party media APIs.',
        tech: 'React.js, Node.js, Cloud Storage'
      },
      {
        title: 'Secure PayGate - Payment Gateway Integration',
        desc: 'Implemented end-to-end checkout with Razorpay/Stripe API, JWT token validation, order tracking, and automated PDF invoice generation.',
        tech: 'Node.js, Express, Stripe/Razorpay API'
      }
    ],
    modules: [
      {
        title: 'Web Design',
        duration: '5.4 Weeks',
        topics: [
          'Weaving the World Wide Web',
          'Text Formatting tags',
          'HTML structures',
          'Transformers of the Web (CSS)',
          'Unlocking creative toolbox (CSS Properties)',
          'Responsive Utilities',
          'Bootstrap & Tailwind Layouts',
          'Introduction to Javascript',
          'Conditional and Control Statements',
          'Javascript Function',
          'Javascript Objects',
          'Document Object Model (DOM)',
          'Modern Javascript (ES6+)'
        ]
      },
      {
        title: 'React',
        duration: '3 Weeks',
        topics: [
          'React Component Architecture & JSX',
          'State Management with Hooks (useState, useEffect)',
          'Component Lifecycle & Event Handling',
          'Single Page Applications (SPA) with React Router',
          'Context API & Global State Management',
          'Form Handling, Validation & Formik',
          'Redux Toolkit & Asynchronous Thunks',
          'Consuming REST APIs with Axios'
        ]
      },
      {
        title: 'SQL',
        duration: '4.4 Weeks',
        topics: [
          'Relational Database Management Concepts',
          'SQL DDL, DML, and DCL Operations',
          'Filtering, Sorting & Group By Clauses',
          'Mastering SQL Joins (Inner, Left, Right, Full)',
          'Aggregations, Subqueries & Nested Queries',
          'Database Normalization (1NF, 2NF, 3NF)',
          'Stored Procedures, Triggers & Views',
          'Indexing Strategies & Performance Optimization'
        ]
      },
      {
        title: 'Java',
        duration: '6.4 Weeks',
        topics: [
          'Java Environment, JVM, JRE & JDK Setup',
          'Variables, Data Types & Operators',
          'Control Statements, Loops & Branching',
          'Object-Oriented Programming (OOP) Principles',
          'Inheritance, Polymorphism, Encapsulation & Abstraction',
          'Exception Handling (Try-Catch, Finally, Custom)',
          'Java Collections Framework (List, Set, Map)',
          'Multithreading, Concurrency & Stream API',
          'Java Database Connectivity (JDBC Architecture)'
        ]
      },
      {
        title: 'Spring Boot',
        duration: '5.6 Weeks',
        topics: [
          'Spring Framework Architecture & IoC Container',
          'Dependency Injection & Spring Beans',
          'Building RESTful APIs with Spring Boot',
          'Spring Data JPA, Hibernate ORM & Entity Mappings',
          'Spring Security & JWT Token Authentication',
          'Microservices Architecture & API Gateway',
          'Docker Containerization for Spring Boot',
          'Unit Testing with JUnit 5 & Mockito',
          'AWS Cloud Deployment & Production Monitoring'
        ]
      }
    ],
    careerRoles: [
      'Full Stack Developer', 'React Frontend Developer', 'Node.js Backend Developer',
      'Software Engineer', 'MERN Stack Developer', 'Web Application Engineer'
    ],
    topics: [
      'HTML5, modern CSS3, responsive layouts, and TailwindCSS design systems',
      'Deep dive into JavaScript (ES6+), asynchronous programming & DOM architecture',
      'React.js SPA development, hooks, state management, and Redux Toolkit',
      'Backend REST API engineering using Node.js, Express, and security middleware',
      'NoSQL (MongoDB) and Relational (MySQL) database design and queries',
      'Git workflows, Docker containerization, cloud deployment, and portfolio builds'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Full Stack Software Development',
    whatsappMessage: 'Hello! I want to enquire about the Full Stack Development career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'devops-with-aws-course',
    name: 'DevOps with AWS',
    type: 'career',
    badge: 'Cloud Architecture & Automation Track',
    goals: ['job', 'skill'],
    rating: '4.9/5',
    reviewsCount: '3,800+ Alumni',
    durationPlaceholder: '5 to 6 Months (240+ Live Lab Hours)',
    hours: '240+ Practical Lab Hours',
    caseStudiesCount: '12+ Enterprise CI/CD & Cloud Deployments',
    avgSalary: '₹5.0 LPA – ₹11.0 LPA',
    shortDesc: 'Master Linux administration, AWS Cloud services, CI/CD pipelines with Jenkins & GitHub Actions, Docker containerization, Kubernetes orchestration, and Terraform Infrastructure as Code.',
    whoFor: 'IT support engineers, system administrators, software developers, and engineering graduates wanting to enter high-paying cloud and infrastructure automation roles.',
    tools: [
      'AWS (EC2, S3, VPC, EKS)', 'Linux / Bash', 'Git & GitHub', 'Docker', 'Kubernetes',
      'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Maven'
    ],
    highlights: [
      '12+ Enterprise Deployment Labs',
      'AWS Certified Curriculum Pattern',
      'Hands-On Terminal Machine at Virar East Lab',
      'Production Cloud Infrastructure Case Studies',
      'DevOps Resume & Scenario Mock Interviews',
      'Direct Train Station Access for Working Professionals'
    ],
    projects: [
      {
        title: 'CloudScale - Automated Multi-Tier AWS Infrastructure',
        desc: 'Scripted complete multi-region VPC networking, private subnets, auto-scaling groups, and Application Load Balancers using Terraform Infrastructure as Code (IaC).',
        tech: 'Terraform, AWS VPC, EC2, ALB'
      },
      {
        title: 'ShipFast - Zero-Downtime Automated CI/CD Pipeline',
        desc: 'Built automated Jenkins pipeline triggering automated testing, Docker image creation, security scanning, and container registry publishing.',
        tech: 'Jenkins, Docker, GitHub Actions, Maven'
      },
      {
        title: 'KubeGrid - Enterprise Microservices on AWS EKS',
        desc: 'Deployed scalable microservices on Kubernetes with automated rolling updates, pod horizontal auto-scaling (HPA), and ingress controllers.',
        tech: 'Kubernetes, AWS EKS, Kubectl, Docker'
      },
      {
        title: 'ObservaMetrics - Real-Time Observability Dashboard',
        desc: 'Configured Prometheus metrics scraping and Grafana dashboards for cluster health, server resource utilization, and proactive Slack alerts.',
        tech: 'Prometheus, Grafana, AWS CloudWatch'
      }
    ],
    modules: [
      {
        title: 'Module 1: Linux Administration & Shell Scripting',
        duration: '40 Hours',
        topics: [
          'Linux directory hierarchy, user permissions, process management, and package systems',
          'Networking commands, ports, DNS lookup, SSH key configuration, and firewall rules',
          'Automated Bash scripting, cron job scheduling, and server health check scripts'
        ]
      },
      {
        title: 'Module 2: Core AWS Cloud Architecture',
        duration: '55 Hours',
        topics: [
          'AWS global infrastructure, regions, availability zones, and IAM security governance',
          'VPC networking: Public/private subnets, NAT Gateways, Route Tables, and Security Groups',
          'Compute & Storage: EC2 instance lifecycle, EBS volumes, S3 buckets, and lifecycle policies',
          'High Availability: Auto-scaling groups, Elastic Load Balancers (ALB/NLB), and Route 53 DNS'
        ]
      },
      {
        title: 'Module 3: Continuous Integration & Continuous Deployment (CI/CD)',
        duration: '50 Hours',
        topics: [
          'Git collaborative branching models (GitFlow, feature branches, pull requests)',
          'Jenkins master-slave architecture, declarative pipelines, and webhook triggers',
          'Automated testing integration, Maven builds, and GitHub Actions CI workflows'
        ]
      },
      {
        title: 'Module 4: Containerization & Kubernetes Orchestration',
        duration: '55 Hours',
        topics: [
          'Docker architecture: Images, containers, multi-stage Dockerfiles, and Docker Compose',
          'Container networking, storage volumes, and publishing images to Amazon ECR',
          'Kubernetes core concepts: Pods, Deployments, ReplicaSets, Services, and ConfigMaps',
          'Deploying and managing production workloads on AWS Elastic Kubernetes Service (EKS)'
        ]
      },
      {
        title: 'Module 5: Infrastructure as Code (Terraform) & Monitoring',
        duration: '40 Hours',
        topics: [
          'Terraform HCL syntax, state management, providers, modules, and plan/apply workflows',
          'Ansible playbooks for automated configuration management and server hardening',
          'Observability setup: Prometheus metrics, node exporters, and custom Grafana dashboards'
        ]
      }
    ],
    careerRoles: [
      'DevOps Engineer', 'Cloud Engineer (AWS)', 'Site Reliability Engineer (SRE)',
      'Build & Release Engineer', 'Infrastructure Automation Engineer', 'Cloud Operations Associate'
    ],
    topics: [
      'Linux system administration, shell scripting, and server security hardening',
      'AWS Cloud computing: VPC networking, EC2, S3, IAM, and High-Availability design',
      'CI/CD pipeline automation using Jenkins, Maven, and GitHub Actions',
      'Containerization with Docker and multi-container apps with Docker Compose',
      'Cluster orchestration with Kubernetes and AWS Elastic Kubernetes Service (EKS)',
      'Infrastructure as Code (Terraform) and Prometheus/Grafana monitoring'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in DevOps & AWS Cloud Engineering',
    whatsappMessage: 'Hello! I want to enquire about the DevOps with AWS career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'digital-marketing-course',
    aliases: ['digital-marketing'],
    name: 'Digital Marketing with AI',
    type: 'career',
    badge: 'Performance Marketing & AI Growth Track',
    goals: ['job', 'business', 'skill'],
    rating: '4.8/5',
    reviewsCount: '4,700+ Alumni',
    durationPlaceholder: '4 to 5 Months (200+ Live Lab Hours)',
    hours: '200+ Practical Lab Hours',
    caseStudiesCount: '15+ Live Brand Campaigns & Portfolios',
    avgSalary: '₹3.5 LPA – ₹7.5 LPA',
    shortDesc: 'Learn data-driven marketing: SEO, Google Ads (Search & Display), Meta Ads Manager, Content Marketing, WordPress Website creation, GA4 Analytics, and Generative AI marketing workflows.',
    whoFor: 'Job seekers, creative graduates, business owners, freelancers, and entrepreneurs who want to generate leads, scale brand visibility, and master corporate digital campaigns.',
    tools: [
      'Google Ads', 'Meta Ads Manager', 'Google Analytics 4 (GA4)', 'Google Search Console',
      'WordPress', 'Elementor', 'Canva Pro', 'ChatGPT / Gemini', 'Mailchimp', 'SEMrush', 'YouTube Studio'
    ],
    highlights: [
      '15+ Live Brand Case Studies',
      'Manage Real Advertising Budgets',
      'Live WordPress Digital Hub Creation',
      'Google & Meta Certified Guidance',
      'Generative AI for Copywriting & Art',
      '100% Placement & Agency Connections'
    ],
    projects: [
      {
        title: 'Live Brand Digital Web Presence',
        desc: 'Designed and deployed a live commercial WordPress website using Elementor with on-page SEO, speed optimization, and lead capture forms.',
        tech: 'WordPress, Elementor, Technical SEO'
      },
      {
        title: 'High-Conversion Google Search & PPC Campaign',
        desc: 'Built keyword clusters, ad copy variants, negative keyword lists, and bidding strategies with conversion tracking.',
        tech: 'Google Ads, Search Console, GA4'
      },
      {
        title: 'Meta Multi-Stage Social Acquisition Funnel',
        desc: 'Formulated awareness, engagement, and retargeting custom audience funnels on Facebook and Instagram Ads Manager.',
        tech: 'Meta Ads Manager, Custom Audiences, Pixel'
      },
      {
        title: 'AI Content & Organic Search Growth Strategy',
        desc: 'Executed an end-to-end organic ranking strategy leveraging AI tools for topic research, content drafting, backlink audits, and GA4 tracking.',
        tech: 'ChatGPT, SEMrush, Google Analytics 4'
      }
    ],
    modules: [
      {
        title: 'Module 1: Digital Strategy & WordPress Website Design',
        duration: '40 Hours',
        topics: [
          'Domain and hosting setup, DNS records, SSL installation, and WordPress dashboard',
          'Elementor visual page builder, mobile responsive design, and conversion-optimized landing pages',
          'Lead capture forms, WhatsApp chat integration, and call-to-action placement'
        ]
      },
      {
        title: 'Module 2: Search Engine Optimization (SEO)',
        duration: '45 Hours',
        topics: [
          'Keyword research frameworks, search intent, search volume analysis, and competitor gap audits',
          'On-Page SEO: Title tags, meta descriptions, heading structures, image alt tags, and internal linking',
          'Technical SEO: Core Web Vitals, XML sitemaps, robots.txt, schema markup, and crawlability',
          'Off-Page SEO: High-authority backlinks, guest posting, and local Google Business Profile ranking'
        ]
      },
      {
        title: 'Module 3: Performance Marketing (Google Ads & PPC)',
        duration: '45 Hours',
        topics: [
          'Google Search campaigns: Match types, negative keywords, Quality Score, and Ad Rank mechanics',
          'Display Network, YouTube video ads, Performance Max campaigns, and remarketing lists',
          'Conversion tracking setup via Google Tag Manager and budget bidding optimization'
        ]
      },
      {
        title: 'Module 4: Social Media Strategy & Meta Paid Ads',
        duration: '40 Hours',
        topics: [
          'Organic brand building on Instagram, LinkedIn, and YouTube with content calendars',
          'Meta Business Suite, Meta Pixel installation, Standard Events, and custom conversion events',
          'Building cold, warm, and hot retargeting audiences with Lookalike models'
        ]
      },
      {
        title: 'Module 5: Generative AI for Marketers & Web Analytics (GA4)',
        duration: '30 Hours',
        topics: [
          'ChatGPT prompt engineering for ad headlines, social posts, video scripts, and marketing emails',
          'Canva Pro design workflows for high-CTR ad creatives and social carousels',
          'Google Analytics 4 (GA4): User journeys, event tracking, custom funnels, and executive ROI reports'
        ]
      }
    ],
    careerRoles: [
      'Digital Marketing Executive', 'Performance Marketing Specialist', 'SEO Specialist',
      'Social Media Manager', 'PPC & Google Ads Expert', 'Freelance Digital Marketer'
    ],
    topics: [
      'WordPress website design, Elementor layouts, and high-converting landing pages',
      'Complete Search Engine Optimization (On-Page, Technical, Off-Page & Local SEO)',
      'Google Ads search, display, and video campaigns with conversion tracking',
      'Meta Ads Manager (Facebook & Instagram) funnel targeting and custom audiences',
      'Social media content creation, copywriting, and email marketing automation',
      'Google Analytics 4 (GA4) traffic attribution, reporting, and Generative AI tools'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Digital Marketing & Performance AI',
    whatsappMessage: 'Hello! I want to enquire about the Digital Marketing with AI career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'investment-banking-course',
    name: 'Investment Banking with AI',
    type: 'career',
    badge: 'Financial Modeling & Corporate Advisory Track',
    goals: ['job', 'business'],
    rating: '4.9/5',
    reviewsCount: '2,600+ Alumni',
    durationPlaceholder: '4 to 6 Months (220+ Live Lab Hours)',
    hours: '220+ Practical Lab Hours',
    caseStudiesCount: '12+ Wall Street & Dalal Street Case Studies',
    avgSalary: '₹4.5 LPA – ₹9.0 LPA',
    shortDesc: 'Master Financial Statement Analysis, Advanced Excel Financial Modeling, Business Valuation (DCF, Comps, LBO), M&A deal structuring, Equity Research, and AI-assisted financial analytics.',
    whoFor: 'Commerce (B.Com, BAF, BBI, BFM), MBA Finance students, chartered accountant aspirants, and finance professionals aiming for investment banks and global MNC analytical hubs.',
    tools: [
      'Advanced MS Excel', 'Power BI for Finance', 'Python for Finance', 'ChatGPT & Claude for Finance',
      'Bloomberg / NSE Market Data', 'Canva for Pitch Books', 'Financial Data APIs'
    ],
    highlights: [
      '12+ Real Corporate Case Studies & Deal Simulations',
      'Dynamic Financial Modeling in Excel & Power BI',
      'Valuation Frameworks: DCF, Comps, LBO & Precedent Deals',
      'AI-Powered Equity Research & Financial Summarization',
      'Direct Railway Subway Proximity at Virar East',
      'Mock Technical Finance Interviews with Corporate Mentors'
    ],
    projects: [
      {
        title: 'MarketLens - Global Capital Markets Analysis',
        desc: 'Simulated real-time equity and derivatives research using NSE/BSE corporate filings, trade life cycles, and macroeconomic indicators.',
        tech: 'Power BI, Advanced Excel, NSE Data'
      },
      {
        title: 'YieldCraft - Fixed Income & Bond Portfolio Optimization',
        desc: 'Evaluated yield curves, bond duration, credit risk spreads, and debt instrument pricing across varied interest rate regimes.',
        tech: 'Financial Modeling, Excel, Bond Yield Models'
      },
      {
        title: 'FinModel Pro - Integrated 3-Statement Dynamic Model',
        desc: 'Built dynamic financial statement linkages (Income Statement, Balance Sheet, Cash Flow) with debt schedules, working capital, and scenario toggles.',
        tech: 'Advanced Excel, Dynamic Financial Formulas'
      },
      {
        title: 'DealCraft - Mergers & Acquisitions (M&A) Pitch Book',
        desc: 'Drafted a professional 15-page acquisition pitch book including DCF valuation, accretion/dilution analysis, and executive investment memo.',
        tech: 'DCF Valuation, WACC, Pitch Book Design'
      }
    ],
    modules: [
      {
        title: 'Module 1: Corporate Finance & Financial Statement Analysis',
        duration: '40 Hours',
        topics: [
          'Reading and interpreting annual reports (10-K, P&L, Balance Sheet, Cash Flow)',
          'Financial ratio analysis: Liquidity, solvency, profitability, and operational efficiency ratios',
          'Working capital cycle dynamics, debt covenants, and capital structure optimization'
        ]
      },
      {
        title: 'Module 2: Advanced Financial Modeling in Excel',
        duration: '50 Hours',
        topics: [
          'Advanced Excel for finance: Dynamic arrays, XLOOKUP, INDEX/MATCH, INDIRECT, and OFFSET',
          'Designing integrated 3-statement models from blank spreadsheets with dynamic formulas',
          'Scenario managers, data tables, sensitivity analysis, and debt amortization schedules'
        ]
      },
      {
        title: 'Module 3: Core Business Valuation Methodologies',
        duration: '50 Hours',
        topics: [
          'Discounted Cash Flow (DCF): Unlevered free cash flows, WACC calculation, terminal value (Gordon Growth & Exit Multiple)',
          'Comparable Company Analysis (Trading Comps): EV/EBITDA, P/E, EV/Sales benchmarking',
          'Precedent Transaction Analysis (Deal Comps) and Leveraged Buyout (LBO) fundamentals'
        ]
      },
      {
        title: 'Module 4: Mergers, Acquisitions (M&A) & IPO Transactions',
        duration: '45 Hours',
        topics: [
          'M&A transaction lifecycle: Deal origination, strategic rationale, due diligence, and synergy estimation',
          'Accretion/Dilution modeling, stock vs cash transaction impact on EPS',
          'Initial Public Offering (IPO) structuring, DRHP filings, underwriting, and book-building processes',
          'Creating multi-slide pitch books and confidential information memorandums (CIM)'
        ]
      },
      {
        title: 'Module 5: AI-Driven Equity Research & Market Analytics',
        duration: '35 Hours',
        topics: [
          'Using Generative AI (ChatGPT, Claude) for earnings call transcript parsing and sentiment scoring',
          'Building interactive executive financial dashboards using Power BI',
          'Writing professional initiation of coverage equity research reports and valuation summaries'
        ]
      }
    ],
    careerRoles: [
      'Investment Banking Analyst', 'Financial Modeler', 'Equity Research Associate',
      'Corporate Finance Analyst', 'M&A Advisory Analyst', 'Valuation Consultant'
    ],
    topics: [
      'Financial statement analysis, corporate finance fundamentals, and cash flow health',
      'Dynamic 3-statement financial modeling from scratch in Microsoft Excel',
      'Business valuation frameworks: Discounted Cash Flow (DCF), WACC, Trading Comps, LBO',
      'Mergers & Acquisitions (M&A) advisory, synergy estimation, and IPO deal structuring',
      'Equity research report authoring, pitch book design, and investment memos',
      'AI-powered financial analytics and Power BI corporate reporting dashboards'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Investment Banking & Financial Modeling with AI',
    whatsappMessage: 'Hello! I want to enquire about the Investment Banking with AI career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'software-testing-course',
    name: 'Software Testing With AI',
    type: 'career',
    badge: 'Quality Assurance & Automation Engineering Track',
    goals: ['job', 'skill'],
    rating: '4.8/5',
    reviewsCount: '3,900+ Alumni',
    durationPlaceholder: '4 Months (180+ Live Lab Hours)',
    hours: '180+ Practical Lab Hours',
    caseStudiesCount: '10+ Live Enterprise QA Case Studies',
    avgSalary: '₹3.5 LPA – ₹6.5 LPA',
    shortDesc: 'Master Manual Testing, Agile QA, JIRA defect management, API Testing with Postman, Test Automation with Selenium WebDriver & Java/Python, and AI-accelerated test case creation.',
    whoFor: 'Fresh graduates (IT or Non-IT), CS/IT diploma holders, manual testers wanting to upgrade to automation, and career switchers entering tech without complex mathematical coding.',
    tools: [
      'Selenium WebDriver', 'Java / Python', 'JIRA', 'Postman', 'Git & GitHub',
      'TestNG', 'SQL Queries', 'Bugasura', 'ChatGPT for Test Generation', 'Cucumber BDD'
    ],
    highlights: [
      '10+ Live Software Projects Tested',
      'Selenium WebDriver Automation with Java/Python',
      'JIRA & Bugasura Defect Management',
      'Individual Lab Workstations in Virar East',
      'Resume & Technical Mock QA Rounds',
      'Beginner-Friendly Coding Track'
    ],
    projects: [
      {
        title: 'CartSure - Comprehensive E-Commerce Platform Testing',
        desc: 'Authored 120+ test scenarios, executed functional, sanity, regression, and cross-browser testing with JIRA defect tracking for an online marketplace.',
        tech: 'JIRA, Manual Testing, Bug Life Cycle'
      },
      {
        title: 'FinCheck - Core Banking Backend & SQL Verification',
        desc: 'Conducted transaction integrity checks, database validation using SQL queries, and simulated edge-case ledger reconciliation.',
        tech: 'SQL, Database Testing, Data Integrity'
      },
      {
        title: 'ApiShield - Automated REST API Test Suite',
        desc: 'Created collection runs in Postman, automated assertions, response schema validation, and status code verification for web APIs.',
        tech: 'Postman, REST APIs, JSON Validation'
      },
      {
        title: 'AutoWeb - Selenium Automation Framework',
        desc: 'Designed a modular Page Object Model (POM) test automation suite with TestNG, cross-browser execution, and automated HTML test reports.',
        tech: 'Selenium WebDriver, Java, TestNG, Git'
      }
    ],
    modules: [
      {
        title: 'Module 1: Software Testing Fundamentals & SDLC/STLC',
        duration: '35 Hours',
        topics: [
          'Software Development Life Cycle (SDLC) models: Waterfall, V-Model, and Agile Scrum methodology',
          'Software Testing Life Cycle (STLC): Requirement analysis, test plan creation, test design, and execution',
          'Verification vs Validation, static testing, dynamic testing, and quality assurance principles'
        ]
      },
      {
        title: 'Module 2: Test Design Techniques & JIRA Defect Lifecycle',
        duration: '40 Hours',
        topics: [
          'Black box test design: Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), Decision Tables',
          'Functional, Sanity, Smoke, Retesting, Regression, and User Acceptance Testing (UAT)',
          'Defect management: Severity vs Priority, bug lifecycles, writing detailed bug reports in JIRA'
        ]
      },
      {
        title: 'Module 3: Database & SQL Verification Testing',
        duration: '30 Hours',
        topics: [
          'Relational database architecture for QA professionals, SQL SELECT queries, filters, and joins',
          'Testing data integrity, primary/foreign key constraints, and backend transaction validation',
          'Executing backend data comparison with UI inputs to identify data corruption'
        ]
      },
      {
        title: 'Module 4: API Testing with Postman & Web Services',
        duration: '35 Hours',
        topics: [
          'Web service fundamentals: REST architecture, endpoints, headers, query params, and JSON payloads',
          'Postman test collections, environment variables, Bearer tokens, and automated assertion scripts',
          'Validating HTTP status codes (200, 201, 400, 401, 404, 500) and response response time benchmarks'
        ]
      },
      {
        title: 'Module 5: Test Automation with Selenium WebDriver & AI Tools',
        duration: '40 Hours',
        topics: [
          'Selenium architecture, WebDriver setup, element locators (XPath, CSS selectors, ID, Name)',
          'Handling dynamic dropdowns, alerts, iframes, window handles, and implicit/explicit waits',
          'Page Object Model (POM) framework, TestNG assertions, test suites, and HTML report generation',
          'AI-assisted testing: Using ChatGPT and Bugasura for rapid test scenario and edge-case generation'
        ]
      }
    ],
    careerRoles: [
      'QA Automation Engineer', 'Software Tester', 'Manual QA Analyst',
      'SDET Associate', 'API Test Engineer', 'Quality Assurance Specialist'
    ],
    topics: [
      'SDLC, STLC, Agile Scrum methodologies, and software quality assurance principles',
      'Test case design techniques: Boundary Value Analysis, Equivalence Partitioning',
      'Defect logging, severity/priority assignment, and tracking in JIRA and Bugasura',
      'SQL database verification testing and backend data integrity validation',
      'API testing, JSON response assertions, and automated collection runs in Postman',
      'Selenium WebDriver automation with Java/Python, Page Object Model, and TestNG'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Software Testing & Automation with AI',
    whatsappMessage: 'Hello! I want to enquire about the Software Testing With AI career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'cyber-security-ethical-hacking-with-ai-course',
    aliases: ['cyber-security', 'ethical-hacking'],
    name: 'Cyber Security & Ethical Hacking with AI',
    type: 'career',
    badge: 'Offensive & Defensive Security Operations Track',
    goals: ['job', 'skill'],
    rating: '4.9/5',
    reviewsCount: '4,100+ Alumni',
    durationPlaceholder: '5 to 6 Months (240+ Live Lab Hours)',
    hours: '240+ Practical Lab Hours',
    caseStudiesCount: '18+ Live Ethical Hacking Labs & Simulations',
    avgSalary: '₹4.5 LPA – ₹10.0 LPA',
    shortDesc: 'Hands-on ethical hacking in dedicated virtualized labs: Kali Linux, Wireshark packet analysis, Metasploit, Nmap reconnaissance, OWASP Top 10 web penetration, and AI threat hunting.',
    whoFor: 'Engineers, BCA/BSc IT students, networking technicians, system administrators, and security enthusiasts wanting to become certified ethical hackers and SOC analysts.',
    tools: [
      'Kali Linux', 'Wireshark', 'Metasploit Framework', 'Nmap', 'Burp Suite',
      'Cisco Packet Tracer', 'Python for Security', 'Nessus', 'ShellGPT', 'John the Ripper'
    ],
    highlights: [
      '18+ Live Attack & Defense Labs',
      'Dedicated Isolated Lab Machines in Virar East Lab',
      'Kali Linux & OWASP Top 10 Web Penetration Mastery',
      'Network Sniffing, Threat Hunting & SOC Log Analysis',
      'Industry-Aligned Security Certification Path',
      'Technical Red-Team / Blue-Team Scenario Mocks'
    ],
    projects: [
      {
        title: 'NetSecure Lab - Enterprise Network Hardening',
        desc: 'Designed and secured a virtual corporate LAN network using Packet Tracer, configured firewalls, and executed penetration tests.',
        tech: 'Packet Tracer, Firewalls, Network Security'
      },
      {
        title: 'PySecure - Python Automated Security Scanner',
        desc: 'Developed a custom Python vulnerability scanner to perform network reconnaissance, open port scanning, and banner grabbing.',
        tech: 'Python, Socket Programming, Port Scanners'
      },
      {
        title: 'WebPwn - OWASP Top 10 Penetration Testing',
        desc: 'Performed vulnerability assessments on test web servers identifying SQL Injection, Cross-Site Scripting (XSS), and Broken Authentication.',
        tech: 'Burp Suite, OWASP Top 10, Kali Linux'
      },
      {
        title: 'SOCGuard - Real-Time Threat Analysis & Packet Inspection',
        desc: 'Analyzed live network traffic dumps in Wireshark, detected rogue ARP spoofing, brute force attacks, and drafted incident response reports.',
        tech: 'Wireshark, Log Analysis, Incident Response'
      }
    ],
    modules: [
      {
        title: 'Module 1: Networking Protocols & Linux Security Foundations',
        duration: '40 Hours',
        topics: [
          'OSI model deep dive, TCP/IP 3-way handshake, subnetting, IPv4/IPv6, and routing concepts',
          'Linux security fundamentals: Root privileges, user management, file permissions, and shell scripting',
          'Setting up virtualized penetration testing labs using Oracle VirtualBox and Kali Linux'
        ]
      },
      {
        title: 'Module 2: Network Reconnaissance & Vulnerability Scanning',
        duration: '45 Hours',
        topics: [
          'Footprinting & reconnaissance: OSINT tools, Google Dorking, WHOIS lookup, and DNS enumeration',
          'Network scanning with Nmap: SYN scan, UDP scan, OS fingerprinting, and NSE scripting',
          'Automated vulnerability assessment with Nessus and identifying unpatched server CVEs'
        ]
      },
      {
        title: 'Module 3: Web Application Penetration Testing (OWASP Top 10)',
        duration: '55 Hours',
        topics: [
          'Web application architecture, HTTP request/response headers, cookies, and session tokens',
          'Interception proxy configuration with Burp Suite (repeater, intruder, decoder)',
          'Exploiting OWASP Top 10: SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, IDOR, and Broken Authentication'
        ]
      },
      {
        title: 'Module 4: System Hacking, Exploitation & Malware Analysis',
        duration: '50 Hours',
        topics: [
          'Metasploit Framework: Exploit modules, payloads, listeners, and Meterpreter sessions',
          'Privilege escalation techniques on Windows and Linux targets',
          'Password auditing: Hash formats (MD5, SHA256), wordlists, Hydra, and John the Ripper',
          'Social engineering attack vectors, phishing simulation awareness, and defense protocols'
        ]
      },
      {
        title: 'Module 5: Security Operations Center (SOC), Threat Intelligence & AI',
        duration: '50 Hours',
        topics: [
          'Network traffic analysis with Wireshark: Detecting ARP poisoning, SYN floods, and cleartext credentials',
          'SIEM fundamentals, system event logs, incident triage, and digital forensics methodology',
          'AI in cybersecurity: Leveraging ShellGPT for automating security scripts and rapid log parsing'
        ]
      }
    ],
    careerRoles: [
      'Ethical Hacker / Penetration Tester', 'Cyber Security Analyst', 'SOC Analyst (L1/L2)',
      'Network Security Associate', 'Information Security Officer', 'Vulnerability Assessor'
    ],
    topics: [
      'TCP/IP networking, OSI layers, Linux commands, and virtualization lab setup',
      'Reconnaissance, Nmap port scanning, OSINT, and Nessus vulnerability assessments',
      'Web application penetration testing: OWASP Top 10, SQLi, XSS, and Burp Suite',
      'System hacking with Metasploit Framework, payload creation, and password auditing',
      'Wireshark packet sniffing, network security defense, and incident response reports',
      'Security Operations Center (SOC) fundamentals, log analysis, and AI threat hunting'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Master Diploma in Cyber Security & Ethical Hacking with AI',
    whatsappMessage: 'Hello! I want to enquire about the Cyber Security & Ethical Hacking with AI career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'dfa',
    name: 'DFA (Diploma in Financial Accounting)',
    type: 'career',
    badge: 'Corporate Accounting & Taxation Track',
    goals: ['job', 'business'],
    rating: '4.8/5',
    reviewsCount: '3,200+ Alumni',
    durationPlaceholder: '4 to 6 Months',
    hours: '180+ Practical Lab Hours',
    caseStudiesCount: '15+ Corporate Business Accounts Handled',
    avgSalary: '₹3.0 LPA – ₹5.5 LPA',
    shortDesc: 'Complete corporate accounting diploma integrating Manual Accounting, Advanced TallyPrime, GST E-filing, Payroll, and Taxation.',
    whoFor: 'Commerce graduates, accountants seeking promotions, and small business managers.',
    tools: ['TallyPrime', 'GST Portal', 'Excel Advanced', 'TDS Software', 'Payroll Systems'],
    highlights: [
      '100% Practical Ledger & Voucher Posting',
      'Live GST Returns (GSTR-1 & 3B) Portal Filing',
      'Complete Corporate Payroll & TDS Management',
      'Real Invoices from Mumbai MMR Businesses',
      'Placement Assistance for Local Accounting Firms'
    ],
    projects: [
      {
        title: 'Full Corporate Fiscal Year Finalization',
        desc: 'Processed a year of purchase, sales, and expense vouchers, generating final Balance Sheets, Profit & Loss accounts, and GST reconciliation.',
        tech: 'TallyPrime, Advanced Excel'
      },
      {
        title: 'Multi-Employee Payroll & Statutory Compliance',
        desc: 'Constructed corporate payroll systems calculating PF, ESI, Professional Tax, and TDS with automated payslips.',
        tech: 'TallyPrime Payroll, Tax Tables'
      }
    ],
    modules: [
      {
        title: 'Module 1: Principles of Accounting & Manual Accounting',
        duration: '35 Hours',
        topics: ['Golden rules of accounting, journal entries, ledger posting, trial balance, and depreciation accounting']
      },
      {
        title: 'Module 2: TallyPrime Advanced with GST & Inventory',
        duration: '50 Hours',
        topics: ['Company creation, multi-currency, bill-wise accounting, cost centers, order processing, and godown inventory']
      },
      {
        title: 'Module 3: Taxation & E-Filing Protocols',
        duration: '45 Hours',
        topics: ['CGST, SGST, IGST calculations, Input Tax Credit (ITC) reconciliation, E-Way bills, and online GST portal filing']
      },
      {
        title: 'Module 4: Corporate Payroll & Income Tax',
        duration: '50 Hours',
        topics: ['Payroll configuration, employee master creation, salary structures, TDS deduction rules, and Form 16 basics']
      }
    ],
    careerRoles: ['Senior Accountant', 'Accounts Executive', 'Tax Consultant Associate', 'Billing & GST Executive'],
    topics: [
      'Fundamental principles of accounting, golden rules, journal entries & ledgers',
      'Trial Balance, Profit & Loss Accounts, and Balance Sheet finalisation',
      'TallyPrime with GST, Inventory control, cost centres, and multi-currency',
      'Payroll management in Tally: PF, ESI, TDS calculation, salary slips',
      'GST returns (GSTR-1, GSTR-3B) and online portal submission',
      'Income Tax fundamentals, TDS return filing, and audit documentation'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Professional Diploma in Financial Accounting (DFA)',
    whatsappMessage: 'Hello! I want to enquire about the DFA (Diploma in Financial Accounting) at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    type: 'career',
    badge: 'Creative Visual Media & Brand Identity Track',
    goals: ['job', 'business', 'skill'],
    rating: '4.8/5',
    reviewsCount: '4,500+ Alumni',
    durationPlaceholder: '4 to 6 Months',
    hours: '200+ Practical Lab Hours',
    caseStudiesCount: '20+ Brand Identity & Social Campaigns',
    avgSalary: '₹3.2 LPA – ₹6.0 LPA',
    shortDesc: 'Comprehensive professional design career diploma covering Photoshop, Illustrator, CorelDraw/InDesign, visual identity, and advertising.',
    whoFor: 'Creative students, freelancers, print shop operators, and advertising agency aspirants.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDraw', 'InDesign', 'Canva', 'Behance'],
    highlights: [
      '100% Workstation Design Practice',
      'Complete Corporate Brand Identity Creation',
      'Print Pre-Press & Digital Spec Mastery',
      'Personal Portfolio on Behance & Instagram',
      'Agency Placement & Freelance Mentorship'
    ],
    projects: [
      {
        title: 'Complete Corporate Visual Identity Package',
        desc: 'Designed primary vector logos, business stationery, typography guidelines, brand manuals, and packaging mockups.',
        tech: 'Adobe Illustrator, Adobe Photoshop'
      },
      {
        title: 'High-Impact Social Media Marketing Campaign',
        desc: 'Formulated 15 visual creative assets, Instagram carousels, advertising banners, and promotional festival creatives.',
        tech: 'Photoshop, Color Theory, Typography'
      }
    ],
    modules: [
      {
        title: 'Module 1: Visual Design Fundamentals & Typography',
        duration: '35 Hours',
        topics: ['Color harmonies, typography hierarchy, visual balance, grid systems, and brand storytelling']
      },
      {
        title: 'Module 2: Raster Mastery with Adobe Photoshop',
        duration: '55 Hours',
        topics: ['Layers, layer masks, pen tool selection, photo retouching, photo manipulation, matte painting, and social media banners']
      },
      {
        title: 'Module 3: Vector Art with Adobe Illustrator',
        duration: '55 Hours',
        topics: ['Pen tool precision, geometric vector logos, brand identity guides, icons, typography art, and packaging mockups']
      },
      {
        title: 'Module 4: Print Production with CorelDraw & InDesign',
        duration: '55 Hours',
        topics: ['Multi-page brochures, restaurant menus, magazines, packaging cut-lines, CMYK pre-press checks, and Behance portfolio setup']
      }
    ],
    careerRoles: ['Graphic Designer', 'Brand Identity Designer', 'UI/Visual Designer', 'Social Media Creative Executive', 'Packaging Designer'],
    topics: [
      'Design fundamentals: Color theory, typography hierarchy, layout composition',
      'Adobe Photoshop: Image manipulation, photo composition, digital matte painting',
      'Adobe Illustrator: Vector logo creation, icon design, brand identity systems',
      'CorelDraw / InDesign: Multi-page catalogues, newspapers, packaging design',
      'Social media creative campaigns, print specifications, pre-press checks',
      'Building a professional physical and Behance design portfolio'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Professional Diploma in Graphic Designing & Visual Communication',
    whatsappMessage: 'Hello! I want to enquire about the Graphic Designing career course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'animation',
    name: 'Animation',
    type: 'career',
    badge: '2D/3D Motion Graphics Track',
    goals: ['job', 'skill'],
    rating: '4.7/5',
    reviewsCount: '2,100+ Alumni',
    durationPlaceholder: '4 to 6 Months',
    hours: '180+ Practical Lab Hours',
    caseStudiesCount: '10+ Character & Motion Projects',
    avgSalary: '₹3.5 LPA – ₹6.5 LPA',
    shortDesc: 'Step into the creative world of 2D/3D animation, character rigging, motion timing, visual storytelling, and video production.',
    whoFor: 'Creative students, visual artists, aspiring animators, and game/multimedia enthusiasts.',
    tools: ['Adobe Animate', 'After Effects', 'Premiere Pro', 'Photoshop', 'Blender basics'],
    projects: [
      {
        title: '2D Character Walk Cycle & Dialogue Rig',
        desc: 'Created fully rigged 2D vector characters with keyframe walk cycles, expressive facial lip-syncing, and audio timing.',
        tech: 'Adobe Animate, After Effects'
      }
    ],
    topics: [
      'The 12 golden principles of animation (squash & stretch, anticipation, timing)',
      'Storyboarding, character concept sketch, and visual narrative planning',
      'Vector animation, digital puppets, and character rigging techniques',
      'Keyframe animation, lip-syncing with audio, and walk cycles',
      'Motion graphics for advertising, social media reels, and explainer videos',
      'Video editing, sound design integration, and rendering portfolio reels'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Diploma in Digital Animation & Motion Graphics',
    whatsappMessage: 'Hello! I want to enquire about the Animation course at RACE. Please share syllabus, fees, and batch details.'
  },
  {
    id: 'ai-prompt-engineering',
    name: 'AI Prompt Engineering',
    type: 'career',
    badge: 'Generative AI Productivity Track',
    goals: ['job', 'business', 'skill'],
    rating: '4.9/5',
    reviewsCount: '1,800+ Alumni',
    durationPlaceholder: '4 to 6 Weeks',
    hours: '60+ Practical Lab Hours',
    caseStudiesCount: '15+ Custom GPTs & Automations Built',
    avgSalary: 'Productivity 10x Boost for Professionals',
    shortDesc: 'Master generative AI workflows with ChatGPT, Gemini, Midjourney, and Claude to multiply work productivity by 10x.',
    whoFor: 'Working professionals, content writers, business owners, students, and consultants.',
    tools: ['ChatGPT', 'Claude 3.5 Sonnet', 'Google Gemini', 'Midjourney', 'DALL-E 3', 'Make.com'],
    projects: [
      {
        title: 'Custom Enterprise Support GPT',
        desc: 'Built custom GPT bots with domain knowledge base uploads, API actions, and automated email response drafting.',
        tech: 'ChatGPT Custom GPTs, Prompt Architecture'
      }
    ],
    topics: [
      'How Large Language Models (LLMs) work: Tokens, temperature, and hallucinations',
      'Prompt crafting frameworks: Few-shot prompting, chain-of-thought, role persona prompts',
      'Automating office work: Drafting reports, summarizing long documents, creating emails',
      'Coding assistance: Writing, debugging, and explaining code with AI',
      'AI for image generation: Crafting prompts for Midjourney, DALL-E, and marketing art',
      'Building custom GPTs, workflow automations, and AI ethical best practices'
    ],
    mode: '100% In-Person Practical Lab (1:1 PC)',
    certificate: 'Certificate in AI Prompt Engineering & Productivity Workflows',
    whatsappMessage: 'Hello! I want to enquire about the AI Prompt Engineering course at RACE. Please share syllabus, fees, and batch details.'
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
      'RACE offers Free Lifetime Doubt-Solving Support. Even months or years after completing your training, if you face a difficulty with Tally, coding, GST filing, or design at your workplace, you are welcome to visit the lab and ask our teachers for guidance.',
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

// ============================================================
// SITE CONFIGURATION — edit all values here, never in components
// ============================================================

export const SITE_CONFIG = {
  name: 'Race Reddys',
  fullName: 'Race Reddys Advanced Computer Education',
  tagline: 'Build Skills. Learn by Doing. Move Your Career Forward.',
  description:
    'Practical computer and IT courses in Virar East, Maharashtra. From Basic Computer to Software Development, AI, Tally with GST, Digital Marketing, and more.',

  contact: {
    phone: '+91 97943 23963',
    phoneRaw: '+919794323963',
    whatsapp: 'https://wa.me/919794323963',
    whatsappDefaultMessage: encodeURIComponent(
      'Hello! I am interested in admissions at Race Reddys Advanced Computer Education. Please share more details.'
    ),
  },

  address: {
    line1: '202, 2nd Floor, Raut Arcade',
    line2: 'Opp. Subway, Near Virar East Railway Station',
    city: 'Virar East',
    state: 'Maharashtra',
    pin: '401305',
    googleMapsSearch:
      'https://www.google.com/maps/search/Race+Reddys+Advanced+Computer+Education+Virar+East+Maharashtra',
  },

  seo: {
    canonicalBase: 'https://racereddys.com', // update with actual domain
    ogImage: '/logo-wordmark.jpg',
  },
};

// ============================================================
// ACTIVE OFFER — set active: false to hide the offer strip
// ============================================================
export const ACTIVE_OFFER = {
  active: true,
  headline: 'Admissions Open',
  badge: '50% Off',
  tagline:
    'Enrol in any career course and get a Free Basic Computer Course. Limited seats available.',
  disclaimer:
    'Offer eligibility and terms must be confirmed directly with the institute before enrolment.',
};

// ============================================================
// COURSE CATALOG
// ============================================================

export type CourseCategory =
  | 'fundamentals'
  | 'office-accounting'
  | 'design-creative'
  | 'software-web'
  | 'ai-data'
  | 'digital-marketing'
  | 'cyber-networking';

export interface Course {
  id: string;
  name: string;
  category: CourseCategory;
  shortDesc: string;
  icon: string; // Lucide icon name
  highlights: string[];
  whoFor: string;
  prerequisites: string;
  topicsNote: string; // shown when full syllabus not confirmed
  skillsGained: string[];
  durationNote: string;
  feeNote: string;
  certificateNote: string;
}

export const COURSE_CATEGORIES: Record<CourseCategory, { label: string; emoji: string }> = {
  fundamentals: { label: 'Computer Fundamentals', emoji: '💻' },
  'office-accounting': { label: 'Office, Accounting & Business Tools', emoji: '📊' },
  'design-creative': { label: 'Design & Creative Skills', emoji: '🎨' },
  'software-web': { label: 'Software & Web Development', emoji: '🛠️' },
  'ai-data': { label: 'AI, Data Science & Machine Learning', emoji: '🤖' },
  'digital-marketing': { label: 'Digital Marketing', emoji: '📣' },
  'cyber-networking': { label: 'Cyber Security & Networking', emoji: '🔐' },
};

export const COURSES: Course[] = [
  // --- FUNDAMENTALS ---
  {
    id: 'basic-computer',
    name: 'Basic Computer',
    category: 'fundamentals',
    shortDesc: 'Begin your digital journey with practical, hands-on computer fundamentals.',
    icon: 'Monitor',
    highlights: ['Operating System basics', 'Internet & email usage', 'File management', 'Typing skills'],
    whoFor: 'Complete beginners, homemakers, students, and anyone new to computers.',
    prerequisites: 'No prior computer experience needed.',
    topicsNote: 'Contact the institute for the detailed syllabus and current batch schedule.',
    skillsGained: ['Navigate a Windows PC confidently', 'Browse the internet safely', 'Manage files and folders', 'Use basic productivity software'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details. A free Basic Computer Course is included with eligible career-course enrolment (terms apply).',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'ccc',
    name: 'CCC (Course on Computer Concepts)',
    category: 'fundamentals',
    shortDesc: 'Government-recognised foundational computer literacy course.',
    icon: 'BookOpen',
    highlights: ['Computer fundamentals', 'Internet and WWW', 'MS Office basics', 'Presentation skills'],
    whoFor: 'Students preparing for government exams or job applications requiring CCC certification.',
    prerequisites: 'Basic English reading ability.',
    topicsNote: 'Contact the institute for the detailed syllabus and exam preparation schedule.',
    skillsGained: ['Prepare for CCC exam', 'Use standard office software', 'Work with internet tools', 'Create and deliver presentations'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate and examination details.',
  },
  {
    id: 'typing',
    name: 'Typing (English & Marathi)',
    category: 'fundamentals',
    shortDesc: 'Build speed and accuracy in English and Marathi typing for professional use.',
    icon: 'Keyboard',
    highlights: ['Touch typing technique', 'Speed building exercises', 'English keyboard layout', 'Marathi/InScript layout'],
    whoFor: 'Government job aspirants, data entry professionals, and anyone needing typing skills.',
    prerequisites: 'Basic computer familiarity helpful.',
    topicsNote: 'Contact the institute for speed benchmarks and assessment details.',
    skillsGained: ['Type accurately without looking at keys', 'Achieve required WPM for exams', 'Use both English and Marathi layouts'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'hardware',
    name: 'Hardware & Networking Basics',
    category: 'fundamentals',
    shortDesc: 'Understand computer components, assembly, troubleshooting, and basic networking.',
    icon: 'Cpu',
    highlights: ['PC components and assembly', 'Troubleshooting common issues', 'Basic networking concepts', 'A+ and N+ exam preparation'],
    whoFor: 'Aspiring IT support professionals, technicians, and hardware enthusiasts.',
    prerequisites: 'Basic computer knowledge recommended.',
    topicsNote: 'Contact the institute for the full syllabus covering A+ and N+ topics.',
    skillsGained: ['Assemble and disassemble a PC', 'Diagnose and fix basic hardware issues', 'Configure a small network', 'Prepare for A+ and N+ certification exams'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- OFFICE & ACCOUNTING ---
  {
    id: 'ms-office',
    name: 'MS Office (Word, Excel & PowerPoint)',
    category: 'office-accounting',
    shortDesc: 'Master the industry-standard office tools: Word, Excel, and PowerPoint.',
    icon: 'FileText',
    highlights: ['Microsoft Word for documents', 'Excel formulas, charts & data', 'PowerPoint presentations', 'Practical business use cases'],
    whoFor: 'Office professionals, job seekers, and students needing workplace-ready skills.',
    prerequisites: 'Basic computer familiarity.',
    topicsNote: 'Contact the institute for detailed topic coverage per module.',
    skillsGained: ['Create professional documents and reports', 'Build spreadsheets with formulas and charts', 'Design impactful presentations', 'Use MS Office in a real workplace context'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'advanced-tally',
    name: 'Advanced Tally with GST',
    category: 'office-accounting',
    shortDesc: 'Industry-level Tally ERP with complete GST, accounting, and taxation workflows.',
    icon: 'Calculator',
    highlights: ['Tally ERP fundamentals & advanced features', 'GST filing and compliance', 'Accounting entries and ledgers', 'Inventory and payroll management'],
    whoFor: 'Accounts professionals, commerce students, and business owners.',
    prerequisites: 'Basic knowledge of accounting concepts helpful.',
    topicsNote: 'Contact the institute for the full syllabus including advanced topics.',
    skillsGained: ['Maintain accounts in Tally ERP', 'File GST returns correctly', 'Manage inventory and payroll', 'Generate financial reports'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'gst',
    name: 'GST (Goods and Services Tax)',
    category: 'office-accounting',
    shortDesc: 'Focused course on GST law, filing, and practical compliance in India.',
    icon: 'Receipt',
    highlights: ['GST registration and types', 'Return filing (GSTR-1, GSTR-3B)', 'Input tax credit', 'E-invoicing and e-way bills'],
    whoFor: 'Accountants, tax practitioners, and business staff handling GST.',
    prerequisites: 'Basic accounting knowledge recommended.',
    topicsNote: 'Contact the institute for the detailed syllabus.',
    skillsGained: ['File GST returns independently', 'Apply input tax credit correctly', 'Handle e-invoicing requirements', 'Advise on basic GST compliance'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- DESIGN & CREATIVE ---
  {
    id: 'graphic-design',
    name: 'Graphic Design & Canva',
    category: 'design-creative',
    shortDesc: 'Create stunning visuals for social media, print, and branding using Canva and design principles.',
    icon: 'Palette',
    highlights: ['Design principles and composition', 'Canva for quick professional designs', 'Social media graphics', 'Branding and logo basics'],
    whoFor: 'Entrepreneurs, social media managers, students, and aspiring graphic designers.',
    prerequisites: 'No prior design experience needed.',
    topicsNote: 'Contact the institute for the detailed syllabus.',
    skillsGained: ['Create polished social media content', 'Design marketing materials', 'Apply basic branding principles', 'Produce print-ready assets'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'adobe-photoshop',
    name: 'Adobe Photoshop',
    category: 'design-creative',
    shortDesc: 'Learn the world\'s leading image editing software for photo editing and digital art.',
    icon: 'Image',
    highlights: ['Layers and masking', 'Photo retouching and correction', 'Digital compositing', 'Exporting for web and print'],
    whoFor: 'Aspiring graphic designers, photographers, and digital artists.',
    prerequisites: 'Basic computer skills.',
    topicsNote: 'Contact the institute for the detailed syllabus.',
    skillsGained: ['Edit and enhance photographs professionally', 'Create digital compositions and artwork', 'Design marketing visuals', 'Prepare files for both print and web'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'adobe-illustrator',
    name: 'Adobe Illustrator',
    category: 'design-creative',
    shortDesc: 'Master vector design for logos, icons, illustrations, and scalable graphics.',
    icon: 'PenTool',
    highlights: ['Vector drawing tools', 'Typography and layout', 'Logo and icon design', 'Print and digital outputs'],
    whoFor: 'Aspiring graphic designers, brand designers, and creative professionals.',
    prerequisites: 'Basic computer skills; Photoshop knowledge helpful.',
    topicsNote: 'Contact the institute for the detailed syllabus.',
    skillsGained: ['Create scalable vector graphics', 'Design professional logos and icons', 'Work with type and layout', 'Produce print-ready and digital assets'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- SOFTWARE & WEB ---
  {
    id: 'html-css',
    name: 'HTML & CSS',
    category: 'software-web',
    shortDesc: 'Build the foundation of web development by creating structured, styled web pages.',
    icon: 'Code',
    highlights: ['HTML5 semantic structure', 'CSS styling and layout', 'Responsive design basics', 'Building a personal webpage project'],
    whoFor: 'Beginners interested in web development and design.',
    prerequisites: 'Basic computer skills.',
    topicsNote: 'Contact the institute for the detailed syllabus.',
    skillsGained: ['Structure web content with HTML', 'Style pages with CSS', 'Create mobile-friendly layouts', 'Deploy a basic webpage'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    category: 'software-web',
    shortDesc: 'A career-oriented course covering core programming concepts and application development.',
    icon: 'Terminal',
    highlights: ['Programming fundamentals', 'Object-oriented concepts', 'Application project development', 'Problem-solving and debugging'],
    whoFor: 'Students and graduates seeking a software development career.',
    prerequisites: 'Basic computer knowledge; aptitude for logical thinking.',
    topicsNote: 'Contact the institute for the full syllabus, programming languages covered, and project details.',
    skillsGained: ['Write and understand code', 'Build functional software applications', 'Debug and solve programming problems', 'Contribute to development projects'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'web-app-development',
    name: 'Web & App Development',
    category: 'software-web',
    shortDesc: 'Build modern websites and mobile applications from concept to deployment.',
    icon: 'Globe',
    highlights: ['Frontend and backend concepts', 'Web application development', 'Mobile app fundamentals', 'Live project experience'],
    whoFor: 'Aspiring full-stack or mobile developers.',
    prerequisites: 'Basic computer knowledge; some coding exposure helpful.',
    topicsNote: 'Contact the institute for the full syllabus, technologies covered, and project scope.',
    skillsGained: ['Design and develop web applications', 'Understand mobile development concepts', 'Deploy projects online', 'Build a portfolio of work'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'dfa',
    name: 'DFA (Diploma in Financial Accounting)',
    category: 'office-accounting',
    shortDesc: 'Comprehensive diploma covering accounting, Tally, GST, and financial management.',
    icon: 'TrendingUp',
    highlights: ['Financial accounting principles', 'Tally ERP with GST', 'Payroll and banking', 'Financial statements and analysis'],
    whoFor: 'Commerce students and professionals seeking an accounting career.',
    prerequisites: 'Basic understanding of accounting recommended.',
    topicsNote: 'Contact the institute for the full syllabus and modules.',
    skillsGained: ['Manage complete accounting records', 'File taxes and GST returns', 'Prepare financial statements', 'Handle payroll processes'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for diploma and certificate details.',
  },
  {
    id: 'animation',
    name: 'Animation',
    category: 'design-creative',
    shortDesc: 'Create engaging 2D animations, motion graphics, and visual storytelling.',
    icon: 'Film',
    highlights: ['Animation principles', '2D animation techniques', 'Motion graphics basics', 'Project-based practice'],
    whoFor: 'Creative students and aspiring animators.',
    prerequisites: 'Basic computer skills; interest in art and storytelling.',
    topicsNote: 'Contact the institute for the full syllabus and software details.',
    skillsGained: ['Create 2D animations', 'Apply core animation principles', 'Produce motion graphic sequences', 'Build an animation portfolio'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- AI, DATA SCIENCE, ML ---
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    category: 'ai-data',
    shortDesc: 'Explore artificial intelligence and machine learning concepts with practical applications.',
    icon: 'Brain',
    highlights: ['Introduction to AI and ML', 'Key algorithms and models', 'Data handling basics', 'Practical ML project'],
    whoFor: 'Technology enthusiasts, graduates, and professionals seeking AI skills.',
    prerequisites: 'Basic computer skills; some mathematics background helpful.',
    topicsNote: 'Contact the institute for the full syllabus and tools used.',
    skillsGained: ['Understand core AI and ML concepts', 'Work with basic ML models', 'Apply AI to real problems', 'Prepare for advanced AI study or work'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'ai-prompt-engineering',
    name: 'AI Prompt Engineering',
    category: 'ai-data',
    shortDesc: 'Learn to craft effective prompts and workflows using modern AI tools like ChatGPT and Gemini.',
    icon: 'MessageSquare',
    highlights: ['Prompt design principles', 'Working with LLMs (ChatGPT, Gemini)', 'Productivity with AI tools', 'Real-world AI workflow applications'],
    whoFor: 'Professionals, entrepreneurs, students, and anyone wanting to harness AI tools.',
    prerequisites: 'Basic internet and computer usage.',
    topicsNote: 'Contact the institute for the full syllabus and tools covered.',
    skillsGained: ['Write effective AI prompts', 'Automate tasks using AI tools', 'Improve work output with AI assistance', 'Evaluate AI outputs critically'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    category: 'ai-data',
    shortDesc: 'Analyse data, build visualisations, and extract actionable insights for data-driven decisions.',
    icon: 'BarChart2',
    highlights: ['Data collection and cleaning', 'Statistical analysis', 'Data visualisation', 'Introduction to predictive modelling'],
    whoFor: 'Graduates and professionals interested in analytics and data-driven careers.',
    prerequisites: 'Basic computer skills; some maths and statistics knowledge helpful.',
    topicsNote: 'Contact the institute for the full syllabus and tools used.',
    skillsGained: ['Process and analyse datasets', 'Create meaningful data visualisations', 'Apply basic statistical methods', 'Communicate findings effectively'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- DIGITAL MARKETING ---
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'digital-marketing',
    shortDesc: 'Master online marketing — SEO, social media, content, email, and paid advertising.',
    icon: 'TrendingUp',
    highlights: ['SEO and SEM basics', 'Social media marketing', 'Content marketing strategy', 'Google Ads and Meta Ads fundamentals'],
    whoFor: 'Entrepreneurs, marketing professionals, graduates, and freelancers.',
    prerequisites: 'Basic internet usage and social media familiarity.',
    topicsNote: 'Contact the institute for the full syllabus and tools covered.',
    skillsGained: ['Run effective digital campaigns', 'Improve organic search visibility', 'Manage social media channels', 'Analyse marketing performance data'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },

  // --- CYBER SECURITY & NETWORKING ---
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking',
    category: 'cyber-networking',
    shortDesc: 'Learn authorised security testing and vulnerability assessment to protect systems.',
    icon: 'Shield',
    highlights: ['Networking and security fundamentals', 'Common vulnerability types', 'Penetration testing concepts', 'Ethical and legal considerations'],
    whoFor: 'IT professionals, networking students, and cybersecurity aspirants.',
    prerequisites: 'Networking fundamentals and basic command-line experience recommended.',
    topicsNote: 'Contact the institute for the full syllabus and certification pathways.',
    skillsGained: ['Identify security vulnerabilities', 'Conduct basic penetration tests ethically', 'Understand attacker techniques', 'Recommend security improvements'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    category: 'cyber-networking',
    shortDesc: 'Protect digital systems, networks, and data from modern cyber threats.',
    icon: 'Lock',
    highlights: ['Cybersecurity fundamentals', 'Network security and firewalls', 'Incident response basics', 'Security best practices'],
    whoFor: 'IT professionals, network admins, and security-minded students.',
    prerequisites: 'Networking basics helpful.',
    topicsNote: 'Contact the institute for the full syllabus.',
    skillsGained: ['Understand the cybersecurity landscape', 'Implement basic security controls', 'Respond to security incidents', 'Apply security best practices in the workplace'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
  {
    id: 'hardware-networking',
    name: 'Hardware & Networking (A+ and N+)',
    category: 'cyber-networking',
    shortDesc: 'Advanced hardware assembly, troubleshooting, and network configuration towards A+ and N+ readiness.',
    icon: 'Network',
    highlights: ['Advanced PC hardware', 'Network design and configuration', 'Troubleshooting methodologies', 'A+ and N+ exam preparation'],
    whoFor: 'IT support aspirants and networking professionals.',
    prerequisites: 'Basic computer and networking knowledge.',
    topicsNote: 'Contact the institute for the full syllabus and practical lab details.',
    skillsGained: ['Configure and troubleshoot networks', 'Support PC hardware at a professional level', 'Prepare for A+ and N+ certification exams', 'Set up small office networks'],
    durationNote: 'Please contact the institute to confirm course duration.',
    feeNote: 'Contact the institute for current fee details.',
    certificateNote: 'Contact the institute for certificate details.',
  },
];

// ============================================================
// FAQ DATA
// ============================================================
export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: 'I have never used a computer before. Can I still join?',
    a: 'Absolutely. Our Basic Computer course is designed specifically for complete beginners. Many of our learners start with zero prior experience. Contact us and we will guide you to the right starting point.',
  },
  {
    q: 'How do I know which course is right for me?',
    a: 'Speak with our team — call or WhatsApp us on +91 97943 23963 and we will understand your background, interests, and goals before recommending a suitable course.',
  },
  {
    q: 'What are the batch timings?',
    a: 'Batch timings vary by course and are updated regularly. Please contact the institute directly for current available batches.',
  },
  {
    q: 'What are the course fees?',
    a: 'Fees depend on the course you choose. A 50% discount offer may be available — please contact us to confirm current pricing and eligibility.',
  },
  {
    q: 'How long does each course take?',
    a: 'Course duration varies depending on the subject. Please contact the institute for the duration of your specific course of interest.',
  },
  {
    q: 'Do I get a certificate after completing the course?',
    a: 'Contact the institute for details on certificates and their recognition for your chosen course.',
  },
  {
    q: 'Is there practical training or is it only theory?',
    a: 'We emphasise hands-on, practical training. Learners work directly on computers throughout the course, not just through lectures.',
  },
  {
    q: 'What is the free Basic Computer Course offer?',
    a: 'When you enrol in an eligible career course, you may receive a free Basic Computer Course. Eligibility and terms must be confirmed with the institute at the time of enquiry.',
  },
  {
    q: 'Where is Race Reddys Advanced Computer Education located?',
    a: '202, 2nd Floor, Raut Arcade, Opposite Subway, near Virar East Railway Station, Virar East, Maharashtra 401305. We are very easy to reach by train or auto.',
  },
  {
    q: 'Do you offer placement assistance?',
    a: 'We provide placement support to our learners. Contact us for current details on how we assist students in their job search. We do not guarantee employment.',
  },
  {
    q: 'Can I visit the institute before enrolling?',
    a: 'Yes, please call or WhatsApp us to schedule a visit. We welcome prospective students to see the facility and speak with our team.',
  },
];

export type Language = 'en' | 'hi' | 'mr';

export interface TranslationDict {
  stationBoard: string;
  stationTagline: string;
  taglineSub: string;
  ctaWhatsapp: string;
  ctaDemo: string;
  ctaCall: string;
  ctaEnquire: string;
  ctaFeeDetails: string;
  ctaBrowseCourses: string;
  
  // Navigation
  navHome: string;
  navCourses: string;
  navOffers: string;
  navBatches: string;
  navAbout: string;
  navGallery: string;
  navContact: string;

  // Offer Strip
  offerBadge: string;
  offerText: string;
  offerCta: string;

  // Hero Section
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroAddressHint: string;
  heroBadgeLadies: string;
  heroBadgePractical: string;
  heroBadgeDoubt: string;

  // "Who is this for?" section
  whoHeading: string;
  whoSubheading: string;
  whoStudentsTitle: string;
  whoStudentsDesc: string;
  whoLadiesTitle: string;
  whoLadiesDesc: string;
  whoJobSeekersTitle: string;
  whoJobSeekersDesc: string;
  whoBusinessTitle: string;
  whoBusinessDesc: string;
  whoKidsTitle: string;
  whoKidsDesc: string;

  // "Why Race Reddys"
  whyHeading: string;
  whySubheading: string;
  why1Title: string;
  why1Desc: string;
  why2Title: string;
  why2Desc: string;
  why3Title: string;
  why3Desc: string;
  why4Title: string;
  why4Desc: string;
  why5Title: string;
  why5Desc: string;
  why6Title: string;
  why6Desc: string;
  why7Title: string;
  why7Desc: string;

  // Admission in 3 steps
  stepsHeading: string;
  stepsSubheading: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Batches
  batchesHeading: string;
  batchesSubheading: string;
  batchMorning: string;
  batchLadies: string;
  batchEvening: string;
  batchWeekend: string;
  batchTimingNote: string;

  // Filter labels
  filterAll: string;
  filterShortTerm: string;
  filterCareer: string;
  filterGoalAll: string;
  filterGoalJob: string;
  filterGoalBusiness: string;
  filterGoalSkill: string;
  filterGoalKids: string;

  // Contact
  contactHeading: string;
  contactSubheading: string;
  addressLabel: string;
  timingsLabel: string;
  phoneLabel: string;
}

const TRANSLATIONS_EN: TranslationDict = {
  stationBoard: 'VIRAR EAST • OPP. RAILWAY STATION & SUBWAY',
  stationTagline: 'No Need To Commute To Mumbai',
  taglineSub: 'Learn modern, practical computer courses right outside Virar East railway station. 100% hands-on lab time, morning & evening batches, and genuine career support.',
  ctaWhatsapp: 'WhatsApp Us',
  ctaDemo: 'Book a Free Demo Class',
  ctaCall: 'Call 9794323963',
  ctaEnquire: 'Enquire for Course',
  ctaFeeDetails: 'Ask for Fee Details',
  ctaBrowseCourses: 'Explore All 23 Courses',

  navHome: 'Home',
  navCourses: 'Courses',
  navOffers: 'Offers',
  navBatches: 'Batches',
  navAbout: 'About',
  navGallery: 'Gallery',
  navContact: 'Contact',

  offerBadge: 'LIMITED ADMISSIONS OFFER',
  offerText: 'Flat 50% Concession + FREE Basic Computer Course with any career program!',
  offerCta: 'Claim Offer',

  heroTitleLine1: 'Master Job-Ready Computer Skills in Virar.',
  heroTitleHighlight: 'Zero Mumbai Commute.',
  heroSubtitle: 'Practical training on real computers. From TallyPrime with GST and Computer Typing to Full-Stack Web Development, Data Science, and Graphic Design.',
  heroAddressHint: '202, 2nd Floor, Raut Arcade, opposite Virar East Station Subway (2 min walk)',
  heroBadgeLadies: 'Special Dedicated Ladies Batch',
  heroBadgePractical: '100% Individual Machine Time',
  heroBadgeDoubt: 'Free Lifetime Doubt-Solving',

  whoHeading: 'Who is Race Reddys For?',
  whoSubheading: 'Computer education tailored for every Virar family, student, and business owner.',
  whoStudentsTitle: 'School & College Students',
  whoStudentsDesc: 'Build real project skills in coding, CCC, design, and office productivity alongside your college studies.',
  whoLadiesTitle: 'Housewives & Working Women',
  whoLadiesDesc: 'Comfortable afternoon batches in a friendly environment. Learn computer basics, typing, and digital accounting at your own pace.',
  whoJobSeekersTitle: 'Job Seekers & Fresh Graduates',
  whoJobSeekersDesc: 'Fast-track your employability with Tally with GST, Web Development, Digital Marketing, and industry certificates.',
  whoBusinessTitle: 'Small Business Owners & Shopkeepers',
  whoBusinessDesc: 'Manage your own billing, GST returns, business invoices in Excel, and social media promotions without paying outside consultants.',
  whoKidsTitle: 'Kids & Young Learners',
  whoKidsDesc: 'Safe, guided digital literacy, typing speed, and foundational coding logic that sets up bright academic success.',

  whyHeading: 'Why Choose Race Reddys in Virar East?',
  whySubheading: 'We focus on practical competence, patient teachers, and local accessibility.',
  why1Title: '100% Practical Training',
  why1Desc: 'Every single session takes place directly on a dedicated computer workstation. No endless blackboard lectures.',
  why2Title: 'Recognised Certification',
  why2Desc: 'Receive practical, accredited course completion certificates that add real weight to your resume and job applications.',
  why3Title: 'Placement & Interview Assistance',
  why3Desc: 'Resume building, mock interview questions, and placement support for local and Mumbai metropolitan opportunities.',
  why4Title: 'Flexible Morning & Evening Batches',
  why4Desc: 'Convenient timings between 9:00 AM and 7:00 PM designed to fit around college schedules and job commute times.',
  why5Title: 'Special Batch for Ladies & Students',
  why5Desc: 'A safe, quiet, and encouraging learning environment with personalized attention for first-time female learners.',
  why6Title: 'Free Lifetime Doubt-Solving Support',
  why6Desc: 'Even after completing your course, you can always walk in to Raut Arcade to ask our instructors for guidance on work projects.',
  why7Title: 'Professional Speed Typing',
  why7Desc: 'Accredited touch-typing speed and accuracy training for government jobs, clerical examinations, and private corporate offices.',

  stepsHeading: 'How Admission Works in 3 Simple Steps',
  stepsSubheading: 'Simple, transparent, and welcoming. No confusing admission red tape.',
  step1Title: '1. WhatsApp or Walk In',
  step1Desc: 'Message us on 9794323963 or walk directly into Raut Arcade, 2nd floor, opposite Virar East subway.',
  step2Title: '2. Take a Free Demo Class',
  step2Desc: 'Sit at an actual computer, meet the faculty, review the syllabus, and experience the teaching style with zero obligation.',
  step3Title: '3. Pick Batch & Start Practicing',
  step3Desc: 'Select morning, afternoon ladies, or evening batch. Avail the 50% discount and start your hands-on journey.',

  batchesHeading: 'Batch Timings & Flexible Schedules',
  batchesSubheading: 'Open Monday to Saturday, 9:00 AM to 7:00 PM. Choose the time slot that suits your daily routine.',
  batchMorning: 'Morning Batches (7:30 AM – 12:00 PM)',
  batchLadies: 'Special Ladies & Homemakers Batch (12:30 PM – 4:00 PM)',
  batchEvening: 'Evening Batches (4:30 PM – 7:00 PM)',
  batchWeekend: 'Weekend & Fast-Track Batches',
  batchTimingNote: 'Batches run in 1.5-hour hands-on lab slots. Contact the institute to reserve a machine in your preferred slot.',

  filterAll: 'All Courses',
  filterShortTerm: 'Short-Term Courses (12)',
  filterCareer: 'Career-Objective Courses (11)',
  filterGoalAll: 'All Goals',
  filterGoalJob: 'For Job Seekers',
  filterGoalBusiness: 'For Business & Shopkeepers',
  filterGoalSkill: 'Skill Upgrade',
  filterGoalKids: 'Kids & Beginners',

  contactHeading: 'Visit Our Institute in Virar East',
  contactSubheading: 'Just 2 minutes walk from Virar East railway station. Drop by anytime between 9:00 AM and 7:00 PM.',
  addressLabel: 'Address',
  timingsLabel: 'Timings',
  phoneLabel: 'Phone & WhatsApp',
};

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: TRANSLATIONS_EN,
  hi: TRANSLATIONS_EN,
  mr: TRANSLATIONS_EN,
};

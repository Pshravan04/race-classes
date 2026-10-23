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

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    stationBoard: 'VIRAR EAST • OPP. RAILWAY STATION & SUBWAY',
    stationTagline: 'Ab Mumbai Jaane Ki Zarurat Nahi',
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
    heroSubtitle: 'Practical training on real computers. From TallyPrime with GST and Marathi/English Typing to Full-Stack Web Development, Data Science, and Graphic Design.',
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
    why7Title: 'Marathi & English Typing',
    why7Desc: 'Professional speed training in English and Marathi typing for government jobs, clerical examinations, and private offices.',

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
  },

  hi: {
    stationBoard: 'विरार पूर्व • रेलवे स्टेशन और सबवे के बिल्कुल सामने',
    stationTagline: 'अब मुंबई जाने की ज़रूरत नहीं',
    taglineSub: 'विरार पूर्व स्टेशन के बाहर ही सीखें आधुनिक व प्रैक्टिकल कंप्यूटर कोर्सेस। 100% कंप्यूटर पर हैंड्स-ऑन ट्रेनिंग, सुबह और शाम के बैच, और करियर मार्गदर्शन।',
    ctaWhatsapp: 'व्हाट्सएप करें',
    ctaDemo: 'फ्री डेमो क्लास बुक करें',
    ctaCall: 'कॉल करें 9794323963',
    ctaEnquire: 'कोर्स की जानकारी लें',
    ctaFeeDetails: 'फीस व बैच की जानकारी',
    ctaBrowseCourses: 'सभी 23 कोर्सेस देखें',

    navHome: 'होम',
    navCourses: 'कोर्सेस',
    navOffers: 'ऑफ़र्स',
    navBatches: 'बैचेस',
    navAbout: 'परिचय',
    navGallery: 'गैलरी',
    navContact: 'संपर्क',

    offerBadge: 'सीमित समय ऑफर',
    offerText: 'सभी कोर्सेस पर 50% फीस छूट + करियर कोर्स के साथ बेसिक कंप्यूटर कोर्स बिल्कुल मुफ्त!',
    offerCta: 'ऑफर पाएं',

    heroTitleLine1: 'विरार में सीखें जॉब-ओरिएंटेड कंप्यूटर कोर्सेस।',
    heroTitleHighlight: 'मुंबई की लोकल ट्रेन की भागदौड़ से मुक्ति।',
    heroSubtitle: 'असली कंप्यूटर पर 100% प्रैक्टिकल ट्रेनिंग। टैली प्राइम विथ जीएसटी, मराठी/इंग्लिश टाइपिंग से लेकर वेब डेवलपमेंट, डेटा साइंस और ग्राफिक डिजाइन तक।',
    heroAddressHint: '202, दूसरी मंजिल, राउत आर्केड, विरार पूर्व स्टेशन सबवे के सामने (2 मिनट की दूरी)',
    heroBadgeLadies: 'महिलाओं के लिए स्पेशल बैच',
    heroBadgePractical: '100% कंप्यूटर हैंड्स-ऑन टाइम',
    heroBadgeDoubt: 'लाईफटाइम फ्री डाउट सपोर्ट',

    whoHeading: 'रेस रेड्डीज किसके लिए है?',
    whoSubheading: 'विरार के हर छात्र, गृहिणी, नौकरी चाहने वाले और दुकानदार के लिए तैयार किया गया कंप्यूटर शिक्षण।',
    whoStudentsTitle: 'स्कूल और कॉलेज के छात्र',
    whoStudentsDesc: 'कॉलेज की पढ़ाई के साथ-साथ कोडिंग, सीसीसी, डिजाइनिंग और ऑफिस टूल्स में महारत हासिल करें।',
    whoLadiesTitle: 'गृहिणियां और कामकाजी महिलाएं',
    whoLadiesDesc: 'दोपहर का शांत और सुरक्षित बैच। अपनी गति से कंप्यूटर फंडामेंटल्स, टाइपिंग और डिजिटल अकाउंटिंग सीखें।',
    whoJobSeekersTitle: 'नौकरी की तलाश कर रहे युवा',
    whoJobSeekersDesc: 'टैली जीएसटी, वेब डेवलपमेंट और डिजिटल मार्केटिंग जैसे कोर्सेस से तुरंत प्राइवेट व सरकारी जॉब्स के लिए तैयार हों।',
    whoBusinessTitle: 'दुकानदार और छोटे व्यापारी',
    whoBusinessDesc: 'अपनी दुकान का बिलिंग, जीएसटी रिटर्न, एक्सेल में हिसाब और सोशल मीडिया प्रचार खुद करना सीखें।',
    whoKidsTitle: 'बच्चे और स्कूली विद्यार्थी',
    whoKidsDesc: 'शुरुआत से ही सही टाइपिंग, कंप्यूटर नॉलेज और लॉजिकल सोच विकसित करें जो भविष्य में काम आए।',

    whyHeading: 'रेस रेड्डीज क्यों चुनें?',
    whySubheading: 'हम थ्योरी रटाने के बजाय असल कंप्यूटर पर प्रैक्टिकल काम सिखाने में विश्वास रखते हैं।',
    why1Title: '100% प्रैक्टिकल ट्रेनिंग',
    why1Desc: 'हर छात्र को अभ्यास के लिए अपना अलग कंप्यूटर मिलता है। कोई ब्लैकबोर्ड वाला बोरिंग लेक्चर नहीं।',
    why2Title: 'मान्यता प्राप्त सर्टिफिकेट',
    why2Desc: 'कोर्स पूरा होने पर वैल्यूएबल सर्टिफिकेट मिलता है जो जॉब इंटरव्यू में आपके हुनर को साबित करता है।',
    why3Title: 'प्लेसमेंट व इंटरव्यू सहायता',
    why3Desc: 'बायोडाटा (रेज़्यूमे) तैयार करने और इंटरव्यू की तैयारी में हमारे अनुभवी शिक्षक पूरा मार्गदर्शन देते हैं।',
    why4Title: 'सुबह और शाम के सुविधाजनक बैच',
    why4Desc: 'सुबह 9:00 से शाम 7:00 बजे तक आपके कॉलेज या काम के समय अनुसार लचीले बैच टाइमिंग्स।',
    why5Title: 'महिलाओं व छात्राओं के लिए विशेष बैच',
    why5Desc: 'एक सुरक्षित, आदरपूर्ण और धैर्यपूर्वक सिखाने वाला माहौल जहां पहली बार कंप्यूटर छूने वाली महिलाएं भी सहज महसूस करती हैं।',
    why6Title: 'लाइफटाइम फ्री डाउट-सॉल्विंग सपोर्ट',
    why6Desc: 'कोर्स खत्म होने के बाद भी, भविष्य में काम करते वक्त आने वाली दिक्कतों के लिए आप कभी भी सेंटर आ सकते हैं।',
    why7Title: 'मराठी और इंग्लिश टाइपिंग',
    why7Desc: 'सरकारी नौकरियों, क्लर्क भर्ती और ऑफिस वर्क के लिए आवश्यक टाइपिंग स्पीड की पूरी तैयारी।',

    stepsHeading: 'प्रवेश लेने के 3 आसान कदम',
    stepsSubheading: 'सरल, पारदर्शी और मित्रवत प्रक्रिया। कोई उलझन नहीं।',
    step1Title: '1. व्हाट्सएप करें या सेंटर आएं',
    step1Desc: '9794323963 पर मैसेज भेजें या सीधे राउत आर्केड, विरार पूर्व सबवे के सामने पधारें।',
    step2Title: '2. फ्री डेमो क्लास लें',
    step2Desc: 'कंप्यूटर पर बैठकर देखें, शिक्षक से मिलें, सिलेबस समझें और पढ़ाने का तरीका जांचें—पूरी तरह निशुल्क।',
    step3Title: '3. बैच चुनें और सीखना शुरू करें',
    step3Desc: 'अपनी पसंद का समय चुनें, 50% छूट का लाभ लें और अपनी डिजिटल यात्रा शुरू करें।',

    batchesHeading: 'बैच टाइमिंग्स और शेड्यूल',
    batchesSubheading: 'सोमवार से शनिवार, सुबह 9:00 बजे से शाम 7:00 बजे तक। अपनी सुविधा अनुसार समय चुनें।',
    batchMorning: 'मॉर्निंग बैच (सुबह 7:30 – 12:00)',
    batchLadies: 'स्पेशल महिला व गृहिणी बैच (दोपहर 12:30 – 4:00)',
    batchEvening: 'इवनिंग बैच (शाम 4:30 – 7:00)',
    batchWeekend: 'वीकेंड व फास्ट-ट्रैक बैच',
    batchTimingNote: 'प्रत्येक बैच 1.5 घंटे का रहता है जिसमें पूरा समय कंप्यूटर पर प्रैक्टिस कराई जाती है।',

    filterAll: 'सभी कोर्सेस',
    filterShortTerm: 'शॉर्ट-टर्म कोर्सेस (12)',
    filterCareer: 'करियर-ओरिएंटेड कोर्सेस (11)',
    filterGoalAll: 'सभी लक्ष्य',
    filterGoalJob: 'जॉब के लिए',
    filterGoalBusiness: 'व्यापार व दुकान के लिए',
    filterGoalSkill: 'स्किल अपग्रेड',
    filterGoalKids: 'बच्चों व शुरुआती लोगों के लिए',

    contactHeading: 'विरार पूर्व सेंटर पर आएं',
    contactSubheading: 'विरार पूर्व रेलवे स्टेशन से मात्र 2 मिनट की दूरी पर स्थित। सोमवार से शनिवार सुबह 9 से शाम 7 बजे तक कभी भी आएं।',
    addressLabel: 'पता',
    timingsLabel: 'समय',
    phoneLabel: 'फ़ोन और व्हाट्सएप',
  },

  mr: {
    stationBoard: 'विरार पूर्व • रेल्वे स्टेशन आणि सबवे समोर',
    stationTagline: 'आता मुंबईला जाण्याची गरज नाही',
    taglineSub: 'विरार पूर्व स्टेशनच्या अगदी बाहेर शिका आधुनिक व प्रॅक्टिकल कॉम्प्युटर कोर्सेस. १००% संगणकावर प्रत्यक्ष सराव, सकाळ व संध्याकाळच्या सोयीस्कर बॅचेस आणि खात्रीशीर करिअर मार्गदर्शन.',
    ctaWhatsapp: 'व्हॉट्सॲप करा',
    ctaDemo: 'मोफत डेमो क्लास बुक करा',
    ctaCall: 'कॉल करा ९७९४३२३९६३',
    ctaEnquire: 'कोर्सची माहिती विचारा',
    ctaFeeDetails: 'फी व बॅच माहिती',
    ctaBrowseCourses: 'सर्व २३ कोर्सेस पहा',

    navHome: 'होम',
    navCourses: 'कोर्सेस',
    navOffers: 'ऑफ़र्स',
    navBatches: 'बॅचेस',
    navAbout: 'माहिती',
    navGallery: 'गॅलरी',
    navContact: 'संपर्क',

    offerBadge: 'मर्यादित जागा सवलत योजना',
    offerText: 'सर्व कोर्सेसवर ५०% फी सवलत + करिअर कोर्स सोबत बेसिक कॉम्प्युटर कोर्स पूर्णपणे मोफत!',
    offerCta: 'सवलत मिळवा',

    heroTitleLine1: 'विरारमध्येच शिका नोकरीभिमुख कॉम्प्युटर कोर्सेस.',
    heroTitleHighlight: 'मुंबईच्या लोकल प्रवासाचा त्रास नाही.',
    heroSubtitle: 'प्रत्यक्ष कॉम्प्युटरवर १००% प्रॅक्टिकल ट्रेनिंग. टॅली प्राईम विथ जीएसटी, मराठी/इंग्रजी टायपिंग, वेब डेव्हलपमेंट, डेटा सायन्स आणि ग्राफिक्स डिझायनिंग.',
    heroAddressHint: '२०२, दुसरा मजला, राऊत आर्केड, विरार पूर्व सबवे समोर (स्टेशनवरून फक्त २ मिनिटे)',
    heroBadgeLadies: 'महिलांसाठी स्वतंत्र खास बॅच',
    heroBadgePractical: '१००% वैयक्तिक कॉम्प्युटर सराव',
    heroBadgeDoubt: 'लाईफटाईम मोफत डाऊट सपोर्ट',

    whoHeading: 'रेस रेड्डीज कोणासाठी आहे?',
    whoSubheading: 'विरारमधील प्रत्येक विद्यार्थी, महिला, नोकरी शोधणारे तरुण आणि व्यावसायिकांसाठी दर्जेदार शिक्षण.',
    whoStudentsTitle: 'शालेय व महाविद्यालयीन विद्यार्थी',
    whoStudentsDesc: 'कॉलेजच्या अभ्यासासोबत कोडिंग, सीसीसी, टायपिंग आणि ऑफिस सॉफ्टवेअरमध्ये निपुण व्हा.',
    whoLadiesTitle: 'महिला आणि गृहिणी',
    whoLadiesDesc: 'दुपारच्या शांत वेळेत स्वतंत्र बॅच. अतिशय सोप्या भाषेत कॉम्प्युटर, टायपिंग आणि अकाउंटिंग शिका.',
    whoJobSeekersTitle: 'नोकरी शोधणारे तरुण-तरुणी',
    whoJobSeekersDesc: 'टॅली जीएसटी, वेब डेव्हलपमेंट, डिजिटल मार्केटिंगच्या कौशल्याने सरकारी व खाजगी नोकरीसाठी सज्ज व्हा.',
    whoBusinessTitle: 'व्यापारी आणि दुकानदार',
    whoBusinessDesc: 'आपल्या दुकानाचे जीएसटी बिलिंग, एक्सेल मधील हिशोब आणि ऑनलाईन मार्केटिंग स्वतः करायला शिका.',
    whoKidsTitle: 'लहान मुले व विद्यार्थी',
    whoKidsDesc: 'लहान वयातच योग्य टायपिंग सवय, कॉम्प्युटर साक्षरता आणि लॉजिकल विचारसरणी विकसित करा.',

    whyHeading: 'रेस रेड्डीज का निवडावे?',
    whySubheading: 'आम्ही केवळ थेअरी न शिकवता प्रत्यक्ष कॉम्प्युटरवर हाताने काम शिकवतो.',
    why1Title: '१००% प्रॅक्टिकल ट्रेनिंग',
    why1Desc: 'प्रत्येक विद्यार्थ्याला प्रॅक्टिससाठी स्वतंत्र संगणक दिला जातो. केवळ ब्लॅकबोर्डवर शिकवणे नाही.',
    why2Title: 'मान्यताप्राप्त प्रमाणपत्र',
    why2Desc: 'कोर्स पूर्ण केल्यावर मिळणारे प्रमाणपत्र तुमच्या रेझ्युमेचे वजन वाढवते आणि नोकरी मिळवून देते.',
    why3Title: 'प्लेसमेंट व मुलाखत मार्गदर्शन',
    why3Desc: 'बायोडाटा तयार करणे, मुलाखतीची तयारी आणि नोकरीच्या संधींसाठी शिक्षकांचे वैयक्तिक सहकार्य.',
    why4Title: 'सकाळ व संध्याकाळच्या लवचिक बॅचेस',
    why4Desc: 'सकाळी ९:०० ते संध्याकाळी ७:०० पर्यंत तुमच्या कॉलेज किंवा नोकरीच्या वेळेनुसार सोयीच्या वेळा.',
    why5Title: 'महिला व विद्यार्थिनींसाठी स्वतंत्र बॅच',
    why5Desc: 'एक सुरक्षित, आदरयुक्त आणि मनमोकळे वातावरण जिथे पहिल्यांदा कॉम्प्युटर शिकणाऱ्या महिलाही आत्मविश्वासाने शिकतात.',
    why6Title: 'लाईफटाईम मोफत डाऊट-सॉल्विंग',
    why6Desc: 'कोर्स संपल्यानंतरही तुमच्या नोकरीत किंवा व्यवसायात अडचण आल्यास तुम्ही केव्हाही सेंटरवर येऊन मार्गदर्शन घेऊ शकता.',
    why7Title: 'मराठी व इंग्रजी टायपिंग',
    why7Desc: 'सरकारी नोकरी, क्लार्क परीक्षा आणि खाजगी कार्यालयांसाठी आवश्यक असणारी अचूक टायपिंग गती.',

    stepsHeading: 'प्रवेश प्रक्रियेचे ३ सोपे टप्पे',
    stepsSubheading: 'कोणताही क्लिष्टपणा नाही. एकदम सरळ आणि सोपी पद्धत.',
    step1Title: '१. व्हॉट्सॲप करा किंवा सेंटरला भेट द्या',
    step1Desc: '९७९४३२३९६३ वर संदेश पाठवा किंवा थेट विरार पूर्व सबवे समोर राऊत आर्केडच्या दुसऱ्या मजल्यावर या.',
    step2Title: '२. मोफत डेमो क्लास घ्या',
    step2Desc: 'संगणकावर बसून प्रत्यक्ष अनुभव घ्या, शिक्षकांशी चर्चा करा, अभ्यासक्रम समजून घ्या—पूर्णपणे मोफत.',
    step3Title: '३. बॅच निवडा आणि प्रत्यक्ष सराव सुरू करा',
    step3Desc: 'तुमच्या वेळेनुसार बॅच निवडा, ५०% सवलतीचा फायदा घ्या आणि तुमचे भविष्य घडवा.',

    batchesHeading: 'बॅचेसच्या वेळा आणि वेळापत्रक',
    batchesSubheading: 'सोमवार ते शनिवार, सकाळी ९:०० ते संध्याकाळी ७:००. तुमच्या दिनक्रमानुसार सोयीची वेळ निवडा.',
    batchMorning: 'सकाळची बॅच (सकाळी ७:३० ते १२:००)',
    batchLadies: 'खास महिला व गृहिणी बॅच (दुपारी १२:३० ते ४:००)',
    batchEvening: 'संध्याकाळची बॅच (संध्याकाळी ४:३० ते ७:००)',
    batchWeekend: 'शनिवार-रविवार व फास्ट-ट्रॅक बॅच',
    batchTimingNote: 'प्रत्येक बॅच १.५ तासांची असते, ज्यामध्ये पूर्ण वेळ संगणकावर प्रत्यक्ष सराव करवून घेतला जातो.',

    filterAll: 'सर्व कोर्सेस',
    filterShortTerm: 'शॉर्ट-टर्म कोर्सेस (१२)',
    filterCareer: 'करिअर कोर्सेस (११)',
    filterGoalAll: 'सर्व उद्दिष्टे',
    filterGoalJob: 'नोकरीसाठी',
    filterGoalBusiness: 'व्यवसाय व दुकानासाठी',
    filterGoalSkill: 'कौशल्य वाढवण्यासाठी',
    filterGoalKids: 'लहान मुलांसाठी व नवशिक्यांसाठी',

    contactHeading: 'विरार पूर्व केंद्राला प्रत्यक्ष भेट द्या',
    contactSubheading: 'विरार पूर्व रेल्वे स्थानकावरून चालत फक्त २ मिनिटे. सोमवार ते शनिवार सकाळी ९ ते संध्याकाळी ७ या वेळेत कधीही भेट द्या.',
    addressLabel: 'पत्ता',
    timingsLabel: 'वेळ',
    phoneLabel: 'फोन आणि व्हॉट्सॲप',
  },
};

import { useState } from 'react';
import { 
  Clock, 
  Download, 
  BookOpen, 
  Wrench, 
  Laptop
} from 'lucide-react';
import type { Course, CourseModule } from '../data/config';
import { SITE_CONFIG } from '../data/config';

interface CourseJourneyCurriculumProps {
  course: Course;
  onDownloadBrochure?: () => void;
}

// Helper to determine contextual tag for each module
function getModuleTag(title: string, index: number, courseId: string): string {
  const t = `${title} ${courseId}`.toLowerCase();

  if (t.includes('web') || t.includes('html') || t.includes('css') || t.includes('frontend') || t.includes('ui')) {
    return '#Frontend';
  }
  if (t.includes('react') || t.includes('redux') || t.includes('javascript') || t.includes('js')) {
    return '#Frontend';
  }
  if (t.includes('sql') || t.includes('database') || t.includes('mongo') || t.includes('data engineering')) {
    return '#Database';
  }
  if (t.includes('java') || t.includes('spring') || t.includes('node') || t.includes('express') || t.includes('backend') || t.includes('api')) {
    return '#Backend';
  }
  if (t.includes('devops') || t.includes('aws') || t.includes('docker') || t.includes('cloud') || t.includes('ci/cd')) {
    return '#Cloud';
  }
  if (t.includes('machine learning') || t.includes('deep learning') || t.includes('ai') || t.includes('nlp')) {
    return '#AI';
  }
  if (t.includes('tableau') || t.includes('power bi') || t.includes('analytics') || t.includes('bi')) {
    return '#Analytics';
  }
  if (t.includes('tally') || t.includes('accounting') || t.includes('gst') || t.includes('voucher') || t.includes('balance')) {
    return '#Accounting';
  }
  if (t.includes('security') || t.includes('ethical') || t.includes('hacking') || t.includes('network')) {
    return '#Security';
  }
  if (t.includes('testing') || t.includes('selenium') || t.includes('qa') || t.includes('jira')) {
    return '#QA';
  }
  if (t.includes('english') || t.includes('spoken') || t.includes('fluency') || t.includes('grammar') || t.includes('speech') || t.includes('interview')) {
    return '#Communication';
  }
  if (t.includes('design') || t.includes('photoshop') || t.includes('illustrator')) {
    return '#Design';
  }

  // Fallbacks by index
  const defaultTags = ['#Foundations', '#CoreSkills', '#AdvancedLab', '#Capstone', '#Portfolio'];
  return defaultTags[index % defaultTags.length];
}

// Helper to format or generate realistic weeks/hours duration for modules
function getModuleDuration(mod: CourseModule, index: number): string {
  if (mod.duration) {
    if (mod.duration.toLowerCase().includes('week')) {
      return mod.duration;
    }
    // Convert e.g. "60 Hours" to weeks: 60h / 12h/week ≈ 5.0 Weeks
    const num = parseInt(mod.duration.replace(/\D/g, ''), 10);
    if (!isNaN(num) && num > 0) {
      const weeks = (num / 12).toFixed(1);
      return `${weeks} Weeks`;
    }
    return mod.duration;
  }
  // Deterministic realistic weeks
  const mockWeeks = ['5.4 Weeks', '3 Weeks', '4.4 Weeks', '6.4 Weeks', '5.6 Weeks', '4 Weeks'];
  return mockWeeks[index % mockWeeks.length];
}

// Clean module title without "Module X: " prefix for cleaner display
function cleanModuleTitle(title: string): string {
  return title.replace(/^module\s*\d+\s*:\s*/i, '').trim();
}

export default function CourseJourneyCurriculum({ course, onDownloadBrochure }: CourseJourneyCurriculumProps) {
  // Ensure we always have structured modules even for short-term courses
  const modules: CourseModule[] = course.modules && course.modules.length > 0
    ? course.modules
    : [
        {
          title: 'Foundations, Architecture & Core Skills',
          duration: '3.5 Weeks',
          topics: course.topics.slice(0, Math.ceil(course.topics.length / 2)),
        },
        {
          title: 'Practical Workflows, Case Studies & Capstone',
          duration: '4.5 Weeks',
          topics: course.topics.slice(Math.ceil(course.topics.length / 2)),
        },
      ];

  // Accordion state: open the first module by default (like in ITVedant screenshot)
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleModule = (index: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    modules.forEach((_, idx) => {
      allOpen[idx] = true;
    });
    setOpenModules(allOpen);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  const handleBrochureClick = () => {
    if (onDownloadBrochure) {
      onDownloadBrochure();
    } else {
      const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
        `Hello RACE! I want to download the complete curriculum brochure for ${course.name}. Please send syllabus details.`
      )}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Derive stats
  const projectsCount = course.projects?.length 
    ? `${course.projects.length * 5}+` 
    : (course.caseStudiesCount?.split('&')[0].trim() || '25+');
  const toolsCount = course.tools?.length ? `${course.tools.length}+` : '10+';
  const hoursCount = course.hours || '240+';

  return (
    <section id="curriculum" className="w-full scroll-mt-28 my-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* ─── Left Column: Deep Blue Overview Card (5 cols on xl) ─── */}
        <div className="xl:col-span-5 rounded-3xl bg-[#0e2340] text-white p-6 sm:p-7 shadow-xl border border-[#16345c] xl:sticky xl:top-28">
          
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/15">
            Syllabus Blueprint
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
            Industry Oriented Curriculum
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
            Explore each topic in-depth through interactive sessions, real-world use cases, and tool-based learning. You'll not only understand the theory but also build practical skills that matter in actual roles.
          </p>

          {/* 3 White Feature & Stats Cards */}
          <div className="space-y-3.5 mb-6">
            
            {/* Stat 1: Case Studies & Projects */}
            <div className="bg-white rounded-2xl p-4 flex items-center gap-4 text-[#0e2340] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0e2340] flex items-center justify-center shrink-0">
                <BookOpen size={22} className="stroke-[2.2]" />
              </div>
              <div>
                <strong className="block text-xl sm:text-2xl font-black text-[#0e2340] leading-none mb-1">
                  {projectsCount}
                </strong>
                <span className="text-xs font-semibold text-slate-600 block">
                  Case Studies &amp; Projects
                </span>
              </div>
            </div>

            {/* Stat 2: Languages & Tools */}
            <div className="bg-white rounded-2xl p-4 flex items-center gap-4 text-[#0e2340] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0e2340] flex items-center justify-center shrink-0">
                <Wrench size={22} className="stroke-[2.2]" />
              </div>
              <div>
                <strong className="block text-xl sm:text-2xl font-black text-[#0e2340] leading-none mb-1">
                  {toolsCount}
                </strong>
                <span className="text-xs font-semibold text-slate-600 block">
                  Languages &amp; Tools
                </span>
              </div>
            </div>

            {/* Stat 3: Live Sessions Hours */}
            <div className="bg-white rounded-2xl p-4 flex items-center gap-4 text-[#0e2340] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0e2340] flex items-center justify-center shrink-0">
                <Laptop size={22} className="stroke-[2.2]" />
              </div>
              <div>
                <strong className="block text-xl sm:text-2xl font-black text-[#0e2340] leading-none mb-1">
                  {hoursCount}
                </strong>
                <span className="text-xs font-semibold text-slate-600 block">
                  Practical Lab Session Hours
                </span>
              </div>
            </div>

          </div>

          {/* Download Brochure Button (Signature Vibrant Lime-Green) */}
          <button
            type="button"
            onClick={handleBrochureClick}
            className="w-full py-3.5 px-5 rounded-xl bg-[#A2D016] hover:bg-[#8FB812] text-[#122302] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Download size={16} strokeWidth={2.5} />
            <span>Download Curriculum Brochure</span>
          </button>

          <p className="text-[11px] text-center text-slate-400 mt-3 font-medium">
            Includes module-wise topics, lab assignments &amp; project list
          </p>

        </div>

        {/* ─── Right Column: Timeline Journey Accordion (7 cols on xl) ─── */}
        <div className="xl:col-span-7">
          
          {/* Top Controls: Expand / Collapse All */}
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {modules.length} Progressive Modules
            </span>

            <div className="flex items-center gap-3 text-xs font-bold">
              <button
                type="button"
                onClick={expandAll}
                className="text-[#0e2340] hover:text-[#c6383b] transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-slate-500 hover:text-[#0e2340] transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* The Timeline Track Container */}
          <div className="relative pl-6 sm:pl-8 space-y-4">
            
            {/* Vertical Connector Line running down the left */}
            <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-0.5 bg-slate-200" />

            {modules.map((mod, idx) => {
              const isOpen = !!openModules[idx];
              const tag = getModuleTag(mod.title, idx, course.id);
              const duration = getModuleDuration(mod, idx);
              const cleanedTitle = cleanModuleTitle(mod.title);

              // Split topics into 2 balanced columns if more than 3 topics
              const mid = Math.ceil(mod.topics.length / 2);
              const leftTopics = mod.topics.slice(0, mid);
              const rightTopics = mod.topics.slice(mid);

              return (
                <div key={idx} className="relative">
                  
                  {/* Timeline Dot Node on the line */}
                  <div className="absolute -left-6 sm:-left-8 top-5 z-10 flex items-center justify-center">
                    {isOpen ? (
                      <div className="w-4 h-4 rounded-full bg-[#A2D016] ring-4 ring-[#A2D016]/30 shadow-xs" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300" />
                    )}
                  </div>

                  {/* Module Card */}
                  <div
                    className={`rounded-2xl border bg-white transition-all overflow-hidden ${
                      isOpen
                        ? 'border-slate-300 shadow-md ring-1 ring-slate-200'
                        : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                    }`}
                  >
                    {/* Header Clickable Row */}
                    <button
                      type="button"
                      onClick={() => toggleModule(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                      aria-expanded={isOpen}
                    >
                      {/* Left: Module Name + Pill Tag */}
                      <div className="flex flex-wrap items-center gap-2.5 min-w-0 pr-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {cleanedTitle}
                        </h3>

                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EAF7C3] text-[#3B6306] border border-[#D5EFA0] text-[11px] font-semibold shrink-0">
                          {tag}
                        </span>
                      </div>

                      {/* Right: Duration + Plus/Minus Toggle */}
                      <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-slate-600">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600">
                          <Clock size={13} className="text-slate-400" />
                          <span>{duration}</span>
                        </div>

                        <div className="w-7 h-7 flex items-center justify-center text-slate-700 text-xl font-bold leading-none select-none">
                          {isOpen ? '−' : '+'}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Body: 2-Column Bulleted List (Exact ITVedant Layout) */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-slate-100 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                          
                          {/* Left Topics Column */}
                          <div className="space-y-2.5">
                            {leftTopics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                                <span className="text-slate-400 text-base leading-none select-none shrink-0">•</span>
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>

                          {/* Right Topics Column */}
                          <div className="space-y-2.5">
                            {rightTopics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                                <span className="text-slate-400 text-base leading-none select-none shrink-0">•</span>
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

          {/* Bottom Fast Action Prompt */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#0e2340] block">
                Want to customize modules or request weekend-only timing?
              </span>
              <span className="text-[11px] text-slate-500 block">
                Speak directly with an instructor opposite Virar East station subway.
              </span>
            </div>

            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0e2340] hover:bg-[#c6383b] text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>Call Admissions Desk</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, FileText, ArrowRight } from 'lucide-react';
import type { Course } from '../data/config';
import { SITE_CONFIG } from '../data/config';
import { ToolLogo, getCuratedToolsForCourse } from './ToolIcons';

interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
  seatsLeft?: number;
  batchHours?: number;
}

const COURSE_IMAGES: Record<string, string> = {
  'basic-computer': '/images/real-lab-classroom.jpg',
  'ms-office': '/images/course-excel-office.jpg',
  'advanced-tally-with-gst': '/images/tally-practice.jpg',
  'gst': '/images/real-data-chart-session.jpg',
  'ccc': '/images/course-excel-office.jpg',
  'typing-english-marathi': '/images/student-coding.jpg',
  'illustrator': '/images/course-graphic-design.jpg',
  'photoshop': '/images/course-graphic-design.jpg',
  'html': '/images/student-coding.jpg',
  'css': '/images/student-coding.jpg',
  'hardware': '/images/real-lab-aisle.jpg',
  'a-plus-and-n-plus': '/images/real-lab-wide.jpg',
  'data-science-and-ai': '/images/real-data-chart-session.jpg',
  'full-stack-developer-course': '/images/student-coding.jpg',
  'devops-with-aws-course': '/images/real-lab-aisle.jpg',
  'digital-marketing-course': '/images/course-graphic-design.jpg',
  'investment-banking-course': '/images/tally-practice.jpg',
  'software-testing-course': '/images/real-students-presentation.jpg',
  'cyber-security-ethical-hacking-with-ai-course': '/images/real-instructor-mentoring.jpg',
  'software-development': '/images/student-coding.jpg',
  'dfa': '/images/tally-practice.jpg',
  'animation': '/images/course-graphic-design.jpg',
  'ai-ml': '/images/course-ai-ml.jpg',
  'digital-marketing': '/images/real-data-chart-session.jpg',
  'web-and-app-development': '/images/student-coding.jpg',
  'ethical-hacking': '/images/real-students-presentation.jpg',
  'ai-prompt-engineering': '/images/course-ai-ml.jpg',
  'data-science': '/images/real-data-chart-session.jpg',
  'cyber-security': '/images/real-students-presentation.jpg',
  'graphic-designing': '/images/course-graphic-design.jpg',
};

function getCourseImage(id: string, type: 'career' | 'short-term'): string {
  if (COURSE_IMAGES[id]) return COURSE_IMAGES[id];
  return type === 'career' ? '/images/student-coding.jpg' : '/images/real-lab-classroom.jpg';
}

export default function CourseCard({ course, onSelect, seatsLeft, batchHours }: CourseCardProps) {
  const isCareer = course.type === 'career';
  const courseImage = getCourseImage(course.id, course.type);
  const tools = getCuratedToolsForCourse(course.id, course.name, course.tools);

  // Deterministic seats left & batch countdown based on course id if not provided
  const hash = course.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const displaySeats = seatsLeft || ((hash % 4) + 2); // 2, 3, 4, or 5 seats left
  const baseHours = batchHours || (24 + (hash % 48)); // between 24 and 72 hours

  // Countdown timer state
  const [seconds, setSeconds] = useState(51 + (hash % 9));
  const [minutes, setMinutes] = useState(59 - (hash % 15));
  const [hours, setHours] = useState(baseHours);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;
        setMinutes((prevMin) => {
          if (prevMin > 0) return prevMin - 1;
          setHours((prevHr) => (prevHr > 0 ? prevHr - 1 : 48));
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBrochureClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(course);
    } else {
      // Direct WhatsApp brochure request fallback
      const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
        `Hello RACE! Please share the official course syllabus brochure for ${course.name} along with batch timings and 50% concession details.`
      )}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:border-slate-300">
      
      {/* ─── Top Section: Countdown & Urgency Bar ─── */}
      <div>
        <div className="flex items-center justify-between text-xs px-4 sm:px-5 pt-3.5 pb-2.5 bg-white">
          <div className="text-left">
            <span className="block text-[10.5px] text-slate-500 font-medium leading-tight">
              Next batch starts in
            </span>
            <span className="block text-[11.5px] font-bold text-slate-800 font-mono tracking-tight mt-0.5">
              {hours} hrs : {minutes.toString().padStart(2, '0')} mins : {seconds.toString().padStart(2, '0')} sec
            </span>
          </div>

          <div className="border border-red-500/70 text-red-600 font-extrabold text-[10.5px] px-2.5 py-0.5 rounded-full bg-red-50/50 shrink-0">
            {displaySeats} seats left
          </div>
        </div>

        {/* ─── Course Image Banner ─── */}
        <div className="px-4 sm:px-5 pt-1 pb-3">
          <Link
            to={`/courses/${course.id}`}
            className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-100 shadow-xs block group/img"
          >
            <img
              src={courseImage}
              alt={`${course.name} training at RACE`}
              className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

            {/* Top-Left Category Tag */}
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#001752]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-xs">
                {isCareer ? 'Career Diploma' : 'Certificate'}
              </span>
            </div>

            {/* Bottom Image Overlay Badges */}
            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-bold z-10">
              <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                100% Practical
              </span>
              <span className="bg-[#A2D016] text-[#001752] font-black px-2 py-0.5 rounded-sm shadow-xs">
                1 Student : 1 PC
              </span>
            </div>
          </Link>
        </div>

        {/* ─── Technologies & Tools Logos Strip (ITVedant Pattern) ─── */}
        <div className="px-4 sm:px-5 py-2.5 bg-slate-50/80 border-y border-slate-100 grid grid-cols-5 gap-1 items-center text-center">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center min-w-0 px-0.5">
              <div className="w-6 h-6 flex items-center justify-center mb-1 drop-shadow-xs">
                <ToolLogo name={tool} className="w-5 h-5 max-w-full max-h-full object-contain" />
              </div>
              <span className="text-[9.5px] text-slate-700 font-semibold truncate w-full leading-tight">
                {tool}
              </span>
            </div>
          ))}
        </div>

        {/* ─── Card Body Content ─── */}
        <div className="p-4 sm:p-5">
          
          {/* Middle Feature Capsules */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="border border-sky-400 bg-sky-50 text-sky-700 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md tracking-wider">
              {isCareer ? 'UNLIMITED INTERVIEWS' : 'INDUSTRY VETTED CURRICULUM'}
            </span>
            <span className="bg-[#FEF9D9] text-[#786600] border border-[#ECE086] text-[10px] font-bold px-2.5 py-0.5 rounded-md">
              {isCareer ? 'Integrated Internship' : '50% Concession Eligible'}
            </span>
          </div>

          {/* Course Title */}
          <h3 className="text-base sm:text-lg font-black text-[#001752] leading-snug line-clamp-1 group-hover:text-[#C41E1E] transition-colors mb-1.5">
            <Link to={`/courses/${course.id}`} className="hover:underline decoration-slate-300">
              {course.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4 font-sans">
            {course.shortDesc}
          </p>

          {/* Logistics with Dashed Divider (Clock & Batches) */}
          <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-slate-400 shrink-0" />
              <span className="line-clamp-1">
                {course.durationPlaceholder.split('(')[0].trim()} Classroom &amp; Lab Training
              </span>
            </div>

            <div className="border-t border-dashed border-slate-200" />

            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-slate-400 shrink-0" />
              <span className="line-clamp-1 text-slate-600">
                Weekday &amp; Weekend Batches · Ladies Slot
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Card Footer Actions: Dual Buttons (ITVedant Pattern) ─── */}
      <div className="p-4 sm:p-5 pt-0">
        <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
          
          {/* Download Brochure Button */}
          <button
            type="button"
            onClick={handleBrochureClick}
            className="w-full py-2.5 px-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-[13px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer"
            aria-label={`Download brochure for ${course.name}`}
          >
            <FileText size={14} className="text-slate-500 shrink-0" />
            <span className="truncate">Download Brochure</span>
          </button>

          {/* Know More Button (Signature Lime Green) */}
          <Link
            to={`/courses/${course.id}`}
            className="w-full py-2.5 px-2 rounded-xl bg-[#A2D016] hover:bg-[#8FB812] text-[#122302] text-xs sm:text-[13px] font-black flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95 text-center"
            aria-label={`Know more about ${course.name}`}
          >
            <span>Know More</span>
            <div className="w-4 h-4 rounded-full border border-[#122302]/40 flex items-center justify-center shrink-0">
              <ArrowRight size={10} strokeWidth={3} />
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}

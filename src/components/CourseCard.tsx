import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Monitor,
  BookOpen,
  Keyboard,
  Cpu,
  FileText,
  Calculator,
  Receipt,
  Palette,
  Image,
  PenTool,
  Code,
  Terminal,
  Globe,
  TrendingUp,
  Film,
  Brain,
  MessageSquare,
  BarChart2,
  Shield,
  Lock,
  Network,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { COURSE_CATEGORIES, type Course } from '../data/config'

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor,
  BookOpen,
  Keyboard,
  Cpu,
  FileText,
  Calculator,
  Receipt,
  Palette,
  Image,
  PenTool,
  Code,
  Terminal,
  Globe,
  TrendingUp,
  Film,
  Brain,
  MessageSquare,
  BarChart2,
  Shield,
  Lock,
  Network,
}

// Background gradient themes per category for rich visual identity
const CATEGORY_STYLES: Record<string, { bg: string; iconBg: string; text: string }> = {
  fundamentals: {
    bg: 'from-blue-50 to-indigo-50/60',
    iconBg: 'bg-blue-600 text-white',
    text: 'text-blue-700',
  },
  'office-accounting': {
    bg: 'from-emerald-50 to-teal-50/60',
    iconBg: 'bg-emerald-600 text-white',
    text: 'text-emerald-700',
  },
  'design-creative': {
    bg: 'from-purple-50 to-pink-50/60',
    iconBg: 'bg-purple-600 text-white',
    text: 'text-purple-700',
  },
  'software-web': {
    bg: 'from-sky-50 to-cyan-50/60',
    iconBg: 'bg-sky-600 text-white',
    text: 'text-sky-700',
  },
  'ai-data': {
    bg: 'from-amber-50 to-orange-50/60',
    iconBg: 'bg-amber-600 text-white',
    text: 'text-amber-700',
  },
  'digital-marketing': {
    bg: 'from-rose-50 to-red-50/60',
    iconBg: 'bg-rose-600 text-white',
    text: 'text-rose-700',
  },
  'cyber-networking': {
    bg: 'from-slate-100 to-slate-200/60',
    iconBg: 'bg-slate-800 text-white',
    text: 'text-slate-800',
  },
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = ICON_MAP[course.icon] || Monitor
  const categoryLabel = COURSE_CATEGORIES[course.category]?.label || 'Course'
  const style = CATEGORY_STYLES[course.category] || CATEGORY_STYLES.fundamentals

  return (
    <article
      className="group bg-white rounded-2xl border border-[#E1E7EF] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full overflow-hidden"
      aria-label={`Course: ${course.name}`}
    >
      <div>
        {/* Top 16:10 Visual Area */}
        <div className={`relative aspect-[16/10] bg-gradient-to-br ${style.bg} border-b border-slate-100 flex items-center justify-center p-6 transition-colors`}>
          {/* Prominent Center Icon Emblem */}
          <div className={`w-14 h-14 rounded-2xl ${style.iconBg} shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
            <Icon size={26} strokeWidth={2} aria-hidden="true" />
          </div>

          {/* Category Chip */}
          <div className="absolute top-3.5 left-3.5">
            <span className="bg-white/95 backdrop-blur-xs text-[#15243A] text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              {categoryLabel}
            </span>
          </div>

          {/* Practical Tag */}
          <div className="absolute top-3.5 right-3.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#102B50] bg-white/95 backdrop-blur-xs border border-slate-200/80 px-2 py-0.5 rounded-full shadow-2xs">
              <Sparkles size={11} className="text-[#C9A04F]" />
              Lab Practical
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 flex flex-col gap-2.5">
          <h3 className="text-[17px] font-bold text-[#15243A] group-hover:text-[#2165D5] transition-colors line-clamp-1 leading-snug">
            {course.name}
          </h3>

          <p className="text-[14px] text-[#64748B] line-clamp-2 leading-relaxed min-h-[42px]">
            {course.shortDesc}
          </p>

          {/* Highlights / Skills tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {course.highlights.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="inline-block text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={`/courses/${course.id}`}
          className="text-xs font-bold text-[#2165D5] hover:text-[#1B54B2] flex items-center gap-1 group-hover:gap-1.5 transition-all py-2"
        >
          <span>View Details</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>

        <Link
          to={`/contact?course=${encodeURIComponent(course.name)}`}
          className="text-xs font-semibold text-[#15243A] hover:text-[#2165D5] bg-slate-50 hover:bg-slate-100 border border-[#E1E7EF] px-3 py-1.5 rounded-lg transition-colors"
        >
          Enquire
        </Link>
      </div>
    </article>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, BookOpen, Keyboard, Cpu, FileText, Calculator, Receipt, Palette, Image, PenTool, Code, Terminal, Globe, TrendingUp, Film, Brain, MessageSquare, BarChart2, Shield, Lock, Network } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Course } from '../data/config'

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor, BookOpen, Keyboard, Cpu, FileText, Calculator, Receipt, Palette,
  Image, PenTool, Code, Terminal, Globe, TrendingUp, Film, Brain,
  MessageSquare, BarChart2, Shield, Lock, Network,
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = ICON_MAP[course.icon] || Monitor
  return (
    <Link
      to={`/courses/${course.id}`}
      className="card block p-5"
      style={{ textDecoration: 'none' }}
      aria-label={`View details for ${course.name}`}
    >
      <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
        <div className="icon-box">
          <Icon size={20} />
        </div>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.3, flex: 1 }}>
          {course.name}
        </h3>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
        {course.shortDesc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        {course.highlights.slice(0, 3).map((h, i) => (
          <span
            key={i}
            style={{
              background: 'rgba(21, 86, 166, 0.07)',
              color: 'var(--royal)',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.2rem 0.6rem',
              borderRadius: 999,
              border: '1px solid rgba(21,86,166,0.15)',
            }}
          >
            {h}
          </span>
        ))}
      </div>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.875rem',
          fontWeight: 700,
          color: 'var(--royal)',
        }}
      >
        View Details <ArrowRight size={14} />
      </span>
    </Link>
  )
}

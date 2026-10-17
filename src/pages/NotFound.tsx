import { Link } from 'react-router-dom'
import { Home, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Race Reddys Advanced Computer Education home."
      />
      <section
        style={{
          background: 'var(--off-white)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1rem',
        }}
      >
        <div>
          <div style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: 1 }}>🔍</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--navy)', marginBottom: '0.875rem' }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 400, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            The page you're looking for doesn't exist or may have moved. Try our homepage or browse our courses.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Go to Homepage
            </Link>
            <Link to="/courses" className="btn-outline-navy">
              <BookOpen size={16} />
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

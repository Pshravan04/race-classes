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
      <section className="bg-slate-50 min-h-[60vh] flex items-center justify-center text-center px-4 py-20">
        <div className="max-w-md mx-auto">
          <p className="text-6xl font-black text-[#C41E1E] font-mono mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#001752] mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            The link you followed may be incorrect, or the page may have been moved. Return to our homepage or explore available courses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#C41E1E] hover:bg-[#A81717] text-white text-xs sm:text-sm font-bold shadow-md transition-all">
              <Home size={15} />
              <span>Go to Homepage</span>
            </Link>
            <Link to="/courses" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#001752] hover:bg-[#002580] text-white text-xs sm:text-sm font-bold transition-all shadow-xs">
              <BookOpen size={15} />
              <span>Browse Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

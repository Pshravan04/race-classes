import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function AboutSection() {
  const handleScrollToEnquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('enquiry-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-gray-200" id="about" aria-label="About Institute">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Compact Photo Card with Social Icons matching Reference */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white p-2.5">
            <img
              src="/instructor-teaching.jpg"
              alt="Instructor mentoring students in computer lab at Race Reddys"
              className="w-full h-72 sm:h-80 object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="pt-3.5 pb-1 px-3 flex items-center justify-between text-xs font-semibold text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B7EB38]" />
                <span>Lab Terminal 04 • Virar East</span>
              </span>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="hover:text-black transition-colors cursor-pointer" title="Facebook">FB</span>
                <span className="hover:text-black transition-colors cursor-pointer" title="Instagram">IG</span>
                <span className="hover:text-black transition-colors cursor-pointer" title="LinkedIn">IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative and Direct CTA Pills */}
        <div className="lg:col-span-7">
          {/* Dot Header Tag */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span>ABOUT RACE REDDYS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E1726] tracking-tight leading-snug mb-6">
            Race Reddys started with a simple goal: give Central &amp; Western line students a computer institute they can actually count on.
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
            10 years later, we’re still doing exactly that — from fundamental computer literacy and government typing exams to industry-certified TallyPrime accounting, full-stack software development, and modern graphic design across Virar, Nalasopara, and Vasai. No crowded classrooms, no sharing screens. Just real skills taught by mentors who care.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#enquiry-section"
              onClick={handleScrollToEnquiry}
              className="inline-flex items-center gap-2 bg-[#B7EB38] hover:bg-[#a6d82d] text-black font-bold text-sm px-6 py-3 rounded-full shadow-sm transition-transform active:scale-95 group"
            >
              <span>Enquire Now</span>
              <span className="text-sm font-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} />
              </span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="text-sm font-semibold text-gray-700 hover:text-black inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
            >
              <span>Call Institute ({SITE_CONFIG.contact.phone}) ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

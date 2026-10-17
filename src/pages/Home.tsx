import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle, BookOpen, Users, Lightbulb, Laptop, Star, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import CourseCard from '../components/CourseCard'
import EnquiryForm from '../components/EnquiryForm'
import { useReveal } from '../hooks/useReveal'
import { SITE_CONFIG, ACTIVE_OFFER, COURSES, COURSE_CATEGORIES, FAQS, type CourseCategory } from '../data/config'

/* ─── Scroll-reveal section wrapper ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ─── FAQ Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        className="faq-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? <ChevronUp size={18} style={{ flexShrink: 0, color: 'var(--royal)' }} /> : <ChevronDown size={18} style={{ flexShrink: 0, color: 'var(--muted)' }} />}
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = COURSES.filter((c) => {
    const matchCat = activeCategory === 'all' || c.category === activeCategory
    const matchSearch = searchQuery.trim() === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <SEO
        title="Home"
        description="Race Reddys Advanced Computer Education, Virar East — practical IT and computer skills training. Courses in Software Development, Tally GST, Digital Marketing, AI, Graphic Design, and more. Admissions open."
        canonical="/"
      />

      {/* ─── HERO ─── */}
      <section className="hero-section" aria-label="Hero">
        <img
          src="/hero-lab.jpg"
          alt="Students working at computers in a training lab"
          className="hero-img"
          fetchPriority="high"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="container-rr hero-content" style={{ paddingBlock: 'clamp(3rem, 8vw, 5.5rem)' }}>
          <div style={{ maxWidth: 620 }}>
            {/* Location pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              background: 'rgba(217,174,82,0.18)', border: '1px solid rgba(217,174,82,0.4)',
              borderRadius: 999, padding: '0.3rem 0.875rem', marginBottom: '1.5rem',
              color: 'var(--gold)', fontSize: '0.8125rem', fontWeight: 600,
            }}>
              <MapPin size={12} />
              Near Virar East Railway Station, Maharashtra
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
            }}>
              Build Skills.{' '}
              <span style={{ color: 'var(--gold)' }}>Learn by Doing.</span>{' '}
              Move Your Career Forward.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7, marginBottom: '2rem', maxWidth: 500,
            }}>
              Hands-on computer and IT training at Race Reddys Advanced Computer Education — serving learners across Virar East since day one.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}>
              <Link to="/courses" className="btn-primary">
                Explore Courses <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Enquire About Admissions
              </Link>
            </div>

            {/* Quick stats — only factual claims */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {[
                { label: '20+ Courses', sub: 'Short-term & career' },
                { label: 'Practical Training', sub: 'Hands-on learning' },
                { label: 'Placement Support', sub: 'Career assistance' },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '0.75rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{s.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8125rem' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFER BANNER ─── */}
      {ACTIVE_OFFER.active && (
        <section
          style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, var(--royal) 100%)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem) 0',
          }}
          aria-label="Current admission offer"
        >
          <div className="container-rr" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--gold)', color: 'var(--navy)', fontWeight: 800, padding: '0.2rem 0.875rem', borderRadius: 999, fontSize: '0.875rem' }}>
                  {ACTIVE_OFFER.badge}
                </span>
                <h2 style={{ color: '#fff', fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', fontWeight: 700 }}>
                  {ACTIVE_OFFER.headline}
                </h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9375rem', maxWidth: 540, lineHeight: 1.6 }}>
                {ACTIVE_OFFER.tagline}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', marginTop: '0.375rem' }}>
                * {ACTIVE_OFFER.disclaimer}
              </p>
            </div>
            <Link to="/admissions" className="btn-primary" style={{ flexShrink: 0 }}>
              View Offer Details <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* ─── COURSES ─── */}
      <section style={{ background: 'var(--off-white)' }} className="section-py" aria-labelledby="courses-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-chip">What We Teach</span>
              <h2 id="courses-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--navy)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                Courses for Every Goal
              </h2>
              <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                From beginner computer basics to advanced career courses — find the right programme for your next step.
              </p>
            </div>
          </Reveal>

          {/* Search */}
          <Reveal delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div className="search-wrap" style={{ flex: '1 1 220px' }}>
                <Search size={16} className="search-icon" aria-hidden />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search courses…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search courses"
                />
              </div>
            </div>
          </Reveal>

          {/* Category tabs */}
          <Reveal delay={150}>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
              role="tablist"
              aria-label="Filter courses by category"
            >
              <button
                className={`cat-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
                role="tab"
                aria-selected={activeCategory === 'all'}
              >
                All Courses
              </button>
              {Object.entries(COURSE_CATEGORIES).map(([key, val]) => (
                <button
                  key={key}
                  className={`cat-tab ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key as CourseCategory)}
                  role="tab"
                  aria-selected={activeCategory === key}
                >
                  {val.emoji} {val.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Course grid */}
          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--muted)' }}>
              <BookOpen size={40} style={{ margin: '0 auto 1rem', opacity: 0.4 }} />
              <p>No courses match your search. Try a different keyword or category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {filteredCourses.map((course, i) => (
                <Reveal key={course.id} delay={i * 40}>
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={200}>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link to="/courses" className="btn-outline-navy">
                Browse Full Course Catalogue <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY RACE REDDYS ─── */}
      <section style={{ background: '#fff' }} className="section-py" aria-labelledby="why-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="section-chip">Why Choose Us</span>
                <h2 id="why-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', color: 'var(--navy)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Learning Designed Around Your Growth
                </h2>
                <div className="divider" />
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  At Race Reddys, every course is built around practical application. You learn by working directly on systems — not just watching slides.
                </p>
                <Link to="/about" className="btn-outline-navy">
                  About the Institute <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { icon: <Laptop size={20} />, title: 'Hands-On Training', desc: 'Work directly on computers from your first day. Theory supports practice, not the other way around.' },
                  { icon: <BookOpen size={20} />, title: 'Skill-Focused Courses', desc: 'Courses structured to teach employable, applicable skills — not just exam preparation.' },
                  { icon: <Users size={20} />, title: 'Beginner-Friendly', desc: 'Start from zero. Our Basic Computer course welcomes absolute beginners.' },
                  { icon: <Lightbulb size={20} />, title: 'Career Pathways', desc: 'Career-oriented programmes in Software, AI, Digital Marketing, Design, and more.' },
                  { icon: <MapPin size={20} />, title: 'Convenient Location', desc: 'Easily accessible near Virar East Railway Station — well connected by local trains.' },
                  { icon: <Star size={20} />, title: 'Placement Support', desc: 'We assist learners with career guidance and placement opportunities (terms apply).' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--off-white)',
                      borderRadius: 10,
                      padding: '1.125rem',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div style={{ color: 'var(--royal)', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.8375rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── LEARN BY DOING (photo section) ─── */}
      <section
        style={{ background: 'var(--navy)', overflow: 'hidden' }}
        className="section-py"
        aria-labelledby="lab-heading"
      >
        <div className="container-rr">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
                  Practical Training
                </span>
                <h2 id="lab-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', color: '#fff', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  You Learn by Doing — Every Session
                </h2>
                <div style={{ width: 48, height: 3, background: 'var(--gold)', borderRadius: 999, marginBottom: '1.25rem' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    'Direct computer access from the first class',
                    'Real-world software and tools — not just theory',
                    'Projects and exercises included in course practice',
                    'Instructor-guided sessions with individual attention',
                    'Build a portfolio of skills by the end of your course',
                  ].map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      <CheckCircle size={16} style={{ color: 'var(--gold)', marginTop: 3, flexShrink: 0 }} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/contact" className="btn-primary">
                    Book a Visit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/student-coding.jpg"
                  alt="Indian student engaged in practical coding on a laptop in a training session"
                  style={{ width: '100%', height: 400, objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(7,27,58,0.85) 0%, transparent 100%)',
                  padding: '1.5rem', color: '#fff',
                }}>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', fontStyle: 'italic' }}>
                    Illustrative photo — representative of hands-on learning environment.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── HOW ADMISSION WORKS ─── */}
      <section style={{ background: 'var(--off-white)' }} className="section-py" aria-labelledby="steps-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-chip">Getting Started</span>
              <h2 id="steps-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                How Admission Works
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'Choose Your Course',
                desc: 'Browse our full course catalogue and identify the programme that matches your goals.',
                cta: { label: 'Browse Courses', to: '/courses' },
              },
              {
                num: '02',
                title: 'Contact the Institute',
                desc: 'Call or WhatsApp us to discuss your interest, batch options, and current offers.',
                cta: { label: 'Enquire Now', to: '/contact' },
              },
              {
                num: '03',
                title: 'Visit & Enrol',
                desc: 'Visit us at Raut Arcade, Virar East to complete enrolment and begin your learning journey.',
                cta: { label: 'Get Directions', to: SITE_CONFIG.address.googleMapsSearch, external: true },
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '2rem 1.5rem',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: '50%',
                    background: 'var(--navy)',
                    color: 'var(--gold)',
                    fontWeight: 800, fontSize: '1.125rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{step.desc}</p>
                  {step.cta.external ? (
                    <a href={step.cta.to} target="_blank" rel="noopener noreferrer" className="btn-outline-navy" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
                      {step.cta.label} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link to={step.cta.to} className="btn-outline-navy" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
                      {step.cta.label} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEARNING OUTCOMES ─── */}
      <section style={{ background: '#fff' }} className="section-py" aria-labelledby="outcomes-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-chip">Course Outcomes</span>
              <h2 id="outcomes-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                What You Can Do After Training
              </h2>
              <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
                Skills you develop open new possibilities — at work, in business, or as a stepping stone for further study.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { area: 'Office & Accounting', skills: 'Manage spreadsheets, prepare accounts, file GST returns, handle payroll with Tally.' },
              { area: 'Software & Web Dev', skills: 'Build web pages and applications, understand programming logic, contribute to development projects.' },
              { area: 'AI & Data Science', skills: 'Work with AI tools, analyse data, apply machine learning concepts to real problems.' },
              { area: 'Design & Creative', skills: 'Create graphics, edit photos, design marketing materials, and build a design portfolio.' },
              { area: 'Digital Marketing', skills: 'Run social media campaigns, improve SEO, manage paid ads, and measure performance.' },
              { area: 'Cyber Security', skills: 'Understand threats, apply security controls, and support secure IT environments.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '1.25rem',
                  borderLeft: '3px solid var(--gold)',
                }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.area}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.skills}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.8125rem', marginTop: '1.5rem', fontStyle: 'italic' }}>
            These are potential skill outcomes — individual results will vary. We do not guarantee employment or specific salary outcomes.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: 'var(--off-white)' }} className="section-py" aria-labelledby="faq-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="section-chip">Questions Answered</span>
                <h2 id="faq-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', color: 'var(--navy)', marginTop: '0.75rem' }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: '0 1.5rem' }}>
                {FAQS.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                Have more questions?{' '}
                <Link to="/contact" style={{ color: 'var(--royal)', fontWeight: 600 }}>Contact us directly</Link> — we are happy to help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── LOCATION + CTA ─── */}
      <section style={{ background: 'var(--navy)' }} className="section-py" aria-labelledby="cta-heading">
        <div className="container-rr">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              {/* Location info */}
              <div>
                <span className="section-chip" style={{ background: 'rgba(217,174,82,0.12)', color: 'var(--gold)', borderColor: 'rgba(217,174,82,0.3)' }}>
                  Find Us
                </span>
                <h2 id="cta-heading" style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.375rem)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  Visit Race Reddys Today
                </h2>

                <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                    <MapPin size={18} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#fff', display: 'block' }}>Race Reddys Advanced Computer Education</strong>
                      {SITE_CONFIG.address.line1},<br />
                      {SITE_CONFIG.address.line2},<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} — {SITE_CONFIG.address.pin}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                    <Phone size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </address>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem' }}>
                  <a
                    href={SITE_CONFIG.address.googleMapsSearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MapPin size={15} />
                    Get Directions
                  </a>
                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Enquiry form */}
              <div style={{
                background: '#fff', borderRadius: 14,
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.375rem' }}>
                  Enquire About Admissions
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Fill the form and we'll connect via WhatsApp instantly.
                </p>
                <EnquiryForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

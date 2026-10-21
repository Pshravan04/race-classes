import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 text-sm text-gray-600" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group" aria-label="Race Reddys Home">
              <img
                src="/stitch-logo.png"
                alt="Race Reddys Monogram Logo"
                className="h-10 w-10 object-contain rounded-full shadow-inner border border-gray-200"
              />
              <div>
                <span className="block font-black text-base text-[#0F1E36] group-hover:text-[#1556A6] transition-colors">
                  RACE REDDYS
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  Advanced Computer Education
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-500 max-w-sm mb-4 leading-relaxed">
              Empowering students, fresh graduates, and career changers across Virar East, Vasai, and Palghar with industry-standard IT credentials and authentic practical lab training.
            </p>

            <div className="text-xs font-medium text-gray-700 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#1556A6] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#1556A6] shrink-0" />
                <span>
                  Direct Phone:{' '}
                  <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="text-[#1556A6] font-bold hover:underline">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#1556A6] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black transition-colors">
                  About Institute
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-black transition-colors">
                  All Courses Catalog
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-black transition-colors">
                  Admission Offers (50% Off)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses/tally-gst" className="hover:text-black transition-colors">
                  TallyPrime + GST Expert
                </Link>
              </li>
              <li>
                <Link to="/courses/basic-computer" className="hover:text-black transition-colors">
                  Basic Computer &amp; Typing
                </Link>
              </li>
              <li>
                <Link to="/courses/full-stack-python" className="hover:text-black transition-colors">
                  Full Stack Web Dev (Python)
                </Link>
              </li>
              <li>
                <Link to="/courses/graphic-design" className="hover:text-black transition-colors">
                  Graphic Design (Photoshop)
                </Link>
              </li>
              <li>
                <Link to="/courses/ai-prompt-engineering" className="hover:text-black transition-colors">
                  AI Prompting &amp; Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Accreditations / Certifications */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Accreditations
            </h4>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              Recognized frameworks ensuring all course certificates are valid for government employment and private sector jobs.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-gray-100 text-[10px] font-semibold px-2 py-1 rounded text-gray-700">
                ISO 9001:2015
              </span>
              <span className="bg-gray-100 text-[10px] font-semibold px-2 py-1 rounded text-gray-700">
                GCC-TBC
              </span>
              <span className="bg-gray-100 text-[10px] font-semibold px-2 py-1 rounded text-gray-700">
                MSBTE Pattern
              </span>
              <span className="bg-gray-100 text-[10px] font-semibold px-2 py-1 rounded text-gray-700">
                NSDC Aligned
              </span>
            </div>
            <div className="mt-4">
              <a
                href={SITE_CONFIG.address.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#1556A6] font-bold hover:underline"
              >
                <span>Find Us on Google Maps</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {currentYear} Race Reddys Advanced Computer Education. All rights reserved. Virar East, Maharashtra.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/admissions" className="hover:underline">
              Terms of Admission
            </Link>
            <Link to="/contact" className="hover:underline">
              Virar East Campus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

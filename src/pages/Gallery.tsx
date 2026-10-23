import { MessageSquare, Upload } from 'lucide-react';
import SEO from '../components/SEO';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
import { SITE_CONFIG } from '../data/config';

export default function Gallery() {

  return (
    <>
      <SEO
        title="Student Success & Gallery | Race Reddys Virar East"
        description="Authentic moments from our computer lab at Raut Arcade, Virar East. Hands-on learning, practical typing tests, and real student achievements."
        canonical="/gallery"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              AUTHENTIC LAB MOMENTS • खरी प्रगती
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              Gallery &amp; Student Learning Journey
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              We stand for genuine, grounded education. Explore authentic daily sessions, active workstation practice, and student certification milestones at Raut Arcade, Virar East.
            </p>
          </div>
        </div>
      </section>

      {/* Real Lab Photography Grid */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Slot 1: Active Workstation Session */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/lab-students.jpg"
                  alt="Students practicing on computers in Virar East lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0084FF] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Live Classroom
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>Raut Arcade Lab 202</span>
                  <span className="text-emerald-400 font-bold">1 Student : 1 PC</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Individual Practical Workstations
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Morning &amp; Afternoon batches at Raut Arcade. Confirmed machine time with zero sharing.
                </span>
              </div>
            </div>

            {/* Slot 2: Instructor Guidance */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/instructor-teaching.jpg"
                  alt="Faculty assisting student 1-on-1 at computer desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  1-on-1 Mentorship
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>Desk Guidance</span>
                  <span className="text-sky-300 font-bold">Zero Hesitation</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Patient, Step-by-Step Teaching
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Teachers answer every doubt directly at the student’s desk. Ideal for absolute beginners.
                </span>
              </div>
            </div>

            {/* Slot 3: Coding & Typing Lab */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/student-coding.jpg"
                  alt="Student working on coding and typing exercise"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Coding &amp; Typing
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>GCC-TBC Pattern</span>
                  <span className="text-amber-300 font-bold">English &amp; Marathi</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Speed Typing &amp; Web Development
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Timed speed assessments for government exam preparation and modern software projects.
                </span>
              </div>
            </div>

            {/* Slot 4: Certificate Distribution Ceremony */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/certificate-success.jpg"
                  alt="Student celebrating course completion and certification at Race Reddys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Recognized Diploma
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>5,000+ Alumni</span>
                  <span className="text-emerald-400 font-bold">100% Certified</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Course Completion Moments
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Celebrating students completing career certifications and stepping into corporate roles.
                </span>
              </div>
            </div>

            {/* Slot 5: TallyPrime Practical Training */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/tally-practice.jpg"
                  alt="Student practicing TallyPrime accounting with GST in lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Accounting &amp; GST
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>TallyPrime + GST</span>
                  <span className="text-yellow-300 font-bold">Live Billing</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Accounting &amp; GST Computation
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Hands-on voucher entries, bank reconciliations, and tax returns for office jobs.
                </span>
              </div>
            </div>

            {/* Slot 6: Ladies & Students Batch Atmosphere */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/images/ladies-guidance.jpg"
                  alt="Encouraging environment for ladies and students at Race Reddys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Ladies Exclusive
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>12:30 PM – 4:00 PM</span>
                  <span className="text-white font-bold">Safe &amp; Quiet</span>
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-sm font-bold text-[#071B3A] block">
                  Safe &amp; Encouraging Space
                </strong>
                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">
                  Empowering homemakers, working women, and young students with digital confidence.
                </span>
              </div>
            </div>

          </div>

          {/* Authentic "Share Your Story" Placeholder Box */}
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#C59B27] shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#FAF7EE] text-[#C59B27] flex items-center justify-center mx-auto mb-3">
              <Upload size={22} />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#071B3A] font-serif-heading mb-2">
              Are you an alumni of Race Reddys? Share Your Story!
            </h2>

            <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl mx-auto mb-5 leading-relaxed">
              We love celebrating our students’ achievements. Send us your photo, the course you completed, and what you’re currently working on. We will feature your genuine journey right here on our student showcase wall.
            </p>

            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                'Hello Race Reddys! I am an alumni of the institute. I would like to share my review and photo for the website showcase.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
            >
              <MessageSquare size={16} />
              <span>Send Your Story on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      <RailwayTrackDivider label="VIRAR EAST • REAL STUDENTS • REAL LEARNING" />
    </>
  );
}

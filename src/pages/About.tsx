import { MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import RailwayTrackDivider from '../components/RailwayTrackDivider';
import { Link } from 'react-router-dom';

export default function About() {

  return (
    <>
      <SEO
        title="About Us | Race Reddys Advanced Computer Education Virar East"
        description="The story of Race Reddys in Virar East: eliminating the stressful commute to Mumbai with 100% practical computer training right outside Virar railway station."
        canonical="/about"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7EE] border-b border-[#E8E2D5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              OUR MISSION &amp; HERITAGE • आमच्याबद्दल
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              Grounded in Virar, Built for Practical Tech Careers
            </h1>
            
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              We started Race Reddys with one clear conviction: students, homemakers, and job seekers in Virar and Vasai should not have to spend 4 hours in crowded local trains just to learn quality computer skills.
            </p>
          </div>
        </div>
      </section>

      {/* 1. The Story of the Institute */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-[#334155] leading-relaxed text-sm sm:text-base">
              <div className="station-board text-xs mb-2">
                THE VIRAR STORY
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] font-serif-heading">
                Why Should Virar Students Travel to Mumbai for Computer Education?
              </h2>

              <p>
                Every morning, thousands of students and youths from Virar, Nalasopara, and Vasai board jam-packed Western Railway local trains heading toward Andheri, Dadar, and Churchgate. Many spend up to 4 exhausting hours every day just to attend a 90-minute computer or accounting class in South or Central Mumbai.
              </p>

              <p>
                <strong>Race Reddys was founded to end this exhausting cycle.</strong> Located at 202, Raut Arcade, right across the Virar East railway subway, we bring state-of-the-art syllabus, licensed software, and seasoned instructors right to your doorstep in Virar.
              </p>

              <p>
                Here, students learn at their own pace, with 100% individual workstation time. No sharing keyboards, no rushed theoretical lectures, and no commute fatigue.
              </p>

              <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#C59B27]/40 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#071B3A] text-[#C59B27] flex items-center justify-center font-bold shrink-0">
                  RR
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#071B3A]">
                  "Save your travel energy for learning and coding. Your career starts right here on Platform 2."
                </span>
              </div>
            </div>

            {/* Right Photo Slot: Institute Building & Lab (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Slot 1: Lab Space */}
              <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#071B3A] flex flex-col items-center justify-center text-center p-4">
                  <img
                    src="/hero-lab.jpg"
                    alt="Race Reddys computer laboratory in Raut Arcade Virar East"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="relative z-10 bg-[#071B3A]/85 p-3 rounded-lg border border-white/20 text-white max-w-xs">
                    <span className="text-xs font-bold block text-[#D8AF3E]">
                      [Real Lab Photo Slot]
                    </span>
                    <span className="text-[11px] text-gray-200">
                      Raut Arcade, 2nd Floor Workstations
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-gray-500 block text-center mt-2 font-mono">
                  Recommended size: 1200x900px • Natural Lab Lighting
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      <RailwayTrackDivider label="THE TEACHING APPROACH • शिकवण्याची पद्धत" />

      {/* 2. The Teaching Approach */}
      <section className="py-12 bg-white border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="station-board-yellow inline-block mb-3 text-xs font-black">
              100% HANDS-ON LEARNING
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
              How We Teach: Individual Machine Time, Zero Cramming
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              We reject the old method of boring blackboard theory lectures. Computers are learned by touching the keys and fixing errors yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-[#FAF7EE] rounded-2xl border border-[#E8E2D5]">
              <span className="w-10 h-10 rounded-lg bg-[#071B3A] text-[#C59B27] flex items-center justify-center font-black mb-3">
                1:1
              </span>
              <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading mb-2">
                One Student, One PC
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                You never have to stand behind someone or wait for your turn. You get an assigned PC for your entire batch duration.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7EE] rounded-2xl border border-[#E8E2D5]">
              <span className="w-10 h-10 rounded-lg bg-[#C0392B] text-white flex items-center justify-center font-black mb-3">
                100%
              </span>
              <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading mb-2">
                Practical Real-World Tasks
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Whether creating actual GST tax invoices in Tally, editing real raw photos in Photoshop, or deploying web code online.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7EE] rounded-2xl border border-[#E8E2D5]">
              <span className="w-10 h-10 rounded-lg bg-[#C59B27] text-[#071B3A] flex items-center justify-center font-black mb-3">
                ∞
              </span>
              <h3 className="text-lg font-bold text-[#071B3A] font-serif-heading mb-2">
                Free Lifetime Doubt Solving
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Finished your course 6 months ago but stuck on a job problem? Walk back into Raut Arcade. Our doors remain open for guidance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The Lab & Infrastructure */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lab Specifications (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="station-board text-xs mb-2">
                LAB SPECIFICATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] font-serif-heading">
                Modern, Comfortable, Air-Conditioned Workstation Lab
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Designed for extended, focused learning hours without strain or technical interruptions:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E8E2D5]">
                  <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1C2430]">
                    <strong>High-Speed SSD Workstations:</strong> Fast boot times, lag-free coding IDEs, and smooth graphics editing.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E8E2D5]">
                  <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1C2430]">
                    <strong>Dual-Language Keyboards:</strong> Ergonomic keyboards supporting fast English and Marathi InScript typing.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E8E2D5]">
                  <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1C2430]">
                    <strong>Inverter Power Backup:</strong> Uninterrupted power supply ensures zero loss of student practice work during local outages.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E8E2D5]">
                  <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1C2430]">
                    <strong>Safe &amp; Respectful Atmosphere:</strong> Dedicated slots for ladies and students with personalized, gentle coaching.
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Slots: Faculty & Classrooms (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Photo Slot 2: Faculty in Class */}
              <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs">
                <div className="aspect-[4/3] rounded-xl bg-[#071B3A] overflow-hidden relative flex flex-col items-center justify-center p-3 text-center">
                  <img
                    src="/instructor-teaching.jpg"
                    alt="Instructor assisting a student at Race Reddys"
                    className="absolute inset-0 w-full h-full object-cover opacity-75"
                  />
                  <div className="relative z-10 bg-[#071B3A]/85 p-2.5 rounded-lg border border-white/20 text-white">
                    <span className="text-xs font-bold block text-[#D8AF3E]">
                      [Faculty In Action Slot]
                    </span>
                    <span className="text-[10px] text-gray-200">
                      1-on-1 Student Assistance
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 block text-center mt-2 font-mono">
                  Recommended size: 800x600px
                </span>
              </div>

              {/* Photo Slot 3: Student Typing Practice */}
              <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs">
                <div className="aspect-[4/3] rounded-xl bg-[#071B3A] overflow-hidden relative flex flex-col items-center justify-center p-3 text-center">
                  <img
                    src="/student-coding.jpg"
                    alt="Student coding and practicing typing"
                    className="absolute inset-0 w-full h-full object-cover opacity-75"
                  />
                  <div className="relative z-10 bg-[#071B3A]/85 p-2.5 rounded-lg border border-white/20 text-white">
                    <span className="text-xs font-bold block text-[#D8AF3E]">
                      [Student Practice Slot]
                    </span>
                    <span className="text-[10px] text-gray-200">
                      Individual Workstation Practice
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 block text-center mt-2 font-mono">
                  Recommended size: 800x600px
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 bg-white border-t border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#071B3A] font-serif-heading mb-3">
            Want to see the lab in person?
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5568] mb-6">
            Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Take a seat, experience the demo class, and inspect our computers yourself.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#071B3A] hover:bg-[#0E2B5C] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-[#C59B27]"
            >
              <MapPin size={15} className="text-[#D8AF3E]" />
              <span>Get Directions to Raut Arcade</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

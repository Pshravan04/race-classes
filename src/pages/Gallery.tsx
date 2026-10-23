import { Camera, MessageSquare, Award, Heart, Upload } from 'lucide-react';
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
              We stand for genuine, grounded education. We do not publish invented placement numbers or fake testimonials. Below are real photo slots from our active Virar lab sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Real Photo Slots Grid */}
      <section className="py-12 sm:py-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Slot 1: Active Workstation Session */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#071B3A]">
                <img
                  src="/hero-lab.jpg"
                  alt="Students practicing on computers in Virar East lab"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#071B3A]/90 p-2 rounded text-white text-[11px] font-bold">
                  [Photo Slot: Active Workstation Session]
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  Individual Practical Practice
                </strong>
                <span className="text-[11px] text-gray-500">
                  Morning &amp; Afternoon batches at Raut Arcade
                </span>
              </div>
            </div>

            {/* Slot 2: Instructor Guidance */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#071B3A]">
                <img
                  src="/instructor-teaching.jpg"
                  alt="Faculty assisting student 1-on-1"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#071B3A]/90 p-2 rounded text-white text-[11px] font-bold">
                  [Photo Slot: 1-on-1 Instructor Guidance]
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  Patient, Step-by-Step Teaching
                </strong>
                <span className="text-[11px] text-gray-500">
                  Teachers answer every doubt directly at the student’s desk
                </span>
              </div>
            </div>

            {/* Slot 3: Coding & Typing Lab */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#071B3A]">
                <img
                  src="/student-coding.jpg"
                  alt="Student working on coding exercise"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#071B3A]/90 p-2 rounded text-white text-[11px] font-bold">
                  [Photo Slot: Coding &amp; Typing Practice]
                </div>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  English &amp; Marathi Typing Software
                </strong>
                <span className="text-[11px] text-gray-500">
                  Timed speed assessments for government exam preparation
                </span>
              </div>
            </div>

            {/* Slot 4: Certificate Distribution Ceremony */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7EE] flex flex-col items-center justify-center text-center p-4">
                <Award size={36} className="text-[#C59B27] mb-2" />
                <span className="text-xs font-bold text-[#071B3A]">
                  [Photo Slot: Certificate Distribution]
                </span>
                <span className="text-[10px] text-gray-500 mt-1">
                  Upload batch graduation &amp; certificate handover photos
                </span>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  Course Completion Moments
                </strong>
                <span className="text-[11px] text-gray-500">
                  Celebrating students completing their certifications
                </span>
              </div>
            </div>

            {/* Slot 5: Raut Arcade Center Frontage */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7EE] flex flex-col items-center justify-center text-center p-4">
                <Camera size={36} className="text-[#C0392B] mb-2" />
                <span className="text-xs font-bold text-[#071B3A]">
                  [Photo Slot: Raut Arcade Building &amp; Reception]
                </span>
                <span className="text-[10px] text-gray-500 mt-1">
                  Exterior view opposite Virar East subway for easy student navigation
                </span>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  Institute Campus &amp; Entrance
                </strong>
                <span className="text-[11px] text-gray-500">
                  2nd Floor, Raut Arcade, Virar East
                </span>
              </div>
            </div>

            {/* Slot 6: Ladies & Students Batch Atmosphere */}
            <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-[#C59B27] shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7EE] flex flex-col items-center justify-center text-center p-4">
                <Heart size={36} className="text-[#C59B27] mb-2" />
                <span className="text-xs font-bold text-[#071B3A]">
                  [Photo Slot: Ladies &amp; Homemakers Batch]
                </span>
                <span className="text-[10px] text-gray-500 mt-1">
                  Comfortable, supportive learning environment during afternoon hours
                </span>
              </div>
              <div className="pt-3 px-1">
                <strong className="text-xs font-bold text-[#071B3A] block">
                  Safe &amp; Encouraging Space
                </strong>
                <span className="text-[11px] text-gray-500">
                  Empowering homemakers and working women with digital confidence
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

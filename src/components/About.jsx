import React from 'react';
import { UserCheck, GraduationCap, Target, BookOpen, Compass, Code, Layers, HardDrive, Award, Sparkles, Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d1117]/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & CAREER GOALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-[#d4af37] font-serif italic">Manjunath</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            BCA Graduate (7.59 CGPA) bridging software engineering, AI, and IoT hardware.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card with Portrait Thumbnail */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Profile Header Row with Photo Thumbnail */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0a0e14] border-2 border-[#d4af37] overflow-hidden flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="/profile.jpeg"
                    alt="Manjunath Alagawadi"
                    className="w-full h-full object-cover object-center scale-[0.9]"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Manjunath Alagawadi</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
                      BCA Graduate
                    </span>
                  </div>
                  <p className="text-xs text-[#d4af37] font-mono font-semibold">
                    Full-Stack Developer, AI & IoT Enthusiast
                  </p>
                  <p className="text-[11px] text-gray-300 font-medium">
                    DR DG Shetty College, Dharwad (Karnatak University · 7.59 CGPA)
                  </p>
                </div>
              </div>

              {/* High-Contrast, Extremely Readable Engineering Philosophy Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#161b22] border border-[#d4af37]/40 border-l-4 border-l-[#d4af37] shadow-lg flex items-start gap-3.5">
                <Quote className="w-5 h-5 text-[#d4af37] shrink-0 rotate-180 mt-0.5" />
                <p className="text-sm sm:text-base text-white font-sans font-medium leading-relaxed tracking-normal">
                  "{personalInfo.philosophyQuote}"
                </p>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Completed my <strong className="text-white">BCA degree</strong> with <strong className="text-[#d4af37]">7.59 CGPA</strong> from DR DG Shetty College, Dharwad (Karnatak University).
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My experience combines full-stack web development (Python, Flask, SQL, REST APIs) with <strong className="text-white">IoT & computer vision</strong>. From RAG-driven AI notes systems to OpenCV gesture tracking on ESP32 microcontrollers, I enjoy bridging software with physical devices.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Actively seeking opportunities as a <strong className="text-white">Software Engineer, Full-Stack Developer, AI Specialist, or IoT Engineer</strong>.
              </p>
            </div>

            {/* Currently Learning Banner */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                <BookOpen className="w-4 h-4" />
                <span>CURRENTLY EXPANDING TECHNICAL HORIZONS IN:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.currentlyLearning.map((topic, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#161b22] border border-[#d4af37]/30 text-xs text-gray-200 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Highlight 1: Core Web & Backend Strength */}
            <div className="glass-card p-5 rounded-2xl flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-base">Backend & Full-Stack</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Python, Flask REST APIs, session security, SQL (MySQL/SQLite), JavaScript integration.
                </p>
              </div>
            </div>

            {/* Highlight 2: IoT & Embedded Hardware */}
            <div className="glass-card p-5 rounded-2xl flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-base">IoT & Computer Vision</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  ESP32/Arduino microcontrollers, OpenCV gesture tracking, GPIO sensor interfacing.
                </p>
              </div>
            </div>

            {/* Highlight 3: Immediate Availability */}
            <div className="glass-card p-5 rounded-2xl flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-base">Immediate Availability</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Graduated (7.59 CGPA); ready for full-time roles or tech internships.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

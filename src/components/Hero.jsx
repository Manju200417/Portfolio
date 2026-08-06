import React from 'react';
import { 
  ArrowRight, Download, Github, Linkedin, Mail, Phone, Code2, 
  Sparkles, Award, Trophy, Layers, CheckCircle2, Terminal, Cpu, HardDrive, MapPin, MessageSquare
} from 'lucide-react';
import { personalInfo, stats, techMarquee } from '../data/portfolioData';
import TechLogo from './TechLogo';

export default function Hero({ onOpenResume, onShowToast }) {
  return (
    <section id="hero" className="relative pt-20 pb-12 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Side by side layout, Desktop: full grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-left order-2 lg:order-1">
            
            {/* Status & Relocation Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0d1117] border border-[#d4af37]/40 text-xs font-medium text-emerald-400 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-gray-200 text-xs">Graduate (7.59 CGPA) · Open for Dev Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161b22] border border-[#d4af37]/30 text-xs font-semibold text-gray-200 md:hidden">
                <MapPin className="w-3 h-3 text-[#d4af37]" />
                <span>Open to Relocate</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gold-text-gradient font-serif italic font-normal tracking-normal text-2xl sm:text-3xl lg:text-4xl">
                Manjunath Alagawadi
              </span>
            </h1>

            {/* Subheadline */}
            <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-[#d4af37]">
              <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
              <span className="text-sm sm:text-base">{personalInfo.tagline}</span>
            </div>

            {/* Short Paragraph - Always visible */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              {personalInfo.bioSummary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0a0e14] bg-[#d4af37] hover:bg-[#e5b83b] rounded-xl transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Direct PDF Download Link */}
              <a
                href={personalInfo.resumePdfUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onShowToast && onShowToast("Downloading PDF Resume...")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-200 bg-[#0d1117] hover:bg-[#161b22] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Resume</span>
              </a>

              {/* Direct WhatsApp Quick Chat Button */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all hover:-translate-y-0.5"
                title="Chat on WhatsApp"
              >
                <TechLogo name="whatsapp" className="w-3.5 h-3.5" />
                <span>Chat</span>
              </a>
            </div>

            {/* Quick Links & Education Micro Tag */}
            <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-1.5 rounded-lg bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                  title="Email Me"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-gray-300 text-[10px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>BCA Grad (7.59 CGPA) · Dharwad</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait - Stacked on mobile, right on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mt-6 lg:mt-0">
            <div className="relative group">
              
              {/* Outer Pulsing Glow Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#b89228] opacity-80 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

              {/* Avatar Frame Container - Smaller on mobile */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-[#0a0e14] border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                <div className="w-full h-full rounded-full bg-[#0d1117] overflow-hidden relative flex items-center justify-center">
                  
                  {/* Preferred photo scale */}
                  <img
                    src="/profile.jpeg"
                    alt="Manjunath Alagawadi"
                    className="w-full h-full object-cover object-center scale-[0.88] group-hover:scale-90 transition-transform duration-500 rounded-full"
                  />

                  {/* Gentle vignette at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14]/60 via-transparent to-transparent pointer-events-none rounded-full" />

                </div>
              </div>
              
              {/* Name Tag Pill Badge - Positioned below the image on desktop, above on mobile */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0a0e14]/95 border border-[#d4af37] text-[10px] sm:text-[11px] text-[#d4af37] font-semibold shadow-lg backdrop-blur-md whitespace-nowrap sm:-bottom-10">
                Manjunath Alagawadi
              </div>

              {/* Floating Tech Badges - Smaller on mobile */}
              <div className="absolute top-3 right-3 p-1.5 rounded-xl bg-[#0a0e14]/90 border border-[#d4af37]/50 text-[#d4af37] shadow-lg animate-bounce sm:hidden" style={{ animationDuration: '3.5s' }}>
                <Terminal className="w-3 h-3" />
              </div>
              <div className="absolute bottom-4 left-2 p-1.5 rounded-xl bg-[#0a0e14]/90 border border-[#d4af37]/50 text-[#d4af37] shadow-lg animate-bounce sm:hidden" style={{ animationDuration: '4.5s' }}>
                <HardDrive className="w-3 h-3" />
              </div>

            </div>
          </div>

        </div>

        {/* Recruiter Stat Strip - Hidden on mobile, shown on tablet+ */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card p-4 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left space-y-1"
            >
              <div className="flex items-center gap-2 text-[#d4af37]">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-serif text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Badge Marquee Strip - Hidden on mobile, shown on tablet+ */}
        <div className="mt-8 sm:mt-12 overflow-hidden relative w-full py-3 sm:py-4 bg-[#0d1117]/60 border-y border-[#d4af37]/15 rounded-2xl backdrop-blur-sm sm:block">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0e14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0e14] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <a 
                key={i} 
                href="#projects"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#161b22] border border-white/10 text-xs font-medium text-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
              >
                <TechLogo name={tech.name} className="w-3.5 h-3.5" />
                <span>{tech.name}</span>
                <span className="text-[9px] text-gray-500 font-mono hidden sm:inline">({tech.category})</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume, className = "" }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-[#070a0e] border-t border-[#d4af37]/20 pt-16 pb-12 text-gray-400 relative w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0d1117] border border-[#d4af37] text-[#d4af37] font-serif font-bold text-lg flex items-center justify-center">
                <span>{personalInfo.initials}</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md">
              {personalInfo.tagline} — BCA Student @ DR DG Shetty College, Dharwad. Building production-grade Python, Flask, REST API, & AI applications.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase text-[#d4af37] block">Quick Links</span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <a href="#hero" className="hover:text-[#d4af37] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#d4af37] transition-colors">Projects</a>
              <a href="#skills" className="hover:text-[#d4af37] transition-colors">Skills</a>
              <a href="#certifications" className="hover:text-[#d4af37] transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Icons & Top Button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-3">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-[#0d1117] border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#d4af37] hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Manjunath Alagawadi. Built as a Personal Job-Application Portfolio.</p>
          <div className="flex items-center gap-2 text-gray-400 font-mono">
            <span>Dharwad, Karnataka, India</span>
            <span>·</span>
            <span className="text-[#d4af37]">Open to Hire</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

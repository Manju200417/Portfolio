import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, Code2, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Approach', href: '#approach' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0e14]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Initials */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0d1117] border border-[#d4af37]/40 text-[#d4af37] font-serif font-bold text-lg shadow-md group-hover:border-[#d4af37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
              <span>{personalInfo.initials}</span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0a0e14]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold tracking-wide text-sm sm:text-base group-hover:text-[#d4af37] transition-colors">
                Manjunath A.
              </span>
              <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                Full-Stack & AI Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0d1117]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm text-gray-300 hover:text-[#d4af37] transition-colors rounded-full hover:bg-white/5 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button - Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-[#0a0e14] bg-[#d4af37] hover:bg-[#e5b83b] rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-[#0a0e14] bg-[#d4af37] rounded-lg shadow-sm"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg bg-[#0d1117] border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          ref={menuRef}
          className="sm:hidden bg-[#0d1117]/95 border-b border-[#d4af37]/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-[#d4af37] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#d4af37]/60">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#0a0e14] bg-[#d4af37] rounded-xl shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

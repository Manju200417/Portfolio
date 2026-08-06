import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle, ShieldCheck, ExternalLink, Bot, Code2, Database, FileCode, Building2, Eye, Filter, Calendar, Key } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificationDetailModal from './CertificationDetailModal';
import TechLogo from './TechLogo';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const certRefs = useRef([]);

  const filteredCerts = certifications.filter((cert) => {
    return activeCategory === 'All' || cert.category === activeCategory;
  });

  // Track active certification on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      setIsScrolling(true);
      
      const cards = certRefs.current;
      const containerWidth = container.offsetWidth;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        
        const cardLeft = card.offsetLeft;
        
        // Check if card is in the center of viewport
        const viewportCenter = container.scrollLeft + containerWidth / 2;
        const cardCenter = cardLeft + card.offsetWidth / 2;
        
        if (Math.abs(viewportCenter - cardCenter) < containerWidth / 2) {
          setActiveCertIndex(i);
          break;
        }
      }
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 400);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [filteredCerts]);

  const scrollToCert = (index) => {
    const container = scrollContainerRef.current;
    const card = certRefs.current[index];
    if (container && card) {
      container.scrollTo({
        left: card.offsetLeft - 16,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollStart = () => {
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setTimeout(() => setIsScrolling(false), 400);
  };

  return (
    <section id="certifications" className="py-20 bg-[#0d1117]/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="text-[#d4af37] font-serif italic">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Verified skill certifications from HackerRank, OneRoadmap (DPIIT & MSME), Google, and Deloitte Australia with tech skill logos.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {['All', 'Software Development', 'Database', 'AI & ML', 'Enterprise Sim'].map((catLabel) => {
            const matchKey = catLabel === 'All' ? 'All' 
              : catLabel === 'Software Development' ? 'Software Development'
              : catLabel === 'Database' ? 'Database & Data Architecture'
              : catLabel === 'AI & ML' ? 'AI & Machine Learning'
              : 'Industry & Enterprise Simulation';

            return (
              <button
                key={catLabel}
                onClick={() => setActiveCategory(matchKey)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === matchKey
                    ? 'bg-[#d4af37] text-[#0a0e14] font-bold shadow-md shadow-[#d4af37]/20 scale-105'
                    : 'bg-[#161b22] text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {catLabel}
              </button>
            );
          })}
        </div>

        {/* Certifications - Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10">
          {/* Mobile: Horizontal scroll - one card at a time with dots indicator */}
          <div className="md:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-12 scrollbar-hide"
              style={{ 
                scrollSnapType: 'x mandatory', 
                msOverflowStyle: 'none', 
                scrollbarWidth: 'none',
                scrollBehavior: 'smooth'
              }}
              onTouchStart={handleScrollStart}
              onTouchEnd={handleScrollEnd}
            >
              {filteredCerts.map((cert, index) => {
                const isActive = index === activeCertIndex;
                
                return (
                  <div 
                    key={cert.id} 
                    ref={el => certRefs.current[index] = el}
                    className={`p-5 rounded-2xl border transition-all duration-500 ${
                      isActive 
                        ? 'border-[#d4af37]/40 bg-[#0d1117] shadow-[0_0_25px_rgba(212,175,55,0.15)]' 
                        : 'border-white/10 bg-transparent'
                    }`}
                    style={{ 
                      width: 'calc(100% - 32px)',
                      scrollSnapAlign: 'start',
                      minWidth: 'calc(100% - 32px)',
                      transform: isActive ? 'scale(1)' : 'scale(0.95)',
                      opacity: isActive ? 1 : 0.85,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div className="space-y-3">
                      {/* Header Top Row with Tech Skill Logo + Issuer Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {/* Technology Skill Logo Box */}
                          <div className={`p-2 rounded-xl border transition-all duration-300 ${
                            isActive ? 'border-[#d4af37]/50 bg-[#0a0e14] shadow-md' : 'border-white/10 bg-transparent'
                          }`}>
                            <TechLogo name={cert.techLogoName || cert.title} className="w-5 h-5 text-[#d4af37]" />
                          </div>

                          {/* Badge */}
                          <span className={`text-[10px] uppercase font-mono px-2.5 py-1 rounded transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#d4af37] text-[#0a0e14] font-bold shadow-md' 
                              : 'bg-transparent text-gray-400 border border-white/5'
                          }`}>
                            {cert.badge}
                          </span>
                        </div>
                        
                        <span className="text-xs text-gray-500 font-mono flex items-center gap-1 shrink-0 transition-colors duration-300">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          {cert.issueDate}
                        </span>
                      </div>

                      {/* Title - Only title is gold */}
                      <h3 className={`text-base font-bold leading-snug pt-1 transition-all duration-300 ${
                        isActive ? 'text-[#d4af37] text-lg' : 'text-white'
                      }`}>
                        {cert.title}
                      </h3>

                      {/* Issuer Name - Normal gray */}
                      <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 transition-colors duration-300">
                        <TechLogo name={cert.issuer} className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        <span>Issued by <strong className="text-gray-300">{cert.issuer}</strong></span>
                      </p>

                      {/* Credential ID if present */}
                      {cert.credentialId && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono transition-all duration-300">
                          <Key className="w-3 h-3 text-gray-400" />
                          <span className="text-[11px] text-gray-400">ID: <strong>{cert.credentialId}</strong></span>
                        </div>
                      )}

                      {/* Validated Skills Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {cert.skillsValidated.map((skill, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded font-mono transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-6 pt-4 flex items-center justify-between transition-all duration-300">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-mono transition-colors duration-300"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300 hover:underline"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[11px] text-gray-500 font-mono">Verified</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scroll indicator dots for certifications */}
            <div className="flex justify-center items-center gap-2 mt-3">
              {filteredCerts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCert(index)}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    index === activeCertIndex 
                      ? 'bg-[#d4af37]' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to certification ${index + 1}`}
                >
                  {index === activeCertIndex && (
                    <span className="absolute inset-0 bg-[#d4af37] animate-pulse rounded-full opacity-50" />
                  )}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === activeCertIndex ? 'w-6 h-6 -ml-2 -mt-2 bg-transparent' : 'w-0 h-0'
                  }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div 
                key={cert.id} 
                className="p-6 rounded-2xl border border-white/10 hover:border-gray-600 transition-all duration-300 group bg-transparent"
              >
                <div className="space-y-3">
                  {/* Header Top Row with Tech Skill Logo + Issuer Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* Technology Skill Logo Box */}
                      <div className="p-2 rounded-xl border border-white/10 bg-transparent text-[#d4af37] group-hover:border-gray-500 transition-all duration-300 group-hover:scale-105">
                        <TechLogo name={cert.techLogoName || cert.title} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Badge */}
                      <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-transparent text-gray-400 border border-white/5 font-bold group-hover:text-gray-200 transition-all duration-300">
                        {cert.badge}
                      </span>
                    </div>
                    
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1 shrink-0 group-hover:text-gray-300 transition-colors duration-300">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title - Only title is gold */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300 leading-snug pt-1">
                    {cert.title}
                  </h3>

                  {/* Issuer Name - Normal gray */}
                  <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 group-hover:text-gray-300 transition-colors duration-300">
                    <TechLogo name={cert.issuer} className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                    <span>Issued by <strong className="text-gray-300">{cert.issuer}</strong></span>
                  </p>

                  {/* Credential ID if present */}
                  {cert.credentialId && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono transition-colors duration-300">
                      <Key className="w-3 h-3 text-gray-400" />
                      <span className="text-[11px] text-gray-400">ID: <strong>{cert.credentialId}</strong></span>
                    </div>
                  )}

                  {/* Validated Skills Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cert.skillsValidated.map((skill, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded font-mono text-gray-400 border border-white/5 group-hover:text-gray-300 group-hover:border-gray-500 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 flex items-center justify-between transition-colors duration-300">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-mono transition-colors duration-300 group-hover:gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>View Details</span>
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300 group-hover:gap-2 hover:underline"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-gray-500 font-mono">Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <CertificationDetailModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Globe, Database, Cpu, Wrench, HardDrive, Sparkles, Check, Bookmark, Search, Filter
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import TechLogo from './TechLogo';

export default function Skills() {
  const [skillSearch, setSkillSearch] = useState('');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const touchStartXRef = useRef(0);
  const scrollStartXRef = useRef(0);

  const categoryIcons = {
    'Programming Languages': Code2,
    'Web & Backend Development': Globe,
    'Databases & Storage': Database,
    'AI & Data Science': Cpu,
    'Tools & DevOps Platforms': Wrench,
    'IoT, Microcontrollers & Vision': HardDrive,
  };

  // Track active card on scroll with animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      setIsScrolling(true);
      
      const cards = cardRefs.current;
      const containerWidth = container.offsetWidth;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        
        const cardLeft = card.offsetLeft;
        const cardRight = cardLeft + card.offsetWidth;
        
        // Check if card is in the center of viewport
        const viewportCenter = container.scrollLeft + containerWidth / 2;
        const cardCenter = cardLeft + card.offsetWidth / 2;
        
        if (Math.abs(viewportCenter - cardCenter) < containerWidth / 2) {
          setActiveCardIndex(i);
          break;
        }
      }
      
      // Reset scrolling state after animation
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (container && card) {
      container.scrollTo({
        left: card.offsetLeft - 16,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX || e.clientX;
    scrollStartXRef.current = scrollContainerRef.current?.scrollLeft || 0;
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0e14] relative">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1117] border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-widest text-[#d4af37] shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>TECHNICAL EXPERTISE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-[#d4af37] font-serif italic">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Categorized technical stack with technology brand logos, proficiency levels, and instant skill search.
          </p>
        </div>

        {/* Instant Skill Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={skillSearch}
            onChange={(e) => setSkillSearch(e.target.value)}
            placeholder="Search skills (e.g. Python, Flask, ESP32, Docker, SQL)..."
            className="w-full pl-10 pr-4 py-3 bg-[#0d1117] border border-[#d4af37]/30 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500 shadow-lg"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          {skillSearch && (
            <button 
              onClick={() => setSkillSearch('')} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Skills Cards */}
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
              onMouseDown={handleScrollStart}
              onMouseUp={handleScrollEnd}
            >
              {skillCategories.map((group, index) => {
                const Icon = categoryIcons[group.category] || Code2;
                const isActive = index === activeCardIndex;
                
                // Filter skills if search query exists
                const matchingSkills = group.skills.filter(s => 
                  s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                  (s.level && s.level.toLowerCase().includes(skillSearch.toLowerCase()))
                );

                if (skillSearch && matchingSkills.length === 0) return null;

                return (
                  <div 
                    key={group.category}
                    ref={el => cardRefs.current[index] = el}
                    className={`skill-card-box p-5 flex-shrink-0 flex flex-col justify-between border border-[#d4af37]/30 transition-all duration-500 ${
                      isActive ? 'scale-100 shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'opacity-90 scale-95'
                    }`}
                    style={{ 
                      width: 'calc(100% - 32px)',
                      scrollSnapAlign: 'start',
                      minWidth: 'calc(100% - 32px)',
                      transform: isActive ? 'scale(1)' : 'scale(0.95)',
                      opacity: isActive ? 1 : 0.7,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div className="relative z-10">
                      
                      {/* Category Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#0a0e14] border border-[#d4af37]/40 text-[#d4af37] shadow-md">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {group.category}
                          </h3>
                        </div>

                        <Sparkles className="w-4 h-4 text-[#d4af37]/60" />
                      </div>

                      {/* Skill Badges with Tech Logos & Proficiency Levels */}
                      <div className="flex flex-wrap gap-2">
                        {matchingSkills.map((skill, i) => (
                          <div
                            key={i}
                            className={`skill-badge-item inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                              isActive ? 'translate-y-0' : 'translate-y-2 opacity-70'
                            } ${
                              skill.isPrimary 
                                ? 'bg-[#1a1f2e] border border-[#d4af37]/50 text-[#d4af37] font-semibold'
                                : skill.isLearning
                                ? 'bg-amber-500/10 border border-amber-500/40 text-amber-300'
                                : 'bg-[#0a0e14]/80 border border-white/10 text-gray-200 hover:border-[#d4af37]/60 hover:text-white'
                            }`}
                            style={{ transitionDelay: isActive ? `${i * 50}ms` : '0ms' }}
                          >
                            {/* Technology Brand Logo */}
                            <TechLogo name={skill.name} className="w-4 h-4 shrink-0" />

                            <span>{skill.name}</span>

                            {/* Level & Counter Badges */}
                            {skill.isPrimary && (
                              <span className="text-[9px] uppercase px-1.5 py-0.2 bg-[#d4af37]/20 text-[#d4af37] font-mono rounded border border-[#d4af37]/30">
                                {skill.level || "Primary"}
                              </span>
                            )}
                            {skill.isLearning && (
                              <span className="text-[9px] uppercase px-1.5 py-0.2 bg-amber-500/20 text-amber-300 font-mono rounded">
                                Learning
                              </span>
                            )}
                            {skill.countNotice && !skill.isPrimary && (
                              <span className="text-[9px] px-1.5 py-0.2 bg-black/40 text-gray-400 font-mono rounded border border-white/5">
                                {skill.countNotice}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Micro Note */}
                    <div className={`mt-6 pt-3 border-t border-white/10 text-[11px] text-gray-400 font-mono flex items-center justify-between relative z-10 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}>
                      <span>{matchingSkills.length} Skills Shown</span>
                      <span className="text-[#d4af37] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                        Verified
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center items-center gap-2 mt-3">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    index === activeCardIndex 
                      ? 'bg-[#d4af37]' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                >
                  {/* Glow effect for active dot */}
                  {index === activeCardIndex && (
                    <span className="absolute inset-0 bg-[#d4af37] animate-pulse rounded-full opacity-50" />
                  )}
                  {/* Expanding ring for active dot */}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === activeCardIndex ? 'w-6 h-6 -ml-2 -mt-2 bg-transparent' : 'w-0 h-0'
                  }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((group) => {
              const Icon = categoryIcons[group.category] || Code2;
              
              // Filter skills if search query exists
              const matchingSkills = group.skills.filter(s => 
                s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                (s.level && s.level.toLowerCase().includes(skillSearch.toLowerCase()))
              );

              if (skillSearch && matchingSkills.length === 0) return null;

              return (
                <div 
                  key={group.category}
                  className="skill-card-box p-6 flex flex-col justify-between group"
                >
                  <div className="relative z-10">
                    
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5 group-hover:border-[#d4af37]/50 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#0a0e14] border border-[#d4af37]/40 text-[#d4af37] shadow-md group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-shadow duration-300">
                          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                          {group.category}
                        </h3>
                      </div>

                      <Sparkles className="w-4 h-4 text-[#d4af37]/60 group-hover:text-[#d4af37]/80 transition-colors duration-300" />
                    </div>

                    {/* Skill Badges with Tech Logos & Proficiency Levels */}
                    <div className="flex flex-wrap gap-2.5">
                      {matchingSkills.map((skill, i) => (
                        <div
                          key={i}
                          className={`skill-badge-item inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium group-hover:scale-105 transition-all duration-300 ${
                            skill.isPrimary 
                              ? 'bg-[#1a1f2e] border border-[#d4af37]/50 text-[#d4af37] font-semibold'
                              : skill.isLearning
                              ? 'bg-amber-500/10 border border-amber-500/40 text-amber-300'
                              : 'bg-[#0a0e14]/80 border border-white/10 text-gray-200 hover:border-[#d4af37]/60 hover:text-white'
                          }`}
                        >
                          {/* Technology Brand Logo */}
                          <TechLogo name={skill.name} className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />

                          <span className="group-hover:text-[#d4af37] transition-colors duration-300">{skill.name}</span>

                          {/* Level & Counter Badges */}
                          {skill.isPrimary && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 bg-[#d4af37]/20 text-[#d4af37] font-mono rounded border border-[#d4af37]/30">
                              {skill.level || "Primary"}
                            </span>
                          )}
                          {skill.isLearning && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 bg-amber-500/20 text-amber-300 font-mono rounded">
                              Learning
                            </span>
                          )}
                          {skill.countNotice && !skill.isPrimary && (
                            <span className="text-[9px] px-1.5 py-0.2 bg-black/40 text-gray-400 font-mono rounded border border-white/5">
                              {skill.countNotice}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Micro Note */}
                  <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-gray-400 font-mono flex items-center justify-between relative z-10 group-hover:text-[#d4af37] transition-colors duration-300">
                    <span>{matchingSkills.length} Skills Shown</span>
                    <span className="text-[#d4af37] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] group-hover:animate-pulse"></span>
                      Verified
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
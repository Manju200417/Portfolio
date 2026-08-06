import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, ExternalLink, Github, FolderGit2, Sparkles, Filter, CheckCircle2, Info, Layers, Eye, HardDrive, Radio, Activity, Cpu
} from 'lucide-react';
import { projects, miniProjects } from '../data/portfolioData';
import TechLogo from './TechLogo';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const projectRefs = useRef([]);
  const touchStartXRef = useRef(0);

  const categories = ['All', 'AI & Full-Stack', 'Hardware & IoT', 'Web Apps', 'Hackathons'];

  // Count items per category
  const getCategoryCount = (cat) => {
    if (cat === 'All') return projects.length;
    return projects.filter(p => p.category === cat).length;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Track active project on scroll with animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      setIsScrolling(true);
      
      const cards = projectRefs.current;
      const containerWidth = container.offsetWidth;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        
        const cardLeft = card.offsetLeft;
        
        // Check if card is in the center of viewport
        const viewportCenter = container.scrollLeft + containerWidth / 2;
        const cardCenter = cardLeft + card.offsetWidth / 2;
        
        if (Math.abs(viewportCenter - cardCenter) < containerWidth / 2) {
          setActiveProjectIndex(i);
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
  }, [filteredProjects]);

  const scrollToProject = (index) => {
    const container = scrollContainerRef.current;
    const card = projectRefs.current[index];
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
    <section id="projects" className="py-24 bg-[#0a0e14] relative">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow Header with Live Pulse Radar */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-widest text-[#d4af37] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
            </span>
            <span>DEVELOPED PROJECTS & IOT BUILDS</span>
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-[#d4af37] font-serif italic">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Hands-on software engineering projects, production deployments, AI pipelines, and real-time IoT computer vision systems.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d1117] p-4 rounded-2xl border border-white/10 shadow-lg">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((category) => {
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeCategory === category
                      ? 'bg-[#d4af37] text-[#0a0e14] font-bold shadow-md shadow-[#d4af37]/20 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === category ? 'bg-[#0a0e14] text-[#d4af37]' : 'bg-[#161b22] text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, title, IoT, AI..."
              className="w-full pl-9 pr-4 py-2 bg-[#161b22] border border-white/10 rounded-xl text-xs sm:text-sm text-gray-200 focus:outline-none focus:border-[#d4af37] placeholder-gray-500"
            />
            <Filter className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Main Projects Cards */}
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
              {filteredProjects.map((project, index) => {
                const isIot = project.category === 'Hardware & IoT';
                const cardClass = isIot ? 'iot-card-glow' : '';
                const isActive = index === activeProjectIndex;
                
                return (
                  <div
                    key={project.id}
                    ref={el => projectRefs.current[index] = el}
                    className={`skill-card-box p-5 flex-shrink-0 flex flex-col justify-between border border-[#d4af37]/20 ${cardClass} transition-all duration-500 ${
                      isActive ? 'shadow-[0_0_25px_rgba(212,175,55,0.2)]' : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
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
                    <div className="relative z-10">
                      
                      {/* Card Header Top */}
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          
                          {/* Category & Live Signal Badges */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-[#161b22] border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-1.5 transition-all duration-300">
                              {isIot ? (
                                <HardDrive className="w-3 h-3 text-gray-400" />
                              ) : (
                                <Code2 className="w-3 h-3 text-gray-400" />
                              )}
                              <span>{project.category}</span>
                            </span>

                            {/* Live Production Radar Badge */}
                            {project.isLive && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-[11px] font-bold text-emerald-400 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>LIVE</span>
                              </span>
                            )}

                            {/* AI RAG Pulse Indicator */}
                            {project.id === 'notesapp' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/40 text-[11px] font-medium text-amber-300">
                                <Sparkles className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                                <span>AI RAG</span>
                              </span>
                            )}

                            {/* Hardware Servo Control Radar Indicator */}
                            {project.id === 'servo-hand-detection' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/40 text-[11px] font-medium text-cyan-300">
                                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                                <span>ESP32</span>
                              </span>
                            )}

                            {project.badgeText && (
                              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-medium text-amber-300">
                                {project.badgeText}
                              </span>
                            )}
                          </div>

                          <span className="text-xs text-gray-500 font-mono shrink-0">
                            {project.period}
                          </span>
                        </div>

                        {/* Title - Only title is gold */}
                        <h3 className={`text-lg sm:text-xl font-bold leading-snug transition-all duration-300 ${
                          isActive ? 'text-[#d4af37]' : 'text-white'
                        }`}>
                          {project.title}
                        </h3>

                        {/* Description - Normal gray color */}
                        <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed transition-all duration-300">
                          {project.shortDescription || project.description}
                        </p>
                      </div>

                      {/* Card Footer: Tech Badges with Logos & Links */}
                      <div className="mt-6 pt-4 border-t border-white/5 transition-all duration-300">
                        
                        {/* Tech Badges with Brand Logos */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-[#161b22] text-[11px] font-mono text-gray-300 border border-white/5 flex items-center gap-1.5 transition-all duration-300 hover:border-gray-500"
                            >
                              <TechLogo name={tag} className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                              <span className="text-gray-300">{tag}</span>
                            </span>
                          ))}
                        </div>

                        {/* Action Links & Modal Opener */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-3">
                            
                            {/* GitHub Link */}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-medium transition-colors duration-300"
                                title="View GitHub Repository"
                              >
                                <Github className="w-4 h-4 text-gray-400" />
                                <span>Code</span>
                              </a>
                            )}

                            {/* Live Link */}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-medium transition-colors duration-300"
                                title="Open Live Application"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Demo</span>
                              </a>
                            )}
                          </div>

                          {/* Detail View Button */}
                          <button
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 font-mono transition-colors duration-300"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scroll indicator dots for projects */}
            <div className="flex justify-center items-center gap-2 mt-3">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    index === activeProjectIndex 
                      ? 'bg-[#d4af37]' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                >
                  {index === activeProjectIndex && (
                    <span className="absolute inset-0 bg-[#d4af37] animate-pulse rounded-full opacity-50" />
                  )}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === activeProjectIndex ? 'w-6 h-6 -ml-2 -mt-2 bg-transparent' : 'w-0 h-0'
                  }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => {
              const isIot = project.category === 'Hardware & IoT';
              const cardClass = isIot ? 'iot-card-glow' : '';
              
              return (
                <div
                  key={project.id}
                  className={`animated-full-border group hover:-translate-y-1 transition-all duration-300 ${cardClass}`}
                >
                  <div className="animated-full-border-inner p-6">
                    
                    {/* Card Header Top */}
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        
                        {/* Category & Live Signal Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-[#161b22] border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
                            {isIot ? (
                              <HardDrive className="w-3 h-3 text-gray-400" />
                            ) : (
                              <Code2 className="w-3 h-3 text-gray-400" />
                            )}
                            <span>{project.category}</span>
                          </span>

                          {/* Live Production Radar Badge */}
                          {project.isLive && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-[11px] font-bold text-emerald-400 shadow-sm">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span>LIVE</span>
                            </span>
                          )}

                          {/* AI RAG Pulse Indicator */}
                          {project.id === 'notesapp' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/40 text-[11px] font-medium text-amber-300">
                              <Sparkles className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                              <span>AI RAG</span>
                            </span>
                          )}

                          {/* Hardware Servo Control Radar Indicator */}
                          {project.id === 'servo-hand-detection' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/40 text-[11px] font-medium text-cyan-300">
                              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                              <span>ESP32</span>
                            </span>
                          )}

                          {project.badgeText && (
                            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-medium text-amber-300">
                              {project.badgeText}
                            </span>
                          )}
                        </div>

                        <span className="text-xs text-gray-500 font-mono shrink-0">
                          {project.period}
                        </span>
                      </div>

                      {/* Title - Only title is gold */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>

                      {/* Description - Normal gray color */}
                      <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {project.shortDescription || project.description}
                      </p>
                    </div>

                    {/* Card Footer: Tech Badges with Logos & Links */}
                    <div className="mt-6 pt-4 border-t border-white/5 group-hover:border-gray-700 transition-colors duration-300">
                      
                      {/* Tech Badges with Brand Logos */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-[#161b22] text-[11px] font-mono text-gray-300 border border-white/5 flex items-center gap-1.5 hover:border-gray-500 transition-all duration-300"
                          >
                            <TechLogo name={tag} className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                            <span className="text-gray-300">{tag}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Links & Modal Opener */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3">
                          
                          {/* GitHub Link */}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-medium transition-colors duration-300 group-hover:gap-2"
                              title="View GitHub Repository"
                            >
                              <Github className="w-4 h-4 text-gray-400" />
                              <span>Code</span>
                            </a>
                          )}

                          {/* Live Link */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 font-medium transition-colors duration-300 group-hover:gap-2"
                              title="Open Live Application"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>

                        {/* Detail View Button */}
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 font-mono transition-colors duration-300 group-hover:gap-2"
                        >
                          <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                          <span>Details</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mini Projects Row (Weather App & Calculator REST API) */}
        <div className="mt-20 pt-12 border-t border-white/5 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-gray-400" />
              <span>Compact Utility & API Micro-Projects</span>
            </h3>
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>2 Live Micro-Services</span>
            </span>
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div 
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              style={{ 
                scrollSnapType: 'x mandatory', 
                msOverflowStyle: 'none', 
                scrollbarWidth: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {miniProjects.map((mini, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl border border-white/10 hover:border-gray-600 transition-all duration-300 group bg-transparent flex-shrink-0"
                  style={{ width: 'calc(100% - 32px)', scrollSnapAlign: 'start', minWidth: 'calc(100% - 32px)' }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-base group-hover:text-[#d4af37] transition-colors duration-300">{mini.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-white/5 text-gray-400 font-mono flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-400 animate-pulse"></span>
                        Live
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{mini.shortDescription || mini.description}</p>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between transition-colors duration-300">
                    <div className="flex flex-wrap gap-1">
                      {mini.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 border border-white/5 text-gray-300 rounded flex items-center gap-1 hover:border-gray-500 transition-all duration-300">
                          <TechLogo name={t} className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-300">{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs mt-2">
                      {mini.githubUrl && (
                        <a
                          href={mini.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-200 flex items-center gap-1 transition-colors duration-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {mini.liveUrl && (
                        <a
                          href={mini.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-200 flex items-center gap-1 font-bold transition-colors duration-300"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid sm:grid-cols-2 gap-6">
            {miniProjects.map((mini, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl border border-white/10 hover:border-gray-600 transition-all duration-300 group bg-transparent"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base group-hover:text-[#d4af37] transition-colors duration-300">{mini.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded border border-white/5 text-gray-400 font-mono flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-gray-400 animate-pulse"></span>
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{mini.shortDescription || mini.description}</p>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between transition-colors duration-300">
                  <div className="flex flex-wrap gap-1">
                    {mini.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 border border-white/5 text-gray-300 rounded flex items-center gap-1 hover:border-gray-500 transition-all duration-300">
                        <TechLogo name={t} className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-300">{t}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs mt-2">
                    {mini.githubUrl && (
                      <a
                        href={mini.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 flex items-center gap-1 transition-colors duration-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {mini.liveUrl && (
                      <a
                        href={mini.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 flex items-center gap-1 font-bold transition-colors duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
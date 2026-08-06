import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Approach from './components/Approach';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] text-gray-100 font-sans selection:bg-[#d4af37]/30 selection:text-amber-200 w-full overflow-x-hidden">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="w-full">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onShowToast={showToast} 
        />
        
        <About />
        
        <Projects 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />
        
        <Approach />
        
        <Skills />
        
        <Certifications />
        
        <Education />
        
        <Contact 
          onOpenResume={() => setIsResumeOpen(true)} 
          onShowToast={showToast} 
        />
        
        <Faq />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} className="w-full" />

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        onShowToast={showToast}
      />

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0d1117] border-2 border-[#d4af37] text-white text-xs font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

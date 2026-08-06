import React, { useState } from 'react';
import { 
  Mail, Github, Linkedin, Send, Copy, Check, FileText, Download, MessageSquare, MapPin, Sparkles, UserCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TechLogo from './TechLogo';

export default function Contact({ onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    roleInterest: 'Full-Time Software Engineer / Developer',
    customRoleText: '',
    message: ''
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    onShowToast("Email copied to clipboard!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast("Message sent! Manjunath will respond shortly.");
  };

  const roleOptions = [
    'Full-Time Software Engineer / Developer',
    'Full-Stack / Backend Developer',
    'IoT & Hardware Engineer',
    'Software Developer Internship',
    'Other Roles / Custom Opportunity'
  ];

  return (
    <section id="contact" className="py-20 bg-[#0d1117]/80 relative border-t border-white/5">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>RECRUITER & HIRING CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's <span className="text-[#d4af37] font-serif italic">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Interested in discussing a role, internship, or project opportunity? Send a message directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards & Resume CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Relocation Pill Callout */}
            <div className="p-4 rounded-xl bg-[#161b22] border border-[#d4af37]/40 text-xs text-gray-200 flex items-center gap-3 shadow-md">
              <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <span className="font-bold text-white block mb-0.5">Relocate:</span>
                <span className="text-[#d4af37] font-medium">Anywhere in India & Remote</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Quick Chat Card */}
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl flex items-center justify-between group block hover:border-emerald-500/60 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <TechLogo name="whatsapp" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 font-mono uppercase block font-bold">WhatsApp</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors block">
                      +91-7795588287
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-mono group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Email Card */}
              <div className="glass-card p-5 rounded-2xl flex items-center justify-between group">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-4 text-left overflow-hidden min-w-0"
                >
                  <div className="p-3 rounded-xl bg-[#161b22] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Direct Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(personalInfo.email)}
                  className="p-2 rounded-lg bg-[#161b22] hover:bg-[#d4af37]/20 border border-white/10 text-gray-300 hover:text-[#d4af37] transition-all shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Profile Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl flex items-center justify-between group block hover:border-[#d4af37]/60 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#161b22] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">GitHub</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors block">
                      github.com/{personalInfo.githubHandle}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#d4af37] font-mono group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* LinkedIn Profile Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl flex items-center justify-between group block hover:border-[#d4af37]/60 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#161b22] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">LinkedIn</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors block">
                      linkedin.com/in/{personalInfo.linkedinHandle}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#d4af37] font-mono group-hover:translate-x-1 transition-transform">→</span>
              </a>

            </div>

            {/* Direct Resume Download Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border-2 border-[#d4af37] text-center space-y-2 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#d4af37]/20 text-[#d4af37] mb-1">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Download Official Resume PDF</h3>
              <p className="text-[10px] text-gray-400">
                ATS-formatted resume for recruiters.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={personalInfo.resumePdfUrl}
                  download={personalInfo.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onShowToast && onShowToast("Downloading PDF Resume...")}
                  className="w-full py-2.5 px-4 text-sm font-bold text-[#0a0e14] bg-[#d4af37] hover:bg-[#e5b83b] rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="text-xs text-[#d4af37] hover:underline font-mono py-1"
                >
                  Preview Resume
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Recruiter Message Form with Role Interest Selector */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30">
              
              <div className="mb-4 space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#d4af37]" />
                  <span>Send a Message</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Select role focus and message directly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message regarding <span className="text-[#d4af37] font-semibold">{formData.roleInterest === 'Other Roles / Custom Opportunity' ? (formData.customRoleText || 'Custom Role') : formData.roleInterest}</span> and will reply to <span className="text-[#d4af37]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-[#161b22] border border-white/10 text-xs text-gray-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Role Interest Selector (Includes Other Roles / Custom) */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-mono text-[#d4af37] font-bold block uppercase flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Select Role Focus / Hiring Domain:</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {roleOptions.map((roleOption) => (
                        <label
                          key={roleOption}
                          onClick={() => setFormData({...formData, roleInterest: roleOption})}
                          className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition-all ${
                            formData.roleInterest === roleOption
                              ? 'bg-[#d4af37]/15 border-[#d4af37] text-white font-bold shadow-md'
                              : 'bg-[#161b22] border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="roleInterest"
                            checked={formData.roleInterest === roleOption}
                            onChange={() => setFormData({...formData, roleInterest: roleOption})}
                            className="accent-[#d4af37]"
                          />
                          <span>{roleOption}</span>
                        </label>
                      ))}
                    </div>

                    {/* Custom Role Input field if "Other Roles" selected */}
                    {formData.roleInterest === 'Other Roles / Custom Opportunity' && (
                      <div className="pt-2 animate-in fade-in duration-200">
                        <label className="text-[11px] font-mono text-gray-400 block mb-1">
                          Specify Custom Role / Position Title:
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.customRoleText}
                          onChange={(e) => setFormData({...formData, customRoleText: e.target.value})}
                          placeholder="e.g. AI Research Intern / QA Engineer / System Specialist..."
                          className="w-full px-4 py-2.5 bg-[#161b22] border border-[#d4af37]/50 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-gray-300 block">Your Name / Recruiter Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                        className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-gray-300 block">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 block">Subject / Role Focus</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="e.g. Inquiry regarding Software Engineering Role"
                      className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 block">Message Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi Manjunath, I reviewed your portfolio and would like to invite you for an interview regarding..."
                      className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-bold text-[#0a0e14] bg-[#d4af37] hover:bg-[#e5b83b] rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Manjunath</span>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center font-mono">
                    Direct Email Fallback: <a href={`mailto:${personalInfo.email}`} className="text-[#d4af37] hover:underline">{personalInfo.email}</a>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

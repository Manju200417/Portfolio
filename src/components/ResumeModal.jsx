import React from 'react';
import { X, Download, FileText, CheckCircle, Mail, Phone, MapPin, ExternalLink, Printer, Copy, Award, FileCode } from 'lucide-react';
import { personalInfo, skillCategories, certifications, projects } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Manjunath Alagawadi - BCA Graduate (7.59 CGPA)\nFull-Stack Developer, AI & IoT Enthusiast\nContact: ${personalInfo.phone} | ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`);
    if (onShowToast) onShowToast("Resume contact card copied!");
  };

  const handleDownloadTxtFallback = () => {
    const content = `MANJUNATH ALAGAWADI
Full-Stack Developer, AI & IoT Enthusiast
BCA Graduate (7.59 CGPA)
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

SUMMARY:
${personalInfo.bioSummary}

EDUCATION:
- ${personalInfo.education.degree}, ${personalInfo.education.institution} (${personalInfo.education.period})
  Status: Graduated with ${personalInfo.education.cgpaText}
  Affiliated to Karnatak University Dharwad

PROJECTS:
${projects.map(p => `- ${p.title} (${p.period})\n  Tags: ${p.tags.join(', ')}\n  ${p.bullets.join('\n  ')}`).join('\n\n')}

CERTIFICATIONS:
${certifications.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Manjunath_Alagawadi_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (onShowToast) onShowToast("Resume text file downloaded!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d1117] border-2 border-[#d4af37] rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] my-8 text-left overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <FileText className="w-5 h-5" />
            <h2 className="font-bold text-base sm:text-lg text-white">Curriculum Vitae / Resume Preview</h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct PDF Download Link */}
            <a
              href={personalInfo.resumePdfUrl}
              download={personalInfo.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast && onShowToast("Downloading PDF Resume...")}
              className="px-3.5 py-1.5 rounded-lg bg-[#d4af37] text-[#0a0e14] font-bold text-xs flex items-center gap-1.5 hover:bg-[#e5b83b] transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-black/40 hover:bg-black/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-gray-200">
          
          {/* Direct PDF Link Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#161b22] to-[#0a0e14] border border-[#d4af37]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-[#d4af37]" />
                Official Resume PDF Document
              </span>
              <p className="text-xs text-gray-400">
                File: <code className="text-[#d4af37] font-mono">{personalInfo.resumeFileName}</code>
              </p>
            </div>

            <a
              href={personalInfo.resumePdfUrl}
              download={personalInfo.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast && onShowToast("Downloading PDF Resume...")}
              className="px-4 py-2 rounded-xl bg-[#d4af37] text-[#0a0e14] font-bold text-xs flex items-center gap-2 hover:bg-[#e5b83b] transition-all shadow-md shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>

          {/* Header Info with Photo Thumbnail */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {personalInfo.name}
                </h1>
                <span className="px-2.5 py-1 rounded bg-[#d4af37]/20 border border-[#d4af37] text-xs font-bold text-[#d4af37]">
                  7.59 CGPA
                </span>
              </div>
              <p className="text-sm text-[#d4af37] font-semibold">
                {personalInfo.tagline}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-1 font-mono">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#d4af37]" /> {personalInfo.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#d4af37]" /> {personalInfo.email}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Dharwad, Karnataka</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-[#d4af37] pt-1 font-mono">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  GitHub: {personalInfo.githubHandle} <ExternalLink className="w-3 h-3" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  LinkedIn: {personalInfo.linkedinHandle} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="w-24 h-24 rounded-2xl bg-[#0a0e14] border-2 border-[#d4af37] overflow-hidden flex items-center justify-center shrink-0 hidden sm:block">
              <img
                src="/profile.jpeg"
                alt="Manjunath Alagawadi"
                className="w-full h-full object-cover object-center scale-[0.9]"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#161b22] p-4 rounded-xl border border-white/5">
              {personalInfo.bioSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              EDUCATION & ACADEMIC CREDENTIALS
            </h3>
            <div className="bg-[#161b22] p-4 rounded-xl border border-white/5 space-y-1">
              <div className="flex justify-between text-sm font-bold text-white">
                <span>{personalInfo.education.degree} — <span className="text-[#d4af37]">Graduated (7.59 CGPA)</span></span>
                <span className="text-[#d4af37] font-mono text-xs">{personalInfo.education.period}</span>
              </div>
              <p className="text-xs text-gray-300">{personalInfo.education.institution} ({personalInfo.education.university})</p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              KEY DEVELOPED PROJECTS
            </h3>
            <div className="space-y-3">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="bg-[#161b22] p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="text-[#d4af37] font-mono text-[11px] shrink-0">{proj.period}</span>
                  </div>
                  <p className="text-xs text-gray-300">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-[#d4af37] border border-[#d4af37]/20 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              TECHNICAL SKILLS SUMMARY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((sc, i) => (
                <div key={i} className="bg-[#161b22] p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-white block mb-1">{sc.category}:</span>
                  <p className="text-gray-300 font-mono text-[11px]">
                    {sc.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              CERTIFICATIONS
            </h3>
            <div className="bg-[#161b22] p-4 rounded-xl border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {certifications.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>{c.title}</strong> — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#161b22] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-[#0d1117] border border-white/10 text-xs text-gray-300 hover:text-white flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Contact Info</span>
            </button>

            <button
              onClick={handleDownloadTxtFallback}
              className="px-3.5 py-2 rounded-xl bg-[#0d1117] border border-white/10 text-xs text-gray-400 hover:text-gray-200 flex items-center gap-1.5"
            >
              <span>Text Format</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePdfUrl}
              download={personalInfo.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast && onShowToast("Downloading PDF Resume...")}
              className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-[#0a0e14] font-bold text-xs flex items-center gap-2 hover:bg-[#e5b83b] transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

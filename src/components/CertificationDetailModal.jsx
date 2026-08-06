import React from 'react';
import { X, Award, ExternalLink, ShieldCheck, CheckCircle2, Building2, Calendar, Sparkles, Key } from 'lucide-react';
import TechLogo from './TechLogo';

export default function CertificationDetailModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0d1117] border-2 border-[#d4af37] rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] text-left overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <Award className="w-5 h-5" />
            <span className="font-mono text-xs uppercase text-[#d4af37] font-bold">Certification Details</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-black/40 hover:bg-black/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Title & Issuer */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 text-xs font-mono font-bold flex items-center gap-1.5">
                <TechLogo name={cert.techLogoName || cert.title} className="w-4 h-4" />
                <span>{cert.badge}</span>
              </span>
              <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                Issued {cert.issueDate}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#d4af37]/40 text-[#d4af37] shrink-0 mt-1">
                <TechLogo name={cert.techLogoName || cert.title} className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white leading-snug">
                  {cert.title}
                </h2>

                <p className="text-xs text-gray-300 flex items-center gap-2 font-medium">
                  <Building2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Issued by <strong className="text-white">{cert.issuer}</strong></span>
                </p>
              </div>
            </div>

            {cert.credentialId && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161b22] rounded-xl border border-[#d4af37]/40 text-xs font-mono text-amber-300">
                <Key className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Credential ID: <strong className="text-white">{cert.credentialId}</strong></span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2 bg-[#161b22] p-4 rounded-xl border border-white/5">
            <h3 className="text-xs font-mono text-[#d4af37] uppercase font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Description:</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
              {cert.description}
            </p>
          </div>

          {/* Validated Skills List */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-gray-400 block uppercase font-bold">Validated Technical Competencies:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cert.skillsValidated.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-200 bg-[#161b22] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#161b22] border-t border-white/10 flex items-center justify-between">
          {cert.verifyUrl ? (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#d4af37] text-[#0a0e14] text-xs font-bold flex items-center gap-2 hover:bg-[#e5b83b] transition-all shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Credential</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-gray-400">Verified</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0d1117] text-xs font-medium text-gray-300 hover:text-white border border-white/10"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

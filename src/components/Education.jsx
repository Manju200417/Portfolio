import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Building, Award, CheckCircle2, BookMarked, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Education() {
  const edu = personalInfo.education;

  return (
    <section id="education" className="py-16 bg-[#0a0e14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>QUALIFICATION & DEGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic <span className="text-[#d4af37] font-serif italic">Graduation</span>
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border-2 border-[#d4af37]/40 hover:border-[#d4af37] transition-all">
            
            {/* Background watermark */}
            <GraduationCap className="absolute -right-6 -bottom-6 w-48 h-48 text-white/5 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Degree Completed / Graduated</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37] text-xs font-bold text-[#d4af37]">
                    <Award className="w-3.5 h-3.5" />
                    <span>7.59 / 10.0 CGPA</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {edu.degree}
                </h3>

                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex items-center gap-2 font-medium text-white">
                    <Building className="w-4 h-4 text-[#d4af37]" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{edu.university} · Dharwad, Karnataka</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end space-y-2 shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22] border border-[#d4af37]/30 text-xs font-mono text-[#d4af37]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Batch {edu.period}</span>
                </div>
                <span className="text-xs text-emerald-400 font-mono font-medium">BCA Graduate</span>
              </div>

            </div>

            {/* Key Academic Subject Breakdown */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-[#d4af37] block font-bold flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[#d4af37]" />
                <span>Key Academic Coursework & Domain Performance:</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {edu.keySubjects.map((sub, i) => (
                  <div key={i} className="p-3 bg-[#161b22] border border-white/5 rounded-xl flex items-center justify-between">
                    <span className="text-gray-200 font-medium">{sub.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] font-mono font-bold shrink-0 ml-2">
                      {sub.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

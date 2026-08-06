import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { recruiterFaqs } from '../data/portfolioData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0a0e14] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RECRUITER QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-[#d4af37] font-serif italic">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Quick answers for hiring managers and recruiters reviewing my candidature.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {recruiterFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-[#d4af37] font-mono text-sm">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg bg-[#161b22] border border-[#d4af37]/30 text-[#d4af37] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#d4af37]/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

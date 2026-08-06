import React from 'react';
import { Compass, Lightbulb, LayoutGrid, Cpu, Rocket } from 'lucide-react';
import { approachSteps } from '../data/portfolioData';

export default function Approach() {
  const stepIcons = [Lightbulb, LayoutGrid, Cpu, Rocket];

  return (
    <section id="approach" className="py-20 bg-[#0d1117]/60 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I <span className="text-[#d4af37] font-serif italic">Build & Learn</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            A structured, disciplined methodology focused on maintainable architecture, clean code, and reliable deployment.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, index) => {
            const Icon = stepIcons[index] || Lightbulb;
            return (
              <div 
                key={step.number}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between relative group hover:border-[#d4af37]/50 transition-all duration-300"
              >
                <div>
                  {/* Step Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif font-extrabold text-3xl text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#d4af37]/20 text-[#d4af37]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-[#d4af37]/80 block mt-0.5">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Border Accent Line */}
                <div className="mt-6 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Phase {index + 1} of 4</span>
                  <span className="text-[#d4af37]">✓ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, Github, ExternalLink, Code2, Sparkles, CheckCircle2, Info, HardDrive, Database, Terminal } from 'lucide-react';
import TechLogo from './TechLogo';

export default function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0d1117] border-2 border-[#d4af37] rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] text-left overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <Code2 className="w-5 h-5" />
            <span className="font-mono text-xs uppercase text-[#d4af37] font-bold">Project Detail & System Architecture</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-black/40 hover:bg-black/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#0a0e14] px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-bold font-mono rounded-t-xl transition-all ${
              activeTab === 'overview'
                ? 'bg-[#161b22] text-[#d4af37] border-t-2 border-x border-[#d4af37]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Overview & Features
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-xs font-bold font-mono rounded-t-xl transition-all ${
              activeTab === 'schema'
                ? 'bg-[#161b22] text-[#d4af37] border-t-2 border-x border-[#d4af37]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {project.category === 'Hardware & IoT' ? 'Circuit Pinout & Hardware Schema' : 'Database Schema & Architecture'}
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2 text-xs font-bold font-mono rounded-t-xl transition-all ${
              activeTab === 'api'
                ? 'bg-[#161b22] text-[#d4af37] border-t-2 border-x border-[#d4af37]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            REST API & Serial Endpoints
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Title & Badges */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#161b22] text-[#d4af37] border border-[#d4af37]/30 text-xs font-mono">
                {project.category}
              </span>
              {project.repoMetrics && (
                <span className="px-2.5 py-1 rounded bg-black/40 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                  {project.repoMetrics}
                </span>
              )}
              <span className="text-xs text-gray-400 font-mono ml-auto">{project.period}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#161b22] p-4 rounded-xl border border-white/5">
                {project.description}
              </p>

              {/* Technical Implementation Bullets */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono text-[#d4af37] uppercase font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Technical Accomplishments & Engineering Work:</span>
                </h3>
                <ul className="space-y-2 pt-1">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-200 bg-[#161b22] p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400 block uppercase font-bold">Technologies & Frameworks Used:</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#161b22] text-[#d4af37] border border-[#d4af37]/30 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5">
                      <TechLogo name={tag} className="w-3.5 h-3.5" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SCHEMA & CIRCUIT PINOUT */}
          {activeTab === 'schema' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {project.pinoutDiagram && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#161b22] to-[#0a0e14] border border-[#d4af37]/40 space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#d4af37] font-bold flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#d4af37]" />
                    <span>Microcontroller Hardware Pinout Diagram:</span>
                  </h4>
                  <pre className="text-xs font-mono text-cyan-300 bg-black/60 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap">
                    {project.pinoutDiagram}
                  </pre>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#161b22] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase text-[#d4af37] font-bold flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#d4af37]" />
                  <span>Data Architecture & System Flow Notes:</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.schemaNotes || "Normalized SQL schema with ACID compliance and optimized index structures."}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: API ENDPOINTS */}
          {activeTab === 'api' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-xs font-mono uppercase text-[#d4af37] font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#d4af37]" />
                <span>REST API / Serial Protocol Endpoints:</span>
              </h4>

              {project.apiEndpoints ? (
                <div className="space-y-2">
                  {project.apiEndpoints.map((ep, i) => (
                    <div key={i} className="p-3 bg-[#161b22] border border-white/10 rounded-xl text-xs font-mono text-emerald-300">
                      <code>{ep}</code>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-[#161b22] border border-white/10 rounded-xl text-xs font-mono text-gray-300">
                  <code>REST API v1 endpoints defined with JSON request/response payloads.</code>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#161b22] border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0d1117] border border-[#d4af37]/40 hover:border-[#d4af37] text-xs font-bold text-white flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4 text-[#d4af37]" />
                <span>GitHub Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-400 flex items-center gap-2 hover:bg-emerald-500/30 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Application</span>
              </a>
            )}
          </div>

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

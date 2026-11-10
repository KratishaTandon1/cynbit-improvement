import React from 'react';
import { Cpu, Zap, Shield, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToStudio: () => void;
  onOpenReport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToStudio, onOpenReport }) => {
  return (
    <section className="relative pt-8 pb-12 px-4 lg:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#006067]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#12629d]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006067]/20 border border-[#006067]/40 text-[#96f1fa] text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
          <span>CYNBIT INNOVATION LAB • PROPOSAL PROTOTYPE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-headline leading-tight sm:leading-none max-w-4xl mx-auto">
          Architecting Enterprise AI & Digital Platforms{' '}
          <span className="text-gradient-cyan block mt-1 sm:mt-2">
            With Live Technical Blueprints.
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-body font-normal leading-relaxed">
          Say goodbye to static, one-way contact forms. Interactively design your system topology, configure latency budgets, forecast ROI, and export production-ready architecture specifications in seconds.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onScrollToStudio}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#006067] hover:bg-[#007b83] rounded-xl shadow-lg shadow-[#006067]/40 border border-[#96f1fa]/30 transition-all cursor-pointer group"
          >
            <span>Launch Topology Studio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenReport}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#96f1fa]" />
            <span>Read Technical Report</span>
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-[#0c1418]/80 border border-white/5 hover:border-[#006067]/40 transition-all">
            <div className="flex items-center gap-2 text-[#96f1fa] mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                Latency SLA
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">
              &lt; 150ms
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Streaming voice & WebRTC
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c1418]/80 border border-white/5 hover:border-[#006067]/40 transition-all">
            <div className="flex items-center gap-2 text-[#96f1fa] mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                Automation
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">
              78% – 84%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Repetitive ops eliminated
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c1418]/80 border border-white/5 hover:border-[#006067]/40 transition-all">
            <div className="flex items-center gap-2 text-[#96f1fa] mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                Security
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">
              SOC2 & HIPAA
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Zero-retention PII vaults
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c1418]/80 border border-white/5 hover:border-[#006067]/40 transition-all">
            <div className="flex items-center gap-2 text-[#96f1fa] mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                Scoping Velocity
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">
              &lt; 3 Mins
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              From idea to technical RFC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

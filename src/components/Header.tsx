import React from 'react';
import { Cpu, FileText, BarChart2, Share2, Sparkles, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: 'studio' | 'report' | 'audit' | 'code';
  setActiveTab: (tab: 'studio' | 'report' | 'audit' | 'code') => void;
  onOpenAdvisor: () => void;
  onOpenExport: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdvisor,
  onOpenExport,
  onOpenBooking,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-white/10 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#006067] to-[#007b83] flex items-center justify-center text-[#96f1fa] shadow-lg shadow-[#006067]/30 border border-[#96f1fa]/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white font-headline">
                CYNBIT
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#006067]/40 text-[#96f1fa] border border-[#006067]">
                Architect Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Autonomous Systems & AI Blueprint Engine
            </p>
          </div>
        </div>

        {/* View mode switcher */}
        <nav className="hidden md:flex items-center bg-[#0d161a] p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('studio')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'studio'
                ? 'bg-[#006067] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Studio</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'code'
                ? 'bg-[#006067] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture Code</span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'audit'
                ? 'bg-[#006067] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>UX & Dev Audit</span>
          </button>
          <button
            onClick={() => setActiveTab('report')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'report'
                ? 'bg-[#006067] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Technical Report</span>
          </button>
        </nav>

        {/* Quick actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAdvisor}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#96f1fa] bg-[#006067]/20 border border-[#006067]/50 rounded-xl hover:bg-[#006067]/40 transition-all cursor-pointer"
            title="Ask Aria AI Solution Architect"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#00f5d4]" />
            <span className="hidden sm:inline">Aria AI Advisor</span>
          </button>

          <button
            onClick={onOpenExport}
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
            title="Export Architecture Specification"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#006067] to-[#007b83] hover:from-[#007b83] hover:to-[#006067] border border-[#96f1fa]/30 rounded-xl shadow-md shadow-[#006067]/40 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#96f1fa]" />
            <span>Book Review</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-around mt-2 pt-2 border-t border-white/5 text-[11px]">
        <button
          onClick={() => setActiveTab('studio')}
          className={`px-2 py-1 rounded ${activeTab === 'studio' ? 'text-[#96f1fa] font-bold' : 'text-slate-400'}`}
        >
          Studio
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-2 py-1 rounded ${activeTab === 'code' ? 'text-[#96f1fa] font-bold' : 'text-slate-400'}`}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-2 py-1 rounded ${activeTab === 'audit' ? 'text-[#96f1fa] font-bold' : 'text-slate-400'}`}
        >
          Audit
        </button>
        <button
          onClick={() => setActiveTab('report')}
          className={`px-2 py-1 rounded ${activeTab === 'report' ? 'text-[#96f1fa] font-bold' : 'text-slate-400'}`}
        >
          Report
        </button>
      </div>
    </header>
  );
};

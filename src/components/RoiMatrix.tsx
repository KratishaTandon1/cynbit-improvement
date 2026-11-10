import React from 'react';
import type { RoiEstimate } from '../types/architect';
import { DollarSign, Clock, TrendingUp, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoiMatrixProps {
  roi: RoiEstimate;
  onBookReview: () => void;
}

export const RoiMatrix: React.FC<RoiMatrixProps> = ({ roi, onBookReview }) => {
  return (
    <div className="p-6 rounded-3xl bg-[#0c1418] border border-white/10 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-headline flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Projected Engineering ROI & Sprint Roadmap</span>
          </h3>
          <p className="text-xs text-slate-400">
            Real-time financial impact and technical delivery schedule based on selected parameters.
          </p>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg self-start sm:self-auto">
          Payback: &lt; 90 Days
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
            <Clock className="w-3.5 h-3.5 text-[#96f1fa]" />
            <span>Monthly Hours Saved</span>
          </div>
          <div className="text-2xl font-extrabold text-white font-headline">
            {roi.monthlyHoursSaved.toLocaleString()}{' '}
            <span className="text-xs text-slate-400 font-normal">hrs / mo</span>
          </div>
          <p className="text-[10px] text-emerald-400">
            Reclaimed engineering & ops bandwidth
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>Monthly Cost Savings</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-400 font-headline">
            ${roi.monthlyCostSavingsUSD.toLocaleString()}
          </div>
          <p className="text-[10px] text-slate-400">
            Triage & error-reduction savings
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-[#00f5d4]" />
            <span>Ops Automation</span>
          </div>
          <div className="text-2xl font-extrabold text-[#00f5d4] font-headline">
            {roi.operationalReductionPct}%
          </div>
          <p className="text-[10px] text-slate-400">
            Autonomous multi-agent execution
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Delivery Timeline</span>
          </div>
          <div className="text-2xl font-extrabold text-white font-headline">
            {roi.estimatedWeeks}{' '}
            <span className="text-xs text-slate-400 font-normal">Weeks</span>
          </div>
          <p className="text-[10px] text-amber-400">
            To production staging cutover
          </p>
        </div>
      </div>

      {/* Cloud & Token Run Cost Breakdown */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#006067]/20 via-[#0c181e] to-black/40 border border-[#006067]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#96f1fa] font-bold">
            Projected Infrastructure Run-Cost
          </span>
          <p className="text-slate-300 text-xs mt-0.5">
            Includes LLM token usage, serverless compute, and vector database queries.
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-base font-extrabold text-white font-mono">
            ~${roi.estCloudCostPerMonthUSD.toLocaleString()}{' '}
            <span className="text-xs font-normal text-slate-400">/ month</span>
          </div>
          <div className="text-[10px] text-slate-400">Serverless pay-per-token model</div>
        </div>
      </div>

      {/* Sprint Roadmap */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline flex items-center gap-2">
          <span>Production Sprint Delivery Roadmap</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {roi.sprints.map((sprint) => (
            <div
              key={sprint.sprintNumber}
              className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span className="text-[#96f1fa] font-bold">Sprint 0{sprint.sprintNumber}</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/5">{sprint.duration}</span>
                </div>
                <h5 className="text-xs font-bold text-white leading-snug mb-2 font-headline">
                  {sprint.title}
                </h5>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  {sprint.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#96f1fa] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule discovery CTA */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#006067]/15 border border-[#006067]/40">
        <div>
          <div className="text-xs font-bold text-white font-headline">
            Ready to validate this architecture with Cynbit's Lead Architects?
          </div>
          <p className="text-[11px] text-slate-300">
            We will review your topology, benchmark your tokens, and verify your integrations.
          </p>
        </div>
        <button
          onClick={onBookReview}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#006067] hover:bg-[#007b83] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-[#006067]/30 shrink-0"
        >
          <span>Schedule Architecture Sync</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

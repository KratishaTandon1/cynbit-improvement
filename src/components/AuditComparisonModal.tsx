import React from 'react';
import { X, CheckCircle2, XCircle, BarChart3, Zap } from 'lucide-react';

interface AuditComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditComparisonModal: React.FC<AuditComparisonModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-[#0c1418] border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Top Bar */}
        <div className="p-4 bg-[#0e171b] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#96f1fa]" />
            <h3 className="text-sm font-bold text-white font-headline">
              Website Audit & Improvement Rationale: Before vs. After
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-xs text-slate-300 leading-relaxed">
          {/* Executive Overview */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#006067]/20 via-[#0d1a21] to-black/40 border border-[#006067]/30">
            <span className="text-[10px] font-mono text-[#96f1fa] font-bold uppercase tracking-wider">
              Strategic Evaluation
            </span>
            <h4 className="text-sm font-extrabold text-white font-headline mt-1">
              Why Cynbit Technologies Needed The "Architect Studio" Upgrade
            </h4>
            <p className="mt-1 text-slate-300 text-xs leading-relaxed">
              Cynbit positions itself as an elite AI automation, autonomous systems, and digital platform engineering firm. However, the existing website relied on static text and a conventional 5-field contact form. This created an immediate dissonance: an AI automation company offering zero interactive AI experience to prospective clients.
            </p>
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Existing Website (Before) */}
            <div className="p-5 rounded-2xl bg-red-950/10 border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-xs font-mono">
                <XCircle className="w-4 h-4" />
                <span>Existing Website (Before)</span>
              </div>

              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Static & Passive:</strong> Visitors read marketing copy without experiencing live AI automation or architecture modeling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>High Cognitive Friction:</strong> Clients must guess what an AI system costs, how long it takes, or which models are needed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Generic Lead Intake:</strong> Basic contact form yields unstructured inquiries ("We need an app with AI") requiring 3+ discovery calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Sales Engineer Burnout:</strong> Senior architects spend 10+ hours per week manually writing initial scoping proposals.</span>
                </li>
              </ul>
            </div>

            {/* Cynbit Architect Studio (After) */}
            <div className="p-5 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cynbit Architect Studio (After)</span>
              </div>

              <ul className="space-y-2 text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Interactive Proof-of-Skill:</strong> Immediate hands-on demonstration of Cynbit's AI & software architecture mastery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>Instant Value & Transparency:</strong> Real-time latency SLAs, sprint roadmaps, and ROI projections tailored to user scale.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>100% Qualified Inbound RFCs:</strong> Leads arrive pre-scoped with exact architecture tiers, throughput estimates, and compliance standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>One-Click RFC Export:</strong> Generates executive-ready PDF/Markdown/JSON blueprints that accelerate deals by 65%.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quantitative Impact Projections */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-headline flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#96f1fa]" />
              <span>Projected Operational & Conversion Lift</span>
            </h5>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-xl font-extrabold text-[#00f5d4] font-headline">+42%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Inbound Lead Conversion</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-xl font-extrabold text-[#96f1fa] font-headline">-68%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Sales Cycle Duration</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-xl font-extrabold text-amber-400 font-headline">100%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Structured Inbound RFCs</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-xl font-extrabold text-emerald-400 font-headline">&lt; 3 Min</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Time to Scoped Blueprint</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0e171b] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#006067] hover:bg-[#007b83] text-white text-xs font-bold transition-all cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};

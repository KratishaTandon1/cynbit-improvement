import React, { useState } from 'react';
import type { ArchitecturePreset, RequirementConfig, RoiEstimate } from '../types/architect';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeadBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preset: ArchitecturePreset;
  config: RequirementConfig;
  roi: RoiEstimate;
}

export const LeadBookingModal: React.FC<LeadBookingModalProps> = ({
  isOpen,
  onClose,
  preset,
  config,
  roi,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [timeline, setTimeline] = useState('immediate');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !company) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#006067', '#00f5d4', '#96f1fa', '#12629d'],
      });
    } catch {
      // ignore in environments without canvas
    }

    const generatedId = `CYN-RFC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-[#0c1418] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="p-4 bg-[#0e171b] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#96f1fa]" />
            <h3 className="text-sm font-bold text-white font-headline">
              Book Technical Architecture Review
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#96f1fa] uppercase tracking-widest font-bold">
                Specification Dispatched
              </span>
              <h4 className="text-xl font-extrabold text-white font-headline mt-1">
                Architecture Review Scheduled!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                Your technical specification has been ingested into Cynbit's Lead Engineering Queue.
                Our architecture team will analyze your requirements and prepare a tailored strategic overview before we connect.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-left space-y-2 max-w-md mx-auto text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Architecture Ticket ID:</span>
                <span className="text-[#96f1fa] font-bold">{ticketId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Selected Archetype:</span>
                <span className="text-white">{preset.shortTitle}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Target Delivery:</span>
                <span className="text-amber-400">{roi.estimatedWeeks} Weeks Roadmap</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Projected Monthly Savings:</span>
                <span className="text-emerald-400">${roi.monthlyCostSavingsUSD.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#006067] hover:bg-[#007b83] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              Done & Return to Studio
            </button>
          </div>
        ) : (
          /* Intake Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Pre-filled Scope Summary Banner */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#006067]/20 to-black/40 border border-[#006067]/30 text-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#96f1fa] font-bold mb-1">
                <span>Target: {preset.shortTitle}</span>
                <span>{config.monthlyOperations.toLocaleString()} Ops/Mo</span>
              </div>
              <p className="text-slate-300 text-[11px]">
                Pre-calibrated for {config.complianceTier.toUpperCase()} compliance & {roi.estimatedWeeks}-week delivery schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#111a1f] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-[#006067]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111a1f] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-[#006067]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Health / Fintech Labs"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#111a1f] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-[#006067]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300">
                  Deployment Urgency
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#111a1f] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#006067]"
                >
                  <option value="immediate">Immediate (Ready to kick off this month)</option>
                  <option value="quarter">Next Quarter Planning</option>
                  <option value="exploratory">Exploratory Architectural R&D</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300">
                Additional Technical Constraints or Requirements (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Specific databases, legacy ERPs, internal auth requirements, or cloud VPC policies..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#111a1f] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-[#006067]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam guarantee • Direct architect sync</span>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#006067] to-[#007b83] hover:from-[#007b83] hover:to-[#006067] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Dispatch Architecture Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

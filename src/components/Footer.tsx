import React from 'react';
import { Cpu, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#060a0c] pt-12 pb-8 px-4 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#006067] flex items-center justify-center text-[#96f1fa]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white font-headline">
                CYNBIT TECHNOLOGIES
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-[11px]">
              Architecting scalable digital platforms, AI automation systems, and high-performance engineering labs. Based in Jaipur, Rajasthan, bridging technical precision with global growth.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#96f1fa]" />
              <span>32/115 Pratap Nagar, Jaipur, Rajasthan 302033</span>
            </div>
          </div>

          {/* Core Ecosystem Links */}
          <div className="space-y-2">
            <span className="font-bold text-white uppercase text-[10px] tracking-widest font-headline block mb-2">
              Cynbit Ecosystem
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://cynbit.in/services"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#96f1fa] transition-colors"
                >
                  AI Automation & Services
                </a>
              </li>
              <li>
                <a
                  href="https://cynbit.in/bitelevate"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#96f1fa] transition-colors"
                >
                  BitElevate Engineering Labs
                </a>
              </li>
              <li>
                <a
                  href="https://cynbit.in/case-studies"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#96f1fa] transition-colors"
                >
                  Enterprise Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://cynbit.in/careers"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#96f1fa] transition-colors"
                >
                  Careers at Cynbit
                </a>
              </li>
            </ul>
          </div>

          {/* Assessment Info */}
          <div className="space-y-2">
            <span className="font-bold text-white uppercase text-[10px] tracking-widest font-headline block mb-2">
              Assessment Metadata
            </span>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-[11px]">
              <div className="text-white font-semibold">Kratisha Tandon</div>
              <div className="text-slate-400 font-mono text-[10px]">
                Role: Full Stack Developer Intern
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/KratishaTandon1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#96f1fa] hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kratisha-tandon-5738b5296/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#96f1fa] hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500 font-mono">
          <div>
            © 2026 Cynbit Technologies. All rights reserved. Engineered for Optimism.
          </div>
          <div>
            Task: Improve Cynbit's Website • Working Prototype & Technical Deliverables
          </div>
        </div>
      </div>
    </footer>
  );
};

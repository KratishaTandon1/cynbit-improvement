import React, { useState } from 'react';
import type { ArchitecturePreset } from '../types/architect';
import { Code2, Copy, Check, Terminal, FileCode, Sparkles } from 'lucide-react';

interface CodeViewerProps {
  preset: ArchitecturePreset;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ preset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(preset.sampleCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c1418] border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#96f1fa]" />
            <h3 className="text-sm font-bold text-white font-headline">
              Production Architecture Implementation
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              {preset.sampleCode.language.toUpperCase()}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Production core source code for {preset.title}.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all cursor-pointer self-start sm:self-auto"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Source Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Container */}
      <div className="rounded-3xl bg-[#080d10] border border-white/10 overflow-hidden shadow-2xl">
        {/* Editor Tab Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e161a] border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#080d10] text-[#96f1fa] font-mono text-[11px] border border-white/5">
              <FileCode className="w-3.5 h-3.5" />
              <span>{preset.sampleCode.filename}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <Terminal className="w-3 h-3 text-[#00f5d4]" />
            <span>Cynbit Production Blueprint</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-200">
          <pre className="whitespace-pre">{preset.sampleCode.code}</pre>
        </div>

        {/* Code Highlights Footer */}
        <div className="p-4 bg-[#0a1114] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
          <div className="flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#96f1fa] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Strict Typing & Schema</span>
              <span className="text-slate-400">Pydantic / TypeScript contracts enforce zero runtime drift.</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#96f1fa] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Stateful Orchestration</span>
              <span className="text-slate-400">Deterministic transitions with asynchronous tool execution.</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#96f1fa] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Zero-Trust Guardrails</span>
              <span className="text-slate-400">In-flight PII redaction and automated audit logging.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

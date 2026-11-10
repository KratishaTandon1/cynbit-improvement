import React, { useState } from 'react';
import type { SystemNode, LayerType } from '../types/architect';
import {
  PhoneCall,
  ShieldCheck,
  Cpu,
  Database,
  Boxes,
  UploadCloud,
  Lock,
  FileText,
  HardDrive,
  Layers,
  Globe,
  Fingerprint,
  Server,
  BarChart3,
  Activity,
  Laptop,
  GitPullRequest,
  Terminal,
  Sparkles,
  Award,
  Zap,
  Check,
  Copy,
  Info,
  Clock,
  ShieldAlert,
} from 'lucide-react';

interface SystemTopologyCanvasProps {
  nodes: SystemNode[];
  presetTitle: string;
}

export const SystemTopologyCanvas: React.FC<SystemTopologyCanvasProps> = ({
  nodes,
  presetTitle,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || '');
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  // Keep selected node valid
  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4' };
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'UploadCloud':
        return <UploadCloud {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'HardDrive':
        return <HardDrive {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Fingerprint':
        return <Fingerprint {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Laptop':
        return <Laptop {...props} />;
      case 'GitPullRequest':
        return <GitPullRequest {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Award':
        return <Award {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const getLayerName = (layer: LayerType) => {
    switch (layer) {
      case 'client':
        return 'Layer 01 • Client & Ingestion';
      case 'security':
        return 'Layer 02 • Security & Guardrails';
      case 'orchestration':
        return 'Layer 03 • Cognitive Orchestration';
      case 'data':
        return 'Layer 04 • Memory & Storage';
      case 'integration':
        return 'Layer 05 • Enterprise Dispatch';
      default:
        return 'System Layer';
    }
  };

  const handleCopySnippet = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Canvas Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c1418] border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f5d4] animate-pulse" />
            <h3 className="text-sm font-bold text-white font-headline">
              Interactive System Topology Canvas
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              {presetTitle}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any node below to inspect deep latency SLAs, throughput guarantees, and config snippets.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Healthy Pipeline
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
            {nodes.length} Microservices Connected
          </span>
        </div>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#091014] to-[#0d161a] border border-white/10 overflow-x-auto shadow-2xl">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="min-w-[720px] space-y-5 relative z-10">
          {nodes.map((node, index) => {
            const isSelected = node.id === activeNode.id;
            const isLast = index === nodes.length - 1;

            return (
              <div key={node.id} className="relative">
                {/* Node Box */}
                <div
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#006067]/40 via-[#0a1e26] to-[#0c1418] border-[#96f1fa]/60 shadow-lg shadow-[#006067]/30 ring-1 ring-[#96f1fa]/30'
                      : 'bg-[#0d171c]/90 hover:bg-[#121f26] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Left: Icon & Node Info */}
                  <div className="flex items-start md:items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#006067] text-[#96f1fa] shadow-md shadow-[#006067]/50'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      {getIcon(node.iconName)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#96f1fa] font-bold">
                          {getLayerName(node.layer)}
                        </span>
                        {isSelected && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#00f5d4]/20 text-[#00f5d4] border border-[#00f5d4]/30 font-bold uppercase">
                            Inspecting
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white font-headline flex items-center gap-2">
                        <span>{node.title}</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">{node.description}</p>
                    </div>
                  </div>

                  {/* Right: Tech Stack & Latency */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto font-mono">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Tech Choice</div>
                      <div className="text-xs font-bold text-[#96f1fa] bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                        {node.tech}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Latency SLA</div>
                      <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        <Clock className="w-3 h-3" />
                        <span>{node.latency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Connector Arrow to next layer */}
                {!isLast && (
                  <div className="h-6 flex items-center justify-center relative my-0.5">
                    {/* Vertical connecting line */}
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#006067] to-white/20 relative">
                      {/* Animated traveling data pulse */}
                      <div className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-[#00f5d4] shadow-sm shadow-[#00f5d4] animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detailed Inspector */}
      {activeNode && (
        <div className="p-5 rounded-2xl bg-[#0c1418] border border-[#006067]/40 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#006067] flex items-center justify-center text-[#96f1fa]">
                {getIcon(activeNode.iconName)}
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white font-headline flex items-center gap-2">
                  <span>{activeNode.title}</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">
                    ({activeNode.tech})
                  </span>
                </h4>
                <p className="text-xs text-slate-300">{activeNode.details.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#006067]/20 text-[#96f1fa] border border-[#006067]/40">
                Layer SLA: {activeNode.latency}
              </span>
            </div>
          </div>

          {/* Detailed architectural grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono mb-1">
                <Zap className="w-3.5 h-3.5 text-[#96f1fa]" />
                <span className="uppercase font-bold">Throughput & Scale</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {activeNode.details.throughput}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                <span className="uppercase font-bold">Security & Encryption</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {activeNode.details.security}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono mb-1">
                <Layers className="w-3.5 h-3.5 text-[#96f1fa]" />
                <span className="uppercase font-bold">Deployment & Autoscaling</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {activeNode.details.scaling}
              </p>
            </div>
          </div>

          {/* Config snippet */}
          {activeNode.details.configSnippet && (
            <div className="rounded-xl bg-black/60 border border-white/10 p-3 relative font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-400 mb-1.5 text-[10px]">
                <span className="flex items-center gap-1">
                  <Info className="w-3 h-3 text-[#96f1fa]" />
                  <span>Production Configuration Manifest</span>
                </span>
                <button
                  onClick={() => handleCopySnippet(activeNode.details.configSnippet)}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <code className="text-emerald-300 block overflow-x-auto whitespace-pre">
                {activeNode.details.configSnippet}
              </code>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

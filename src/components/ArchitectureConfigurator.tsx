import React from 'react';
import type { RequirementConfig } from '../types/architect';
import { Sliders, Shield, Cpu, Database, Cloud } from 'lucide-react';

interface ArchitectureConfiguratorProps {
  config: RequirementConfig;
  onChangeConfig: (newConfig: RequirementConfig) => void;
}

export const ArchitectureConfigurator: React.FC<ArchitectureConfiguratorProps> = ({
  config,
  onChangeConfig,
}) => {
  const updateField = <K extends keyof RequirementConfig>(
    field: K,
    value: RequirementConfig[K]
  ) => {
    onChangeConfig({
      ...config,
      [field]: value,
    });
  };

  return (
    <div className="p-6 rounded-3xl bg-[#0c1418] border border-white/10 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-headline flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#96f1fa]" />
            <span>Architecture Calibrator & Scale Parameters</span>
          </h3>
          <p className="text-xs text-slate-400">
            Tweak throughput volumes, security baselines, and orchestration models to recompute SLAs.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#00f5d4] bg-[#006067]/30 border border-[#006067] px-2.5 py-1 rounded-lg self-start sm:self-auto">
          Reactive Matrix
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slider 1: Monthly Operations Volume */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <span>Projected Monthly Throughput</span>
            </label>
            <span className="text-xs font-mono font-bold text-[#96f1fa] bg-black/40 px-2 py-0.5 rounded border border-white/10">
              {config.monthlyOperations.toLocaleString()} ops / mo
            </span>
          </div>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={config.monthlyOperations}
            onChange={(e) => updateField('monthlyOperations', Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#006067]"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>10k (Startup)</span>
            <span>250k (Mid-Market)</span>
            <span>1M+ (Enterprise Scale)</span>
          </div>
        </div>

        {/* Slider 2: Current Manual Hours Spent / Week */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-200">
              Current Manual Human Triage
            </label>
            <span className="text-xs font-mono font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
              {config.manualHoursWeek} hrs / week
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            value={config.manualHoursWeek}
            onChange={(e) => updateField('manualHoursWeek', Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>10 hrs</span>
            <span>150 hrs (Team of 4)</span>
            <span>300+ hrs (Large Ops)</span>
          </div>
        </div>
      </div>

      {/* Toggles & Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {/* Compliance Tier */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <Shield className="w-3.5 h-3.5 text-[#96f1fa]" />
            <span>Compliance Standard</span>
          </div>
          <select
            value={config.complianceTier}
            onChange={(e) =>
              updateField('complianceTier', e.target.value as 'standard' | 'soc2' | 'hipaa')
            }
            className="w-full bg-[#111a1f] text-xs text-white border border-white/10 rounded-xl px-2.5 py-1.5 outline-none focus:border-[#006067]"
          >
            <option value="standard">Standard (ISO 27001)</option>
            <option value="soc2">SOC2 Type II Certified</option>
            <option value="hipaa">HIPAA / Healthcare Shield</option>
          </select>
        </div>

        {/* Multi-Agent Orchestration */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#96f1fa]" />
              <span>Multi-Agent LangGraph</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Autonomous supervisor</p>
          </div>
          <input
            type="checkbox"
            checked={config.multiAgentOrchestration}
            onChange={(e) => updateField('multiAgentOrchestration', e.target.checked)}
            className="w-4 h-4 rounded text-[#006067] focus:ring-0 accent-[#006067] cursor-pointer"
          />
        </div>

        {/* Vector RAG Layer */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Database className="w-3.5 h-3.5 text-[#96f1fa]" />
              <span>Hybrid Vector RAG</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Semantic memory retrieval</p>
          </div>
          <input
            type="checkbox"
            checked={config.vectorRagEnabled}
            onChange={(e) => updateField('vectorRagEnabled', e.target.checked)}
            className="w-4 h-4 rounded text-[#006067] focus:ring-0 accent-[#006067] cursor-pointer"
          />
        </div>

        {/* Cloud Deployment Target */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <Cloud className="w-3.5 h-3.5 text-[#96f1fa]" />
            <span>Target Cloud Infra</span>
          </div>
          <select
            value={config.cloudModel}
            onChange={(e) =>
              updateField('cloudModel', e.target.value as 'aws' | 'gcp' | 'hybrid-onprem')
            }
            className="w-full bg-[#111a1f] text-xs text-white border border-white/10 rounded-xl px-2.5 py-1.5 outline-none focus:border-[#006067]"
          >
            <option value="aws">AWS (EKS, Bedrock, S3)</option>
            <option value="gcp">Google Cloud (GKE, Vertex AI)</option>
            <option value="hybrid-onprem">Hybrid / Private On-Prem VPC</option>
          </select>
        </div>
      </div>
    </div>
  );
};

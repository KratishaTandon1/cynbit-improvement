import React from 'react';
import type { ArchitecturePreset } from '../types/architect';
import { PhoneCall, FileText, Server, GraduationCap, ArrowRight } from 'lucide-react';

interface PresetSelectorProps {
  presets: ArchitecturePreset[];
  selectedPresetId: string;
  onSelectPreset: (presetId: string) => void;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({
  presets,
  selectedPresetId,
  onSelectPreset,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'autonomous-voice-support':
        return <PhoneCall className="w-5 h-5 text-[#96f1fa]" />;
      case 'cognitive-document-pipeline':
        return <FileText className="w-5 h-5 text-[#96f1fa]" />;
      case 'scalable-cloud-saas':
        return <Server className="w-5 h-5 text-[#96f1fa]" />;
      case 'bitelevate-dev-lab':
        return <GraduationCap className="w-5 h-5 text-[#96f1fa]" />;
      default:
        return <Server className="w-5 h-5 text-[#96f1fa]" />;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-headline flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006067]" />
            <span>Select Solution Architecture Archetype</span>
          </h2>
          <p className="text-xs text-slate-400">
            Choose a production-grade blueprint or calibrate custom parameters below.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#96f1fa] bg-[#006067]/20 border border-[#006067]/40 px-2.5 py-1 rounded-lg self-start sm:self-auto">
          4 Architecture Patterns Available
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {presets.map((preset) => {
          const isSelected = preset.id === selectedPresetId;
          return (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset.id)}
              className={`p-4 rounded-2xl text-left transition-all relative border cursor-pointer group ${
                isSelected
                  ? 'bg-gradient-to-b from-[#006067]/30 to-[#0e1b21] border-[#007b83] ring-1 ring-[#96f1fa]/40 shadow-lg shadow-[#006067]/20'
                  : 'bg-[#0a1114]/70 hover:bg-[#0e171b] border-white/5 hover:border-white/20'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold text-[#00f5d4] uppercase tracking-wider bg-[#006067]/60 px-2 py-0.5 rounded-full border border-[#00f5d4]/30">
                  Active
                </div>
              )}

              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#006067]' : 'bg-white/5 group-hover:bg-white/10'
                  }`}
                >
                  {getIcon(preset.id)}
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block font-mono">
                    {preset.category}
                  </span>
                  <h3 className="text-xs font-bold text-white group-hover:text-[#96f1fa] transition-colors leading-snug">
                    {preset.shortTitle}
                  </h3>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-3">
                {preset.tagline}
              </p>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2 border-t border-white/5">
                <span>Latency: ~{preset.defaultScale.latencyMs}ms</span>
                <span className="flex items-center gap-1 text-[#96f1fa] group-hover:translate-x-1 transition-transform">
                  Inspect <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

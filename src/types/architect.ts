export type LayerType = 'client' | 'security' | 'orchestration' | 'data' | 'integration';

export interface SystemNode {
  id: string;
  layer: LayerType;
  title: string;
  tech: string;
  description: string;
  latency: string;
  iconName: string;
  status?: 'active' | 'processing' | 'idle';
  details: {
    role: string;
    throughput: string;
    security: string;
    scaling: string;
    configSnippet?: string;
  };
}

export interface ArchitecturePreset {
  id: string;
  title: string;
  shortTitle: string;
  category: 'AI Automation' | 'Cognitive Data' | 'Cloud SaaS' | 'BitElevate Labs';
  tagline: string;
  description: string;
  targetAudience: string;
  nodes: SystemNode[];
  defaultScale: {
    monthlyOperations: number;
    manualHoursWeek: number;
    latencyMs: number;
    complianceTier: 'standard' | 'soc2' | 'hipaa';
    costPerOpManual: number;
  };
  sampleCode: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface RequirementConfig {
  presetId: string;
  monthlyOperations: number;
  manualHoursWeek: number;
  latencyMs: number;
  complianceTier: 'standard' | 'soc2' | 'hipaa';
  guardrailsEnabled: boolean;
  multiAgentOrchestration: boolean;
  vectorRagEnabled: boolean;
  cloudModel: 'aws' | 'gcp' | 'hybrid-onprem';
}

export interface SprintRoadmap {
  sprintNumber: number;
  title: string;
  duration: string;
  deliverables: string[];
}

export interface RoiEstimate {
  monthlyHoursSaved: number;
  monthlyCostSavingsUSD: number;
  operationalReductionPct: number;
  estimatedWeeks: number;
  estCloudCostPerMonthUSD: number;
  sprints: SprintRoadmap[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'aria';
  text: string;
  timestamp: string;
  suggestedAction?: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  projectDomain: string;
  timelineChoice: string;
  budgetTier: string;
  blueprintSummary: string;
  submittedAt: string;
}

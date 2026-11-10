import type { RequirementConfig, RoiEstimate, SprintRoadmap } from '../types/architect';

export function calculateRoi(config: RequirementConfig, baseCostPerOp: number = 4.5): RoiEstimate {
  // 1. Calculate monthly hours saved
  // Automation handles between 72% to 84% of manual repetitive tasks
  const automationEfficiency = config.multiAgentOrchestration ? 0.82 : 0.74;
  const totalMonthlyManualHours = config.manualHoursWeek * 4.33;
  const monthlyHoursSaved = Math.round(totalMonthlyManualHours * automationEfficiency);

  // 2. Calculate dollar savings (assuming standard blended enterprise rate of $38/hr)
  const hourlyLaborRate = 38;
  const laborCostSavings = monthlyHoursSaved * hourlyLaborRate;
  
  // Operation volume error-reduction savings
  const volumeSavings = Math.round(config.monthlyOperations * 0.04 * baseCostPerOp);
  const totalMonthlySavings = laborCostSavings + volumeSavings;

  // 3. Cloud run-cost estimation (LLM tokens + Vector storage + Compute)
  const tokenCostPerOp = config.multiAgentOrchestration ? 0.0038 : 0.0018;
  const complianceOverhead = config.complianceTier === 'hipaa' ? 240 : config.complianceTier === 'soc2' ? 140 : 45;
  const estCloudCostPerMonthUSD = Math.round(config.monthlyOperations * tokenCostPerOp + complianceOverhead);

  // 4. Sprint roadmap duration
  let baseWeeks = 4;
  if (config.complianceTier !== 'standard') baseWeeks += 1;
  if (config.multiAgentOrchestration) baseWeeks += 1;
  if (config.vectorRagEnabled) baseWeeks += 1;

  const sprints: SprintRoadmap[] = [
    {
      sprintNumber: 1,
      title: 'Infrastructure & Ingestion Gateways',
      duration: 'Weeks 1–2',
      deliverables: [
        'Secure edge gateway and WebRTC / REST ingestion pipeline',
        config.complianceTier !== 'standard'
          ? `${config.complianceTier.toUpperCase()} encrypted vault & audit ledger setup`
          : 'Zero-trust authentication & rate-limiting middleware',
        'Initial test harnesses and telemetry logging pipeline',
      ],
    },
    {
      sprintNumber: 2,
      title: 'Cognitive AI Core & Knowledge Layer',
      duration: 'Weeks 3–4',
      deliverables: [
        config.multiAgentOrchestration
          ? 'LangGraph multi-agent supervisor with dynamic state management'
          : 'Deterministic cognitive routing and tool execution pipeline',
        config.vectorRagEnabled
          ? 'Hybrid sparse/dense vector database indexing (Pinecone / pgvector)'
          : 'Structured database caching and session store',
        config.guardrailsEnabled
          ? 'In-flight PII redaction and prompt injection guardrails'
          : 'Baseline schema validation and sanitization',
      ],
    },
    {
      sprintNumber: 3,
      title: 'Enterprise Integration & Tool Calling',
      duration: 'Weeks 5–6',
      deliverables: [
        'Two-way CRM / ERP synchronization with dead-letter retry queues',
        'Idempotent transactional safety and rollback guarantees',
        'Sub-second latency optimizations and caching warmups',
      ],
    },
    {
      sprintNumber: 4,
      title: 'Hardening, E2E Evaluation & Production Cutover',
      duration: `Weeks 7–${baseWeeks}`,
      deliverables: [
        'Synthetic benchmark load testing up to 3x peak projected traffic',
        'Continuous evaluation harness verifying hallucination rate < 0.2%',
        'Zero-downtime blue/green deployment and staff operational training',
      ],
    },
  ];

  return {
    monthlyHoursSaved,
    monthlyCostSavingsUSD: totalMonthlySavings,
    operationalReductionPct: Math.round(automationEfficiency * 100),
    estimatedWeeks: baseWeeks,
    estCloudCostPerMonthUSD,
    sprints,
  };
}

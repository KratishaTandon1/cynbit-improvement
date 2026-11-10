import type { ArchitecturePreset } from '../types/architect';

export const ARCHITECTURE_PRESETS: ArchitecturePreset[] = [
  {
    id: 'autonomous-voice-support',
    title: 'Autonomous Multimodal AI Support & Voice Agent',
    shortTitle: 'Voice & Support AI',
    category: 'AI Automation',
    tagline: 'Sub-180ms conversational voice & omnichannel customer intelligence pipeline.',
    description:
      'Engineered for high-volume customer operations. Bridges WebRTC real-time audio streams and omnichannel chat directly to a stateful LangGraph agent graph, with dynamic tool execution and automated CRM sync.',
    targetAudience: 'Enterprise B2C/B2B customer experience, healthcare patient triage, fintech support.',
    defaultScale: {
      monthlyOperations: 85000,
      manualHoursWeek: 95,
      latencyMs: 165,
      complianceTier: 'soc2',
      costPerOpManual: 4.5,
    },
    sampleCode: {
      filename: 'agent_supervisor.py',
      language: 'python',
      code: `from langgraph.graph import StateGraph, END
from langchain_core.messages import SystemMessage, HumanMessage
from pydantic import BaseModel, Field

class AgentState(BaseModel):
    caller_id: str
    intent: str = Field(description="Detected customer intent")
    sentiment_score: float = 0.0
    authenticated: bool = False
    context_tokens: int = 0
    resolved: bool = False

def security_guardrail_node(state: AgentState):
    # Enforce PII masking and prompt injection defense
    sanitized_input = mask_sensitive_pii(state.caller_id)
    return {"authenticated": verify_voice_biometrics(state.caller_id)}

def supervisor_router(state: AgentState):
    if not state.authenticated:
        return "auth_challenge"
    if state.intent in ["billing_dispute", "account_escalation"]:
        return "escalation_specialist"
    return "autonomous_resolution_agent"

builder = StateGraph(AgentState)
builder.add_node("guardrails", security_guardrail_node)
builder.add_node("router", supervisor_router)
builder.add_conditional_edges("router", supervisor_router)
cynbit_voice_graph = builder.compile()`,
    },
    nodes: [
      {
        id: 'voice-client',
        layer: 'client',
        title: 'Omnichannel Ingestion',
        tech: 'WebRTC / Twilio SIP Trunking',
        description: 'Handles full-duplex bidirectional streaming audio and instant WebSocket chat.',
        latency: '35ms',
        iconName: 'PhoneCall',
        details: {
          role: 'Captures ultra-low latency voice packet stream and customer web sessions.',
          throughput: 'Up to 2,500 simultaneous concurrent voice channels.',
          security: 'SRTP (Secure Real-Time Transport Protocol) + TLS 1.3.',
          scaling: 'Autoscaled WebRTC media gateways deployed across multi-region edge pops.',
          configSnippet: 'webrtc.config: { iceServers: [{ urls: "stun:stun.cynbit.in:3478" }], codec: "OPUS/48000" }',
        },
      },
      {
        id: 'voice-guardrails',
        layer: 'security',
        title: 'NeMo Guardrails & PII Masker',
        tech: 'Presidio + Toxic Detection Guard',
        description: 'Zero-trust sanitization filtering SSN, credit cards, and jailbreak attacks in-flight.',
        latency: '18ms',
        iconName: 'ShieldCheck',
        details: {
          role: 'Inspects both input audio transcript and agent output before synthesis.',
          throughput: 'Line-rate streaming token filter (10,000 tokens/sec/node).',
          security: 'SOC2 Type II certified PII redaction layer with encrypted audit hashing.',
          scaling: 'Stateless Golang sidecar container with shared memory buffers.',
          configSnippet: 'guardrails: { pii_redact: ["CREDIT_CARD", "PHONE", "AADHAAR"], jailbreak_score_max: 0.05 }',
        },
      },
      {
        id: 'voice-orchestration',
        layer: 'orchestration',
        title: 'LangGraph Cognitive Core',
        tech: 'Claude 3.5 Sonnet / Llama 3.3',
        description: 'Multi-agent supervisor coordinating intent routing, policy lookup, and tool invocation.',
        latency: '85ms',
        iconName: 'Cpu',
        details: {
          role: 'Evaluates customer conversation state, performs semantic memory retrieval, and executes tools.',
          throughput: 'Elastic task worker cluster with sub-second time-to-first-token.',
          security: 'Ephemeral sandbox execution for arbitrary CRM function calls.',
          scaling: 'Ray Core / Kubernetes cluster with automated queue backpressure management.',
          configSnippet: 'supervisor: { model: "claude-3-5-sonnet", temperature: 0.1, max_agent_turns: 4 }',
        },
      },
      {
        id: 'voice-memory',
        layer: 'data',
        title: 'Hybrid Vector & Session Cache',
        tech: 'Pinecone Serverless + Redis 7',
        description: 'Dual-tiered memory combining semantic vector search with real-time session KV store.',
        latency: '15ms',
        iconName: 'Database',
        details: {
          role: 'Instant contextual recall of past customer interactions and company knowledge base.',
          throughput: 'Over 50,000 QPS with p99 retrieval < 20ms.',
          security: 'End-to-end AES-256 encryption at rest, customer-managed KMS keys.',
          scaling: 'Serverless vector auto-indexing with Redis Sentinel high-availability cluster.',
          configSnippet: 'pinecone: { metric: "cosine", dimension: 1536, hybrid_alpha: 0.75, rerank: "cohere-rerank-v3" }',
        },
      },
      {
        id: 'voice-integrations',
        layer: 'integration',
        title: 'CRM & Enterprise Tooling',
        tech: 'Salesforce, Zendesk & PostgreSQL',
        description: 'Autonomous bidirectional updates, automated ticket closures, and transaction rollback.',
        latency: '40ms',
        iconName: 'Boxes',
        details: {
          role: 'Directly executes order modifications, refund authorizations, and case creation.',
          throughput: 'Rate-limited asynchronous event dispatcher with dead-letter queue.',
          security: 'OAuth 2.0 PKCE authentication with per-tenant scoped role tokens.',
          scaling: 'Asynchronous event workers consuming RabbitMQ event buses.',
          configSnippet: 'tools: ["salesforce_case_update", "stripe_refund_evaluator", "sms_confirmation_dispatch"]',
        },
      },
    ],
  },
  {
    id: 'cognitive-document-pipeline',
    title: 'Cognitive Document Intelligence & ERP Pipeline',
    shortTitle: 'Document AI Pipeline',
    category: 'Cognitive Data',
    tagline: 'Autonomous multimodal document parsing, compliance auditing, and ERP injection.',
    description:
      'Transforms unstructured PDFs, scans, and financial records into validated JSON schemas. Features zero-shot table extraction, semantic discrepancy cross-referencing, and automated SAP/Zoho ledger entry.',
    targetAudience: 'Supply chain logistics, accounts payable departments, legal compliance, fintech lending.',
    defaultScale: {
      monthlyOperations: 45000,
      manualHoursWeek: 120,
      latencyMs: 750,
      complianceTier: 'hipaa',
      costPerOpManual: 6.0,
    },
    sampleCode: {
      filename: 'document_extractor.py',
      language: 'python',
      code: `from pydantic import BaseModel, Field
from typing import List, Optional
import google.generativeai as genai

class InvoiceLineItem(BaseModel):
    sku: str
    description: str
    quantity: float
    unit_price: float
    line_total: float
    hsn_code: Optional[str] = None

class ValidatedFinancialDocument(BaseModel):
    vendor_gstin: str
    invoice_number: str
    invoice_date: str
    taxable_amount: float
    gst_total: float
    grand_total: float
    items: List[InvoiceLineItem]
    confidence_score: float = Field(ge=0.0, le=1.0)

async def extract_and_verify(pdf_bytes: bytes) -> ValidatedFinancialDocument:
    # Multimodal vision extraction with Cynbit structured schema enforcement
    model = genai.GenerativeModel("gemini-1.5-flash")
    result = await model.generate_content_async(
        [pdf_bytes, "Extract structured invoice matching Pydantic schema strictly."]
    )
    validated_record = ValidatedFinancialDocument.model_validate_json(result.text)
    # Cross check arithmetic integrity
    computed_sum = sum(i.line_total for i in validated_record.items)
    assert abs(computed_sum - validated_record.taxable_amount) < 0.05
    return validated_record`,
    },
    nodes: [
      {
        id: 'doc-ingest',
        layer: 'client',
        title: 'Multi-Source Ingestion',
        tech: 'S3 Presigned URLs + Email Webhooks',
        description: 'Event-driven ingestion capturing uploads via API, S3 buckets, and automated email parsers.',
        latency: '45ms',
        iconName: 'UploadCloud',
        details: {
          role: 'Streams multi-page TIFF, PDF, and image files into secure object storage staging.',
          throughput: 'Batch ingestion up to 250 documents/second.',
          security: 'Signed expiring upload tokens; malware and polyglot virus quarantine scanning.',
          scaling: 'AWS S3 bucket notification triggering SQS asynchronous queues.',
          configSnippet: 'ingest: { max_file_size_mb: 50, accepted_mimes: ["application/pdf", "image/png"] }',
        },
      },
      {
        id: 'doc-security',
        layer: 'security',
        title: 'Compliance Vault & Cryptographic Ledger',
        tech: 'HashiCorp Vault + KMS',
        description: 'Enforces granular tenant data isolation with tamper-evident audit logging.',
        latency: '12ms',
        iconName: 'Lock',
        details: {
          role: 'Ensures strict HIPAA / SOC2 financial secrecy standards for sensitive documents.',
          throughput: 'Low-latency envelope encryption for each discrete document payload.',
          security: 'FIPS 140-2 Level 3 validated hardware security modules (HSM).',
          scaling: 'Stateless sidecar architecture distributed across multi-availability zones.',
          configSnippet: 'vault: { transit_key: "cynbit-doc-aes256", audit_log: "cloudwatch-immutability" }',
        },
      },
      {
        id: 'doc-ocr-vision',
        layer: 'orchestration',
        title: 'Multimodal Vision & Schema Parser',
        tech: 'Gemini 1.5 Flash + LayoutLMv3',
        description: 'Spatial token understanding preserving complex tables, nested subtotals, and handwritten signatures.',
        latency: '420ms',
        iconName: 'FileText',
        details: {
          role: 'Extracts tabular hierarchies and normalizes dates, currencies, and vendor entities.',
          throughput: 'Concurrent batch extraction across parallel worker pods.',
          security: 'Zero data retention policy contracts with underlying model providers.',
          scaling: 'Celery / Redis workers autoscaling dynamically based on SQS queue depth.',
          configSnippet: 'parser: { engine: "gemini-1.5-flash-vision", confidence_floor: 0.94 }',
        },
      },
      {
        id: 'doc-database',
        layer: 'data',
        title: 'Relational & Semantic Store',
        tech: 'PostgreSQL 16 + pgvector',
        description: 'Stores verified JSON documents alongside vector embeddings for cross-contract discovery.',
        latency: '22ms',
        iconName: 'HardDrive',
        details: {
          role: 'Enables rapid semantic query ("Show all contracts with penalty clauses above 10%").',
          throughput: 'Over 12,000 complex multi-join analytical queries per minute.',
          security: 'Row-Level Security (RLS) policies guaranteeing strict multi-tenant boundary.',
          scaling: 'Read replicas with automated failover and partitioned historical tables.',
          configSnippet: 'postgres: { rls_enabled: true, extension: "vector", index: "HNSW(m=16, ef_construction=64)" }',
        },
      },
      {
        id: 'doc-erp-sync',
        layer: 'integration',
        title: 'ERP & Accounting Dispatch',
        tech: 'SAP HANA, Zoho Books & Tally Prime',
        description: 'Auto-posts verified transactions into general ledgers with two-way reconciliation.',
        latency: '60ms',
        iconName: 'Layers',
        details: {
          role: 'Eliminates 98% of human manual data entry in accounts payable workflows.',
          throughput: 'Batch ledger injection with automatic idempotency check to avoid double entries.',
          security: 'Mutual TLS (mTLS) with client certificate pinning.',
          scaling: 'Transactional outbox pattern ensuring resilient guaranteed delivery.',
          configSnippet: 'dispatch: { target: "sap_hana_gateway", auto_reconcile: true, max_retry: 5 }',
        },
      },
    ],
  },
  {
    id: 'scalable-cloud-saas',
    title: 'High-Concurrency Cloud SaaS Platform & Analytics',
    shortTitle: 'Enterprise SaaS Platform',
    category: 'Cloud SaaS',
    tagline: 'Multi-tenant cloud architecture engineered for sub-second analytical aggregations.',
    description:
      'High-performance full-stack digital infrastructure designed for modern SaaS companies. Combines Next.js edge caching, event-driven microservices, and ClickHouse columnar storage for real-time customer dashboards.',
    targetAudience: 'Fast-scaling SaaS startups, fintech platforms, enterprise telemetry dashboards.',
    defaultScale: {
      monthlyOperations: 250000,
      manualHoursWeek: 70,
      latencyMs: 95,
      complianceTier: 'soc2',
      costPerOpManual: 3.2,
    },
    sampleCode: {
      filename: 'clickhouse_analytics.ts',
      language: 'typescript',
      code: `import { createClient } from '@clickhouse/client';

export const clickhouse = createClient({
  url: process.env.CLICKHOUSE_URL,
  username: 'cynbit_worker',
  password: process.env.CLICKHOUSE_PASSWORD,
});

export interface TelemetryEvent {
  tenant_id: string;
  event_name: string;
  user_id: string;
  latency_ms: number;
  metadata: Record<string, any>;
  timestamp: string;
}

export async function recordRealtimeEvent(event: TelemetryEvent) {
  // Batch insert directly into ClickHouse MergeTree engine
  await clickhouse.insert({
    table: 'tenant_events_buffer',
    values: [event],
    format: 'JSONEachRow',
  });
}

export async function queryTenantAggregates(tenantId: string, hours = 24) {
  const result = await clickhouse.query({
    query: \`
      SELECT 
        toStartOfHour(timestamp) AS hour_bucket,
        count(*) AS total_events,
        quantile(0.95)(latency_ms) AS p95_latency
      FROM tenant_events_buffer
      WHERE tenant_id = {tenantId: String}
        AND timestamp >= now() - INTERVAL {hours: UInt32} HOUR
      GROUP BY hour_bucket
      ORDER BY hour_bucket ASC
    \`,
    query_params: { tenantId, hours },
    format: 'JSONEachRow',
  });
  return await result.json();
}`,
    },
    nodes: [
      {
        id: 'saas-edge',
        layer: 'client',
        title: 'Global Edge Runtime',
        tech: 'Cloudflare Workers + Next.js 15',
        description: 'Serves dynamic client assets and API proxies from 300+ edge locations worldwide.',
        latency: '15ms',
        iconName: 'Globe',
        details: {
          role: 'Sub-20ms TTFB globally with stale-while-revalidate edge caching.',
          throughput: 'Handles 100,000+ edge requests/sec without origin degradation.',
          security: 'Cloudflare DDoS Shield, Web Application Firewall (WAF) & Bot Fight mode.',
          scaling: 'Automatic serverless global scaling with zero cold-starts.',
          configSnippet: 'cloudflare: { runtime: "edge", cache_control: "public, max-age=60, s-maxage=3600" }',
        },
      },
      {
        id: 'saas-auth',
        layer: 'security',
        title: 'Zero-Trust Auth & RBAC',
        tech: 'JWT + Upstash Redis Distributed Locks',
        description: 'Multi-tenant authorization, organization switching, and cryptographic session validation.',
        latency: '8ms',
        iconName: 'Fingerprint',
        details: {
          role: 'Validates API keys, granular permissions, and organization-scoped access control.',
          throughput: 'Over 80,000 auth verifications/sec with Redis memory cache.',
          security: 'RS256 asymmetric token verification with instant key rotation.',
          scaling: 'Edge-compatible key-value cache replicated in sub-millisecond proximity.',
          configSnippet: 'auth: { algorithm: "RS256", session_ttl_sec: 86400, rbac_roles: ["admin", "dev", "viewer"] }',
        },
      },
      {
        id: 'saas-api-cluster',
        layer: 'orchestration',
        title: 'Microservices Gateway',
        tech: 'FastAPI + Node.js Microservices',
        description: 'High-throughput async event processor with GraphQL and REST endpoint aggregation.',
        latency: '45ms',
        iconName: 'Server',
        details: {
          role: 'Coordinates business domain logic, payments, billing cycles, and user notifications.',
          throughput: 'Benchmarked at 15,000 RPS on multi-core Kubernetes deployment.',
          security: 'Service-to-service mTLS via Istio Service Mesh.',
          scaling: 'Kubernetes Horizontal Pod Autoscaler (HPA) triggered by CPU & request queue.',
          configSnippet: 'k8s.hpa: { minReplicas: 3, maxReplicas: 40, targetCPUUtilizationPercentage: 70 }',
        },
      },
      {
        id: 'saas-olap-database',
        layer: 'data',
        title: 'ClickHouse Columnar + Aurora PG',
        tech: 'ClickHouse OLAP & PostgreSQL',
        description: 'Hybrid transactional and analytical storage for sub-second dashboards at scale.',
        latency: '25ms',
        iconName: 'BarChart3',
        details: {
          role: 'Aggregates billions of telemetry records in milliseconds for interactive charts.',
          throughput: 'Sustained ingest of 500,000 rows/second with 10x data compression.',
          security: 'Transparent data encryption (TDE) with automated continuous backup snapshots.',
          scaling: 'Sharded ClickHouse cluster with ClickHouse Keeper distributed consensus.',
          configSnippet: 'clickhouse: { engine: "ReplacingMergeTree", partition_by: "toYYYYMM(timestamp)" }',
        },
      },
      {
        id: 'saas-event-bus',
        layer: 'integration',
        title: 'Streaming Event Bus & Webhooks',
        tech: 'Apache Kafka / Redpanda',
        description: 'Real-time event streaming pipe connecting background jobs, analytics, and partner webhooks.',
        latency: '10ms',
        iconName: 'Activity',
        details: {
          role: 'Decouples heavy workloads from client requests with guaranteed at-least-once semantics.',
          throughput: '2 million messages/sec throughput across partitioned consumer groups.',
          security: 'SASL/SCRAM authentication with TLS data channel encryption.',
          scaling: 'Distributed Kafka partitions balanced across independent fault domains.',
          configSnippet: 'kafka: { topic: "tenant.telemetry", partitions: 16, replication_factor: 3 }',
        },
      },
    ],
  },
  {
    id: 'bitelevate-dev-lab',
    title: 'BitElevate Autonomous Engineering & Code Review Lab',
    shortTitle: 'BitElevate Dev Lab',
    category: 'BitElevate Labs',
    tagline: 'Automated PR evaluation, containerized test sandboxes, and AI code mentorship.',
    description:
      "Designed specifically for Cynbit's flagship BitElevate initiative. Eliminates tutorial hell by providing aspiring engineers with an automated sandbox that clones pull requests, runs unit test suites, and generates real-time AI code reviews.",
    targetAudience: 'Engineering interns, university labs, corporate developer onboarding pipelines.',
    defaultScale: {
      monthlyOperations: 30000,
      manualHoursWeek: 60,
      latencyMs: 1200,
      complianceTier: 'standard',
      costPerOpManual: 5.5,
    },
    sampleCode: {
      filename: 'pr_evaluator_agent.py',
      language: 'python',
      code: `import ast
import subprocess
from pydantic import BaseModel

class CodeReviewFeedback(BaseModel):
    test_passed: bool
    test_coverage_pct: float
    cyclomatic_complexity: int
    security_vulnerabilities: list[str]
    mentor_suggestions: list[str]
    score_out_of_100: int

def evaluate_submission(repo_url: str, branch: str) -> CodeReviewFeedback:
    # 1. Spin up ephemeral isolated Docker container
    container_id = spawn_secure_sandbox(image="cynbit/eval-runtime:node20")
    
    # 2. Run test suites and coverage analysis
    result = run_in_sandbox(container_id, "npm test -- --coverage --json")
    
    # 3. AI AST Code Quality & Mentorship Analysis
    review = cynbit_mentor_agent.analyze_diff(
        repo=repo_url, 
        branch=branch,
        rubric="Cynbit Engineering Standards v2"
    )
    
    cleanup_sandbox(container_id)
    return review`,
    },
    nodes: [
      {
        id: 'bit-student-portal',
        layer: 'client',
        title: 'BitElevate Web IDE & Portal',
        tech: 'React 19 + Monaco Code Editor',
        description: 'Browser-based interactive coding environment with live terminal and git sync.',
        latency: '30ms',
        iconName: 'Laptop',
        details: {
          role: 'Provides student developers with zero-setup development environments.',
          throughput: 'Supports 5,000 simultaneous active engineering student sessions.',
          security: 'Isolated client sandbox with sandboxed iframe execution contexts.',
          scaling: 'WebSockets multiplexing across regional connection pools.',
          configSnippet: 'editor: { theme: "cynbit-dark", language: "typescript", linter: "eslint" }',
        },
      },
      {
        id: 'bit-git-hooks',
        layer: 'security',
        title: 'GitHub App & Webhook Gateway',
        tech: 'GitHub REST/GraphQL API + HMAC',
        description: 'Authenticates commit signatures, verifies author credentials, and triggers eval pipelines.',
        latency: '25ms',
        iconName: 'GitPullRequest',
        details: {
          role: 'Listens for push, pull_request, and comment events on student repos.',
          throughput: 'Instant processing of up to 1,000 commit hooks per minute.',
          security: 'HMAC SHA-256 payload verification ensuring webhook tamper-resistance.',
          scaling: 'Serverless webhook handlers with automatic backoff retry.',
          configSnippet: 'webhook: { events: ["pull_request.opened", "push"], verify_hmac: true }',
        },
      },
      {
        id: 'bit-sandbox-cluster',
        layer: 'orchestration',
        title: 'Containerized Docker Sandbox',
        tech: 'Docker + Firecracker MicroVMs',
        description: 'Ephemeral microVM sandboxes running student tests with strict memory and CPU quotas.',
        latency: '850ms',
        iconName: 'Terminal',
        details: {
          role: 'Safely executes arbitrary student code, runs Jest/Pytest, and measures memory consumption.',
          throughput: 'Spins up clean sandboxes in under 200ms using Firecracker.',
          security: 'Air-gapped networking; zero access to internal company network or secrets.',
          scaling: 'Autoscaled worker nodes cycling containers after single execution.',
          configSnippet: 'microvm: { vcpu: 2, mem_mb: 1024, timeout_sec: 60, network: "none" }',
        },
      },
      {
        id: 'bit-ai-mentor',
        layer: 'orchestration',
        title: 'AI Code Mentor & AST Reviewer',
        tech: 'Claude 3.5 Haiku + Tree-sitter',
        description: 'Provides line-by-line constructive feedback, explains time complexity, and enforces clean commits.',
        latency: '320ms',
        iconName: 'Sparkles',
        details: {
          role: 'Acts as a 24/7 senior software architect reviewing student pull requests.',
          throughput: 'Instant feedback loop within 15 seconds of git push.',
          security: 'Deterministic static analysis combined with contextual LLM coaching.',
          scaling: 'Batched inference with semantic prompt caching.',
          configSnippet: 'mentor: { rubric: "clean_code_solid_principles", max_suggestions: 3 }',
        },
      },
      {
        id: 'bit-credential-engine',
        layer: 'data',
        title: 'Verifiable Credential Ledger',
        tech: 'PostgreSQL + Ed25519 Signatures',
        description: 'Stores verified student competency milestones, project repos, and verifiable certificates.',
        latency: '30ms',
        iconName: 'Award',
        details: {
          role: 'Empowers students with tamper-proof portfolio proof that recruiters can inspect directly.',
          throughput: 'Immediate verifiable verification lookup with public cryptographic key.',
          security: 'Ed25519 cryptographic signatures on all issued competency certificates.',
          scaling: 'Distributed CDN caching for candidate verification URLs.',
          configSnippet: 'certificate: { algorithm: "Ed25519", issuer: "Cynbit Technologies", verifiable: true }',
        },
      },
    ],
  },
];

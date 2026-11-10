import React, { useState } from 'react';
import type { ChatMessage } from '../types/architect';
import { X, Send, Sparkles, Bot, User } from 'lucide-react';

interface AriaAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePresetTitle: string;
}

export const AriaAdvisorModal: React.FC<AriaAdvisorModalProps> = ({
  isOpen,
  onClose,
  activePresetTitle,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'aria',
      text: `Hello! I am Aria, Cynbit's Lead Autonomous AI Architect. I'm actively analyzing your configuration for "${activePresetTitle}". Feel free to ask any architectural question regarding latency SLAs, token budgets, compliance, or custom CRM integrations.`,
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    'How does Cynbit guarantee sub-180ms latency in Voice AI?',
    'Can we deploy this inside our private AWS/GCP VPC?',
    'How do you prevent hallucinations in financial extraction?',
    'What is the token cost difference between Claude Sonnet and Llama 3?',
  ];

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Generate intelligent architectural response based on query
    setTimeout(() => {
      let replyText = '';
      const q = query.toLowerCase();

      if (q.includes('latency') || q.includes('sub-180ms') || q.includes('voice')) {
        replyText =
          'We achieve sub-180ms voice latency through a 3-tier optimization: 1) Full-duplex WebRTC streaming with Opus codecs bypasses HTTP handshakes; 2) Streaming Whisper STT pipelines tokens into our LangGraph supervisor as audio is spoken; 3) Asynchronous TTS synthesis begins streaming audio chunks to the caller before the LLM has even finished its final sentence tokens.';
      } else if (q.includes('vpc') || q.includes('private') || q.includes('on-prem') || q.includes('deploy')) {
        replyText =
          'Yes! All Cynbit topologies are fully containerized using Kubernetes (EKS/GKE) and Docker. We support 100% on-premise or private VPC deployments with air-gapped models (e.g. self-hosted Llama 3.3 70B via vLLM), ensuring zero customer data ever traverses external public networks.';
      } else if (q.includes('hallucination') || q.includes('financial') || q.includes('extraction')) {
        replyText =
          'Our cognitive extraction pipeline implements a dual-verification barrier: First, Pydantic strict schemas enforce mathematical assertions (e.g., verifying that line items sum exactly to taxable amounts). Second, our pgvector cross-referencer checks vendor IDs against historical master records. If confidence falls below 0.94, it automatically routes to a human-in-the-loop review queue.';
      } else if (q.includes('token') || q.includes('cost') || q.includes('claude') || q.includes('llama')) {
        replyText =
          'For high-volume customer queries, Claude 3.5 Sonnet offers exceptional reasoning at $3/$15 per million tokens. However, for deterministic classifications, Cynbit utilizes fine-tuned Llama 3.3 or Gemini 1.5 Flash at ~1/10th the cost ($0.075/$0.30 per million tokens), paired with semantic Redis caching to achieve an average blend cost of only $0.0018 per user interaction.';
      } else {
        replyText =
          `At Cynbit, we engineer modern digital ecosystems tailored to modern engineering standards. For "${activePresetTitle}", we configure deterministic state machines, automated dead-letter queues, and end-to-end telemetry so your production workloads remain resilient 24/7. Would you like to schedule an engineering review with our architecture team?`;
      }

      const ariaMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'aria',
        text: replyText,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, ariaMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0c1418] border border-white/10 rounded-3xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-[#0e171b] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#006067] to-[#007b83] flex items-center justify-center text-[#96f1fa] shadow-md border border-[#96f1fa]/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-headline">
                  Aria AI • Systems Solution Architect
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Contextual AI Advisor • Cynbit Technologies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => {
            const isAria = m.sender === 'aria';
            return (
              <div
                key={m.id}
                className={`flex gap-3 text-xs leading-relaxed ${
                  isAria ? 'items-start' : 'items-start flex-row-reverse'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white ${
                    isAria
                      ? 'bg-[#006067] text-[#96f1fa] border border-[#96f1fa]/20'
                      : 'bg-slate-700 text-slate-200'
                  }`}
                >
                  {isAria ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] ${
                    isAria
                      ? 'bg-[#111a1f] border border-white/10 text-slate-200'
                      : 'bg-[#006067] text-white'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="text-[9px] text-slate-400 mt-1 block font-mono">
                    {m.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#96f1fa] font-mono p-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Aria is computing architectural recommendations...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts */}
        <div className="p-3 bg-[#0a1114] border-t border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="text-[11px] font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-[#006067]/30 border border-white/10 rounded-lg px-2.5 py-1 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0e171b] border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask Aria about system latencies, RAG pipelines, VPC deployments..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-[#111a1f] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#006067]"
          />
          <button
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-[#006067] hover:bg-[#007b83] text-white transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

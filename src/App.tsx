import React, { useState, useMemo, useRef } from 'react';
import { ARCHITECTURE_PRESETS } from './data/architectData';
import type { RequirementConfig } from './types/architect';
import { calculateRoi } from './utils/roiCalculator';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PresetSelector } from './components/PresetSelector';
import { SystemTopologyCanvas } from './components/SystemTopologyCanvas';
import { ArchitectureConfigurator } from './components/ArchitectureConfigurator';
import { RoiMatrix } from './components/RoiMatrix';
import { CodeViewer } from './components/CodeViewer';
import { AriaAdvisorModal } from './components/AriaAdvisorModal';
import { SpecificationExportModal } from './components/SpecificationExportModal';
import { LeadBookingModal } from './components/LeadBookingModal';
import { AuditComparisonModal } from './components/AuditComparisonModal';
import { TechnicalReportModal } from './components/TechnicalReportModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    ARCHITECTURE_PRESETS[0].id
  );
  const [activeTab, setActiveTab] = useState<'studio' | 'report' | 'audit' | 'code'>('studio');

  // Modal visibility states
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const studioRef = useRef<HTMLDivElement>(null);

  // Selected preset object
  const activePreset = useMemo(() => {
    return (
      ARCHITECTURE_PRESETS.find((p) => p.id === selectedPresetId) ||
      ARCHITECTURE_PRESETS[0]
    );
  }, [selectedPresetId]);

  // Requirement config state
  const [config, setConfig] = useState<RequirementConfig>({
    presetId: activePreset.id,
    monthlyOperations: activePreset.defaultScale.monthlyOperations,
    manualHoursWeek: activePreset.defaultScale.manualHoursWeek,
    latencyMs: activePreset.defaultScale.latencyMs,
    complianceTier: activePreset.defaultScale.complianceTier,
    guardrailsEnabled: true,
    multiAgentOrchestration: true,
    vectorRagEnabled: true,
    cloudModel: 'aws',
  });

  // When switching presets, re-populate config with preset defaults
  const handleSelectPreset = (newPresetId: string) => {
    setSelectedPresetId(newPresetId);
    const newPreset =
      ARCHITECTURE_PRESETS.find((p) => p.id === newPresetId) || ARCHITECTURE_PRESETS[0];
    setConfig((prev) => ({
      ...prev,
      presetId: newPreset.id,
      monthlyOperations: newPreset.defaultScale.monthlyOperations,
      manualHoursWeek: newPreset.defaultScale.manualHoursWeek,
      latencyMs: newPreset.defaultScale.latencyMs,
      complianceTier: newPreset.defaultScale.complianceTier,
    }));
  };

  // Dynamically compute ROI based on active config
  const roi = useMemo(() => {
    return calculateRoi(config, activePreset.defaultScale.costPerOpManual);
  }, [config, activePreset]);

  const handleScrollToStudio = () => {
    setActiveTab('studio');
    studioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070c0e] text-slate-100 flex flex-col font-body selection:bg-[#006067] selection:text-[#96f1fa]">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'audit') setIsAuditModalOpen(true);
          if (tab === 'report') setIsReportModalOpen(true);
        }}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToStudio={handleScrollToStudio}
          onOpenReport={() => setIsReportModalOpen(true)}
        />

        {/* Studio & Main Experience */}
        <div ref={studioRef} className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
          {/* Preset Selector */}
          <PresetSelector
            presets={ARCHITECTURE_PRESETS}
            selectedPresetId={selectedPresetId}
            onSelectPreset={handleSelectPreset}
          />

          {/* Conditional View by Tab */}
          {activeTab === 'code' ? (
            /* Code View */
            <CodeViewer preset={activePreset} />
          ) : (
            /* Interactive Studio View */
            <div className="space-y-8">
              {/* Interactive Topology Graph */}
              <SystemTopologyCanvas
                nodes={activePreset.nodes}
                presetTitle={activePreset.title}
              />

              {/* Dynamic Parameter Calibrator */}
              <ArchitectureConfigurator
                config={config}
                onChangeConfig={setConfig}
              />

              {/* ROI & Sprint Roadmap Matrix */}
              <RoiMatrix
                roi={roi}
                onBookReview={() => setIsBookingOpen(true)}
              />
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      <AriaAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        activePresetTitle={activePreset.title}
      />

      <SpecificationExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        preset={activePreset}
        config={config}
        roi={roi}
      />

      <LeadBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preset={activePreset}
        config={config}
        roi={roi}
      />

      <AuditComparisonModal
        isOpen={isAuditModalOpen}
        onClose={() => {
          setIsAuditModalOpen(false);
          setActiveTab('studio');
        }}
      />

      <TechnicalReportModal
        isOpen={isReportModalOpen}
        onClose={() => {
          setIsReportModalOpen(false);
          setActiveTab('studio');
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

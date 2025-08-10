import React from 'react';
import { GitBranch, TestTube, Zap, Shield, Code } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const workflow = [
    {
      icon: Code,
      title: "Design",
      subtitle: "Create structured prompt workflows",
      description: "Build reusable templates with best-practice guidance. Version control prompts like code with branching and rollback capabilities.",
      features: ["Template library", "Syntax validation", "Collaboration tools"]
    },
    {
      icon: GitBranch,
      title: "Deploy",
      subtitle: "Version control with enterprise governance",
      description: "Deploy prompts with approval workflows, staged rollouts, and complete audit trails. Push changes safely to production.",
      features: ["Staged deployments", "Approval workflows", "Audit logging"]
    },
    {
      icon: TestTube,
      title: "Test",
      subtitle: "A/B/n experiments at scale",
      description: "Automatically run prompt experiments with structured metrics collection. Compare performance across multiple variants simultaneously.",
      features: ["Multi-variant testing", "Statistical significance", "Real-time metrics"]
    },
    {
      icon: Zap,
      title: "Evolve",
      subtitle: "Genetic prompt evolution algorithms",
      description: "Our proprietary evolution engine uses mutation and reinforcement learning to continuously improve prompt performance automatically.",
      features: ["Genetic algorithms", "Performance optimization", "Automated improvement"]
    },
    {
      icon: Shield,
      title: "Govern",
      subtitle: "Enterprise compliance & security",
      description: "Role-based permissions, compliance logging, and change tracking. SOC2/GDPR-compliant with complete audit trails.",
      features: ["RBAC permissions", "Compliance tracking", "Change management"]
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
            <GitBranch className="w-4 h-4" />
            <span className="text-sm">PromptOps Platform</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            GitHub + Optimizely for AI prompts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end workflow for designing, testing, and evolving enterprise prompts with the same rigor as software code
          </p>
        </div>

        <div className="space-y-20">
          {workflow.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-2xl px-6 py-3 mb-6">
                  <step.icon className="w-6 h-6" />
                  <span className="text-lg font-semibold">{step.title}</span>
                </div>
                <h3 className="text-3xl mb-4 text-gray-900 font-bold">{step.subtitle}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{step.description}</p>
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
                  {/* Mock interface for each step */}
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-sm text-gray-500 mb-3">Prompt Template Editor</div>
                        <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                          <div className="text-blue-600">You are a helpful assistant...</div>
                          <div className="text-gray-600 mt-2">Context: {'{context}'}</div>
                          <div className="text-gray-600">Question: {'{question}'}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">v2.1 ✓</div>
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">main branch</div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-sm text-gray-500 mb-3">Deployment Pipeline</div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded border border-green-200">
                            <span className="text-sm">✓ Staging</span>
                            <span className="text-xs text-green-600">Approved</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded border border-yellow-200">
                            <span className="text-sm">⏳ Production</span>
                            <span className="text-xs text-yellow-600">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-sm text-gray-500 mb-3">A/B Test Results</div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Variant A</span>
                            <span className="text-sm text-gray-600">76% accuracy</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-teal-50 rounded border border-teal-200">
                            <span className="text-sm">Variant B ⭐</span>
                            <span className="text-sm text-teal-600">84% accuracy</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Variant C</span>
                            <span className="text-sm text-gray-600">71% accuracy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-sm text-gray-500 mb-3">Evolution Progress</div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Generation 1</span>
                            <span className="text-sm text-gray-600">67% accuracy</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Generation 8</span>
                            <span className="text-sm text-blue-600">82% accuracy</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-sm">Current Best</span>
                            <span className="text-sm text-teal-600">89% accuracy ↗</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3">
                        <div className="text-xs text-purple-600">🧬 Genetic Evolution Active</div>
                      </div>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-sm text-gray-500 mb-3">Governance Dashboard</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">Compliance</div>
                            <div className="text-sm text-green-600">SOC2 ✓</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">Audit Logs</div>
                            <div className="text-sm text-gray-900">2.3k</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="text-xs text-gray-500 mb-2">Recent Changes</div>
                        <div className="text-xs text-gray-700">J. Chen updated prompt v2.3 - Approved by CTO</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

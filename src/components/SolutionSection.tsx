import React from 'react';
import { CheckCircle } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">The Solution</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            PromptOps for enterprise AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Treat prompts like code. Version control, testing, deployment, and continuous optimization 
            in one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-green-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Support v2.1</span>
                    <span className="text-sm text-green-600 font-medium">94% accuracy ↗</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">✓ A/B tested • ✓ Deployed safely</div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-green-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sales Email Gen v1.8</span>
                    <span className="text-sm text-green-600 font-medium">$890/mo cost ↓</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">✓ Auto-optimized • ✓ Compliant</div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-green-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Code Assistant Pro</span>
                    <span className="text-sm text-green-600 font-medium">Full governance ✅</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">✓ Role-based access • ✓ Audit logs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Centralized prompt library</h3>
                <p className="text-gray-600">Single source of truth with version control and collaboration</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Automated testing</h3>
                <p className="text-gray-600">A/B/n experiments with statistical significance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Continuous optimization</h3>
                <p className="text-gray-600">Genetic algorithms that evolve prompts automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Enterprise governance</h3>
                <p className="text-gray-600">SOC2 compliance, audit trails, and role-based permissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

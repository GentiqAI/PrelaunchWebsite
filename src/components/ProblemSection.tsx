import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">The Problem</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            Your prompts are failing you
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Performance degrades. Teams work in silos. No testing framework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Scattered everywhere</h3>
                <p className="text-gray-600">Google Docs, Slack threads, individual codebases</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">No testing</h3>
                <p className="text-gray-600">Trial and error with production traffic</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">Performance decay</h3>
                <p className="text-gray-600">Models update, contexts shift, prompts break</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-red-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Support Prompt</span>
                    <span className="text-sm text-red-600 font-medium">67% accuracy ↓</span>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-red-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sales Email Generator</span>
                    <span className="text-sm text-red-600 font-medium">$2.3k/mo cost ↑</span>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-red-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Code Assistant</span>
                    <span className="text-sm text-red-600 font-medium">No governance ⚠️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

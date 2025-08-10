import React from 'react';
import { Cpu, Database, Cloud, Code2 } from 'lucide-react';

const CompatibilitySection: React.FC = () => {
  const integrations = [
    {
      category: "AI Models",
      icon: Cpu,
      items: ["OpenAI GPT-4", "Claude", "Gemini", "Llama", "Custom Models"]
    },
    {
      category: "Cloud Platforms",
      icon: Cloud,
      items: ["AWS", "Google Cloud", "Azure", "On-Premises", "Hybrid"]
    },
    {
      category: "Development",
      icon: Code2,
      items: ["REST API", "Python SDK", "Node.js SDK", "Webhooks", "CLI"]
    },
    {
      category: "Data Sources",
      icon: Database,
      items: ["Vector DBs", "SQL", "NoSQL", "APIs", "File Systems"]
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-4 h-4" />
            <span className="text-sm">Integrations</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            Works with your existing stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrate with any AI model, cloud platform, or development environment. 
            No vendor lock-in, maximum flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <integration.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{integration.category}</h3>
              </div>
              <div className="space-y-3">
                {integration.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-ready from day one
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold text-gray-900">SOC2 Type II</div>
                <div className="text-sm text-gray-600">Certified secure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold text-gray-900">GDPR Compliant</div>
                <div className="text-sm text-gray-600">Privacy by design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-gray-900">99.9% Uptime</div>
                <div className="text-sm text-gray-600">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;

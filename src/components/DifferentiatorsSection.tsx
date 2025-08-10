import React from 'react';
import { Target, Brain, Shield, Zap } from 'lucide-react';

const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "Genetic Evolution Engine",
      description: "Our proprietary algorithms automatically evolve prompts using reinforcement learning and genetic mutations.",
      highlight: "Patent-pending technology"
    },
    {
      icon: Target,
      title: "Prompt-First Architecture",
      description: "Built specifically for prompt optimization, not retrofitted from generic MLOps tools.",
      highlight: "Purpose-built platform"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC2 Type II, GDPR compliant with on-premises deployment options and complete audit trails.",
      highlight: "Bank-level security"
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Continuous A/B testing and optimization that adapts to changing model behaviors and data drift.",
      highlight: "Always improving"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4" />
            <span className="text-sm">What Makes Us Different</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            Built for the prompt layer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While others focus on model training, we've built the first platform designed specifically 
            for prompt engineering and optimization at enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="text-sm text-purple-600 font-medium">{item.highlight}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The result? Measurable impact on your bottom line
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.1M</div>
                <div className="text-gray-600">Average annual savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6 weeks</div>
                <div className="text-gray-600">Time to ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-gray-600">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;

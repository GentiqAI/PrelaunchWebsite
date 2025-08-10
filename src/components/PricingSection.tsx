import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from './ui/Button.tsx';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual developers and small teams",
      features: [
        "1 workflow",
        "3 agents",
        "50 calls/month",
        "Basic analytics",
        "Community support"
      ],
      cta: "Coming Soon...",
      popular: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For growing teams that need advanced features",
      features: [
        "5 workflows",
        "25 agents",
        "10k calls/month",
        "A/B/n testing",
        "Analytics dashboard",
        "Evolution algorithms",
        "Email support"
      ],
      cta: "Join Beta",
      popular: true
    },
    {
      name: "Team",
      price: "$499",
      period: "/month",
      description: "For scaling organizations",
      features: [
        "Unlimited workflows",
        "100 agents",
        "100k calls/month",
        "Advanced evolution",
        "RBAC & governance",
        "Compliance logging",
        "Priority support"
      ],
      cta: "Join Waitlist",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Multi-tenant SSO",
        "Air-gapped deployment",
        "Compliance certifications",
        "Custom SLAs",
        "Dedicated support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm">Pricing</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900 tracking-tight font-bold">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, no vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-100'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'btn-primary' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                onClick={() => window.open('https://forms.gle/jHJztmBTZ2LvLQfj6', '_blank')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ End-to-end encryption</span>
            <span>✓ Regular backups</span>
            <span>✓ API access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

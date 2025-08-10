import React, { useState } from 'react';
import { ArrowRight, GitBranch } from 'lucide-react';
import Button from './ui/Button.tsx';
import Input from './ui/Input.tsx';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedEmail = encodeURIComponent(email);
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSceDuvBtfpt0RnI8uWRjdfs7Fhh_lyke-CerSJ5Kc1KnSfrWQ/viewform?usp=pp_url&entry.1045781291=${encodedEmail}`;
    window.open(googleFormUrl, '_blank');
    setEmail('');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
            <GitBranch className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-blue-100">PromptOps Platform</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-300 bg-clip-text text-transparent tracking-tight leading-tight font-bold">
            Mission control for enterprise prompts
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            While everyone else builds bigger models, we help you make your existing models unbeatable
          </h2>

          <p className="text-xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Design, test, and evolve prompts with the same rigor as software code. 
            Your competitive advantage is in the prompt layer — not the model.
          </p>

          {/* CTA */}
          <form
            onSubmit={handleBetaSignup}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-blue-200/60 h-12 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 group"
            >
              Join Beta
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Social Proof */}
          <div className="mb-12">
            <p className="text-sm text-blue-200/60 mb-6">Trusted by AI teams at</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-lg">🏦 FinTech</span>
              <span className="text-lg">🏥 Healthcare</span>
              <span className="text-lg">🏢 SaaS</span>
              <span className="text-lg">🏛️ Government</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl text-teal-400 mb-2 font-bold">+47%</div>
              <div className="text-sm text-blue-200/70">Avg accuracy improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-blue-400 mb-2 font-bold">-32%</div>
              <div className="text-sm text-blue-200/70">Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-purple-400 mb-2 font-bold">10x</div>
              <div className="text-sm text-blue-200/70">Faster optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-emerald-400 mb-2 font-bold">99.9%</div>
              <div className="text-sm text-blue-200/70">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

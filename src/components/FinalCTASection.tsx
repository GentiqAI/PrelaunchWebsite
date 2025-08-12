import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button.tsx';
import Input from './ui/Input.tsx';

const FinalCTASection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedEmail = encodeURIComponent(email);
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSceDuvBtfpt0RnI8uWRjdfs7Fhh_lyke-CerSJ5Kc1KnSfrWQ/viewform?usp=pp_url&entry.1045781291=${encodedEmail}`;
    window.open(googleFormUrl, '_blank');
    setEmail('');
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-blue-100">Ready to Transform Your AI?</span>
        </div>

        <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-300 bg-clip-text text-transparent tracking-tight leading-snug font-bold">
          Stop guessing. Start optimizing.
        </h2>
        
        <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the beta and be among the first to experience the future of prompt engineering. 
          Limited spots available.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="your.email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-blue-200/60 h-12 text-base"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 px-8 group join-beta-button-4"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-teal-400 mb-2">🚀 Early Access</div>
            <div className="text-sm text-blue-200/70">Be first to use our platform</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">💡 Expert Support</div>
            <div className="text-sm text-blue-200/70">Direct access to our team</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">🎯 Custom Setup</div>
            <div className="text-sm text-blue-200/70">Tailored to your use case</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

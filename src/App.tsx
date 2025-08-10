import React from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import DifferentiatorsSection from './components/DifferentiatorsSection.tsx';
import PricingSection from './components/PricingSection.tsx';
import CompatibilitySection from './components/CompatibilitySection.tsx';
import FinalCTASection from './components/FinalCTASection.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DifferentiatorsSection />
        <PricingSection />
        <CompatibilitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

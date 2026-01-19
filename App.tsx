import React from 'react';
import { Header, Footer } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { ServiceIntro, TvMedia, Features, DropShipping } from './components/sections/ContentSections';
import { SupportSystem, CustomerVoices } from './components/sections/SupportAndVoices';
import { MarketExplanation, NicheStrategy } from './components/sections/MarketAndNiche';
import { CtaSection } from './components/sections/CTA';
import { FaqSection } from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <ServiceIntro />
        
        <TvMedia />
        
        <Features />
        
        <DropShipping />
        
        <div id="reasons">
            {/* "Reasons to Choose" is covered partly by Features and Support, 
                adding a bridge text if needed or keeping flow smooth */}
        </div>

        <SupportSystem />
        
        {/* P0 Action: A-01 Intermediate CTA */}
        <CtaSection type="intermediate" />
        
        <CustomerVoices />
        
        <MarketExplanation />
        
        <NicheStrategy />
        
        {/* P0 Action: A-03 FAQ Section */}
        <FaqSection />
        
        {/* P0 Action: A-02 Enhanced Final CTA */}
        <CtaSection type="final" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
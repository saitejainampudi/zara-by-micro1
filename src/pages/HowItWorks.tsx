
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorksContent from '../components/HowItWorks';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-zara-background-alt">
      <Navbar />
      <main className="pt-16">
        <HowItWorksContent />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;

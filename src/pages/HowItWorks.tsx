
import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorksContent from '../components/HowItWorks';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HowItWorksContent />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

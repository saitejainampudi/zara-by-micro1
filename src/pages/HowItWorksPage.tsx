
import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">How Zara Works</h1>
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

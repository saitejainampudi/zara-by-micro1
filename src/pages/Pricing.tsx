
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-zara-background">
      <Navbar />
      <main className="pt-16">
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

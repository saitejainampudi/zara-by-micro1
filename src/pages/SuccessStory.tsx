
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';

const SuccessStory = () => {
  return (
    <div className="min-h-screen bg-zara-background-alt">
      <Navbar />
      <main className="pt-16">
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStory;


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InterviewStarter from '../components/InterviewStarter';

const StartInterviewing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <InterviewStarter />
      </main>
      <Footer />
    </div>
  );
};

export default StartInterviewing;

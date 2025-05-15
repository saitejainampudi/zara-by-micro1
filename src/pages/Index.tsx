
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="py-20 px-6 md:px-10 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="mt-16 text-center flex flex-col md:flex-row justify-center gap-4">
              <Link to="/candidates" className="w-full md:w-auto mb-4 md:mb-0">
                <button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full md:w-auto">
                  View Available Candidates
                </button>
              </Link>
              <Link to="/ai-interview" className="w-full md:w-auto group">
                <button className="relative bg-gradient-to-r from-zara-purple to-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-all w-full md:w-auto flex items-center justify-center gap-2 overflow-hidden group-hover:shadow-lg group-hover:scale-105">
                  <Sparkles className="w-5 h-5 animate-pulse text-yellow-200" />
                  <span>Try AI Interviews</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/10 rounded-md opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </Link>
            </div>
            
            {/* Ready to transform section */}
            <div className="mt-12 p-8 bg-zara-purple-light rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zara-purple-dark">Ready to transform your technical hiring?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have revolutionized their recruiting process with Zara AI.
              </p>
              <Link to="/pricing">
                <button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                  View Pricing Options
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Benefits />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;

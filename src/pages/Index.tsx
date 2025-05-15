
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <div className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">With Zara</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#DBDAF5] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-zara-purple flex items-center justify-center text-white text-xl mb-4 mx-auto">
              1
            </div>
            <h3 className="font-bold text-xl mb-3">Tell Zara your hiring requirements</h3>
            <p className="text-gray-600">
              Share your job description and hiring criteria with Zara
            </p>
          </div>
          
          <div className="bg-[#DBDAF5] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-zara-purple flex items-center justify-center text-white text-xl mb-4 mx-auto">
              2
            </div>
            <h3 className="font-bold text-xl mb-3">Immediately source candidates and let Zara interview them</h3>
            <p className="text-gray-600">
              Zara sources, screens, and conducts in-depth technical interviews 
            </p>
          </div>
          
          <div className="bg-[#DBDAF5] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-zara-purple flex items-center justify-center text-white text-xl mb-4 mx-auto">
              3
            </div>
            <h3 className="font-bold text-xl mb-3">Connect only with pre-qualified candidates</h3>
            <p className="text-gray-600">
              Review detailed assessment reports and only engage with top candidates
            </p>
          </div>
          
          <div className="bg-[#DBDAF5] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-zara-purple flex items-center justify-center text-white text-xl mb-4 mx-auto">
              4
            </div>
            <h3 className="font-bold text-xl mb-3">Tell Zara to onboard the best</h3>
            <p className="text-gray-600">
              Zara fully handles global payroll and compliance for your new hires
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by innovative teams worldwide</h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
            {["Jump", "FlowFi", "Monday", "Wired", "Intellux", "RunPod", "ZS", "DocDraft"].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <div className="text-xl md:text-2xl font-bold text-gray-500">{company}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Zara integrates with your ATS</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Workday", "Lever", "Greenhouse", "Workable", "Ashby", 
              "SAP SuccessFactors", "SmartRecruiters", "Recruitee", 
              "Teamtailor", "Onlyfy", "Personio", "Breezy HR"].map((ats) => (
              <div key={ats} className="bg-[#DBDAF5] p-4 text-center rounded-lg">
                <p className="font-medium">{ats}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center flex flex-col md:flex-row justify-center gap-4">
          <Link to="/candidates">
            <button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full md:w-auto mb-4 md:mb-0">
              View Available Candidates
            </button>
          </Link>
          <Link to="/ai-interview">
            <button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full md:w-auto">
              Try AI Interviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
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


import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

        <div className="mt-16 text-center flex flex-col md:flex-row justify-center gap-4">
          <Link to="/candidates" className="w-full md:w-auto mb-4 md:mb-0">
            <button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full md:w-auto">
              View Available Candidates
            </button>
          </Link>
          <Link to="/ai-interview" className="w-full md:w-auto group">
            <button className="relative bg-gradient-to-r from-zara-purple to-zara-purple-dark text-white px-8 py-3 rounded-md font-medium text-lg transition-all w-full md:w-auto flex items-center justify-center gap-2 overflow-hidden group-hover:shadow-lg">
              <span>Try AI Interviews</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ReadyToTransform = () => {
  return (
    <div className="py-16 px-6 md:px-10 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your technical hiring?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start interviewing candidates with Zara today and experience the future of technical recruiting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/start-interviewing">
              <button className="bg-white text-zara-purple px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">
                Start Technical Hiring Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ATSIntegration = () => {
  return (
    <div className="py-16 px-6 md:px-10 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Zara integrates with your ATS</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Seamlessly connect Zara to your existing recruitment workflow with our native integrations.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {["Workday", "Lever", "Greenhouse", "Workable", "Ashby", "SAP SuccessFactors", 
            "SmartRecruiters", "Recruitee", "Teamtailor", "Onlyfy", "Personio", "Breezy HR"].map((ats, index) => (
            <div key={index} className="bg-[#DBDAF5] p-4 rounded-lg flex items-center justify-center h-16 border border-gray-200">
              <span className="font-medium text-gray-700">{ats}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustedCompanies = () => {
  return (
    <div className="py-16 px-6 md:px-10 bg-zara-gray-lightest">
      <div className="container mx-auto max-w-6xl">
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
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ATSIntegration />
        <FeatureSection />
        <ReadyToTransform />
        <Benefits />
        <HowItWorks />
        <TrustedCompanies />
        <Testimonials />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const animatedTexts = [
    "Data-Driven Hiring",
    "Intelligent Screening", 
    "Automated Interviews",
    "Smart AI Recruiting"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="pt-28 pb-20 px-6 md:px-10 bg-gradient-to-br from-white via-zara-lavender/30 to-zara-purple-light/20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-zara-purple/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-zara-purple-light/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block mb-2 text-gray-900">
                  Smart AI Recruiting
                </span>
                <span className="block text-gray-900">
                  on Autopilot
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
                Zara interviews, evaluates, and shortlists candidates in minutes, not days. 
                Find top engineers faster, smarter, and bias-free with AI-powered precision.
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/start-interviewing">
                  <Button size="lg" className="bg-gradient-to-r from-zara-purple to-zara-purple-dark hover:from-zara-purple-dark hover:to-zara-purple text-white w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    Start Interviewing Now
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowVideo(true)}
                  className="border-2 border-zara-purple text-zara-purple hover:bg-zara-purple-light/20 w-full sm:w-auto group px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live interviews in progress</span>
                </div>
                <div className="hidden sm:block w-1 h-4 bg-gray-300"></div>
                <span className="hidden sm:inline">400K+ interviews completed</span>
              </div>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Zara AI Agent Image */}
            <div className="mb-8 text-center">
              <img 
                src="/lovable-uploads/98d4aedb-bbde-40c0-a497-cd0b39178bc0.png" 
                alt="Zara AI Agent" 
                className="w-80 h-auto mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
              <p className="text-sm text-gray-600 mt-4 font-medium">Meet Zara, your AI interviewer</p>
            </div>

            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-500 group">
              <div className="bg-gradient-to-r from-zara-gray-lightest to-gray-100 p-4 border-b border-gray-200 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 group-hover:scale-110 transition-transform"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: '50ms' }}></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: '100ms' }}></div>
                </div>
                <span className="text-xs text-gray-500 ml-4 font-medium">Zara AI Interview • Live Session</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-6 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                    Z
                  </div>
                  <div className="bg-gradient-to-r from-zara-gray-lightest to-gray-50 rounded-lg p-4 max-w-md shadow-sm">
                    <p className="text-gray-800 leading-relaxed">
                      Hello! I'm Zara, your AI interviewer. I'll be asking you some technical questions about React today. 
                      Let's start with a simple one: Can you explain the virtual DOM and why it's important?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start flex-row-reverse animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold ml-4 shadow-lg">
                    C
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-4 max-w-md shadow-sm">
                    <p className="text-gray-800 leading-relaxed">
                      The virtual DOM is a lightweight copy of the actual DOM. It allows React to make calculations and
                      comparisons before actually updating the real DOM, which is much more performance efficient...
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 font-medium">AI Analysis in progress...</span>
                    <span className="text-sm text-zara-purple font-semibold">87% match</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-zara-purple to-blue-500 h-3 rounded-full transition-all duration-2000 ease-out" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={() => setShowVideo(false)}>
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">See Zara in Action</h3>
                <button onClick={() => setShowVideo(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-zara-purple-light to-zara-purple rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Demo video coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Updated Company Logos Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6 font-medium">Trusted by innovative teams worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            {["Jump", "FlowFi", "Monday", "Wired"].map((company, index) => (
              <div key={company} className="flex items-center justify-center group cursor-pointer">
                <span className="text-xl font-bold text-gray-700 group-hover:text-zara-purple transition-colors duration-300 group-hover:scale-105 transform">
                  {company}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8 opacity-80 mt-6">
            {["Intellux", "RunPod", "DocDraft"].map((company, index) => (
              <div key={company} className="flex items-center justify-center group cursor-pointer">
                <span className="text-xl font-bold text-gray-700 group-hover:text-zara-purple transition-colors duration-300 group-hover:scale-105 transform">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Added ATS Integration Section */}
        <div className="mt-20 bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Zara integrates with your ATS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamlessly connect Zara to your existing recruitment workflow with our native integrations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Workday", "Lever", "Greenhouse", "Workable", "Ashby", "SAP SuccessFactors", 
              "SmartRecruiters", "Recruitee", "Teamtailor", "Onlyfy", "Personio", "Breezy HR"].map((ats, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16 border border-gray-200">
                <span className="font-medium text-gray-700">{ats}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Added Features Steps Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">With Zara</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamline your entire recruitment process from sourcing to onboarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 relative">
              <div className="w-10 h-10 rounded-full bg-zara-purple-light text-zara-purple font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Tell Zara your hiring requirements</h3>
              <p className="text-gray-600">
                Share your job description and qualifications. Zara learns what you're looking for.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 relative">
              <div className="w-10 h-10 rounded-full bg-zara-purple-light text-zara-purple font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Immediately source candidates</h3>
              <p className="text-gray-600">
                Zara interviews candidates automatically, assessing skills and qualifications.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 relative">
              <div className="w-10 h-10 rounded-full bg-zara-purple-light text-zara-purple font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Connect with pre-qualified candidates</h3>
              <p className="text-gray-600">
                Only talk to candidates who have passed Zara's technical assessments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 relative">
              <div className="w-10 h-10 rounded-full bg-zara-purple-light text-zara-purple font-bold flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Onboard the best candidates</h3>
              <p className="text-gray-600">
                Tell Zara to handle global payroll and compliance for your new hires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

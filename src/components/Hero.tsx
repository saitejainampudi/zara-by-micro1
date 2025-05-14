
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 bg-gradient-to-br from-white to-zara-purple-light">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Smart AI Recruiting</span>
              <span className="bg-gradient-to-r from-zara-purple-dark to-zara-purple bg-clip-text text-transparent">
                on Autopilot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Zara interviews, evaluates, and shortlists candidates in minutes, not days. 
              Find top engineers faster, smarter, and bias-free.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/job-upload">
                <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark text-white w-full sm:w-auto">
                  Start Interviewing Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-zara-gray-lightest p-4 border-b border-gray-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                <span className="text-xs text-gray-500 ml-2">Zara AI Interview</span>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-zara-purple flex items-center justify-center text-white font-bold mr-4">
                    Z
                  </div>
                  <div className="bg-zara-gray-lightest rounded-lg p-4 max-w-md">
                    <p className="text-gray-800">
                      Hello! I'm Zara, your AI interviewer. I'll be asking you some technical questions about React today. 
                      Let's start with a simple one: Can you explain the virtual DOM and why it's important?
                    </p>
                  </div>
                </div>
                <div className="flex items-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold ml-4">
                    C
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 max-w-md">
                    <p className="text-gray-800">
                      The virtual DOM is a lightweight copy of the actual DOM. It allows React to make calculations and
                      comparisons before actually updating the real DOM, which is much more performance efficient...
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Zara is evaluating response...</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-zara-purple h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <p className="text-gray-500 mb-6 text-center">Trusted by innovative teams worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">TechCorp</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">DevHire</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">CodeTalent</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">StartupsInc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

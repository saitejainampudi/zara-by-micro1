
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Users, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-zara-purple/20 to-transparent rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-zara-purple-light/30 rounded-full border border-zara-purple/20">
                <Sparkles className="w-4 h-4 text-zara-purple mr-2" />
                <span className="text-sm font-medium text-zara-purple">AI-Powered Interview Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Master Technical
                <span className="bg-gradient-to-r from-zara-purple to-zara-purple-dark bg-clip-text text-transparent"> Interviews with AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Practice coding interviews with our AI interviewer. Get real-time feedback, 
                personalized questions, and detailed performance analytics to ace your next technical interview.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signin">
                <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-4 text-lg h-auto group">
                  Start Practicing Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-2 border-gray-200 hover:bg-gray-50 px-8 py-4 text-lg h-auto group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-zara-purple to-blue-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">10,000+ developers practicing</span>
              </div>
              
              <div className="h-6 w-px bg-gray-200"></div>
              
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-1">4.8/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-zara-purple to-zara-purple-dark p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-lg px-3 py-1">
                      <span className="text-white/80 text-sm">exterview.ai/practice</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-gray-900">Interview Practice</h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-zara-purple-light rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-zara-purple" />
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-zara-purple-light to-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-zara-purple">12</div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  
                  {/* Practice Sessions */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-r from-zara-purple to-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Session {i}</div>
                          <div className="text-xs text-gray-500">Score: 8{i}/100</div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zara-purple" />
                  <span className="text-sm font-medium">AI Feedback</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Real-time Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

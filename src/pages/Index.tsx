
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Target, Zap, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Enhanced Stats Section with Counter Animation */}
        <section className="py-16 bg-gradient-to-br from-zara-purple-light/30 to-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "400K+", label: "Interviews Completed", icon: Target },
                { number: "2.5x", label: "Faster Hiring", icon: Clock },
                { number: "95%", label: "Accuracy Rate", icon: TrendingUp },
                { number: "500+", label: "Companies Trust Us", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-zara-purple mb-2 animate-[countUp_2s_ease-out] group-hover:scale-105 transition-transform duration-200">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role-Based CTAs with Enhanced Design */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Path</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're hiring top talent or showcasing your skills, Zara AI has the perfect solution for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Recruiter Card */}
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0 animate-slide-up">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">For Recruiters</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Streamline your hiring process with AI-powered interviews and candidate insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Create intelligent interview flows
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Review AI-generated candidate reports
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Access detailed analytics
                    </li>
                  </ul>
                  <Link to="/signin" className="block mt-6">
                    <button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 px-6 py-3 rounded-lg font-semibold group-hover:scale-105 flex items-center justify-center gap-2">
                      Start Hiring Smarter
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </CardContent>
              </Card>

              {/* Candidate Card */}
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">For Candidates</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Showcase your skills through AI interviews and land your dream job
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Take adaptive AI interviews
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Get instant feedback
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Track your progress
                    </li>
                  </ul>
                  <Link to="/signin" className="block mt-6">
                    <button className="w-full bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg transition-all duration-200 px-6 py-3 rounded-lg font-semibold group-hover:scale-105 flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Demo CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex flex-col md:flex-row gap-4">
                <Link to="/candidates" className="group">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg group-hover:scale-105 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    View Sample Candidates
                  </button>
                </Link>
                <Link to="/ai-interview" className="group">
                  <button className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg group-hover:scale-105 flex items-center gap-2 overflow-hidden">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Try Demo Interview
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

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

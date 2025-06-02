
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Target, Zap, Clock, TrendingUp, Code, Video, MessageSquare, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Enhanced Stats Section with Real-time Metrics */}
        <section className="py-16 bg-gradient-to-br from-zara-purple-light/30 to-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "400K+", label: "Interviews Completed", icon: Target, color: "purple", trend: "+3 this week" },
                { number: "2.5x", label: "Faster Hiring", icon: Clock, color: "blue", trend: "↗️ 60% improvement" },
                { number: "95%", label: "Accuracy Rate", icon: TrendingUp, color: "green", trend: "AI-powered precision" },
                { number: "500+", label: "Companies Trust Us", icon: Users, color: "orange", trend: "Growing daily" }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    stat.color === 'purple' ? 'bg-gradient-to-r from-zara-purple to-zara-purple-dark' :
                    stat.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    stat.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-zara-purple mb-2 animate-[countUp_2s_ease-out] group-hover:scale-105 transition-transform duration-200">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-2">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Role-Based CTAs with Modern Design */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of recruitment with AI-powered interviews and data-driven insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Enhanced Recruiter Card */}
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-zara-purple via-zara-purple to-zara-purple-dark text-white border-0 animate-slide-up">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">For Recruiters</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Transform your hiring process with intelligent candidate screening and automated assessments
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Target, label: "Smart Job Creation" },
                      { icon: TrendingUp, label: "AI-Powered Scoring" },
                      { icon: Clock, label: "Time Optimization" },
                      { icon: Award, label: "Quality Candidates" }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                        <feature.icon className="w-4 h-4" />
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/signin" className="block">
                    <button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-lg font-semibold group-hover:scale-105 flex items-center justify-center gap-2">
                      Start Hiring Smarter
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enhanced Candidate Card */}
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white border-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">For Candidates</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Showcase your skills through innovative AI assessments and land your dream career
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Code, label: "Coding Challenges" },
                      { icon: Video, label: "AI Interviews" },
                      { icon: MessageSquare, label: "Skill Assessment" },
                      { icon: TrendingUp, label: "Real-time Feedback" }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                        <feature.icon className="w-4 h-4" />
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/signin" className="block">
                    <button className="w-full bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-lg font-semibold group-hover:scale-105 flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Demo CTAs */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex flex-col md:flex-row gap-4">
                <Link to="/candidates" className="group">
                  <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg group-hover:scale-105 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    View Demo Candidates
                  </button>
                </Link>
                <Link to="/start-interviewing" className="group">
                  <button className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl group-hover:scale-105 flex items-center gap-2 overflow-hidden">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Try Demo Experience
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
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

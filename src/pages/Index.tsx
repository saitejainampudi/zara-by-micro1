import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import AnimatedCounter from '../components/AnimatedCounter';
import InteractiveRoleCard from '../components/InteractiveRoleCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Target, Zap, Clock, TrendingUp, Code, Video, MessageSquare, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Enhanced Stats Section with Animated Counters */}
        <section className="py-16 bg-gradient-to-br from-zara-purple-light/30 to-white">
          <div className="container mx-auto px-6 md:px-10">
            {/* Benefits Strip */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Exterview AI?</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">60% Faster Hiring</h3>
                  <p className="text-gray-600">Reduce time-to-hire from weeks to days with automated screening</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">95% Accuracy Rate</h3>
                  <p className="text-gray-600">AI-powered assessments ensure you find the right talent</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bias-Free Process</h3>
                  <p className="text-gray-600">Eliminate unconscious bias with objective AI evaluations</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter
                target="400K+"
                label="Interviews Completed"
                icon={Target}
                color="purple"
                trend="+3 this week"
              />
              <AnimatedCounter
                target="2.5x"
                label="Faster Hiring"
                icon={Clock}
                color="blue"
                trend="↗️ 60% improvement"
              />
              <AnimatedCounter
                target="95%"
                label="Accuracy Rate"
                icon={TrendingUp}
                color="green"
                trend="AI-powered precision"
              />
              <AnimatedCounter
                target="500+"
                label="Companies Trust Us"
                icon={Users}
                color="orange"
                trend="Growing daily"
              />
            </div>
          </div>
        </section>

        {/* Enhanced Role-Based CTAs with Interactive Cards */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-violet-100/50 to-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of recruitment with AI-powered interviews and data-driven insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <InteractiveRoleCard
                title="For Recruiters"
                description="Transform your hiring process with intelligent candidate screening and automated assessments"
                features={[
                  { icon: Target, label: "Smart Job Creation" },
                  { icon: TrendingUp, label: "AI-Powered Scoring" },
                  { icon: Clock, label: "Time Optimization" },
                  { icon: Award, label: "Quality Candidates" }
                ]}
                ctaText="Start Hiring Smarter"
                ctaLink="/signin"
                gradientFrom="from-purple-500"
                gradientTo="to-purple-700"
                icon={Users}
              />

              <InteractiveRoleCard
                title="For Candidates"
                description="Showcase your skills through innovative AI assessments and land your dream career"
                features={[
                  { icon: Code, label: "Coding Challenges" },
                  { icon: Video, label: "AI Interviews" },
                  { icon: MessageSquare, label: "Skill Assessment" },
                  { icon: TrendingUp, label: "Real-time Feedback" }
                ]}
                ctaText="Start Your Journey"
                ctaLink="/signin"
                gradientFrom="from-blue-500"
                gradientTo="to-blue-700"
                icon={Sparkles}
                delay="200ms"
              />
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

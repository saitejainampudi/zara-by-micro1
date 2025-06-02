
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, ArrowRight, Target, Code, TrendingUp, Award, Video, MessageSquare, Clock } from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'recruiter' | 'candidate') => {
    sessionStorage.setItem('userRole', role);
    if (role === 'recruiter') {
      navigate('/recruiter-dashboard');
    } else {
      navigate('/candidate-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zara-purple-light/20 via-white to-blue-50/30 flex items-center justify-center px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zara AI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your role to get started with AI-powered recruitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recruiter Card */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0 animate-slide-up"
                onClick={() => handleRoleSelection('recruiter')}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10 text-center pb-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">I'm a Recruiter</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Find the perfect candidates with AI-powered screening and assessment tools
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-3">
                {[
                  { icon: Target, label: "Create smart job descriptions" },
                  { icon: TrendingUp, label: "AI-powered candidate scoring" },
                  { icon: Clock, label: "Reduce time-to-hire by 60%" },
                  { icon: Award, label: "Access top-quality talent" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105 font-semibold py-3">
                Start Hiring
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Candidate Card */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 animate-slide-up"
                style={{ animationDelay: '200ms' }}
                onClick={() => handleRoleSelection('candidate')}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10 text-center pb-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">I'm a Candidate</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Showcase your skills through innovative AI assessments and land your dream job
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-3">
                {[
                  { icon: Code, label: "Complete coding challenges" },
                  { icon: Video, label: "AI-powered video interviews" },
                  { icon: MessageSquare, label: "Soft skills assessments" },
                  { icon: TrendingUp, label: "Get instant feedback" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105 font-semibold py-3">
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-gray-600">
            Need help? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;

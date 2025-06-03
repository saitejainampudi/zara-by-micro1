
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Clock, Users, TrendingUp, CheckCircle, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Hero = () => {
  // Data for Zara AI vs Traditional Hiring comparison
  const comparisonData = [
    { metric: 'Time to Hire', traditional: 45, zaraAI: 12 },
    { metric: 'Accuracy', traditional: 65, zaraAI: 94 },
    { metric: 'Cost per Hire', traditional: 100, zaraAI: 35 },
    { metric: 'Candidate Satisfaction', traditional: 70, zaraAI: 92 }
  ];

  const trendData = [
    { month: 'Jan', hires: 12, satisfaction: 85 },
    { month: 'Feb', hires: 18, satisfaction: 88 },
    { month: 'Mar', hires: 25, satisfaction: 91 },
    { month: 'Apr', hires: 32, satisfaction: 94 },
    { month: 'May', hires: 28, satisfaction: 92 },
    { month: 'Jun', hires: 35, satisfaction: 96 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-700 font-medium text-sm backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionizing Recruitment with AI
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Hiring on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-900 font-extrabold">
                  Auto Pilot
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your recruitment process with AI-powered candidate assessment, 
                real-time analytics, and seamless hiring workflows that deliver results 10x faster.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signin">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Assessments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">96%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced with visible charts */}
          <div className="space-y-6 animate-fade-in-delay">
            {/* Main Dashboard Preview */}
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Zara AI vs Traditional Hiring
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Performance comparison across key metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="metric" 
                      fontSize={12}
                      tick={{ fill: '#666' }}
                    />
                    <YAxis 
                      fontSize={12}
                      tick={{ fill: '#666' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="traditional" fill="#e5e7eb" name="Traditional" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="zaraAI" fill="#8b5cf6" name="Zara AI" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Performance Trend Chart */}
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Hiring Success Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month" 
                      fontSize={12}
                      tick={{ fill: '#666' }}
                    />
                    <YAxis 
                      fontSize={12}
                      tick={{ fill: '#666' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: "98%", label: "Match Rate" },
                { icon: Clock, value: "12d", label: "Avg Time" },
                { icon: Award, value: "4.9★", label: "Rating" }
              ].map((stat, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 text-center p-4 hover:bg-white/80 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

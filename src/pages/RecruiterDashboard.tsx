
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, Eye, TrendingUp, Clock, CheckCircle, Zap, Target, Award } from 'lucide-react';

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-zara-purple/5">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Enhanced Welcome Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                R
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Command Center</h1>
                <p className="text-gray-600 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zara-purple" />
                  AI-powered hiring at scale - find the perfect candidates faster
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "15", subtitle: "Active Jobs", icon: Target, color: "purple", trend: "+3 this week" },
              { title: "127", subtitle: "Interviews Completed", icon: CheckCircle, color: "green", trend: "+23 today" },
              { title: "34", subtitle: "Candidates Shortlisted", icon: Award, color: "blue", trend: "+12 pending" },
              { title: "8", subtitle: "Hires This Month", icon: TrendingUp, color: "orange", trend: "↗️ +60%" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">{stat.title}</CardTitle>
                  <CardDescription className="font-medium">{stat.subtitle}</CardDescription>
                  <div className="text-xs text-gray-500 mt-2">{stat.trend}</div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Enhanced Main Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  Job Management
                </CardTitle>
                <CardDescription className="text-white/80">
                  Create AI-powered interview flows and manage job descriptions
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <Link to="/job-upload">
                    <Button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Job
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View All Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 hover:border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  Candidate Pipeline
                </CardTitle>
                <CardDescription>
                  Review AI assessments and manage your talent pipeline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/candidates" className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:shadow-lg">
                      <Users className="w-4 h-4 mr-2" />
                      View All Candidates
                    </Button>
                  </Link>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Pending Reviews</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">12</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-green-200 hover:border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                  </div>
                  Analytics & Insights
                </CardTitle>
                <CardDescription>
                  Track hiring metrics and ROI from AI-powered recruitment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-200 hover:shadow-lg">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50 transition-colors">
                    Export Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  Team & Integrations
                </CardTitle>
                <CardDescription>
                  Configure team settings and connect with your existing tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100 transition-colors">
                    <Settings className="w-4 h-4 mr-2" />
                    Team Settings
                  </Button>
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100 transition-colors">
                    ATS Integration
                  </Button>
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100 transition-colors">
                    Calendar Sync
                  </Button>
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100 transition-colors">
                    Slack Connect
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  AI-Powered Features
                </CardTitle>
                <CardDescription>
                  Leverage advanced AI capabilities for smarter hiring decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors">
                      How AI Interviews Work
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors w-full">
                    Bias Detection Reports
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors w-full">
                    Interview Quality Metrics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;

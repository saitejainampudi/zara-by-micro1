import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import HiringMetricsDashboard from '../components/HiringMetricsDashboard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, BarChart3, Plus, Zap, Target, Award, TrendingUp, Clock, CheckCircle, Star, ArrowRight, Building, UserCheck, Calendar } from 'lucide-react';

const RecruiterDashboard = () => {
  const navigate = useNavigate();

  // Enhanced demo data with more realistic numbers
  const dashboardStats = {
    totalRoles: 12,
    activeRoles: 8,
    totalCandidates: 156,
    interviewsCompleted: 98,
    candidatesShortlisted: 28,
    hiresThisMonth: 7,
    averageScore: 81,
    timeToHire: 12
  };

  const handleRoleManagement = () => {
    navigate('/role-management');
  };

  const handleCandidatePipeline = () => {
    navigate('/candidate-pipeline');
  };

  const handleAnalytics = () => {
    navigate('/recruiter-analytics');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  R
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruitment Command Center</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zara-purple" />
                    AI-powered hiring at scale - streamlined for maximum efficiency
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <NotificationCenter userRole="recruiter" />
                <ContextualHelp context="dashboard" userRole="recruiter" />
                <Link to="/job-upload">
                  <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Role
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {[
              { title: dashboardStats.totalRoles.toString(), subtitle: "Total Roles", icon: Target, color: "purple", trend: `${dashboardStats.activeRoles} active` },
              { title: dashboardStats.totalCandidates.toString(), subtitle: "Total Candidates", icon: Users, color: "blue", trend: "+18 this week" },
              { title: dashboardStats.interviewsCompleted.toString(), subtitle: "Interviews Done", icon: CheckCircle, color: "green", trend: "+12 today" },
              { title: dashboardStats.candidatesShortlisted.toString(), subtitle: "Shortlisted", icon: Star, color: "yellow", trend: "Ready for hire" },
              { title: dashboardStats.hiresThisMonth.toString(), subtitle: "Hires This Month", icon: Award, color: "green", trend: "↗️ +40%" },
              { title: `${dashboardStats.averageScore}`, subtitle: "Avg AI Score", icon: TrendingUp, color: "blue", trend: "Above industry" },
              { title: `${dashboardStats.timeToHire}d`, subtitle: "Time to Hire", icon: Clock, color: "orange", trend: "30% faster" },
              { title: "96%", subtitle: "Platform Accuracy", icon: Zap, color: "purple", trend: "AI precision" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
                      stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <stat.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{stat.title}</CardTitle>
                  <CardDescription className="text-xs font-medium">{stat.subtitle}</CardDescription>
                  <div className="text-xs text-gray-500 mt-1">{stat.trend}</div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Main Action Buttons - Large and Prominent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Button
              onClick={handleRoleManagement}
              className="h-40 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0 hover:from-zara-purple-dark hover:to-purple-900 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Role Management</h3>
                  <p className="text-white/80 text-sm">Create and manage job positions</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-white/90 group-hover:text-white transition-colors">
                    <span className="text-sm">Manage Roles</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleCandidatePipeline}
              className="h-40 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 hover:from-blue-700 hover:to-blue-900 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Candidate Pipeline</h3>
                  <p className="text-white/80 text-sm">Review and manage candidates</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-white/90 group-hover:text-white transition-colors">
                    <span className="text-sm">View Candidates</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleAnalytics}
              className="h-40 bg-gradient-to-br from-green-600 to-green-800 text-white border-0 hover:from-green-700 hover:to-green-900 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Analytics & Insights</h3>
                  <p className="text-white/80 text-sm">Track performance metrics</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-white/90 group-hover:text-white transition-colors">
                    <span className="text-sm">View Analytics</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Button>
          </div>

          {/* Recent Activity Overview */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-zara-purple" />
                Recent Activity & Quick Stats
              </CardTitle>
              <CardDescription>
                Overview of your recent hiring activity and platform performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HiringMetricsDashboard data={dashboardStats} />
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      
      {/* Feedback Widget */}
      <FeedbackWidget context="recruiter-dashboard" userRole="recruiter" />
    </div>
  );
};

export default RecruiterDashboard;

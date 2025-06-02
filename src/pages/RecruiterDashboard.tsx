import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoleCard from '../components/RoleCard';
import CandidateProfileCard from '../components/CandidateProfileCard';
import RoleAnalytics from '../components/RoleAnalytics';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, Eye, TrendingUp, Clock, CheckCircle, Zap, Target, Award, Search, Filter, Calendar, Star } from 'lucide-react';

const RecruiterDashboard = () => {
  const [activeView, setActiveView] = useState<'overview' | 'roles' | 'candidates' | 'analytics'>('overview');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [candidateFilter, setCandidateFilter] = useState<'all' | 'shortlisted' | 'interviewed' | 'pending'>('all');

  // Sample data - in real app this would come from API
  const dashboardStats = {
    totalRoles: 8,
    activeRoles: 5,
    totalCandidates: 247,
    interviewsCompleted: 189,
    candidatesShortlisted: 34,
    hiresThisMonth: 12,
    averageScore: 78,
    timeToHire: 14
  };

  const roles = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 20, 2024',
      daysLeft: 8,
      applicants: {
        total: 45,
        pending: 12,
        interviewed: 28,
        shortlisted: 8
      },
      completionRate: 84,
      avgScore: 82,
      topCandidateScore: 94
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      status: 'active' as const,
      deadline: 'March 25, 2024',
      daysLeft: 13,
      applicants: {
        total: 32,
        pending: 8,
        interviewed: 19,
        shortlisted: 6
      },
      completionRate: 76,
      avgScore: 79,
      topCandidateScore: 91
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 15, 2024',
      daysLeft: 3,
      applicants: {
        total: 28,
        pending: 15,
        interviewed: 10,
        shortlisted: 3
      },
      completionRate: 65,
      avgScore: 75,
      topCandidateScore: 88
    }
  ];

  const candidates = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      overallScore: 94,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      experience: '5+ years experience',
      scores: {
        coding: 96,
        interview: 92,
        softSkills: 94
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 hours ago',
      highlights: ['Exceptional problem-solving skills', 'Strong technical communication']
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      role: 'Senior Frontend Developer',
      overallScore: 89,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Vue.js', 'Python', 'AWS', 'Docker'],
      experience: '4+ years experience',
      scores: {
        coding: 91,
        interview: 87,
        softSkills: 89
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Great team collaboration', 'Innovative thinking']
    },
    {
      id: '3',
      name: 'Jordan Kim',
      role: 'Product Designer',
      overallScore: 91,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      experience: '6+ years experience',
      scores: {
        coding: 0,
        interview: 93,
        softSkills: 89
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Outstanding portfolio', 'User-centered design approach']
    },
    {
      id: '4',
      name: 'Taylor Morgan',
      role: 'DevOps Engineer',
      overallScore: 86,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'Monitoring'],
      experience: '3+ years experience',
      scores: {
        coding: 88,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '5 hours ago',
      highlights: ['Strong infrastructure knowledge']
    }
  ];

  const roleAnalytics = {
    totalApplicants: 45,
    interviewsCompleted: 28,
    averageScore: 82,
    aiShortlisted: 8,
    conversionRate: 62,
    timeToHire: 12,
    topSkills: ['React', 'TypeScript', 'JavaScript', 'Node.js'],
    scoreDistribution: {
      excellent: 6,
      good: 12,
      average: 8,
      below: 2
    },
    candidatePreferences: {
      first: 18,
      second: 15,
      third: 8,
      backup: 4
    },
    weeklyProgress: []
  };

  const handleViewRoleDetails = (roleId: string) => {
    setSelectedRole(roleId);
    setActiveView('analytics');
  };

  const handleViewCandidateProfile = (candidateId: string) => {
    console.log('View candidate profile:', candidateId);
  };

  const handleShortlistCandidate = (candidateId: string) => {
    console.log('Shortlist candidate:', candidateId);
  };

  const handleRejectCandidate = (candidateId: string) => {
    console.log('Reject candidate:', candidateId);
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = candidateFilter === 'all' || candidate.status === candidateFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-zara-purple/5">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Header with new components */}
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

          {/* Enhanced Dashboard Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {[
              { title: dashboardStats.totalRoles.toString(), subtitle: "Total Roles", icon: Target, color: "purple", trend: `${dashboardStats.activeRoles} active` },
              { title: dashboardStats.totalCandidates.toString(), subtitle: "Total Candidates", icon: Users, color: "blue", trend: "+23 this week" },
              { title: dashboardStats.interviewsCompleted.toString(), subtitle: "Interviews Done", icon: CheckCircle, color: "green", trend: "+31 today" },
              { title: dashboardStats.candidatesShortlisted.toString(), subtitle: "Shortlisted", icon: Star, color: "yellow", trend: "Ready for hire" },
              { title: dashboardStats.hiresThisMonth.toString(), subtitle: "Hires This Month", icon: Award, color: "green", trend: "↗️ +60%" },
              { title: `${dashboardStats.averageScore}`, subtitle: "Avg AI Score", icon: TrendingUp, color: "blue", trend: "Above industry" },
              { title: `${dashboardStats.timeToHire}d`, subtitle: "Time to Hire", icon: Clock, color: "orange", trend: "25% faster" },
              { title: "97%", subtitle: "Platform Accuracy", icon: Zap, color: "purple", trend: "AI precision" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300">
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

          {/* Navigation Tabs */}
          <Tabs value={activeView} onValueChange={(value: any) => setActiveView(value)} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Roles ({roles.length})
              </TabsTrigger>
              <TabsTrigger value="candidates" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Candidates ({candidates.length})
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* ... keep existing code (Quick Overview content) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-2 text-white">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      Role Management
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Create AI-powered interview flows and manage job descriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setActiveView('roles')}
                        className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View All Roles
                      </Button>
                      <Link to="/job-upload">
                        <Button className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors">
                          <Plus className="w-4 h-4 mr-2" />
                          Create New Role
                        </Button>
                      </Link>
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
                      <Button 
                        onClick={() => setActiveView('candidates')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:shadow-lg"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        View All Candidates
                      </Button>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-900">Pending Reviews</span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {candidates.filter(c => c.status === 'pending').length}
                          </span>
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
                      <Button 
                        onClick={() => setActiveView('analytics')}
                        className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-200 hover:shadow-lg"
                      >
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
            </TabsContent>

            {/* Roles Tab */}
            <TabsContent value="roles" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Active Roles</h2>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Search roles..."
                    className="w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {roles.map((role) => (
                  <RoleCard
                    key={role.id}
                    role={role}
                    onViewDetails={handleViewRoleDetails}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Candidate Pipeline</h2>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Search candidates..."
                    className="w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Tabs value={candidateFilter} onValueChange={(value: any) => setCandidateFilter(value)}>
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
                      <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => (
                  <CandidateProfileCard
                    key={candidate.id}
                    candidate={candidate}
                    onViewProfile={handleViewCandidateProfile}
                    onShortlist={handleShortlistCandidate}
                    onReject={handleRejectCandidate}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              {selectedRole ? (
                <RoleAnalytics
                  roleId={selectedRole}
                  roleTitle={roles.find(r => r.id === selectedRole)?.title || 'Role'}
                  analytics={roleAnalytics}
                />
              ) : (
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a Role for Detailed Analytics</h3>
                  <p className="text-gray-500 mb-6">Choose a role from the Roles tab to view comprehensive performance metrics</p>
                  <Button onClick={() => setActiveView('roles')} className="bg-zara-purple hover:bg-zara-purple-dark">
                    View Roles
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      
      {/* Feedback Widget */}
      <FeedbackWidget context="recruiter-dashboard" userRole="recruiter" />
    </div>
  );
};

export default RecruiterDashboard;

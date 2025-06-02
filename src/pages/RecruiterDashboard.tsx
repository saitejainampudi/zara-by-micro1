
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
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, Eye, TrendingUp, Clock, CheckCircle, Zap, Target, Award, Search, Filter, Calendar, Star } from 'lucide-react';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'overview' | 'roles' | 'candidates' | 'analytics'>('overview');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [candidateFilter, setCandidateFilter] = useState<'all' | 'shortlisted' | 'interviewed' | 'pending'>('all');

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

  // Expanded roles data with more variety
  const roles = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 20, 2024',
      daysLeft: 8,
      applicants: {
        total: 28,
        pending: 6,
        interviewed: 18,
        shortlisted: 5
      },
      completionRate: 89,
      avgScore: 84,
      topCandidateScore: 96
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      status: 'active' as const,
      deadline: 'March 25, 2024',
      daysLeft: 13,
      applicants: {
        total: 22,
        pending: 4,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 82,
      avgScore: 87,
      topCandidateScore: 93
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 15, 2024',
      daysLeft: 3,
      applicants: {
        total: 18,
        pending: 8,
        interviewed: 8,
        shortlisted: 2
      },
      completionRate: 72,
      avgScore: 79,
      topCandidateScore: 91
    },
    {
      id: '4',
      title: 'Full Stack Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 28, 2024',
      daysLeft: 16,
      applicants: {
        total: 35,
        pending: 15,
        interviewed: 16,
        shortlisted: 6
      },
      completionRate: 76,
      avgScore: 82,
      topCandidateScore: 94
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data',
      status: 'active' as const,
      deadline: 'April 5, 2024',
      daysLeft: 24,
      applicants: {
        total: 19,
        pending: 12,
        interviewed: 6,
        shortlisted: 2
      },
      completionRate: 58,
      avgScore: 85,
      topCandidateScore: 92
    },
    {
      id: '6',
      title: 'QA Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 30, 2024',
      daysLeft: 18,
      applicants: {
        total: 16,
        pending: 9,
        interviewed: 5,
        shortlisted: 2
      },
      completionRate: 69,
      avgScore: 77,
      topCandidateScore: 88
    },
    {
      id: '7',
      title: 'Marketing Manager',
      department: 'Marketing',
      status: 'active' as const,
      deadline: 'April 10, 2024',
      daysLeft: 29,
      applicants: {
        total: 24,
        pending: 18,
        interviewed: 4,
        shortlisted: 2
      },
      completionRate: 42,
      avgScore: 83,
      topCandidateScore: 89
    },
    {
      id: '8',
      title: 'Backend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 22, 2024',
      daysLeft: 10,
      applicants: {
        total: 26,
        pending: 8,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 85,
      avgScore: 81,
      topCandidateScore: 95
    }
  ];

  // Expanded candidates data with diverse profiles and preferences
  const candidates = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      overallScore: 96,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      experience: '6+ years experience',
      scores: {
        coding: 98,
        interview: 94,
        softSkills: 96
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 hours ago',
      highlights: ['Exceptional problem-solving skills', 'Strong technical leadership', 'Open source contributor']
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      role: 'Senior Frontend Developer',
      overallScore: 91,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Vue.js', 'Python', 'AWS', 'Docker', 'Redis'],
      experience: '5+ years experience',
      scores: {
        coding: 93,
        interview: 89,
        softSkills: 91
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Great team collaboration', 'Innovative thinking', 'Scalable architecture expertise']
    },
    {
      id: '3',
      name: 'Jordan Kim',
      role: 'Product Designer',
      overallScore: 93,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'A/B Testing'],
      experience: '7+ years experience',
      scores: {
        coding: 0,
        interview: 95,
        softSkills: 91
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Outstanding portfolio', 'User-centered design approach', 'Data-driven decisions']
    },
    {
      id: '4',
      name: 'Taylor Morgan',
      role: 'DevOps Engineer',
      overallScore: 88,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'Monitoring', 'Security'],
      experience: '4+ years experience',
      scores: {
        coding: 90,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '5 hours ago',
      highlights: ['Strong infrastructure knowledge', 'Security-first mindset']
    },
    {
      id: '5',
      name: 'Maya Patel',
      role: 'Full Stack Engineer',
      overallScore: 89,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Microservices'],
      experience: '5+ years experience',
      scores: {
        coding: 92,
        interview: 86,
        softSkills: 89
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '6 hours ago',
      highlights: ['Full-stack expertise', 'Mentoring experience', 'Agile methodologies']
    },
    {
      id: '6',
      name: 'Chris Johnson',
      role: 'Data Scientist',
      overallScore: 92,
      preference: '1st' as const,
      status: 'interviewed' as const,
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
      experience: '4+ years experience',
      scores: {
        coding: 94,
        interview: 90,
        softSkills: 92
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['PhD in Machine Learning', 'Published researcher', 'Industry experience']
    },
    {
      id: '7',
      name: 'Sam Wilson',
      role: 'QA Engineer',
      overallScore: 85,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Selenium', 'Jest', 'Cypress', 'API Testing', 'Performance Testing'],
      experience: '3+ years experience',
      scores: {
        coding: 87,
        interview: 83,
        softSkills: 85
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 days ago',
      highlights: ['Automation expertise', 'Quality-focused mindset', 'Process improvement']
    },
    {
      id: '8',
      name: 'Riley Davis',
      role: 'Marketing Manager',
      overallScore: 87,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Digital Marketing', 'Analytics', 'Campaign Management', 'SEO', 'Content Strategy'],
      experience: '5+ years experience',
      scores: {
        coding: 0,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 0,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Growth marketing expert', 'Data-driven campaigns']
    },
    {
      id: '9',
      name: 'Jamie Lee',
      role: 'Backend Developer',
      overallScore: 90,
      preference: '2nd' as const,
      status: 'shortlisted' as const,
      skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis'],
      experience: '4+ years experience',
      scores: {
        coding: 93,
        interview: 87,
        softSkills: 90
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '8 hours ago',
      highlights: ['Microservices architecture', 'Performance optimization', 'Clean code advocate']
    },
    {
      id: '10',
      name: 'Casey Brown',
      role: 'Senior Frontend Developer',
      overallScore: 84,
      preference: '3rd' as const,
      status: 'interviewed' as const,
      skills: ['Angular', 'JavaScript', 'CSS', 'RxJS', 'NgRx'],
      experience: '4+ years experience',
      scores: {
        coding: 86,
        interview: 82,
        softSkills: 84
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Angular specialist', 'Component architecture', 'Responsive design']
    },
    {
      id: '11',
      name: 'Avery Thompson',
      role: 'Product Designer',
      overallScore: 86,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Sketch', 'InVision', 'User Testing', 'Wireframing', 'Brand Design'],
      experience: '4+ years experience',
      scores: {
        coding: 0,
        interview: 88,
        softSkills: 84
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '2 days ago',
      highlights: ['Brand consistency', 'User experience optimization', 'Cross-functional collaboration']
    },
    {
      id: '12',
      name: 'Morgan Garcia',
      role: 'DevOps Engineer',
      overallScore: 83,
      preference: '2nd' as const,
      status: 'pending' as const,
      skills: ['Docker', 'AWS', 'CI/CD', 'Ansible', 'Prometheus'],
      experience: '3+ years experience',
      scores: {
        coding: 85,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '4 hours ago',
      highlights: ['Cloud infrastructure', 'Automation mindset']
    }
  ];

  const roleAnalytics = {
    totalApplicants: 28,
    interviewsCompleted: 18,
    averageScore: 84,
    aiShortlisted: 5,
    conversionRate: 64,
    timeToHire: 11,
    topSkills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'AWS'],
    scoreDistribution: {
      excellent: 5,
      good: 8,
      average: 4,
      below: 1
    },
    candidatePreferences: {
      first: 12,
      second: 9,
      third: 5,
      backup: 2
    },
    weeklyProgress: []
  };

  const handleViewRoleDetails = (roleId: string) => {
    setSelectedRole(roleId);
    setActiveView('analytics');
  };

  const handleViewCandidateProfile = (candidateId: string) => {
    navigate('/candidate-profile', { state: { candidateId } });
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
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

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 hover:border-blue-300 bg-gradient-to-br from-white to-violet-50">
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

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-green-200 hover:border-green-300 bg-gradient-to-br from-white to-violet-50">
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

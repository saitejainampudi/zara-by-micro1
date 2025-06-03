import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoleCard from '../components/RoleCard';
import CandidateProfileCard from '../components/CandidateProfileCard';
import RoleAnalytics from '../components/RoleAnalytics';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import HiringMetricsDashboard from '../components/HiringMetricsDashboard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, Eye, TrendingUp, Clock, CheckCircle, Zap, Target, Award, Search, Filter, Calendar, Star, Video } from 'lucide-react';

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
      jobDescription: 'We are looking for a Senior Frontend Developer with 5+ years of experience in React, TypeScript, and modern web technologies. You will lead frontend architecture decisions and mentor junior developers.',
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
      jobDescription: 'Join our design team as a Product Designer to create intuitive user experiences. You will work closely with product managers and engineers to design user-centered solutions.',
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
      jobDescription: 'We need a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes is essential.',
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
      jobDescription: 'Looking for a Full Stack Engineer proficient in both frontend and backend technologies. You will build end-to-end features and contribute to our microservices architecture.',
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
      jobDescription: 'Join our data team to build machine learning models and extract insights from large datasets. PhD in Machine Learning or related field preferred.',
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
      jobDescription: 'We are seeking a QA Engineer to ensure the quality of our software products. Experience with automated testing frameworks and API testing is required.',
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
      jobDescription: 'Lead our marketing initiatives and drive growth through digital campaigns. Experience in B2B marketing and analytics tools is essential.',
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
      jobDescription: 'Build scalable backend systems and APIs. Strong experience with microservices, databases, and cloud platforms is required.',
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
      highlights: ['Exceptional problem-solving skills', 'Strong technical leadership', 'Open source contributor'],
      aiInterviewRecording: {
        completed: true,
        duration: '12:34',
        recordedAt: '2 hours ago'
      }
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
      highlights: ['Great team collaboration', 'Innovative thinking', 'Scalable architecture expertise'],
      aiInterviewRecording: {
        completed: true,
        duration: '15:22',
        recordedAt: '1 day ago'
      }
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
      highlights: ['Outstanding portfolio', 'User-centered design approach', 'Data-driven decisions'],
      aiInterviewRecording: {
        completed: true,
        duration: '18:45',
        recordedAt: '3 hours ago'
      }
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
      highlights: ['Strong infrastructure knowledge', 'Security-first mindset'],
      aiInterviewRecording: {
        completed: false,
        duration: null,
        recordedAt: null
      }
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
      highlights: ['Full-stack expertise', 'Mentoring experience', 'Agile methodologies'],
      aiInterviewRecording: {
        completed: true,
        duration: '14:12',
        recordedAt: '6 hours ago'
      }
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
      highlights: ['PhD in Machine Learning', 'Published researcher', 'Industry experience'],
      aiInterviewRecording: {
        completed: true,
        duration: '16:33',
        recordedAt: '1 day ago'
      }
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
    weeklyProgress: [],
    hiringMetrics: {
      withZara: {
        timeToHire: 11,
        qualityScore: 87,
        interviewEfficiency: 94,
        candidateSatisfaction: 92
      },
      withoutZara: {
        timeToHire: 28,
        qualityScore: 73,
        interviewEfficiency: 65,
        candidateSatisfaction: 78
      }
    }
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
                  <Card key={role.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-zara-purple-light rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-zara-purple" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{role.title}</CardTitle>
                            <CardDescription>{role.department} • {role.daysLeft} days left</CardDescription>
                          </div>
                        </div>
                        <Badge variant={role.status === 'active' ? 'default' : 'secondary'} className="bg-green-100 text-green-700">
                          {role.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Job Description:</h4>
                        <p className="text-sm text-gray-700">{role.jobDescription}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">{role.applicants.total}</div>
                          <div className="text-sm text-gray-600">Total Applicants</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">{role.applicants.shortlisted}</div>
                          <div className="text-sm text-gray-600">Shortlisted</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">{role.avgScore}%</div>
                          <div className="text-sm text-gray-600">Avg Score</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">{role.completionRate}%</div>
                          <div className="text-sm text-gray-600">Completion</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button 
                          onClick={() => handleViewRoleDetails(role.id)}
                          className="bg-zara-purple hover:bg-zara-purple-dark"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Analytics
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            setActiveView('candidates');
                            // Filter candidates by role if needed
                          }}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          View Candidates ({role.applicants.total})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

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
                  <Card key={candidate.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-medium mr-3">
                            {candidate.name.split(' ').map(name => name[0]).join('')}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{candidate.name}</CardTitle>
                            <CardDescription>{candidate.role}</CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant={candidate.status === 'shortlisted' ? 'default' : 'outline'}
                          className={
                            candidate.status === 'shortlisted' ? 'bg-green-100 text-green-700' :
                            candidate.status === 'interviewed' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }
                        >
                          {candidate.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zara-purple">{candidate.overallScore}</div>
                          <div className="text-sm text-gray-600">Overall Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-blue-600">{candidate.preference}</div>
                          <div className="text-sm text-gray-600">Preference</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-green-600">{candidate.completedSteps}/{candidate.totalSteps}</div>
                          <div className="text-sm text-gray-600">Steps Done</div>
                        </div>
                      </div>

                      {/* AI Interview Recording Status */}
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-900">AI Interview Recording</span>
                          </div>
                          {candidate.aiInterviewRecording.completed ? (
                            <div>
                              <div className="text-sm font-medium text-green-600">Completed</div>
                              <div className="text-xs text-gray-500">{candidate.aiInterviewRecording.duration}</div>
                            </div>
                          ) : (
                            <div className="text-sm text-yellow-600">Pending</div>
                          )}
                        </div>
                        {candidate.aiInterviewRecording.completed && (
                          <div className="text-xs text-gray-600 mt-1">
                            Recorded {candidate.aiInterviewRecording.recordedAt}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{candidate.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleViewCandidateProfile(candidate.id)}
                          className="flex-1 bg-zara-purple hover:bg-zara-purple-dark"
                        >
                          View Profile
                        </Button>
                        {candidate.status !== 'shortlisted' && (
                          <Button 
                            variant="outline" 
                            onClick={() => handleShortlistCandidate(candidate.id)}
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            Shortlist
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {selectedRole ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Analytics: {roles.find(r => r.id === selectedRole)?.title}
                      </h2>
                      <p className="text-gray-600">{roles.find(r => r.id === selectedRole)?.department}</p>
                    </div>
                    <Button variant="outline" onClick={() => setSelectedRole(null)}>
                      Back to Overview
                    </Button>
                  </div>

                  {/* Job Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{roles.find(r => r.id === selectedRole)?.jobDescription}</p>
                    </CardContent>
                  </Card>

                  {/* Hiring Metrics Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                          <Zap className="w-5 h-5" />
                          With Zara AI
                        </CardTitle>
                        <CardDescription className="text-green-700">
                          AI-powered recruitment metrics
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{roleAnalytics.hiringMetrics.withZara.timeToHire}d</div>
                            <div className="text-sm text-green-600">Time to Hire</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{roleAnalytics.hiringMetrics.withZara.qualityScore}%</div>
                            <div className="text-sm text-green-600">Quality Score</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{roleAnalytics.hiringMetrics.withZara.interviewEfficiency}%</div>
                            <div className="text-sm text-green-600">Interview Efficiency</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{roleAnalytics.hiringMetrics.withZara.candidateSatisfaction}%</div>
                            <div className="text-sm text-green-600">Candidate Satisfaction</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-200 bg-gray-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gray-800">
                          <Users className="w-5 h-5" />
                          Without Zara AI
                        </CardTitle>
                        <CardDescription className="text-gray-700">
                          Traditional recruitment metrics
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-gray-600">{roleAnalytics.hiringMetrics.withoutZara.timeToHire}d</div>
                            <div className="text-sm text-gray-600">Time to Hire</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-gray-600">{roleAnalytics.hiringMetrics.withoutZara.qualityScore}%</div>
                            <div className="text-sm text-gray-600">Quality Score</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-gray-600">{roleAnalytics.hiringMetrics.withoutZara.interviewEfficiency}%</div>
                            <div className="text-sm text-gray-600">Interview Efficiency</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-gray-600">{roleAnalytics.hiringMetrics.withoutZara.candidateSatisfaction}%</div>
                            <div className="text-sm text-gray-600">Candidate Satisfaction</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Improvement Metrics */}
                  <Card className="border-zara-purple bg-zara-purple-light">
                    <CardHeader>
                      <CardTitle className="text-zara-purple">Zara AI Impact</CardTitle>
                      <CardDescription>Improvement over traditional methods</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">61%</div>
                          <div className="text-sm text-zara-purple">Faster Hiring</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">19%</div>
                          <div className="text-sm text-zara-purple">Higher Quality</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">45%</div>
                          <div className="text-sm text-zara-purple">More Efficient</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-zara-purple">18%</div>
                          <div className="text-sm text-zara-purple">Better Experience</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <RoleAnalytics
                    roleId={selectedRole}
                    roleTitle={roles.find(r => r.id === selectedRole)?.title || 'Role'}
                    analytics={roleAnalytics}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Overall Hiring Analytics</h3>
                    <p className="text-gray-500 mb-6">Comprehensive insights into your recruitment performance</p>
                  </div>
                  
                  <HiringMetricsDashboard data={dashboardStats} />
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

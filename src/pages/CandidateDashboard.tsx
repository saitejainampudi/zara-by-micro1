import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, Trophy, Zap, Target, Code, Video, Calendar, Award, Timer, Link as LinkIcon, TrendingUp, BarChart3, Users, ArrowLeft, Activity } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState('');
  const [directLink, setDirectLink] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [showResults, setShowResults] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  // Enhanced assignments data with more variety
  const assignments = [
    {
      id: '1',
      role: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      status: 'in-progress',
      progress: 67,
      deadline: 'March 15, 2024',
      daysLeft: 3,
      steps: {
        coding: { status: 'completed', score: 92 },
        interview: { status: 'in-progress', score: null },
        softSkills: { status: 'pending', score: null }
      }
    },
    {
      id: '2',
      role: 'Full Stack Engineer',
      company: 'StartupXYZ',
      status: 'pending',
      progress: 0,
      deadline: 'March 20, 2024',
      daysLeft: 8,
      steps: {
        coding: { status: 'pending', score: null },
        interview: { status: 'pending', score: null },
        softSkills: { status: 'pending', score: null }
      }
    },
    {
      id: '3',
      role: 'React Developer',
      company: 'WebSolutions',
      status: 'completed',
      progress: 100,
      deadline: 'March 5, 2024',
      daysLeft: -7,
      steps: {
        coding: { status: 'completed', score: 85 },
        interview: { status: 'completed', score: 88 },
        softSkills: { status: 'completed', score: 91 }
      },
      finalScore: 88
    },
    {
      id: '4',
      role: 'Product Designer',
      company: 'DesignCo',
      status: 'completed',
      progress: 100,
      deadline: 'February 28, 2024',
      daysLeft: -14,
      steps: {
        coding: { status: 'completed', score: 0 },
        interview: { status: 'completed', score: 94 },
        softSkills: { status: 'completed', score: 89 }
      },
      finalScore: 91
    },
    {
      id: '5',
      role: 'Backend Developer',
      company: 'CloudTech',
      status: 'in-progress',
      progress: 33,
      deadline: 'March 25, 2024',
      daysLeft: 13,
      steps: {
        coding: { status: 'completed', score: 87 },
        interview: { status: 'pending', score: null },
        softSkills: { status: 'pending', score: null }
      }
    },
    {
      id: '6',
      role: 'Data Scientist',
      company: 'AI Innovations',
      status: 'pending',
      progress: 0,
      deadline: 'April 1, 2024',
      daysLeft: 20,
      steps: {
        coding: { status: 'pending', score: null },
        interview: { status: 'pending', score: null },
        softSkills: { status: 'pending', score: null }
      }
    }
  ];

  // Performance analytics data
  const performanceOverviewData = [
    { month: 'Jan', score: 75, applications: 5, interviews: 3 },
    { month: 'Feb', score: 82, applications: 7, interviews: 5 },
    { month: 'Mar', score: 88, applications: 8, interviews: 6 },
    { month: 'Apr', score: 91, applications: 6, interviews: 4 },
    { month: 'May', score: 85, applications: 9, interviews: 7 },
    { month: 'Jun', score: 89, applications: 4, interviews: 3 }
  ];

  const skillsRadarData = [
    { skill: 'Technical', score: 92, fullMark: 100 },
    { skill: 'Communication', score: 88, fullMark: 100 },
    { skill: 'Problem Solving', score: 91, fullMark: 100 },
    { skill: 'Leadership', score: 85, fullMark: 100 },
    { skill: 'Creativity', score: 87, fullMark: 100 },
    { skill: 'Teamwork', score: 93, fullMark: 100 }
  ];

  const industryComparisonData = [
    { category: 'Technical Skills', yourScore: 92, industryAvg: 78, topPerformers: 95 },
    { category: 'Communication', yourScore: 88, industryAvg: 82, topPerformers: 94 },
    { category: 'Problem Solving', yourScore: 91, industryAvg: 75, topPerformers: 96 },
    { category: 'Cultural Fit', yourScore: 85, industryAvg: 80, topPerformers: 92 }
  ];

  const applicationFunnelData = [
    { name: 'Applications', value: 42, color: '#8b5cf6' },
    { name: 'Screening', value: 28, color: '#06b6d4' },
    { name: 'Interviews', value: 18, color: '#10b981' },
    { name: 'Final Round', value: 8, color: '#f59e0b' },
    { name: 'Offers', value: 4, color: '#ef4444' }
  ];

  // Chart data for results view
  const performanceData = [
    { month: 'Jan', score: 75 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 88 },
    { month: 'Apr', score: 91 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 89 }
  ];

  const skillsData = [
    { skill: 'Technical', score: 92, color: '#8b5cf6' },
    { skill: 'Communication', score: 88, color: '#06b6d4' },
    { skill: 'Problem Solving', score: 91, color: '#10b981' },
    { skill: 'Leadership', score: 85, color: '#f59e0b' }
  ];

  const comparisonData = [
    { category: 'Technical Skills', yourScore: 92, average: 78 },
    { category: 'Communication', yourScore: 88, average: 82 },
    { category: 'Problem Solving', yourScore: 91, average: 75 },
    { category: 'Cultural Fit', yourScore: 85, average: 80 }
  ];

  const handleStartAssessment = (assignment: any) => {
    navigate('/full-assessment', { state: { assignment } });
  };

  const handleViewDetails = (assignment: any) => {
    navigate('/assignment-details', { state: { assignment } });
  };

  const handleViewResults = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowResults(true);
  };

  const getStatusBadge = (status: string, daysLeft?: number) => {
    if (status === 'completed') {
      return <Badge className="bg-green-100 text-green-700 border-green-200">Completed</Badge>;
    } else if (status === 'in-progress') {
      return <Badge className="bg-blue-100 text-blue-700 border-blue-200">In Progress</Badge>;
    } else if (daysLeft && daysLeft <= 2) {
      return <Badge className="bg-red-100 text-red-700 border-red-200">Urgent</Badge>;
    } else {
      return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Pending</Badge>;
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-500 animate-pulse" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getFilteredAssignments = () => {
    switch (activeTab) {
      case 'in-progress':
        return assignments.filter(a => a.status === 'in-progress');
      case 'pending':
        return assignments.filter(a => a.status === 'pending');
      case 'completed':
        return assignments.filter(a => a.status === 'completed');
      default:
        return assignments;
    }
  };

  const getCounts = () => {
    return {
      all: assignments.length,
      inProgress: assignments.filter(a => a.status === 'in-progress').length,
      pending: assignments.filter(a => a.status === 'pending').length,
      completed: assignments.filter(a => a.status === 'completed').length
    };
  };

  const counts = getCounts();
  const filteredAssignments = getFilteredAssignments();

  // Performance Dashboard View
  if (showPerformance) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
        <Navbar />
        
        <main className="pt-28 pb-20 px-6 md:px-10">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowPerformance(false)}
                className="mb-4 hover:bg-violet-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Performance Analytics</h1>
              <p className="text-gray-600">Comprehensive analysis of your assessment performance and career progress</p>
            </div>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: "89", subtitle: "Average Score", icon: Trophy, color: "green", trend: "+5 this month" },
                { title: "42", subtitle: "Total Applications", icon: Target, color: "blue", trend: "8 this month" },
                { title: "18", subtitle: "Interviews", icon: Users, color: "purple", trend: "43% success rate" },
                { title: "4", subtitle: "Job Offers", icon: Award, color: "orange", trend: "22% offer rate" }
              ].map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      stat.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{stat.title}</CardTitle>
                    <CardDescription>{stat.subtitle}</CardDescription>
                    <div className="text-xs text-gray-500 mt-1">{stat.trend}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Performance Trend */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance Trend Over Time</CardTitle>
                <CardDescription>Your assessment scores and application activity</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceOverviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} name="Average Score" />
                    <Line type="monotone" dataKey="applications" stroke="#06b6d4" strokeWidth={2} name="Applications" />
                    <Line type="monotone" dataKey="interviews" stroke="#10b981" strokeWidth={2} name="Interviews" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skills Analysis and Industry Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Radar Analysis</CardTitle>
                  <CardDescription>Your competency across different skill areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={skillsRadarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Your Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Benchmark Comparison</CardTitle>
                  <CardDescription>How you stack up against industry standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={industryComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="yourScore" fill="#8b5cf6" name="Your Score" />
                      <Bar dataKey="industryAvg" fill="#e5e7eb" name="Industry Average" />
                      <Bar dataKey="topPerformers" fill="#10b981" name="Top 10%" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Application Funnel */}
            <Card>
              <CardHeader>
                <CardTitle>Application Success Funnel</CardTitle>
                <CardDescription>Your progression through the hiring process</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={applicationFunnelData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Results view
  if (showResults && selectedAssignment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
        <Navbar />
        
        <main className="pt-28 pb-20 px-6 md:px-10">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowResults(false)}
                className="mb-4 hover:bg-violet-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Results</h1>
              <p className="text-gray-600">{selectedAssignment.role} at {selectedAssignment.company}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Overall Score */}
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{selectedAssignment.finalScore}</span>
                  </div>
                  <CardTitle className="text-2xl text-green-800">Final Score</CardTitle>
                  <CardDescription>Outstanding performance across all assessments</CardDescription>
                </CardHeader>
              </Card>

              {/* Performance Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-zara-purple" />
                    Performance Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(selectedAssignment.steps).map(([key, step]: [string, any]) => {
                    if (step.score > 0) {
                      return (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-bold">{step.score}/100</span>
                          </div>
                          <Progress value={step.score} className="h-2" />
                        </div>
                      );
                    }
                    return null;
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Performance Trend Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance Trend Over Time</CardTitle>
                <CardDescription>Your assessment scores across different time periods</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skills Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Assessment</CardTitle>
                  <CardDescription>Detailed breakdown of your skill performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={skillsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="skill" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Comparison</CardTitle>
                  <CardDescription>How you compare to other candidates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="yourScore" fill="#8b5cf6" name="Your Score" />
                      <Bar dataKey="average" fill="#e5e7eb" name="Industry Average" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Welcome Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  A
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zara-purple" />
                    Ready to showcase your skills and land your dream job
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <NotificationCenter userRole="candidate" />
                <ContextualHelp context="dashboard" userRole="candidate" />
              </div>
            </div>
          </div>

          {/* Quick Access Panel */}
          <Card className="mb-8 bg-gradient-to-r from-white to-violet-50 border-zara-purple/20 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-zara-purple" />
                Quick Access
              </CardTitle>
              <CardDescription>Join an assessment using a code or direct link from recruiters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Access Code</label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Enter 6-digit code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="font-mono"
                    />
                    <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                      Join
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Direct Link</label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Paste interview link"
                      value={directLink}
                      onChange={(e) => setDirectLink(e.target.value)}
                    />
                    <Button variant="outline">
                      Access
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Four Action Buttons (including Your Performance) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Button
              onClick={() => setActiveTab('in-progress')}
              className="h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 hover:from-blue-700 hover:to-blue-900 group"
            >
              <div className="flex items-center justify-center gap-4">
                <Clock className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-lg font-bold">In Progress</div>
                  <div className="text-sm opacity-80">{counts.inProgress} assignments</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => setActiveTab('pending')}
              className="h-20 bg-gradient-to-br from-yellow-600 to-orange-600 text-white border-0 hover:from-yellow-700 hover:to-orange-700 group"
            >
              <div className="flex items-center justify-center gap-4">
                <AlertCircle className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-lg font-bold">Pending</div>
                  <div className="text-sm opacity-80">{counts.pending} assignments</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => setActiveTab('completed')}
              className="h-20 bg-gradient-to-br from-green-600 to-green-800 text-white border-0 hover:from-green-700 hover:to-green-900 group"
            >
              <div className="flex items-center justify-center gap-4">
                <Trophy className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-lg font-bold">Completed</div>
                  <div className="text-sm opacity-80">{counts.completed} assignments</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => setShowPerformance(true)}
              className="h-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white border-0 hover:from-purple-700 hover:to-purple-900 group"
            >
              <div className="flex items-center justify-center gap-4">
                <Activity className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-lg font-bold">Your Performance</div>
                  <div className="text-sm opacity-80">Analytics & insights</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: counts.all.toString(), subtitle: "Total Assignments", icon: Target, color: "purple", trend: "Active roles" },
              { title: `${Math.round((counts.inProgress / counts.all) * 100)}%`, subtitle: "In Progress", icon: TrendingUp, color: "blue", trend: "Keep going" },
              { title: "91", subtitle: "Best Score", icon: Award, color: "green", trend: "Top performer" },
              { title: "3", subtitle: "Days Until Deadline", icon: Timer, color: "orange", trend: "Stay focused" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
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

          {/* Assignment Filter Tabs */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Assignments</h2>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  All ({counts.all})
                </TabsTrigger>
                <TabsTrigger value="in-progress" className="flex items-center gap-2">
                  In Progress ({counts.inProgress})
                </TabsTrigger>
                <TabsTrigger value="pending" className="flex items-center gap-2">
                  Pending ({counts.pending})
                </TabsTrigger>
                <TabsTrigger value="completed" className="flex items-center gap-2">
                  Completed ({counts.completed})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-6 mt-6">
                {filteredAssignments.map((assignment) => (
                  <Card key={assignment.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-gray-300 bg-gradient-to-r from-white to-violet-50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <CardTitle className="text-xl">{assignment.role}</CardTitle>
                            {getStatusBadge(assignment.status, assignment.daysLeft)}
                          </div>
                          <CardDescription className="text-lg font-medium text-gray-700">
                            {assignment.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Due: {assignment.deadline}
                            </div>
                            {assignment.daysLeft > 0 && (
                              <div className="flex items-center gap-1">
                                <Timer className="w-4 h-4" />
                                {assignment.daysLeft} days left
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {assignment.status === 'completed' && assignment.finalScore && (
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {assignment.finalScore}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Final Score</div>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-6">
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Overall Progress</span>
                            <span className="text-gray-600">{assignment.progress}% Complete</span>
                          </div>
                          <Progress value={assignment.progress} className="h-2" />
                        </div>

                        {/* Assessment Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { key: 'coding', title: 'Coding Challenge', icon: Code, description: 'Technical assessment' },
                            { key: 'interview', title: 'AI Interview', icon: Video, description: 'Video responses' },
                            { key: 'softSkills', title: 'Soft Skills', icon: MessageSquare, description: 'Behavioral assessment' }
                          ].map((step) => {
                            const stepData = assignment.steps[step.key as keyof typeof assignment.steps];
                            return (
                              <div key={step.key} className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                                stepData.status === 'completed' ? 'bg-green-50 border-green-200' :
                                stepData.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                                'bg-gray-50 border-gray-200'
                              }`}>
                                <div className="flex items-center gap-3 mb-3">
                                  {getStepIcon(stepData.status)}
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                  </div>
                                </div>
                                
                                {stepData.score && stepData.score > 0 && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Score:</span>
                                    <div className={`px-2 py-1 rounded text-sm font-bold ${
                                      stepData.score >= 90 ? 'bg-green-100 text-green-700' :
                                      stepData.score >= 80 ? 'bg-blue-100 text-blue-700' :
                                      stepData.score >= 70 ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-red-100 text-red-700'
                                    }`}>
                                      {stepData.score}/100
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t">
                          {assignment.status === 'completed' ? (
                            <Button 
                              onClick={() => handleViewResults(assignment)}
                              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                            >
                              <Trophy className="w-4 h-4" />
                              View Results
                            </Button>
                          ) : (
                            <Button 
                              onClick={() => handleStartAssessment(assignment)}
                              className="bg-zara-purple hover:bg-zara-purple-dark flex items-center gap-2"
                            >
                              <Play className="w-4 h-4" />
                              {assignment.status === 'in-progress' ? 'Continue Assessment' : 'Start Assessment'}
                            </Button>
                          )}
                          
                          <Button 
                            variant="outline" 
                            className="flex items-center gap-2"
                            onClick={() => handleViewDetails(assignment)}
                          >
                            <FileText className="w-4 h-4" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Feedback Widget */}
      <FeedbackWidget context="candidate-dashboard" userRole="candidate" />
    </div>
  );
};

export default CandidateDashboard;

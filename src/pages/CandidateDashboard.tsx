
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssessmentWizard from '../components/AssessmentWizard';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, FileText, MessageSquare, Settings, Clock, CheckCircle, AlertCircle, User, Trophy, Zap, Target, Code, Video, Calendar, Award, Timer, Link as LinkIcon, TrendingUp } from 'lucide-react';

const CandidateDashboard = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [accessCode, setAccessCode] = useState('');
  const [directLink, setDirectLink] = useState('');

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

  const handleStartAssessment = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowWizard(true);
  };

  const handleWizardComplete = () => {
    setShowWizard(false);
    setSelectedAssignment(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Welcome Header with new components */}
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

          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "6", subtitle: "Total Assignments", icon: Target, color: "purple", trend: "Active roles" },
              { title: "72%", subtitle: "Average Progress", icon: TrendingUp, color: "blue", trend: "On track" },
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

          {/* Assignments Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Assignments</h2>
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                {assignments.filter(a => a.status !== 'completed').length} Active
              </Badge>
            </div>

            <div className="space-y-6">
              {assignments.map((assignment) => (
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
                          <Button variant="outline" className="flex items-center gap-2">
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
                        
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <Card className="mt-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-zara-purple-light to-white border-zara-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-zara-purple" />
                Quick Actions & Resources
              </CardTitle>
              <CardDescription>
                Essential tools and resources for your assessment success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-zara-purple/5">
                  <User className="w-6 h-6" />
                  <span className="text-sm">Update Profile</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-zara-purple/5">
                  <FileText className="w-6 h-6" />
                  <span className="text-sm">Practice Tests</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-zara-purple/5">
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-sm">Help Center</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-zara-purple/5">
                  <Settings className="w-6 h-6" />
                  <span className="text-sm">Preferences</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      
      {/* Assessment Wizard Modal */}
      {showWizard && selectedAssignment && (
        <AssessmentWizard
          assignment={selectedAssignment}
          onComplete={handleWizardComplete}
          onClose={() => setShowWizard(false)}
        />
      )}
      
      {/* Feedback Widget */}
      <FeedbackWidget context="candidate-dashboard" userRole="candidate" />
    </div>
  );
};

export default CandidateDashboard;

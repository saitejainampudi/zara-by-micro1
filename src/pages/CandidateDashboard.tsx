
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Star,
  Calendar,
  Code,
  Video,
  MessageSquare,
  FileText,
  Award,
  TrendingUp,
  Building
} from 'lucide-react';

const CandidateDashboard = () => {
  const assignments = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      deadline: "March 25, 2024",
      status: "pending",
      description: "We're looking for a Senior Frontend Developer to join our growing engineering team. You'll be responsible for building scalable web applications using React, TypeScript, and modern frontend technologies. Experience with state management libraries and API integration is essential.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "REST API integration", "Testing frameworks"],
      completedSteps: 0,
      totalSteps: 3,
      submittedAt: null,
      estimatedTime: "90 minutes"
    },
    {
      id: 2,
      role: "Product Manager",
      company: "InnovateLabs",
      deadline: "March 28, 2024", 
      status: "in_progress",
      description: "Join our product team to drive the strategy and execution of our AI-powered analytics platform. You'll work closely with engineering, design, and business stakeholders to deliver features that delight our customers and drive business growth.",
      requirements: ["3+ years product management", "Data analytics experience", "Agile methodologies", "Stakeholder management"],
      completedSteps: 2,
      totalSteps: 3,
      submittedAt: "2 hours ago",
      estimatedTime: "75 minutes"
    },
    {
      id: 3,
      role: "Data Scientist",
      company: "DataFlow Systems",
      deadline: "March 30, 2024",
      status: "completed",
      description: "We're seeking a Data Scientist to join our machine learning team. You'll develop predictive models, analyze large datasets, and work on cutting-edge AI solutions. Strong background in statistics, Python, and machine learning frameworks required.",
      requirements: ["Python/R expertise", "Machine learning algorithms", "Statistical analysis", "Data visualization"],
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: "1 day ago",
      estimatedTime: "105 minutes",
      score: 92
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'in_progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <Calendar className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getUrgencyLevel = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysLeft = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    
    if (daysLeft <= 1) return { level: 'urgent', color: 'text-red-600', text: 'Due today!' };
    if (daysLeft <= 3) return { level: 'soon', color: 'text-orange-600', text: `${daysLeft} days left` };
    return { level: 'normal', color: 'text-gray-600', text: `${daysLeft} days left` };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidate Dashboard</h1>
            <p className="text-gray-600">Track your applications and complete assessments</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Active Applications</p>
                    <p className="text-3xl font-bold text-blue-700">{assignments.length}</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Completed</p>
                    <p className="text-3xl font-bold text-green-700">{assignments.filter(a => a.status === 'completed').length}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-600 text-sm font-medium">In Progress</p>
                    <p className="text-3xl font-bold text-yellow-700">{assignments.filter(a => a.status === 'in_progress').length}</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">Avg Score</p>
                    <p className="text-3xl font-bold text-purple-700">
                      {assignments.filter(a => a.score).length > 0 
                        ? Math.round(assignments.filter(a => a.score).reduce((sum, a) => sum + (a.score || 0), 0) / assignments.filter(a => a.score).length)
                        : '-'
                      }
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assessment Assignments */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Assessment Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {assignments.map((assignment) => {
                  const urgency = getUrgencyLevel(assignment.deadline);
                  const progress = (assignment.completedSteps / assignment.totalSteps) * 100;
                  
                  return (
                    <div key={assignment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{assignment.role}</h3>
                            <Badge className={getStatusColor(assignment.status)}>
                              {getStatusIcon(assignment.status)}
                              <span className="ml-1 capitalize">{assignment.status.replace('_', ' ')}</span>
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Building className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700 font-medium">{assignment.company}</span>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">{assignment.description}</p>
                          
                          {/* Requirements */}
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                            <div className="flex flex-wrap gap-2">
                              {assignment.requirements.map((req, index) => (
                                <Badge key={index} variant="outline" className="bg-gray-50">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right ml-6">
                          <div className={`text-sm font-medium ${urgency.color} mb-2`}>
                            {urgency.text}
                          </div>
                          <div className="text-sm text-gray-500">
                            Est. time: {assignment.estimatedTime}
                          </div>
                          {assignment.score && (
                            <div className="mt-2">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {assignment.score}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Assessment Progress</span>
                          <span>{assignment.completedSteps} of {assignment.totalSteps} completed</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      {/* Assessment Steps */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className={`p-4 rounded-lg border ${assignment.completedSteps >= 1 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Code className={`w-5 h-5 ${assignment.completedSteps >= 1 ? 'text-green-600' : 'text-gray-400'}`} />
                            <span className="font-medium">Coding Challenge</span>
                            {assignment.completedSteps >= 1 && <CheckCircle className="w-4 h-4 text-green-600" />}
                          </div>
                          <p className="text-sm text-gray-600">Technical problem solving assessment</p>
                        </div>
                        
                        <div className={`p-4 rounded-lg border ${assignment.completedSteps >= 2 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Video className={`w-5 h-5 ${assignment.completedSteps >= 2 ? 'text-green-600' : 'text-gray-400'}`} />
                            <span className="font-medium">AI Interview</span>
                            {assignment.completedSteps >= 2 && <CheckCircle className="w-4 h-4 text-green-600" />}
                          </div>
                          <p className="text-sm text-gray-600">Video response to interview questions</p>
                        </div>
                        
                        <div className={`p-4 rounded-lg border ${assignment.completedSteps >= 3 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className={`w-5 h-5 ${assignment.completedSteps >= 3 ? 'text-green-600' : 'text-gray-400'}`} />
                            <span className="font-medium">Soft Skills</span>
                            {assignment.completedSteps >= 3 && <CheckCircle className="w-4 h-4 text-green-600" />}
                          </div>
                          <p className="text-sm text-gray-600">Behavioral and communication assessment</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {assignment.status === 'pending' && (
                          <Link to="/assessment" state={{ assignment }}>
                            <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                              Start Assessment
                            </Button>
                          </Link>
                        )}
                        {assignment.status === 'in_progress' && (
                          <Link to="/assessment" state={{ assignment }}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Continue Assessment
                            </Button>
                          </Link>
                        )}
                        {assignment.status === 'completed' && (
                          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            View Results
                          </Button>
                        )}
                        <Button variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          View Job Details
                        </Button>
                      </div>

                      {assignment.submittedAt && (
                        <div className="mt-4 text-sm text-gray-500">
                          Last updated: {assignment.submittedAt}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidateDashboard;


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from 'react-router-dom';
import { Play, FileText, MessageSquare, Settings, Clock, CheckCircle, AlertCircle, User, Trophy, Zap, Target } from 'lucide-react';

const CandidateDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-zara-purple/5">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Header with Animation */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
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
          </div>

          {/* Progress Overview with Enhanced Design */}
          <Card className="mb-8 bg-gradient-to-r from-white to-zara-purple/5 border-zara-purple/20 hover:shadow-xl transition-all duration-300 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-zara-purple" />
                Your Interview Journey
              </CardTitle>
              <CardDescription>Track your progress and unlock your potential</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600 font-medium">2 of 3 tasks completed</span>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={67} className="w-full h-3 bg-gray-200" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zara-purple/20 to-zara-purple/10 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-900">Coding Challenge</p>
                        <p className="text-sm text-green-700">Completed with excellence</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring-2 ring-blue-300 ring-opacity-50">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">Video Interview</p>
                        <p className="text-sm text-blue-700">In Progress - 20 min left</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Soft Skills Assessment</p>
                        <p className="text-sm text-gray-700">Awaiting completion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Action Cards with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  Continue Interview
                </CardTitle>
                <CardDescription className="text-white/80">
                  Complete your video interview - show your problem-solving skills
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <Link to="/ai-interview">
                    <Button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                      <Play className="w-4 h-4 mr-2" />
                      Resume Interview
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Progress automatically saved
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 hover:border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  My Results
                </CardTitle>
                <CardDescription>
                  View your detailed performance analysis and AI feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View Detailed Results
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-gray-50 transition-colors">
                    Practice More Questions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-green-200 hover:border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  My Profile
                </CardTitle>
                <CardDescription>
                  Keep your profile updated and showcase your best work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                    <User className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-gray-50 transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    Upload Latest Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Assignment with Enhanced Design */}
            <Card className="md:col-span-2 lg:col-span-3 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-zara-purple-light rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-zara-purple" />
                  </div>
                  Current Assignment: Senior Frontend Developer
                </CardTitle>
                <CardDescription>
                  React.js position at TechCorp - Complete all assessments to unlock opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Coding Challenge",
                      description: "Build a React component with state management",
                      status: "completed",
                      icon: CheckCircle,
                      color: "green"
                    },
                    {
                      title: "Video Interview", 
                      description: "Technical discussion and problem solving",
                      status: "in-progress",
                      icon: Clock,
                      color: "blue"
                    },
                    {
                      title: "Soft Skills Assessment",
                      description: "Communication and teamwork evaluation", 
                      status: "pending",
                      icon: AlertCircle,
                      color: "gray"
                    }
                  ].map((task, index) => (
                    <div key={index} className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      task.status === 'completed' ? 'bg-green-50 border-green-200 hover:border-green-300' :
                      task.status === 'in-progress' ? 'bg-blue-50 border-blue-200 hover:border-blue-300 ring-2 ring-blue-100' :
                      'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          task.status === 'completed' ? 'bg-green-500' :
                          task.status === 'in-progress' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}>
                          <task.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 text-gray-900">{task.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                            task.status === 'completed' ? 'bg-green-100 text-green-700' :
                            task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            <task.icon className="w-3 h-3" />
                            {task.status === 'completed' ? 'Completed' :
                             task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-zara-purple-light to-white border-zara-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-zara-purple" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Essential tools and resources for your success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="w-full justify-start hover:bg-zara-purple/5 transition-colors">
                      How AI Interviews Work
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start hover:bg-zara-purple/5 transition-colors">
                    Interview Preparation Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-zara-purple/5 transition-colors">
                    Technical Support
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

export default CandidateDashboard;

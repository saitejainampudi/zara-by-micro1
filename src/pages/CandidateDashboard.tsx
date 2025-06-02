
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from 'react-router-dom';
import { Play, FileText, MessageSquare, Settings, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const CandidateDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
            <p className="text-gray-600">Complete your interview and showcase your skills</p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Current interview status and next steps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-gray-600">2 of 3 tasks completed</span>
                </div>
                <Progress value={67} className="w-full" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Coding Challenge</p>
                      <p className="text-sm text-green-700">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Video Interview</p>
                      <p className="text-sm text-blue-700">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Soft Skills Assessment</p>
                      <p className="text-sm text-gray-700">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-zara-purple" />
                  Continue Interview
                </CardTitle>
                <CardDescription>
                  Complete your video interview - estimated 20 minutes remaining
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/ai-interview">
                    <Button className="w-full bg-zara-purple hover:bg-zara-purple-dark">
                      <Play className="w-4 h-4 mr-2" />
                      Resume Interview
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-600">
                    Your progress is automatically saved
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Results & Feedback
                </CardTitle>
                <CardDescription>
                  View your assessment results and AI feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View Results
                  </Button>
                  <Button variant="outline" className="w-full">
                    Practice More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Profile & Resume
                </CardTitle>
                <CardDescription>
                  Update your profile and upload your latest resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                  <Button variant="outline" className="w-full">
                    Upload Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Interview Task Overview */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2">
              <CardHeader>
                <CardTitle>Current Assignment: Senior Frontend Developer</CardTitle>
                <CardDescription>
                  React.js position at TechCorp - Complete all assessments to proceed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Coding Challenge</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Build a React component with state management
                      </p>
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Completed</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg border-blue-200 bg-blue-50">
                      <h4 className="font-medium mb-2">Video Interview</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Technical discussion and problem solving
                      </p>
                      <div className="flex items-center gap-2 text-blue-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">In Progress</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Soft Skills</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Communication and teamwork assessment
                      </p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Resources & Support</CardTitle>
                <CardDescription>
                  Learn more about the process and get help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="w-full">
                      How AI Interviews Work
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Preparation Guide
                  </Button>
                  <Button variant="outline" className="w-full">
                    Get Support
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

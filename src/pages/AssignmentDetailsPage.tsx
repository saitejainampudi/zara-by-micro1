
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Play, Building, User, Calendar, Clock, Code, Video, MessageSquare } from 'lucide-react';

const AssignmentDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignment = location.state?.assignment;

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Assignment not found</h1>
          <Button onClick={() => navigate('/candidate-dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const handleStartAssessment = () => {
    navigate('/full-assessment', { state: { assignment } });
  };

  // Enhanced assignment data with company details
  const assignmentDetails = {
    ...assignment,
    company: assignment.company || 'TechCorp Inc.',
    hiringManager: 'Sarah Johnson',
    hiringManagerTitle: 'Senior Engineering Manager',
    hiringManagerEmail: 'sarah.johnson@techcorp.com',
    jobDescription: `We are seeking a talented ${assignment.role} to join our dynamic engineering team. 

Key Responsibilities:
• Lead frontend development using React and TypeScript
• Collaborate with cross-functional teams to deliver high-quality products
• Mentor junior developers and contribute to technical decisions
• Implement responsive designs and ensure cross-browser compatibility
• Write clean, maintainable, and well-documented code

Requirements:
• 5+ years of experience in frontend development
• Strong proficiency in React, JavaScript, and TypeScript
• Experience with modern build tools and CI/CD pipelines
• Understanding of RESTful APIs and state management
• Bachelor's degree in Computer Science or equivalent experience

Benefits:
• Competitive salary and equity package
• Comprehensive health insurance
• Flexible work arrangements
• Professional development opportunities
• Modern office with latest technology`,
    location: 'San Francisco, CA (Remote friendly)',
    salaryRange: '$120,000 - $160,000',
    benefits: ['Health Insurance', 'Dental Coverage', 'Equity Package', 'Flexible PTO', 'Remote Work']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/candidate-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{assignmentDetails.role}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {assignmentDetails.company}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Due: {assignmentDetails.deadline}
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleStartAssessment}
              className="bg-zara-purple hover:bg-zara-purple-dark"
              size="lg"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Assessment
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                    {assignmentDetails.jobDescription}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Assessment Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold">Coding Challenge</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Technical problem-solving assessment</p>
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <Clock className="w-3 h-3" />
                      45 minutes
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold">AI Interview</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Video-based behavioral assessment</p>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <Clock className="w-3 h-3" />
                      20 minutes
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold">Soft Skills</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Communication and teamwork evaluation</p>
                    <div className="flex items-center gap-1 text-sm text-purple-600">
                      <Clock className="w-3 h-3" />
                      15 minutes
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Company Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{assignmentDetails.company}</h4>
                  <p className="text-gray-600">{assignmentDetails.location}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">Salary Range</h5>
                  <p className="font-semibold">{assignmentDetails.salaryRange}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">Benefits</h5>
                  <div className="flex flex-wrap gap-2">
                    {assignmentDetails.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hiring Manager */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Hiring Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-medium">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold">{assignmentDetails.hiringManager}</h4>
                    <p className="text-sm text-gray-600">{assignmentDetails.hiringManagerTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{assignmentDetails.hiringManagerEmail}</p>
              </CardContent>
            </Card>

            {/* Assessment Status */}
            <Card>
              <CardHeader>
                <CardTitle>Assessment Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Progress</span>
                  <Badge variant="outline">{assignment.progress}% Complete</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Time Remaining</span>
                  <span className="text-sm font-medium text-orange-600">
                    {assignment.daysLeft} days
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status</span>
                  <Badge 
                    variant={assignment.status === 'in-progress' ? 'default' : 'outline'}
                    className={
                      assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }
                  >
                    {assignment.status === 'in-progress' ? 'In Progress' :
                     assignment.status === 'completed' ? 'Completed' : 'Pending'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetailsPage;

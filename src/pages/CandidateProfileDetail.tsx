
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Award, Code, MessageSquare, Video, Download, Calendar, MapPin, Mail, Phone, Globe, Github, Linkedin, Trophy, Target, TrendingUp } from 'lucide-react';

const CandidateProfileDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const candidateId = location.state?.candidateId;

  // Enhanced candidate profile data
  const candidateProfile = {
    id: candidateId || '1',
    name: 'Sarah Chen',
    role: 'Senior Frontend Developer',
    avatar: '/placeholder.svg',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'sarahchen.dev',
    github: 'github.com/sarahchen',
    linkedin: 'linkedin.com/in/sarahchen',
    overallScore: 96,
    preference: '1st' as const,
    status: 'shortlisted' as const,
    experience: '6+ years experience',
    currentCompany: 'TechCorp Inc.',
    education: 'BS Computer Science, Stanford University',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Jest', 'Figma'],
    scores: {
      coding: 98,
      interview: 94,
      softSkills: 96
    },
    completedSteps: 3,
    totalSteps: 3,
    submittedAt: '2 hours ago',
    highlights: [
      'Exceptional problem-solving skills',
      'Strong technical leadership',
      'Open source contributor',
      'Excellent communication',
      'Innovative thinking'
    ],
    assessmentResults: {
      codingChallenge: {
        score: 98,
        timeSpent: '45 minutes',
        language: 'JavaScript/TypeScript',
        comments: 'Clean, efficient code with excellent test coverage. Demonstrated advanced React patterns and TypeScript usage.'
      },
      aiInterview: {
        score: 94,
        duration: '25 minutes',
        responses: 8,
        comments: 'Articulate responses showing deep technical knowledge and strong problem-solving approach.'
      },
      softSkills: {
        score: 96,
        communication: 95,
        teamwork: 97,
        leadership: 96,
        comments: 'Exceptional interpersonal skills with natural leadership qualities.'
      }
    },
    workHistory: [
      {
        company: 'TechCorp Inc.',
        position: 'Senior Frontend Developer',
        duration: '2022 - Present',
        achievements: [
          'Led frontend architecture redesign improving performance by 40%',
          'Mentored 5 junior developers',
          'Implemented design system used across 12 products'
        ]
      },
      {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        duration: '2020 - 2022',
        achievements: [
          'Built responsive web applications using React and TypeScript',
          'Collaborated with design team to implement pixel-perfect UIs',
          'Optimized applications for mobile and desktop platforms'
        ]
      }
    ],
    projects: [
      {
        name: 'E-commerce Platform Redesign',
        description: 'Complete frontend overhaul of multi-million dollar e-commerce platform',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        impact: '40% improvement in page load times, 25% increase in conversion rate'
      },
      {
        name: 'Component Library',
        description: 'Created reusable component library adopted across organization',
        technologies: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
        impact: '60% reduction in development time for new features'
      }
    ]
  };

  const getPreferenceColor = (preference: string) => {
    switch (preference) {
      case '1st': return 'bg-green-100 text-green-700 border-green-200';
      case '2nd': return 'bg-blue-100 text-blue-700 border-blue-200';
      case '3rd': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'backup': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white font-bold text-3xl">
                  {candidateProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{candidateProfile.name}</h1>
                  <p className="text-xl text-gray-600 mb-2">{candidateProfile.role}</p>
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {candidateProfile.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {candidateProfile.email}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {candidateProfile.overallScore}
                </div>
                <Badge className={getPreferenceColor(candidateProfile.preference)}>
                  {candidateProfile.preference} Choice
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Assessment Scores */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Assessment Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                      <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-purple-600 mb-1">{candidateProfile.scores.coding}</div>
                      <div className="text-sm font-medium text-purple-700 mb-2">Coding Challenge</div>
                      <div className="text-xs text-gray-600">{candidateProfile.assessmentResults.codingChallenge.timeSpent}</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                      <Video className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-600 mb-1">{candidateProfile.scores.interview}</div>
                      <div className="text-sm font-medium text-blue-700 mb-2">AI Interview</div>
                      <div className="text-xs text-gray-600">{candidateProfile.assessmentResults.aiInterview.duration}</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                      <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-600 mb-1">{candidateProfile.scores.softSkills}</div>
                      <div className="text-sm font-medium text-green-700 mb-2">Soft Skills</div>
                      <div className="text-xs text-gray-600">Leadership: {candidateProfile.assessmentResults.softSkills.leadership}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Highlights */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    AI-Generated Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {candidateProfile.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Work History */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {candidateProfile.workHistory.map((job, index) => (
                      <div key={index} className="border-l-4 border-zara-purple pl-6 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                          <Badge variant="outline" className="text-xs">{job.duration}</Badge>
                        </div>
                        <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <Target className="w-3 h-3 text-zara-purple mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Projects */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Key Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {candidateProfile.projects.map((project, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="bg-gray-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {project.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Star className="w-4 h-4 mr-2" />
                    Shortlist Candidate
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Interview
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{candidateProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{candidateProfile.website}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{candidateProfile.github}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{candidateProfile.linkedin}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {candidateProfile.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Assessment Progress */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle>Assessment Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Completion</span>
                      <span className="text-gray-600">{candidateProfile.completedSteps}/{candidateProfile.totalSteps}</span>
                    </div>
                    <Progress value={(candidateProfile.completedSteps / candidateProfile.totalSteps) * 100} className="h-2" />
                    <div className="text-xs text-gray-500">
                      Submitted {candidateProfile.submittedAt}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidateProfileDetail;

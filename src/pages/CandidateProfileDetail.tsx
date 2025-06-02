import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Award, Code, MessageSquare, Video, Download, Calendar, MapPin, Mail, Phone, Globe, Github, Linkedin, Trophy, Target, TrendingUp, Play } from 'lucide-react';

const CandidateProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidateId = id;

  // Enhanced candidate profiles data with video recordings
  const candidateProfiles = {
    '1': {
      id: '1',
      name: 'Alex Johnson',
      role: 'Senior Frontend Developer',
      avatar: '/placeholder.svg',
      email: 'alex.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'alexjohnson.dev',
      github: 'github.com/alexjohnson',
      linkedin: 'linkedin.com/in/alexjohnson',
      overallScore: 87,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      experience: '7+ years experience',
      currentCompany: 'TechCorp Inc.',
      education: 'BS Computer Science, Stanford University',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Jest', 'Figma'],
      scores: {
        coding: 89,
        interview: 85,
        softSkills: 87
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 days ago',
      highlights: [
        'Exceptional problem-solving skills',
        'Strong technical leadership',
        'Open source contributor',
        'Excellent communication',
        'Innovative thinking'
      ],
      videoRecording: {
        available: true,
        duration: '14:32',
        thumbnail: '/placeholder.svg',
        url: 'https://example.com/interview/alex-johnson'
      },
      assessmentResults: {
        codingChallenge: {
          score: 89,
          timeSpent: '45 minutes',
          language: 'JavaScript/TypeScript',
          comments: 'Clean, efficient code with excellent test coverage. Demonstrated advanced React patterns and TypeScript usage.'
        },
        aiInterview: {
          score: 85,
          duration: '25 minutes',
          responses: 8,
          comments: 'Articulate responses showing deep technical knowledge and strong problem-solving approach.'
        },
        softSkills: {
          score: 87,
          communication: 85,
          teamwork: 89,
          leadership: 87,
          comments: 'Strong interpersonal skills with natural leadership qualities.'
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
        }
      ],
      projects: [
        {
          name: 'E-commerce Platform Redesign',
          description: 'Complete frontend overhaul of multi-million dollar e-commerce platform',
          technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
          impact: '40% improvement in page load times, 25% increase in conversion rate'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Jordan Smith',
      role: 'Backend Engineer',
      avatar: '/placeholder.svg',
      email: 'jordan.smith@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Austin, TX',
      website: 'jordansmith.dev',
      github: 'github.com/jordansmith',
      linkedin: 'linkedin.com/in/jordansmith',
      overallScore: 92,
      preference: '1st' as const,
      status: 'interviewed' as const,
      experience: '5+ years experience',
      currentCompany: 'DataTech Solutions',
      education: 'MS Computer Science, MIT',
      skills: ['Node.js', 'Python', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GraphQL'],
      scores: {
        coding: 94,
        interview: 90,
        softSkills: 92
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: [
        'Expert in microservices architecture',
        'Published research papers',
        'Strong problem-solving skills',
        'Team collaboration',
        'Innovation mindset'
      ],
      videoRecording: {
        available: true,
        duration: '13:45',
        thumbnail: '/placeholder.svg',
        url: 'https://example.com/interview/jordan-smith'
      },
      assessmentResults: {
        codingChallenge: {
          score: 94,
          timeSpent: '38 minutes',
          language: 'Python/Node.js',
          comments: 'Excellent algorithm implementation with optimal time complexity. Great understanding of data structures.'
        },
        aiInterview: {
          score: 90,
          duration: '22 minutes',
          responses: 7,
          comments: 'Demonstrated deep backend knowledge and system design expertise.'
        },
        softSkills: {
          score: 92,
          communication: 90,
          teamwork: 94,
          leadership: 92,
          comments: 'Exceptional collaboration skills and clear communication.'
        }
      },
      workHistory: [
        {
          company: 'DataTech Solutions',
          position: 'Senior Backend Engineer',
          duration: '2021 - Present',
          achievements: [
            'Architected scalable microservices handling 1M+ requests/day',
            'Reduced database query time by 60%',
            'Led team of 6 backend developers'
          ]
        }
      ],
      projects: [
        {
          name: 'Real-time Analytics Platform',
          description: 'Built high-performance analytics system processing millions of events',
          technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker'],
          impact: '70% faster data processing, 50% cost reduction'
        }
      ]
    }
    // Add more profiles as needed
  };

  const candidateProfile = candidateProfiles[candidateId as keyof typeof candidateProfiles] || candidateProfiles['1'];

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
              {/* AI Interview Video Recording */}
              <Card className="bg-gradient-to-r from-white to-violet-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-500" />
                    AI Interview Recording
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white font-medium mb-2">Interview Recording</p>
                        <p className="text-gray-300 text-sm">Duration: {candidateProfile.videoRecording.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Recorded during AI interview session</p>
                      <p className="text-xs text-gray-500">High quality • Available for review</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Play className="w-4 h-4 mr-2" />
                      Play Recording
                    </Button>
                  </div>
                </CardContent>
              </Card>

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

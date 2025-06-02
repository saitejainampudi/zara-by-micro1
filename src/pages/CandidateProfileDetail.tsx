import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Mail, Phone, Video, Play, Download, Share2, MessageSquare, ExternalLink, Star, Calendar, CheckCircle, Code, Users, FileText, Brain, X } from 'lucide-react';

const CandidateProfileDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const candidateId = location.state?.candidateId || '1';

  // Enhanced candidate data with interview recordings
  const candidateData = {
    '1': {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      email: 'sarah.chen@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      overallScore: 96,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      experience: '6+ years',
      education: 'MS Computer Science, Stanford University',
      currentRole: 'Senior Frontend Developer at TechStart',
      expectedSalary: '$140k - $160k',
      availability: 'Available in 2 weeks',
      portfolio: 'https://sarah-chen-portfolio.com',
      linkedIn: 'https://linkedin.com/in/sarah-chen-dev',
      github: 'https://github.com/sarah-chen',
      skills: {
        technical: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Jest', 'Webpack'],
        soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Mentoring']
      },
      scores: {
        coding: 98,
        interview: 94,
        softSkills: 96,
        overall: 96
      },
      assessmentResults: {
        codingChallenge: {
          completed: true,
          score: 98,
          timeSpent: '42 minutes',
          problemsSolved: '3/3',
          codeQuality: 'Excellent',
          efficiency: 'Optimal',
          feedback: 'Outstanding problem-solving approach with clean, efficient code. Excellent understanding of algorithms and data structures.'
        },
        technicalInterview: {
          completed: true,
          score: 94,
          duration: '45 minutes',
          topics: ['System Design', 'React Architecture', 'Performance Optimization', 'Testing Strategies'],
          strengths: ['System thinking', 'Technical depth', 'Clear communication'],
          improvements: ['Domain-specific knowledge'],
          interviewRecording: {
            available: true,
            videoUrl: '/demo-interview-sarah-chen.mp4',
            duration: '45 minutes',
            quality: 'HD 1080p',
            transcript: true,
            aiNotes: 'Candidate demonstrated exceptional technical knowledge with clear explanations. Strong architectural thinking and practical experience. Excellent communication skills throughout the interview.',
            keyMoments: [
              { timestamp: '5:30', note: 'Excellent explanation of React fiber architecture' },
              { timestamp: '18:45', note: 'Strong system design approach for scalability' },
              { timestamp: '32:10', note: 'Great example of performance optimization experience' },
              { timestamp: '41:20', note: 'Thoughtful questions about team structure and processes' }
            ]
          }
        },
        softSkillsAssessment: {
          completed: true,
          score: 96,
          scenarios: 4,
          strengths: ['Leadership potential', 'Conflict resolution', 'Team collaboration', 'Adaptability'],
          personalityTraits: ['Analytical', 'Collaborative', 'Growth-minded', 'Reliable'],
          workStyle: 'Prefers collaborative environments with autonomy for technical decisions'
        }
      },
      workExperience: [
        {
          company: 'TechStart Inc.',
          role: 'Senior Frontend Developer',
          duration: '2022 - Present',
          responsibilities: [
            'Led frontend architecture decisions for 3 major product releases',
            'Mentored 5 junior developers and established coding standards',
            'Improved application performance by 40% through optimization',
            'Implemented comprehensive testing strategy reducing bugs by 60%'
          ]
        },
        {
          company: 'Digital Solutions Co.',
          role: 'Frontend Developer',
          duration: '2019 - 2022',
          responsibilities: [
            'Developed responsive web applications using React and TypeScript',
            'Collaborated with design team to implement pixel-perfect UI components',
            'Integrated with REST APIs and GraphQL endpoints',
            'Participated in code reviews and agile development processes'
          ]
        }
      ],
      projects: [
        {
          name: 'E-commerce Platform Redesign',
          description: 'Led complete frontend rewrite of legacy e-commerce platform',
          technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
          impact: 'Increased conversion rate by 25% and reduced page load times by 50%',
          link: 'https://github.com/sarah-chen/ecommerce-platform'
        },
        {
          name: 'Component Library',
          description: 'Created comprehensive design system and component library',
          technologies: ['React', 'Storybook', 'CSS-in-JS', 'Jest'],
          impact: 'Adopted by 4 teams, reduced development time by 30%',
          link: 'https://github.com/sarah-chen/design-system'
        }
      ],
      strengths: [
        'Exceptional problem-solving skills',
        'Strong technical leadership experience',
        'Open source contributor with active GitHub profile',
        'Excellent communication and mentoring abilities',
        'Deep understanding of modern frontend technologies',
        'Experience with scalable architecture design'
      ],
      concerns: [
        'May be overqualified for some positions',
        'High salary expectations'
      ],
      interviewNotes: [
        {
          date: '2024-03-10',
          interviewer: 'Technical Lead',
          type: 'Technical Interview',
          rating: 94,
          notes: 'Impressive technical depth and clear communication. Strong architectural thinking.',
          followUp: 'Recommended for final round'
        }
      ],
      hiringRecommendation: {
        decision: 'Strong Hire',
        reasoning: 'Exceptional technical skills, proven leadership experience, and excellent cultural fit. Would be a valuable addition to the senior development team.',
        nextSteps: ['Schedule final interview with CTO', 'Prepare competitive offer', 'Check references'],
        riskFactors: ['High market demand - may have multiple offers', 'Salary expectations at top of range']
      }
    }
    // ... other candidates data
  };

  const candidate = candidateData[candidateId as keyof typeof candidateData] || candidateData['1'];

  const handleScheduleInterview = () => {
    console.log('Schedule interview for:', candidate.name);
  };

  const handleSendMessage = () => {
    console.log('Send message to:', candidate.name);
  };

  const handleShortlist = () => {
    console.log('Shortlist candidate:', candidate.name);
  };

  const handleReject = () => {
    console.log('Reject candidate:', candidate.name);
  };

  const handlePlayRecording = () => {
    console.log('Play interview recording for:', candidate.name);
  };

  const handleDownloadTranscript = () => {
    console.log('Download transcript for:', candidate.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/recruiter-dashboard')}
              className="mb-4 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {candidate.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{candidate.name}</h1>
                  <p className="text-xl text-gray-600 mb-1">{candidate.role}</p>
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {candidate.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {candidate.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {candidate.phone}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge 
                  className={
                    candidate.status === 'shortlisted' ? 'bg-green-100 text-green-700' :
                    candidate.status === 'interviewed' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }
                >
                  {candidate.status}
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  {candidate.preference} Choice
                </Badge>
                <div className="text-right">
                  <div className="text-3xl font-bold text-zara-purple">{candidate.overallScore}</div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Interview Recording Section */}
              {candidate.assessmentResults.technicalInterview.interviewRecording?.available && (
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Video className="w-6 h-6 text-blue-600" />
                      AI Interview Recording
                      <Badge className="bg-blue-100 text-blue-700">HD Quality</Badge>
                    </CardTitle>
                    <CardDescription>
                      Technical interview completed on March 10, 2024 • Duration: {candidate.assessmentResults.technicalInterview.interviewRecording.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border-2 border-gray-700">
                      <div className="text-center text-white">
                        <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <p className="text-lg mb-4">Technical Interview Recording</p>
                        <p className="text-sm text-gray-400 mb-6">Score: {candidate.assessmentResults.technicalInterview.score}/100</p>
                        <Button 
                          onClick={handlePlayRecording}
                          className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Play Recording
                        </Button>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        AI Analysis & Insights
                      </h4>
                      <p className="text-blue-700 mb-4">{candidate.assessmentResults.technicalInterview.interviewRecording.aiNotes}</p>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-blue-800">Key Moments:</h5>
                        {candidate.assessmentResults.technicalInterview.interviewRecording.keyMoments.map((moment, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded border">
                            <Badge variant="outline" className="text-blue-600">{moment.timestamp}</Badge>
                            <span className="text-sm text-gray-700">{moment.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="outline" onClick={handleDownloadTranscript}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Transcript
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Recording
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Add Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Assessment Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Assessment Results</CardTitle>
                  <CardDescription>Comprehensive evaluation across all assessment areas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score Overview */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Coding', score: candidate.scores.coding, color: 'purple' },
                      { label: 'Interview', score: candidate.scores.interview, color: 'blue' },
                      { label: 'Soft Skills', score: candidate.scores.softSkills, color: 'green' },
                      { label: 'Overall', score: candidate.scores.overall, color: 'gray' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className={`text-3xl font-bold ${
                          item.color === 'purple' ? 'text-purple-600' :
                          item.color === 'blue' ? 'text-blue-600' :
                          item.color === 'green' ? 'text-green-600' :
                          'text-gray-900'
                        }`}>
                          {item.score}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Coding Challenge */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      Coding Challenge
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Score</div>
                        <div className="text-lg font-bold text-purple-600">{candidate.assessmentResults.codingChallenge.score}</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Time Spent</div>
                        <div className="text-gray-900">{candidate.assessmentResults.codingChallenge.timeSpent}</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Problems Solved</div>
                        <div className="text-gray-900">{candidate.assessmentResults.codingChallenge.problemsSolved}</div>
                      </div>
                      <div className="text-sm text-gray-600">{candidate.assessmentResults.codingChallenge.feedback}</div>
                    </div>
                  </div>

                  {/* Technical Interview */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Video className="w-5 h-5 text-blue-600" />
                      Technical Interview
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Score</div>
                        <div className="text-lg font-bold text-blue-600">{candidate.assessmentResults.technicalInterview.score}</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Duration</div>
                        <div className="text-gray-900">{candidate.assessmentResults.technicalInterview.duration}</div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Topics Covered</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {candidate.assessmentResults.technicalInterview.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                      <div className="text-sm font-medium text-gray-700 mb-2">Strengths</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {candidate.assessmentResults.technicalInterview.strengths.map((strength, idx) => (
                          <li key={idx}>{strength}</li>
                        ))}
                      </ul>
                      <div className="text-sm font-medium text-gray-700 mb-2">Areas for Improvement</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {candidate.assessmentResults.technicalInterview.improvements.map((improvement, idx) => (
                          <li key={idx}>{improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Soft Skills Assessment */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                      Soft Skills Assessment
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Score</div>
                        <div className="text-lg font-bold text-green-600">{candidate.assessmentResults.softSkillsAssessment.score}</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Scenarios</div>
                        <div className="text-gray-900">{candidate.assessmentResults.softSkillsAssessment.scenarios}</div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Strengths</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {candidate.assessmentResults.softSkillsAssessment.strengths.map((strength, idx) => (
                          <li key={idx}>{strength}</li>
                        ))}
                      </ul>
                      <div className="text-sm font-medium text-gray-700 mb-2">Personality Traits</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {candidate.assessmentResults.softSkillsAssessment.personalityTraits.map((trait, idx) => (
                          <li key={idx}>{trait}</li>
                        ))}
                      </ul>
                      <div className="text-sm font-medium text-gray-700 mb-2">Work Style</div>
                      <div className="text-sm text-gray-600">{candidate.assessmentResults.softSkillsAssessment.workStyle}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Work Experience</CardTitle>
                  <CardDescription>Detailed history of previous roles and responsibilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {candidate.workExperience.map((exp, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
                      <div className="text-gray-600">{exp.company} • {exp.duration}</div>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Projects</CardTitle>
                  <CardDescription>Showcase of personal and professional projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {candidate.projects.map((project, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                      <div className="text-gray-600">{project.description}</div>
                      <div className="text-sm text-gray-700">
                        <strong>Technologies:</strong> {project.technologies.join(', ')}
                      </div>
                      <div className="text-sm text-gray-700">
                        <strong>Impact:</strong> {project.impact}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Strengths and Concerns */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Strengths & Concerns</CardTitle>
                  <CardDescription>Key attributes and potential areas of concern</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Strengths</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {candidate.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Concerns</h3>
                    <ul className="list-disc list-inside text-sm text-red-700">
                      {candidate.concerns.map((concern, idx) => (
                        <li key={idx}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interview Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Interview Notes</CardTitle>
                  <CardDescription>Feedback from previous interviews</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidate.interviewNotes.map((note, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">
                        {note.date} • {note.interviewer} ({note.type})
                      </div>
                      <div className="text-gray-900">Rating: {note.rating}/100</div>
                      <div className="text-gray-600">{note.notes}</div>
                      {note.followUp && (
                        <div className="text-green-600">Follow Up: {note.followUp}</div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Hiring Recommendation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Hiring Recommendation</CardTitle>
                  <CardDescription>Final decision and reasoning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Decision</div>
                    <div className="text-2xl font-bold text-green-600">{candidate.hiringRecommendation.decision}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Reasoning</div>
                    <div className="text-gray-600">{candidate.hiringRecommendation.reasoning}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Next Steps</div>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {candidate.hiringRecommendation.nextSteps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-red-700">Risk Factors</div>
                    <ul className="list-disc list-inside text-sm text-red-700">
                      {candidate.hiringRecommendation.riskFactors.map((risk, idx) => (
                        <li key={idx}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={handleShortlist}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Shortlist Candidate
                  </Button>
                  <Button 
                    onClick={handleScheduleInterview}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Interview
                  </Button>
                  <Button 
                    onClick={handleSendMessage}
                    variant="outline"
                    className="w-full"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    onClick={handleReject}
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject Candidate
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Experience</div>
                    <div className="text-gray-900">{candidate.experience}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Education</div>
                    <div className="text-gray-900">{candidate.education}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Current Role</div>
                    <div className="text-gray-900">{candidate.currentRole}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Expected Salary</div>
                    <div className="text-gray-900">{candidate.expectedSalary}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Availability</div>
                    <div className="text-gray-900">{candidate.availability}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle>External Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href={candidate.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Portfolio
                  </a>
                  <a 
                    href={candidate.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href={candidate.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GitHub
                  </a>
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

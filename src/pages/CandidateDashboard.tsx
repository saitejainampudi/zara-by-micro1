import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OnboardingWizard from '../components/OnboardingWizard';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  Trophy, 
  Clock, 
  Play, 
  CheckCircle, 
  Star, 
  Calendar,
  Code,
  Video,
  MessageSquare,
  Award,
  TrendingUp,
  Target,
  Eye,
  Download,
  Share2,
  FileText,
  CheckCircle as CheckCircleIcon
} from 'lucide-react';

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const assignments = [
    {
      id: '1',
      role: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      status: 'active' as const,
      deadline: 'March 20, 2024',
      progress: 0,
      maxScore: 100,
      currentScore: 0,
      timeRemaining: '3 days',
      description: 'Join our innovative team building next-generation web applications using React, TypeScript, and modern development practices. We are looking for a senior developer who can lead technical decisions and mentor junior developers.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership skills', 'Agile methodology experience'],
      benefits: ['Competitive salary', 'Remote work options', 'Health insurance', 'Professional development budget'],
      assessments: [
        { type: 'coding', name: 'React Component Challenge', duration: '45 min', status: 'pending' },
        { type: 'interview', name: 'Technical Interview', duration: '30 min', status: 'pending' },
        { type: 'soft-skills', name: 'Behavioral Assessment', duration: '20 min', status: 'pending' }
      ]
    },
    {
      id: '2',
      role: 'Full Stack Engineer',
      company: 'StartupXYZ',
      status: 'completed' as const,
      deadline: 'March 15, 2024',
      progress: 100,
      maxScore: 100,
      currentScore: 89,
      timeRemaining: 'Completed',
      description: 'Build scalable web applications from frontend to backend. Work with modern technologies including Node.js, React, and cloud platforms.',
      requirements: ['Full-stack development', 'Node.js expertise', 'Database design', 'Cloud platforms'],
      benefits: ['Equity package', 'Flexible hours', 'Learning opportunities', 'Modern tech stack'],
      assessments: [
        { type: 'coding', name: 'Full Stack Challenge', duration: '60 min', status: 'completed', score: 92 },
        { type: 'interview', name: 'Technical Interview', duration: '45 min', status: 'completed', score: 88 },
        { type: 'soft-skills', name: 'Culture Fit', duration: '25 min', status: 'completed', score: 87 }
      ]
    },
    {
      id: '3',
      role: 'Product Designer',
      company: 'DesignCo',
      status: 'completed' as const,
      deadline: 'March 10, 2024',
      progress: 100,
      maxScore: 100,
      currentScore: 94,
      timeRemaining: 'Completed',
      description: 'Create beautiful and functional user experiences. Lead design thinking workshops and collaborate closely with engineering teams.',
      requirements: ['5+ years UX/UI design', 'Design systems experience', 'Prototyping skills', 'User research'],
      benefits: ['Creative freedom', 'Design conference budget', 'Latest design tools', 'Collaborative environment'],
      assessments: [
        { type: 'portfolio', name: 'Design Portfolio Review', duration: '60 min', status: 'completed', score: 96 },
        { type: 'interview', name: 'Design Process Interview', duration: '45 min', status: 'completed', score: 93 },
        { type: 'soft-skills', name: 'Collaboration Assessment', duration: '30 min', status: 'completed', score: 93 }
      ]
    },
    {
      id: '4',
      role: 'Data Scientist',
      company: 'DataTech Solutions',
      status: 'pending' as const,
      deadline: 'March 25, 2024',
      progress: 65,
      maxScore: 100,
      currentScore: 87,
      timeRemaining: '8 days',
      description: 'Apply machine learning and statistical analysis to solve complex business problems. Work with large datasets and build predictive models.',
      requirements: ['PhD in related field', 'Python/R expertise', 'Machine learning', 'Statistical analysis'],
      benefits: ['Research opportunities', 'Conference presentations', 'Publication support', 'Cutting-edge tools'],
      assessments: [
        { type: 'coding', name: 'ML Algorithm Implementation', duration: '90 min', status: 'completed', score: 91 },
        { type: 'interview', name: 'Technical Deep Dive', duration: '60 min', status: 'completed', score: 85 },
        { type: 'presentation', name: 'Case Study Presentation', duration: '30 min', status: 'pending' }
      ]
    }
  ];

  const skillsData = {
    technical: [
      { name: 'JavaScript/TypeScript', level: 92, improvement: '+8 pts' },
      { name: 'React Development', level: 89, improvement: '+5 pts' },
      { name: 'Node.js/Backend', level: 84, improvement: '+12 pts' },
      { name: 'Database Design', level: 78, improvement: '+15 pts' },
      { name: 'System Architecture', level: 75, improvement: '+10 pts' },
      { name: 'DevOps/Cloud', level: 71, improvement: '+18 pts' }
    ],
    soft: [
      { name: 'Communication', level: 88, improvement: '+6 pts' },
      { name: 'Problem Solving', level: 91, improvement: '+4 pts' },
      { name: 'Team Collaboration', level: 85, improvement: '+9 pts' },
      { name: 'Leadership', level: 79, improvement: '+11 pts' },
      { name: 'Adaptability', level: 86, improvement: '+7 pts' },
      { name: 'Time Management', level: 82, improvement: '+8 pts' }
    ]
  };

  const achievements = [
    {
      title: 'Code Master',
      description: 'Scored 95+ on 5 coding challenges',
      icon: Code,
      color: 'purple',
      earned: true,
      date: 'March 10, 2024'
    },
    {
      title: 'Interview Ace',
      description: 'Completed 10 AI interviews with 90+ scores',
      icon: Video,
      color: 'blue',
      earned: true,
      date: 'March 8, 2024'
    },
    {
      title: 'Team Player',
      description: 'Excellent soft skills assessment results',
      icon: MessageSquare,
      color: 'green',
      earned: true,
      date: 'March 5, 2024'
    },
    {
      title: 'Rising Star',
      description: 'Top 10% performance in your field',
      icon: Star,
      color: 'yellow',
      earned: false,
      progress: 78
    }
  ];

  const stats = {
    totalAssignments: assignments.length,
    completedAssignments: assignments.filter(a => a.status === 'completed').length,
    averageScore: Math.round(assignments.filter(a => a.status === 'completed').reduce((acc, a) => acc + a.currentScore, 0) / assignments.filter(a => a.status === 'completed').length),
    totalInterviews: 12,
    skillsImproved: 8,
    ranking: 'Top 15%'
  };

  const handleStartAssignment = (assignment: any) => {
    navigate('/assessment', { state: { assignment } });
  };

  const handleContinueAssignment = (assignment: any) => {
    navigate('/assessment', { state: { assignment } });
  };

  const handleViewResults = (assignmentId: string) => {
    console.log('View results for assignment:', assignmentId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  C
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-blue-500" />
                    Your AI-powered career journey continues - {assignments.filter(a => a.status === 'active').length} active opportunities
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <NotificationCenter userRole="candidate" />
                <ContextualHelp context="dashboard" userRole="candidate" />
                <Button 
                  onClick={() => setShowOnboarding(true)}
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Take Tour
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { title: stats.totalAssignments.toString(), subtitle: "Total Assignments", icon: Briefcase, color: "blue", trend: `${assignments.filter(a => a.status === 'active').length} active` },
              { title: stats.completedAssignments.toString(), subtitle: "Completed", icon: CheckCircleIcon, color: "green", trend: "This month" },
              { title: `${stats.averageScore}`, subtitle: "Avg Score", icon: TrendingUp, color: "purple", trend: "Above average" },
              { title: stats.totalInterviews.toString(), subtitle: "Interviews", icon: Video, color: "blue", trend: "+3 this week" },
              { title: stats.skillsImproved.toString(), subtitle: "Skills Improved", icon: Target, color: "orange", trend: "Keep growing" },
              { title: stats.ranking, subtitle: "Global Ranking", icon: Award, color: "yellow", trend: "Rising" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
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

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="assignments" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Assignments ({assignments.length})
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Skills Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Achievements
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Overview</CardTitle>
                  <CardDescription>Summary of your career progress and upcoming opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">You have {assignments.filter(a => a.status === 'active').length} active assignments and {assignments.filter(a => a.status === 'completed').length} completed assignments. Keep up the great work!</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Your Assignments</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-600">
                    {assignments.filter(a => a.status === 'active').length} Active
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-600">
                    {assignments.filter(a => a.status === 'completed').length} Completed
                  </Badge>
                </div>
              </div>
              
              <div className="grid gap-6">
                {assignments.map((assignment) => (
                  <Card key={assignment.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{assignment.role}</CardTitle>
                            <Badge 
                              className={
                                assignment.status === 'active' ? 'bg-blue-100 text-blue-700' :
                                assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                                'bg-orange-100 text-orange-700'
                              }
                            >
                              {assignment.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-600 mb-3">
                            <strong>{assignment.company}</strong> • Due: {assignment.deadline}
                          </CardDescription>
                          <p className="text-sm text-gray-700 mb-4">{assignment.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Requirements:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {assignment.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-3 h-3 text-green-500" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Benefits:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {assignment.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Star className="w-3 h-3 text-yellow-500" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{assignment.currentScore}/{assignment.maxScore}</div>
                          <div className="text-sm text-gray-600">Score</div>
                          <div className="flex items-center gap-1 mt-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{assignment.timeRemaining}</span>
                          </div>
                        </div>
                      </div>
                      
                      {assignment.progress > 0 && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{assignment.progress}%</span>
                          </div>
                          <Progress value={assignment.progress} className="h-2" />
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-3">Assessment Components:</h5>
                          <div className="grid md:grid-cols-3 gap-3">
                            {assignment.assessments.map((assessment, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  {assessment.type === 'coding' && <Code className="w-4 h-4 text-purple-600" />}
                                  {assessment.type === 'interview' && <Video className="w-4 h-4 text-blue-600" />}
                                  {(assessment.type === 'soft-skills' || assessment.type === 'presentation') && <MessageSquare className="w-4 h-4 text-green-600" />}
                                  {assessment.type === 'portfolio' && <FileText className="w-4 h-4 text-orange-600" />}
                                  <div>
                                    <div className="text-sm font-medium">{assessment.name}</div>
                                    <div className="text-xs text-gray-500">{assessment.duration}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {assessment.status === 'completed' && assessment.score && (
                                    <Badge className="bg-green-100 text-green-700 text-xs">
                                      {assessment.score}
                                    </Badge>
                                  )}
                                  {assessment.status === 'completed' ? (
                                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <Clock className="w-4 h-4 text-orange-500" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 pt-2">
                          {assignment.status === 'active' && assignment.progress === 0 && (
                            <Button 
                              onClick={() => handleStartAssignment(assignment)}
                              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                            >
                              <Play className="w-4 h-4" />
                              Start Assignment
                            </Button>
                          )}
                          
                          {assignment.status === 'active' && assignment.progress > 0 && assignment.progress < 100 && (
                            <Button 
                              onClick={() => handleContinueAssignment(assignment)}
                              className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                            >
                              <Play className="w-4 h-4" />
                              Continue Assessment
                            </Button>
                          )}
                          
                          {assignment.status === 'completed' && (
                            <Button 
                              onClick={() => handleViewResults(assignment.id)}
                              variant="outline"
                              className="border-green-200 text-green-600 hover:bg-green-50 flex items-center gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              View Results
                            </Button>
                          )}
                          
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Skills Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillsData.technical.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                          <div className="text-xs text-gray-500 mt-1">{skill.improvement} since last assessment</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Soft Skills Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillsData.soft.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                          <div className="text-xs text-gray-500 mt-1">{skill.improvement} since last assessment</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, idx) => (
                  <Card key={idx} className={`p-6 ${achievement.earned ? 'bg-gradient-to-br from-green-50 to-white border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <achievement.icon className={`w-8 h-8 ${achievement.color === 'purple' ? 'text-purple-600' : achievement.color === 'blue' ? 'text-blue-600' : achievement.color === 'green' ? 'text-green-600' : achievement.color === 'yellow' ? 'text-yellow-500' : 'text-gray-600'}`} />
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="text-green-600 font-medium">Earned on {achievement.date}</div>
                    ) : (
                      <div className="text-gray-500 font-medium">Progress: {achievement.progress}%</div>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      
      {/* Onboarding Wizard */}
      {showOnboarding && (
        <OnboardingWizard 
          userRole="candidate"
          onComplete={() => setShowOnboarding(false)}
        />
      )}
      
      {/* Feedback Widget */}
      <FeedbackWidget context="candidate-dashboard" userRole="candidate" />
    </div>
  );
};

export default CandidateDashboard;

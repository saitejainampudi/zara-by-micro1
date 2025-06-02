import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Video, Users, Briefcase, TrendingUp, Clock, Award } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Enhanced candidate data with 20+ candidates
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      jobDescription: "Lead frontend development using React and TypeScript. Mentor junior developers and architect scalable solutions for our e-commerce platform.",
      status: "completed",
      score: 87,
      skills: ["React", "TypeScript", "Redux"],
      date: "2 days ago",
      highlight: "Problem Solver",
      aiInterviewRecording: { completed: true, duration: "14:32", recordedAt: "2 days ago" }
    },
    {
      id: 2,
      name: "Jordan Smith",
      role: "Backend Engineer",
      jobDescription: "Design and implement robust backend APIs using Node.js and Python. Work with microservices architecture and ensure system scalability.",
      status: "in_progress",
      score: null,
      skills: ["Node.js", "Python", "MongoDB"],
      date: "1 day ago",
      highlight: null,
      aiInterviewRecording: { completed: false, duration: null, recordedAt: null }
    },
    {
      id: 3,
      name: "Taylor Williams",
      role: "Full Stack Developer",
      jobDescription: "Build end-to-end web applications with modern technologies. Collaborate with designers and product managers to deliver user-focused solutions.",
      status: "completed",
      score: 92,
      skills: ["React", "Node.js", "PostgreSQL"],
      date: "4 days ago",
      highlight: "Top Logic",
      aiInterviewRecording: { completed: true, duration: "16:45", recordedAt: "4 days ago" }
    },
    {
      id: 4,
      name: "Casey Brown",
      role: "Frontend Developer",
      jobDescription: "Develop responsive user interfaces using Vue.js. Focus on performance optimization and cross-browser compatibility.",
      status: "reviewed",
      score: 78,
      skills: ["Vue.js", "JavaScript", "CSS"],
      date: "5 days ago",
      highlight: "Great Communicator",
      aiInterviewRecording: { completed: true, duration: "12:18", recordedAt: "5 days ago" }
    },
    {
      id: 5,
      name: "Riley Garcia",
      role: "Backend Engineer",
      jobDescription: "Maintain and enhance Java-based enterprise applications. Work with Spring framework and implement secure, scalable backend services.",
      status: "completed",
      score: 65,
      skills: ["Java", "Spring", "MySQL"],
      date: "3 days ago",
      highlight: null,
      aiInterviewRecording: { completed: true, duration: "11:22", recordedAt: "3 days ago" }
    },
    {
      id: 6,
      name: "Morgan Davis",
      role: "Product Designer",
      jobDescription: "Create user-centered designs for web and mobile applications. Conduct user research and create prototypes using Figma and design systems.",
      status: "completed",
      score: 89,
      skills: ["Figma", "UX Research", "Prototyping"],
      date: "1 week ago",
      highlight: "Creative Thinker",
      aiInterviewRecording: { completed: true, duration: "18:55", recordedAt: "1 week ago" }
    },
    {
      id: 7,
      name: "Jamie Lee",
      role: "DevOps Engineer",
      jobDescription: "Manage cloud infrastructure and CI/CD pipelines. Implement monitoring solutions and ensure high availability of production systems.",
      status: "in_progress",
      score: null,
      skills: ["Docker", "Kubernetes", "AWS"],
      date: "3 hours ago",
      highlight: null,
      aiInterviewRecording: { completed: false, duration: null, recordedAt: null }
    },
    {
      id: 8,
      name: "Avery Thompson",
      role: "Data Scientist",
      jobDescription: "Build machine learning models to drive business insights. Work with large datasets and implement predictive analytics solutions.",
      status: "completed",
      score: 94,
      skills: ["Python", "Machine Learning", "SQL"],
      date: "2 days ago",
      highlight: "Data Expert",
      aiInterviewRecording: { completed: true, duration: "20:13", recordedAt: "2 days ago" }
    },
    {
      id: 9,
      name: "Quinn Rodriguez",
      role: "Mobile Developer",
      jobDescription: "Develop native iOS and Android applications. Implement cross-platform solutions using React Native and Flutter.",
      status: "completed",
      score: 86,
      skills: ["React Native", "Swift", "Kotlin"],
      date: "3 days ago",
      highlight: "Mobile Expert",
      aiInterviewRecording: { completed: true, duration: "15:42", recordedAt: "3 days ago" }
    },
    {
      id: 10,
      name: "Sam Parker",
      role: "QA Engineer",
      jobDescription: "Design and execute comprehensive testing strategies. Implement automated testing frameworks and ensure product quality.",
      status: "reviewed",
      score: 82,
      skills: ["Selenium", "Jest", "Cypress"],
      date: "4 days ago",
      highlight: "Quality Focus",
      aiInterviewRecording: { completed: true, duration: "13:28", recordedAt: "4 days ago" }
    },
    {
      id: 11,
      name: "Charlie Kim",
      role: "Security Engineer",
      jobDescription: "Implement security protocols and conduct vulnerability assessments. Ensure compliance with industry security standards.",
      status: "completed",
      score: 91,
      skills: ["Cybersecurity", "Penetration Testing", "OWASP"],
      date: "2 days ago",
      highlight: "Security Expert",
      aiInterviewRecording: { completed: true, duration: "17:35", recordedAt: "2 days ago" }
    },
    {
      id: 12,
      name: "Blake Wilson",
      role: "UI/UX Designer",
      jobDescription: "Create intuitive user interfaces and exceptional user experiences. Conduct user research and prototype solutions.",
      status: "in_progress",
      score: null,
      skills: ["Figma", "Adobe XD", "User Research"],
      date: "1 day ago",
      highlight: null,
      aiInterviewRecording: { completed: false, duration: null, recordedAt: null }
    },
    {
      id: 13,
      name: "Drew Martinez",
      role: "Machine Learning Engineer",
      jobDescription: "Develop and deploy ML models at scale. Work with big data technologies and implement AI solutions.",
      status: "completed",
      score: 95,
      skills: ["TensorFlow", "PyTorch", "Kubernetes"],
      date: "1 day ago",
      highlight: "AI Innovator",
      aiInterviewRecording: { completed: true, duration: "22:18", recordedAt: "1 day ago" }
    },
    {
      id: 14,
      name: "Sage Anderson",
      role: "Cloud Architect",
      jobDescription: "Design scalable cloud infrastructure solutions. Lead cloud migration projects and optimize cost efficiency.",
      status: "completed",
      score: 88,
      skills: ["AWS", "Azure", "Terraform"],
      date: "3 days ago",
      highlight: "Cloud Expert",
      aiInterviewRecording: { completed: true, duration: "19:24", recordedAt: "3 days ago" }
    },
    {
      id: 15,
      name: "River Chen",
      role: "Blockchain Developer",
      jobDescription: "Develop smart contracts and decentralized applications. Implement blockchain solutions for various industries.",
      status: "reviewed",
      score: 84,
      skills: ["Solidity", "Web3", "Ethereum"],
      date: "5 days ago",
      highlight: "Blockchain Pioneer",
      aiInterviewRecording: { completed: true, duration: "16:52", recordedAt: "5 days ago" }
    },
    {
      id: 16,
      name: "Phoenix Taylor",
      role: "Technical Writer",
      jobDescription: "Create comprehensive technical documentation. Collaborate with engineering teams to produce clear user guides.",
      status: "completed",
      score: 79,
      skills: ["Technical Writing", "Documentation", "API Docs"],
      date: "4 days ago",
      highlight: "Clear Communicator",
      aiInterviewRecording: { completed: true, duration: "14:16", recordedAt: "4 days ago" }
    },
    {
      id: 17,
      name: "Rowan Jackson",
      role: "Game Developer",
      jobDescription: "Develop engaging video games using Unity and Unreal Engine. Create immersive gaming experiences.",
      status: "in_progress",
      score: null,
      skills: ["Unity", "C#", "Game Design"],
      date: "2 hours ago",
      highlight: null,
      aiInterviewRecording: { completed: false, duration: null, recordedAt: null }
    },
    {
      id: 18,
      name: "Skyler White",
      role: "Site Reliability Engineer",
      jobDescription: "Ensure system reliability and performance. Implement monitoring solutions and incident response procedures.",
      status: "completed",
      score: 90,
      skills: ["Monitoring", "Incident Response", "Performance"],
      date: "2 days ago",
      highlight: "Reliability Expert",
      aiInterviewRecording: { completed: true, duration: "18:43", recordedAt: "2 days ago" }
    },
    {
      id: 19,
      name: "Emery Brown",
      role: "Platform Engineer",
      jobDescription: "Build and maintain internal developer platforms. Implement tools and workflows to improve developer productivity.",
      status: "completed",
      score: 87,
      skills: ["Platform Engineering", "Developer Tools", "CI/CD"],
      date: "3 days ago",
      highlight: "Platform Builder",
      aiInterviewRecording: { completed: true, duration: "15:29", recordedAt: "3 days ago" }
    },
    {
      id: 20,
      name: "Sage Cooper",
      role: "Research Scientist",
      jobDescription: "Conduct advanced research in computer science and AI. Publish findings and contribute to open-source projects.",
      status: "reviewed",
      score: 93,
      skills: ["Research", "AI", "Publications"],
      date: "1 week ago",
      highlight: "Research Leader",
      aiInterviewRecording: { completed: true, duration: "21:37", recordedAt: "1 week ago" }
    },
    {
      id: 21,
      name: "Dakota Green",
      role: "Embedded Systems Engineer",
      jobDescription: "Develop software for embedded systems and IoT devices. Work with microcontrollers and real-time systems.",
      status: "completed",
      score: 85,
      skills: ["C/C++", "Embedded Systems", "IoT"],
      date: "4 days ago",
      highlight: "Hardware Expert",
      aiInterviewRecording: { completed: true, duration: "17:08", recordedAt: "4 days ago" }
    }
  ];

  // Filter candidates based on active tab and search query
  const filteredCandidates = candidates.filter(candidate => {
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "in_progress" && candidate.status === "in_progress") ||
      (activeTab === "completed" && candidate.status === "completed") ||
      (activeTab === "reviewed" && candidate.status === "reviewed");
    
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTab && matchesSearch;
  });

  const handleViewProfile = (candidateId: number) => {
    navigate('/candidate-profile-detail', { state: { candidateId } });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_progress":
        return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">In Progress</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Completed</Badge>;
      case "reviewed":
        return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Reviewed</Badge>;
      default:
        return null;
    }
  };

  const totalRoles = 15;
  const totalInterviews = candidates.length;
  const completedInterviews = candidates.filter(c => c.status === 'completed').length;
  const averageScore = Math.round(candidates.filter(c => c.score).reduce((sum, c) => sum + (c.score || 0), 0) / candidates.filter(c => c.score).length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Recruiter Command Centre</h1>
              <p className="text-gray-600">Manage and review your candidate interviews</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-zara-purple hover:bg-zara-purple-dark">+ New Job</Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Total Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-zara-purple">{totalRoles}</p>
                <p className="text-sm text-gray-500">Active positions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Total Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">{totalInterviews}</p>
                <p className="text-sm text-gray-500">Candidates assessed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{completedInterviews}</p>
                <p className="text-sm text-gray-500">Interviews done</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-amber-600">{averageScore}</p>
                <p className="text-sm text-gray-500">Quality metric</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Time Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">164h</p>
                <p className="text-sm text-gray-500">This month</p>
              </CardContent>
            </Card>
          </div>
          
          
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All Candidates</TabsTrigger>
                    <TabsTrigger value="in_progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="w-full md:w-64">
                  <Input 
                    placeholder="Search candidates..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-violet-50 text-left">
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role & Description</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">AI Interview</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCandidates.length > 0 ? (
                    filteredCandidates.map((candidate) => (
                      <tr key={candidate.id} className="hover:bg-violet-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-medium mr-3">
                              {candidate.name.split(' ').map(name => name[0]).join('')}
                            </div>
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="flex space-x-1 mt-1">
                                {candidate.skills.slice(0, 2).map((skill, i) => (
                                  <span key={i} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                                    {skill}
                                  </span>
                                ))}
                                {candidate.skills.length > 2 && (
                                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                                    +{candidate.skills.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-sm">{candidate.role}</div>
                            <div className="text-xs text-gray-600 mt-1 max-w-xs">
                              {candidate.jobDescription.substring(0, 120)}...
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-blue-600" />
                            {candidate.aiInterviewRecording.completed ? (
                              <div>
                                <div className="text-sm font-medium text-green-600">Completed</div>
                                <div className="text-xs text-gray-500">{candidate.aiInterviewRecording.duration}</div>
                              </div>
                            ) : (
                              <div className="text-sm text-yellow-600">Pending</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(candidate.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {candidate.score ? (
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium mr-2 ${
                                candidate.score >= 80 ? 'bg-green-500' : 
                                candidate.score >= 70 ? 'bg-amber-500' : 'bg-red-500'
                              }`}>
                                {candidate.score}
                              </div>
                              {candidate.highlight && (
                                <span className="bg-zara-purple-light text-zara-purple text-xs px-2 py-0.5 rounded">
                                  {candidate.highlight}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-500">Pending</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{candidate.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-zara-purple hover:text-zara-purple-dark hover:bg-zara-purple-light"
                            onClick={() => handleViewProfile(candidate.id)}
                          >
                            View Profile
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        No candidates found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-violet-50 text-right">
              <Button variant="outline" size="sm" className="text-gray-600">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="ml-2 bg-white text-gray-800">
                1
              </Button>
              <Button variant="outline" size="sm" className="ml-2 text-gray-600">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;

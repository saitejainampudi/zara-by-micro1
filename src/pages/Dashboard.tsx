import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Enhanced candidate data with job descriptions and AI interview recording status
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      jobDescription: "Lead frontend development using React and TypeScript. Mentor junior developers and architect scalable solutions for our e-commerce platform. You will work closely with the design team to implement pixel-perfect UIs and optimize performance across all devices.",
      status: "completed",
      score: 87,
      skills: ["React", "TypeScript", "Redux"],
      date: "2 days ago",
      highlight: "Problem Solver",
      aiInterviewRecording: {
        completed: true,
        duration: "14:32",
        recordedAt: "2 days ago"
      }
    },
    {
      id: 2,
      name: "Jordan Smith",
      role: "Backend Engineer",
      jobDescription: "Design and implement robust backend APIs using Node.js and Python. Work with microservices architecture and ensure system scalability. You will be responsible for database optimization, API security, and system monitoring.",
      status: "in_progress",
      score: null,
      skills: ["Node.js", "Python", "MongoDB"],
      date: "1 day ago",
      highlight: null,
      aiInterviewRecording: {
        completed: true,
        duration: "13:45",
        recordedAt: "1 day ago"
      }
    },
    {
      id: 3,
      name: "Taylor Williams",
      role: "Full Stack Developer",
      jobDescription: "Build end-to-end web applications with modern technologies. Collaborate with designers and product managers to deliver user-focused solutions. You will work on both frontend React applications and backend Node.js services.",
      status: "completed",
      score: 92,
      skills: ["React", "Node.js", "PostgreSQL"],
      date: "4 days ago",
      highlight: "Top Logic",
      aiInterviewRecording: {
        completed: true,
        duration: "16:45",
        recordedAt: "4 days ago"
      }
    },
    {
      id: 4,
      name: "Casey Brown",
      role: "Frontend Developer",
      jobDescription: "Develop responsive user interfaces using Vue.js. Focus on performance optimization and cross-browser compatibility. You will create reusable components and implement modern CSS frameworks to deliver exceptional user experiences.",
      status: "reviewed",
      score: 78,
      skills: ["Vue.js", "JavaScript", "CSS"],
      date: "5 days ago",
      highlight: "Great Communicator",
      aiInterviewRecording: {
        completed: true,
        duration: "12:18",
        recordedAt: "5 days ago"
      }
    },
    {
      id: 5,
      name: "Riley Garcia",
      role: "Backend Engineer",
      jobDescription: "Maintain and enhance Java-based enterprise applications. Work with Spring framework and implement secure, scalable backend services. You will be involved in system architecture decisions and database design.",
      status: "completed",
      score: 65,
      skills: ["Java", "Spring", "MySQL"],
      date: "3 days ago",
      highlight: null,
      aiInterviewRecording: {
        completed: true,
        duration: "11:22",
        recordedAt: "3 days ago"
      }
    },
    {
      id: 6,
      name: "Morgan Davis",
      role: "Product Designer",
      jobDescription: "Create user-centered designs for web and mobile applications. Conduct user research and create prototypes using Figma and design systems. You will collaborate with product managers and engineers to translate business requirements into intuitive user experiences.",
      status: "completed",
      score: 89,
      skills: ["Figma", "UX Research", "Prototyping"],
      date: "1 week ago",
      highlight: "Creative Thinker",
      aiInterviewRecording: {
        completed: true,
        duration: "18:55",
        recordedAt: "1 week ago"
      }
    },
    {
      id: 7,
      name: "Jamie Lee",
      role: "DevOps Engineer",
      jobDescription: "Manage cloud infrastructure and CI/CD pipelines. Implement monitoring solutions and ensure high availability of production systems. You will work with containerization technologies and automate deployment processes.",
      status: "in_progress",
      score: null,
      skills: ["Docker", "Kubernetes", "AWS"],
      date: "3 hours ago",
      highlight: null,
      aiInterviewRecording: {
        completed: true,
        duration: "15:30",
        recordedAt: "3 hours ago"
      }
    },
    {
      id: 8,
      name: "Avery Thompson",
      role: "Data Scientist",
      jobDescription: "Build machine learning models to drive business insights. Work with large datasets and implement predictive analytics solutions. You will collaborate with stakeholders to identify data opportunities and create actionable recommendations.",
      status: "completed",
      score: 94,
      skills: ["Python", "Machine Learning", "SQL"],
      date: "2 days ago",
      highlight: "Data Expert",
      aiInterviewRecording: {
        completed: true,
        duration: "20:13",
        recordedAt: "2 days ago"
      }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Candidate Dashboard</h1>
              <p className="text-gray-600">Manage and review your candidate interviews</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-zara-purple hover:bg-zara-purple-dark">+ New Job</Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-white to-violet-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">32</p>
                <p className="text-sm text-gray-500">+8 this week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">5</p>
                <p className="text-sm text-gray-500">2 due today</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">21</p>
                <p className="text-sm text-gray-500">Need review</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">64h</p>
                <p className="text-sm text-gray-500">This month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                  <TabsList className="bg-violet-50 border border-gray-200">
                    <TabsTrigger value="all" className="data-[state=active]:bg-white">All Candidates</TabsTrigger>
                    <TabsTrigger value="in_progress" className="data-[state=active]:bg-white">In Progress</TabsTrigger>
                    <TabsTrigger value="completed" className="data-[state=active]:bg-white">Completed</TabsTrigger>
                    <TabsTrigger value="reviewed" className="data-[state=active]:bg-white">Reviewed</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="w-full md:w-64">
                  <Input 
                    placeholder="Search candidates..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-gray-300 focus:border-zara-purple focus:ring-zara-purple"
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-violet-50 text-left border-b border-gray-200">
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role & Description</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">AI Interview</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredCandidates.length > 0 ? (
                    filteredCandidates.map((candidate) => (
                      <tr key={candidate.id} className="hover:bg-violet-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-medium mr-3">
                              {candidate.name.split(' ').map(name => name[0]).join('')}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{candidate.name}</div>
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
                            <div className="font-medium text-sm text-gray-900">{candidate.role}</div>
                            <div className="text-xs text-gray-600 mt-1 max-w-xs line-clamp-3">
                              {candidate.jobDescription.substring(0, 150)}...
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/candidate-profile/${candidate.id}`}>
                            <Button variant="ghost" size="sm" className="text-zara-purple hover:text-zara-purple-dark hover:bg-zara-purple-light">
                              View Profile
                            </Button>
                          </Link>
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
              <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-white">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="ml-2 bg-white text-gray-800 border-gray-300">
                1
              </Button>
              <Button variant="outline" size="sm" className="ml-2 text-gray-600 border-gray-300 hover:bg-white">
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

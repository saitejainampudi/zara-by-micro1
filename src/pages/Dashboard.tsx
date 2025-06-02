
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Enhanced candidate data with more realistic numbers
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      status: "completed",
      score: 87,
      skills: ["React", "TypeScript", "Redux"],
      date: "2 days ago",
      highlight: "Problem Solver"
    },
    {
      id: 2,
      name: "Jordan Smith",
      role: "Backend Engineer",
      status: "in_progress",
      score: null,
      skills: ["Node.js", "Python", "MongoDB"],
      date: "1 day ago",
      highlight: null
    },
    {
      id: 3,
      name: "Taylor Williams",
      role: "Full Stack Developer",
      status: "completed",
      score: 92,
      skills: ["React", "Node.js", "PostgreSQL"],
      date: "4 days ago",
      highlight: "Top Logic"
    },
    {
      id: 4,
      name: "Casey Brown",
      role: "Frontend Developer",
      status: "reviewed",
      score: 78,
      skills: ["Vue.js", "JavaScript", "CSS"],
      date: "5 days ago",
      highlight: "Great Communicator"
    },
    {
      id: 5,
      name: "Riley Garcia",
      role: "Backend Engineer",
      status: "completed",
      score: 65,
      skills: ["Java", "Spring", "MySQL"],
      date: "3 days ago",
      highlight: null
    },
    {
      id: 6,
      name: "Morgan Davis",
      role: "Product Designer",
      status: "completed",
      score: 89,
      skills: ["Figma", "UX Research", "Prototyping"],
      date: "1 week ago",
      highlight: "Creative Thinker"
    },
    {
      id: 7,
      name: "Jamie Lee",
      role: "DevOps Engineer",
      status: "in_progress",
      score: null,
      skills: ["Docker", "Kubernetes", "AWS"],
      date: "3 hours ago",
      highlight: null
    },
    {
      id: 8,
      name: "Avery Thompson",
      role: "Data Scientist",
      status: "completed",
      score: 94,
      skills: ["Python", "Machine Learning", "SQL"],
      date: "2 days ago",
      highlight: "Data Expert"
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
              <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
              <p className="text-gray-600">Manage and review your candidate interviews</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-zara-purple hover:bg-zara-purple-dark">+ New Job</Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-white to-violet-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">32</p>
                <p className="text-sm text-gray-500">+8 this week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-gray-500">2 due today</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">21</p>
                <p className="text-sm text-gray-500">Need review</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">64h</p>
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
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
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
                        <td className="px-6 py-4 whitespace-nowrap">{candidate.role}</td>
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
                          <Button variant="ghost" size="sm" className="text-zara-purple hover:text-zara-purple-dark hover:bg-zara-purple-light">
                            View Profile
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
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

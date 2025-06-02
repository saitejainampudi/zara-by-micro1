
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Briefcase, Clock, TrendingUp, Eye, Plus, Search } from 'lucide-react';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const roles = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      applications: 24,
      completed: 18,
      pending: 6,
      status: "active",
      postedDate: "2 days ago",
      deadline: "March 20, 2024"
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "StartupXYZ",
      applications: 31,
      completed: 25,
      pending: 6,
      status: "active",
      postedDate: "5 days ago",
      deadline: "March 25, 2024"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "WebSolutions",
      applications: 19,
      completed: 19,
      pending: 0,
      status: "closed",
      postedDate: "1 week ago",
      deadline: "March 15, 2024"
    },
    {
      id: 4,
      title: "Product Designer",
      company: "DesignCo",
      applications: 15,
      completed: 15,
      pending: 0,
      status: "closed",
      postedDate: "2 weeks ago",
      deadline: "March 10, 2024"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Innovations",
      applications: 28,
      completed: 20,
      pending: 8,
      status: "active",
      postedDate: "3 days ago",
      deadline: "March 30, 2024"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      applications: 22,
      completed: 16,
      pending: 6,
      status: "active",
      postedDate: "4 days ago",
      deadline: "March 28, 2024"
    },
    {
      id: 7,
      title: "Mobile Developer",
      company: "AppCorp",
      applications: 17,
      completed: 14,
      pending: 3,
      status: "active",
      postedDate: "1 week ago",
      deadline: "April 5, 2024"
    },
    {
      id: 8,
      title: "QA Engineer",
      company: "TestLabs",
      applications: 13,
      completed: 11,
      pending: 2,
      status: "active",
      postedDate: "6 days ago",
      deadline: "April 1, 2024"
    },
    {
      id: 9,
      title: "Security Engineer",
      company: "SecureTech",
      applications: 21,
      completed: 18,
      pending: 3,
      status: "active",
      postedDate: "5 days ago",
      deadline: "March 27, 2024"
    },
    {
      id: 10,
      title: "UI/UX Designer",
      company: "CreativeStudio",
      applications: 26,
      completed: 20,
      pending: 6,
      status: "active",
      postedDate: "1 week ago",
      deadline: "April 3, 2024"
    },
    {
      id: 11,
      title: "Machine Learning Engineer",
      company: "AI Research",
      applications: 19,
      completed: 15,
      pending: 4,
      status: "active",
      postedDate: "3 days ago",
      deadline: "April 8, 2024"
    },
    {
      id: 12,
      title: "Cloud Architect",
      company: "Enterprise Solutions",
      applications: 16,
      completed: 13,
      pending: 3,
      status: "active",
      postedDate: "1 week ago",
      deadline: "April 2, 2024"
    },
    {
      id: 13,
      title: "Blockchain Developer",
      company: "CryptoTech",
      applications: 12,
      completed: 9,
      pending: 3,
      status: "active",
      postedDate: "4 days ago",
      deadline: "March 29, 2024"
    },
    {
      id: 14,
      title: "Site Reliability Engineer",
      company: "ScaleCorp",
      applications: 18,
      completed: 14,
      pending: 4,
      status: "active",
      postedDate: "5 days ago",
      deadline: "April 4, 2024"
    },
    {
      id: 15,
      title: "Platform Engineer",
      company: "InfraTech",
      applications: 20,
      completed: 16,
      pending: 4,
      status: "active",
      postedDate: "2 days ago",
      deadline: "April 6, 2024"
    }
  ];

  const handleViewCandidates = (roleId: number) => {
    navigate('/dashboard', { state: { roleId } });
  };

  const filteredRoles = roles.filter(role =>
    role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalApplications = roles.reduce((sum, role) => sum + role.applications, 0);
  const totalCompleted = roles.reduce((sum, role) => sum + role.completed, 0);
  const totalPending = roles.reduce((sum, role) => sum + role.pending, 0);
  const activeRoles = roles.filter(role => role.status === 'active').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Dashboard</h1>
              <p className="text-gray-600">Manage your job postings and candidate pipeline</p>
            </div>
            <Button className="bg-zara-purple hover:bg-zara-purple-dark">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Active Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-zara-purple">{activeRoles}</p>
                <p className="text-sm text-gray-500">Open positions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">{totalApplications}</p>
                <p className="text-sm text-gray-500">All submissions</p>
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
                <p className="text-3xl font-bold text-green-600">{totalCompleted}</p>
                <p className="text-sm text-gray-500">Interviews done</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Pending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600">{totalPending}</p>
                <p className="text-sm text-gray-500">In progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search roles or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <Card key={role.id} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg line-clamp-2">{role.title}</CardTitle>
                      <p className="text-gray-600 font-medium">{role.company}</p>
                      <Badge className={role.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {role.status === 'active' ? 'Active' : 'Closed'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{role.applications}</p>
                        <p className="text-xs text-gray-500">Applications</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{role.completed}</p>
                        <p className="text-xs text-gray-500">Completed</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-orange-600">{role.pending}</p>
                        <p className="text-xs text-gray-500">Pending</p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Posted: {role.postedDate}</p>
                      <p>Deadline: {role.deadline}</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-zara-purple hover:bg-zara-purple-dark"
                      onClick={() => handleViewCandidates(role.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Candidates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;

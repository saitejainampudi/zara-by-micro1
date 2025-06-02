
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Star,
  Calendar,
  Filter,
  Download,
  Plus,
  Eye,
  BarChart3,
  PieChart,
  Target
} from 'lucide-react';

const RecruiterDashboard = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Enhanced statistics
  const stats = {
    totalRoles: 12,
    totalCandidates: 247,
    interviewsCompleted: 189,
    shortlisted: 42,
    pendingReviews: 28,
    averageScore: 84
  };

  const roles = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      candidates: 45,
      shortlisted: 8,
      interviews: 32,
      status: "active",
      postedDate: "2024-03-01",
      deadline: "2024-03-25",
      progress: 71,
      avgScore: 87
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "Engineering",
      candidates: 38,
      shortlisted: 6,
      interviews: 28,
      status: "active",
      postedDate: "2024-02-28",
      deadline: "2024-03-22",
      progress: 74,
      avgScore: 85
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      candidates: 22,
      shortlisted: 4,
      interviews: 16,
      status: "active",
      postedDate: "2024-03-03",
      deadline: "2024-03-28",
      progress: 64,
      avgScore: 83
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      candidates: 31,
      shortlisted: 7,
      interviews: 24,
      status: "active",
      postedDate: "2024-02-25",
      deadline: "2024-03-20",
      progress: 77,
      avgScore: 91
    },
    {
      id: 5,
      title: "UI/UX Designer",
      department: "Design",
      candidates: 29,
      shortlisted: 5,
      interviews: 21,
      status: "active",
      postedDate: "2024-03-02",
      deadline: "2024-03-26",
      progress: 69,
      avgScore: 89
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data",
      candidates: 26,
      shortlisted: 4,
      interviews: 19,
      status: "active",
      postedDate: "2024-03-04",
      deadline: "2024-03-30",
      progress: 58,
      avgScore: 88
    },
    {
      id: 7,
      title: "Machine Learning Engineer",
      department: "AI/ML",
      candidates: 18,
      shortlisted: 3,
      interviews: 13,
      status: "active",
      postedDate: "2024-03-05",
      deadline: "2024-04-01",
      progress: 52,
      avgScore: 92
    },
    {
      id: 8,
      title: "Full Stack Developer",
      department: "Engineering",
      candidates: 21,
      shortlisted: 3,
      interviews: 15,
      status: "active",
      postedDate: "2024-03-06",
      deadline: "2024-04-02",
      progress: 48,
      avgScore: 86
    },
    {
      id: 9,
      title: "QA Engineer",
      department: "Quality",
      candidates: 9,
      shortlisted: 1,
      interviews: 7,
      status: "active",
      postedDate: "2024-03-07",
      deadline: "2024-04-03",
      progress: 44,
      avgScore: 82
    },
    {
      id: 10,
      title: "Cloud Architect",
      department: "Infrastructure",
      candidates: 4,
      shortlisted: 1,
      interviews: 3,
      status: "active",
      postedDate: "2024-03-08",
      deadline: "2024-04-05",
      progress: 25,
      avgScore: 93
    },
    {
      id: 11,
      title: "Cybersecurity Specialist",
      department: "Security",
      candidates: 3,
      shortlisted: 0,
      interviews: 2,
      status: "active",
      postedDate: "2024-03-09",
      deadline: "2024-04-06",
      progress: 33,
      avgScore: 85
    },
    {
      id: 12,
      title: "Technical Writer",
      department: "Documentation",
      candidates: 1,
      shortlisted: 0,
      interviews: 1,
      status: "active",
      postedDate: "2024-03-10",
      deadline: "2024-04-07",
      progress: 20,
      avgScore: 83
    }
  ];

  const filteredRoles = selectedRole 
    ? roles.filter(role => role.department === selectedRole)
    : roles;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'closed': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const departments = [...new Set(roles.map(role => role.department))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Dashboard</h1>
              <p className="text-gray-600">Manage your recruitment pipeline and candidates</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Data
              </Button>
              <Link to="/job-upload">
                <Button className="bg-zara-purple hover:bg-zara-purple-dark flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Post New Job
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Total Roles</p>
                    <p className="text-3xl font-bold text-blue-700">{stats.totalRoles}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium">+2 this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">Total Candidates</p>
                    <p className="text-3xl font-bold text-purple-700">{stats.totalCandidates}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium">+47 this week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Interviews Done</p>
                    <p className="text-3xl font-bold text-green-700">{stats.interviewsCompleted}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">
                    {Math.round((stats.interviewsCompleted / stats.totalCandidates) * 100)}% completion rate
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-600 text-sm font-medium">Shortlisted</p>
                    <p className="text-3xl font-bold text-yellow-700">{stats.shortlisted}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">
                    {Math.round((stats.shortlisted / stats.totalCandidates) * 100)}% of total
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Pending Reviews</p>
                    <p className="text-3xl font-bold text-orange-700">{stats.pendingReviews}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">Requires attention</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-600 text-sm font-medium">Avg Score</p>
                    <p className="text-3xl font-bold text-teal-700">{stats.averageScore}</p>
                  </div>
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium">+3 points</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department Filter */}
          <div className="mb-6 flex gap-3 flex-wrap">
            <Button
              variant={selectedRole === null ? "default" : "outline"}
              onClick={() => setSelectedRole(null)}
              className={selectedRole === null ? "bg-zara-purple hover:bg-zara-purple-dark" : ""}
            >
              All Departments ({roles.length})
            </Button>
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedRole === dept ? "default" : "outline"}
                onClick={() => setSelectedRole(dept)}
                className={selectedRole === dept ? "bg-zara-purple hover:bg-zara-purple-dark" : ""}
              >
                {dept} ({roles.filter(r => r.department === dept).length})
              </Button>
            ))}
          </div>

          {/* Active Job Postings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Active Job Postings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {filteredRoles.map((role) => (
                  <div key={role.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{role.title}</h3>
                          <Badge className={getStatusColor(role.status)}>
                            {role.status.charAt(0).toUpperCase() + role.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{role.department} Department</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Posted: {new Date(role.postedDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>Deadline: {new Date(role.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {role.avgScore}
                          </div>
                          <span className="text-sm text-gray-600">Avg Score</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">{role.candidates}</div>
                        <div className="text-sm text-blue-700">Total Candidates</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">{role.interviews}</div>
                        <div className="text-sm text-green-700">Interviews Done</div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-600">{role.shortlisted}</div>
                        <div className="text-sm text-yellow-700">Shortlisted</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">{role.progress}%</div>
                        <div className="text-sm text-purple-700">Progress</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Hiring Progress</span>
                        <span>{role.progress}%</span>
                      </div>
                      <Progress value={role.progress} className="h-2" />
                    </div>

                    <div className="flex gap-3">
                      <Link to="/candidates" state={{ roleFilter: role.title }}>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Candidates ({role.candidates})
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Schedule Interviews
                      </Button>
                      <Button size="sm" className="bg-zara-purple hover:bg-zara-purple-dark">
                        Manage Role
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;

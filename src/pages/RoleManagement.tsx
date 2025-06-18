import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoleCard from '../components/RoleCard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Building, Users, Target, TrendingUp } from 'lucide-react';

const RoleManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Enhanced demo data with more realistic role information
  const roles = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'Dec 15, 2024',
      daysLeft: 12,
      applicants: {
        total: 89,
        pending: 23,
        interviewed: 34,
        shortlisted: 12
      },
      completionRate: 78,
      avgScore: 84,
      topCandidateScore: 96
    },
    {
      id: '2',
      title: 'Full Stack Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'Jan 20, 2025',
      daysLeft: 45,
      applicants: {
        total: 156,
        pending: 67,
        interviewed: 52,
        shortlisted: 18
      },
      completionRate: 65,
      avgScore: 81,
      topCandidateScore: 94
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      department: 'Design',
      status: 'active' as const,
      deadline: 'Dec 30, 2024',
      daysLeft: 27,
      applicants: {
        total: 73,
        pending: 31,
        interviewed: 28,
        shortlisted: 8
      },
      completionRate: 82,
      avgScore: 87,
      topCandidateScore: 98
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      status: 'paused' as const,
      deadline: 'Jan 10, 2025',
      daysLeft: 35,
      applicants: {
        total: 45,
        pending: 18,
        interviewed: 15,
        shortlisted: 5
      },
      completionRate: 71,
      avgScore: 79,
      topCandidateScore: 91
    },
    {
      id: '5',
      title: 'Product Manager',
      department: 'Product',
      status: 'active' as const,
      deadline: 'Jan 5, 2025',
      daysLeft: 30,
      applicants: {
        total: 112,
        pending: 45,
        interviewed: 38,
        shortlisted: 15
      },
      completionRate: 88,
      avgScore: 85,
      topCandidateScore: 97
    },
    {
      id: '6',
      title: 'Data Scientist',
      department: 'Analytics',
      status: 'active' as const,
      deadline: 'Feb 1, 2025',
      daysLeft: 57,
      applicants: {
        total: 67,
        pending: 29,
        interviewed: 22,
        shortlisted: 9
      },
      completionRate: 76,
      avgScore: 83,
      topCandidateScore: 95
    }
  ];

  const handleViewDetails = (roleId: string) => {
    navigate(`/candidates?role=${roleId}`);
  };

  const filteredRoles = roles.filter(role => {
    const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         role.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || role.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalStats = {
    totalRoles: roles.length,
    activeRoles: roles.filter(r => r.status === 'active').length,
    totalApplicants: roles.reduce((sum, role) => sum + role.applicants.total, 0),
    totalShortlisted: roles.reduce((sum, role) => sum + role.applicants.shortlisted, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Role Management</h1>
                <p className="text-gray-600">Manage and track all your open positions and hiring progress</p>
              </div>
              
              <Link to="/job-upload">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Role
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{totalStats.totalRoles}</CardTitle>
                <CardDescription>Total Roles</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{totalStats.activeRoles}</CardTitle>
                <CardDescription>Active Openings</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{totalStats.totalApplicants}</CardTitle>
                <CardDescription>Total Applicants</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <TrendingUp className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{totalStats.totalShortlisted}</CardTitle>
                <CardDescription>Shortlisted</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search roles or departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filterStatus === 'active' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('active')}
                size="sm"
              >
                Active
              </Button>
              <Button
                variant={filterStatus === 'paused' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('paused')}
                size="sm"
              >
                Paused
              </Button>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredRoles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoleManagement;

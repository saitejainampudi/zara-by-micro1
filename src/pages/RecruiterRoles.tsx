
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Plus, FileText, Users, Calendar, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

const RecruiterRoles = () => {
  const [roles] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      status: "Active",
      applications: 45,
      interviews: 12,
      created: "2024-05-20",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      status: "Active", 
      applications: 28,
      interviews: 8,
      created: "2024-05-18",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Backend Engineer",
      department: "Engineering",
      status: "Draft",
      applications: 0,
      interviews: 0,
      created: "2024-05-22",
      type: "Full-time"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Role Management</h1>
                <p className="text-gray-600">Create and manage your job postings and interview flows</p>
              </div>
              
              <Link to="/job-upload">
                <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Role
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-zara-purple">{roles.length}</CardTitle>
                <CardDescription>Total Roles</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-green-600">{roles.filter(r => r.status === 'Active').length}</CardTitle>
                <CardDescription>Active Roles</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-600">{roles.reduce((sum, r) => sum + r.applications, 0)}</CardTitle>
                <CardDescription>Total Applications</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-orange-600">{roles.reduce((sum, r) => sum + r.interviews, 0)}</CardTitle>
                <CardDescription>Total Interviews</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Roles List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                All Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roles.map((role) => (
                  <div key={role.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                          <Badge variant={role.status === 'Active' ? 'default' : 'secondary'}>
                            {role.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {role.applications} applications
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {role.interviews} interviews
                          </span>
                          <span>Created: {role.created}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
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

export default RecruiterRoles;

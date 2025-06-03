
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Star, Clock, CheckCircle, Filter } from 'lucide-react';

const RecruiterCandidates = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "Senior Frontend Developer",
      score: 94,
      status: "Shortlisted",
      appliedDate: "2024-05-20",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com", 
      role: "Senior Frontend Developer",
      score: 89,
      status: "Interview Scheduled",
      appliedDate: "2024-05-19",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      role: "Product Designer",
      score: 92,
      status: "Under Review",
      appliedDate: "2024-05-18",
      avatar: "/placeholder.svg"
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidate Pipeline</h1>
                <p className="text-gray-600">Review AI assessments and manage your talent pipeline</p>
              </div>
              
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter Candidates
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-600">{candidates.length}</CardTitle>
                <CardDescription>Total Candidates</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-green-600">{candidates.filter(c => c.status === 'Shortlisted').length}</CardTitle>
                <CardDescription>Shortlisted</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-orange-600">{candidates.filter(c => c.status === 'Interview Scheduled').length}</CardTitle>
                <CardDescription>Interviews Scheduled</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-purple-600">{Math.round(candidates.reduce((sum, c) => sum + c.score, 0) / candidates.length)}</CardTitle>
                <CardDescription>Average AI Score</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Candidates List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                All Candidates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={candidate.avatar} />
                          <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                            <Badge variant={
                              candidate.status === 'Shortlisted' ? 'default' :
                              candidate.status === 'Interview Scheduled' ? 'secondary' :
                              'outline'
                            }>
                              {candidate.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <span>{candidate.email}</span>
                            <span>{candidate.role}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Applied: {candidate.appliedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="flex items-center gap-1 text-yellow-500 mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold">{candidate.score}</span>
                          </div>
                          <div className="text-xs text-gray-500">AI Score</div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button size="sm" className="bg-zara-purple hover:bg-zara-purple-dark">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Review
                          </Button>
                        </div>
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

export default RecruiterCandidates;

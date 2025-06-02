
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Download, Star, MapPin, Calendar, Video } from 'lucide-react';

// Expanded candidate data with 20+ candidates
const candidatesData = [
  {
    id: 1,
    name: "Sarah Chen",
    photo: "SC",
    role: "Senior Frontend Developer",
    experience: "6+ years",
    location: "San Francisco, CA",
    email: "sarah.chen@email.com",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    rating: 96,
    status: "shortlisted",
    submittedAt: "2 hours ago",
    hasVideoInterview: true
  },
  {
    id: 2,
    name: "Alex Johnson",
    photo: "AJ",
    role: "Senior Frontend Developer",
    experience: "7+ years",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    skills: ["React", "TypeScript", "Redux", "Next.js"],
    rating: 87,
    status: "interviewed",
    submittedAt: "1 day ago",
    hasVideoInterview: true
  },
  {
    id: 3,
    name: "Maya Rodriguez",
    photo: "MR",
    role: "Machine Learning Engineer",
    experience: "4+ years",
    location: "Austin, TX",
    email: "maya.rodriguez@example.com",
    skills: ["Python", "TensorFlow", "PyTorch", "SQL"],
    rating: 92,
    status: "shortlisted",
    submittedAt: "3 hours ago",
    hasVideoInterview: true
  },
  {
    id: 4,
    name: "David Kim",
    photo: "DK",
    role: "Full Stack Developer",
    experience: "5+ years",
    location: "New York, NY",
    email: "david.kim@example.com",
    skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    rating: 81,
    status: "pending",
    submittedAt: "5 hours ago",
    hasVideoInterview: true
  },
  {
    id: 5,
    name: "Emma Wilson",
    photo: "EW",
    role: "DevOps Engineer",
    experience: "4+ years",
    location: "Chicago, IL",
    email: "emma.wilson@example.com",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    rating: 83,
    status: "interviewed",
    submittedAt: "1 day ago",
    hasVideoInterview: true
  },
  {
    id: 6,
    name: "Rajiv Patel",
    photo: "RP",
    role: "Backend Engineer",
    experience: "8+ years",
    location: "Remote (India)",
    email: "rajiv.patel@example.com",
    skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    rating: 85,
    status: "shortlisted",
    submittedAt: "6 hours ago",
    hasVideoInterview: true
  },
  {
    id: 7,
    name: "Sophie Laurent",
    photo: "SL",
    role: "UI/UX Designer",
    experience: "5+ years",
    location: "Paris, France",
    email: "sophie.laurent@example.com",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    rating: 89,
    status: "interviewed",
    submittedAt: "2 days ago",
    hasVideoInterview: true
  },
  {
    id: 8,
    name: "Michael Brown",
    photo: "MB",
    role: "Data Scientist",
    experience: "6+ years",
    location: "Boston, MA",
    email: "michael.brown@example.com",
    skills: ["Python", "R", "Machine Learning", "Statistics"],
    rating: 88,
    status: "shortlisted",
    submittedAt: "4 hours ago",
    hasVideoInterview: true
  },
  {
    id: 9,
    name: "Lisa Garcia",
    photo: "LG",
    role: "Product Manager",
    experience: "7+ years",
    location: "Los Angeles, CA",
    email: "lisa.garcia@example.com",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    rating: 91,
    status: "interviewed",
    submittedAt: "1 day ago",
    hasVideoInterview: true
  },
  {
    id: 10,
    name: "James Wright",
    photo: "JW",
    role: "Senior Backend Developer",
    experience: "8+ years",
    location: "Seattle, WA",
    email: "james.wright@example.com",
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    rating: 86,
    status: "pending",
    submittedAt: "8 hours ago",
    hasVideoInterview: true
  },
  {
    id: 11,
    name: "Anna Kowalski",
    photo: "AK",
    role: "Frontend Developer",
    experience: "4+ years",
    location: "Warsaw, Poland",
    email: "anna.kowalski@example.com",
    skills: ["Vue.js", "JavaScript", "CSS", "Webpack"],
    rating: 84,
    status: "shortlisted",
    submittedAt: "3 hours ago",
    hasVideoInterview: true
  },
  {
    id: 12,
    name: "Carlos Silva",
    photo: "CS",
    role: "Mobile Developer",
    experience: "5+ years",
    location: "São Paulo, Brazil",
    email: "carlos.silva@example.com",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    rating: 87,
    status: "interviewed",
    submittedAt: "2 days ago",
    hasVideoInterview: true
  },
  {
    id: 13,
    name: "Priya Sharma",
    photo: "PS",
    role: "QA Engineer",
    experience: "6+ years",
    location: "Bangalore, India",
    email: "priya.sharma@example.com",
    skills: ["Selenium", "Cypress", "Jest", "API Testing"],
    rating: 82,
    status: "pending",
    submittedAt: "7 hours ago",
    hasVideoInterview: true
  },
  {
    id: 14,
    name: "Thomas Anderson",
    photo: "TA",
    role: "Cloud Architect",
    experience: "9+ years",
    location: "London, UK",
    email: "thomas.anderson@example.com",
    skills: ["AWS", "Azure", "Terraform", "Kubernetes"],
    rating: 93,
    status: "shortlisted",
    submittedAt: "1 hour ago",
    hasVideoInterview: true
  },
  {
    id: 15,
    name: "Yuki Tanaka",
    photo: "YT",
    role: "AI Engineer",
    experience: "5+ years",
    location: "Tokyo, Japan",
    email: "yuki.tanaka@example.com",
    skills: ["TensorFlow", "PyTorch", "Python", "Computer Vision"],
    rating: 90,
    status: "interviewed",
    submittedAt: "1 day ago",
    hasVideoInterview: true
  },
  {
    id: 16,
    name: "Elena Petrov",
    photo: "EP",
    role: "Cybersecurity Specialist",
    experience: "7+ years",
    location: "Moscow, Russia",
    email: "elena.petrov@example.com",
    skills: ["Penetration Testing", "CISSP", "Python", "Network Security"],
    rating: 85,
    status: "pending",
    submittedAt: "5 hours ago",
    hasVideoInterview: true
  },
  {
    id: 17,
    name: "Oliver Schmidt",
    photo: "OS",
    role: "Blockchain Developer",
    experience: "4+ years",
    location: "Berlin, Germany",
    email: "oliver.schmidt@example.com",
    skills: ["Solidity", "Web3", "Ethereum", "Smart Contracts"],
    rating: 88,
    status: "shortlisted",
    submittedAt: "2 hours ago",
    hasVideoInterview: true
  },
  {
    id: 18,
    name: "Isabella Rodriguez",
    photo: "IR",
    role: "Data Engineer",
    experience: "6+ years",
    location: "Madrid, Spain",
    email: "isabella.rodriguez@example.com",
    skills: ["Apache Spark", "Kafka", "Python", "SQL"],
    rating: 86,
    status: "interviewed",
    submittedAt: "2 days ago",
    hasVideoInterview: true
  },
  {
    id: 19,
    name: "Kevin O'Connor",
    photo: "KO",
    role: "Site Reliability Engineer",
    experience: "7+ years",
    location: "Dublin, Ireland",
    email: "kevin.oconnor@example.com",
    skills: ["Monitoring", "Incident Response", "Go", "Prometheus"],
    rating: 84,
    status: "pending",
    submittedAt: "6 hours ago",
    hasVideoInterview: true
  },
  {
    id: 20,
    name: "Fatima Al-Zahra",
    photo: "FZ",
    role: "Technical Writer",
    experience: "5+ years",
    location: "Dubai, UAE",
    email: "fatima.alzahra@example.com",
    skills: ["Technical Documentation", "API Docs", "Markdown", "Git"],
    rating: 83,
    status: "shortlisted",
    submittedAt: "4 hours ago",
    hasVideoInterview: true
  }
];

const CandidatesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredCandidates = candidatesData.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || candidate.status === statusFilter;
    const matchesRole = roleFilter === 'all' || candidate.role.includes(roleFilter);
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted': return 'bg-green-100 text-green-700 border-green-200';
      case 'interviewed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-green-500';
    if (rating >= 80) return 'bg-blue-500';
    if (rating >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidates</h1>
            <p className="text-gray-600">Review and manage candidate applications</p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search candidates by name, role, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interviewed">Interviewed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Full Stack">Full Stack</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Data">Data</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredCandidates.length} of {candidatesData.length} candidates
            </p>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Results
            </Button>
          </div>

          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white font-bold">
                        {candidate.photo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{candidate.name}</h3>
                        <p className="text-gray-600 text-sm">{candidate.role}</p>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${getRatingColor(candidate.rating)}`}>
                      {candidate.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    {candidate.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    Submitted {candidate.submittedAt}
                  </div>

                  {candidate.hasVideoInterview && (
                    <div className="flex items-center gap-2 text-blue-600 text-sm">
                      <Video className="w-4 h-4" />
                      Video interview available
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{candidate.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Badge className={getStatusColor(candidate.status)}>
                      {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                    </Badge>
                    <Link to={`/candidate-profile/${candidate.id}`}>
                      <Button size="sm" className="bg-zara-purple hover:bg-zara-purple-dark">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCandidates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No candidates found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidatesList;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock candidate data
const candidatesData = [
  {
    id: 1,
    name: "Alex Johnson",
    photo: "AJ",
    role: "Senior Frontend Developer",
    experience: "7 years",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Redux", "People Management"],
    salary: {
      monthly: "$12,500",
      hourly: "$72"
    },
    note: "Enhanced AI start-ups at EndlessLabs, boosted investor interest by 25%. Master's in Computer Science.",
    education: "Stanford University",
    highlights: ["AI Engineering", "Top Company Experience"],
    rating: 87,
    interviewDate: "2023-05-12"
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    photo: "MR",
    role: "Machine Learning Engineer",
    experience: "4 years",
    location: "Austin, TX",
    skills: ["Python", "TensorFlow", "Data Structures", "Algorithm Optimization"],
    salary: {
      monthly: "$14,200",
      hourly: "$82"
    },
    note: "Led team that improved recommendation algorithms by 37%. PhD in Machine Learning.",
    education: "MIT",
    highlights: ["Research Publication", "Patent Holder"],
    rating: 92,
    interviewDate: "2023-05-15"
  },
  {
    id: 3,
    name: "David Kim",
    photo: "DK",
    role: "Full Stack Developer",
    experience: "5 years",
    location: "New York, NY",
    skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    salary: {
      monthly: "$11,800",
      hourly: "$68"
    },
    note: "Architected scalable solutions for fintech startups. Bachelor's in Computer Engineering.",
    education: "Cornell University",
    highlights: ["System Architecture", "Startup Experience"],
    rating: 81,
    interviewDate: "2023-05-14"
  },
  {
    id: 4,
    name: "Sophia Chang",
    photo: "SC",
    role: "UI/UX Designer & Developer",
    experience: "6 years",
    location: "Seattle, WA",
    skills: ["UI Design", "User Research", "React Native", "Adobe Suite"],
    salary: {
      monthly: "$10,500",
      hourly: "$61"
    },
    note: "Created award-winning interfaces for health tech applications. Master's in HCI.",
    education: "University of Washington",
    highlights: ["Award-winning Design", "Mobile Expertise"],
    rating: 89,
    interviewDate: "2023-05-10"
  },
  {
    id: 5,
    name: "Rajiv Patel",
    photo: "RP",
    role: "Backend Engineer",
    experience: "8 years",
    location: "Remote (India)",
    skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    salary: {
      monthly: "$9,200",
      hourly: "$53"
    },
    note: "Scaled systems to handle 10M+ daily users. Bachelor's in Computer Science.",
    education: "Indian Institute of Technology",
    highlights: ["System Scaling", "Cloud Architecture"],
    rating: 85,
    interviewDate: "2023-05-16"
  },
  {
    id: 6,
    name: "Emma Wilson",
    photo: "EW",
    role: "DevOps Engineer",
    experience: "4 years",
    location: "Chicago, IL",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    salary: {
      monthly: "$11,000",
      hourly: "$63"
    },
    note: "Reduced deployment times by 78% and infrastructure costs by 35%.",
    education: "University of Illinois",
    highlights: ["Infrastructure Optimization", "Cost Reduction"],
    rating: 83,
    interviewDate: "2023-05-18"
  }
];

const CandidatesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCandidates(candidatesData);
      return;
    }

    const lowercaseQuery = searchQuery.toLowerCase();
    const filtered = candidatesData.filter(candidate => {
      return (
        candidate.name.toLowerCase().includes(lowercaseQuery) ||
        candidate.role.toLowerCase().includes(lowercaseQuery) ||
        candidate.experience.toLowerCase().includes(lowercaseQuery) ||
        candidate.location.toLowerCase().includes(lowercaseQuery) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
        candidate.note.toLowerCase().includes(lowercaseQuery)
      );
    });

    setFilteredCandidates(filtered);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Available Candidates</h1>
              <p className="text-gray-600">Pre-qualified candidates for your open positions</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/dashboard">
                <Button className="bg-zara-purple hover:bg-zara-purple-dark">View Dashboard</Button>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-400" />
              </div>
              <Input
                className="pl-10 py-6 bg-white rounded-xl shadow-sm text-base"
                placeholder="Search by skills, role, experience or traits (e.g., 'React Developer with 4 years startup experience')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <Link to={`/candidate/${candidate.id}`} key={candidate.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-bold text-xl mr-4">
                        {candidate.photo}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{candidate.name}</h3>
                        <p className="text-zara-purple font-medium">{candidate.role}</p>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <span>{candidate.experience}</span>
                          <span className="mx-2">•</span>
                          <span>{candidate.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-zara-purple-light text-zara-purple-dark border-0">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 3 && (
                          <Badge variant="outline" className="bg-gray-100 text-gray-600 border-0">
                            +{candidate.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Monthly</p>
                          <p className="font-medium">{candidate.salary.monthly}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Hourly</p>
                          <p className="font-medium">{candidate.salary.hourly}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 line-clamp-2">{candidate.note}</p>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                          candidate.rating >= 85 ? 'bg-green-500' : 
                          candidate.rating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                        }`}>
                          {candidate.rating}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">AI Rating</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-zara-purple hover:bg-zara-purple-light">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredCandidates.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-lg text-gray-600">No candidates found matching your search criteria.</p>
              <p className="mt-2 text-gray-500">Try adjusting your search terms or browse all candidates.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidatesList;

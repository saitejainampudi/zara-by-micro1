import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Mock candidate data
const candidatesData = [
  {
    id: 1,
    name: "Alex Johnson",
    photo: "AJ",
    role: "Senior Frontend Developer",
    experience: "7 years",
    location: "San Francisco, CA",
    locationType: "On-site",
    skills: ["React", "TypeScript", "Redux", "People Management"],
    category: "Technical",
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
    location: "Remote",
    locationType: "Remote",
    skills: ["Python", "TensorFlow", "Data Structures", "Algorithm Optimization"],
    category: "Technical",
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
    locationType: "Hybrid",
    skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    category: "Technical",
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
    locationType: "On-site",
    skills: ["UI Design", "User Research", "React Native", "Adobe Suite"],
    category: "Technical",
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
    locationType: "Remote",
    skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    category: "Technical",
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
    locationType: "Hybrid",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    category: "Technical",
    salary: {
      monthly: "$11,000",
      hourly: "$63"
    },
    note: "Reduced deployment times by 78% and infrastructure costs by 35%.",
    education: "University of Illinois",
    highlights: ["Infrastructure Optimization", "Cost Reduction"],
    rating: 83,
    interviewDate: "2023-05-18"
  },
  {
    id: 7,
    name: "Sarah Miller",
    photo: "SM",
    role: "Technical Project Manager",
    experience: "9 years",
    location: "Boston, MA",
    locationType: "On-site",
    skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
    category: "Non-Technical",
    salary: {
      monthly: "$12,800",
      hourly: "$74"
    },
    note: "Successfully delivered 25+ enterprise projects with average 15% under budget.",
    education: "Boston University",
    highlights: ["Team Leadership", "Budget Management"],
    rating: 90,
    interviewDate: "2023-05-20"
  },
  {
    id: 8,
    name: "Akash Sharma",
    photo: "AS",
    role: "iOS Developer",
    experience: "6 years",
    location: "Remote (India)",
    locationType: "Remote",
    skills: ["Swift", "SwiftUI", "Objective-C", "Mobile Architecture"],
    category: "Technical",
    salary: {
      monthly: "$10,000",
      hourly: "$58"
    },
    note: "Created top-rated finance app with 4.8/5 rating. Bachelor's in Mobile Computing.",
    education: "Delhi Technological University",
    highlights: ["Mobile Development", "App Store Success"],
    rating: 88,
    interviewDate: "2023-05-22"
  },
  {
    id: 9,
    name: "Miguel Gonzalez",
    photo: "MG",
    role: "Data Scientist",
    experience: "5 years",
    location: "Remote (Spain)",
    locationType: "Remote",
    skills: ["Python", "R", "Machine Learning", "Statistical Analysis"],
    category: "Technical",
    salary: {
      monthly: "$11,500",
      hourly: "$66"
    },
    note: "Implemented predictive models that increased conversion rates by 42%. PhD in Statistics.",
    education: "University of Barcelona",
    highlights: ["Predictive Modeling", "NLP Specialist"],
    rating: 91,
    interviewDate: "2023-05-25"
  },
  {
    id: 10,
    name: "Priya Desai",
    photo: "PD",
    role: "Product Manager",
    experience: "7 years",
    location: "London, UK",
    locationType: "Hybrid",
    skills: ["Product Strategy", "User Research", "Agile", "Roadmap Planning"],
    category: "Non-Technical",
    salary: {
      monthly: "$13,800",
      hourly: "$80"
    },
    note: "Led product teams at two successful fintech startups. MBA from London Business School.",
    education: "London Business School",
    highlights: ["Product Strategy", "Fintech Expertise"],
    rating: 89,
    interviewDate: "2023-05-27"
  },
  {
    id: 11,
    name: "Jamal Williams",
    photo: "JW",
    role: "Security Engineer",
    experience: "8 years",
    location: "Austin, TX",
    locationType: "On-site",
    skills: ["Penetration Testing", "Security Auditing", "Encryption", "Compliance"],
    category: "Technical",
    salary: {
      monthly: "$14,500",
      hourly: "$84"
    },
    note: "Protected enterprise systems from advanced threats. CISSP certified.",
    education: "Georgia Tech",
    highlights: ["Security Specialist", "Compliance Expert"],
    rating: 94,
    interviewDate: "2023-06-01"
  },
  {
    id: 12,
    name: "Olivia Chen",
    photo: "OC",
    role: "Android Developer",
    experience: "4 years",
    location: "Toronto, Canada",
    locationType: "Remote",
    skills: ["Kotlin", "Java", "Android SDK", "Material Design"],
    category: "Technical",
    salary: {
      monthly: "$10,800",
      hourly: "$62"
    },
    note: "Rebuilt legacy app, increasing user retention by 65%. Master's in Computer Engineering.",
    education: "University of Toronto",
    highlights: ["Android Expert", "Performance Optimization"],
    rating: 86,
    interviewDate: "2023-06-03"
  },
  {
    id: 13,
    name: "Lars Nielsen",
    photo: "LN",
    role: "Cloud Architect",
    experience: "9 years",
    location: "Copenhagen, Denmark",
    locationType: "Remote",
    skills: ["AWS", "Azure", "GCP", "Serverless Architecture"],
    category: "Technical",
    salary: {
      monthly: "$15,200",
      hourly: "$88"
    },
    note: "Designed cloud infrastructure that reduced costs by 40%. Multiple AWS certifications.",
    education: "Technical University of Denmark",
    highlights: ["Multi-cloud Expert", "Cost Optimization"],
    rating: 93,
    interviewDate: "2023-06-05"
  },
  {
    id: 14,
    name: "Neha Kapoor",
    photo: "NK",
    role: "QA Automation Engineer",
    experience: "6 years",
    location: "Bangalore, India",
    locationType: "Remote",
    skills: ["Selenium", "Cypress", "Testing Frameworks", "CI/CD"],
    category: "Technical",
    salary: {
      monthly: "$8,800",
      hourly: "$51"
    },
    note: "Implemented test automation that reduced QA time by 70%. Bachelor's in Computer Science.",
    education: "Bangalore Institute of Technology",
    highlights: ["Test Automation", "Quality Processes"],
    rating: 84,
    interviewDate: "2023-06-07"
  }
];

const CandidatesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);
  const [filters, setFilters] = useState({
    location: {
      remote: false,
      onsite: false,
      hybrid: false
    },
    category: {
      technical: false,
      nonTechnical: false
    },
    experience: {
      junior: false,
      mid: false,
      senior: false
    }
  });

  useEffect(() => {
    filterCandidates();
  }, [searchQuery, filters]);

  const filterCandidates = () => {
    let results = candidatesData;
    
    // Apply search query
    if (searchQuery.trim()) {
      const lowercaseQuery = searchQuery.toLowerCase();
      results = results.filter(candidate => {
        return (
          candidate.name.toLowerCase().includes(lowercaseQuery) ||
          candidate.role.toLowerCase().includes(lowercaseQuery) ||
          candidate.experience.toLowerCase().includes(lowercaseQuery) ||
          candidate.location.toLowerCase().includes(lowercaseQuery) ||
          candidate.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
          candidate.note.toLowerCase().includes(lowercaseQuery)
        );
      });
    }
    
    // Apply location filters
    if (filters.location.remote || filters.location.onsite || filters.location.hybrid) {
      results = results.filter(candidate => {
        if (filters.location.remote && candidate.locationType === "Remote") return true;
        if (filters.location.onsite && candidate.locationType === "On-site") return true;
        if (filters.location.hybrid && candidate.locationType === "Hybrid") return true;
        return false;
      });
    }
    
    // Apply category filters
    if (filters.category.technical || filters.category.nonTechnical) {
      results = results.filter(candidate => {
        if (filters.category.technical && candidate.category === "Technical") return true;
        if (filters.category.nonTechnical && candidate.category === "Non-Technical") return true;
        return false;
      });
    }
    
    // Apply experience filters
    if (filters.experience.junior || filters.experience.mid || filters.experience.senior) {
      results = results.filter(candidate => {
        const years = parseInt(candidate.experience);
        if (filters.experience.junior && years < 3) return true;
        if (filters.experience.mid && years >= 3 && years < 6) return true;
        if (filters.experience.senior && years >= 6) return true;
        return false;
      });
    }
    
    setFilteredCandidates(results);
  };

  const handleFilterChange = (category, key) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key]
      }
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: {
        remote: false,
        onsite: false,
        hybrid: false
      },
      category: {
        technical: false,
        nonTechnical: false
      },
      experience: {
        junior: false,
        mid: false,
        senior: false
      }
    });
  };

  const isAnyFilterActive = () => {
    return Object.values(filters).some(category => 
      Object.values(category).some(value => value === true)
    );
  };

  return (
    <div className="min-h-screen bg-[#DBDAF5]">
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
          
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
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
            
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-white">
                    <Filter size={16} />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                    {isAnyFilterActive() && (
                      <Badge className="ml-1 bg-zara-purple py-0 px-1.5 text-xs">
                        {Object.values(filters).reduce((acc, category) => 
                          acc + Object.values(category).filter(Boolean).length, 0
                        )}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Location Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="remote" 
                            checked={filters.location.remote} 
                            onCheckedChange={() => handleFilterChange('location', 'remote')} 
                          />
                          <Label htmlFor="remote">Remote</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="onsite" 
                            checked={filters.location.onsite} 
                            onCheckedChange={() => handleFilterChange('location', 'onsite')} 
                          />
                          <Label htmlFor="onsite">On-site</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="hybrid" 
                            checked={filters.location.hybrid} 
                            onCheckedChange={() => handleFilterChange('location', 'hybrid')} 
                          />
                          <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Category</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="technical" 
                            checked={filters.category.technical} 
                            onCheckedChange={() => handleFilterChange('category', 'technical')} 
                          />
                          <Label htmlFor="technical">Technical</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="non-technical" 
                            checked={filters.category.nonTechnical} 
                            onCheckedChange={() => handleFilterChange('category', 'nonTechnical')} 
                          />
                          <Label htmlFor="non-technical">Non-Technical</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Experience Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="junior" 
                            checked={filters.experience.junior} 
                            onCheckedChange={() => handleFilterChange('experience', 'junior')} 
                          />
                          <Label htmlFor="junior">Junior (0-2 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="mid" 
                            checked={filters.experience.mid} 
                            onCheckedChange={() => handleFilterChange('experience', 'mid')} 
                          />
                          <Label htmlFor="mid">Mid-level (3-5 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="senior" 
                            checked={filters.experience.senior} 
                            onCheckedChange={() => handleFilterChange('experience', 'senior')} 
                          />
                          <Label htmlFor="senior">Senior (6+ years)</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <Button variant="outline" className="w-full" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Active Filters Display */}
          {isAnyFilterActive() && (
            <div className="mb-6 flex flex-wrap gap-2">
              {Object.entries(filters).map(([category, values]) => 
                Object.entries(values).map(([key, isActive]) => 
                  isActive && (
                    <Badge 
                      key={`${category}-${key}`} 
                      variant="secondary" 
                      className="px-3 py-1 flex items-center gap-1 bg-white"
                    >
                      {key === 'nonTechnical' ? 'Non-Technical' : key.charAt(0).toUpperCase() + key.slice(1)}
                      <button 
                        onClick={() => handleFilterChange(category, key)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </Badge>
                  )
                )
              )}
              <Button 
                variant="ghost" 
                className="text-sm h-7 px-2 text-gray-500" 
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
          )}
          
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
              <p className="mt-2 text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidatesList;

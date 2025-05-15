
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Expanded mock candidate data with complete profiles
const candidatesData = [
  {
    id: 1,
    name: "Alex Johnson",
    photo: "AJ",
    role: "Senior Frontend Developer",
    experience: "7 years",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/alexjohnson",
    skills: ["React", "TypeScript", "Redux", "People Management", "Next.js", "Testing (Jest/RTL)", "GraphQL"],
    salary: {
      monthly: "$12,500",
      hourly: "$72"
    },
    note: "Enhanced AI start-ups at EndlessLabs, boosted investor interest by 25%. Master's in Computer Science.",
    education: "Stanford University - M.S. Computer Science",
    highlights: ["AI Engineering", "Top Company Experience"],
    rating: 87,
    interviewDate: "May 12, 2023",
    about: "Passionate frontend developer with 7+ years of experience building scalable web applications. Specialized in React ecosystem and modern JavaScript. I've led teams of up to 8 developers and mentored junior engineers. My focus is on creating exceptional user experiences with clean, maintainable code.",
    experience: [
      {
        company: "EndlessLabs AI",
        role: "Senior Frontend Engineer",
        period: "2020 - Present",
        description: "Lead the development of AI-powered analytics dashboard using React, TypeScript and GraphQL. Improved investor demos resulting in 25% increase in funding."
      },
      {
        company: "TechCorp Inc.",
        role: "Frontend Developer",
        period: "2017 - 2020",
        description: "Developed responsive web applications for enterprise clients. Introduced TypeScript and testing practices that reduced bugs by 40%."
      },
      {
        company: "StartupXYZ",
        role: "Junior Developer",
        period: "2015 - 2017",
        description: "Full-stack development with focus on frontend using React and Redux."
      }
    ],
    proctoring: {
      score: 77,
      violations: [
        "The candidate looked away from the screen 1 time, for a significant duration."
      ]
    },
    codingRating: 89,
    problemSolvingRating: 85,
    communicationRating: 91,
    technicalKnowledgeRating: 88,
    videoUrl: "https://example.com/interview/alex-johnson"
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    photo: "MR",
    role: "Machine Learning Engineer",
    experience: "4 years",
    location: "Austin, TX",
    email: "maya.rodriguez@example.com",
    phone: "+1 (555) 234-5678",
    linkedin: "linkedin.com/in/mayarodriguez",
    skills: ["Python", "TensorFlow", "Data Structures", "Algorithm Optimization", "PyTorch", "SQL", "Cloud ML"],
    salary: {
      monthly: "$14,200",
      hourly: "$82"
    },
    note: "Led team that improved recommendation algorithms by 37%. PhD in Machine Learning.",
    education: "MIT - Ph.D. Machine Learning",
    highlights: ["Research Publication", "Patent Holder"],
    rating: 92,
    interviewDate: "May 15, 2023",
    about: "Machine learning engineer with a PhD from MIT and 4 years of industry experience. Published researcher in neural networks with 2 patents. Passionate about solving real-world problems through applied AI and optimizing algorithmic efficiency.",
    experience: [
      {
        company: "AI Solutions Inc.",
        role: "Senior ML Engineer",
        period: "2021 - Present",
        description: "Lead ML engineer for recommendation engine team. Improved algorithm performance by 37%, resulting in $4.2M annual revenue increase."
      },
      {
        company: "DataTech",
        role: "ML Engineer",
        period: "2019 - 2021",
        description: "Developed and deployed NLP models for content classification with 94% accuracy."
      },
      {
        company: "MIT Research Lab",
        role: "Research Assistant",
        period: "2016 - 2019",
        description: "Conducted research in deep learning architectures, resulting in 2 publications and 1 patent."
      }
    ],
    proctoring: {
      score: 92,
      violations: []
    },
    codingRating: 87,
    problemSolvingRating: 94,
    communicationRating: 88,
    technicalKnowledgeRating: 95,
    videoUrl: "https://example.com/interview/maya-rodriguez"
  },
  {
    id: 3,
    name: "David Kim",
    photo: "DK",
    role: "Full Stack Developer",
    experience: "5 years",
    location: "New York, NY",
    email: "david.kim@example.com",
    phone: "+1 (555) 345-6789",
    linkedin: "linkedin.com/in/davidkim",
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express", "AWS", "Docker"],
    salary: {
      monthly: "$11,800",
      hourly: "$68"
    },
    note: "Architected scalable solutions for fintech startups. Bachelor's in Computer Engineering.",
    education: "Cornell University - B.S. Computer Engineering",
    highlights: ["System Architecture", "Startup Experience"],
    rating: 81,
    interviewDate: "May 14, 2023",
    about: "Full stack developer with a special focus on financial technology solutions. Experienced in building secure, scalable applications with modern tech stacks. Passionate about clean code architecture and microservices design.",
    experience: [
      {
        company: "FinTech Now",
        role: "Senior Full Stack Developer",
        period: "2021 - Present",
        description: "Lead developer for payment processing platform. Architected microservice solution handling $35M in monthly transactions."
      },
      {
        company: "WebDev Agency",
        role: "Full Stack Developer",
        period: "2018 - 2021",
        description: "Developed custom web applications for clients across various industries using the MERN stack."
      },
      {
        company: "TechStart Inc.",
        role: "Junior Developer",
        period: "2016 - 2018",
        description: "Frontend development with React and integration with RESTful APIs."
      }
    ],
    proctoring: {
      score: 81,
      violations: [
        "The candidate had brief tab switches 2 times during the technical section."
      ]
    },
    codingRating: 83,
    problemSolvingRating: 80,
    communicationRating: 85,
    technicalKnowledgeRating: 79,
    videoUrl: "https://example.com/interview/david-kim"
  },
  {
    id: 4,
    name: "Sophia Chang",
    photo: "SC",
    role: "UI/UX Designer & Developer",
    experience: "6 years",
    location: "Seattle, WA",
    email: "sophia.chang@example.com",
    phone: "+1 (555) 456-7890",
    linkedin: "linkedin.com/in/sophiachang",
    skills: ["UI Design", "User Research", "React Native", "Adobe Suite", "Figma", "Prototyping", "Design Systems"],
    salary: {
      monthly: "$10,500",
      hourly: "$61"
    },
    note: "Created award-winning interfaces for health tech applications. Master's in HCI.",
    education: "University of Washington - M.S. Human-Computer Interaction",
    highlights: ["Award-winning Design", "Mobile Expertise"],
    rating: 89,
    interviewDate: "May 10, 2023",
    about: "UI/UX designer and developer with expertise in creating intuitive, accessible digital experiences. My background combines formal design education with frontend development skills, allowing me to bridge the gap between design and implementation.",
    experience: [
      {
        company: "HealthTech Innovations",
        role: "Senior UI/UX Designer",
        period: "2020 - Present",
        description: "Lead designer for patient-facing mobile applications. Award-winning interface reduced task completion time by 42% and increased user satisfaction."
      },
      {
        company: "Design Agency Co.",
        role: "UI Developer",
        period: "2018 - 2020",
        description: "Created responsive interfaces and design systems for enterprise clients using React and React Native."
      },
      {
        company: "Creative Solutions",
        role: "Junior Designer",
        period: "2016 - 2018",
        description: "UI design for web applications and marketing materials."
      }
    ],
    proctoring: {
      score: 89,
      violations: [
        "The candidate had brief background noise during one response."
      ]
    },
    codingRating: 82,
    problemSolvingRating: 88,
    communicationRating: 93,
    technicalKnowledgeRating: 87,
    videoUrl: "https://example.com/interview/sophia-chang"
  },
  {
    id: 5,
    name: "Rajiv Patel",
    photo: "RP",
    role: "Backend Engineer",
    experience: "8 years",
    location: "Remote (India)",
    email: "rajiv.patel@example.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/rajivpatel",
    skills: ["Java", "Spring Boot", "AWS", "Microservices", "Kafka", "Docker", "Kubernetes"],
    salary: {
      monthly: "$9,200",
      hourly: "$53"
    },
    note: "Scaled systems to handle 10M+ daily users. Bachelor's in Computer Science.",
    education: "Indian Institute of Technology - B.Tech Computer Science",
    highlights: ["System Scaling", "Cloud Architecture"],
    rating: 85,
    interviewDate: "May 16, 2023",
    about: "Experienced backend engineer specialized in high-scale distributed systems. Expert in Java/Spring ecosystem with strong focus on cloud-native architectures. I enjoy solving complex performance challenges and building robust, scalable services.",
    experience: [
      {
        company: "Global Tech Solutions",
        role: "Senior Backend Engineer",
        period: "2019 - Present",
        description: "Architected microservices platform handling 10M+ daily users. Reduced cloud infrastructure costs by 28% through optimization."
      },
      {
        company: "Software Systems Ltd.",
        role: "Backend Developer",
        period: "2016 - 2019",
        description: "Developed and maintained Java-based backend services for financial clients."
      },
      {
        company: "Tech Startup",
        role: "Software Engineer",
        period: "2014 - 2016",
        description: "Full stack development with focus on Java backends and RESTful APIs."
      }
    ],
    proctoring: {
      score: 85,
      violations: [
        "The candidate had brief connectivity issues during one question."
      ]
    },
    codingRating: 88,
    problemSolvingRating: 86,
    communicationRating: 82,
    technicalKnowledgeRating: 90,
    videoUrl: "https://example.com/interview/rajiv-patel"
  },
  {
    id: 6,
    name: "Emma Wilson",
    photo: "EW",
    role: "DevOps Engineer",
    experience: "4 years",
    location: "Chicago, IL",
    email: "emma.wilson@example.com",
    phone: "+1 (555) 567-8901",
    linkedin: "linkedin.com/in/emmawilson",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "AWS", "Monitoring", "Security"],
    salary: {
      monthly: "$11,000",
      hourly: "$63"
    },
    note: "Reduced deployment times by 78% and infrastructure costs by 35%.",
    education: "University of Illinois - B.S. Computer Science",
    highlights: ["Infrastructure Optimization", "Cost Reduction"],
    rating: 83,
    interviewDate: "May 18, 2023",
    about: "DevOps engineer focused on automation, infrastructure as code, and CI/CD pipelines. I'm passionate about building reliable systems that enable developer productivity while maintaining security and cost-efficiency.",
    experience: [
      {
        company: "Cloud Tech Inc.",
        role: "Senior DevOps Engineer",
        period: "2021 - Present",
        description: "Lead DevOps engineer for SaaS platform. Reduced deployment time by 78% and cut infrastructure costs by 35% through automation and optimization."
      },
      {
        company: "Enterprise Solutions",
        role: "Cloud Engineer",
        period: "2019 - 2021",
        description: "Managed AWS infrastructure and implemented CI/CD pipelines for enterprise applications."
      },
      {
        company: "Tech Systems",
        role: "System Administrator",
        period: "2017 - 2019",
        description: "Maintained Linux servers and began transition to containerized applications."
      }
    ],
    proctoring: {
      score: 83,
      violations: [
        "The candidate had someone briefly enter the room once during the interview."
      ]
    },
    codingRating: 80,
    problemSolvingRating: 84,
    communicationRating: 85,
    technicalKnowledgeRating: 86,
    videoUrl: "https://example.com/interview/emma-wilson"
  }
];

const CandidateProfile = () => {
  const { id } = useParams();
  const candidateId = parseInt(id || "1");
  
  // Find the candidate based on the ID
  const candidate = candidatesData.find(c => c.id === candidateId) || candidatesData[0];

  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Link to="/candidates" className="text-zara-purple hover:underline">
              ← Back to candidates
            </Link>
          </div>
          
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-20 h-20 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-bold text-2xl mr-6 mb-4 md:mb-0">
                  {candidate.photo}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold">{candidate.name}</h1>
                      <p className="text-zara-purple font-medium text-lg">{candidate.role}</p>
                      <div className="flex items-center mt-1 text-gray-600">
                        <span>{candidate.experience}</span>
                        <span className="mx-2">•</span>
                        <span>{candidate.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg ${
                        candidate.rating >= 85 ? 'bg-green-500' : 
                        candidate.rating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {candidate.rating}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">AI Rating</p>
                        <p className="text-sm text-gray-500">Overall score</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {candidate.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-zara-purple-light text-zara-purple-dark border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500">Contact Email</p>
                      <p className="font-medium">{candidate.email}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{candidate.phone}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-medium">{candidate.linkedin}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                      Schedule Interview
                    </Button>
                    <Button variant="outline" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                      Download Resume
                    </Button>
                    <Button variant="outline" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                      Share Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Interview Results */}
              <Card className="mb-6 border-gray-200">
                <CardHeader>
                  <CardTitle>AI Interview Results</CardTitle>
                  <p className="text-sm text-gray-500">Interview completed on {candidate.interviewDate}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium ${
                        candidate.codingRating >= 85 ? 'bg-green-500' : 
                        candidate.codingRating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {candidate.codingRating}
                      </div>
                      <p className="mt-2 text-sm font-medium">Coding</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium ${
                        candidate.problemSolvingRating >= 85 ? 'bg-green-500' : 
                        candidate.problemSolvingRating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {candidate.problemSolvingRating}
                      </div>
                      <p className="mt-2 text-sm font-medium">Problem Solving</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium ${
                        candidate.communicationRating >= 85 ? 'bg-green-500' : 
                        candidate.communicationRating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {candidate.communicationRating}
                      </div>
                      <p className="mt-2 text-sm font-medium">Communication</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium ${
                        candidate.technicalKnowledgeRating >= 85 ? 'bg-green-500' : 
                        candidate.technicalKnowledgeRating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {candidate.technicalKnowledgeRating}
                      </div>
                      <p className="mt-2 text-sm font-medium">Technical Knowledge</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium mb-4">Proctoring Results</h3>
                    <div className="p-4 bg-gray-50 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Proctoring Score:</p>
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                            candidate.proctoring.score >= 85 ? 'bg-green-500' : 
                            candidate.proctoring.score >= 70 ? 'bg-amber-500' : 'bg-red-500'
                          }`}>
                            {candidate.proctoring.score}%
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        This score is between 0 & 100% which is calculated using the duration of the violations 
                        that relate to cheating. For example, tab movements, eye movements, and more. The higher the score, the better.
                      </p>
                      
                      {candidate.proctoring.violations.length > 0 ? (
                        <div>
                          <p className="font-medium text-sm mb-2">Violations:</p>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {candidate.proctoring.violations.map((violation, index) => (
                              <li key={index}>{violation}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-sm text-green-600">No violations detected during the interview.</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium mb-4">Interview Recording</h3>
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <p className="text-gray-600 mb-4">Interview recording available</p>
                        <Button variant="outline" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                          Play Interview
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* About Section */}
              <Card className="mb-6 border-gray-200">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {candidate.about}
                  </p>
                </CardContent>
              </Card>
              
              {/* Experience Section */}
              <Card className="mb-6 border-gray-200">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  {candidate.experience.map((exp, index) => (
                    <div key={index} className={`${index > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="font-medium text-lg">{exp.company}</h4>
                          <p className="text-zara-purple">{exp.role}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</p>
                      </div>
                      <p className="mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              {/* Candidate Summary */}
              <Card className="mb-6 border-gray-200">
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">{candidate.education}</p>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-500">Salary Expectation</p>
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <p className="font-medium">{candidate.salary.monthly}</p>
                        <p className="text-xs text-gray-500">Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{candidate.salary.hourly}</p>
                        <p className="text-xs text-gray-500">Hourly</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-500">Key Highlights</p>
                    <ul className="mt-2 space-y-1">
                      {candidate.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-zara-purple rounded-full mr-2"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Note</p>
                    <p className="mt-1">{candidate.note}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Similar Candidates */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Similar Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {candidatesData
                      .filter(c => c.id !== candidateId)
                      .slice(0, 3)
                      .map((c) => (
                        <Link to={`/candidate/${c.id}`} key={c.id}>
                          <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-10 h-10 rounded-full bg-zara-purple-light flex items-center justify-center text-zara-purple font-bold mr-3">
                              {c.photo}
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium">{c.name}</p>
                              <p className="text-sm text-gray-600">{c.role}</p>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                              c.rating >= 85 ? 'bg-green-500' : 
                              c.rating >= 70 ? 'bg-amber-500' : 'bg-red-500'
                            }`}>
                              {c.rating}
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidateProfile;

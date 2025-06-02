
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Quote, Award, TrendingUp, Users, Building, Clock, Video } from 'lucide-react';

const SuccessStoriesPage = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      image: "/placeholder.svg",
      quote: "Zara's AI interview process was incredibly smooth and fair. I felt like I could showcase my real skills without the pressure of traditional interviews.",
      metrics: {
        hireTime: "3 days",
        improvement: "75% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "2:45"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Full Stack Engineer",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      quote: "The technical assessment was challenging but fair. Zara identified my strengths perfectly and matched me with the right role.",
      metrics: {
        hireTime: "2 days",
        improvement: "80% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "3:12"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Designer",
      company: "DesignCo",
      image: "/placeholder.svg",
      quote: "As someone who gets nervous in traditional interviews, Zara's AI-powered process allowed me to present my best self. The portfolio review was thorough and insightful.",
      metrics: {
        hireTime: "4 days",
        improvement: "70% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "2:58"
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Data Scientist",
      company: "AI Innovations",
      image: "/placeholder.svg",
      quote: "The AI interview process was comprehensive yet efficient. It evaluated both my technical skills and problem-solving approach perfectly.",
      metrics: {
        hireTime: "5 days",
        improvement: "65% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "3:24"
    },
    {
      id: 5,
      name: "Jessica Park",
      role: "DevOps Engineer",
      company: "CloudTech",
      image: "/placeholder.svg",
      quote: "Zara understood my technical expertise and soft skills better than any human interviewer I've encountered. The process was transparent and engaging.",
      metrics: {
        hireTime: "3 days",
        improvement: "78% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "2:37"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Security Engineer",
      company: "SecureTech",
      image: "/placeholder.svg",
      quote: "The assessment covered all aspects of cybersecurity knowledge I needed to demonstrate. Zara's evaluation was spot-on and led to my dream job.",
      metrics: {
        hireTime: "4 days",
        improvement: "72% faster",
        satisfaction: 5
      },
      videoThumbnail: "/placeholder.svg",
      videoDuration: "3:05"
    }
  ];

  const companyMetrics = [
    {
      company: "TechCorp Inc.",
      logo: "/placeholder.svg",
      timeToHire: "3.2 days",
      qualityScore: "96%",
      retention: "98%",
      hires: 245
    },
    {
      company: "StartupXYZ", 
      logo: "/placeholder.svg",
      timeToHire: "2.8 days",
      qualityScore: "94%",
      retention: "97%",
      hires: 89
    },
    {
      company: "DesignCo",
      logo: "/placeholder.svg", 
      timeToHire: "4.1 days",
      qualityScore: "95%",
      retention: "99%",
      hires: 67
    },
    {
      company: "AI Innovations",
      logo: "/placeholder.svg",
      timeToHire: "3.5 days", 
      qualityScore: "97%",
      retention: "96%",
      hires: 134
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Zara has transformed the hiring journey for thousands of candidates and hundreds of companies worldwide.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-zara-purple mb-2">10K+</div>
                <div className="text-gray-600 font-medium">Successful Hires</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.2</div>
                <div className="text-gray-600 font-medium">Avg Days to Hire</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                <div className="text-gray-600 font-medium">Quality Score</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-white to-violet-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Retention Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Stories with Video Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Candidate Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50">
                  <CardContent className="p-0">
                    {/* Video Thumbnail */}
                    <div className="relative group cursor-pointer">
                      <div className="w-full h-48 bg-gradient-to-br from-zara-purple-light to-zara-purple flex items-center justify-center relative overflow-hidden">
                        {/* Mock video thumbnail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                            <Play className="w-8 h-8 ml-1" />
                          </div>
                          <div className="text-sm font-medium">{story.videoDuration}</div>
                        </div>
                        {/* Candidate image overlay */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">
                            {story.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="text-white">
                            <div className="font-medium">{story.name}</div>
                            <div className="text-sm opacity-90">{story.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 font-medium">{story.company}</span>
                        <div className="flex items-center gap-1 ml-auto">
                          {[...Array(story.metrics.satisfaction)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative mb-6">
                        <Quote className="w-6 h-6 text-zara-purple-light absolute -top-2 -left-2" />
                        <p className="text-gray-700 italic pl-4 leading-relaxed">
                          "{story.quote}"
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-green-600">{story.metrics.hireTime}</div>
                          <div className="text-xs text-gray-500">Time to Hire</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">{story.metrics.improvement}</div>
                          <div className="text-xs text-gray-500">Faster Process</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-zara-purple">Perfect</div>
                          <div className="text-xs text-gray-500">Match Score</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Company Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyMetrics.map((company, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-violet-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-4">{company.company}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time to Hire:</span>
                        <span className="font-medium text-green-600">{company.timeToHire}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quality Score:</span>
                        <span className="font-medium text-blue-600">{company.qualityScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Retention:</span>
                        <span className="font-medium text-zara-purple">{company.retention}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="text-2xl font-bold text-gray-900">{company.hires}</div>
                        <div className="text-sm text-gray-500">Total Hires</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of candidates who found their dream jobs and hundreds of companies who transformed their hiring process with Zara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zara-purple hover:bg-gray-100">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Watch More Stories
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;

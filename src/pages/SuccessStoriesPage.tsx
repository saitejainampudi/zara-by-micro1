
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Quote, Award, TrendingUp, Users, Building, Clock } from 'lucide-react';

const SuccessStoriesPage = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      avatar: "SC",
      story: "Zara's AI-powered assessment helped me showcase my skills effectively. The coding challenges were well-designed and the AI interview felt natural. I got hired within 2 weeks!",
      outcome: "Hired in 2 weeks",
      salaryIncrease: "40%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "14 days",
      previousRole: "Frontend Developer"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      avatar: "MR",
      story: "The soft skills assessment was incredibly insightful. It helped me articulate my leadership experience in a structured way. The whole process was seamless and professional.",
      outcome: "Dream job secured",
      salaryIncrease: "55%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "21 days",
      previousRole: "Associate Product Manager"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Data Scientist",
      company: "DataFlow Systems",
      avatar: "EJ",
      story: "As someone switching careers into data science, Zara helped me demonstrate my potential despite limited experience. The AI understood my transferable skills perfectly.",
      outcome: "Career transition success",
      salaryIncrease: "70%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "18 days",
      previousRole: "Business Analyst"
    },
    {
      id: 4,
      name: "David Park",
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      avatar: "DP",
      story: "The technical assessment was challenging but fair. I appreciated how the AI interview adapted to my responses and explored my cloud architecture knowledge in depth.",
      outcome: "Senior position achieved",
      salaryIncrease: "45%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "16 days",
      previousRole: "System Administrator"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "UX Designer",
      company: "DesignHub",
      avatar: "LW",
      story: "Zara's assessment process allowed me to showcase not just my design skills but also my user research methodology and collaborative approach. It was comprehensive yet efficient.",
      outcome: "Perfect culture fit",
      salaryIncrease: "35%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "12 days",
      previousRole: "Junior UX Designer"
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Backend Engineer",
      company: "ScaleUp Inc.",
      avatar: "JT",
      story: "The coding challenges were realistic and reflected actual work scenarios. The AI interview questions were thoughtful and gave me space to explain my problem-solving approach.",
      outcome: "Tech lead position",
      salaryIncrease: "50%",
      rating: 5,
      videoThumbnail: "/placeholder.svg",
      hasVideo: true,
      timeToHire: "19 days",
      previousRole: "Software Developer"
    }
  ];

  const companyTestimonials = [
    {
      company: "TechCorp Inc.",
      recruiter: "Amanda Foster",
      role: "Head of Talent Acquisition",
      avatar: "AF",
      testimonial: "Zara has revolutionized our hiring process. We've reduced time-to-hire by 60% while improving candidate quality. The AI assessments provide incredible insights.",
      metrics: {
        timeReduction: "60%",
        qualityImprovement: "85%",
        candidatesSaved: "200+"
      },
      hasVideo: true
    },
    {
      company: "InnovateLabs",
      recruiter: "Mark Stevens",
      role: "VP of Engineering",
      avatar: "MS",
      testimonial: "The technical assessments are spot-on. We're finding candidates who not only have the right skills but also fit our culture perfectly. Game-changing platform.",
      metrics: {
        timeReduction: "45%",
        qualityImprovement: "90%",
        candidatesSaved: "150+"
      },
      hasVideo: true
    },
    {
      company: "DataFlow Systems",
      recruiter: "Jennifer Lee",
      role: "Director of People Operations",
      avatar: "JL",
      testimonial: "Zara's AI interviews reveal soft skills and cultural fit like nothing else. We've made better hires and reduced turnover significantly.",
      metrics: {
        timeReduction: "55%",
        qualityImprovement: "80%",
        candidatesSaved: "180+"
      },
      hasVideo: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <Award className="w-4 h-4 mr-1" />
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zara-purple to-zara-purple-dark bg-clip-text text-transparent">
            Real Stories, Real Success
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how Zara has transformed careers and hiring processes for thousands of candidates and companies worldwide.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-zara-purple mb-2">10,000+</div>
              <div className="text-gray-600">Successful Hires</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Hiring</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Success Stories */}
      <section className="pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Candidate Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from candidates who landed their dream jobs through our AI-powered assessment platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Video Thumbnail */}
                  <div className="relative mb-6 group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-zara-purple-light to-zara-purple rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white font-bold text-2xl">
                        {story.avatar}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-zara-purple ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                      <Play className="w-3 h-3 mr-1" />
                      Video Story
                    </Badge>
                  </div>

                  {/* Story Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{story.name}</h3>
                        <p className="text-zara-purple font-medium">{story.role}</p>
                        <p className="text-gray-600 text-sm">{story.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-zara-purple-light" />
                    <p className="text-gray-700 italic pl-4">"{story.story}"</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-green-600 font-bold">{story.timeToHire}</div>
                      <div className="text-xs text-green-700">Time to Hire</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-blue-600 font-bold">+{story.salaryIncrease}</div>
                      <div className="text-xs text-blue-700">Salary Increase</div>
                    </div>
                  </div>

                  <Badge className="w-full justify-center bg-green-100 text-green-700 border-green-200">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {story.outcome}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Testimonials */}
      <section className="pb-16 px-6 md:px-10 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Recruiters Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how leading companies have transformed their hiring with Zara's AI-powered platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Video Section */}
                  <div className="relative mb-6 group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                          {testimonial.avatar}
                        </div>
                        <div className="text-sm font-medium text-gray-700">{testimonial.recruiter}</div>
                        <div className="text-xs text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-blue-500 text-white">
                      <Video className="w-3 h-3 mr-1" />
                      Interview
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-5 h-5 text-gray-500" />
                      <span className="font-semibold">{testimonial.company}</span>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                      <p className="text-gray-700 italic pl-4">"{testimonial.testimonial}"</p>
                    </div>
                  </div>

                  {/* Company Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-red-50 p-3 rounded-lg text-center">
                      <div className="text-red-600 font-bold text-sm">{testimonial.metrics.timeReduction}</div>
                      <div className="text-xs text-red-700">Time Saved</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-green-600 font-bold text-sm">{testimonial.metrics.qualityImprovement}</div>
                      <div className="text-xs text-green-700">Quality Up</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-blue-600 font-bold text-sm">{testimonial.metrics.candidatesSaved}</div>
                      <div className="text-xs text-blue-700">Candidates</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of candidates and companies who have transformed their hiring experience with Zara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zara-purple hover:bg-gray-100">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zara-purple">
                Watch More Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;

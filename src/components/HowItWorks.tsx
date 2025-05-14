
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Check, Cpu, Code, BarChart, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Job Description",
      description: "Upload your JD or use our templates. Select tech stack requirements and soft skills criteria.",
      image: "job-upload.png",
      icon: <Code className="h-6 w-6 text-zara-purple" />
    },
    {
      number: 2,
      title: "Zara Interviews Candidates 24/7",
      description: "Our AI conducts technical assessments through coding challenges and behavioral interviews.",
      image: "ai-interview.png",
      icon: <Cpu className="h-6 w-6 text-zara-purple" />
    },
    {
      number: 3,
      title: "AI Analyzes & Summarizes",
      description: "Get detailed insights on technical skills, code quality, problem-solving, and communication.",
      image: "ai-analysis.png",
      icon: <BarChart className="h-6 w-6 text-zara-purple" />
    },
    {
      number: 4,
      title: "Review & Shortlist",
      description: "Recruiters receive AI-generated summaries to make faster, data-driven hiring decisions.",
      image: "shortlist.png",
      icon: <UserCheck className="h-6 w-6 text-zara-purple" />
    }
  ];

  const features = [
    {
      title: "Coding Test Interface",
      description: "Evaluate technical skills with our real-time coding environment."
    },
    {
      title: "Video & Behavioral Interviews",
      description: "Assess communication skills and cultural fit with AI-powered interviews."
    },
    {
      title: "Multilingual Support",
      description: "Interview candidates in multiple languages to expand your talent pool."
    },
    {
      title: "Proctoring & Cheating Detection",
      description: "Ensure the integrity of your technical assessments with advanced proctoring."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-zara-gray-lightest to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zara-purple-darkest">How Zara Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI recruiter simplifies your hiring process by automating technical interviews, 
            evaluating candidates, and providing detailed reports - all in minutes, not days.
          </p>
        </div>

        {/* Main Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}
            >
              <div className="w-full lg:w-1/2">
                <Card className="border border-gray-200 shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-zara-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <AspectRatio ratio={16/9}>
                      <div className="bg-zara-purple-light rounded-t-lg w-full h-full flex items-center justify-center p-6">
                        <div className="text-center">
                          {step.icon}
                          <p className="text-lg font-medium mt-2 text-zara-purple-dark">Step {step.number}</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-zara-purple-darkest">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    {index === 0 && (
                      <Link to="/job-upload">
                        <Button className="bg-zara-purple hover:bg-zara-purple-dark text-white">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-zara-purple-darkest">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">{step.description}</p>
                
                <div className="space-y-4 mb-8">
                  {index === 0 && (
                    <>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Upload your job description or use our templates</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Select required tech stack and experience level</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Choose remote, hybrid, or on-site options</p>
                      </div>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>AI interviews available 24/7, globally</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Customized technical questions based on role</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Behavioral assessments to evaluate soft skills</p>
                      </div>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Detailed code quality analysis</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Communication skill assessments</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Problem-solving approach evaluation</p>
                      </div>
                    </>
                  )}

                  {index === 3 && (
                    <>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>AI match scores with comprehensive explanations</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>One-click candidate shortlisting</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-zara-purple-light rounded-full p-1 mr-3 mt-1">
                          <Check className="h-4 w-4 text-zara-purple" />
                        </div>
                        <p>Integration with popular ATS platforms</p>
                      </div>
                    </>
                  )}
                </div>

                {index === 0 && (
                  <Link to="/job-upload">
                    <Button className="bg-zara-purple hover:bg-zara-purple-dark text-white">
                      Upload Job Description
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI-Powered Interview Engine Section */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zara-purple-darkest">Zara's AI-Powered Interview Engine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology evaluates both technical skills and cultural fit, providing comprehensive insights on each candidate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 shadow hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-zara-purple rounded-xl p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your tech hiring process?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start using Zara today and see how our AI recruiter can help you find the best talent faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/job-upload">
                <Button size="lg" className="bg-white text-zara-purple hover:bg-gray-100 w-full sm:w-auto">
                  Upload Your First Job
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

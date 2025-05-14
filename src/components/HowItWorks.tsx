
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Job Description",
      description: "Upload your JD or use our templates. Select tech stack requirements and soft skills criteria.",
      image: "job-upload.png"
    },
    {
      number: 2,
      title: "Zara Interviews Candidates 24/7",
      description: "Our AI conducts technical assessments through coding challenges and behavioral interviews.",
      image: "ai-interview.png"
    },
    {
      number: 3,
      title: "AI Analyzes & Summarizes",
      description: "Get detailed insights on technical skills, code quality, problem-solving, and communication.",
      image: "ai-analysis.png"
    },
    {
      number: 4,
      title: "Review & Shortlist",
      description: "Recruiters receive AI-generated summaries to make faster, data-driven hiring decisions.",
      image: "shortlist.png"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 bg-zara-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">How Zara Works</h2>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Our AI recruiter simplifies your hiring process in four easy steps.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-zara-panel rounded-xl border border-gray-200 shadow-md p-6 lg:p-10 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-zara-primary flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="ml-4">{step.title}</h3>
                  </div>
                  <p className="text-zara-text-muted text-lg mb-6">
                    {step.description}
                  </p>
                  {index === 0 && (
                    <Link to="/job-upload">
                      <Button className="bg-zara-primary hover:bg-zara-purple-dark text-white">
                        Try It Now
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="relative group">
                  <div className="bg-gradient-accent rounded-xl p-6 aspect-video flex items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pulse-ring scale-90"></div>
                    <div className="absolute inset-0 opacity-10 pulse-ring scale-100 animation-delay-300"></div>
                    <div className="text-center relative z-10">
                      <p className="text-lg font-medium">Step {step.number}</p>
                      <p className="text-sm">{step.title}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-zara-panel px-4 py-1 rounded-full shadow-sm border border-gray-100">
                    <span className="badge badge-time">
                      {step.number === 2 ? "24/7 Available" : step.number === 3 ? "Real-time" : "Quick Process"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/job-upload">
            <Button size="lg" className="bg-zara-primary hover:bg-zara-purple-dark text-white">
              Start Your First AI Interview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

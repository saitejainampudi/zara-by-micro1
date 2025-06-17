
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Focus Area",
      description: "Select from algorithms, system design, behavioral questions, or specific programming languages.",
      image: "focus-selection.png"
    },
    {
      number: 2,
      title: "Practice with AI Interviewer",
      description: "Experience realistic interview scenarios with our adaptive AI that adjusts to your skill level.",
      image: "ai-interview.png"
    },
    {
      number: 3,
      title: "Get Detailed Feedback",
      description: "Receive comprehensive analysis of your performance, coding style, and communication skills.",
      image: "feedback-analysis.png"
    },
    {
      number: 4,
      title: "Track Your Progress",
      description: "Monitor improvement over time with detailed analytics and personalized recommendations.",
      image: "progress-tracking.png"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 bg-gradient-to-br from-zara-gray-lightest to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Exterview Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master technical interviews with our AI-powered practice platform in four simple steps.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 lg:p-10 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-zara-purple flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    {step.description}
                  </p>
                  {index === 0 && (
                    <Link to="/signin">
                      <Button className="bg-zara-purple hover:bg-zara-purple-dark text-white">
                        Start Practicing
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="bg-zara-purple-light rounded-xl p-6 h-64 flex items-center justify-center text-zara-purple-dark">
                  <div className="text-center">
                    <p className="text-lg font-medium">Step {step.number} Preview</p>
                    <p className="text-sm">{step.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/signin">
            <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark text-white">
              Start Your Practice Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

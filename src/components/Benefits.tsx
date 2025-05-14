
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Save 80% of Recruiter Time",
      description: "Automate technical screening and initial interviews, freeing up recruiters for strategic work.",
      icon: "⏱️"
    },
    {
      title: "Reduce Bias in Hiring",
      description: "AI objectively evaluates skills and code, focusing on abilities rather than background.",
      icon: "🔍"
    },
    {
      title: "Interview at Scale",
      description: "Handle thousands of candidates simultaneously with consistent evaluation.",
      icon: "📈"
    },
    {
      title: "Better Candidate Experience",
      description: "Flexible scheduling, immediate feedback, and a smooth interview process.",
      icon: "🌟"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">Why Recruiters Love Zara</h2>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Zara transforms your technical hiring process from slow and subjective to fast and data-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300 bg-zara-panel">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-zara-background flex items-center justify-center text-2xl mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zara-text-muted">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-zara-background rounded-xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-3">The Numbers Speak</h3>
              <p className="text-zara-text-muted mb-0">
                Our AI-powered platform delivers measurable improvements to your hiring process.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zara-primary mb-1">400K+</div>
                <div className="text-sm text-zara-text-muted">Interviews Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zara-primary mb-1">86%</div>
                <div className="text-sm text-zara-text-muted">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zara-primary mb-1">92%</div>
                <div className="text-sm text-zara-text-muted">Hiring Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zara-primary mb-1">24/7</div>
                <div className="text-sm text-zara-text-muted">Interviewing Capability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

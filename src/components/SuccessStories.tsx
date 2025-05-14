
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories = () => {
  const stories = [
    {
      company: "TechNova Inc.",
      title: "Reduced Time-to-Hire by 72%",
      quote: "Before Zara, our technical interviews took weeks to schedule and required hours from our senior engineers. Now we interview candidates 24/7 and only bring in the best for final rounds.",
      results: [
        "Cut hiring time from 28 days to 8 days",
        "Saved 31 engineering hours per week",
        "Increased candidate quality by 63%"
      ],
      person: "Jennifer Chen",
      role: "VP of Engineering",
      logo: "technova.svg"
    },
    {
      company: "FinServe Global",
      title: "Scaled Engineering Team During Rapid Growth",
      quote: "As a fintech startup, we needed to double our team in 3 months. Zara's AI interviews helped us screen 400+ candidates efficiently while maintaining our high technical bar.",
      results: [
        "Hired 28 engineers in 90 days",
        "Maintained 92% new hire retention rate",
        "Reduced cost-per-hire by 44%"
      ],
      person: "Michael Rodriguez",
      role: "CTO",
      logo: "finserve.svg"
    },
    {
      company: "HealthTech Solutions",
      title: "Eliminated Bias in Technical Hiring",
      quote: "Our commitment to diversity was challenged by unconscious bias in our technical interviews. Zara's standardized AI approach helped us build a more inclusive engineering team.",
      results: [
        "Increased diversity of technical hires by 38%",
        "Reduced variance in interview evaluations by 74%",
        "Improved candidate experience satisfaction scores by 29%"
      ],
      person: "Aisha Johnson",
      role: "Head of Talent Acquisition",
      logo: "healthtech.svg"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-bold mb-4">Success Stories</h1>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Learn how leading organizations are transforming their technical hiring process with Zara AI Recruiter.
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-zara-panel rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-zara-background-alt flex items-center justify-center text-zara-primary font-bold mr-4">
                      {story.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold">{story.company}</h3>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
                  <p className="text-zara-text-muted mb-6 italic">"{story.quote}"</p>
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-zara-primary mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold mr-4">
                      {story.person.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{story.person}</p>
                      <p className="text-sm text-zara-text-muted">{story.role}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-gradient-accent p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="space-y-8 w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="text-xl font-semibold mb-4">Before Zara</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="text-zara-alert mr-2">✕</span>
                          <span>Manual technical screening process</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-zara-alert mr-2">✕</span>
                          <span>Engineers spending 5+ hours per week interviewing</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-zara-alert mr-2">✕</span>
                          <span>Inconsistent candidate experience</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="text-xl font-semibold mb-4">After Zara</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="text-zara-success mr-2">✓</span>
                          <span>Automated AI-powered screening process</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-zara-success mr-2">✓</span>
                          <span>Engineers focused on high-value work</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-zara-success mr-2">✓</span>
                          <span>Standardized, fair evaluation for all candidates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zara-panel rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="font-bold mb-3">Ready to join these success stories?</h3>
              <p className="text-zara-text-muted">
                Transform your technical hiring process with Zara AI Recruiter and experience the same results as these leading organizations.
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
              <a href="/start-interviewing" className="bg-zara-primary hover:bg-zara-purple-dark text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

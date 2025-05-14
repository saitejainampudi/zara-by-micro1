
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const SuccessStoriesPage = () => {
  const successStories = [
    {
      companyName: "TechNova",
      industry: "Software Development",
      logo: "🚀", // Placeholder for an actual logo
      quote: "Zara helped us reduce our technical hiring time by 78% while improving candidate quality across the board. Our engineers love the detailed code analysis.",
      author: "Sarah Johnson",
      position: "Head of Engineering",
      results: {
        timeReduction: "78%",
        costSavings: "$150K",
        candidateQuality: "+35%"
      }
    },
    {
      companyName: "FinEdge",
      industry: "Financial Services",
      logo: "💰", // Placeholder for an actual logo
      quote: "The consistency of Zara's technical interviews has been a game changer. We've eliminated bias from our hiring process and found amazing talent we might have otherwise missed.",
      author: "Michael Chen",
      position: "CTO",
      results: {
        timeReduction: "65%",
        costSavings: "$200K",
        candidateQuality: "+42%"
      }
    },
    {
      companyName: "HealthTech Solutions",
      industry: "Healthcare Technology",
      logo: "⚕️", // Placeholder for an actual logo
      quote: "As a rapidly scaling startup, we needed to hire 20 engineers in 3 months. Zara made this possible without sacrificing quality or overwhelming our team.",
      author: "Emily Rodriguez",
      position: "VP of Talent",
      results: {
        timeReduction: "71%",
        costSavings: "$180K",
        candidateQuality: "+28%"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg text-gray-600">
              Discover how companies are transforming their hiring process with Zara AI Recruiter.
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className={`bg-white p-8 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-zara-purple-light flex items-center justify-center text-2xl mr-4">
                        {story.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{story.companyName}</h3>
                        <p className="text-gray-500">{story.industry}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg font-medium italic mb-6">
                      "{story.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold">{story.author}</p>
                        <p className="text-gray-500 text-sm">{story.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-zara-purple-light p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <h4 className="text-lg font-bold mb-6">Measurable Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zara-purple mb-1">
                          {story.results.timeReduction}
                        </div>
                        <div className="text-sm">Time Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zara-purple mb-1">
                          {story.results.costSavings}
                        </div>
                        <div className="text-sm">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zara-purple mb-1">
                          {story.results.candidateQuality}
                        </div>
                        <div className="text-sm">Better Hires</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              See how Zara can transform your technical hiring process and help you find the best talent faster.
            </p>
            <Button className="bg-zara-purple hover:bg-zara-purple-dark text-white px-8 py-6 text-lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;

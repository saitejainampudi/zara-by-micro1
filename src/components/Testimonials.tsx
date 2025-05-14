
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Zara has completely transformed our tech hiring. We've cut time-to-hire by 70% while improving quality of hires.",
      name: "Sarah Johnson",
      title: "Head of Talent Acquisition, TechCorp",
      avatar: "avatar1.jpg"
    },
    {
      quote: "As a startup CTO, I needed to scale my engineering team quickly. Zara helped us interview hundreds of candidates while I focused on building the product.",
      name: "Michael Chen",
      title: "CTO, InnovateLabs",
      avatar: "avatar2.jpg"
    },
    {
      quote: "The detailed AI analysis of coding skills and problem-solving approach gives us insights we couldn't get from traditional interviews.",
      name: "Elena Rodriguez",
      title: "Technical Recruiter, DevHire",
      avatar: "avatar3.jpg"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 bg-zara-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Teams of all sizes are using Zara to revolutionize their technical hiring process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-zara-panel">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 18.6667C9.33333 16.4667 11.1333 14.6667 13.3333 14.6667V10.6667C8.93333 10.6667 5.33333 14.2667 5.33333 18.6667V26.6667H13.3333V18.6667H9.33333ZM22.6667 14.6667V10.6667C18.2667 10.6667 14.6667 14.2667 14.6667 18.6667V26.6667H22.6667V18.6667H18.6667C18.6667 16.4667 20.4667 14.6667 22.6667 14.6667Z" fill="#3E51FF"/>
                  </svg>
                </div>
                <p className="text-zara-text-primary mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-zara-text-muted">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-zara-panel rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="font-bold mb-3">Ready to transform your technical hiring?</h3>
              <p className="text-zara-text-muted">
                Join hundreds of companies using Zara to find the best technical talent faster and more efficiently.
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
              <a href="/job-upload" className="bg-zara-primary hover:bg-zara-purple-dark text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

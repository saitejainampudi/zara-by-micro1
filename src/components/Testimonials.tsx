
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "micro1 makes it insanely easy to vet and hire the best talent around the world. This has been game changing for us.",
      name: "Sean Rad",
      title: "Former CEO of Tinder",
      avatar: "SR"
    },
    {
      quote: "We've been using micro1 for large-scale cohort hiring, and it's been a total game changer. The candidate experience has been exceptional, and their AI Recruiter has completely streamlined our process.",
      name: "Alan Price",
      title: "Head of Talent at Deel",
      avatar: "AP"
    },
    {
      quote: "Prior to micro1, our HR department wasted a lot of time on applicants who fabricated their resumes or overlooked excellent candidates with average-looking resumes. Now that we've integrated micro1 into our hiring process, we've saved our HR and Engineering teams many hours and noticed a stark improvement in the quality of candidates entering our pipeline.",
      name: "Shane Selinger",
      title: "CEO at GameGrid",
      avatar: "SS"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 bg-[#DBDAF5]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear from Zara's clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teams of all sizes are using Zara to revolutionize their technical hiring process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 18.6667C9.33333 16.4667 11.1333 14.6667 13.3333 14.6667V10.6667C8.93333 10.6667 5.33333 14.2667 5.33333 18.6667V26.6667H13.3333V18.6667H9.33333ZM22.6667 14.6667V10.6667C18.2667 10.6667 14.6667 14.2667 14.6667 18.6667V26.6667H22.6667V18.6667H18.6667C18.6667 16.4667 20.4667 14.6667 22.6667 14.6667Z" fill="#9b87f5"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zara-purple flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-1 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 18.6667C9.33333 16.4667 11.1333 14.6667 13.3333 14.6667V10.6667C8.93333 10.6667 5.33333 14.2667 5.33333 18.6667V26.6667H13.3333V18.6667H9.33333ZM22.6667 14.6667V10.6667C18.2667 10.6667 14.6667 14.2667 14.6667 18.6667V26.6667H22.6667V18.6667H18.6667C18.6667 16.4667 20.4667 14.6667 22.6667 14.6667Z" fill="#9b87f5"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "With micro1, we reduced our interview staff from 33 to 12 while still conducting 10,000 interviews each month. Now, the team is focused on higher-impact work. Huge kudos to you guys, first really useful AI applications I've come across."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-zara-purple flex items-center justify-center text-white font-bold mr-4">
                  NS
                </div>
                <div>
                  <p className="font-semibold">Nathan Sumekh</p>
                  <p className="text-sm text-gray-500">COO at LegalSoft</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-3">Ready to transform your technical hiring?</h3>
              <p className="text-gray-600">
                Join hundreds of companies using Zara to find the best technical talent faster and more efficiently.
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
              <a href="/job-upload" className="bg-zara-purple hover:bg-zara-purple-dark text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
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


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StartInterviewing = () => {
  const techRoles = [
    { id: 1, title: "Frontend Developer", description: "React, Vue, Angular", interviews: 1420 },
    { id: 2, title: "Backend Developer", description: "Node.js, Python, Java", interviews: 1685 },
    { id: 3, title: "Full Stack Developer", description: "MERN, MEAN, Django", interviews: 2105 },
    { id: 4, title: "DevOps Engineer", description: "AWS, Docker, Kubernetes", interviews: 890 },
    { id: 5, title: "Data Scientist", description: "Python, R, ML/AI", interviews: 756 },
    { id: 6, title: "Mobile Developer", description: "React Native, Flutter, Swift", interviews: 632 },
  ];

  const nonTechRoles = [
    { id: 1, title: "Product Manager", description: "Agile, Scrum, Roadmaps", interviews: 520 },
    { id: 2, title: "UX/UI Designer", description: "Figma, Adobe XD, Sketch", interviews: 498 },
    { id: 3, title: "Digital Marketer", description: "SEO, SEM, Analytics", interviews: 435 },
    { id: 4, title: "Sales Representative", description: "B2B, SaaS, Enterprise", interviews: 621 },
    { id: 5, title: "Customer Success", description: "Onboarding, Support, CRM", interviews: 389 },
    { id: 6, title: "HR Specialist", description: "Recruiting, Onboarding, Benefits", interviews: 267 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Start AI-Powered Interviews</h1>
            <p className="text-lg text-gray-600">
              Select from pre-built templates or create your own custom interview process.
            </p>
          </div>

          <Tabs defaultValue="tech" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tech">Technical Roles</TabsTrigger>
              <TabsTrigger value="nontech">Non-Technical Roles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tech" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techRoles.map((role) => (
                  <Card key={role.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-zara-lavender p-6">
                        <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                        <p className="text-gray-600 mb-3">{role.description}</p>
                        <div className="text-sm text-gray-500">
                          {role.interviews.toLocaleString()} interviews conducted
                        </div>
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <Link to={`/job-upload?template=${role.id}`}>
                          <Button variant="outline" className="text-zara-purple border-zara-purple hover:bg-zara-purple hover:text-white">
                            Use Template
                          </Button>
                        </Link>
                        <Link to="/job-upload">
                          <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                            Customize
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nontech" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonTechRoles.map((role) => (
                  <Card key={role.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-zara-lavender p-6">
                        <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                        <p className="text-gray-600 mb-3">{role.description}</p>
                        <div className="text-sm text-gray-500">
                          {role.interviews.toLocaleString()} interviews conducted
                        </div>
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <Link to={`/job-upload?template=${role.id}`}>
                          <Button variant="outline" className="text-zara-purple border-zara-purple hover:bg-zara-purple hover:text-white">
                            Use Template
                          </Button>
                        </Link>
                        <Link to="/job-upload">
                          <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                            Customize
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-zara-lavender rounded-xl p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need a completely custom interview?</h2>
            <p className="text-lg mb-6">
              Upload your own job description and requirements to create a tailored interview process.
            </p>
            <Link to="/job-upload">
              <Button className="bg-zara-purple hover:bg-zara-purple-dark text-lg">
                Create Custom Interview
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartInterviewing;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const JobUpload = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [techStack, setTechStack] = useState({
    react: false,
    angular: false, 
    vue: false,
    node: false,
    python: false,
    java: false,
    csharp: false,
    golang: false
  });
  const [softSkills, setSoftSkills] = useState({
    communication: false,
    teamwork: false,
    problemSolving: false,
    adaptability: false,
    leadership: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!jobTitle.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter a job title",
        variant: "destructive"
      });
      return;
    }
    
    if (!jobDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter a job description",
        variant: "destructive"
      });
      return;
    }
    
    // Check if at least one tech stack is selected
    const hasTechStack = Object.values(techStack).some(value => value);
    if (!hasTechStack) {
      toast({
        title: "Missing Information",
        description: "Please select at least one technology",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate uploading
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Success!",
        description: "Your job description has been uploaded and Zara is ready to interview candidates.",
      });
      
      // In a real app, we would redirect to a dashboard or confirmation page
    }, 2000);
  };

  const handleTechStackChange = (tech: string) => {
    setTechStack({
      ...techStack,
      [tech]: !techStack[tech as keyof typeof techStack]
    });
  };

  const handleSoftSkillsChange = (skill: string) => {
    setSoftSkills({
      ...softSkills,
      [skill]: !softSkills[skill as keyof typeof softSkills]
    });
  };

  const handleUseTemplate = (template: string) => {
    if (template === 'frontend') {
      setJobTitle('Senior Frontend Developer');
      setJobDescription(`We're looking for a Senior Frontend Developer proficient in React to join our product team. The ideal candidate has 4+ years of experience building responsive, high-performance web applications.

Responsibilities:
- Implement complex UI components and features
- Optimize application performance
- Collaborate with designers and backend engineers
- Write clean, maintainable code with proper test coverage

Requirements:
- Strong React experience
- TypeScript proficiency
- State management expertise (Redux, Context API)
- Experience with modern build tools and CI/CD pipelines`);
      
      setTechStack({
        ...techStack,
        react: true,
        angular: false,
        vue: false,
        node: true,
        python: false,
        java: false,
        csharp: false,
        golang: false
      });
      
      setSoftSkills({
        ...softSkills,
        communication: true,
        teamwork: true,
        problemSolving: true,
        adaptability: false,
        leadership: false
      });
    } else if (template === 'backend') {
      setJobTitle('Backend Engineer');
      setJobDescription(`We are seeking a Backend Engineer to design, build, and maintain efficient, reusable, and reliable server-side code. You will be responsible for integrating with frontend applications and building scalable API services.

Responsibilities:
- Design and implement new features and functionality
- Build reusable code and libraries for future use
- Optimize database queries and application performance
- Ensure data security and implement proper authentication

Requirements:
- 3+ years experience with Node.js or Python
- Experience with databases (SQL, NoSQL)
- Understanding of server-side templating languages
- Basic understanding of frontend technologies`);
      
      setTechStack({
        ...techStack,
        react: false,
        angular: false,
        vue: false,
        node: true,
        python: true,
        java: false,
        csharp: false,
        golang: false
      });
      
      setSoftSkills({
        ...softSkills,
        communication: true,
        teamwork: true,
        problemSolving: true,
        adaptability: true,
        leadership: false
      });
    }
    
    toast({
      title: "Template Applied",
      description: `${template === 'frontend' ? 'Frontend' : 'Backend'} Developer template has been applied.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Get Started</h1>
            <p className="text-lg text-gray-600">
              Tell us about the role you're hiring for and Zara will create a customized interview experience.
            </p>
          </div>
          
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upload">Upload Job Description</TabsTrigger>
              <TabsTrigger value="template">Use Template</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input 
                        id="job-title" 
                        placeholder="e.g. Senior Frontend Developer" 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea 
                        id="job-description" 
                        placeholder="Paste your full job description here..." 
                        className="min-h-[200px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Required Technical Skills</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.keys(techStack).map((tech) => (
                          <div key={tech} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`tech-${tech}`} 
                              checked={techStack[tech as keyof typeof techStack]}
                              onCheckedChange={() => handleTechStackChange(tech)}
                            />
                            <Label htmlFor={`tech-${tech}`} className="capitalize">
                              {tech === 'csharp' ? 'C#' : tech}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Desired Soft Skills</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.keys(softSkills).map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`skill-${skill}`}
                              checked={softSkills[skill as keyof typeof softSkills]}
                              onCheckedChange={() => handleSoftSkillsChange(skill)}
                            />
                            <Label htmlFor={`skill-${skill}`} className="capitalize">
                              {skill === 'problemSolving' ? 'Problem Solving' : skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-zara-purple hover:bg-zara-purple-dark"
                      disabled={uploading}
                    >
                      {uploading ? 'Processing...' : 'Generate Interview Flow'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="template">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleUseTemplate('frontend')}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                    <p className="text-gray-600 mb-4">
                      For React, Angular, or Vue.js roles focusing on UI/UX implementation and frontend architecture.
                    </p>
                    <Button variant="outline" className="w-full border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                      Use This Template
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleUseTemplate('backend')}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Backend Engineer</h3>
                    <p className="text-gray-600 mb-4">
                      For Node.js, Python, Java or Go roles focusing on APIs, databases, and server architecture.
                    </p>
                    <Button variant="outline" className="w-full border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                      Use This Template
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Need a different template? <Link to="/contact" className="text-zara-purple hover:underline">Request a custom template</Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zara-purple mr-3">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="currentColor"/>
              </svg>
              <h3 className="font-medium">What happens next?</h3>
            </div>
            <ol className="list-decimal ml-8 space-y-2 text-gray-600">
              <li>Zara analyzes your job description and creates a custom interview flow</li>
              <li>You'll receive a unique interview link to share with candidates</li>
              <li>Candidates complete the AI interview at their convenience</li>
              <li>You receive detailed reports for each candidate to review</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobUpload;

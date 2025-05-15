
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobUpload = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [internalNote, setInternalNote] = useState('');
  const [numberOfHires, setNumberOfHires] = useState(1);
  const [locationType, setLocationType] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [showAutoGenerate, setShowAutoGenerate] = useState(false);
  
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

      setInternalNote("We need someone who can hit the ground running with our existing codebase.");
      setNumberOfHires(1);
      setLocationType("hybrid");
      setEmploymentType("full-time");
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

      setInternalNote("Looking for strong problem-solving skills and experience with microservices architecture.");
      setNumberOfHires(2);
      setLocationType("remote");
      setEmploymentType("full-time");
    }
    
    toast({
      title: "Template Applied",
      description: `${template === 'frontend' ? 'Frontend' : 'Backend'} Developer template has been applied.`,
    });
  };

  const handleAutoGenerate = () => {
    if (!jobTitle.trim() || !locationType || !employmentType) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least job title, location type, and employment type",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    
    // Get selected tech stack
    const selectedTech = Object.keys(techStack).filter(key => techStack[key as keyof typeof techStack]);
    
    // Get selected soft skills
    const selectedSkills = Object.keys(softSkills).filter(key => softSkills[key as keyof typeof softSkills]);
    
    // Simulate AI generating a job description
    setTimeout(() => {
      const generatedDescription = `We are looking for a ${jobTitle} to join our team ${locationType === 'remote' ? 'remotely' : `in our ${locationType} environment`}. This is a ${employmentType} position that requires expertise in ${selectedTech.join(', ')}.

Responsibilities:
- Design and develop ${selectedTech.includes('react') || selectedTech.includes('angular') || selectedTech.includes('vue') ? 'user interfaces' : 'backend systems'} with a focus on performance and scalability
- Collaborate with cross-functional teams to define, design, and ship new features
- Identify and resolve performance bottlenecks
- Write clean, maintainable, and efficient code
- Participate in code reviews and provide constructive feedback

Requirements:
- ${selectedTech.includes('react') || selectedTech.includes('angular') || selectedTech.includes('vue') ? '3+ years of experience with modern frontend frameworks' : '3+ years of experience with server-side programming languages'}
- Strong understanding of ${selectedTech.join(', ')}
- Experience with version control systems (Git)
- ${selectedSkills.includes('problemSolving') ? 'Strong problem-solving abilities' : ''}
- ${selectedSkills.includes('teamwork') ? 'Excellent team collaboration skills' : ''}
- ${selectedSkills.includes('communication') ? 'Effective communication skills' : ''}
- ${selectedSkills.includes('adaptability') ? 'Adaptability to changing requirements' : ''}
- ${selectedSkills.includes('leadership') ? 'Leadership experience in technical teams' : ''}

We offer competitive compensation, flexible working hours, and opportunities for professional growth. Join us to work on challenging problems in a supportive environment.
`;
      
      setJobDescription(generatedDescription);
      setUploading(false);
      
      toast({
        title: "Job Description Generated",
        description: "We've created a customized job description based on your specifications.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#DBDAF5] flex flex-col">
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
              <TabsTrigger value="upload">Create Job Description</TabsTrigger>
              <TabsTrigger value="template">Use Template</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="job-title">Job Title*</Label>
                      <Input 
                        id="job-title" 
                        placeholder="e.g. Senior Frontend Developer" 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location-type">Job Location*</Label>
                        <Select 
                          value={locationType} 
                          onValueChange={setLocationType}
                        >
                          <SelectTrigger id="location-type">
                            <SelectValue placeholder="Select location type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="on-site">On-site</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="employment-type">Employment Type*</Label>
                        <Select 
                          value={employmentType} 
                          onValueChange={setEmploymentType}
                        >
                          <SelectTrigger id="employment-type">
                            <SelectValue placeholder="Select employment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="number-of-hires">Number of Positions</Label>
                      <Select 
                        value={numberOfHires.toString()} 
                        onValueChange={(value) => setNumberOfHires(parseInt(value))}
                      >
                        <SelectTrigger id="number-of-hires">
                          <SelectValue placeholder="Select number of positions" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                          <SelectItem value="10+">10+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="internal-note">Internal Note (Only visible to your team)</Label>
                      <Textarea 
                        id="internal-note" 
                        placeholder="Add any internal notes about this role..." 
                        className="min-h-[80px]"
                        value={internalNote}
                        onChange={(e) => setInternalNote(e.target.value)}
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

                    <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                      <Button 
                        type="button"
                        variant="outline" 
                        className="border-zara-purple text-zara-purple"
                        onClick={() => setShowAutoGenerate(!showAutoGenerate)}
                      >
                        {showAutoGenerate ? 'Hide AI Generator' : 'Auto-generate Job Description'}
                      </Button>

                      {showAutoGenerate && (
                        <Button 
                          type="button"
                          className="bg-zara-purple hover:bg-zara-purple-dark"
                          disabled={uploading}
                          onClick={handleAutoGenerate}
                        >
                          {uploading ? 'Generating...' : 'Generate'}
                        </Button>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="job-description">Job Description*</Label>
                      <Textarea 
                        id="job-description" 
                        placeholder="Enter or paste your job description here..." 
                        className="min-h-[200px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
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

          <div className="mt-8 flex justify-end">
            <Link to="/candidates">
              <Button variant="outline" className="text-zara-purple border-zara-purple hover:bg-zara-purple-light">
                View Qualified Candidates
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobUpload;

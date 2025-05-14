
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

const InterviewStarter = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const techRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "iOS Developer",
    "Android Developer"
  ];

  const techSkills = {
    frontend: ["JavaScript", "React", "Vue", "Angular", "TypeScript", "HTML/CSS", "Responsive Design", "State Management"],
    backend: ["Node.js", "Python", "Java", "C#", "Ruby", "Go", "PHP", "SQL", "NoSQL"],
    general: ["System Design", "Algorithms", "Data Structures", "Testing", "Git", "CI/CD", "Agile Methodologies"]
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setSelectedSkills([]);
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="py-20 px-6 md:px-10 bg-zara-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-bold mb-4">Start Your AI Interview</h1>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Set up your technical interview in minutes. No scheduling, no coordination - just fast, efficient candidate assessment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-zara-primary flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold">Select a Technical Role</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {techRoles.map((role) => (
                  <div
                    key={role}
                    className={`p-4 border rounded-lg text-center cursor-pointer transition-colors duration-200 ${
                      selectedRole === role
                        ? 'border-zara-primary bg-zara-background text-zara-primary'
                        : 'border-gray-200 hover:border-zara-primary hover:bg-zara-background/50'
                    }`}
                    onClick={() => handleRoleSelect(role)}
                  >
                    {role}
                  </div>
                ))}
              </div>

              {selectedRole && (
                <>
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-zara-primary flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <h2 className="text-2xl font-bold">Choose Technical Skills to Evaluate</h2>
                  </div>

                  <div className="mb-12">
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border-b">
                        <h3 className="text-lg font-semibold">Frontend Skills</h3>
                        <span>+</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {techSkills.frontend.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <label htmlFor={`skill-${skill}`}>{skill}</label>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border-b">
                        <h3 className="text-lg font-semibold">Backend Skills</h3>
                        <span>+</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {techSkills.backend.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <label htmlFor={`skill-${skill}`}>{skill}</label>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border-b">
                        <h3 className="text-lg font-semibold">General Skills</h3>
                        <span>+</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {techSkills.general.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <label htmlFor={`skill-${skill}`}>{skill}</label>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-zara-primary flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <h2 className="text-2xl font-bold">Generate Your Interview</h2>
                  </div>

                  <div className="text-center mb-8">
                    <Button 
                      size="lg"
                      className="bg-zara-primary hover:bg-zara-purple-dark text-white"
                      disabled={selectedSkills.length === 0}
                    >
                      Create AI Interview
                    </Button>
                    <p className="text-sm text-zara-text-muted mt-2">
                      You've selected {selectedSkills.length} skills to evaluate
                    </p>
                  </div>

                  <div className="bg-zara-background-alt p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Zara AI will generate a custom interview based on your selected role and skills</li>
                      <li>You'll receive a unique interview link to share with candidates</li>
                      <li>Candidates can complete the interview on their own time</li>
                      <li>You'll get detailed reports on each candidate's performance</li>
                    </ol>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewStarter;

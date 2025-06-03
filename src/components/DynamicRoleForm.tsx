
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Wand2, Plus, X, Sparkles } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  required: boolean;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface RoleRequirement {
  title: string;
  department: string;
  experience: string;
  skills: Skill[];
  responsibilities: string[];
  qualifications: string[];
}

const DynamicRoleForm = ({ onSave }: { onSave: (requirement: RoleRequirement) => void }) => {
  const [roleData, setRoleData] = useState<RoleRequirement>({
    title: '',
    department: '',
    experience: '',
    skills: [],
    responsibilities: [],
    qualifications: []
  });
  const [aiSuggestions, setAiSuggestions] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [newResponsibility, setNewResponsibility] = useState('');
  const [newQualification, setNewQualification] = useState('');

  // AI-suggested skills based on role title
  const generateAISuggestions = (title: string) => {
    const suggestions: Record<string, Skill[]> = {
      'frontend': [
        { id: '1', name: 'React', required: true, proficiency: 'Advanced' },
        { id: '2', name: 'TypeScript', required: true, proficiency: 'Intermediate' },
        { id: '3', name: 'CSS/SCSS', required: true, proficiency: 'Advanced' },
        { id: '4', name: 'JavaScript', required: true, proficiency: 'Advanced' },
        { id: '5', name: 'Redux', required: false, proficiency: 'Intermediate' }
      ],
      'backend': [
        { id: '1', name: 'Node.js', required: true, proficiency: 'Advanced' },
        { id: '2', name: 'Python', required: false, proficiency: 'Intermediate' },
        { id: '3', name: 'SQL', required: true, proficiency: 'Advanced' },
        { id: '4', name: 'API Design', required: true, proficiency: 'Advanced' },
        { id: '5', name: 'Docker', required: false, proficiency: 'Intermediate' }
      ],
      'fullstack': [
        { id: '1', name: 'React', required: true, proficiency: 'Advanced' },
        { id: '2', name: 'Node.js', required: true, proficiency: 'Advanced' },
        { id: '3', name: 'PostgreSQL', required: true, proficiency: 'Intermediate' },
        { id: '4', name: 'TypeScript', required: true, proficiency: 'Advanced' },
        { id: '5', name: 'AWS', required: false, proficiency: 'Beginner' }
      ]
    };

    const key = Object.keys(suggestions).find(k => 
      title.toLowerCase().includes(k)
    );
    
    setAiSuggestions(key ? suggestions[key] : []);
  };

  useEffect(() => {
    if (roleData.title) {
      generateAISuggestions(roleData.title);
    }
  }, [roleData.title]);

  const addSkill = (skill: Skill) => {
    if (!roleData.skills.find(s => s.name === skill.name)) {
      setRoleData(prev => ({
        ...prev,
        skills: [...prev.skills, { ...skill, id: Date.now().toString() }]
      }));
    }
  };

  const removeSkill = (skillId: string) => {
    setRoleData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== skillId)
    }));
  };

  const addCustomSkill = () => {
    if (newSkill.trim()) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: newSkill.trim(),
        required: false,
        proficiency: 'Intermediate'
      };
      addSkill(skill);
      setNewSkill('');
    }
  };

  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setRoleData(prev => ({
        ...prev,
        responsibilities: [...prev.responsibilities, newResponsibility.trim()]
      }));
      setNewResponsibility('');
    }
  };

  const addQualification = () => {
    if (newQualification.trim()) {
      setRoleData(prev => ({
        ...prev,
        qualifications: [...prev.qualifications, newQualification.trim()]
      }));
      setNewQualification('');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-zara-purple" />
            Dynamic Role Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Role Title</Label>
              <Input
                id="title"
                value={roleData.title}
                onChange={(e) => setRoleData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Senior Frontend Developer"
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={roleData.department}
                onChange={(e) => setRoleData(prev => ({ ...prev, department: e.target.value }))}
                placeholder="e.g., Engineering"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="experience">Experience Level</Label>
            <Input
              id="experience"
              value={roleData.experience}
              onChange={(e) => setRoleData(prev => ({ ...prev, experience: e.target.value }))}
              placeholder="e.g., 3-5 years"
            />
          </div>

          {/* AI Suggested Skills */}
          {aiSuggestions.length > 0 && (
            <div>
              <Label className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                AI Suggested Skills
              </Label>
              <div className="flex flex-wrap gap-2">
                {aiSuggestions.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant="outline"
                    className="cursor-pointer hover:bg-zara-purple-light"
                    onClick={() => addSkill(skill)}
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {skill.name} ({skill.proficiency})
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Selected Skills */}
          <div>
            <Label>Required Skills</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {roleData.skills.map((skill) => (
                <Badge key={skill.id} className="bg-zara-purple text-white">
                  {skill.name}
                  <X
                    className="w-3 h-3 ml-1 cursor-pointer"
                    onClick={() => removeSkill(skill.id)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add custom skill"
                onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
              />
              <Button onClick={addCustomSkill} variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <Label>Key Responsibilities</Label>
            <div className="space-y-2 mb-3">
              {roleData.responsibilities.map((resp, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{resp}</span>
                  <X
                    className="w-4 h-4 cursor-pointer text-gray-500"
                    onClick={() => setRoleData(prev => ({
                      ...prev,
                      responsibilities: prev.responsibilities.filter((_, i) => i !== index)
                    }))}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Textarea
                value={newResponsibility}
                onChange={(e) => setNewResponsibility(e.target.value)}
                placeholder="Add responsibility"
                rows={2}
              />
              <Button onClick={addResponsibility} variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <Label>Required Qualifications</Label>
            <div className="space-y-2 mb-3">
              {roleData.qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{qual}</span>
                  <X
                    className="w-4 h-4 cursor-pointer text-gray-500"
                    onClick={() => setRoleData(prev => ({
                      ...prev,
                      qualifications: prev.qualifications.filter((_, i) => i !== index)
                    }))}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newQualification}
                onChange={(e) => setNewQualification(e.target.value)}
                placeholder="Add qualification"
                onKeyPress={(e) => e.key === 'Enter' && addQualification()}
              />
              <Button onClick={addQualification} variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button 
            onClick={() => onSave(roleData)} 
            className="w-full bg-zara-purple hover:bg-zara-purple-dark"
          >
            Save Role Requirements
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DynamicRoleForm;

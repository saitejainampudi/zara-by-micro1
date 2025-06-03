
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BookOpen, Target, Star, ArrowRight } from 'lucide-react';

interface Skill {
  name: string;
  personalLevel: number;
  roleRequirement: number;
  category: string;
  importance: 'High' | 'Medium' | 'Low';
  gap: number;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  resources: string[];
}

interface SkillMatrixData {
  candidateName: string;
  roleName: string;
  overallMatch: number;
  skills: Skill[];
  learningPaths: LearningPath[];
}

const SkillMatrix = ({ 
  data, 
  onStartLearningPath 
}: { 
  data: SkillMatrixData;
  onStartLearningPath: (pathId: string) => void;
}) => {
  const getGapColor = (gap: number) => {
    if (gap <= 0) return 'text-green-600';
    if (gap <= 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGapBadge = (gap: number) => {
    if (gap <= 0) return { text: 'Exceeds', color: 'bg-green-100 text-green-700 border-green-200' };
    if (gap <= 20) return { text: 'Close', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' };
    return { text: 'Gap', color: 'bg-red-100 text-red-700 border-red-200' };
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // Group skills by category
  const skillsByCategory = data.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Calculate category averages
  const categoryAverages = Object.entries(skillsByCategory).map(([category, skills]) => {
    const avgPersonal = skills.reduce((sum, skill) => sum + skill.personalLevel, 0) / skills.length;
    const avgRequired = skills.reduce((sum, skill) => sum + skill.roleRequirement, 0) / skills.length;
    const avgGap = skills.reduce((sum, skill) => sum + skill.gap, 0) / skills.length;
    
    return {
      category,
      avgPersonal,
      avgRequired,
      avgGap,
      skillCount: skills.length
    };
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-white to-violet-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-zara-purple" />
            Skill Matrix: {data.candidateName} vs {data.roleName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-zara-purple mb-1">{data.overallMatch}%</div>
              <div className="text-gray-600">Overall Role Match</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-2">Skills Analyzed</div>
              <div className="text-2xl font-bold">{data.skills.length}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Category Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryAverages.map((category) => (
              <div key={category.category} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{category.category}</h3>
                  <Badge variant="outline">{category.skillCount} skills</Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your Level</span>
                    <span className="font-medium">{category.avgPersonal.toFixed(0)}%</span>
                  </div>
                  <Progress value={category.avgPersonal} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Role Requirement</span>
                    <span className="font-medium">{category.avgRequired.toFixed(0)}%</span>
                  </div>
                  <Progress value={category.avgRequired} className="h-2 opacity-60" />
                  
                  <div className={`text-sm font-medium ${getGapColor(category.avgGap)}`}>
                    {category.avgGap > 0 ? `${category.avgGap.toFixed(0)}% gap to close` : 'Exceeds requirements'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Skill Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">{category}</h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => {
                    const gapBadge = getGapBadge(skill.gap);
                    return (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{skill.name}</h4>
                            <div className="flex gap-2 mt-1">
                              <Badge className={getImportanceColor(skill.importance)}>
                                {skill.importance} Priority
                              </Badge>
                              <Badge className={gapBadge.color}>
                                {gapBadge.text}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Your Level</span>
                              <span>{skill.personalLevel}%</span>
                            </div>
                            <Progress value={skill.personalLevel} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Required</span>
                              <span>{skill.roleRequirement}%</span>
                            </div>
                            <Progress value={skill.roleRequirement} className="h-2 opacity-60" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-green-600" />
            Recommended Learning Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.learningPaths.map((path) => (
              <div key={path.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{path.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{path.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                    <div className="text-sm text-gray-500 mt-1">{path.estimatedTime}</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Resources included:</p>
                  <div className="flex flex-wrap gap-1">
                    {path.resources.map((resource, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => onStartLearningPath(path.id)}
                  className="w-full bg-zara-purple hover:bg-zara-purple-dark"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Start Learning Path
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillMatrix;

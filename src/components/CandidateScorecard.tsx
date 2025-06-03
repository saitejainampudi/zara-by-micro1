
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Code, Users, Brain, MessageSquare, Award, Star } from 'lucide-react';

interface CandidateScore {
  category: string;
  score: number;
  maxScore: number;
  details: string[];
}

interface CandidateData {
  id: string;
  name: string;
  role: string;
  overallScore: number;
  technicalScore: number;
  culturalScore: number;
  scores: CandidateScore[];
  strengths: string[];
  improvements: string[];
  culturalFit: {
    teamwork: number;
    communication: number;
    leadership: number;
    adaptability: number;
    innovation: number;
  };
}

const CandidateScorecard = ({ candidate }: { candidate: CandidateData }) => {
  const radarData = Object.entries(candidate.culturalFit).map(([key, value]) => ({
    category: key.charAt(0).toUpperCase() + key.slice(1),
    score: value,
    fullMark: 100
  }));

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-blue-600 bg-blue-100';
    if (score >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technical skills': return <Code className="w-5 h-5" />;
      case 'problem solving': return <Brain className="w-5 h-5" />;
      case 'communication': return <MessageSquare className="w-5 h-5" />;
      case 'teamwork': return <Users className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-white to-violet-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{candidate.name}</CardTitle>
              <p className="text-gray-600">{candidate.role}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {candidate.overallScore}
              </div>
              <p className="text-sm text-gray-600 mt-1">Overall Score</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Technical vs Cultural Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-zara-purple" />
              Score Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Technical Skills</span>
                <span className={`px-2 py-1 rounded text-sm font-bold ${getScoreColor(candidate.technicalScore)}`}>
                  {candidate.technicalScore}/100
                </span>
              </div>
              <Progress value={candidate.technicalScore} className="h-3" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Cultural Fit</span>
                <span className={`px-2 py-1 rounded text-sm font-bold ${getScoreColor(candidate.culturalScore)}`}>
                  {candidate.culturalScore}/100
                </span>
              </div>
              <Progress value={candidate.culturalScore} className="h-3" />
            </div>

            {/* Detailed Scores */}
            <div className="space-y-3 mt-6">
              {candidate.scores.map((score, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getScoreIcon(score.category)}
                    <div>
                      <p className="font-medium">{score.category}</p>
                      <p className="text-xs text-gray-600">{score.details.join(', ')}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded font-bold ${getScoreColor(score.score)}`}>
                    {score.score}/{score.maxScore}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cultural Fit Radar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Cultural Fit Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={false}
                  />
                  <Radar
                    name="Cultural Fit"
                    dataKey="score"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Star className="w-5 h-5" />
              Key Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {candidate.strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                  <Star className="w-4 h-4 text-green-500" />
                  <span className="text-green-700">{strength}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <Brain className="w-5 h-5" />
              Growth Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {candidate.improvements.map((improvement, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                  <Brain className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-700">{improvement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateScorecard;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Award, Code, MessageSquare, Video, Clock, CheckCircle, Heart, ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

interface CandidateProfileCardProps {
  candidate: {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    overallScore: number;
    preference: '1st' | '2nd' | '3rd' | 'backup';
    status: 'pending' | 'interviewed' | 'shortlisted' | 'rejected';
    skills: string[];
    experience: string;
    scores: {
      coding: number;
      interview: number;
      softSkills: number;
    };
    completedSteps: number;
    totalSteps: number;
    submittedAt: string;
    highlights: string[];
  };
  onViewProfile: (candidateId: string) => void;
  onShortlist: (candidateId: string) => void;
  onReject: (candidateId: string) => void;
}

const CandidateProfileCard: React.FC<CandidateProfileCardProps> = ({ 
  candidate, 
  onViewProfile, 
  onShortlist, 
  onReject 
}) => {
  const getPreferenceColor = (preference: string) => {
    switch (preference) {
      case '1st': return 'bg-green-100 text-green-700 border-green-200';
      case '2nd': return 'bg-blue-100 text-blue-700 border-blue-200';
      case '3rd': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'backup': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'shortlisted': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'interviewed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending': return <Clock className="w-4 h-4 text-gray-500" />;
      case 'rejected': return <ThumbsDown className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-gray-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white font-bold text-lg">
              {candidate.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold">{candidate.name}</CardTitle>
              <div className="text-gray-600 font-medium">{candidate.experience}</div>
              <div className="flex items-center gap-2">
                {getStatusIcon(candidate.status)}
                <span className="text-sm text-gray-600 capitalize">{candidate.status}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
              candidate.overallScore >= 90 ? 'bg-green-500' :
              candidate.overallScore >= 80 ? 'bg-blue-500' :
              candidate.overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {candidate.overallScore}
            </div>
            <Badge className={getPreferenceColor(candidate.preference)}>
              {candidate.preference} Choice
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Skills */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Key Skills</div>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {skill}
                </Badge>
              ))}
              {candidate.skills.length > 4 && (
                <Badge variant="outline" className="bg-gray-50">
                  +{candidate.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Assessment Scores */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Code className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-purple-600">{candidate.scores.coding}</div>
              <div className="text-xs text-purple-700">Coding</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Video className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-blue-600">{candidate.scores.interview}</div>
              <div className="text-xs text-blue-700">Interview</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <MessageSquare className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-green-600">{candidate.scores.softSkills}</div>
              <div className="text-xs text-green-700">Soft Skills</div>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Assessment Progress</span>
              <span className="text-gray-600">{candidate.completedSteps}/{candidate.totalSteps} completed</span>
            </div>
            <Progress value={(candidate.completedSteps / candidate.totalSteps) * 100} className="h-2" />
          </div>

          {/* Highlights */}
          {candidate.highlights.length > 0 && (
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">AI Highlights</div>
              <div className="space-y-1">
                {candidate.highlights.slice(0, 2).map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-3 h-3 text-yellow-500" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-4 border-t">
            <Button 
              onClick={() => onViewProfile(candidate.id)}
              variant="outline" 
              size="sm" 
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button 
              onClick={() => onShortlist(candidate.id)}
              size="sm" 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              Shortlist
            </Button>
            <Button 
              onClick={() => onReject(candidate.id)}
              variant="outline" 
              size="sm" 
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <ThumbsDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Submitted Time */}
          <div className="text-xs text-gray-500 text-center">
            Submitted {candidate.submittedAt}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateProfileCard;

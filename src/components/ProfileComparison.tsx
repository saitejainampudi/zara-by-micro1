
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftRight, Play, Star, TrendingUp, Users, Code } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  overallScore: number;
  technicalScore: number;
  culturalScore: number;
  skills: string[];
  experience: string;
  highlights: string[];
  videoTranscript: {
    question: string;
    answer: string;
    timestamp: string;
    score: number;
  }[];
}

const ProfileComparison = ({ 
  candidates, 
  onSelectCandidate 
}: { 
  candidates: Candidate[];
  onSelectCandidate: (candidate: Candidate) => void;
}) => {
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([]);
  const [showTranscripts, setShowTranscripts] = useState(false);

  const toggleCandidateSelection = (candidate: Candidate) => {
    if (selectedCandidates.find(c => c.id === candidate.id)) {
      setSelectedCandidates(selectedCandidates.filter(c => c.id !== candidate.id));
    } else if (selectedCandidates.length < 2) {
      setSelectedCandidates([...selectedCandidates, candidate]);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getWinner = (score1: number, score2: number) => {
    if (score1 > score2) return 'left';
    if (score2 > score1) return 'right';
    return 'tie';
  };

  if (selectedCandidates.length < 2) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-zara-purple" />
            Side-by-Side Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Select 2 candidates to compare</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {candidates.map((candidate) => (
                <Card 
                  key={candidate.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCandidates.find(c => c.id === candidate.id) 
                      ? 'ring-2 ring-zara-purple bg-zara-purple-light' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleCandidateSelection(candidate)}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 ${getScoreColor(candidate.overallScore)}`}>
                        {candidate.overallScore}
                      </div>
                      <h3 className="font-semibold">{candidate.name}</h3>
                      <p className="text-sm text-gray-600">{candidate.role}</p>
                      {selectedCandidates.find(c => c.id === candidate.id) && (
                        <Badge className="mt-2 bg-zara-purple">Selected</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const [candidate1, candidate2] = selectedCandidates;

  return (
    <div className="space-y-6">
      {/* Header with Reset Button */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-zara-purple" />
              Candidate Comparison
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowTranscripts(!showTranscripts)}
              >
                <Play className="w-4 h-4 mr-2" />
                {showTranscripts ? 'Hide' : 'Show'} Transcripts
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCandidates([])}
              >
                Reset Selection
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidate 1 */}
        <Card className="bg-gradient-to-r from-white to-blue-50">
          <CardHeader>
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2 ${getScoreColor(candidate1.overallScore)}`}>
                {candidate1.overallScore}
              </div>
              <CardTitle>{candidate1.name}</CardTitle>
              <p className="text-gray-600">{candidate1.role}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Technical</span>
                <span className="text-sm">{candidate1.technicalScore}/100</span>
              </div>
              <Progress value={candidate1.technicalScore} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Cultural Fit</span>
                <span className="text-sm">{candidate1.culturalScore}/100</span>
              </div>
              <Progress value={candidate1.culturalScore} className="h-2" />
            </div>

            <div>
              <p className="font-medium text-sm mb-2">Skills</p>
              <div className="flex flex-wrap gap-1">
                {candidate1.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-sm mb-2">Highlights</p>
              <div className="space-y-1">
                {candidate1.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Candidate 2 */}
        <Card className="bg-gradient-to-r from-white to-green-50">
          <CardHeader>
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2 ${getScoreColor(candidate2.overallScore)}`}>
                {candidate2.overallScore}
              </div>
              <CardTitle>{candidate2.name}</CardTitle>
              <p className="text-gray-600">{candidate2.role}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Technical</span>
                <span className="text-sm">{candidate2.technicalScore}/100</span>
              </div>
              <Progress value={candidate2.technicalScore} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Cultural Fit</span>
                <span className="text-sm">{candidate2.culturalScore}/100</span>
              </div>
              <Progress value={candidate2.culturalScore} className="h-2" />
            </div>

            <div>
              <p className="font-medium text-sm mb-2">Skills</p>
              <div className="flex flex-wrap gap-1">
                {candidate2.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-sm mb-2">Highlights</p>
              <div className="space-y-1">
                {candidate2.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Winner Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Quick Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className={`p-4 rounded-lg ${getWinner(candidate1.overallScore, candidate2.overallScore) === 'left' ? 'bg-blue-100 border-2 border-blue-500' : getWinner(candidate1.overallScore, candidate2.overallScore) === 'right' ? 'bg-gray-50' : 'bg-yellow-100'}`}>
              <p className="font-semibold">Overall</p>
              <p className="text-2xl font-bold">{candidate1.overallScore}</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gray-500 font-semibold">VS</span>
            </div>
            <div className={`p-4 rounded-lg ${getWinner(candidate1.overallScore, candidate2.overallScore) === 'right' ? 'bg-green-100 border-2 border-green-500' : getWinner(candidate1.overallScore, candidate2.overallScore) === 'left' ? 'bg-gray-50' : 'bg-yellow-100'}`}>
              <p className="font-semibold">Overall</p>
              <p className="text-2xl font-bold">{candidate2.overallScore}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Transcript Highlights */}
      {showTranscripts && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-red-600" />
              Video Transcript Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">{candidate1.name}</h3>
                <div className="space-y-3">
                  {candidate1.videoTranscript.map((transcript, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm">{transcript.question}</p>
                        <Badge className={`ml-2 ${getScoreColor(transcript.score)} text-white`}>
                          {transcript.score}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 italic">"{transcript.answer}"</p>
                      <p className="text-xs text-gray-500 mt-1">{transcript.timestamp}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">{candidate2.name}</h3>
                <div className="space-y-3">
                  {candidate2.videoTranscript.map((transcript, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm">{transcript.question}</p>
                        <Badge className={`ml-2 ${getScoreColor(transcript.score)} text-white`}>
                          {transcript.score}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 italic">"{transcript.answer}"</p>
                      <p className="text-xs text-gray-500 mt-1">{transcript.timestamp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfileComparison;

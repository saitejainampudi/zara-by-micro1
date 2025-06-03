
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, PlayCircle, AlertTriangle, Timer, Target } from 'lucide-react';

interface AssessmentStep {
  id: string;
  title: string;
  description: string;
  estimatedTime: number; // in minutes
  status: 'pending' | 'active' | 'completed';
  score?: number;
  timeSpent?: number;
}

interface ProgressData {
  currentStep: number;
  totalSteps: number;
  overallProgress: number;
  timeRemaining: number; // in minutes
  totalTimeAllocated: number;
  steps: AssessmentStep[];
}

const InterviewProgressTracker = ({ 
  progressData, 
  onStepSelect 
}: { 
  progressData: ProgressData;
  onStepSelect: (stepId: string) => void;
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeWarnings, setTimeWarnings] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check for time warnings
    const warnings: string[] = [];
    
    if (progressData.timeRemaining <= 5) {
      warnings.push('Less than 5 minutes remaining!');
    } else if (progressData.timeRemaining <= 15) {
      warnings.push('15 minutes remaining - consider wrapping up current section');
    }

    const activeStep = progressData.steps.find(step => step.status === 'active');
    if (activeStep && activeStep.timeSpent && activeStep.timeSpent > activeStep.estimatedTime * 1.5) {
      warnings.push(`Spending extra time on ${activeStep.title} - consider moving forward`);
    }

    setTimeWarnings(warnings);
  }, [progressData]);

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  const getStepIcon = (step: AssessmentStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'active':
        return <PlayCircle className="w-5 h-5 text-blue-500 animate-pulse" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStepStatusColor = (step: AssessmentStep) => {
    switch (step.status) {
      case 'completed':
        return 'bg-green-100 border-green-300';
      case 'active':
        return 'bg-blue-100 border-blue-300';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Time Management Alerts */}
      {timeWarnings.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <div>
                {timeWarnings.map((warning, index) => (
                  <p key={index} className="text-orange-700 font-medium">{warning}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-white to-violet-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-zara-purple" />
            Interview Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Overall Progress</span>
              <span className="text-gray-600">{progressData.currentStep}/{progressData.totalSteps} steps</span>
            </div>
            <Progress value={progressData.overallProgress} className="h-3" />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Timer className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-600">Time Remaining</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  {formatTime(progressData.timeRemaining)}
                </div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-600">Completed</span>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  {progressData.steps.filter(s => s.status === 'completed').length}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step by Step Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Assessment Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progressData.steps.map((step, index) => (
              <div
                key={step.id}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${getStepStatusColor(step)}`}
                onClick={() => onStepSelect(step.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStepIcon(step)}
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {step.status === 'completed' && step.score && (
                      <Badge className="bg-green-100 text-green-700 border-green-200 mb-1">
                        Score: {step.score}/100
                      </Badge>
                    )}
                    <div className="text-sm text-gray-500">
                      {step.timeSpent ? formatTime(step.timeSpent) : formatTime(step.estimatedTime)} est.
                    </div>
                    {step.status === 'active' && step.timeSpent && step.timeSpent > step.estimatedTime && (
                      <div className="text-xs text-orange-600 font-medium">
                        Over time limit
                      </div>
                    )}
                  </div>
                </div>
                
                {step.status === 'active' && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Step Progress</span>
                      <span>{Math.min(100, ((step.timeSpent || 0) / step.estimatedTime) * 100).toFixed(0)}%</span>
                    </div>
                    <Progress 
                      value={Math.min(100, ((step.timeSpent || 0) / step.estimatedTime) * 100)} 
                      className="h-2"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Take Break
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Skip Step
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewProgressTracker;

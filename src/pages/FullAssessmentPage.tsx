
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Video, MessageSquare, Clock, CheckCircle, ArrowLeft, Save } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AssessmentWizard from '@/components/AssessmentWizard';

const FullAssessmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignment = location.state?.assignment;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Assignment not found</h1>
          <Button onClick={() => navigate('/candidate-dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const steps = [
    {
      id: 'coding',
      title: 'Coding Challenge',
      icon: Code,
      duration: '45 minutes',
      description: 'Solve the technical challenge using your preferred programming language'
    },
    {
      id: 'interview',
      title: 'AI Interview',
      icon: Video,
      duration: '20 minutes',
      description: 'Answer behavioral and technical questions via video responses'
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills Assessment',
      icon: MessageSquare,
      duration: '15 minutes',
      description: 'Complete situational and behavioral assessments'
    }
  ];

  const handleNext = () => {
    const currentStepId = steps[currentStep].id;
    if (!completedSteps.includes(currentStepId)) {
      setCompletedSteps([...completedSteps, currentStepId]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitAssessment = () => {
    navigate('/candidate-dashboard', { 
      state: { message: 'Assessment submitted successfully!' }
    });
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/candidate-dashboard')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{assignment.role}</h1>
                <p className="text-gray-600">{assignment.company}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="font-semibold">{Math.round(progress)}% Complete</div>
              </div>
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Save Progress
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assessment Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isCompleted = completedSteps.includes(step.id);
                  const isCurrent = index === currentStep;
                  
                  return (
                    <div
                      key={step.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isCurrent ? 'border-purple-500 bg-purple-50' :
                        isCompleted ? 'border-green-300 bg-green-50' :
                        'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-green-500 text-white' :
                          isCurrent ? 'bg-purple-500 text-white' :
                          'bg-gray-300 text-gray-600'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{step.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {React.createElement(steps[currentStep].icon, { className: "w-5 h-5" })}
                      {steps[currentStep].title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{steps[currentStep].duration}</span>
                    </div>
                  </div>
                  <Badge variant="outline">
                    Step {currentStep + 1} of {steps.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <AssessmentWizard
                  currentStep={currentStep}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  onSubmit={handleSubmitAssessment}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAssessmentPage;

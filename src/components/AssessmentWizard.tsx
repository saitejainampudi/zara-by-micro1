
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Video, MessageSquare, CheckCircle, Play, ArrowRight, ArrowLeft, Save, Send, Timer, Award } from 'lucide-react';

interface WizardProps {
  assignment: {
    id: string;
    role: string;
    company: string;
    deadline: string;
  };
  onComplete: () => void;
  onClose: () => void;
}

const AssessmentWizard: React.FC<WizardProps> = ({ assignment, onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [codeOutput, setCodeOutput] = useState('');
  const [code, setCode] = useState(`function fibonacci(n) {
  // Write your solution here
  
}`);

  const steps = [
    {
      id: 1,
      title: 'Coding Challenge',
      description: 'Solve the programming challenge',
      icon: Code,
      color: 'purple',
      duration: '45 min'
    },
    {
      id: 2,
      title: 'AI Interview',
      description: 'Record your video responses',
      icon: Video,
      color: 'blue',
      duration: '30 min'
    },
    {
      id: 3,
      title: 'Soft Skills Assessment',
      description: 'Complete behavioral questions',
      icon: MessageSquare,
      color: 'green',
      duration: '20 min'
    }
  ];

  const handleRunCode = () => {
    // Simulate code execution
    setCodeOutput(`Running test cases...
Test 1: fibonacci(5) -> Expected: 5, Got: 5 ✅
Test 2: fibonacci(10) -> Expected: 55, Got: 55 ✅
Test 3: fibonacci(0) -> Expected: 0, Got: 0 ✅

All tests passed! Your solution is correct.`);
  };

  const handleSubmitStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((completedSteps.length) / steps.length) * 100;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="p-8 border-b bg-gradient-to-r from-zara-purple-light to-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Assessment for {assignment.role}</h1>
            <p className="text-lg text-gray-600 mt-1">{assignment.company}</p>
          </div>
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            <Timer className="w-4 h-4 mr-1" />
            Due: {assignment.deadline}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{completedSteps.length} of {steps.length} completed</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
        
        {/* Step Indicators */}
        <div className="flex items-center justify-between mt-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                completedSteps.includes(index) 
                  ? 'bg-green-500 text-white' 
                  : index === currentStep 
                    ? 'bg-zara-purple text-white ring-4 ring-zara-purple/20' 
                    : 'bg-gray-200 text-gray-500'
              }`}>
                {completedSteps.includes(index) ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <step.icon className="w-6 h-6" />
                )}
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-900">{step.title}</p>
                <p className="text-xs text-gray-500">{step.duration}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-20 mx-6 transition-colors ${
                  completedSteps.includes(index) ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {currentStep === 0 && (
          <div className="space-y-8">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Code className="w-6 h-6 text-purple-600" />
                  Fibonacci Sequence Challenge
                </CardTitle>
                <CardDescription className="text-base">
                  Write a function that returns the nth number in the Fibonacci sequence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-lg">Problem Statement:</h4>
                  <p className="text-gray-700 mb-4">
                    The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers.
                    Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
                  </p>
                  <p className="text-gray-700">
                    <strong>Input:</strong> n (integer) <br />
                    <strong>Output:</strong> The nth Fibonacci number <br />
                    <strong>Example:</strong> fibonacci(5) should return 5
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Your Solution:</label>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-64 p-4 font-mono text-sm border rounded-lg bg-gray-900 text-green-400"
                    placeholder="Write your code here..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button onClick={handleRunCode} variant="outline" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Run Tests
                  </Button>
                  <Button onClick={() => setCode('')} variant="outline">
                    Clear
                  </Button>
                </div>
                
                {codeOutput && (
                  <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm whitespace-pre-line">
                    {codeOutput}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Video className="w-6 h-6 text-blue-600" />
                  AI Video Interview
                </CardTitle>
                <CardDescription className="text-base">
                  Answer the following questions in a 2-3 minute video response.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-lg">Question 1 of 3:</h4>
                  <p className="text-gray-700 text-base">
                    "Tell us about a challenging technical problem you solved recently. 
                    What was your approach and what did you learn from the experience?"
                  </p>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-6 text-lg">Click to start recording your response</p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                      <Video className="w-5 h-5 mr-2" />
                      Start Recording
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5" />
                    Max duration: 3 minutes
                  </div>
                  <div className="flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    Auto-saved every 30 seconds
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  Soft Skills Assessment
                </CardTitle>
                <CardDescription className="text-base">
                  Complete this behavioral assessment to showcase your soft skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-lg">Scenario-Based Question:</h4>
                  <p className="text-gray-700 mb-4 text-base">
                    You're working on a project with a tight deadline when a teammate asks for help 
                    with a critical bug in their code. However, helping them would significantly delay 
                    your own work. How would you handle this situation?
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Your Response:</label>
                  <textarea
                    className="w-full h-40 p-4 border rounded-lg resize-none text-base"
                    placeholder="Describe your approach and reasoning..."
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Teamwork', 'Problem Solving', 'Communication', 'Leadership'].map((skill) => (
                    <div key={skill} className="text-center p-4 border rounded-lg bg-gray-50">
                      <div className="text-3xl font-bold text-green-600">8.5</div>
                      <div className="text-sm text-gray-600 mt-1">{skill}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-8 border-t bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>
            Save & Exit
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
          <Button 
            onClick={handleSubmitStep}
            className="bg-zara-purple hover:bg-zara-purple-dark flex items-center gap-2 px-8 py-3"
            disabled={currentStep === 0 && !codeOutput}
          >
            {currentStep === steps.length - 1 ? (
              <>
                <Send className="w-4 h-4" />
                Submit Assessment
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentWizard;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Video, MessageSquare, CheckCircle, Play, ArrowRight, ArrowLeft, Save, Send, Timer, Award, Home } from 'lucide-react';

const AssessmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignment = location.state?.assignment || {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    deadline: 'March 20, 2024'
  };

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
      // Assessment completed
      navigate('/candidate-dashboard');
    }
  };

  const handleSaveAndExit = () => {
    navigate('/candidate-dashboard');
  };

  const currentStepData = steps[currentStep];
  const progress = ((completedSteps.length) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/candidate-dashboard')}
              className="hover:bg-violet-50"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Assessment for {assignment.role}</h1>
              <p className="text-gray-600">{assignment.company}</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            <Timer className="w-3 h-3 mr-1" />
            Due: {assignment.deadline}
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Progress Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Assessment Progress</span>
              <span>{completedSteps.length} of {steps.length} completed</span>
            </div>
            <Progress value={progress} className="h-3" />
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mt-6">
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
                  <div className="ml-3">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.duration}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 w-20 mx-4 transition-colors ${
                      completedSteps.includes(index) ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assessment Content */}
        <div className="space-y-6">
          {currentStep === 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Fibonacci Sequence Challenge
                </CardTitle>
                <CardDescription>
                  Write a function that returns the nth number in the Fibonacci sequence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Problem Statement:</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers.
                    Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Input:</strong> n (integer) <br />
                    <strong>Output:</strong> The nth Fibonacci number <br />
                    <strong>Example:</strong> fibonacci(5) should return 5
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Solution:</label>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 p-4 font-mono text-sm border rounded-lg bg-gray-900 text-green-400"
                    placeholder="Write your code here..."
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleRunCode} variant="outline" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Run Tests
                  </Button>
                  <Button onClick={() => setCode('')} variant="outline">
                    Clear
                  </Button>
                </div>
                
                {codeOutput && (
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-line">
                    {codeOutput}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-600" />
                  AI Video Interview
                </CardTitle>
                <CardDescription>
                  Answer the following questions in a 2-3 minute video response.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Question 1 of 3:</h4>
                  <p className="text-gray-700">
                    "Tell us about a challenging technical problem you solved recently. 
                    What was your approach and what did you learn from the experience?"
                  </p>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Video className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-600 mb-4">Click to start recording your response</p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                      <Video className="w-4 h-4 mr-2" />
                      Start Recording
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4" />
                    Max duration: 3 minutes
                  </div>
                  <div className="flex items-center gap-1">
                    <Save className="w-4 h-4" />
                    Auto-saved every 30 seconds
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Soft Skills Assessment
                </CardTitle>
                <CardDescription>
                  Complete this behavioral assessment to showcase your soft skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Scenario-Based Question:</h4>
                  <p className="text-gray-700 mb-4">
                    You're working on a project with a tight deadline when a teammate asks for help 
                    with a critical bug in their code. However, helping them would significantly delay 
                    your own work. How would you handle this situation?
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Response:</label>
                  <textarea
                    className="w-full h-32 p-4 border rounded-lg resize-none"
                    placeholder="Describe your approach and reasoning..."
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Teamwork', 'Problem Solving', 'Communication', 'Leadership'].map((skill) => (
                    <div key={skill} className="text-center p-3 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">8.5</div>
                      <div className="text-sm text-gray-600">{skill}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="bg-white border-t border-gray-200 rounded-lg p-6 mt-6 flex items-center justify-between">
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
            <Button variant="outline" onClick={handleSaveAndExit}>
              Save & Exit
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>
            <Button 
              onClick={handleSubmitStep}
              className="bg-zara-purple hover:bg-zara-purple-dark flex items-center gap-2"
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
    </div>
  );
};

export default AssessmentPage;

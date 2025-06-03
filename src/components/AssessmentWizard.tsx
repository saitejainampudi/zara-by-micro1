
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Code, Video, MessageSquare, Play, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface AssessmentWizardProps {
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const AssessmentWizard: React.FC<AssessmentWizardProps> = ({ 
  currentStep, 
  onNext, 
  onPrevious, 
  onSubmit 
}) => {
  const [code, setCode] = useState(`function longestPalindrome(s) {
  // Write your solution here
  
}`);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [hasRunTests, setHasRunTests] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleRunTests = () => {
    // Simulate test execution
    const results = [
      { test: 'Test 1: longestPalindrome("babad")', expected: '"bab"', result: '"bab"', passed: true },
      { test: 'Test 2: longestPalindrome("cbbd")', expected: '"bb"', result: '"bb"', passed: true },
      { test: 'Test 3: longestPalindrome("a")', expected: '"a"', result: '"a"', passed: true },
      { test: 'Test 4: longestPalindrome("ac")', expected: '"a"', result: '"a"', passed: true }
    ];
    setTestResults(results);
    setHasRunTests(true);
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording for demo
    setTimeout(() => setIsRecording(false), 3000);
  };

  if (currentStep === 0) {
    return (
      <div className="space-y-6">
        {/* Problem Statement */}
        <Card className="bg-gray-900 text-green-400 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400">
              <Code className="w-5 h-5" />
              Coding Challenge: Longest Palindromic Substring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                <h3 className="text-white font-semibold mb-3">Problem Statement:</h3>
                <p className="text-gray-300 mb-4">
                  Given a string s, return the longest palindromic substring in s.
                </p>
                <div className="bg-gray-700 p-3 rounded border">
                  <p className="text-sm text-green-300">Example:</p>
                  <code className="block mt-2 text-green-400">
                    Input: s = "babad"<br/>
                    Output: "bab" or "aba"<br/>
                    Explanation: Both "bab" and "aba" are valid answers.
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Editor */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-green-400">Code Editor</CardTitle>
              <div className="flex gap-2">
                <Button 
                  onClick={handleRunTests}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run Tests
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="min-h-[300px] font-mono bg-gray-800 text-green-400 border-gray-600 resize-none"
              placeholder="Write your code here..."
            />
          </CardContent>
        </Card>

        {/* Test Results */}
        {hasRunTests && (
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      {result.passed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-gray-300 font-mono text-sm">{result.test}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Expected: </span>
                      <span className="text-green-400">{result.expected}</span>
                      <span className="text-gray-400"> | Got: </span>
                      <span className={result.passed ? "text-green-400" : "text-red-400"}>
                        {result.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">
                  ✅ All tests passed! Your solution is correct.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" disabled>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button 
            onClick={onNext}
            disabled={!hasRunTests}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next Step
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        {/* AI Interview Screen */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-600" />
              AI Video Interview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300 relative overflow-hidden">
              {!isRecording ? (
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Interview Assistant</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    I'm ready to conduct your interview. Click start when you're ready to begin.
                  </p>
                  <Button 
                    onClick={handleStartRecording}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Start Interview
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Recording...</h3>
                  <p className="text-gray-600">Please answer the questions naturally</p>
                  <Badge variant="destructive" className="mt-2">
                    ● LIVE
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Interview Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-blue-700">
              <li>• Speak clearly and maintain eye contact with the camera</li>
              <li>• Take your time to think before answering</li>
              <li>• Provide specific examples from your experience</li>
              <li>• Be authentic and honest in your responses</li>
              <li>• The AI will ask follow-up questions based on your answers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onPrevious}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button 
            onClick={onNext}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next Step
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        {/* Soft Skills Assessment Screen */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-600" />
              Soft Skills Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 text-center border-2 border-dashed border-green-300">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Assessment</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Complete scenario-based questions to demonstrate your soft skills and problem-solving abilities.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Begin Assessment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Assessment Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-green-700">
              <li>• Answer based on your real experiences and situations</li>
              <li>• Consider multiple perspectives when addressing scenarios</li>
              <li>• Demonstrate empathy and emotional intelligence</li>
              <li>• Show your problem-solving and communication skills</li>
              <li>• There are no right or wrong answers, be genuine</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onPrevious}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button 
            onClick={onSubmit}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Submit Assessment
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default AssessmentWizard;

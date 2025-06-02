
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Sparkles, Target, Code, Video, MessageSquare, BarChart3, Clock, Award } from 'lucide-react';

interface OnboardingWizardProps {
  userRole: 'candidate' | 'recruiter';
  onComplete: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ userRole, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const candidateSteps = [
    {
      title: "Welcome to Zara AI",
      description: "Your AI-powered career companion",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Land Your Dream Job</h3>
            <p className="text-gray-600">Complete AI-powered assessments to showcase your skills and connect with top employers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Code, title: "Coding Tests", desc: "Demonstrate technical skills" },
              { icon: Video, title: "AI Interviews", desc: "Showcase communication" },
              { icon: MessageSquare, title: "Soft Skills", desc: "Highlight personality" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "How It Works",
      description: "Simple 3-step process",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {[
              { step: 1, title: "Join Assessment", desc: "Use access code or direct link from recruiters", icon: Target },
              { step: 2, title: "Complete Challenges", desc: "Coding, AI interview, and soft skills assessments", icon: Code },
              { step: 3, title: "Get Results", desc: "Receive instant feedback and connect with employers", icon: Award }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Assessment Tips",
      description: "Maximize your success",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Pro Tips for Success:</h4>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Find a quiet environment with stable internet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Test your microphone and camera beforehand
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Read instructions carefully before starting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Be authentic and showcase your personality
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Ready to begin your journey?</p>
            <Badge className="bg-blue-100 text-blue-700">Average completion time: 45 minutes</Badge>
          </div>
        </div>
      )
    }
  ];

  const recruiterSteps = [
    {
      title: "Welcome to Zara AI",
      description: "AI-powered recruitment platform",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transform Your Hiring</h3>
            <p className="text-gray-600">Leverage AI to identify top talent faster and more accurately than ever before.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Target, title: "Smart Matching", desc: "AI-powered candidate screening" },
              { icon: BarChart3, title: "Data Insights", desc: "Comprehensive analytics" },
              { icon: Clock, title: "Save Time", desc: "60% faster hiring process" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-purple-50 rounded-lg">
                <item.icon className="w-8 h-8 text-zara-purple mx-auto mb-2" />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Platform Overview",
      description: "Your recruitment command center",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {[
              { title: "Create Roles", desc: "AI-assisted job description creation with smart requirements", icon: Target },
              { title: "Review Candidates", desc: "Ranked candidates with detailed AI assessments and scores", icon: Users },
              { title: "Track Analytics", desc: "Real-time insights on hiring performance and success metrics", icon: BarChart3 }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-zara-purple rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Best Practices",
      description: "Maximize your hiring success",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Hiring Excellence Tips:</h4>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Set clear role requirements and deadlines
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Review AI insights alongside candidate profiles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Use collaborative features for team decisions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Track metrics to optimize future hiring
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Ready to hire smarter?</p>
            <Badge className="bg-purple-100 text-purple-700">Average time-to-hire: 14 days (60% faster)</Badge>
          </div>
        </div>
      )
    }
  ];

  const steps = userRole === 'candidate' ? candidateSteps : recruiterSteps;
  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
              <CardDescription className="text-lg">{steps[currentStep].description}</CardDescription>
            </div>
            <Badge variant="outline">{currentStep + 1} of {totalSteps}</Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent>
          <div className="mb-8">
            {steps[currentStep].content}
          </div>
          
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            <Button 
              onClick={handleNext}
              className={userRole === 'candidate' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-zara-purple hover:bg-zara-purple-dark'}
            >
              {currentStep === totalSteps - 1 ? 'Get Started' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingWizard;

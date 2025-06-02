
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, User, Building } from 'lucide-react';

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'candidate' as 'candidate' | 'recruiter',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in with:', formData);
    
    // Store user role in session storage
    sessionStorage.setItem('userRole', formData.role);
    
    // Navigate based on role
    if (formData.role === 'recruiter') {
      navigate('/recruiter-dashboard');
    } else {
      navigate('/candidate-dashboard');
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Sign In Card */}
        <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-gray-200">
          <CardHeader className="text-center pb-6">
            <div className="mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-zara-purple-dark to-zara-purple bg-clip-text text-transparent">
                Zara
              </span>
              <span className="ml-1 text-xs text-zara-gray bg-zara-purple-light px-1.5 py-0.5 rounded-md">
                by micro1
              </span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to continue your AI-powered recruitment journey
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">I am a:</label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={formData.role === 'candidate' ? 'default' : 'outline'}
                  className={`w-full justify-start ${
                    formData.role === 'candidate' 
                      ? 'bg-zara-purple hover:bg-zara-purple-dark' 
                      : 'hover:bg-violet-50'
                  }`}
                  onClick={() => handleInputChange('role', 'candidate')}
                >
                  <User className="w-4 h-4 mr-2" />
                  Candidate
                </Button>
                <Button
                  type="button"
                  variant={formData.role === 'recruiter' ? 'default' : 'outline'}
                  className={`w-full justify-start ${
                    formData.role === 'recruiter' 
                      ? 'bg-zara-purple hover:bg-zara-purple-dark' 
                      : 'hover:bg-violet-50'
                  }`}
                  onClick={() => handleInputChange('role', 'recruiter')}
                >
                  <Building className="w-4 h-4 mr-2" />
                  Recruiter
                </Button>
              </div>
            </div>

            <Separator className="bg-gray-200" />

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 border-gray-300 focus:border-zara-purple focus:ring-zara-purple"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 border-gray-300 focus:border-zara-purple focus:ring-zara-purple"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange('rememberMe', checked)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Button variant="link" className="text-sm text-zara-purple hover:text-zara-purple-dark p-0">
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full bg-zara-purple hover:bg-zara-purple-dark text-white font-medium py-2.5 transition-all duration-200 hover:shadow-lg"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Button variant="link" className="text-sm text-zara-purple hover:text-zara-purple-dark p-0">
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-4 bg-violet-50 border-violet-200">
          <CardContent className="pt-4">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="text-left">
                  <div className="font-medium text-gray-600">Candidate:</div>
                  <div className="text-gray-500">candidate@demo.com</div>
                  <div className="text-gray-500">demo123</div>
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-600">Recruiter:</div>
                  <div className="text-gray-500">recruiter@demo.com</div>
                  <div className="text-gray-500">demo123</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;

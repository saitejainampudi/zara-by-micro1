
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

  const handleSocialSignIn = (provider: 'google' | 'microsoft') => {
    console.log(`Sign in with ${provider}`);
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

            {/* Social Sign In */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                onClick={() => handleSocialSignIn('google')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                onClick={() => handleSocialSignIn('microsoft')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                </svg>
                Continue with Microsoft
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

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
      </div>
    </div>
  );
};

export default SignInPage;

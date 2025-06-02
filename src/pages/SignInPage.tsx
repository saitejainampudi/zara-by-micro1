
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Users, UserCheck, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Sign in with:', { email, password, role, rememberMe });
    
    // Store role in session storage for demo purposes
    sessionStorage.setItem('userRole', role);
    
    // Redirect based on role
    if (role === 'recruiter') {
      navigate('/recruiter-dashboard');
    } else if (role === 'candidate') {
      navigate('/candidate-dashboard');
    }
    
    setIsLoading(false);
  };

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zara-lavender to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-5xl">
          {/* Role Selection Cards */}
          {!role && (
            <div className="mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Zara AI</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose your role to get started with the right experience for you
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0"
                  onClick={() => handleRoleSelect('recruiter')}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">I'm a Recruiter</CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Find and evaluate top talent with AI-powered interviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Create custom interview flows
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Review AI-generated insights
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Manage candidate pipeline
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                        Continue as Recruiter
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0"
                  onClick={() => handleRoleSelect('candidate')}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <UserCheck className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">I'm a Candidate</CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Showcase your skills and land your dream job
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Take adaptive AI interviews
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Get instant feedback
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Track your progress
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                        Continue as Candidate
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Sign In Form */}
          {role && (
            <div className="max-w-md mx-auto animate-fade-in">
              <Card className="bg-white rounded-xl shadow-xl border-0 overflow-hidden">
                <CardHeader className="text-center p-8 bg-gradient-to-r from-gray-50 to-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {role === 'recruiter' ? <Users className="w-8 h-8 text-white" /> : <UserCheck className="w-8 h-8 text-white" />}
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    Sign In as {role === 'recruiter' ? 'Recruiter' : 'Candidate'}
                  </CardTitle>
                  <CardDescription>
                    Welcome back! Enter your credentials to continue.
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    onClick={() => setRole('')}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Choose different role
                  </Button>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full transition-all duration-200 focus:ring-2 focus:ring-zara-purple focus:border-transparent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <Link to="/forgot-password" className="text-sm text-zara-purple hover:underline transition-colors">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                          className="w-full pr-10 transition-all duration-200 focus:ring-2 focus:ring-zara-purple focus:border-transparent"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-zara-purple focus:ring-zara-purple border-gray-300 rounded transition-colors"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-zara-purple hover:bg-zara-purple-dark transition-all duration-200 hover:shadow-lg hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Signing In...
                        </div>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/start-interviewing" className="text-zara-purple hover:underline font-medium transition-colors">
                          Get started
                        </Link>
                      </p>
                    </div>
                  </form>
                  
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <span>Google</span>
                      </button>
                      <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <span>Microsoft</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignInPage;

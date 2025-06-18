import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const StartInterviewing = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    teamSize: '',
    companySize: '',
    hearAboutUs: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demonstration, show a success toast
    toast({
      title: "Account created!",
      description: "We've sent you an email with next steps.",
    });
    
    // Normally you would submit this data to your backend
    console.log('Submitted form data:', formData);
  };

  return (
    <div className="min-h-screen bg-purple-100">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Start Interviewing with Exterview</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Set up your account and start conducting AI-powered technical interviews in minutes.
                </p>
              </div>
              
              {/* Progress Steps */}
              <div className="mb-10">
                <div className="flex items-center justify-center">
                  <div className={`flex items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>1</div>
                    <span className="hidden sm:inline text-sm">Account</span>
                  </div>
                  <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>2</div>
                    <span className="hidden sm:inline text-sm">Company</span>
                  </div>
                  <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>3</div>
                    <span className="hidden sm:inline text-sm">Job Details</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Account Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name*
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name*
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Work Email*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="you@company.com"
                      />
                      <p className="text-xs text-gray-500">We'll send a verification code to this email.</p>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="button"
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => setStep(2)}
                      >
                        Continue
                      </Button>
                    </div>
                    
                    <div className="text-center pt-2">
                      <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-purple-600 hover:underline font-medium">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Company Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name*
                      </label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                        Your Job Title*
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
                          Engineering Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm rounded-md"
                        >
                          <option value="">Select option</option>
                          <option value="1-5">1-5 engineers</option>
                          <option value="6-20">6-20 engineers</option>
                          <option value="21-50">21-50 engineers</option>
                          <option value="51-200">51-200 engineers</option>
                          <option value="200+">200+ engineers</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                          Company Size
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm rounded-md"
                        >
                          <option value="">Select option</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700">
                        How did you hear about Zara?
                      </label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm rounded-md"
                      >
                        <option value="">Select option</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend or Colleague</option>
                        <option value="blog">Blog or Publication</option>
                        <option value="event">Event or Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-purple-600 text-purple-600 hover:bg-purple-100"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={() => setStep(3)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Job Description */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Job Description (optional)
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm"
                        placeholder="Paste your job description here to let Zara know what you're looking for..."
                      ></textarea>
                      <p className="text-xs text-gray-500">
                        This helps Zara create tailored interviews for your specific needs.
                      </p>
                    </div>
                    
                    <div className="bg-purple-100 p-6 rounded-lg">
                      <h3 className="font-bold text-purple-800 mb-3">What You'll Get:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Create your first AI interviewer in minutes</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>14-day free trial of our Professional plan</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Unlimited test interviews during your trial period</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No credit card required to start your trial</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-purple-600 text-purple-600 hover:bg-purple-100"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Create Account
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartInterviewing;

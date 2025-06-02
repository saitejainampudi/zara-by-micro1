
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = sessionStorage.getItem('userRole');

  const handleSignOut = () => {
    sessionStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-zara-purple">
            Zara AI
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {!userRole ? (
              // Public navigation
              <>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors">
                  How It Works
                </Link>
                <Link to="/pricing" className="text-gray-700 hover:text-zara-purple transition-colors">
                  Pricing
                </Link>
                <Link to="/success-stories" className="text-gray-700 hover:text-zara-purple transition-colors">
                  Success Stories
                </Link>
              </>
            ) : userRole === 'recruiter' ? (
              // Recruiter navigation
              <>
                <Link to="/recruiter-dashboard" className="text-gray-700 hover:text-zara-purple transition-colors">
                  Dashboard
                </Link>
                <Link to="/job-upload" className="text-gray-700 hover:text-zara-purple transition-colors">
                  Job Management
                </Link>
                <Link to="/candidates" className="text-gray-700 hover:text-zara-purple transition-colors">
                  All Candidates
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors">
                  How It Works
                </Link>
              </>
            ) : (
              // Candidate navigation
              <>
                <Link to="/candidate-dashboard" className="text-gray-700 hover:text-zara-purple transition-colors">
                  Dashboard
                </Link>
                <Link to="/ai-interview" className="text-gray-700 hover:text-zara-purple transition-colors">
                  AI Interview
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors">
                  How It Works
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {!userRole ? (
              <Link to="/signin">
                <Button className="bg-zara-purple hover:bg-zara-purple-dark transition-all duration-200 hover:shadow-lg">
                  Sign In
                </Button>
              </Link>
            ) : (
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="border-zara-purple text-zara-purple hover:bg-zara-purple hover:text-white transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

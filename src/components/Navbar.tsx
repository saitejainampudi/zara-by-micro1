
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogOut, User, BarChart3 } from 'lucide-react';

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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-zara-purple-dark to-zara-purple bg-clip-text text-transparent">
              Exterview
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {!userRole ? (
              // Public navigation
              <>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  How It Works
                </Link>
                <Link to="/pricing" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  Pricing
                </Link>
                <Link to="/success-stories" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  Success Stories
                </Link>
              </>
            ) : userRole === 'recruiter' ? (
              // Recruiter navigation
              <>
                <Link 
                  to="/recruiter-dashboard" 
                  className="text-gray-700 hover:text-zara-purple transition-colors font-medium flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link to="/job-upload" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  Job Management
                </Link>
                <Link to="/candidates" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  All Candidates
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
                  Resources
                </Link>
              </>
            ) : (
              // Candidate navigation
              <>
                <Link 
                  to="/candidate-dashboard" 
                  className="text-gray-700 hover:text-zara-purple transition-colors font-medium flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors font-medium">
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
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-zara-purple-light rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-zara-purple" />
                  </div>
                  <span className="capitalize font-medium">{userRole}</span>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                  className="border-zara-purple text-zara-purple hover:bg-zara-purple hover:text-white transition-all duration-200"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

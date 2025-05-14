
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-10 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-zara-purple-dark to-zara-purple bg-clip-text text-transparent">
              Zara
            </span>
            <span className="ml-1 text-sm text-zara-gray bg-zara-purple-light px-2 py-0.5 rounded-md">
              by Micro1
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/how-it-works" className="text-gray-700 hover:text-zara-purple transition-colors">
              How it Works
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-zara-purple transition-colors">
              Pricing
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-zara-purple transition-colors">
              Success Stories
            </Link>
            <Link to="/signin">
              <Button variant="outline" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                Sign In
              </Button>
            </Link>
            <Link to="/start-interviewing">
              <Button className="bg-zara-purple hover:bg-zara-purple-dark text-white">
                Start Interviewing
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-zara-purple px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-zara-purple px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/success-stories"
                className="text-gray-700 hover:text-zara-purple px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                to="/signin"
                className="text-gray-700 hover:text-zara-purple px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/start-interviewing"
                className="bg-zara-purple text-white px-4 py-2 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Interviewing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

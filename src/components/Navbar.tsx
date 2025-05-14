
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
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Zara
            </span>
            <span className="ml-1 text-xs text-zara-panel bg-zara-primary px-2 py-0.5 rounded-md">
              by Micro1
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/how-it-works" className="text-zara-text-primary hover:text-zara-primary transition-colors">
              How it Works
            </Link>
            <Link to="/pricing" className="text-zara-text-primary hover:text-zara-primary transition-colors">
              Pricing
            </Link>
            <Link to="/success-stories" className="text-zara-text-primary hover:text-zara-primary transition-colors">
              Success Stories
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="border-zara-primary text-zara-primary hover:bg-zara-background">
                Sign In
              </Button>
            </Link>
            <Link to="/job-upload">
              <Button className="bg-zara-primary hover:bg-zara-purple-dark text-white">
                Start Interviewing
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-zara-text-primary hover:text-zara-primary focus:outline-none"
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
                className="text-zara-text-primary hover:text-zara-primary px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                to="/pricing"
                className="text-zara-text-primary hover:text-zara-primary px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/success-stories"
                className="text-zara-text-primary hover:text-zara-primary px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                to="/dashboard"
                className="text-zara-text-primary hover:text-zara-primary px-2 py-1 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/job-upload"
                className="bg-zara-primary text-white px-4 py-2 rounded-md text-center"
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

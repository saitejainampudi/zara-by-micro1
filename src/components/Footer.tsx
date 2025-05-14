
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-zara-purple-dark to-zara-purple bg-clip-text text-transparent">
                Zara
              </span>
              <span className="ml-1 text-xs text-zara-gray bg-zara-purple-light px-1.5 py-0.5 rounded-md">
                by Micro1
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Smart AI agent that interviews, evaluates, and shortlists candidates — all on autopilot.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-zara-purple transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-zara-purple transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-zara-purple transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-zara-purple transition-colors">Pricing</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 hover:text-zara-purple transition-colors">Success Stories</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-zara-purple transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-zara-purple transition-colors">About Micro1</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-zara-purple transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-zara-purple transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-zara-purple transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-zara-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-zara-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-zara-purple transition-colors">Security</Link></li>
              <li><Link to="/compliance" className="text-gray-600 hover:text-zara-purple transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Micro1. All rights reserved. Zara AI Recruiter Platform.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

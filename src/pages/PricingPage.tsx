import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="min-h-screen bg-[#DBDAF5]">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the plan that's right for your team. All plans include core interviewing functionality.
            </p>
          </div>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>Monthly</span>
            <div 
              className={`mx-4 w-12 h-6 bg-purple-600 rounded-full flex items-center px-1 cursor-pointer ${isAnnual ? 'justify-end' : 'justify-start'}`}
              onClick={toggleBilling}
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>Yearly</span>
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Save 20%
            </span>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Early Stage Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">Early Stage</h3>
                <p className="text-gray-600 mb-6">Perfect for small teams and startups</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{isAnnual ? "$1,430" : "$149"}</span>
                  <span className="text-gray-600 ml-2">/{isAnnual ? "year" : "month"}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-6">
                    <span className="line-through">$1,788</span> (Save 20%)
                  </p>
                )}
                <Link to="/start-interviewing">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </Link>
                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <h4 className="font-semibold mb-2">FEATURES</h4>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Access to pre-vetted talent pool</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>AI talent sourcing</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Talent management dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>20 AI interviews per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Bulk invite candidates to AI interviews</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom pipeline stages</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Slack integration</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-purple-600">
              <div className="bg-purple-600 text-white py-2 text-center font-medium">
                Most Popular
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">Growth</h3>
                <p className="text-gray-600 mb-6">For growing teams and companies</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{isAnnual ? "$5,750" : "$599"}</span>
                  <span className="text-gray-600 ml-2">/{isAnnual ? "year" : "month"}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-6">
                    <span className="line-through">$7,188</span> (Save 20%)
                  </p>
                )}
                <Link to="/start-interviewing">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </Link>
                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <h4 className="font-semibold mb-2">FEATURES</h4>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Everything from Early Stage</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>100 AI interviews per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom questions interview</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Interview in 15 languages</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Customize branding</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>50+ ATS integrations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enterprise CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">More than 100 interviews per month?</p>
            <Link to="/contact">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600-light">
                Get Custom Pricing
              </Button>
            </Link>
          </div>
          
          {/* ATS Integrations Section */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Zara integrates with your ATS</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                {["Workday", "Lever", "Greenhouse", "Workable", "Ashby", 
                  "SAP SuccessFactors", "SmartRecruiters", "Recruitee", 
                  "Teamtailor", "Onlyfy", "Personio", "Breezy HR"].map((ats) => (
                  <div key={ats} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 flex items-center justify-center text-gray-500 font-bold">
                      {ats.charAt(0)}
                    </div>
                    <p className="text-sm">{ats}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Can I switch plans later?</h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on your billing cycle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Is there a free trial?</h3>
                <p className="text-gray-700">
                  Yes, we offer a 14-day free trial so you can experience the full power of Zara before committing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">What happens if I exceed my monthly interviews?</h3>
                <p className="text-gray-700">
                  You'll be notified when you approach your limit. Additional interviews are billed at a per-interview rate based on your current plan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Do I need to sign a long-term contract?</h3>
                <p className="text-gray-700">
                  No, our plans are month-to-month with no long-term commitment. Annual plans offer a 20% discount but can be canceled anytime.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your hiring?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <Link to="/start-interviewing">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;

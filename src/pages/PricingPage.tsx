
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-zara-lavender">
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
            <span className="text-gray-600 font-medium">Billed Monthly</span>
            <div className="mx-4 w-12 h-6 bg-zara-purple rounded-full flex items-center px-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
            </div>
            <span className="text-gray-900 font-medium">Billed Annually</span>
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Save 20%
            </span>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small teams and startups</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <Link to="/start-interviewing">
                  <Button className="w-full bg-zara-purple hover:bg-zara-purple-dark">
                    Get Started
                  </Button>
                </Link>
                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Up to 20 interviews per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Technical skill assessment</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Anti-cheating monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Interview recordings</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic ATS integration</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Email support</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-zara-purple transform scale-105">
              <div className="bg-zara-purple text-white py-2 text-center font-medium">
                Most Popular
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">Professional</h3>
                <p className="text-gray-600 mb-6">For growing teams and companies</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$1,299</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <Link to="/start-interviewing">
                  <Button className="w-full bg-zara-purple hover:bg-zara-purple-dark">
                    Get Started
                  </Button>
                </Link>
                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Up to 100 interviews per month</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>All Starter features</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom interview questions</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Full ATS integration</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Priority email & chat support</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Team collaboration tools</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <Link to="/start-interviewing">
                  <Button className="w-full bg-zara-purple hover:bg-zara-purple-dark">
                    Contact Us
                  </Button>
                </Link>
                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Unlimited interviews</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>All Professional features</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>SSO and advanced security</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>24/7 phone & email support</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom SLAs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Comparison */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Compare Plan Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-semibold">Professional</th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Monthly interviews</td>
                    <td className="px-6 py-4 text-center">20</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">100</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Technical interview assessment</td>
                    <td className="px-6 py-4 text-center">✓</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark">✓</td>
                    <td className="px-6 py-4 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Coding exercises</td>
                    <td className="px-6 py-4 text-center">Limited</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">Full library</td>
                    <td className="px-6 py-4 text-center">Custom + Full library</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Anti-cheating technology</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">Advanced</td>
                    <td className="px-6 py-4 text-center">Enterprise-grade</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Interview recordings</td>
                    <td className="px-6 py-4 text-center">30 days</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">1 year</td>
                    <td className="px-6 py-4 text-center">Custom retention</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Interview customization</td>
                    <td className="px-6 py-4 text-center">Limited</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">Full</td>
                    <td className="px-6 py-4 text-center">Full + Custom branding</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">ATS integration</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">Advanced</td>
                    <td className="px-6 py-4 text-center">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Team members</td>
                    <td className="px-6 py-4 text-center">2</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">10</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Support</td>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark font-medium">Priority email & chat</td>
                    <td className="px-6 py-4 text-center">24/7 dedicated support</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">API access</td>
                    <td className="px-6 py-4 text-center">—</td>
                    <td className="px-6 py-4 text-center bg-zara-purple-light text-zara-purple-dark">Limited</td>
                    <td className="px-6 py-4 text-center">Full</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-20 bg-white rounded-xl shadow-md p-8 md:p-10 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-zara-purple-light text-zara-purple-dark text-xl font-bold flex items-center justify-center">
                  JM
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="text-4xl text-zara-purple mb-4">"</div>
                <p className="text-lg mb-6">
                  Zara has transformed our technical hiring process. We've reduced time-to-hire by 60% while maintaining incredibly high hiring standards. The AI interviews are consistently fair and thorough, and candidates appreciate the flexibility.
                </p>
                <div>
                  <p className="font-bold">Julia Martinez</p>
                  <p className="text-gray-600">VP of Engineering, TechCorp</p>
                </div>
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
                  Yes, we offer a 14-day free trial on our Professional plan so you can experience the full power of Zara before committing.
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
                  No, our Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans are customized based on your needs.
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
              <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark">
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

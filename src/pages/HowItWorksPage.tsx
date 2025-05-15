
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Zara Works</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI-powered platform streamlines your technical hiring process from sourcing to assessment, 
              helping you find the best talent faster and more effectively.
            </p>
          </div>
          
          {/* Process Overview */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-zara-purple-light text-zara-purple-dark text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Define Your Requirements</h3>
                <p className="text-gray-600">
                  Upload your job description or specify skills and experience needed. Zara learns what you're looking for.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-zara-purple-light text-zara-purple-dark text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Interviews</h3>
                <p className="text-gray-600">
                  Zara conducts technical interviews, adapts questions based on responses, and evaluates candidates' skills.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-zara-purple-light text-zara-purple-dark text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Detailed Insights</h3>
                <p className="text-gray-600">
                  Review comprehensive assessments, technical ratings, and interview recordings to make informed decisions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature Sections */}
          <div className="space-y-24 mb-20">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">AI-Powered Technical Interviews</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Zara conducts dynamic technical interviews customized to each role and candidate. Our AI adapts in real-time, diving deeper on strengths and probing areas of concern.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Customized interview questions based on job requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Adaptive follow-up questions to thoroughly assess knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Conversational experience feels natural, not robotic</span>
                  </li>
                </ul>
                <Link to="/start-interviewing">
                  <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                    Start Using Zara
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="bg-zara-gray-lightest p-4 rounded-lg mb-4 border border-gray-100">
                    <p className="font-medium mb-2">Interview Transcript Excerpt:</p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="font-bold mr-2">Zara:</span>
                        <p>Could you explain how React's useEffect hook works, particularly regarding dependency arrays?</p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold mr-2">Candidate:</span>
                        <p>The useEffect hook lets you perform side effects in functional components. The dependency array controls when the effect runs...</p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold mr-2">Zara:</span>
                        <p>Great explanation. What happens if you provide an empty dependency array? And how does that differ from no dependency array at all?</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">AI Analysis:</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Candidate demonstrates solid understanding of React hooks. Initial explanation was accurate but lacked details on edge cases. Follow-up question revealed deeper knowledge of dependency array behavior. Recommended additional questions on performance optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-zara-purple-light rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500 mx-auto flex items-center justify-center text-white font-medium text-lg mb-2">
                        92
                      </div>
                      <p className="text-sm font-medium">Algorithm Design</p>
                    </div>
                    <div className="p-4 bg-zara-purple-light rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500 mx-auto flex items-center justify-center text-white font-medium text-lg mb-2">
                        89
                      </div>
                      <p className="text-sm font-medium">System Design</p>
                    </div>
                    <div className="p-4 bg-zara-purple-light rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500 mx-auto flex items-center justify-center text-white font-medium text-lg mb-2">
                        76
                      </div>
                      <p className="text-sm font-medium">Database Knowledge</p>
                    </div>
                    <div className="p-4 bg-zara-purple-light rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500 mx-auto flex items-center justify-center text-white font-medium text-lg mb-2">
                        85
                      </div>
                      <p className="text-sm font-medium">Problem Solving</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Skill Assessment Summary:</p>
                    <p className="text-sm text-gray-600">
                      Candidate demonstrates exceptional algorithm design skills with strong problem-solving abilities. Has solid system design knowledge but could benefit from more experience with complex database architectures. Overall, shows great promise for senior developer roles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Comprehensive Skill Assessment</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Get detailed evaluations across multiple technical dimensions. Zara breaks down candidate performance into specific skill areas, giving you clear insights into strengths and areas for growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Granular assessment across 10+ technical dimensions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Objective, bias-free evaluation based on technical merit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Personalized insights and recommendations for each candidate</span>
                  </li>
                </ul>
                <Link to="/candidates">
                  <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                    Browse Candidates
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Anti-Cheating Technology</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ensure the integrity of your technical interviews with Zara's advanced proctoring system. Our AI monitors for potential cheating behaviors while remaining respectful of candidate privacy.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Monitors eye movements and screen focus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Detects tab switching and background activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      ✓
                    </div>
                    <span>Transparent proctoring score with detailed violation reports</span>
                  </li>
                </ul>
                <Link to="/start-interviewing">
                  <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                    Try It Now
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-lg">Proctoring Report</h4>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                        92%
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Session Overview:</h5>
                      <div className="bg-gray-50 p-3 rounded-lg text-sm">
                        <p><span className="font-medium">Duration:</span> 47 minutes</p>
                        <p><span className="font-medium">Questions:</span> 8 technical questions</p>
                        <p><span className="font-medium">Environment:</span> Browser-based coding environment</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Monitored Behaviors:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 text-xs">
                            ✓
                          </div>
                          <span>Screen focus maintained throughout session</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 text-xs">
                            ✓
                          </div>
                          <span>No additional tabs or applications detected</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2 text-xs">
                            !
                          </div>
                          <span>Brief eye movement away from screen (2 seconds) during question 5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-zara-purple text-white rounded-xl shadow-md p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your technical hiring?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies saving thousands of engineering hours with Zara's AI-powered interview platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/start-interviewing">
                <Button size="lg" className="bg-white text-zara-purple hover:bg-gray-100">
                  Start Interviewing
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-zara-purple-dark bg-gradient-to-r from-[#7E69AB] to-[#6E59A5]">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">How accurate is Zara's assessment?</h3>
                <p className="text-gray-700">
                  Zara's assessments have been validated to be 94% consistent with expert human interviewers. We regularly benchmark our system against senior engineering managers from top tech companies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">What technical roles does Zara support?</h3>
                <p className="text-gray-700">
                  Zara supports interviews for software engineering, data science, ML engineering, DevOps, and other technical roles across multiple languages and frameworks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Can I customize the interview questions?</h3>
                <p className="text-gray-700">
                  Yes, you can provide custom questions or use Zara's library of pre-vetted questions. You can also specify focus areas based on your job requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-3">How do candidates feel about AI interviews?</h3>
                <p className="text-gray-700">
                  Our surveys show 89% of candidates rate their experience with Zara as positive or very positive, appreciating the objective assessment and flexible scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

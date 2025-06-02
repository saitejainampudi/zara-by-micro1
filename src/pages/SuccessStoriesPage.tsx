import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-zara-lavender">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how companies are transforming their technical hiring process with Zara AI.
            </p>
          </div>
          
          {/* Featured Story */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-16">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                    F
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold text-xl">FlowFi</h2>
                    <p className="text-gray-600">Financial Technology</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  "Zara reduced our time-to-hire by 71% while improving candidate quality"
                </h3>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="Brian Chen" 
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">Brian Chen</p>
                      <p className="text-gray-600 text-sm">CTO at FlowFi</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    "Before Zara, our engineering team was spending over 20 hours per week on technical interviews. 
                    We were drowning in the process, and it was taking away from our core product development.
                  </p>
                  <p>
                    Since implementing Zara, we've completely transformed our hiring funnel. The AI conducts initial 
                    technical assessments that are actually thorough and accurate. Now our engineers only speak with 
                    pre-qualified candidates who have demonstrated their technical abilities.
                  </p>
                  <p>
                    The result? We've reduced our time-to-hire from 47 days to just 13 days on average, and our offer 
                    acceptance rate has increased by 35%. The quality of candidates has also improved dramatically."
                  </p>
                </div>
                <div>
                  <div className="mb-2 font-medium">Results:</div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-zara-purple-light p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-zara-purple-dark">71%</p>
                      <p className="text-sm text-zara-purple-dark">Time-to-hire reduction</p>
                    </div>
                    <div className="bg-zara-purple-light p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-zara-purple-dark">35%</p>
                      <p className="text-sm text-zara-purple-dark">Higher offer acceptance</p>
                    </div>
                    <div className="bg-zara-purple-light p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-zara-purple-dark">$175K</p>
                      <p className="text-sm text-zara-purple-dark">Annual cost savings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-gray-100">
                <div className="h-full relative">
                  <AspectRatio ratio={4/3}>
                    <div className="h-full w-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                        alt="FlowFi team working" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl text-white">▶</span>
                          </div>
                          <p className="font-medium text-white">Watch FlowFi's Story</p>
                          <p className="text-sm text-gray-300">See how they transformed hiring</p>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Story 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop" 
                      alt="Monday team collaboration" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-bold text-lg mr-3">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold">Monday</h4>
                    <p className="text-sm text-gray-600">Project Management</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "We scaled our engineering team 3x in six months with Zara"
                </h3>
                <p className="text-gray-700 mb-6">
                  "After a major funding round, we needed to hire 45 engineers quickly without sacrificing quality. 
                  Zara allowed our small recruiting team to handle the volume while maintaining our high bar."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                    alt="Sara Lee" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">Sara Lee</p>
                    <p className="text-gray-600 text-sm">VP of Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop" 
                      alt="RunPod cloud infrastructure" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-lg mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold">RunPod</h4>
                    <p className="text-sm text-gray-600">Cloud Computing</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "Zara improved our candidate experience dramatically"
                </h3>
                <p className="text-gray-700 mb-6">
                  "Our candidates love the flexibility of Zara interviews. They can complete them on their own time, 
                  and the AI provides immediate feedback. Our candidate satisfaction scores are up 48%."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="Alex Johnson" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-gray-600 text-sm">Head of Talent</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=225&fit=crop" 
                      alt="DocDraft legal tech office" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-lg mr-3">
                    D
                  </div>
                  <div>
                    <h4 className="font-bold">DocDraft</h4>
                    <p className="text-sm text-gray-600">Legal Tech</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "Zara eliminated bias from our technical interviews"
                </h3>
                <p className="text-gray-700 mb-6">
                  "Our engineering team is now 42% women and 38% underrepresented minorities—up from 17% and 12% 
                  respectively. Zara's objective assessments helped us build a truly diverse team."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" 
                    alt="Maria Patel" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">Maria Patel</p>
                    <p className="text-gray-600 text-sm">CTO</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1615795343955-592705df4986?w=400&h=225&fit=crop" 
                      alt="Jump crypto web3 team" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold text-lg mr-3">
                    J
                  </div>
                  <div>
                    <h4 className="font-bold">Jump</h4>
                    <p className="text-sm text-gray-600">Crypto/Web3</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "Zara helped us evaluate specialized blockchain skills"
                </h3>
                <p className="text-gray-700 mb-6">
                  "Finding qualified Solidity developers was nearly impossible. Zara's customized interviews allowed 
                  us to accurately assess blockchain-specific technical skills and build our team faster."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1544006659-f0b21884cebd?w=150&h=150&fit=crop&crop=face" 
                    alt="James Wilson" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">James Wilson</p>
                    <p className="text-gray-600 text-sm">Engineering Director</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop" 
                      alt="Intellux AI ML team" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-lg mr-3">
                    I
                  </div>
                  <div>
                    <h4 className="font-bold">Intellux</h4>
                    <p className="text-sm text-gray-600">AI/ML</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "We cut our cost-per-hire by 63% with Zara"
                </h3>
                <p className="text-gray-700 mb-6">
                  "By eliminating the initial technical screening bottleneck, we reduced our average cost-per-hire from 
                  $27,500 to $10,200 while actually improving the quality of our engineering hires."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?w=150&h=150&fit=crop&crop=face" 
                    alt="Rachel Greene" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">Rachel Greene</p>
                    <p className="text-gray-600 text-sm">COO</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div>
                <AspectRatio ratio={16/9}>
                  <div className="h-full w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47a04ca018e0?w=400&h=225&fit=crop" 
                      alt="Wired media publishing office" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <span className="text-xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-800 font-bold text-lg mr-3">
                    W
                  </div>
                  <div>
                    <h4 className="font-bold">Wired</h4>
                    <p className="text-sm text-gray-600">Media/Publishing</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  "Zara's integrations streamlined our entire hiring workflow"
                </h3>
                <p className="text-gray-700 mb-6">
                  "The seamless integration with Greenhouse means interview results flow directly into our ATS. 
                  Our hiring managers have all the data they need in one place to make quick decisions."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face" 
                    alt="Tasha Nguyen" 
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">Tasha Nguyen</p>
                    <p className="text-gray-600 text-sm">Director of People Ops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="bg-zara-purple text-white rounded-xl shadow-md p-8 md:p-12 mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Impact of AI-Powered Interviews</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Companies using Zara are seeing dramatic improvements in their technical hiring metrics.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">67%</p>
                <p className="text-sm">Average reduction in time-to-hire</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">83%</p>
                <p className="text-sm">Reduction in engineering hours spent on interviews</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">41%</p>
                <p className="text-sm">Increase in diversity of technical hires</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">93%</p>
                <p className="text-sm">Customer satisfaction rate</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to write your own success story?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies transforming their technical hiring with Zara.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/start-interviewing">
                <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-zara-purple text-zara-purple hover:bg-zara-purple-light">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;

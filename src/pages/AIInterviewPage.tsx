
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AIInterviewPage = () => {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div className="min-h-screen bg-[#DBDAF5]">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Interviews</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Zara conducts comprehensive technical interviews to evaluate candidates across multiple dimensions
            </p>
          </div>
          
          <Tabs 
            defaultValue="video" 
            className="w-full" 
            value={activeTab} 
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="video">Video Interview</TabsTrigger>
              <TabsTrigger value="coding">Coding Challenges</TabsTrigger>
              <TabsTrigger value="skills">Soft Skills Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="video" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-10">
                  <div className="max-w-4xl mx-auto">
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-8 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-zara-purple-light flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zara-purple">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 flex items-center bg-black/70 px-3 py-1 rounded-full">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-white text-sm">DEMO</span>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                        <span className="text-white text-sm">15:23</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-full bg-zara-purple flex items-center justify-center text-white text-xl font-bold mr-4">
                        Z
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Zara AI Interviewer</h3>
                        <p className="text-gray-600">Natural conversations with personalized follow-ups</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold mb-2">Sample Interview Questions:</p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-zara-purple mr-2">•</span>
                            <span>Can you walk me through how you would approach designing a scalable e-commerce checkout system?</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-zara-purple mr-2">•</span>
                            <span>Tell me about a complex technical challenge you faced and how you solved it.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-zara-purple mr-2">•</span>
                            <span>How would you optimize a React application that's experiencing performance issues?</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                            <div className="font-medium mb-2">Natural Conversation</div>
                            <p className="text-sm text-gray-700">Zara engages candidates in flowing, natural dialog that feels like talking to a real person</p>
                          </div>
                          <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                            <div className="font-medium mb-2">Adaptive Questioning</div>
                            <p className="text-sm text-gray-700">Follow-up questions are generated based on candidate responses</p>
                          </div>
                          <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                            <div className="font-medium mb-2">Multilingual Support</div>
                            <p className="text-sm text-gray-700">Conduct interviews in 15+ languages including all Indian languages</p>
                          </div>
                          <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                            <div className="font-medium mb-2">Anti-Cheating Measures</div>
                            <p className="text-sm text-gray-700">Advanced proctoring to ensure interview integrity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="coding" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-10">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-8 bg-gray-900 rounded-lg p-4 overflow-hidden text-white font-mono text-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span>problem.js</span>
                        </div>
                        <div>
                          <Badge className="bg-zara-purple">React Challenge</Badge>
                        </div>
                      </div>
                      <div className="text-green-400">// Create a function that finds the maximum subarray sum</div>
                      <div className="text-green-400">// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]</div>
                      <div className="text-green-400">// Output: 6 (from subarray [4, -1, 2, 1])</div>
                      <div className="my-2"></div>
                      <div><span className="text-blue-400">function</span> <span className="text-yellow-400">maxSubarraySum</span>(<span className="text-orange-400">arr</span>) {'{'}</div>
                      <div className="ml-4 text-gray-400">{'// Write your solution here'}</div>
                      <div>{'}'}</div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4">Coding Evaluation Metrics:</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Correctness</span>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Performance Optimization</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Code Quality</span>
                              <span className="text-sm font-medium">78%</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Problem Solving Approach</span>
                              <span className="text-sm font-medium">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold mb-2">Available Challenge Types:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">Algorithms</Badge>
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">Data Structures</Badge>
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">System Design</Badge>
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">Frontend Components</Badge>
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">API Integration</Badge>
                          <Badge className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">Database Design</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                          <div className="font-medium mb-2">Real-world Scenarios</div>
                          <p className="text-sm text-gray-700">Challenges based on actual engineering problems that test practical knowledge</p>
                        </div>
                        <div className="bg-zara-purple-light/30 p-4 rounded-lg">
                          <div className="font-medium mb-2">Multiple Languages</div>
                          <p className="text-sm text-gray-700">Support for JavaScript, Python, Java, C++, and more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-10">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                      <img 
                        src="https://placehold.co/600x300/DBDAF5/9b87f5?text=Behavioral+Analysis+Visualization" 
                        alt="Behavioral Analysis Visualization" 
                        className="w-full rounded-lg"
                      />
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Communication Skills</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Clarity</span>
                              <span className="text-sm font-medium">88%</span>
                            </div>
                            <Progress value={88} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Technical Articulation</span>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                            <Progress value={92} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Listening & Understanding</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <Progress value={85} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Problem-Solving Approach</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Analytical Thinking</span>
                              <span className="text-sm font-medium">90%</span>
                            </div>
                            <Progress value={90} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Creativity</span>
                              <span className="text-sm font-medium">78%</span>
                            </div>
                            <Progress value={78} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Decision Making</span>
                              <span className="text-sm font-medium">82%</span>
                            </div>
                            <Progress value={82} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Teamwork & Collaboration</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Feedback Reception</span>
                              <span className="text-sm font-medium">86%</span>
                            </div>
                            <Progress value={86} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Conflict Resolution</span>
                              <span className="text-sm font-medium">75%</span>
                            </div>
                            <Progress value={75} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Leadership Potential</span>
                              <span className="text-sm font-medium">80%</span>
                            </div>
                            <Progress value={80} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Adaptability</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Learning Agility</span>
                              <span className="text-sm font-medium">94%</span>
                            </div>
                            <Progress value={94} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Handling Uncertainty</span>
                              <span className="text-sm font-medium">88%</span>
                            </div>
                            <Progress value={88} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Growth Mindset</span>
                              <span className="text-sm font-medium">91%</span>
                            </div>
                            <Progress value={91} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zara-purple-light/30 p-5 rounded-lg">
                      <h4 className="font-medium mb-3">How Zara Evaluates Soft Skills</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Zara uses advanced natural language processing and behavioral analysis to evaluate candidates' soft skills through:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Speech patterns and communication style analysis</li>
                        <li>Response content evaluation for critical thinking</li>
                        <li>Behavior under different interview scenarios</li>
                        <li>Sentiment and emotion detection during challenging questions</li>
                        <li>Correlation with known high-performer patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Zara Speaks 15+ Languages</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-center mb-6 text-gray-600">Conduct interviews in any of these languages to accommodate candidates globally</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", 
                  "Bengali", "Marathi", "Gujarati", "Punjabi", "Urdu", "Odia",
                  "Spanish", "French", "German", "Japanese", "Chinese", "Russian", "Arabic"
                ].map((language) => (
                  <div key={language} className="bg-[#DBDAF5] p-3 rounded-lg text-center">
                    <p className="font-medium">{language}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-zara-purple hover:bg-zara-purple-dark">
              Request a Demo Interview
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIInterviewPage;

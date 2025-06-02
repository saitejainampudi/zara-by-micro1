
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, X, Search, ChevronRight, Book, Video, MessageSquare } from 'lucide-react';

interface HelpItem {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'video' | 'faq';
  url?: string;
  content?: string;
}

interface ContextualHelpProps {
  context: 'dashboard' | 'assessment' | 'profile' | 'analytics';
  userRole: 'candidate' | 'recruiter';
}

const ContextualHelp: React.FC<ContextualHelpProps> = ({ context, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HelpItem | null>(null);

  const getHelpItems = (): HelpItem[] => {
    const baseItems = {
      candidate: {
        dashboard: [
          {
            id: '1',
            title: 'How to Join an Assessment',
            description: 'Learn how to use access codes and direct links',
            type: 'guide' as const,
            content: 'Enter the 6-digit code provided by your recruiter in the Access Code field, or paste the direct interview link in the Link field. Click Join or Access to begin your assessment.'
          },
          {
            id: '2',
            title: 'Understanding Your Progress',
            description: 'Track your assessment completion status',
            type: 'guide' as const,
            content: 'Your dashboard shows all active assignments with progress bars. Green indicates completed steps, blue shows current progress, and gray represents pending steps.'
          },
          {
            id: '3',
            title: 'Assessment Tips Video',
            description: 'Best practices for successful assessments',
            type: 'video' as const,
            url: '#'
          }
        ],
        assessment: [
          {
            id: '4',
            title: 'Coding Challenge Help',
            description: 'Tips for completing coding tests',
            type: 'guide' as const,
            content: 'Read the problem statement carefully, test your code with the Run button before submitting, and remember you can use any programming language you\'re comfortable with.'
          },
          {
            id: '5',
            title: 'AI Interview Guidelines',
            description: 'How to excel in video interviews',
            type: 'guide' as const,
            content: 'Ensure good lighting, maintain eye contact with the camera, speak clearly, and take time to think before answering. Be authentic and showcase your personality.'
          },
          {
            id: '6',
            title: 'Technical Issues?',
            description: 'Troubleshooting common problems',
            type: 'faq' as const,
            content: 'If you experience technical issues, try refreshing the page, checking your internet connection, or switching browsers. Contact support if problems persist.'
          }
        ]
      },
      recruiter: {
        dashboard: [
          {
            id: '7',
            title: 'Creating Your First Role',
            description: 'Step-by-step role creation guide',
            type: 'guide' as const,
            content: 'Click "Create New Role", fill in job details, set assessment requirements, and configure deadlines. The AI will help optimize your job description for better candidate matching.'
          },
          {
            id: '8',
            title: 'Understanding AI Scores',
            description: 'How candidates are evaluated and ranked',
            type: 'guide' as const,
            content: 'AI scores combine coding performance, interview responses, and soft skills assessment. Scores above 90 indicate exceptional candidates, 80-89 are strong performers, and 70-79 meet basic requirements.'
          },
          {
            id: '9',
            title: 'Collaboration Features',
            description: 'Working with your hiring team',
            type: 'video' as const,
            url: '#'
          }
        ],
        analytics: [
          {
            id: '10',
            title: 'Reading Performance Metrics',
            description: 'Understanding your hiring analytics',
            type: 'guide' as const,
            content: 'Track conversion rates, time-to-hire, and candidate quality metrics. Use these insights to optimize your hiring process and improve role descriptions.'
          },
          {
            id: '11',
            title: 'Export and Reports',
            description: 'Generating hiring reports',
            type: 'faq' as const,
            content: 'Click the Export button to download candidate data, assessment results, and performance analytics in CSV or PDF format for further analysis.'
          }
        ]
      }
    };

    return baseItems[userRole][context] || [];
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <Book className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'faq': return <MessageSquare className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-700';
      case 'video': return 'bg-purple-100 text-purple-700';
      case 'faq': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const helpItems = getHelpItems();

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <HelpCircle className="w-4 h-4" />
        Help
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-96 z-50">
          <Card className="shadow-xl border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Help & Support</CardTitle>
                  <CardDescription>Get help with {context}</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 max-h-96 overflow-y-auto">
              {selectedItem ? (
                <div className="p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedItem(null)}
                    className="mb-4"
                  >
                    ← Back to help topics
                  </Button>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(selectedItem.type)}
                        <h3 className="font-semibold">{selectedItem.title}</h3>
                        <Badge className={getTypeBadge(selectedItem.type)}>
                          {selectedItem.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{selectedItem.description}</p>
                    </div>
                    
                    {selectedItem.content && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm">{selectedItem.content}</p>
                      </div>
                    )}
                    
                    {selectedItem.url && selectedItem.type === 'video' && (
                      <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <Video className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm text-purple-700 mb-3">Watch our tutorial video</p>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Watch Video
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  {helpItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        {getTypeIcon(item.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <Badge className={`text-xs ${getTypeBadge(item.type)}`}>
                              {item.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="p-4 border-t bg-gray-50">
                    <p className="text-sm text-gray-600 mb-3">Need more help?</p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Search className="w-4 h-4 mr-2" />
                        Search FAQs
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ContextualHelp;

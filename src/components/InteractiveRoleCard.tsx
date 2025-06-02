
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface InteractiveRoleCardProps {
  title: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ComponentType<{ className?: string }>;
  demoContent?: {
    title: string;
    steps: string[];
  };
  delay?: string;
}

const InteractiveRoleCard: React.FC<InteractiveRoleCardProps> = ({
  title,
  description,
  features,
  ctaText,
  ctaLink,
  gradientFrom,
  gradientTo,
  icon: MainIcon,
  demoContent,
  delay = '0ms'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <div 
        className="relative w-full h-96 perspective-1000"
        style={{ animationDelay: delay }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <Card className={`absolute inset-0 backface-hidden group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white border-0 animate-slide-up`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MainIcon className="w-6 h-6 text-white" />
            </div>
            
            <CardHeader className="relative z-10 text-center pb-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MainIcon className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">{title}</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                {description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center text-white/60 text-sm">
                Hover to see demo →
              </div>
            </CardContent>
          </Card>

          {/* Back of card */}
          <Card className={`absolute inset-0 backface-hidden rotate-y-180 group cursor-pointer overflow-hidden bg-white border-0 shadow-2xl`}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-3 text-gray-900">
                {demoContent?.title || "Demo Experience"}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {demoContent?.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-zara-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                </div>
              )) || (
                <div className="text-center py-8">
                  <Play className="w-12 h-12 mx-auto mb-4 text-zara-purple" />
                  <p className="text-gray-600">Interactive demo coming soon</p>
                </div>
              )}
              
              <div className="pt-4 space-y-3">
                <Link to={ctaLink} className="block">
                  <button className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2`}>
                    {ctaText}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                
                {demoContent && (
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Try Interactive Demo
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && demoContent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={() => setShowDemo(false)}>
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{demoContent.title}</h3>
              <button onClick={() => setShowDemo(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div className="space-y-4">
              {demoContent.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-zara-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveRoleCard;

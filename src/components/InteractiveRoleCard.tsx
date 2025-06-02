
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

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
  delay = '0ms'
}) => {
  return (
    <Card 
      className={`group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white border-0 animate-slide-up h-full`}
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
        <MainIcon className="w-6 h-6 text-white" />
      </div>
      
      <CardHeader className="relative z-10 pb-4 pt-8">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
          <MainIcon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl mb-3 font-bold">{title}</CardTitle>
        <CardDescription className="text-white/90 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-white/90">
              <feature.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4">
          <Link to={ctaLink} className="block">
            <button className="w-full bg-white text-gray-800 hover:bg-white/90 transition-all duration-300 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveRoleCard;

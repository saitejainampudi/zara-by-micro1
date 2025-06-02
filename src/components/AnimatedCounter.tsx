
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: string;
  duration?: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  trend: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  duration = 2000, 
  label, 
  icon: Icon, 
  color, 
  trend 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Extract numeric value and suffix from target
  const getNumericValue = (str: string) => {
    const match = str.match(/^(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const getSuffix = (str: string) => {
    return str.replace(/^\d+(?:\.\d+)?/, '');
  };

  const numericTarget = getNumericValue(target);
  const suffix = getSuffix(target);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = numericTarget * easeOutCubic;
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration]);

  const formatCount = (value: number) => {
    if (suffix.includes('.')) {
      return value.toFixed(1);
    }
    return Math.floor(value).toString();
  };

  return (
    <div 
      ref={countRef}
      className={`text-center group animate-fade-in hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
        color === 'purple' ? 'bg-gradient-to-r from-zara-purple to-zara-purple-dark' :
        color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
        color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
        'bg-gradient-to-r from-orange-500 to-orange-600'
      }`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <div className={`text-3xl font-bold text-zara-purple mb-2 transition-all duration-300 group-hover:scale-105 ${
        isVisible ? 'animate-pulse' : ''
      }`}>
        {formatCount(count)}{suffix}
      </div>
      
      <div className="text-gray-600 font-medium mb-2">{label}</div>
      <div className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full inline-block">
        {trend}
      </div>
    </div>
  );
};

export default AnimatedCounter;

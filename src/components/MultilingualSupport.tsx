
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
  supported: boolean;
}

interface MultilingualSupportProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  isAssessmentActive: boolean;
}

const MultilingualSupport = ({ 
  currentLanguage, 
  onLanguageChange, 
  isAssessmentActive 
}: MultilingualSupportProps) => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸', supported: true },
    { code: 'es', name: 'Español', flag: '🇪🇸', supported: true },
    { code: 'fr', name: 'Français', flag: '🇫🇷', supported: true },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', supported: true },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', supported: true },
    { code: 'pt', name: 'Português', flag: '🇵🇹', supported: true },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', supported: true },
    { code: 'zh', name: '中文', flag: '🇨🇳', supported: true },
    { code: 'ja', name: '日本語', flag: '🇯🇵', supported: true },
    { code: 'ko', name: '한국어', flag: '🇰🇷', supported: true },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', supported: true },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', supported: true }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = async (newLanguage: string) => {
    if (newLanguage === currentLanguage) return;
    
    setIsTranslating(true);
    
    // Simulate translation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onLanguageChange(newLanguage);
    setIsTranslating(false);
  };

  useEffect(() => {
    // Auto-detect browser language on mount
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    
    if (supportedLang && supportedLang.code !== currentLanguage) {
      // Only suggest if different from current
      console.log(`Detected browser language: ${supportedLang.name}`);
    }
  }, []);

  if (!isAssessmentActive) {
    return (
      <div className="fixed top-20 right-4 z-50">
        <Card className="w-64 shadow-lg border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-zara-purple" />
              <span className="font-medium">Language Settings</span>
            </div>
            
            <Select value={currentLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{currentLang.flag}</span>
                    <span>{currentLang.name}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    <div className="flex items-center gap-2">
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                      {!language.supported && (
                        <Badge variant="outline" className="text-xs ml-auto">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-white/95 backdrop-blur shadow-xl border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zara-purple" />
              <Select 
                value={currentLanguage} 
                onValueChange={handleLanguageChange}
                disabled={isTranslating}
              >
                <SelectTrigger className="w-32 h-8 text-sm">
                  <SelectValue>
                    <div className="flex items-center gap-1">
                      <span className="text-lg">{currentLang.flag}</span>
                      <span className="text-xs">{currentLang.code.toUpperCase()}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {languages.filter(lang => lang.supported).map((language) => (
                    <SelectItem key={language.code} value={language.code}>
                      <div className="flex items-center gap-2">
                        <span>{language.flag}</span>
                        <span className="text-sm">{language.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`h-8 w-8 p-0 ${audioEnabled ? 'text-green-600' : 'text-red-600'}`}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMicEnabled(!micEnabled)}
                className={`h-8 w-8 p-0 ${micEnabled ? 'text-green-600' : 'text-red-600'}`}
              >
                {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </Button>
            </div>

            {/* Translation Status */}
            {isTranslating && (
              <Badge className="bg-blue-100 text-blue-700 animate-pulse">
                Translating...
              </Badge>
            )}
          </div>

          {/* Real-time Language Assistance */}
          <div className="mt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time translation active</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultilingualSupport;

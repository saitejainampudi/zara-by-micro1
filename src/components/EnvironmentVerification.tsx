
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, XCircle, AlertTriangle, Monitor, Camera, Mic, Wifi, Shield, Clock } from 'lucide-react';

interface EnvironmentCheck {
  id: string;
  name: string;
  status: 'checking' | 'passed' | 'warning' | 'failed';
  description: string;
  icon: React.ComponentType<any>;
  required: boolean;
  lastChecked?: Date;
}

interface EnvironmentVerificationProps {
  isAssessmentActive: boolean;
  onRetryCheck: (checkId: string) => void;
  onDismissWarning: (checkId: string) => void;
}

const EnvironmentVerification = ({ 
  isAssessmentActive, 
  onRetryCheck, 
  onDismissWarning 
}: EnvironmentVerificationProps) => {
  const [checks, setChecks] = useState<EnvironmentCheck[]>([
    {
      id: 'camera',
      name: 'Camera Access',
      status: 'checking',
      description: 'Video recording capability required for interview',
      icon: Camera,
      required: true
    },
    {
      id: 'microphone',
      name: 'Microphone Access',
      status: 'checking',
      description: 'Audio recording required for responses',
      icon: Mic,
      required: true
    },
    {
      id: 'internet',
      name: 'Internet Connection',
      status: 'checking',
      description: 'Stable connection needed for assessment delivery',
      icon: Wifi,
      required: true
    },
    {
      id: 'screen',
      name: 'Screen Resolution',
      status: 'checking',
      description: 'Minimum 1024x768 resolution recommended',
      icon: Monitor,
      required: false
    },
    {
      id: 'security',
      name: 'Browser Security',
      status: 'checking',
      description: 'Secure environment verification',
      icon: Shield,
      required: true
    }
  ]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    performEnvironmentChecks();
    
    if (isAssessmentActive) {
      // Periodic checks during assessment
      const interval = setInterval(performEnvironmentChecks, 30000); // Every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isAssessmentActive]);

  const performEnvironmentChecks = async () => {
    // Camera check
    await checkCamera();
    // Microphone check
    await checkMicrophone();
    // Internet check
    await checkInternet();
    // Screen resolution check
    checkScreenResolution();
    // Browser security check
    checkBrowserSecurity();
  };

  const checkCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      updateCheckStatus('camera', 'passed');
    } catch (error) {
      updateCheckStatus('camera', 'failed');
      if (isAssessmentActive) {
        showEnvironmentAlert('Camera access lost during interview. Please check your camera permissions.');
      }
    }
  };

  const checkMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      updateCheckStatus('microphone', 'passed');
    } catch (error) {
      updateCheckStatus('microphone', 'failed');
      if (isAssessmentActive) {
        showEnvironmentAlert('Microphone access lost during interview. Please check your microphone permissions.');
      }
    }
  };

  const checkInternet = async () => {
    try {
      const start = Date.now();
      await fetch('/api/ping', { method: 'HEAD' });
      const duration = Date.now() - start;
      
      if (duration > 5000) {
        updateCheckStatus('internet', 'warning');
        if (isAssessmentActive) {
          showEnvironmentAlert('Slow internet connection detected. This may affect your assessment.');
        }
      } else {
        updateCheckStatus('internet', 'passed');
      }
    } catch (error) {
      updateCheckStatus('internet', 'failed');
      if (isAssessmentActive) {
        showEnvironmentAlert('Internet connection lost. Please check your connection and try again.');
      }
    }
  };

  const checkScreenResolution = () => {
    const width = window.screen.width;
    const height = window.screen.height;
    
    if (width >= 1024 && height >= 768) {
      updateCheckStatus('screen', 'passed');
    } else {
      updateCheckStatus('screen', 'warning');
    }
  };

  const checkBrowserSecurity = () => {
    const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
    const hasLocalStorage = typeof(Storage) !== "undefined";
    
    if (isSecure && hasLocalStorage) {
      updateCheckStatus('security', 'passed');
    } else {
      updateCheckStatus('security', 'warning');
    }
  };

  const updateCheckStatus = (checkId: string, status: EnvironmentCheck['status']) => {
    setChecks(prevChecks => 
      prevChecks.map(check => 
        check.id === checkId 
          ? { ...check, status, lastChecked: new Date() }
          : check
      )
    );
  };

  const showEnvironmentAlert = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const getStatusIcon = (status: EnvironmentCheck['status']) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400 animate-spin" />;
    }
  };

  const getStatusColor = (status: EnvironmentCheck['status']) => {
    switch (status) {
      case 'passed':
        return 'bg-green-100 border-green-200';
      case 'warning':
        return 'bg-yellow-100 border-yellow-200';
      case 'failed':
        return 'bg-red-100 border-red-200';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  const failedRequiredChecks = checks.filter(check => check.required && check.status === 'failed');
  const warningChecks = checks.filter(check => check.status === 'warning');

  if (!isAssessmentActive && failedRequiredChecks.length === 0) {
    return null; // Don't show if not in assessment and no critical issues
  }

  return (
    <div className="space-y-4">
      {/* Alert Banner */}
      {showAlert && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-orange-700">
            {alertMessage}
          </AlertDescription>
        </Alert>
      )}

      {/* Critical Issues Alert */}
      {failedRequiredChecks.length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <XCircle className="h-4 w-4" />
          <AlertDescription className="text-red-700">
            <strong>Critical issues detected:</strong> {failedRequiredChecks.length} required check(s) failed. 
            Please resolve these issues before continuing.
          </AlertDescription>
        </Alert>
      )}

      {/* Environment Checks */}
      <Card className={isAssessmentActive ? "fixed bottom-4 left-4 w-80 z-50 bg-white/95 backdrop-blur" : ""}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-zara-purple" />
            Environment Status
            {isAssessmentActive && (
              <Badge variant="outline" className="ml-auto text-xs">
                Live Monitoring
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {checks.map((check) => (
            <div key={check.id} className={`p-3 rounded-lg border-2 ${getStatusColor(check.status)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <check.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{check.name}</span>
                  {check.required && (
                    <Badge variant="outline" className="text-xs">Required</Badge>
                  )}
                </div>
                {getStatusIcon(check.status)}
              </div>
              
              <p className="text-xs text-gray-600 mb-2">{check.description}</p>
              
              {check.lastChecked && (
                <div className="text-xs text-gray-500">
                  Last checked: {check.lastChecked.toLocaleTimeString()}
                </div>
              )}
              
              {(check.status === 'failed' || check.status === 'warning') && (
                <div className="flex gap-2 mt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onRetryCheck(check.id)}
                    className="text-xs h-6"
                  >
                    Retry
                  </Button>
                  {check.status === 'warning' && (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => onDismissWarning(check.id)}
                      className="text-xs h-6"
                    >
                      Dismiss
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnvironmentVerification;

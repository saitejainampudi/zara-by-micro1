
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssessmentWizard from '../components/AssessmentWizard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const AssessmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignment = location.state?.assignment || {
    id: '1',
    role: 'Frontend Developer',
    company: 'TechCorp Inc.',
    deadline: 'March 20, 2024'
  };

  const handleComplete = () => {
    console.log('Assessment completed');
    navigate('/candidate-dashboard');
  };

  const handleClose = () => {
    navigate('/candidate-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/candidate-dashboard')}
              className="mb-4 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl">
            <AssessmentWizard
              assignment={assignment}
              onComplete={handleComplete}
              onClose={handleClose}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentPage;

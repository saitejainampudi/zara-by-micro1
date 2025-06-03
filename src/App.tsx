import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import SignInPage from './pages/SignInPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import RecruiterDashboard from './pages/RecruiterDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import Dashboard from './pages/Dashboard';
import JobUpload from './pages/JobUpload';
import CandidatesList from './pages/CandidatesList';
import CandidateProfile from './pages/CandidateProfile';
import StartInterviewing from './pages/StartInterviewing';
import AIInterviewPage from './pages/AIInterviewPage';
import AssessmentPage from './pages/AssessmentPage';
import NotFound from './pages/NotFound';
import CandidateProfileDetail from './pages/CandidateProfileDetail';
import AssignmentDetailsPage from './pages/AssignmentDetailsPage';
import FullAssessmentPage from './pages/FullAssessmentPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'candidate' | 'recruiter';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const userRole = sessionStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to="/signin" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/not-authorized" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route 
          path="/recruiter-dashboard" 
          element={
            <ProtectedRoute requiredRole="recruiter">
              <RecruiterDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/candidate-dashboard" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <CandidateDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/assignment-details" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <AssignmentDetailsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/full-assessment" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <FullAssessmentPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/candidate-profile" 
          element={
            <ProtectedRoute requiredRole="recruiter">
              <CandidateProfileDetail />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/job-upload" 
          element={
            <ProtectedRoute requiredRole="recruiter">
              <JobUpload />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/candidates" 
          element={
            <ProtectedRoute requiredRole="recruiter">
              <CandidatesList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/candidate-profile/:id" 
          element={
            <ProtectedRoute requiredRole="recruiter">
              <CandidateProfile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/start-interviewing" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <StartInterviewing />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/ai-interview" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <AIInterviewPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/assessment" 
          element={
            <ProtectedRoute requiredRole="candidate">
              <AssessmentPage />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

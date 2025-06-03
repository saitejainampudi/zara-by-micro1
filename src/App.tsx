
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EnvironmentVerification } from "./components/EnvironmentVerification";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AssessmentPage from "./pages/AssessmentPage";
import FullAssessmentPage from "./pages/FullAssessmentPage";
import AIInterviewPage from "./pages/AIInterviewPage";
import CandidateDashboard from "./pages/CandidateDashboard";
import CandidateProfile from "./pages/CandidateProfile";
import CandidateProfileDetail from "./pages/CandidateProfileDetail";
import CandidatesList from "./pages/CandidatesList";
import JobUpload from "./pages/JobUpload";
import StartInterviewing from "./pages/StartInterviewing";
import SignInPage from "./pages/SignInPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import RecruiterRoles from "./pages/RecruiterRoles";
import RecruiterCandidates from "./pages/RecruiterCandidates";
import RecruiterAnalytics from "./pages/RecruiterAnalytics";
import AssignmentDetailsPage from "./pages/AssignmentDetailsPage";
import PricingPage from "./pages/PricingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <EnvironmentVerification />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/assessment" element={<ProtectedRoute><AssessmentPage /></ProtectedRoute>} />
          <Route path="/full-assessment" element={<ProtectedRoute><FullAssessmentPage /></ProtectedRoute>} />
          <Route path="/ai-interview" element={<ProtectedRoute><AIInterviewPage /></ProtectedRoute>} />
          <Route path="/candidate-dashboard" element={<ProtectedRoute><CandidateDashboard /></ProtectedRoute>} />
          <Route path="/candidate-profile" element={<ProtectedRoute><CandidateProfile /></ProtectedRoute>} />
          <Route path="/candidate-profile/:candidateId" element={<ProtectedRoute><CandidateProfileDetail /></ProtectedRoute>} />
          <Route path="/candidates-list" element={<ProtectedRoute><CandidatesList /></ProtectedRoute>} />
          <Route path="/job-upload" element={<ProtectedRoute><JobUpload /></ProtectedRoute>} />
          <Route path="/start-interviewing" element={<ProtectedRoute><StartInterviewing /></ProtectedRoute>} />
          <Route path="/recruiter-dashboard" element={<ProtectedRoute><RecruiterDashboard /></ProtectedRoute>} />
          <Route path="/recruiter-roles" element={<ProtectedRoute><RecruiterRoles /></ProtectedRoute>} />
          <Route path="/recruiter-candidates" element={<ProtectedRoute><RecruiterCandidates /></ProtectedRoute>} />
          <Route path="/recruiter-analytics" element={<ProtectedRoute><RecruiterAnalytics /></ProtectedRoute>} />
          <Route path="/assignment-details" element={<ProtectedRoute><AssignmentDetailsPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

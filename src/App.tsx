
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "./pages/Index";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import RoleManagement from "./pages/RoleManagement";
import CandidatePipeline from "./pages/CandidatePipeline";
import RecruiterAnalytics from "./pages/RecruiterAnalytics";
import CandidateDashboard from "./pages/CandidateDashboard";
import JobUpload from "./pages/JobUpload";
import CandidatesList from "./pages/CandidatesList";
import CandidateProfileDetail from "./pages/CandidateProfileDetail";
import AssessmentPage from "./pages/AssessmentPage";
import FullAssessmentPage from "./pages/FullAssessmentPage";
import AIInterviewPage from "./pages/AIInterviewPage";
import AssignmentDetailsPage from "./pages/AssignmentDetailsPage";
import CandidateProfile from "./pages/CandidateProfile";
import StartInterviewing from "./pages/StartInterviewing";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
          <Route path="/role-management" element={<RoleManagement />} />
          <Route path="/candidate-pipeline" element={<CandidatePipeline />} />
          <Route path="/candidates" element={<CandidatePipeline />} />
          <Route path="/recruiter-analytics" element={<RecruiterAnalytics />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/job-upload" element={<ProtectedRoute><JobUpload /></ProtectedRoute>} />
          <Route path="/candidates-list" element={<ProtectedRoute><CandidatesList /></ProtectedRoute>} />
          <Route path="/candidate-profile/:id" element={<ProtectedRoute><CandidateProfileDetail /></ProtectedRoute>} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/full-assessment" element={<FullAssessmentPage />} />
          <Route path="/ai-interview" element={<AIInterviewPage />} />
          <Route path="/assignment-details/:id" element={<AssignmentDetailsPage />} />
          <Route path="/candidate-profile-page" element={<CandidateProfile />} />
          <Route path="/start-interviewing" element={<StartInterviewing />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

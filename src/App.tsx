
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import JobUpload from "./pages/JobUpload";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SignInPage from "./pages/SignInPage";
import StartInterviewing from "./pages/StartInterviewing";
import CandidatesList from "./pages/CandidatesList";
import CandidateProfile from "./pages/CandidateProfile";
import AIInterviewPage from "./pages/AIInterviewPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/start-interviewing" element={<StartInterviewing />} />
          
          {/* Protected recruiter routes */}
          <Route 
            path="/recruiter-dashboard" 
            element={
              <ProtectedRoute requiredRole="recruiter">
                <RecruiterDashboard />
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
            path="/candidate/:id" 
            element={
              <ProtectedRoute requiredRole="recruiter">
                <CandidateProfile />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected candidate routes */}
          <Route 
            path="/candidate-dashboard" 
            element={
              <ProtectedRoute requiredRole="candidate">
                <CandidateDashboard />
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
          
          {/* Legacy routes - redirect to appropriate dashboard based on role */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

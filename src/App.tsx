import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import SignInPage from "./pages/SignInPage";
import StartInterviewing from "./pages/StartInterviewing";
import HowItWorks from "./pages/HowItWorks";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Dashboard from "./pages/Dashboard";
import CandidateProfile from "./pages/CandidateProfile";
import AssessmentPage from "./pages/AssessmentPage";
import CandidateProfileDetail from "./pages/CandidateProfileDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/start-interviewing" element={<StartInterviewing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/candidate-profile/:id" element={<CandidateProfileDetail />} />
            <Route path="/candidates" element={<CandidateProfile />} />
            <Route path="/assessment" element={<AssessmentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

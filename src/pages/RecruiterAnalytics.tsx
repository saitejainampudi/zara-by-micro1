
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HiringMetricsDashboard from '../components/HiringMetricsDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from 'lucide-react';

const RecruiterAnalytics = () => {
  const analyticsData = {
    totalRoles: 12,
    activeRoles: 8,
    totalCandidates: 156,
    interviewsCompleted: 98,
    candidatesShortlisted: 28,
    hiresThisMonth: 7,
    averageScore: 81,
    timeToHire: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
                <p className="text-gray-600">Track hiring metrics and ROI from AI-powered recruitment</p>
              </div>
            </div>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                Comprehensive Hiring Analytics
              </CardTitle>
              <CardDescription>
                Deep insights into your recruitment performance and AI-powered hiring efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HiringMetricsDashboard data={analyticsData} />
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterAnalytics;

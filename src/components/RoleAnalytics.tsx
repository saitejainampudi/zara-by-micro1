
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Clock, TrendingUp, Target, Award, Filter, CheckCircle } from 'lucide-react';

interface RoleAnalyticsProps {
  roleId: string;
  roleTitle: string;
  analytics: {
    totalApplicants: number;
    interviewsCompleted: number;
    averageScore: number;
    aiShortlisted: number;
    conversionRate: number;
    timeToHire: number;
    topSkills: string[];
    scoreDistribution: {
      excellent: number; // 90-100
      good: number; // 80-89
      average: number; // 70-79
      below: number; // <70
    };
    candidatePreferences: {
      first: number;
      second: number;
      third: number;
      backup: number;
    };
    weeklyProgress: {
      week: string;
      applications: number;
      interviews: number;
    }[];
  };
}

const RoleAnalytics: React.FC<RoleAnalyticsProps> = ({ roleTitle, analytics }) => {
  const completionRate = (analytics.interviewsCompleted / analytics.totalApplicants) * 100;
  const shortlistRate = (analytics.aiShortlisted / analytics.interviewsCompleted) * 100;

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">{roleTitle} - Analytics</h2>
        <p className="text-gray-600">Detailed performance metrics and candidate insights</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Users className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-200 text-blue-700">{analytics.totalApplicants}</Badge>
            </div>
            <CardTitle className="text-3xl font-bold text-blue-900">{analytics.totalApplicants}</CardTitle>
            <CardDescription className="text-blue-700 font-medium">Total Applicants</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-200 text-green-700">{completionRate.toFixed(0)}%</Badge>
            </div>
            <CardTitle className="text-3xl font-bold text-green-900">{analytics.interviewsCompleted}</CardTitle>
            <CardDescription className="text-green-700 font-medium">Interviews Completed</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Target className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-200 text-purple-700">{shortlistRate.toFixed(0)}%</Badge>
            </div>
            <CardTitle className="text-3xl font-bold text-purple-900">{analytics.aiShortlisted}</CardTitle>
            <CardDescription className="text-purple-700 font-medium">AI Shortlisted</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <Badge className="bg-orange-200 text-orange-700">{analytics.averageScore}/100</Badge>
            </div>
            <CardTitle className="text-3xl font-bold text-orange-900">{analytics.averageScore}</CardTitle>
            <CardDescription className="text-orange-700 font-medium">Average AI Score</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Score Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              Score Distribution
            </CardTitle>
            <CardDescription>Candidate performance breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    Excellent (90-100)
                  </span>
                  <span className="font-medium">{analytics.scoreDistribution.excellent}</span>
                </div>
                <Progress value={(analytics.scoreDistribution.excellent / analytics.interviewsCompleted) * 100} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    Good (80-89)
                  </span>
                  <span className="font-medium">{analytics.scoreDistribution.good}</span>
                </div>
                <Progress value={(analytics.scoreDistribution.good / analytics.interviewsCompleted) * 100} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    Average (70-79)
                  </span>
                  <span className="font-medium">{analytics.scoreDistribution.average}</span>
                </div>
                <Progress value={(analytics.scoreDistribution.average / analytics.interviewsCompleted) * 100} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    Below Average (&lt;70)
                  </span>
                  <span className="font-medium">{analytics.scoreDistribution.below}</span>
                </div>
                <Progress value={(analytics.scoreDistribution.below / analytics.interviewsCompleted) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Candidate Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gray-600" />
              Candidate Preferences
            </CardTitle>
            <CardDescription>How candidates rank this role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: '1st Choice', count: analytics.candidatePreferences.first, color: 'bg-green-500' },
                { label: '2nd Choice', count: analytics.candidatePreferences.second, color: 'bg-blue-500' },
                { label: '3rd Choice', count: analytics.candidatePreferences.third, color: 'bg-yellow-500' },
                { label: 'Backup', count: analytics.candidatePreferences.backup, color: 'bg-gray-500' }
              ].map((pref, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${pref.color} rounded`}></div>
                      {pref.label}
                    </span>
                    <span className="font-medium">{pref.count}</span>
                  </div>
                  <Progress value={(pref.count / analytics.totalApplicants) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-zara-purple mb-2">{analytics.conversionRate}%</div>
              <div className="text-sm text-gray-600">Application to Interview</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Time to Hire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{analytics.timeToHire}</div>
              <div className="text-sm text-gray-600">Days Average</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Top Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {analytics.topSkills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleAnalytics;

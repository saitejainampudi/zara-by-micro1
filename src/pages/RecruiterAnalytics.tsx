
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HiringMetricsDashboard from '../components/HiringMetricsDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Target, Award, Clock, Zap, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

const RecruiterAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Enhanced analytics data
  const overallMetrics = {
    totalRoles: 15,
    activeRoles: 9,
    totalCandidates: 487,
    interviewsCompleted: 156,
    candidatesShortlisted: 67,
    hiresThisMonth: 12,
    averageScore: 84,
    timeToHire: 11
  };

  // Role performance data
  const rolePerformanceData = [
    { role: 'Frontend Dev', applicants: 89, shortlisted: 12, hired: 3, avgScore: 84, timeToHire: 10 },
    { role: 'Full Stack', applicants: 156, shortlisted: 18, hired: 4, avgScore: 81, timeToHire: 12 },
    { role: 'UX Designer', applicants: 73, shortlisted: 8, hired: 2, avgScore: 87, timeToHire: 9 },
    { role: 'DevOps', applicants: 45, shortlisted: 5, hired: 1, avgScore: 79, timeToHire: 14 },
    { role: 'Product Manager', applicants: 112, shortlisted: 15, hired: 3, avgScore: 85, timeToHire: 11 },
    { role: 'Data Scientist', applicants: 67, shortlisted: 9, hired: 2, avgScore: 83, timeToHire: 13 }
  ];

  // Candidate quality distribution
  const candidateQualityData = [
    { scoreRange: '90-100', count: 45, percentage: 9.2 },
    { scoreRange: '80-89', count: 156, percentage: 32.0 },
    { scoreRange: '70-79', count: 189, percentage: 38.8 },
    { scoreRange: '60-69', count: 73, percentage: 15.0 },
    { scoreRange: '50-59', count: 24, percentage: 4.9 }
  ];

  // Time-based hiring trends
  const hiringTrendsData = [
    { month: 'Jul', applications: 89, interviews: 34, hires: 8, avgScore: 78 },
    { month: 'Aug', applications: 124, interviews: 47, hires: 11, avgScore: 81 },
    { month: 'Sep', applications: 156, interviews: 62, hires: 15, avgScore: 83 },
    { month: 'Oct', applications: 143, interviews: 58, hires: 12, avgScore: 84 },
    { month: 'Nov', applications: 178, interviews: 71, hires: 18, avgScore: 85 },
    { month: 'Dec', applications: 134, interviews: 45, hires: 9, avgScore: 82 }
  ];

  // Department-wise distribution
  const departmentData = [
    { name: 'Engineering', value: 65, fill: '#8b5cf6' },
    { name: 'Design', value: 15, fill: '#06b6d4' },
    { name: 'Product', value: 12, fill: '#10b981' },
    { name: 'Data & Analytics', value: 8, fill: '#f59e0b' }
  ];

  // Top skills in demand
  const skillsDemandData = [
    { skill: 'React', demand: 85, availability: 67 },
    { skill: 'Python', demand: 78, availability: 72 },
    { skill: 'TypeScript', demand: 73, availability: 58 },
    { skill: 'Node.js', demand: 68, availability: 63 },
    { skill: 'AWS', demand: 65, availability: 51 },
    { skill: 'Figma', demand: 42, availability: 38 },
    { skill: 'Product Management', demand: 38, availability: 34 }
  ];

  // Conversion funnel data
  const conversionData = [
    { stage: 'Applications', count: 487, percentage: 100 },
    { stage: 'Screen Passed', count: 245, percentage: 50.3 },
    { stage: 'Interview', count: 156, percentage: 32.0 },
    { stage: 'Final Round', count: 89, percentage: 18.3 },
    { stage: 'Offer', count: 45, percentage: 9.2 },
    { stage: 'Hired', count: 38, percentage: 7.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
                <p className="text-gray-600">Comprehensive analytics for roles, candidates, and hiring performance</p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={selectedPeriod === 'week' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('week')}
                  size="sm"
                >
                  This Week
                </Button>
                <Button
                  variant={selectedPeriod === 'month' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('month')}
                  size="sm"
                >
                  This Month
                </Button>
                <Button
                  variant={selectedPeriod === 'quarter' ? 'default' : 'outline'}
                  onClick={() => setSelectedPeriod('quarter')}
                  size="sm"
                >
                  This Quarter
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="roles">Role Analytics</TabsTrigger>
              <TabsTrigger value="candidates">Candidate Analytics</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Overall Metrics Dashboard */}
              <HiringMetricsDashboard data={overallMetrics} />

              {/* Key Insights */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Best Performing Role
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-1">UX Designer</div>
                    <div className="text-sm text-green-700">87 avg score, 9 days to hire</div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Top Candidate Pool
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600 mb-1">Frontend Dev</div>
                    <div className="text-sm text-blue-700">89 applicants, 12 shortlisted</div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Quality Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-1">84/100</div>
                    <div className="text-sm text-purple-700">15% above industry average</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="space-y-6">
              {/* Role Performance Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Role Performance Analysis</CardTitle>
                  <CardDescription>Detailed metrics for each active role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Role</th>
                          <th className="text-center p-3">Applicants</th>
                          <th className="text-center p-3">Shortlisted</th>
                          <th className="text-center p-3">Hired</th>
                          <th className="text-center p-3">Avg Score</th>
                          <th className="text-center p-3">Time to Hire</th>
                          <th className="text-center p-3">Conversion Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rolePerformanceData.map((role, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{role.role}</td>
                            <td className="text-center p-3">{role.applicants}</td>
                            <td className="text-center p-3">{role.shortlisted}</td>
                            <td className="text-center p-3">{role.hired}</td>
                            <td className="text-center p-3">
                              <Badge variant="outline" className={role.avgScore >= 85 ? 'border-green-500 text-green-700' : 'border-yellow-500 text-yellow-700'}>
                                {role.avgScore}
                              </Badge>
                            </td>
                            <td className="text-center p-3">{role.timeToHire} days</td>
                            <td className="text-center p-3">
                              {((role.hired / role.applicants) * 100).toFixed(1)}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Department Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Hiring by Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="candidates" className="space-y-6">
              {/* Candidate Quality Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Candidate Quality Distribution</CardTitle>
                  <CardDescription>AI score distribution across all candidates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={candidateQualityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="scoreRange" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Skills Demand vs Availability */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills Demand vs Availability</CardTitle>
                  <CardDescription>Market demand compared to candidate pool</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={skillsDemandData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="skill" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="demand" fill="#8b5cf6" name="Demand" />
                      <Bar dataKey="availability" fill="#06b6d4" name="Availability" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Conversion Funnel */}
              <Card>
                <CardHeader>
                  <CardTitle>Hiring Conversion Funnel</CardTitle>
                  <CardDescription>Candidate progression through hiring stages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {conversionData.map((stage, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-32 text-sm font-medium">{stage.stage}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                          <div 
                            className="bg-gradient-to-r from-zara-purple to-zara-purple-dark h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
                            style={{ width: `${stage.percentage}%` }}
                          >
                            {stage.percentage >= 20 && `${stage.count} (${stage.percentage}%)`}
                          </div>
                          {stage.percentage < 20 && (
                            <div className="absolute left-full ml-2 text-sm font-medium text-gray-600">
                              {stage.count} ({stage.percentage}%)
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              {/* Hiring Trends Over Time */}
              <Card>
                <CardHeader>
                  <CardTitle>Hiring Trends Over Time</CardTitle>
                  <CardDescription>Monthly progression of hiring metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={hiringTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="applications" stroke="#06b6d4" strokeWidth={2} name="Applications" />
                      <Line type="monotone" dataKey="interviews" stroke="#10b981" strokeWidth={2} name="Interviews" />
                      <Line type="monotone" dataKey="hires" stroke="#8b5cf6" strokeWidth={3} name="Hires" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Benchmarks */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance vs Industry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Time to Hire</span>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 font-medium">11 days</span>
                          <Badge className="bg-green-100 text-green-700">67% faster</Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Quality Score</span>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600 font-medium">84/100</span>
                          <Badge className="bg-blue-100 text-blue-700">15% higher</Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cost per Hire</span>
                        <div className="flex items-center gap-2">
                          <span className="text-purple-600 font-medium">$2,100</span>
                          <Badge className="bg-purple-100 text-purple-700">45% lower</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Impact Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Screening Accuracy</span>
                        <span className="text-green-600 font-medium">96.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>False Positives</span>
                        <span className="text-blue-600 font-medium">3.1%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Time Saved</span>
                        <span className="text-purple-600 font-medium">78 hours/week</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Interview Success Rate</span>
                        <span className="text-orange-600 font-medium">84.7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterAnalytics;

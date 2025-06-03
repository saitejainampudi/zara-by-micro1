
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';

interface HiringMetricsDashboardProps {
  data: {
    totalRoles: number;
    activeRoles: number;
    totalCandidates: number;
    interviewsCompleted: number;
    candidatesShortlisted: number;
    hiresThisMonth: number;
    averageScore: number;
    timeToHire: number;
  };
}

const HiringMetricsDashboard: React.FC<HiringMetricsDashboardProps> = ({ data }) => {
  // Sample data for charts
  const monthlyHiringData = [
    { month: 'Jan', hires: 5, applications: 120, interviews: 45 },
    { month: 'Feb', hires: 8, applications: 150, interviews: 60 },
    { month: 'Mar', hires: 12, applications: 180, interviews: 75 },
    { month: 'Apr', hires: 7, applications: 110, interviews: 50 },
    { month: 'May', hires: 10, applications: 140, interviews: 65 },
    { month: 'Jun', hires: 15, applications: 200, interviews: 85 }
  ];

  const roleDistributionData = [
    { name: 'Frontend Dev', value: 35, fill: '#8b5cf6' },
    { name: 'Backend Dev', value: 28, fill: '#06b6d4' },
    { name: 'Full Stack', value: 20, fill: '#10b981' },
    { name: 'Designer', value: 12, fill: '#f59e0b' },
    { name: 'DevOps', value: 5, fill: '#ef4444' }
  ];

  const performanceComparisonData = [
    { metric: 'Time to Hire', withZara: 11, traditional: 28 },
    { metric: 'Quality Score', withZara: 87, traditional: 73 },
    { metric: 'Interview Efficiency', withZara: 94, traditional: 65 },
    { metric: 'Candidate Satisfaction', withZara: 92, traditional: 78 }
  ];

  const weeklyProgressData = [
    { week: 'Week 1', applications: 45, interviews: 18, hires: 3 },
    { week: 'Week 2', applications: 52, interviews: 22, hires: 4 },
    { week: 'Week 3', applications: 38, interviews: 15, hires: 2 },
    { week: 'Week 4', applications: 61, interviews: 28, hires: 5 }
  ];

  const aiAccuracyData = [
    { category: 'Technical Skills', accuracy: 94 },
    { category: 'Communication', accuracy: 91 },
    { category: 'Problem Solving', accuracy: 96 },
    { category: 'Cultural Fit', accuracy: 88 },
    { category: 'Leadership', accuracy: 92 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          { title: data.totalRoles.toString(), subtitle: "Total Roles", icon: Target, color: "purple", change: "+2 this week" },
          { title: data.totalCandidates.toString(), subtitle: "Total Candidates", icon: Users, color: "blue", change: "+18 this week" },
          { title: data.interviewsCompleted.toString(), subtitle: "Interviews Done", icon: Zap, color: "green", change: "+12 today" },
          { title: data.candidatesShortlisted.toString(), subtitle: "Shortlisted", icon: Award, color: "yellow", change: "Ready for hire" },
          { title: `${data.timeToHire}d`, subtitle: "Avg Time to Hire", icon: Clock, color: "orange", change: "61% faster" },
          { title: `${data.averageScore}%`, subtitle: "AI Accuracy", icon: TrendingUp, color: "purple", change: "Industry leading" }
        ].map((metric, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  metric.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  metric.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  metric.color === 'green' ? 'bg-green-100 text-green-600' :
                  metric.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <metric.icon className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold">{metric.title}</CardTitle>
              <div className="text-xs font-medium text-gray-600">{metric.subtitle}</div>
              <div className="text-xs text-gray-500">{metric.change}</div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Hiring Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Hiring Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyHiringData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hires" stroke="#8b5cf6" strokeWidth={3} />
                <Line type="monotone" dataKey="interviews" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Role Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Role Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={roleDistributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {roleDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Comparison - Fixed horizontal bar chart */}
        <Card>
          <CardHeader>
            <CardTitle>Zara AI vs Traditional Hiring</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceComparisonData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="metric" type="category" width={120} fontSize={12} />
                <Tooltip />
                <Bar dataKey="withZara" fill="#8b5cf6" name="With Zara AI" />
                <Bar dataKey="traditional" fill="#e5e7eb" name="Traditional" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="applications" stackId="1" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                <Area type="monotone" dataKey="interviews" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="hires" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Accuracy Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>AI Assessment Accuracy by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiAccuracyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ROI Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">Cost Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">$45,000</div>
            <div className="text-sm text-green-700">Saved this quarter through automation</div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Time Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
            <div className="text-sm text-blue-700">Reduction in time-to-hire</div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Quality Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
            <div className="text-sm text-purple-700">Higher candidate quality scores</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HiringMetricsDashboard;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Clock, TrendingUp, Eye, Filter } from 'lucide-react';

interface RoleCardProps {
  role: {
    id: string;
    title: string;
    department: string;
    status: 'active' | 'paused' | 'closed';
    deadline: string;
    daysLeft: number;
    applicants: {
      total: number;
      pending: number;
      interviewed: number;
      shortlisted: number;
    };
    completionRate: number;
    avgScore: number;
    topCandidateScore: number;
  };
  onViewDetails: (roleId: string) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'closed': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 3) return 'text-red-600';
    if (daysLeft <= 7) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-gray-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
              <Badge className={getStatusColor(role.status)}>
                {role.status.charAt(0).toUpperCase() + role.status.slice(1)}
              </Badge>
            </div>
            <CardDescription className="text-lg font-medium text-gray-700">
              {role.department}
            </CardDescription>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Due: {role.deadline}
              </div>
              <div className={`flex items-center gap-1 font-medium ${getUrgencyColor(role.daysLeft)}`}>
                <Clock className="w-4 h-4" />
                {role.daysLeft} days left
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zara-purple to-zara-purple-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
              {role.topCandidateScore}
            </div>
            <div className="text-sm text-gray-600 mt-1">Top Score</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Application Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{role.applicants.total}</div>
              <div className="text-sm text-blue-700">Total Applicants</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600">{role.applicants.pending}</div>
              <div className="text-sm text-yellow-700">Pending Review</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">{role.applicants.interviewed}</div>
              <div className="text-sm text-green-700">Interviewed</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">{role.applicants.shortlisted}</div>
              <div className="text-sm text-purple-700">Shortlisted</div>
            </div>
          </div>

          {/* Completion Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Interview Completion Rate</span>
              <span className="text-gray-600">{role.completionRate}%</span>
            </div>
            <Progress value={role.completionRate} className="h-2" />
          </div>

          {/* Average Score */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Average AI Score</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{role.avgScore}/100</div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <Button 
              onClick={() => onViewDetails(role.id)}
              className="flex-1 bg-zara-purple hover:bg-zara-purple-dark"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Candidates
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Shortlist
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleCard;

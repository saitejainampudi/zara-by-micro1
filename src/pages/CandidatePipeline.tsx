
import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CandidateProfileCard from '../components/CandidateProfileCard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter, Users, Star, Clock, CheckCircle, TrendingUp, Award } from 'lucide-react';

const CandidatePipeline = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roleFilter = searchParams.get('role');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleId, setRoleId] = useState(roleFilter || 'all');

  // Enhanced candidate data sorted by AI score (descending)
  const candidates = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      roleId: '1',
      overallScore: 98,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS'],
      experience: '6+ years experience',
      scores: { coding: 96, interview: 98, softSkills: 94 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '2 hours ago',
      highlights: ['Exceptional problem-solving skills', 'Strong leadership experience', 'Perfect cultural fit']
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      roleId: '5',
      overallScore: 97,
      preference: '1st' as const,
      status: 'interviewed' as const,
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research', 'Stakeholder Management'],
      experience: '8+ years experience',
      scores: { coding: 85, interview: 97, softSkills: 99 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '5 hours ago',
      highlights: ['Outstanding communication skills', 'Proven track record of successful launches', 'Strategic thinker']
    },
    {
      id: '3',
      name: 'Emily Wang',
      role: 'UX/UI Designer',
      roleId: '3',
      overallScore: 96,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      experience: '5+ years experience',
      scores: { coding: 88, interview: 95, softSkills: 96 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '1 day ago',
      highlights: ['Innovative design approach', 'Strong user empathy', 'Excellent portfolio']
    },
    {
      id: '4',
      name: 'David Kumar',
      role: 'Data Scientist',
      roleId: '6',
      overallScore: 95,
      preference: '1st' as const,
      status: 'interviewed' as const,
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics'],
      experience: '7+ years experience',
      scores: { coding: 97, interview: 93, softSkills: 89 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '6 hours ago',
      highlights: ['Advanced ML expertise', 'Published research', 'Strong analytical skills']
    },
    {
      id: '5',
      name: 'Jessica Thompson',
      role: 'Full Stack Engineer',
      roleId: '2',
      overallScore: 94,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker'],
      experience: '5+ years experience',
      scores: { coding: 95, interview: 92, softSkills: 91 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '3 hours ago',
      highlights: ['Full-stack expertise', 'Cloud architecture knowledge', 'Team collaboration']
    },
    {
      id: '6',
      name: 'Alex Johnson',
      role: 'DevOps Engineer',
      roleId: '4',
      overallScore: 91,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Monitoring'],
      experience: '6+ years experience',
      scores: { coding: 89, interview: 91, softSkills: 87 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '8 hours ago',
      highlights: ['Infrastructure expertise', 'DevOps best practices', 'Automation skills']
    },
    {
      id: '7',
      name: 'Lisa Park',
      role: 'Senior Frontend Developer',
      roleId: '1',
      overallScore: 89,
      preference: '2nd' as const,
      status: 'pending' as const,
      skills: ['Vue.js', 'JavaScript', 'CSS', 'Webpack', 'Testing'],
      experience: '4+ years experience',
      scores: { coding: 88, interview: 86, softSkills: 92 },
      completedSteps: 3,
      totalSteps: 4,
      submittedAt: '12 hours ago',
      highlights: ['Strong frontend skills', 'Attention to detail', 'Quick learner']
    },
    {
      id: '8',
      name: 'Michael Brown',
      role: 'Full Stack Engineer',
      roleId: '2',
      overallScore: 87,
      preference: '2nd' as const,
      status: 'pending' as const,
      skills: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'REST APIs'],
      experience: '4+ years experience',
      scores: { coding: 85, interview: 87, softSkills: 84 },
      completedSteps: 3,
      totalSteps: 4,
      submittedAt: '1 day ago',
      highlights: ['Backend expertise', 'API development', 'Database design']
    },
    {
      id: '9',
      name: 'Anna Petrov',
      role: 'UX/UI Designer',
      roleId: '3',
      overallScore: 85,
      preference: '3rd' as const,
      status: 'interviewed' as const,
      skills: ['Adobe Creative Suite', 'Sketch', 'User Testing', 'Wireframing', 'Branding'],
      experience: '3+ years experience',
      scores: { coding: 78, interview: 85, softSkills: 88 },
      completedSteps: 4,
      totalSteps: 4,
      submittedAt: '2 days ago',
      highlights: ['Creative problem solving', 'Brand design experience', 'User-centered approach']
    },
    {
      id: '10',
      name: 'Ryan O\'Connor',
      role: 'Product Manager',
      roleId: '5',
      overallScore: 83,
      preference: '3rd' as const,
      status: 'pending' as const,
      skills: ['Product Development', 'Market Research', 'Analytics', 'Roadmapping', 'Cross-functional Leadership'],
      experience: '5+ years experience',
      scores: { coding: 75, interview: 83, softSkills: 89 },
      completedSteps: 2,
      totalSteps: 4,
      submittedAt: '1 day ago',
      highlights: ['Market analysis skills', 'Product vision', 'Stakeholder management']
    }
  ];

  const roleOptions = [
    { id: 'all', name: 'All Roles' },
    { id: '1', name: 'Senior Frontend Developer' },
    { id: '2', name: 'Full Stack Engineer' },
    { id: '3', name: 'UX/UI Designer' },
    { id: '4', name: 'DevOps Engineer' },
    { id: '5', name: 'Product Manager' },
    { id: '6', name: 'Data Scientist' }
  ];

  const filteredCandidates = useMemo(() => {
    return candidates
      .filter(candidate => {
        const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'all' || candidate.status === statusFilter;
        const matchesRole = roleId === 'all' || candidate.roleId === roleId;
        return matchesSearch && matchesStatus && matchesRole;
      })
      .sort((a, b) => b.overallScore - a.overallScore); // Sort by score descending
  }, [searchTerm, statusFilter, roleId, candidates]);

  const stats = {
    total: filteredCandidates.length,
    shortlisted: filteredCandidates.filter(c => c.status === 'shortlisted').length,
    interviewed: filteredCandidates.filter(c => c.status === 'interviewed').length,
    pending: filteredCandidates.filter(c => c.status === 'pending').length,
    avgScore: Math.round(filteredCandidates.reduce((sum, c) => sum + c.overallScore, 0) / filteredCandidates.length) || 0
  };

  const handleViewProfile = (candidateId: string) => {
    navigate(`/candidate-profile/${candidateId}`);
  };

  const handleShortlist = (candidateId: string) => {
    console.log('Shortlisting candidate:', candidateId);
    // Implementation would update candidate status
  };

  const handleReject = (candidateId: string) => {
    console.log('Rejecting candidate:', candidateId);
    // Implementation would update candidate status
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidate Pipeline</h1>
            <p className="text-gray-600">Review and manage candidates across all positions (sorted by AI score)</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <Users className="w-6 h-6 text-blue-600 mb-2" />
                <CardTitle className="text-xl">{stats.total}</CardTitle>
                <CardDescription>Total Candidates</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <Star className="w-6 h-6 text-yellow-600 mb-2" />
                <CardTitle className="text-xl">{stats.shortlisted}</CardTitle>
                <CardDescription>Shortlisted</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <CardTitle className="text-xl">{stats.interviewed}</CardTitle>
                <CardDescription>Interviewed</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <Clock className="w-6 h-6 text-orange-600 mb-2" />
                <CardTitle className="text-xl">{stats.pending}</CardTitle>
                <CardDescription>Pending Review</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
                <CardTitle className="text-xl">{stats.avgScore}</CardTitle>
                <CardDescription>Avg AI Score</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search candidates, roles, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={roleId}
              onChange={(e) => setRoleId(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white"
            >
              {roleOptions.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
            
            <div className="flex gap-2">
              <Button
                variant={statusFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('shortlisted')}
                size="sm"
              >
                Shortlisted
              </Button>
              <Button
                variant={statusFilter === 'interviewed' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('interviewed')}
                size="sm"
              >
                Interviewed
              </Button>
              <Button
                variant={statusFilter === 'pending' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('pending')}
                size="sm"
              >
                Pending
              </Button>
            </div>
          </div>

          {/* Top Performers Banner */}
          {filteredCandidates.length > 0 && (
            <Card className="mb-8 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <CardTitle className="text-yellow-800">Top Performing Candidates</CardTitle>
                </div>
                <CardDescription className="text-yellow-700">
                  Candidates with scores 90+ are automatically highlighted as top performers
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {/* Candidates Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <CandidateProfileCard
                key={candidate.id}
                candidate={candidate}
                onViewProfile={handleViewProfile}
                onShortlist={handleShortlist}
                onReject={handleReject}
              />
            ))}
          </div>

          {filteredCandidates.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CandidatePipeline;

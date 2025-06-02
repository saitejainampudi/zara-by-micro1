import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoleCard from '../components/RoleCard';
import CandidateProfileCard from '../components/CandidateProfileCard';
import RoleAnalytics from '../components/RoleAnalytics';
import NotificationCenter from '../components/NotificationCenter';
import ContextualHelp from '../components/ContextualHelp';
import FeedbackWidget from '../components/FeedbackWidget';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, Eye, TrendingUp, Clock, CheckCircle, Zap, Target, Award, Search, Filter, Calendar, Star } from 'lucide-react';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'overview' | 'roles' | 'candidates' | 'analytics'>('overview');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [candidateFilter, setCandidateFilter] = useState<'all' | 'shortlisted' | 'interviewed' | 'pending'>('all');

  // Enhanced demo data with more realistic numbers
  const dashboardStats = {
    totalRoles: 12,
    activeRoles: 8,
    totalCandidates: 156,
    interviewsCompleted: 98,
    candidatesShortlisted: 28,
    hiresThisMonth: 7,
    averageScore: 81,
    timeToHire: 12
  };

  // Expanded roles data with job descriptions and more details
  const roles = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 20, 2024',
      daysLeft: 8,
      description: 'Join our innovative team building next-generation web applications using React, TypeScript, and modern development practices. We are looking for a senior developer who can lead technical decisions and mentor junior developers.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership skills', 'Agile methodology experience'],
      benefits: ['Competitive salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 28,
        pending: 6,
        interviewed: 18,
        shortlisted: 5
      },
      completionRate: 89,
      avgScore: 84,
      topCandidateScore: 96,
      shortlistedCandidates: ['1', '2', '5', '9', '10']
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      status: 'active' as const,
      deadline: 'March 25, 2024',
      daysLeft: 13,
      description: 'Create beautiful and functional user experiences for our digital products. Lead design thinking workshops and collaborate closely with engineering teams to bring innovative solutions to life.',
      requirements: ['5+ years UX/UI design', 'Design systems experience', 'Prototyping skills', 'User research experience'],
      benefits: ['Salary: $100k-130k', 'Creative freedom', 'Design conference budget', 'Latest design tools'],
      applicants: {
        total: 22,
        pending: 4,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 82,
      avgScore: 87,
      topCandidateScore: 93,
      shortlistedCandidates: ['3', '11']
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 15, 2024',
      daysLeft: 3,
      description: 'Build and maintain scalable infrastructure for our growing platform. Implement CI/CD pipelines, monitoring solutions, and ensure high availability of our services.',
      requirements: ['Kubernetes expertise', 'CI/CD pipeline management', 'Cloud platforms (AWS/GCP)', 'Infrastructure as Code'],
      benefits: ['Salary: $110k-140k', 'Cutting-edge technology', 'Conference attendance', 'Stock options'],
      applicants: {
        total: 18,
        pending: 8,
        interviewed: 8,
        shortlisted: 2
      },
      completionRate: 72,
      avgScore: 79,
      topCandidateScore: 91,
      shortlistedCandidates: ['4', '12']
    },
    {
      id: '4',
      title: 'Full Stack Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 28, 2024',
      daysLeft: 16,
      description: 'Develop full-stack applications using React, Node.js, and MongoDB. Collaborate with cross-functional teams to build scalable and maintainable solutions.',
      requirements: ['5+ years experience', 'Strong backend development skills', 'Database management', 'Microservices architecture'],
      benefits: ['Salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 35,
        pending: 15,
        interviewed: 16,
        shortlisted: 6
      },
      completionRate: 76,
      avgScore: 82,
      topCandidateScore: 94
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data',
      status: 'active' as const,
      deadline: 'April 5, 2024',
      daysLeft: 24,
      description: 'Analyze large datasets and develop predictive models to drive business decisions. Work closely with data engineering teams to ensure data quality and availability.',
      requirements: ['PhD in Statistics or Data Science', 'Strong programming skills', 'Machine learning expertise', 'Data visualization tools'],
      benefits: ['Salary: $130k-160k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 19,
        pending: 12,
        interviewed: 6,
        shortlisted: 2
      },
      completionRate: 58,
      avgScore: 85,
      topCandidateScore: 92
    },
    {
      id: '6',
      title: 'QA Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 30, 2024',
      daysLeft: 18,
      description: 'Test software applications to ensure they meet quality standards. Collaborate with development teams to identify and fix bugs, and provide feedback on product design.',
      requirements: ['5+ years experience', 'Strong testing skills', 'Automation testing tools', 'Experience with CI/CD pipelines'],
      benefits: ['Salary: $100k-130k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 16,
        pending: 9,
        interviewed: 5,
        shortlisted: 2
      },
      completionRate: 69,
      avgScore: 77,
      topCandidateScore: 88
    },
    {
      id: '7',
      title: 'Marketing Manager',
      department: 'Marketing',
      status: 'active' as const,
      deadline: 'April 10, 2024',
      daysLeft: 29,
      description: 'Develop and execute marketing strategies to drive brand awareness and sales. Collaborate with cross-functional teams to create compelling content and campaigns.',
      requirements: ['5+ years experience', 'Strong communication skills', 'Digital marketing tools', 'SEO and content strategy'],
      benefits: ['Salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 24,
        pending: 18,
        interviewed: 4,
        shortlisted: 2
      },
      completionRate: 42,
      avgScore: 83,
      topCandidateScore: 89
    },
    {
      id: '8',
      title: 'Backend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 22, 2024',
      daysLeft: 10,
      description: 'Develop and maintain server-side applications using Node.js, Python, and microservices architecture. Collaborate with cross-functional teams to build scalable and maintainable solutions.',
      requirements: ['5+ years experience', 'Strong backend development skills', 'Database management', 'Microservices architecture'],
      benefits: ['Salary: $110k-140k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 26,
        pending: 8,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 85,
      avgScore: 81,
      topCandidateScore: 95
    }
  ];

  // Enhanced candidates data with interview recordings and video links
  const candidates = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      overallScore: 96,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      experience: '6+ years experience',
      scores: {
        coding: 98,
        interview: 94,
        softSkills: 96
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 hours ago',
      highlights: ['Exceptional problem-solving skills', 'Strong technical leadership', 'Open source contributor'],
      interviewRecording: {
        available: true,
        duration: '28 minutes',
        quality: 'HD',
        transcript: true,
        aiNotes: 'Candidate demonstrated excellent technical knowledge and communication skills. Strong problem-solving approach with clear explanations.'
      },
      portfolio: 'https://sarah-chen-portfolio.com',
      linkedIn: 'https://linkedin.com/in/sarah-chen-dev'
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      role: 'Senior Frontend Developer',
      overallScore: 91,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Vue.js', 'Python', 'AWS', 'Docker', 'Redis'],
      experience: '5+ years experience',
      scores: {
        coding: 93,
        interview: 89,
        softSkills: 91
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Great team collaboration', 'Innovative thinking', 'Scalable architecture expertise'],
      interviewRecording: {
        available: true,
        duration: '32 minutes',
        quality: 'HD',
        transcript: true,
        aiNotes: 'Strong technical skills with good architectural thinking. Shows enthusiasm for learning new technologies.'
      },
      portfolio: 'https://alex-rodriguez.dev',
      linkedIn: 'https://linkedin.com/in/alex-rodriguez-dev'
    },
    {
      id: '3',
      name: 'Jordan Kim',
      role: 'Product Designer',
      overallScore: 93,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'A/B Testing'],
      experience: '7+ years experience',
      scores: {
        coding: 0,
        interview: 95,
        softSkills: 91
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Outstanding portfolio', 'User-centered design approach', 'Data-driven decisions']
    },
    {
      id: '4',
      name: 'Taylor Morgan',
      role: 'DevOps Engineer',
      overallScore: 88,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'Monitoring', 'Security'],
      experience: '4+ years experience',
      scores: {
        coding: 90,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '5 hours ago',
      highlights: ['Strong infrastructure knowledge', 'Security-first mindset']
    },
    {
      id: '5',
      name: 'Maya Patel',
      role: 'Full Stack Engineer',
      overallScore: 89,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Microservices'],
      experience: '5+ years experience',
      scores: {
        coding: 92,
        interview: 86,
        softSkills: 89
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '6 hours ago',
      highlights: ['Full-stack expertise', 'Mentoring experience', 'Agile methodologies']
    },
    {
      id: '6',
      name: 'Chris Johnson',
      role: 'Data Scientist',
      overallScore: 92,
      preference: '1st' as const,
      status: 'interviewed' as const,
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
      experience: '4+ years experience',
      scores: {
        coding: 94,
        interview: 90,
        softSkills: 92
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['PhD in Machine Learning', 'Published researcher', 'Industry experience']
    },
    {
      id: '7',
      name: 'Sam Wilson',
      role: 'QA Engineer',
      overallScore: 85,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Selenium', 'Jest', 'Cypress', 'API Testing', 'Performance Testing'],
      experience: '3+ years experience',
      scores: {
        coding: 87,
        interview: 83,
        softSkills: 85
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 days ago',
      highlights: ['Automation expertise', 'Quality-focused mindset', 'Process improvement']
    },
    {
      id: '8',
      name: 'Riley Davis',
      role: 'Marketing Manager',
      overallScore: 87,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Digital Marketing', 'Analytics', 'Campaign Management', 'SEO', 'Content Strategy'],
      experience: '5+ years experience',
      scores: {
        coding: 0,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 0,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Growth marketing expert', 'Data-driven campaigns']
    },
    {
      id: '9',
      name: 'Jamie Lee',
      role: 'Backend Developer',
      overallScore: 90,
      preference: '2nd' as const,
      status: 'shortlisted' as const,
      skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis'],
      experience: '4+ years experience',
      scores: {
        coding: 93,
        interview: 87,
        softSkills: 90
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '8 hours ago',
      highlights: ['Microservices architecture', 'Performance optimization', 'Clean code advocate']
    },
    {
      id: '10',
      name: 'Casey Brown',
      role: 'Senior Frontend Developer',
      overallScore: 84,
      preference: '3rd' as const,
      status: 'interviewed' as const,
      skills: ['Angular', 'JavaScript', 'CSS', 'RxJS', 'NgRx'],
      experience: '4+ years experience',
      scores: {
        coding: 86,
        interview: 82,
        softSkills: 84
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Angular specialist', 'Component architecture', 'Responsive design']
    },
    {
      id: '11',
      name: 'Avery Thompson',
      role: 'Product Designer',
      overallScore: 86,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Sketch', 'InVision', 'User Testing', 'Wireframing', 'Brand Design'],
      experience: '4+ years experience',
      scores: {
        coding: 0,
        interview: 88,
        softSkills: 84
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '2 days ago',
      highlights: ['Brand consistency', 'User experience optimization', 'Cross-functional collaboration']
    },
    {
      id: '12',
      name: 'Morgan Garcia',
      role: 'DevOps Engineer',
      overallScore: 83,
      preference: '2nd' as const,
      status: 'pending' as const,
      skills: ['Docker', 'AWS', 'CI/CD', 'Ansible', 'Prometheus'],
      experience: '3+ years experience',
      scores: {
        coding: 85,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '4 hours ago',
      highlights: ['Cloud infrastructure', 'Automation mindset']
    }
  ];

  // Enhanced analytics data with comprehensive metrics
  const enhancedAnalytics = {
    overview: {
      totalHires: 47,
      avgTimeToHire: 14,
      costPerHire: 3200,
      successRate: 87,
      candidateSatisfaction: 4.6,
      hiringManagerSatisfaction: 4.8
    },
    trends: {
      monthlyHires: [3, 5, 8, 6, 9, 11, 7],
      avgScores: [78, 82, 85, 83, 87, 89, 91],
      timeToHire: [18, 16, 14, 15, 12, 11, 14]
    },
    demographics: {
      experienceLevel: { entry: 15, mid: 45, senior: 35, lead: 5 },
      location: { local: 60, remote: 40 },
      source: { direct: 25, referral: 35, linkedin: 30, other: 10 }
    },
    comparison: {
      withoutZara: {
        avgTimeToHire: 35,
        costPerHire: 8500,
        successRate: 62,
        candidateDropoff: 45
      },
      withZara: {
        avgTimeToHire: 14,
        costPerHire: 3200,
        successRate: 87,
        candidateDropoff: 12
      }
    }
  };

  // Expanded roles data with more variety
  const roles = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 20, 2024',
      daysLeft: 8,
      description: 'Join our innovative team building next-generation web applications using React, TypeScript, and modern development practices. We are looking for a senior developer who can lead technical decisions and mentor junior developers.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership skills', 'Agile methodology experience'],
      benefits: ['Competitive salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 28,
        pending: 6,
        interviewed: 18,
        shortlisted: 5
      },
      completionRate: 89,
      avgScore: 84,
      topCandidateScore: 96,
      shortlistedCandidates: ['1', '2', '5', '9', '10']
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      status: 'active' as const,
      deadline: 'March 25, 2024',
      daysLeft: 13,
      description: 'Create beautiful and functional user experiences for our digital products. Lead design thinking workshops and collaborate closely with engineering teams to bring innovative solutions to life.',
      requirements: ['5+ years UX/UI design', 'Design systems experience', 'Prototyping skills', 'User research experience'],
      benefits: ['Salary: $100k-130k', 'Creative freedom', 'Design conference budget', 'Latest design tools'],
      applicants: {
        total: 22,
        pending: 4,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 82,
      avgScore: 87,
      topCandidateScore: 93,
      shortlistedCandidates: ['3', '11']
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 15, 2024',
      daysLeft: 3,
      description: 'Build and maintain scalable infrastructure for our growing platform. Implement CI/CD pipelines, monitoring solutions, and ensure high availability of our services.',
      requirements: ['Kubernetes expertise', 'CI/CD pipeline management', 'Cloud platforms (AWS/GCP)', 'Infrastructure as Code'],
      benefits: ['Salary: $110k-140k', 'Cutting-edge technology', 'Conference attendance', 'Stock options'],
      applicants: {
        total: 18,
        pending: 8,
        interviewed: 8,
        shortlisted: 2
      },
      completionRate: 72,
      avgScore: 79,
      topCandidateScore: 91,
      shortlistedCandidates: ['4', '12']
    },
    {
      id: '4',
      title: 'Full Stack Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 28, 2024',
      daysLeft: 16,
      description: 'Develop full-stack applications using React, Node.js, and MongoDB. Collaborate with cross-functional teams to build scalable and maintainable solutions.',
      requirements: ['5+ years experience', 'Strong backend development skills', 'Database management', 'Microservices architecture'],
      benefits: ['Salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 35,
        pending: 15,
        interviewed: 16,
        shortlisted: 6
      },
      completionRate: 76,
      avgScore: 82,
      topCandidateScore: 94
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data',
      status: 'active' as const,
      deadline: 'April 5, 2024',
      daysLeft: 24,
      description: 'Analyze large datasets and develop predictive models to drive business decisions. Work closely with data engineering teams to ensure data quality and availability.',
      requirements: ['PhD in Statistics or Data Science', 'Strong programming skills', 'Machine learning expertise', 'Data visualization tools'],
      benefits: ['Salary: $130k-160k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 19,
        pending: 12,
        interviewed: 6,
        shortlisted: 2
      },
      completionRate: 58,
      avgScore: 85,
      topCandidateScore: 92
    },
    {
      id: '6',
      title: 'QA Engineer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 30, 2024',
      daysLeft: 18,
      description: 'Test software applications to ensure they meet quality standards. Collaborate with development teams to identify and fix bugs, and provide feedback on product design.',
      requirements: ['5+ years experience', 'Strong testing skills', 'Automation testing tools', 'Experience with CI/CD pipelines'],
      benefits: ['Salary: $100k-130k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 16,
        pending: 9,
        interviewed: 5,
        shortlisted: 2
      },
      completionRate: 69,
      avgScore: 77,
      topCandidateScore: 88
    },
    {
      id: '7',
      title: 'Marketing Manager',
      department: 'Marketing',
      status: 'active' as const,
      deadline: 'April 10, 2024',
      daysLeft: 29,
      description: 'Develop and execute marketing strategies to drive brand awareness and sales. Collaborate with cross-functional teams to create compelling content and campaigns.',
      requirements: ['5+ years experience', 'Strong communication skills', 'Digital marketing tools', 'SEO and content strategy'],
      benefits: ['Salary: $120k-150k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 24,
        pending: 18,
        interviewed: 4,
        shortlisted: 2
      },
      completionRate: 42,
      avgScore: 83,
      topCandidateScore: 89
    },
    {
      id: '8',
      title: 'Backend Developer',
      department: 'Engineering',
      status: 'active' as const,
      deadline: 'March 22, 2024',
      daysLeft: 10,
      description: 'Develop and maintain server-side applications using Node.js, Python, and microservices architecture. Collaborate with cross-functional teams to build scalable and maintainable solutions.',
      requirements: ['5+ years experience', 'Strong backend development skills', 'Database management', 'Microservices architecture'],
      benefits: ['Salary: $110k-140k', 'Remote work options', 'Health insurance', 'Professional development budget'],
      applicants: {
        total: 26,
        pending: 8,
        interviewed: 14,
        shortlisted: 4
      },
      completionRate: 85,
      avgScore: 81,
      topCandidateScore: 95
    }
  ];

  // Expanded candidates data with diverse profiles and preferences
  const candidates = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      overallScore: 96,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      experience: '6+ years experience',
      scores: {
        coding: 98,
        interview: 94,
        softSkills: 96
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 hours ago',
      highlights: ['Exceptional problem-solving skills', 'Strong technical leadership', 'Open source contributor']
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      role: 'Senior Frontend Developer',
      overallScore: 91,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Vue.js', 'Python', 'AWS', 'Docker', 'Redis'],
      experience: '5+ years experience',
      scores: {
        coding: 93,
        interview: 89,
        softSkills: 91
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Great team collaboration', 'Innovative thinking', 'Scalable architecture expertise']
    },
    {
      id: '3',
      name: 'Jordan Kim',
      role: 'Product Designer',
      overallScore: 93,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'A/B Testing'],
      experience: '7+ years experience',
      scores: {
        coding: 0,
        interview: 95,
        softSkills: 91
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Outstanding portfolio', 'User-centered design approach', 'Data-driven decisions']
    },
    {
      id: '4',
      name: 'Taylor Morgan',
      role: 'DevOps Engineer',
      overallScore: 88,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'Monitoring', 'Security'],
      experience: '4+ years experience',
      scores: {
        coding: 90,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '5 hours ago',
      highlights: ['Strong infrastructure knowledge', 'Security-first mindset']
    },
    {
      id: '5',
      name: 'Maya Patel',
      role: 'Full Stack Engineer',
      overallScore: 89,
      preference: '1st' as const,
      status: 'shortlisted' as const,
      skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Microservices'],
      experience: '5+ years experience',
      scores: {
        coding: 92,
        interview: 86,
        softSkills: 89
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '6 hours ago',
      highlights: ['Full-stack expertise', 'Mentoring experience', 'Agile methodologies']
    },
    {
      id: '6',
      name: 'Chris Johnson',
      role: 'Data Scientist',
      overallScore: 92,
      preference: '1st' as const,
      status: 'interviewed' as const,
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
      experience: '4+ years experience',
      scores: {
        coding: 94,
        interview: 90,
        softSkills: 92
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['PhD in Machine Learning', 'Published researcher', 'Industry experience']
    },
    {
      id: '7',
      name: 'Sam Wilson',
      role: 'QA Engineer',
      overallScore: 85,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Selenium', 'Jest', 'Cypress', 'API Testing', 'Performance Testing'],
      experience: '3+ years experience',
      scores: {
        coding: 87,
        interview: 83,
        softSkills: 85
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '2 days ago',
      highlights: ['Automation expertise', 'Quality-focused mindset', 'Process improvement']
    },
    {
      id: '8',
      name: 'Riley Davis',
      role: 'Marketing Manager',
      overallScore: 87,
      preference: '1st' as const,
      status: 'pending' as const,
      skills: ['Digital Marketing', 'Analytics', 'Campaign Management', 'SEO', 'Content Strategy'],
      experience: '5+ years experience',
      scores: {
        coding: 0,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 0,
      totalSteps: 2,
      submittedAt: '3 hours ago',
      highlights: ['Growth marketing expert', 'Data-driven campaigns']
    },
    {
      id: '9',
      name: 'Jamie Lee',
      role: 'Backend Developer',
      overallScore: 90,
      preference: '2nd' as const,
      status: 'shortlisted' as const,
      skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis'],
      experience: '4+ years experience',
      scores: {
        coding: 93,
        interview: 87,
        softSkills: 90
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '8 hours ago',
      highlights: ['Microservices architecture', 'Performance optimization', 'Clean code advocate']
    },
    {
      id: '10',
      name: 'Casey Brown',
      role: 'Senior Frontend Developer',
      overallScore: 84,
      preference: '3rd' as const,
      status: 'interviewed' as const,
      skills: ['Angular', 'JavaScript', 'CSS', 'RxJS', 'NgRx'],
      experience: '4+ years experience',
      scores: {
        coding: 86,
        interview: 82,
        softSkills: 84
      },
      completedSteps: 3,
      totalSteps: 3,
      submittedAt: '1 day ago',
      highlights: ['Angular specialist', 'Component architecture', 'Responsive design']
    },
    {
      id: '11',
      name: 'Avery Thompson',
      role: 'Product Designer',
      overallScore: 86,
      preference: '2nd' as const,
      status: 'interviewed' as const,
      skills: ['Sketch', 'InVision', 'User Testing', 'Wireframing', 'Brand Design'],
      experience: '4+ years experience',
      scores: {
        coding: 0,
        interview: 88,
        softSkills: 84
      },
      completedSteps: 2,
      totalSteps: 2,
      submittedAt: '2 days ago',
      highlights: ['Brand consistency', 'User experience optimization', 'Cross-functional collaboration']
    },
    {
      id: '12',
      name: 'Morgan Garcia',
      role: 'DevOps Engineer',
      overallScore: 83,
      preference: '2nd' as const,
      status: 'pending' as const,
      skills: ['Docker', 'AWS', 'CI/CD', 'Ansible', 'Prometheus'],
      experience: '3+ years experience',
      scores: {
        coding: 85,
        interview: 0,
        softSkills: 0
      },
      completedSteps: 1,
      totalSteps: 3,
      submittedAt: '4 hours ago',
      highlights: ['Cloud infrastructure', 'Automation mindset']
    }
  ];

  const roleAnalytics = {
    totalApplicants: 28,
    interviewsCompleted: 18,
    averageScore: 84,
    aiShortlisted: 5,
    conversionRate: 64,
    timeToHire: 11,
    topSkills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'AWS'],
    scoreDistribution: {
      excellent: 5,
      good: 8,
      average: 4,
      below: 1
    },
    candidatePreferences: {
      first: 12,
      second: 9,
      third: 5,
      backup: 2
    },
    weeklyProgress: []
  };

  const handleViewRoleDetails = (roleId: string) => {
    setSelectedRole(roleId);
    setActiveView('analytics');
  };

  const handleViewCandidateProfile = (candidateId: string) => {
    navigate('/candidate-profile', { state: { candidateId } });
  };

  const handleShortlistCandidate = (candidateId: string) => {
    console.log('Shortlist candidate:', candidateId);
  };

  const handleRejectCandidate = (candidateId: string) => {
    console.log('Reject candidate:', candidateId);
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = candidateFilter === 'all' || candidate.status === candidateFilter;
    return matchesSearch && matchesFilter;
  });

  const getShortlistedCandidatesForRole = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (!role) return [];
    return candidates.filter(c => role.shortlistedCandidates?.includes(c.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Header with new components */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zara-purple to-zara-purple-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  R
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruitment Command Center</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zara-purple" />
                    AI-powered hiring at scale - streamlined for maximum efficiency
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <NotificationCenter userRole="recruiter" />
                <ContextualHelp context="dashboard" userRole="recruiter" />
                <Link to="/job-upload">
                  <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Role
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {[
              { title: dashboardStats.totalRoles.toString(), subtitle: "Total Roles", icon: Target, color: "purple", trend: `${dashboardStats.activeRoles} active` },
              { title: dashboardStats.totalCandidates.toString(), subtitle: "Total Candidates", icon: Users, color: "blue", trend: "+18 this week" },
              { title: dashboardStats.interviewsCompleted.toString(), subtitle: "Interviews Done", icon: CheckCircle, color: "green", trend: "+12 today" },
              { title: dashboardStats.candidatesShortlisted.toString(), subtitle: "Shortlisted", icon: Star, color: "yellow", trend: "Ready for hire" },
              { title: dashboardStats.hiresThisMonth.toString(), subtitle: "Hires This Month", icon: Award, color: "green", trend: "↗️ +40%" },
              { title: `${dashboardStats.averageScore}`, subtitle: "Avg AI Score", icon: TrendingUp, color: "blue", trend: "Above industry" },
              { title: `${dashboardStats.timeToHire}d`, subtitle: "Time to Hire", icon: Clock, color: "orange", trend: "30% faster" },
              { title: "96%", subtitle: "Platform Accuracy", icon: Zap, color: "purple", trend: "AI precision" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
                      stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <stat.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{stat.title}</CardTitle>
                  <CardDescription className="text-xs font-medium">{stat.subtitle}</CardDescription>
                  <div className="text-xs text-gray-500 mt-1">{stat.trend}</div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeView} onValueChange={(value: any) => setActiveView(value)} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Roles ({roles.length})
              </TabsTrigger>
              <TabsTrigger value="candidates" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Candidates ({candidates.length})
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-zara-purple to-zara-purple-dark text-white border-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-2 text-white">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      Role Management
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Create AI-powered interview flows and manage job descriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setActiveView('roles')}
                        className="w-full bg-white text-zara-purple hover:bg-white/90 hover:shadow-lg transition-all duration-200 group-hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View All Roles
                      </Button>
                      <Link to="/job-upload">
                        <Button className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors">
                          <Plus className="w-4 h-4 mr-2" />
                          Create New Role
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 hover:border-blue-300 bg-gradient-to-br from-white to-violet-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      Candidate Pipeline
                    </CardTitle>
                    <CardDescription>
                      Review AI assessments and manage your talent pipeline
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setActiveView('candidates')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:shadow-lg"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        View All Candidates
                      </Button>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-900">Pending Reviews</span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {candidates.filter(c => c.status === 'pending').length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-green-200 hover:border-green-300 bg-gradient-to-br from-white to-violet-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                      </div>
                      Analytics & Insights
                    </CardTitle>
                    <CardDescription>
                      Track hiring metrics and ROI from AI-powered recruitment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setActiveView('analytics')}
                        className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-200 hover:shadow-lg"
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                      <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50 transition-colors">
                        Export Reports
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Roles Tab */}
            <TabsContent value="roles" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Active Roles</h2>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Search roles..."
                    className="w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {roles.map((role) => (
                  <Card key={role.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{role.title}</CardTitle>
                            <Badge className="bg-zara-purple-light text-zara-purple">
                              {role.department}
                            </Badge>
                            <Badge 
                              className={role.daysLeft <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}
                            >
                              {role.daysLeft} days left
                            </Badge>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{role.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Requirements:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {role.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Benefits:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {role.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Star className="w-3 h-3 text-yellow-500" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Shortlisted Candidates Section */}
                          <div className="mt-4">
                            <h5 className="font-medium text-gray-800 mb-3">Shortlisted Candidates ({getShortlistedCandidatesForRole(role.id).length})</h5>
                            {getShortlistedCandidatesForRole(role.id).length > 0 ? (
                              <div className="grid md:grid-cols-2 gap-3">
                                {getShortlistedCandidatesForRole(role.id).slice(0, 4).map((candidate) => (
                                  <div key={candidate.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div>
                                      <div className="font-medium text-green-800">{candidate.name}</div>
                                      <div className="text-sm text-green-600">Score: {candidate.overallScore}/100</div>
                                    </div>
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => handleViewCandidateProfile(candidate.id)}
                                      className="border-green-300 text-green-700 hover:bg-green-100"
                                    >
                                      View Profile
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-500">No candidates shortlisted yet</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-gray-900">{role.applicants.total}</div>
                          <div className="text-sm text-gray-600">Total Applicants</div>
                          <div className="text-lg font-semibold text-zara-purple mt-2">{role.avgScore}</div>
                          <div className="text-xs text-gray-500">Avg Score</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg font-semibold text-blue-600">{role.applicants.interviewed}</div>
                            <div className="text-xs text-gray-500">Interviewed</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-green-600">{role.applicants.shortlisted}</div>
                            <div className="text-xs text-gray-500">Shortlisted</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-orange-600">{role.applicants.pending}</div>
                            <div className="text-xs text-gray-500">Pending</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Button 
                            onClick={() => handleViewRoleDetails(role.id)}
                            variant="outline"
                            className="border-zara-purple text-zara-purple hover:bg-zara-purple-light"
                          >
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Analytics
                          </Button>
                          <Button className="bg-zara-purple hover:bg-zara-purple-dark">
                            <Eye className="w-4 h-4 mr-2" />
                            Manage Role
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Candidate Pipeline</h2>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Search candidates..."
                    className="w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Tabs value={candidateFilter} onValueChange={(value: any) => setCandidateFilter(value)}>
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
                      <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => (
                  <CandidateProfileCard
                    key={candidate.id}
                    candidate={candidate}
                    onViewProfile={handleViewCandidateProfile}
                    onShortlist={handleShortlistCandidate}
                    onReject={handleRejectCandidate}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              {selectedRole ? (
                <RoleAnalytics
                  roleId={selectedRole}
                  roleTitle={roles.find(r => r.id === selectedRole)?.title || 'Role'}
                  analytics={{
                    totalApplicants: 28,
                    interviewsCompleted: 18,
                    averageScore: 84,
                    aiShortlisted: 5,
                    conversionRate: 64,
                    timeToHire: 11,
                    topSkills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'AWS'],
                    scoreDistribution: {
                      excellent: 5,
                      good: 8,
                      average: 4,
                      below: 1
                    },
                    candidatePreferences: {
                      first: 12,
                      second: 9,
                      third: 5,
                      backup: 2
                    },
                    weeklyProgress: []
                  }}
                />
              ) : (
                <div className="space-y-8">
                  <div className="border-b pb-4">
                    <h2 className="text-3xl font-bold text-gray-900">Hiring Analytics Dashboard</h2>
                    <p className="text-gray-600 mt-2">Comprehensive insights into your recruitment performance with and without Zara AI</p>
                  </div>

                  {/* Comparison Cards */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
                      <CardHeader>
                        <CardTitle className="text-xl text-red-800 flex items-center gap-2">
                          <Clock className="w-6 h-6" />
                          Without Zara AI
                        </CardTitle>
                        <CardDescription>Traditional hiring metrics</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-red-600">{enhancedAnalytics.comparison.withoutZara.avgTimeToHire}</div>
                            <div className="text-sm text-gray-600">Days to Hire</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-red-600">${enhancedAnalytics.comparison.withoutZara.costPerHire}</div>
                            <div className="text-sm text-gray-600">Cost per Hire</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-red-600">{enhancedAnalytics.comparison.withoutZara.successRate}%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-red-600">{enhancedAnalytics.comparison.withoutZara.candidateDropoff}%</div>
                            <div className="text-sm text-gray-600">Candidate Dropoff</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                      <CardHeader>
                        <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                          <Award className="w-6 h-6" />
                          With Zara AI
                        </CardTitle>
                        <CardDescription>AI-powered hiring excellence</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-green-600">{enhancedAnalytics.comparison.withZara.avgTimeToHire}</div>
                            <div className="text-sm text-gray-600">Days to Hire</div>
                            <div className="text-xs text-green-600 font-medium">60% faster ↑</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-green-600">${enhancedAnalytics.comparison.withZara.costPerHire}</div>
                            <div className="text-sm text-gray-600">Cost per Hire</div>
                            <div className="text-xs text-green-600 font-medium">62% lower ↓</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-green-600">{enhancedAnalytics.comparison.withZara.successRate}%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                            <div className="text-xs text-green-600 font-medium">40% higher ↑</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border">
                            <div className="text-3xl font-bold text-green-600">{enhancedAnalytics.comparison.withZara.candidateDropoff}%</div>
                            <div className="text-sm text-gray-600">Candidate Dropoff</div>
                            <div className="text-xs text-green-600 font-medium">73% lower ↓</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      { title: enhancedAnalytics.overview.totalHires.toString(), subtitle: "Total Hires", icon: Users, color: "blue", trend: "+18% vs last quarter" },
                      { title: `${enhancedAnalytics.overview.avgTimeToHire}d`, subtitle: "Avg Time to Hire", icon: Clock, color: "green", trend: "Industry: 35 days" },
                      { title: `$${enhancedAnalytics.overview.costPerHire}`, subtitle: "Cost per Hire", icon: Target, color: "purple", trend: "62% below average" },
                      { title: `${enhancedAnalytics.overview.successRate}%`, subtitle: "Success Rate", icon: Award, color: "green", trend: "Industry: 65%" },
                      { title: `${enhancedAnalytics.overview.candidateSatisfaction}/5`, subtitle: "Candidate Rating", icon: Star, color: "yellow", trend: "Based on feedback" },
                      { title: `${enhancedAnalytics.overview.hiringManagerSatisfaction}/5`, subtitle: "Manager Rating", icon: TrendingUp, color: "blue", trend: "Quality satisfaction" }
                    ].map((metric, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-violet-50 border-gray-200 hover:border-gray-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                              metric.color === 'purple' ? 'bg-zara-purple-light text-zara-purple' :
                              metric.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                              metric.color === 'green' ? 'bg-green-100 text-green-600' :
                              metric.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-orange-100 text-orange-600'
                            }`}>
                              <metric.icon className="w-5 h-5" />
                            </div>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{metric.title}</CardTitle>
                          <CardDescription className="text-sm font-medium">{metric.subtitle}</CardDescription>
                          <div className="text-xs text-gray-500 mt-1">{metric.trend}</div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>

                  {/* Charts and Trends */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Monthly Hiring Trends</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {enhancedAnalytics.trends.monthlyHires.map((hires, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Month {index + 1}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-zara-purple h-2 rounded-full" 
                                    style={{ width: `${(hires / 12) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{hires}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Score Improvements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {enhancedAnalytics.trends.avgScores.map((score, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Week {index + 1}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-500 h-2 rounded-full" 
                                    style={{ width: `${score}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{score}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Time to Hire Trend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {enhancedAnalytics.trends.timeToHire.map((days, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Month {index + 1}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${(days / 25) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{days}d</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      
      {/* Feedback Widget */}
      <FeedbackWidget context="recruiter-dashboard" userRole="recruiter" />
    </div>
  );
};

export default RecruiterDashboard;

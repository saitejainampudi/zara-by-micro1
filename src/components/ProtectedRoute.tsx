
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'recruiter' | 'candidate';
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole, 
  redirectTo = '/signin' 
}) => {
  const userRole = sessionStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to={redirectTo} replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect to appropriate dashboard based on user's actual role
    const dashboardRoute = userRole === 'recruiter' ? '/recruiter-dashboard' : '/candidate-dashboard';
    return <Navigate to={dashboardRoute} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { currentUser, userRole } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        // Redirect to a default page if the user doesn't have the required role
        // For example, if a user tries to access a manufacturer page but is an admin
        // we can redirect them to their respective dashboard
        const redirectPath = userRole === 'manufacturer' ? '/manufacturer' : '/ai-suspicious-activity';
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute;

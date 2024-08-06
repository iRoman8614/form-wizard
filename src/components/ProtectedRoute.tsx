import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

interface ProtectedRouteProps {
    component: React.ComponentType;
    pathToRedirect: string;
    condition: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, pathToRedirect, condition }) => {
    return condition ? <Component /> : <Navigate to={pathToRedirect} />;
};

export default ProtectedRoute;

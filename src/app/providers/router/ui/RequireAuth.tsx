import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import React, { useMemo } from 'react';

import { type UserRole } from '@/entities/User';
import { getForbiddenPath, getMainPath } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    role?: UserRole[];
}

/**
 * Проверка авторизации. Редирект на главную страницу.
 * @param children
 * @constructor
 */
export function RequireAuth({ children, role }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!role) {
            return true;
        }
        return role.some((requiredRole) => {
            const hasRoles = userRoles?.includes(requiredRole);
            return hasRoles;
        });
    }, [role, userRoles]);

    if (!auth) {
        return <Navigate to={getMainPath()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getForbiddenPath()} state={{ from: location }} replace />;
    }
    return children;
}

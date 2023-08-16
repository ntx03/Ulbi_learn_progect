import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData, getUserRoles} from "entities/User";
import React, {useMemo} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {type UserRole} from "entities/User/model/types/user";

interface RequireAuthProps {
    children: JSX.Element;
    role?: UserRole[];
}


/**
 * Проверка авторизации. Редирект на главную страницу.
 * @param children
 * @constructor
 */
export function RequireAuth({children, role}: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(()=> {
        if (!role) {
            return true;
        }
        return role.some(requiredRole => {
            const hasRoles = userRoles?.includes(requiredRole);
            return hasRoles;
        })
    },[role, userRoles]);

    if (!auth ) {
        return <Navigate to={RoutePath.main} state={{from:location}} replace/>;
    }

    if(!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{from:location}} replace/>;
    }
    return children;
}
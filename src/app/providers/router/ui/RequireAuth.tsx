import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

/**
 * Проверка авторизации. Редирект на главную страницу.
 * @param children
 * @constructor
 */
export function RequireAuth({children}: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from:location}} replace/>;
    }
    return children;
}
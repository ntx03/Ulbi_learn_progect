import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { type AppRoutesProps } from '@/shared/types/router';

function AppRouter(): JSX.Element {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element: JSX.Element = <Suspense fallback={<div></div>}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth role={route.role}>{element}</RequireAuth> : element}
                path={route.path}
            />
        );
    }, []);
    return (
        <>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </>
    );
}

export default memo(AppRouter);

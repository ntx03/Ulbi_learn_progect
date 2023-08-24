import { Route, Routes } from "react-router-dom";
import {memo, Suspense, useCallback} from "react";
import {type AppRoutesProps, routeConfig} from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import {RequireAuth} from "@/app/providers/router/ui/RequireAuth";

function AppRouter(): JSX.Element {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element: JSX.Element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth role={route.role}>{element}</RequireAuth> : element}
                path={route.path}
            />
        )
    }, [])
    return (
        <>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </>
    );
}

export default memo(AppRouter);

import { Route, Routes } from "react-router-dom";
import {memo, Suspense, useCallback} from "react";
import {type AppRoutesProps, routeConfig} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/index";
import {RequireAuth} from "app/providers/router/ui/RequireAuth";

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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

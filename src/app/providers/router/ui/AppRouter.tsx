import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
    return (
        <>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => <Route key={path} element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )} path={path} />)}
                </Routes>
            </Suspense>
        </>
    );
}

export default AppRouter;
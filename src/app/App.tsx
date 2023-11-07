import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/index';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import '@/app/styles/index.scss';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Loader from '@/shared/ui/deprecated/Loader/Loader';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    // инициализайия пользователя
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <Loader />;
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                // eslint-disable-next-line i18next/no-literal-string
                <Suspense fallback='Перевод...'>
                    <div className={classNames('app_redesigned', {}, [theme])}>
                        <MainLayout header={<Navbar />} content={<AppRouter />} sidebar={<Sidebar />} />
                    </div>
                </Suspense>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Suspense fallback='Перевод...'>
                        <Navbar />
                        <div className='content-page'>
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );

    // return (
    //     <div className={classNames('app', {}, [theme])}>
    //         {/* eslint-disable-next-line i18next/no-literal-string */}
    //         <Suspense fallback='Перевод...'>
    //             <Navbar />
    //             <div className='content-page'>
    //                 <Sidebar />
    //                 <AppRouter />
    //             </div>
    //         </Suspense>
    //     </div>
    // );
}

export default App;

import { Suspense, useEffect } from "react";
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/index";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "app/styles/index.scss";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames("app", {}, [theme])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Suspense fallback="Перевод...">
                <Navbar className="" />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

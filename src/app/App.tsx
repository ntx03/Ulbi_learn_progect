import { Suspense } from 'react';
import 'app/styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/index';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Перевод...">
        <Navbar className='' />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

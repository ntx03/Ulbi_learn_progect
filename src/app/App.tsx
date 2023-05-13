import 'app/styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/index';
import { AboutPage } from 'pages/AboutPage/index';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div className='link-container'>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />}></Route>
          <Route path={'/about'} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

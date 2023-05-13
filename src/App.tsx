import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/main/MainPageAsync';
import { AboutPageAsync } from './pages/about/AboutPageAsync';
import { Suspense } from 'react';
import { useTheme } from './ theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


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
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

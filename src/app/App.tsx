import 'app/styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/index';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/index';


const App = () => {

  const { theme } = useTheme();


  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
};

export default App;

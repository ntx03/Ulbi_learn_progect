import React, { FC, useMemo } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGTH;

const ThemeProvider: FC = ({ children }) => {

  const [theme, setTheme] = React.useState<Theme>(defaultTheme);



  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }), [theme]);

  return (

    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>

  );
};

export default ThemeProvider;

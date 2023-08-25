import React, {type FC, type ReactNode, useMemo} from "react";
import {ThemeContext,} from "../../../../shared/lib/context/ThemeContext";
import {Theme} from "@/shared/const/theme";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage"; // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

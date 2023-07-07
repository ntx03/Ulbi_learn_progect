import { createContext } from "react";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  LIGHT_BLUE = "app_turquoise_theme",
}

export interface ThemeContentProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContentProps>({
    theme: Theme.DARK,
    setTheme: () => Theme.DARK,
});

export const LOCAL_STORAGE_THEME_KEY = "theme";

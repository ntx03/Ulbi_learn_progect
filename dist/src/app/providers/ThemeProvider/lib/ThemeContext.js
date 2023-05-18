import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["LIGTH"] = "ligth";
    Theme["DARK"] = "dark";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({
    theme: Theme.DARK,
    setTheme: function () { return Theme.DARK; },
});
export var LOCAL_STORAGE_THEME_KEY = 'theme';

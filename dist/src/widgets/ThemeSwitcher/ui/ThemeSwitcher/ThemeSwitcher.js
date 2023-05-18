var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider/index';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, __assign({ className: classNames(cls.ThemeSwitcher, {}, [className !== null && className !== void 0 ? className : '']), onClick: toggleTheme, theme: ThemeButton.CLEAR }, { children: theme === Theme.LIGTH ? _jsx(LigthIcon, {}) : _jsx(DarkIcon, {}) })));
};
export default ThemeSwitcher;

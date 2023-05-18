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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
export var ThemeButton;
(function (ThemeButton) {
    ThemeButton["CLEAR"] = "clear";
})(ThemeButton || (ThemeButton = {}));
export var Button = function (props) {
    var className = props.className, children = props.children, theme = props.theme, otherProps = __rest(props, ["className", "children", "theme"]);
    return (_jsx("button", __assign({ className: classNames(cls.Button, {}, [className !== null && className !== void 0 ? className : '', cls[theme !== null && theme !== void 0 ? theme : '']]) }, otherProps, { children: children })));
};
export default Button;

import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
export var Loader = function (_a) {
    var className = _a.className;
    return (_jsx("div", { className: classNames(cls.Loader, {}, [className !== null && className !== void 0 ? className : '']) }));
};
export default Loader;

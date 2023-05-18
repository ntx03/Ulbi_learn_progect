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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/index';
function AppRouter() {
    return (_jsx(_Fragment, { children: _jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx(Routes, { children: Object.values(routeConfig).map(function (_a) {
                    var path = _a.path, element = _a.element;
                    return _jsx(Route, { element: (_jsx("div", __assign({ className: 'page-wrapper' }, { children: element }))), path: path }, path);
                }) }) })) }));
}
export default AppRouter;

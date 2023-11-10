import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { type LinkProps, NavLink } from 'react-router-dom';
import { memo, type ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
    activeClassName?: string;
}

/**
 * Ссылка для перехода на страницу или другое
 */
const AppLink = memo((props: AppLinkProps) => {
    const { activeClassName = '', to, className, children, variant = 'primary', ...otherProps } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [className ?? '', cls[variant ?? '']])
            }
            {...otherProps}>
            {children}
        </NavLink>
    );
});

export default AppLink;

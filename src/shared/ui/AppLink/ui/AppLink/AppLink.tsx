import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";

export enum AppLinkTheme {
  PRIMERY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  to: string;
  children: string | JSX.Element[];
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMERY,
        ...otherProps
    } = props;

    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [
                className ?? "",
                cls[theme ?? ""],
            ])}
        >
            {children}
        </Link>
    );
};

export default AppLink;

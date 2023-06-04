import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/Sidebar/index";
import { useTranslation } from "react-i18next";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/Vector.svg";
import AboutIcon from "shared/assets/icons/aboutIcon.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation("translation");
    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    // @ts-ignore
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className ?? "",
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                className={classNames(cls.collapseBtn, {}, [])}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>

                <div className={cls.item}>
                    <AppLink
                        className={cls.item}
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t("О нас")}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};

export default Sidebar;

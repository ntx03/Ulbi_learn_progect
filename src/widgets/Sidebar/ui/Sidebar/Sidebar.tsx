import React, { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/Sidebar/index";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import SidebarItem from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((collapsed: boolean) => !collapsed);
    };
    const itemsList = useMemo(
        () =>
            SidebarItemsList.map((i, index) => (
                <SidebarItem item={i} collapsed={collapsed} key={index} />
            )),
        [collapsed]
    );
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
            <div className={cls.items}>{itemsList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});

export default Sidebar;

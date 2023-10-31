import React, { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import VStack from '@/shared/ui/deprecated/Stack/VStack/VStack';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((collapsed: boolean) => !collapsed);
    };
    const itemsList = useMemo(
        () => sidebarItemList.map((i, index) => <SidebarItem item={i} collapsed={collapsed} key={index} />),
        [sidebarItemList, collapsed],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <aside
                    data-testid='sidebar'
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className ?? ''])}>
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid='sidebar'
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
                    <Button
                        data-testid='sidebar-toggle'
                        className={classNames(cls.collapseBtn, {}, [])}
                        onClick={onToggle}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        square={true}
                        size={ButtonSize.L}>
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack className={cls.items} gap={'8'}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});

export default Sidebar;

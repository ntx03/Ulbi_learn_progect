import React, { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import ArrowIcon from '../../../../shared/assets/icons/redisigned/arrow_down.svg';

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
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [
                        className ?? '',
                    ])}>
                    <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
                    <VStack className={cls.items} gap={'8'}>
                        {itemsList}
                    </VStack>
                    <Icon
                        Svg={ArrowIcon}
                        data-testid='sidebar-toggle'
                        className={classNames(cls.collapseBtn, {}, [])}
                        onClick={onToggle}
                        clickable></Icon>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid='sidebar'
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
                    <AppLogo size={collapsed ? 25 : 40} className={cls.appLogo} />
                    <VStack className={cls.items} gap={'8'}>
                        {itemsList}
                    </VStack>
                    <Button
                        data-testid='sidebar-toggle'
                        className={classNames(cls.collapseBtn, {}, [])}
                        onClick={onToggle}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        square={true}
                        size={ButtonSize.L}>
                        {collapsed ? '>' : '<'}
                    </Button>

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

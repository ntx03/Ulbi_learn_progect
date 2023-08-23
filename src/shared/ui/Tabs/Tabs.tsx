import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Tabs.module.scss';
import {memo, type ReactNode, useCallback} from 'react';
import Card, {CardTheme} from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}
export interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

const Tabs = ({className, onTabClick, tabs, value}: TabsProps) => {

    const clickHandle = useCallback((tab: TabItem)=> {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])


    return (
        <div className={classNames(cls.Tabs, {}, [className ?? ''])}>
            {tabs.map((tab, index) => (
                <Card className={cls.tab} key={tab.value} theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED} onClick={clickHandle(tab)} >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
};

export default memo(Tabs);
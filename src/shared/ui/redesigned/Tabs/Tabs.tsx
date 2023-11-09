import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, type ReactNode, useCallback } from 'react';
import Card from '../Card/Card';
import Flex, { type FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}
export interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

const Tabs = ({ className, onTabClick, tabs, value, direction = 'row' }: TabsProps) => {
    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex direction={direction} gap={'8'} align={'start'} className={classNames(cls.Tabs, {}, [className ?? ''])}>
            {tabs.map((tab, index) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        key={tab.value}
                        border={'round'}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={clickHandle(tab)}>
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};

export default memo(Tabs);

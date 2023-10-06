import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { memo, type ReactElement } from 'react';

export interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

const MainLayout = ({ className, content, toolbar, header, sidebar }: MainLayoutProps) => {
    return (
        <div className={classNames(cls.MainLayout, {}, [className ?? ''])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};

export default memo(MainLayout);

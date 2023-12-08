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

/**
 * Каркас для отображения компонентов станицы в новом дизайне
 * @param content - основной контент который будет находится посередине (ReactElement)
 * @param toolbar - панель инструментов (ReactElement)
 * @param header - заголовок расположен справа от основного контента (ReactElement)
 * @param sidebar - панель от основного контента слева (ReactElement)
 */
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

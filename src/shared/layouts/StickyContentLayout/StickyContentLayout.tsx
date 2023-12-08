import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { memo, type ReactElement } from 'react';

export interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

/**
 * Каркас для отображения компонентов станицы в старом дизайне
 * @param content основной контент в центре
 * @param right - контент справа
 * @param left - контент слева
 */
const StickyContentLayout = ({ className, content, right, left }: StickyContentLayoutProps) => {
    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className ?? ''])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};

export default memo(StickyContentLayout);

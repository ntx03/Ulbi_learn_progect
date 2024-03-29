import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
import { memo } from 'react';

interface LoaderProps {
    className?: string;
    theme?: string;
}

export enum LoaderTheme {
    NORMAL = 'Loader-normal',
    INVERT = 'Loader',
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = memo(({ className, theme = LoaderTheme.NORMAL }: LoaderProps) => {
    return <div className={classNames(cls.Loader, { [cls[theme]]: true }, [className ?? ''])}></div>;
});

export default Loader;

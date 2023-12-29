import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
import { memo } from 'react';

export type LoaderTheme = 'Loader-normal' | 'Loader';
interface LoaderProps {
    className?: string;
    variant?: LoaderTheme;
}

export const Loader = memo(({ className, variant = 'Loader' }: LoaderProps) => {
    return <div className={classNames(cls.Loader, { [cls[variant]]: true }, [className ?? ''])}></div>;
});

export default Loader;

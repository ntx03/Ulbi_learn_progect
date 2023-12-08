import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import Loader from '@/shared/ui/deprecated/Loader/Loader';
import { memo } from 'react';

interface PageLoaderProps {
    className?: string;
}

/**
 * Страница информарования загрузки
 */
export const PageLoader = memo(({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className ?? ''])}>
            <Loader />
        </div>
    );
});

export default PageLoader;

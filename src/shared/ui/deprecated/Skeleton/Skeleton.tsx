import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties, memo } from 'react';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Skeleton = ({ className, border, height, width }: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return <div className={classNames(cls.Skeleton, {}, [className ?? ''])} style={styles}></div>;
};

export default memo(Skeleton);

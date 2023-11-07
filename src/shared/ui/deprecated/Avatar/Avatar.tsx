import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, useMemo } from 'react';
import { AppImage } from '../../redesigned/AppImage';
import AvatarIcon from '../../../assets/icons/avatar.svg';
import Icon from '../Icon/Icon';
import Skeleton from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number | undefined;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size ?? 100,
            height: size ?? 100,
        };
    }, [size]);

    const errorFallback = <Icon Svg={AvatarIcon} width={size} height={size} />;
    const fallback = <Skeleton width={35} height={35} border={'50%'} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};

export default Avatar;

import { classNames } from '@/shared/lib/classNames/classNames';
import { type ImgHTMLAttributes, type ReactElement, useLayoutEffect, useState } from 'react';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback: ReactElement;
    errorFallback?: ReactElement;
}

const AppImage = ({ className, src, alt = 'image', fallback, errorFallback, ...otherProps }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // useLayoutEffect отрабатывает асинхронно перед вмонтированием компонента в дом дерево,
    // а useEffect отрабатывает синхронно с вмонтированием т.к подгрузка изображения начнется еще до, того как отрендерится компонент.
    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading ?? fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={classNames('', {}, [className ?? ''])} src={src} alt={alt} {...otherProps} />;
};

export default AppImage;

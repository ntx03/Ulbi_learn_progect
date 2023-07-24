import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss';
import React, {memo, type MutableRefObject, type ReactNode, useRef} from 'react';
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

export interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

/**
 * Обертка для страниц
 * @param className
 * @param children
 * @constructor
 */
const Page = ({className, children, onScrollEnd}: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    })

    // блок div здесь нужен только для того, чтобы поместить triggerRef в конце страницы для бесконечного скролла
    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className ?? ''])}>
            {children}
            <div ref={triggerRef}></div>
        </section>
    )
};

export default memo(Page);
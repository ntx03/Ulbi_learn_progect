import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss';
import React, {memo, type MutableRefObject, type ReactNode, type UIEvent, useRef} from 'react';
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getScrollSaveByPath, scrollSaveActions} from "widgets/ScrollSave";
import {useLocation} from "react-router-dom";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useSelector} from "react-redux";
import {type StateSchema} from "app/providers/StoreProvider";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

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
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, location.pathname)

    )
    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    })

    const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position:  e.currentTarget.scrollTop,
            path: location.pathname
        }))
    }, 1000);

    useInitialEffect(()=> {
        wrapperRef.current.scrollTop = scrollPosition;
    })

    // блок div здесь нужен только для того, чтобы поместить triggerRef в конце страницы для бесконечного скролла
    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className ?? ''])} onScroll={onScroll}>
            {children}
            {onScrollEnd ?  <div className={cls.trigger} ref={triggerRef}></div> : null }
        </section>
    )
};

export default memo(Page);
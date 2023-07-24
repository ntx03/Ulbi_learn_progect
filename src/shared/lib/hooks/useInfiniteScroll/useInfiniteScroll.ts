import {type MutableRefObject, useEffect, useRef} from "react";

export interface UseInfiniteScroll {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

/**
 * Хук который позволяет запускать событие при пересечении скроллом выбранного элемента (бесконечный скролл с подгрузкой данных)
 * @param callback - событие которое должно сработать при пересечении triggerRef
 * @param triggerRef - элемент при скролле на который будет срабатывать callback
 * @param wrapperRef - элепент в котором находится triggerRef
 */
export function useInfiniteScroll({callback, triggerRef, wrapperRef}: UseInfiniteScroll) {
    const observer = useRef<IntersectionObserver | null>(null)
    useEffect(()=> {

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer.current = new IntersectionObserver(([entry]) => {
                // для срабатывания события только один раз при скролле triggerRef
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerRef.current);
        }


        return () => {
            if (observer.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerRef.current)
            }
        }

    }, [callback, triggerRef, wrapperRef])
}
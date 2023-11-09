import { type MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScroll {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

/**
 * Хук который позволяет запускать событие при пересечении скроллом выбранного элемента (бесконечный скролл с подгрузкой данных)
 * @param callback - событие которое должно сработать при пересечении triggerRef
 * @param triggerRef - элемент при скролле на который будет срабатывать callback
 * @param wrapperRef - элемент в котором находится triggerRef
 */
export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScroll) {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        // эти константы создаем для того, чтобы про демонтаже элемента, за счет замыкания элемент оставался в useEffect и не было null
        const wrapperElement = wrapperRef?.current ?? null;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                // для срабатывания события только один раз при скролле triggerRef
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}

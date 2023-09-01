import { useCallback, useRef } from 'react';

/**
 * Этот хук создает задержку выполнения колбэка. Полезно при замере скролла т.к скролл выполняется постоянно и стейт редакса забивается
 * @param callback - коллбэк
 * @param delay - задержка выполнения коллбэка
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                // eslint-disable-next-line n/no-callback-literal
                callback(...args);
                throttleRef.current = true;
                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}

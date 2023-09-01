import { useCallback, useRef } from 'react';

/**
 * Этот хук создает задержку выполнения колбэка. Используем при задержке запроса на сервер при поиске или сотрировке.
 * @param callback - коллбэк
 * @param delay - задержка выполнения коллбэка
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef();

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            // @ts-ignore
            timer.current = setTimeout(() => {
                // eslint-disable-next-line n/no-callback-literal
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}

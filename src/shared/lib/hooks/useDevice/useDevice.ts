import {useEffect, useState} from "react";

/**
 * Хук отвечает за определение с какого устройства заходит пользователь на сайт (ПК или мобилка)
 */
export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => { setIsMobile(window.matchMedia('(pointer:coarse)').matches); };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => { window.removeEventListener('resize', handleResize); }; // удаляем обработчик
    }, []);

    return isMobile;
};
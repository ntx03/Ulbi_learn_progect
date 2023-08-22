import {createContext, type ReactNode, useContext, useEffect, useMemo, useRef, useState} from "react";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
 type SpringType  = typeof import('@react-spring/web');
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
 type GestureType  = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// лениво загружаем библиотеки одновременно
const getAsyncAnimationModules = async () => {
    return await Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react')
    ])
}

export const useAnimationsLibs = () => {
    // кастуем так к as Required<AnimationContextPayload>, чтобы небыло undefined в этом хуке при вызове  Gesture и Spring
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
}

// этот пройвадер нужен для того, чтобы библиотеки для управления модалкой уведомлений в Drawer не подтягивались в основной бандл, а лениво подгружались по мере использования компонента Drawer
export const AnimationProvider = ({children}: {children: ReactNode}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        void getAsyncAnimationModules()
            .then(([Spring, Gesture])=> {
                SpringRef.current = Spring;
                GestureRef.current = Gesture;
                setIsLoaded(true);
            });
    },[]);

    // оборачиваем в useMemo для того, чтобы не было лишних перерисовок
    const value = useMemo(()=> ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded
    }), [isLoaded])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}
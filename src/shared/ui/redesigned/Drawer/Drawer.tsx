import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, type ReactNode, useCallback, useEffect } from 'react';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
// import { useDrag } from '@use-gesture/react'
// import { a, useSpring, config } from '@react-spring/web'
import { AnimationProvider, useAnimationsLibs } from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationsLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();
    const { className, children, onClose, isOpen } = props;

    // const mods: Mods = {
    //     [cls.opened]: isOpen,
    //     [cls.isClose]: !isOpen
    // };

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );
    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));
    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Drawer, {}, [
                    className,
                    theme,
                    'app_drawer',
                    toggleFeatures({ name: 'isAppRedesigned', on: () => cls.drawerNew, off: () => cls.drawerOld }),
                ])}>
                <Overlay onClick={onClose} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationsLibs();
    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
};
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};

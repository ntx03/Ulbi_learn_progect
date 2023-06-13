import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, { type ReactNode, useCallback, useEffect, useState } from "react";
import Portal from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: ModalProps) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    const { theme } = useTheme();
    const [isMounted, setisMounted] = useState(false);
    const closeHandler = useCallback((): void => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );
    useEffect(() => {
        if (isOpen) {
            setisMounted(true);
        }
    }, [isOpen]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeydown);
        }
        return () => {
            window.removeEventListener("keydown", onKeydown);
        };
    }, [isOpen, onKeydown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className ?? "", theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;

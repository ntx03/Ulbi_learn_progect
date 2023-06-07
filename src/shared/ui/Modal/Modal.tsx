import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, { type ReactNode, useCallback, useEffect } from "react";
import Portal from "shared/ui/Portal/Portal";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
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
            window.addEventListener("keydown", onKeydown);
        }
        return () => {
            window.removeEventListener("keydown", onKeydown);
        };
    }, [isOpen, onKeydown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className ?? ""])}>
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

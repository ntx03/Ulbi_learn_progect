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

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    // передаем тему приложения
    const { theme } = useTheme();

    // состояние монтирования модалки в дом дерево
    const [isMounted, setIsMounted] = useState(false);

    // закрываем модальное окно
    const closeHandler = useCallback((): void => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    // закрытие модалки по Esc
    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    // при открытии монтируем в DOM дерево модальное окно
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    // при открытии модалки вешаем слушатель, при закрытии снимаем слушатель
    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeydown);
        }
        return () => {
            window.removeEventListener("keydown", onKeydown);
        };
    }, [isOpen, onKeydown]);

    // чтобы модальное окно не закрывалось при клике по содержимому
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // если модальное окнот не вызвали, то оно не монтируется в DOM дерево
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

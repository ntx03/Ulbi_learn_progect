import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import Modal from '@/shared/ui/redesigned/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import Loader, { LoaderTheme } from '@/shared/ui/deprecated/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Модальное окно с формой авторизации
 * @param isOpen - открыта или нет
 * @param onClose - setIsOpen сеттер useState
 */
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal className={classNames(cls.LoginModal, {}, [className ?? ''])} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader theme={LoaderTheme.NORMAL} />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;

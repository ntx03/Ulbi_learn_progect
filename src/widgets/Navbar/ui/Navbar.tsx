import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import i18n from "i18next";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    // const { t } = useTranslation("translation");
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className ?? ""])}>
                <div className={cls.links}></div>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.button}
                >
                    {i18n.t("Выйти")}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar, {}, [className ?? ""])}>
            <div className={cls.links}></div>
            <Button
                onClick={onOpen}
                theme={ButtonTheme.OUTLINE}
                className={cls.button}
            >
                {i18n.t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onClose}></LoginModal>
            )}
        </div>
    );
}

export default Navbar;

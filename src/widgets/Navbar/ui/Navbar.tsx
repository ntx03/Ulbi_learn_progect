import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
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
    const { t } = useTranslation("translation");
    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className ?? ""])}>
                <div className={cls.links}></div>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.button}
                >
                    {t("Выйти")}
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
                {t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onClose}></LoginModal>
            )}
        </div>
    );
});

export default Navbar;

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import i18n from "i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation("translation");
    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);
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
            <LoginModal isOpen={isAuthModal} onClose={onClose}></LoginModal>
        </div>
    );
}

export default Navbar;

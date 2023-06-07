import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import Modal from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import i18n from "i18next";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation("translation");
    const onToggle = useCallback(() => {
        setIsAuthModal((state) => !state);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className ?? ""])}>
            <div className={cls.links}></div>
            <Button onClick={onToggle} theme={ButtonTheme.OUTLINE}>
                {i18n.t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggle}>
                disallow literal string(i18next/no-literal-string)
            </Modal>
        </div>
    );
}

export default Navbar;

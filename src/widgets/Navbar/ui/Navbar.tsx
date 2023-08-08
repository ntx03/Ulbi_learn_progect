import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {memo, useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {getUserAuthData, userActions} from "entities/User";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

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
            <header className={classNames(cls.navbar, {}, [className ?? ""])}>
                <div className={cls.links}>
                    <Text className={cls.appName} title={t('KachurTV App')}></Text>
                    <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} >{t('Создать статью')}</AppLink>
                </div> 
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.button}
                >
                    {t("Выйти")}
                </Button>
            </header>
        );
    }
    return (
        <header className={classNames(cls.navbar, {}, [className ?? ""])}>
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
        </header>
    );
});

export default Navbar;

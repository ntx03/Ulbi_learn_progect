import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {memo, useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {getUserAuthData, isUserAdmin, userActions} from "entities/User";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import Dropdown from "shared/ui/Dropdown/Dropdown";
import Avatar from "shared/ui/Avatar/Avatar";

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const {t} = useTranslation("translation");
    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className ?? ""])}>
                <div className={cls.links}>
                    <Text className={cls.appName} title={t('KachurTV App')}></Text>
                    <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>{t('Создать статью')}</AppLink>
                </div>
                <Dropdown items={
                    [
                        ...( isAdmin ? [{
                            content: t("Админка"),
                            href: `${RoutePath.admin_panel}`
                        }] : []),
                        {
                            content: t("Профиль пользователя"),
                            href: `${RoutePath.profile}/${authData.id}`
                        },
                        {
                            content: t("Выйти"),
                            onClick: onLogout,
                        },

                    ]} trigger={<Avatar size={40} src={authData.avatar}/>} className={cls.dropdown}/>

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

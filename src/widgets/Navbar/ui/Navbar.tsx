import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import AppLink, { AppLinkTheme } from '@/shared/ui/deprecated/AppLink/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationsButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getArticleCreatePath } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const authData = useSelector(getUserAuthData);

    const { t } = useTranslation('translation');

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <header className={classNames(cls.navbarRedesigned, {}, [className ?? ''])}>
                        <HStack gap={'16'} className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.navbar, {}, [className ?? ''])}>
                        <div className={cls.links}>
                            <Text className={cls.appName} title={t('KachurTV App')}></Text>
                            <AppLink to={getArticleCreatePath()} theme={AppLinkTheme.SECONDARY}>
                                {t('Создать статью')}
                            </AppLink>
                        </div>
                        <HStack gap={'16'} className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }
    return (
        <header className={classNames(cls.navbar, {}, [className ?? ''])}>
            <div className={cls.links}></div>
            <Button onClick={onOpen} theme={ButtonTheme.OUTLINE} className={cls.button}>
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose}></LoginModal>}
        </header>
    );
});

export default Navbar;

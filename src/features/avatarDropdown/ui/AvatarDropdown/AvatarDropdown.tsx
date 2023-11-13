import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { memo, useCallback } from 'react';
import DropdownDeprecated from '@/shared/ui/deprecated/Popups/ui/Dropdown/Dropdown';
import AvatarDeprecated from '@/shared/ui/deprecated/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, userActions } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { getAdminPanelPath, getProfilePath, getSettingsPath } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import Avatar from '@/shared/ui/redesigned/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { useNavigate } from 'react-router-dom';

export interface AvatarDropdownProps {
    className?: string;
}

const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const isAdmin = useSelector(isUserAdmin);
    const { t } = useTranslation('translation');
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const getAdmin = () => {
        navigate(getAdminPanelPath());
    };
    const getSettings = () => {
        navigate(getSettingsPath());
    };

    if (authData) {
        const getProfile = () => {
            navigate(getProfilePath(authData.id));
        };
        const items = [
            ...(isAdmin
                ? [
                      {
                          content: t('Админка'),
                          href: getAdminPanelPath(),
                          onClick: getAdmin,
                      },
                  ]
                : []),
            {
                content: t('Профиль пользователя'),
                href: getProfilePath(authData.id),
                onClick: getProfile,
            },
            {
                content: t('Настройки'),
                href: getSettingsPath(),
                onClick: getSettings,
            },
            {
                content: t('Выйти'),
                onClick: onLogout,
            },
        ];
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <div className={classNames(cls.AvatarDropdown, {}, [className ?? ''])}>
                        <Dropdown
                            items={items}
                            trigger={<Avatar size={48} src={authData.avatar} />}
                            className={cls.dropdown}
                        />
                    </div>
                }
                off={
                    <div className={classNames(cls.AvatarDropdown, {}, [className ?? ''])}>
                        <DropdownDeprecated
                            items={items}
                            trigger={<AvatarDeprecated size={40} src={authData.avatar} />}
                            className={cls.dropdown}
                        />
                    </div>
                }
            />
        );
    }
    return null;
};

export default memo(AvatarDropdown);

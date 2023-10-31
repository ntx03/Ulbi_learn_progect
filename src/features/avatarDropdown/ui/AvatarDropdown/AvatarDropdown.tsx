import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { memo, useCallback } from 'react';
import Dropdown from '@/shared/ui/deprecated/Popups/ui/Dropdown/Dropdown';
import Avatar from '@/shared/ui/deprecated/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, userActions } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { getAdminPanelPath, getProfilePath } from '@/shared/const/router';

export interface AvatarDropdownProps {
    className?: string;
}

const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const isAdmin = useSelector(isUserAdmin);
    const { t } = useTranslation('translation');
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.AvatarDropdown, {}, [className ?? ''])}>
                <Dropdown
                    items={[
                        ...(isAdmin
                            ? [
                                  {
                                      content: t('Админка'),
                                      href: getAdminPanelPath(),
                                  },
                              ]
                            : []),
                        {
                            content: t('Профиль пользователя'),
                            href: getProfilePath(authData.id),
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                    className={cls.dropdown}
                />
            </div>
        );
    }
    return null;
};

export default memo(AvatarDropdown);

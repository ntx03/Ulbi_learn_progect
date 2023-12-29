import cls from './NotificationsButton.module.scss';
import { memo, useState } from 'react';
import { NotificationsList } from '@/entities/Notifications';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import IconDeprecated from '@/shared/ui/deprecated/Icon/Icon';
import NotificationsIconDeprecated from '@/shared/assets/icons/bell.svg';
import NotificationIcon from '@/shared/assets/icons/redisigned/bell.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

export interface NotificationButtonProps {
    className?: string;
}

/**
 * Кнопка с уведомлениями (колокольчик около значка с аватаркой справа)
 */
const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };

    // это просто кнопка с иконкой для вызова дропдауна с уведомлениями
    const triggerComponent = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Icon
                    Svg={NotificationIcon}
                    width={35}
                    height={35}
                    clickable
                    onClick={(): void => {
                        setIsOpen(true);
                    }}
                />
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={(): void => {
                        setIsOpen(true);
                    }}>
                    <IconDeprecated Svg={NotificationsIconDeprecated} width={20} height={20} invertedColor />
                </ButtonDeprecated>
            }
        />
    );
    const isMobile = useDevice();

    if (isMobile) {
        return (
            <>
                {triggerComponent}
                <Drawer isOpen={isOpen} onClose={onClose}>
                    {' '}
                    <NotificationsList className={cls.notification} />
                </Drawer>
            </>
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Popover direction={'bottomLeft'} trigger={triggerComponent} className={cls.popover}>
                    <NotificationsList className={cls.notification} />
                </Popover>
            }
            off={
                <PopoverDeprecated direction={'bottomLeft'} trigger={triggerComponent} className={cls.popover}>
                    <NotificationsList className={cls.notification} />
                </PopoverDeprecated>
            }
        />
    );
};

export default memo(NotificationButton);

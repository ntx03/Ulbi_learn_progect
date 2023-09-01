import cls from './NotificationsButton.module.scss';
import { memo, useState } from 'react';
import { NotificationsList } from '@/entities/Notifications';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';
import NotificationsIcon from '@/shared/assets/icons/bell.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

export interface NotificationButtonProps {
    className?: string;
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };
    // это просто кнопка с иконкой
    const triggerComponent = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={(): void => {
                setIsOpen(true);
            }}>
            <Icon Svg={NotificationsIcon} invertedColor={true} />
        </Button>
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
        <Popover direction={'bottomLeft'} trigger={triggerComponent} className={cls.popover}>
            <NotificationsList className={cls.notification} />
        </Popover>
    );
};

export default memo(NotificationButton);

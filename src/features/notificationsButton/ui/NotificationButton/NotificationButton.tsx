import cls from './NotificationsButton.module.scss';
import {memo} from 'react';
import {NotificationsList} from "entities/Notifications";
import {Popover} from "shared/ui/Popups";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import Icon from "shared/ui/Icon/Icon";
import NotificationsIcon from 'shared/assets/icons/bell.svg';
export interface NotificationButtonProps {
    className?: string
}

const NotificationButton = ({className}: NotificationButtonProps) => {
    // это просто кнопка с иконкой
    const triggerComponent = (
        <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} invertedColor={true}/>
        </Button>
    )
    return (
        <Popover direction={'bottomLeft'} trigger={triggerComponent} className={cls.popover}>
            <NotificationsList className={cls.notification}/>
        </Popover>
    )
};

export default memo(NotificationButton);
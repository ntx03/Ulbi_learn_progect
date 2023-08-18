import {classNames} from 'shared/lib/classNames/classNames'
import cls from './NotificationsList.module.scss';
import {memo} from 'react';
import {useNotifications} from "../../api/notificationsApi";
import {VStack} from "shared/ui/Stack";
import NotificationsItem from "../NotificationsItem/NotificationsItem";
import Skeleton from "shared/ui/Skeleton/Skeleton";

export interface NotificationsListProps {
    className?: string
}

const NotificationsList = ({className}: NotificationsListProps) => {

    const {data, isLoading} = useNotifications(null, {
        pollingInterval: 5000
    });

    const skeleton = (
        <VStack gap={'16'} max className={classNames(cls.NotificationsList, {}, [className ?? ''])}>
            <Skeleton width='100%' border="8px" height="80px"/>
            <Skeleton width='100%' border="8px" height="80px"/>
            <Skeleton width='100%' border="8px" height="80px"/>
        </VStack>
    )
    const content = (
        <VStack gap={'16'} max className={classNames(cls.NotificationsList, {}, [className ?? ''])}>
            {data?.map((i) => {
                return <NotificationsItem key={i.id} item={i}/>
            })}
        </VStack>
    )

    if (isLoading) {
        return skeleton;
    } else return content;

};

export default memo(NotificationsList);
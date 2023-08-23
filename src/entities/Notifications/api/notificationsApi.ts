import {rtkQueryApi} from "@/shared/api/RTKQueryApi";
import type {Notifications} from "../model/types/notifications";

const notificationsApi = rtkQueryApi.injectEndpoints({
    endpoints: (build) => ({
        // null - это ло что нужно будет передать в хук useNotifications
        getNotifications: build.query<Notifications[], null>({
            query: () => ({url: '/notifications'}),
        }),
    }),
})

export const useNotifications = notificationsApi.useGetNotificationsQuery;
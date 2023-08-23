import type {StateSchema} from "@/app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

import {UserRole} from "../consts/consts";

export const getUserRoles = (state: StateSchema) => {
    return state.user.authData?.role
}
export const isUserAdmin = createSelector(getUserRoles, (roles)=> Boolean(roles?.includes(UserRole.ADMIN)));
export const isUser = createSelector(getUserRoles, (roles)=> Boolean(roles?.includes(UserRole.USER)));
export const isTesterUser = createSelector(getUserRoles, (roles)=> Boolean(roles?.includes(UserRole.TESTER)));
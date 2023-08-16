import { userActions, userReducer } from "./model/slice/userSlice";
import { type User, type UserSchema } from "./model/types/user";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export {getUserInited} from "./model/selectors/getUserInited/getUserInited";
export {isUser, isTesterUser, isUserAdmin, getUserRoles} from './model/selectors/roleSelectors'

export {
    userReducer,
    userActions,
    type UserSchema,
    type User,
    getUserAuthData,
};

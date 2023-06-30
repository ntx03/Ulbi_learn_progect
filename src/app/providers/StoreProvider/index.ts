import { StoreProvider } from "./ui/StoreProvider";
import { type AppDispatch, createReduxStore } from "./config/store";
import {
    type ReduxStoreWithManager,
    type StateSchema,
    type ThunkConfig,
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type AppDispatch,
    type ThunkConfig,
};

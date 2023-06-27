import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import {
    type ReduxStoreWithManager,
    type StateSchema,
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
};

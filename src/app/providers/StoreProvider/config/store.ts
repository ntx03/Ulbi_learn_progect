import {
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject,
} from "@reduxjs/toolkit";
import { type StateSchema, type ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "@/app/providers/StoreProvider/config/reducerManager";
import { $api } from "@/shared/api/api";
import {scrollSaveReducer} from "@/widgets/ScrollSave";
import {rtkQueryApi} from "@/shared/api/RTKQueryApi";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkQueryApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

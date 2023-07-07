import React, { type FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { type ReduxStoreWithManager } from "app/providers/StoreProvider";
import { type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { type Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};
type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
  children: React.ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
    props: DynamicModuleLoaderProps
) => {
    const { children, reducers, removeAfterUnmount } = props;

    const dispatch = useDispatch();

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
    // @ts-ignore
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    // @ts-ignore
                    ([name, reducer]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        dispatch({ type: `@remove ${name} reducer` });
                    }
                );
            }
        };
    // eslint-disable-next-line
  }, []);

    return <>{children}</>;
};

export default DynamicModuleLoader;

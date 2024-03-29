import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';

import { type MountedReducers, type ReducerManager, type StateSchema, type StateSchemaKey } from './StateSchema';

/**
 * Эта функция для удаления или добавления в store redux редьюсеров (reducers). К примеру если мы не открыли страницу,
 * то не зачем в сетйт добавлять информацию которая отностится к этой странице и наоборот.
 * @param initialReducers - все редьюсеры
 */
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: StateSchemaKey[] = [];
    const mountedReducers: MountedReducers = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: StateSchema, action: AnyAction) => {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;
            mountedReducers[key] = true;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);
            mountedReducers[key] = false;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}

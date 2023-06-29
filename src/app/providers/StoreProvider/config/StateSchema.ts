import {type counterSchema} from "entities/Counter";
import {type UserSchema} from "entities/User";
import {type loginSchema} from "features/AuthByUsername";
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from "@reduxjs/toolkit";
import {type ProfileSchema} from "entities/Profile"; // главная стейт схема redux

// главная стейт схема redux
export interface StateSchema {
  counter: counterSchema;
  user: UserSchema;
  // асинхронные редюсеры
  loginForm?: loginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

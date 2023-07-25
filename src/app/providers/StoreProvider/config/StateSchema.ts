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
import {type ProfileSchema} from "entities/Profile";
import {type AxiosInstance} from "axios";
import {type ArticleDetailsSchema} from "entities/Article";
import {type ArticlesDetailsCommentsSchema} from "pages/ArticlesDetailsPage";
import {type AddCommentFormSchema} from "features/addCommentForm/model/type/addCommentForm";
import {type ArticlesPageSchema} from "pages/ArliclesPage";

/**
 * Главная стейт схема Redux
 */
export interface StateSchema {
  counter: counterSchema;
  user: UserSchema;
  // асинхронные редюсеры
  loginForm?: loginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticlesDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - нет
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;

}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

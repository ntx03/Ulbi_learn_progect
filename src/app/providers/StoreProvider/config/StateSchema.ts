import { type counterSchema } from '@/entities/Counter';
import { type UserSchema } from '@/entities/User';
import { type loginSchema } from '@/features/AuthByUsername';
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type ArticleDetailsSchema } from '@/entities/Article';
import { type ArticleDetailsPageSchema } from '@/pages/ArticlesDetailsPage';
import { type AddCommentFormSchema } from '@/features/addCommentForm';
import { type ArticlesPageSchema } from '@/pages/ArliclesPage';
import { type ScrollSaveSchema } from '@/widgets/ScrollSave';
import { type rtkQueryApi } from '@/shared/api/RTKQueryApi';
import { type ProfileSchema } from '@/features/editableProfileCard';

/**
 * Главная стейт схема Redux
 */
export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [rtkQueryApi.reducerPath]: ReturnType<typeof rtkQueryApi.reducer>;
    // асинхронные редюсеры
    loginForm?: loginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - нет
    getMountedReducers: () => MountedReducers;
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

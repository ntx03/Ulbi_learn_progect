import { type UserRole } from '../..';
import { type FeatureFlag } from '@/shared/types/featureFlag';
import { type JsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[];
    features?: FeatureFlag;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}

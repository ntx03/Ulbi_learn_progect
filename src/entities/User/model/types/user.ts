import { type UserRole } from '../..';
import { type FeatureFlag } from '@/shared/types/featureFlag';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[];
    features?: FeatureFlag;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}

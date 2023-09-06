import type { FeatureFlag } from '@/shared/types/featureFlag';
import { getFeaturesFlag } from './setGetFeatures';

export interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlag;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
    if (getFeaturesFlag(name)) {
        return on();
    }
    return off();
}

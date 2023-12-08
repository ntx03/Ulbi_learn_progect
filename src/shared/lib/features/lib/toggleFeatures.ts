import type { FeatureFlag } from '@/shared/types/featureFlag';
import { getFeaturesFlag } from './setGetFeatures';

export interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlag;
    on: () => T;
    off: () => T;
}

/**
 * Переключатель функций на основании фича флага
 * @param name - имя фичи
 * @param on  - если фича true
 * @param off  - если false
 */
export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
    if (getFeaturesFlag(name)) {
        return on();
    }
    return off();
}

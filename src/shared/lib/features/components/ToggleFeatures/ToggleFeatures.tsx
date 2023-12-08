import { type FeatureFlag } from '@/shared/types/featureFlag';
import { type ReactElement } from 'react';
import { getFeaturesFlag } from '../../lib/setGetFeatures';
interface ToggleFeaturesProps {
    feature: keyof FeatureFlag;
    on: ReactElement;
    off: ReactElement;
}

/**
 * Для компонентов переключатель по фича влагу (именно для компонентов!)
 * @param on - компонент при фича флаге true
 * @param feature - фича флаг для компонента
 * @param off - компонент при фича флаге false
 */
export const ToggleFeatures = ({ on, feature, off }: ToggleFeaturesProps) => {
    if (getFeaturesFlag(feature)) {
        return on;
    }
    return off;
};

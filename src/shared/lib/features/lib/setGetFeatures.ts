import type { FeatureFlag } from '@/shared/types/featureFlag';

let featureFlags: FeatureFlag = {};

/**
 * Созраняем переданные фича флаги в переменной
 * @param newFeatureFlags - все фича флаги которые есть на бэке по текущему пользователю
 */
export function setFeatureFlags(newFeatureFlags?: FeatureFlag) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

/**
 * получаем флаг переданной фичи (концепция Feature flags)
 * @param flag - передаем название фичи
 */
export function getFeaturesFlag(flag: keyof FeatureFlag) {
    return featureFlags[flag];
}
/**
 * получаем все вича-флаги
 */
export function getAllFeaturesFlag() {
    return featureFlags;
}

import { buildSelector } from '@/shared/lib/store';
import { type JsonSettings } from '../types/jsonSettings';
const defaultJsonSettings: JsonSettings = {};
/**
 * получаем настройки пользователя из сетйта (
 *     theme?: Theme;
 *     isFirstVisit?: boolean;
 *     settingsPageHasBeenOpen?: boolean;
 *     isArticlesPageWasOpen?: boolean;
 *     )
 */
export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key],
);

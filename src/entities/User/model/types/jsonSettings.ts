import { type Theme } from '@/shared/const/theme';

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
    isArticlesPageWasOpen?: boolean;
}

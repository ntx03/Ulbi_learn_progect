import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Button } from '@/shared/ui/redesigned/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');

    const toggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Button onClick={toggle} variant={'clear'}>
                    {t(short ? 'Короткая версия' : 'Язык')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                    className={classNames(cls.LangSwitcher, {}, [className ?? ''])}>
                    {t(short ? 'Короткая версия' : 'Язык')}
                </ButtonDeprecated>
            }
        />
    );
});

export default LangSwitcher;

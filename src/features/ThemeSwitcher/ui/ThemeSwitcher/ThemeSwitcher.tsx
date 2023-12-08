import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LigthIcon from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/redisigned/swap_theme.svg';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import IconDeprecated from '@/shared/ui/deprecated/Icon/Icon';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import Icon from '@/shared/ui/redesigned/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Компонент иконка переключения темы приложения
 */
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Icon Svg={ThemeIcon} onClick={onToggleHandler} clickable={true} />}
            off={
                <ButtonDepricated
                    className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
                    onClick={onToggleHandler}
                    theme={ButtonTheme.CLEAR}>
                    <IconDeprecated Svg={LigthIcon} width={40} height={40} invertedColor={true} />
                </ButtonDepricated>
            }
        />
    );
});

export default ThemeSwitcher;

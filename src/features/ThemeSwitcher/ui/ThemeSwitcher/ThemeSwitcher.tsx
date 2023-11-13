import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LigthIcon from '@/shared/assets/icons/theme-light.svg';
import BlueIcon from '@/shared/assets/icons/theme-ligth_blue.svg';
import ThemeIcon from '@/shared/assets/icons/redisigned/swap_theme.svg';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import IconDeprecated from '@/shared/ui/deprecated/Icon/Icon';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import Icon from '@/shared/ui/redesigned/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const icon = () => {
        switch (theme) {
            case Theme.DARK:
                return <DarkIcon />;
                break;
            case Theme.LIGHT:
                return <LigthIcon />;
                break;
            case Theme.LIGHT_BLUE:
                return <BlueIcon />;
                break;
            default:
                return <LigthIcon />;
        }
    };
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

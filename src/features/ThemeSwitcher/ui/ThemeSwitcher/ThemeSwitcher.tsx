import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LigthIcon from '@/shared/assets/icons/theme-light.svg';
import BlueIcon from '@/shared/assets/icons/theme-ligth_blue.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Icon from '@/shared/ui/deprecated/Icon/Icon';

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
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}>
            <Icon Svg={LigthIcon} width={40} height={40} invertedColor={true} />
        </Button>
    );
});

export default ThemeSwitcher;

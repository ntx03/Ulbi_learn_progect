import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LigthIcon from '@/shared/assets/icons/theme-light.svg';
import BlueIcon from '@/shared/assets/icons/theme-ligth_blue.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
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
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}>
            {icon()}
        </Button>
    );
});

export default ThemeSwitcher;

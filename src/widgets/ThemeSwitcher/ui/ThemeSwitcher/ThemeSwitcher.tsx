import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider/index';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import Button from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {theme === Theme.LIGTH ? <LigthIcon /> : <DarkIcon />}
        </Button>
    )
};

export default ThemeSwitcher;
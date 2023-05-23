import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';


interface NavbarProps {
    className?: string;
}

function Navbar({className}: NavbarProps) {
    const {t} = useTranslation('translation');
    return (
        <div className={classNames(cls.navbar, {}, [className ?? ''])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>
        </div>
    );
}

export default Navbar;
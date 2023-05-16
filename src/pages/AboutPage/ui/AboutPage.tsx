import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutPage.module.scss'
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string
}

export const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            <p className='title'>{t('О сайте')}</p>
        </div>
    )
};

export default AboutPage;


import {classNames} from 'shared/lib/classNames/classNames'
import cls from './NoFoundPage.module.scss'
import {useTranslation} from 'react-i18next';

interface NoFoundPageProps {
    className?: string
}

export const NoFoundPage = ({className}: NoFoundPageProps) => {
    const {t} = useTranslation('translation');
    return (
        <div className={classNames(cls.NoFoundPage, {}, [className ?? ''])}>
            {t('Не найдена')}
        </div>
    )
};

export default NoFoundPage;

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NoFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

interface NoFoundPageProps {
    className?: string;
}

export const NoFoundPage = memo(({ className }: NoFoundPageProps) => {
    const { t } = useTranslation('translation');
    return (
        <Page data-testid={'NoFoundPage'} className={classNames(cls.NoFoundPage, {}, [className ?? ''])}>
            {t('Не найдена')}
        </Page>
    );
});

export default NoFoundPage;

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export interface ForbiddenPageProps {
    className?: string;
}

/**
 * Страница с информарованием ограничения доступа
 */
const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid={'ForbiddenPage'} className={classNames(cls.ForbiddenPage, {}, [className ?? ''])}>
            <Text title={t('Доступ запрещен')} theme={TextTheme.ERROR} />
        </Page>
    );
};

export default memo(ForbiddenPage);

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export interface AdminPanelPageProps {
    className?: string;
}

/**
 * Старница с админ панелью
 */
const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid={'AdminPanelPage'} className={classNames(cls.AdminPanelPage, {}, [className ?? ''])}>
            {t('Админ панель')}
        </Page>
    );
};

export default memo(AdminPanelPage);

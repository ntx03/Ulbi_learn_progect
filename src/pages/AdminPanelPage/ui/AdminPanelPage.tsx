import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AdminPanelPage.module.scss';
import {memo} from 'react';
import {useTranslation} from "react-i18next";
import Page from "widgets/Page/Page";

export interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = ({className}: AdminPanelPageProps) => {
    const {t} = useTranslation();
    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className ?? ''])}>
            {t('Админ панель')}
        </Page>
    )
};

export default memo(AdminPanelPage);
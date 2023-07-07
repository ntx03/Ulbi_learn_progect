import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    // const {t} = useTranslation('article');
    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
            ArticlesDetailsPage
        </div>
    )
};

export default memo(ArticlesDetailsPage);
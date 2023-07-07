import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {
    // const {t} = useTranslation('article');
    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
            ArticlePage
        </div>
    )
};

export default memo(ArticlePage);
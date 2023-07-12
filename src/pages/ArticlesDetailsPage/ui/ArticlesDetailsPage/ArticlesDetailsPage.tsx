import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleDetails} from "entities/Article";
import {useParams} from "react-router-dom";

export interface ArticlesDetailsPageProps {
    className?: string
}

const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
            <ArticleDetails id={id}/>
        </div>
    )
};

export default memo(ArticlesDetailsPage);
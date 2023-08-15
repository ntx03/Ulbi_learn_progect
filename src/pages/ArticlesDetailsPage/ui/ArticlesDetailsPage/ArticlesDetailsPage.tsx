import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleDetails} from "entities/Article";
import {useParams} from "react-router-dom";

import DynamicModuleLoader, {type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import Page from "widgets/Page/Page";
import {articleDetailsPageReducer} from "../../model/slice/index";
import ArticlesDetailsPageHeader
    from "../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader";
import {ArticleRecommendationsList} from "features/articleRecommendationsList";
import ArticleDetailsComments from "pages/ArticlesDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments";

export interface ArticlesDetailsPageProps {
    className?: string
}
const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}
const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                <ArticlesDetailsPageHeader/>
                <ArticleDetails id={id}/>
                <ArticleRecommendationsList/>
                <ArticleDetailsComments id={id}/>
            </Page>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlesDetailsPage);
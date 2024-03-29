import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';

import DynamicModuleLoader, { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice/index';
import ArticlesDetailsPageHeader from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { Text, TextSize } from '@/shared/ui/deprecated/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import AdditionalInfoContainer from '../AdditionalInfoContainer/AdditionalInfoContainer';

export interface ArticlesDetailsPageProps {
    className?: string;
}
const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};
/**
 * Это компонент для отобрадения статьи целиком вместе с рейтингами, комментариями
 */
const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>{t('Статья не найдена')}</Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <StickyContentLayout
                        content={
                            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                                <VStack gap={'16'} max={true}>
                                    <DetailsContainer className={cls.detailsContainer} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                        <ArticlesDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <ToggleFeatures
                            feature={'isArticleRatingEnabled'}
                            on={<ArticleRating articleId={id} />}
                            off={<Text title={t('Оценка статей скоро появится')} size={TextSize.M} />}
                        />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);

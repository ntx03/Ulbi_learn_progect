import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRating.module.scss';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useGetArticleRating, useRateArticle } from '../../api/ArticleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
export interface ArticleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId: articleId ?? '',
        userId: userData?.id ?? '',
    });
    const rating = data?.[0];

    const [rateArticleMutations] = useRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number | undefined, feedback?: string) => {
            try {
                rateArticleMutations({
                    userId: userData?.id ?? '',
                    articleId: articleId ?? '',
                    rate: starsCount ?? 0,
                    feetback: feedback ?? '',
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutations, userData?.id],
    );

    const onCancel = useCallback(
        (starsCount: number | undefined) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const onAccept = useCallback(
        (starsCount: number | undefined, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={classNames(cls.ArticleRating, {}, [className ?? ''])}
            title={t('Оцените статью') ?? ''}
            feedbackTitle={t('Оставьте свой отзыв о статье') ?? ''}
            hasFeedback={true}
            rate={rating?.rate}></RatingCard>
    );
};

export default memo(ArticleRating);

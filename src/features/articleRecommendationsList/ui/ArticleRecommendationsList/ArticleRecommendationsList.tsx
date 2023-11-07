import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecomentationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { data, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !data) {
        return null;
    }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            {data && <Text size={TextSize.L} title={t('Рекомендуем')} theme={TextTheme.PRIMARY} />}
            {data && <ArticleList articles={data} target='_blank' />}
        </VStack>
    );
});

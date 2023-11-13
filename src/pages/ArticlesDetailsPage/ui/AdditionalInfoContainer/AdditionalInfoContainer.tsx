import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import Card from '@/shared/ui/redesigned/Card/Card';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { getArticleEditPath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

const AdditionalInfoContainer = () => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        navigate(getArticleEditPath(article?.id ?? ''));
    }, [article?.id, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card padding={'24'} border={'round'} className={cls.card} max>
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={Number(article.views)}
                onEdit={onEditArticle}></ArticleAdditionalInfo>
        </Card>
    );
};

export default memo(AdditionalInfoContainer);

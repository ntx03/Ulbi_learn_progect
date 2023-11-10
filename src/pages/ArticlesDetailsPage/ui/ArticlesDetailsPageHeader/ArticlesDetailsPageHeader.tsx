import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useTranslation } from 'react-i18next';

import { getArticleDetailsData, getArticleDetailsError } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleEditPath, getArticlesPath } from '@/shared/const/router';

export interface ArticlesDetailsPageHeaderProps {
    className?: string;
}

/**
 * Это компонент загаловка статьи, сожеджит кнопки назад, и редактировать (для автора статьи)
 */
const ArticlesDetailsPageHeader = ({ className }: ArticlesDetailsPageHeaderProps) => {
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const canEdit = useSelector(getCanEditArticle);

    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getArticlesPath());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getArticleEditPath(article?.id ?? ''));
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticlesDetailsPageHeader, {}, [className ?? ''])}>
            {!isLoading && !error && (
                <Button theme={ButtonTheme.OUTLINE_INVERT} onClick={onBackToList} className={cls.buttonBack}>
                    {t('Назад к списку')}
                </Button>
            )}
            {!isLoading && !error && canEdit && (
                <Button theme={ButtonTheme.OUTLINE_INVERT} onClick={onEditArticle} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};

export default memo(ArticlesDetailsPageHeader);

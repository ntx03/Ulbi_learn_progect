import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemDeprecated.module.scss';
import { memo } from 'react';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import Icon from '@/shared/ui/deprecated/Icon/Icon';
import eye from '@/shared/assets/icons/eye.svg';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { type ArticleTextBlock } from '../../../model/types/articles';
import Card from '@/shared/ui/deprecated/Card/Card';
import Avatar from '@/shared/ui/deprecated/Avatar/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import Skeleton from '@/shared/ui/deprecated/Skeleton/Skeleton';
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import AppLink from '@/shared/ui/deprecated/AppLink/ui/AppLink/AppLink';
import { getArticlesDetailsPath } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { type ArticleListItemProps } from '../ArticleListItem';

const ArticleListItemDeprecated = ({ className, article, view, target }: ArticleListItemProps) => {
    const [isHover, bindHover] = useHover();
    const { t } = useTranslation('article');

    const types: JSX.Element = <Text text={article.type.join(',')} theme={TextTheme.PRIMARY} className={cls.types} />;
    const views: JSX.Element = (
        <>
            <Text text={String(article.views)} theme={TextTheme.PRIMARY} className={cls.views} />
            <Icon Svg={eye} className={cls.svg} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.block.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItemDeprecated, {}, [className ?? '', cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} theme={TextTheme.PRIMARY} />
                        <Text text={article.createdAt} className={cls.date} theme={TextTheme.PRIMARY} />
                    </div>
                    <Text text={article.title} className={cls.title} theme={TextTheme.PRIMARY} />
                    {types}
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={'100%'} height={250} />}
                        errorFallback={<Text text={t('Ошибка при загрузке...') ?? ''} />}
                    />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink to={getArticlesDetailsPath(String(Number(article.id)))}>
                            <Button theme={ButtonTheme.OUTLINE_INVERT}>{t('Читать далее...')}</Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        <AppLink
            to={getArticlesDetailsPath(article.id)}
            {...bindHover}
            className={classNames(cls.ArticleListItemDeprecated, {}, [className ?? '', cls[view]])}
            target={target}>
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={200} height={200} />}
                        errorFallback={<Text text={t('Ошибка при загрузке...') ?? ''} />}
                    />
                    <Text text={article.createdAt} className={cls.date} theme={TextTheme.PRIMARY_INVERT}></Text>
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} theme={TextTheme.PRIMARY} className={cls.title} />
            </Card>
        </AppLink>
    );
};

export default memo(ArticleListItemDeprecated);

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { memo } from 'react';
import { type ArticleListItemProps } from '../ArticleListItem';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import eye from '@/shared/assets/icons/redisigned/eye.svg';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { type ArticleTextBlock } from '../../../model/types/articles';
import Card from '@/shared/ui/redesigned/Card/Card';
import Avatar from '@/shared/ui/redesigned/Avatar/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import Skeleton from '@/shared/ui/redesigned/Skeleton/Skeleton';
import AppLink from '@/shared/ui/redesigned/AppLink/ui/AppLink/AppLink';
import { getArticlesDetailsPath } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';

/**
 * Превью отображаемой статьи  с общими данными о ней
 * @param article - содержание статьи
 * @param view - вид статьи (bid или small)
 * @param target - как открываем статью (target = '_blank')
 */
const ArticleListItemRedesigned = ({ className, article, view, target }: ArticleListItemProps) => {
    const [isHover, bindHover] = useHover();
    const { t } = useTranslation('article');

    const types: JSX.Element = (
        <Text text={article.type.join(',')} variant={'primary'} className={cls.types} size={'m'} />
    );
    const views: JSX.Element = (
        <HStack gap={'8'}>
            <Icon Svg={eye} />
            <Text text={String(article.views)} variant={'primary'} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.block.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <Card
                max
                padding={'24'}
                className={classNames(cls.ArticleListItemRedesigned, {}, [className ?? '', cls[view]])}>
                <VStack max gap={'16'}>
                    <HStack gap={'8'} max justify={'between'}>
                        <HStack>
                            <Avatar size={32} src={article.user.avatar} />
                            <Text bold text={article.user.username} />
                            <Text text={article.createdAt} />
                        </HStack>
                        {types}
                    </HStack>
                    <Text title={article.title} className={cls.title} size={'l'} />
                    <Text text={article.subtitle} size={'l'} />
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={'100%'} height={250} />}
                        errorFallback={<Text text={t('Ошибка при загрузке...') ?? ''} />}
                    />
                    {textBlock.paragraphs && (
                        <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />
                    )}
                    <HStack max justify={'between'}>
                        <AppLink to={getArticlesDetailsPath(String(Number(article.id)))}>
                            <Button variant={'outline'}>{t('Читать далее...')}</Button>
                        </AppLink>

                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        <AppLink
            to={getArticlesDetailsPath(article.id)}
            {...bindHover}
            className={classNames(cls.ArticleListItemRedesigned, {}, [className ?? '', cls[view]])}
            target={target}>
            <Card border={'round'} padding={'0'} className={cls.cardWrapper}>
                <VStack>
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={200} height={200} />}
                        errorFallback={<Text text={t('Ошибка при загрузке...') ?? ''} />}
                    />
                    <VStack>
                        <Text text={article.subtitle} size={'l'} className={cls.subtitle} />
                        <HStack justify={'between'} max className={cls.articleInfo}>
                            <Text text={article.createdAt} size={'m'}></Text>
                            <HStack>{views}</HStack>
                        </HStack>
                        <HStack className={cls.userInfo}>
                            <Avatar size={32} src={article.user?.avatar} />
                            <Text bold text={article.user?.username} size={'m'} />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
};

export default memo(ArticleListItemRedesigned);

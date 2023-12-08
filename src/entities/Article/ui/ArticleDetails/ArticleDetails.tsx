import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import DynamicModuleLoader, { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Text as TextDerpecated, TextAlign, TextSize, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { useTranslation } from 'react-i18next';
import SkeletonDeprecated from '@/shared/ui/deprecated/Skeleton/Skeleton';
import AvatarDeprecated from '@/shared/ui/deprecated/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import IconDeprecated from '@/shared/ui/deprecated/Icon/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { renderBlock } from './renderBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Avatar from '@/shared/ui/redesigned/Avatar/Avatar';
import AppImage from '@/shared/ui/redesigned/AppImage/AppImage';
import Skeleton from '@/shared/ui/redesigned/Skeleton/Skeleton';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

export interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <VStack>
                <HStack>
                    <Avatar src={article?.user.avatar} size={32}></Avatar>
                    <Text text={article?.user.username} bold size={'m'} />
                    <Text text={article?.createdAt} size={'m'} />
                </HStack>

                <Text title={article?.title} variant={'primary'} size={'l'} bold />
                <Text title={article?.subtitle} variant={'primary'} size={'m'} />
                <AppImage
                    className={cls.articleImageRedesigned}
                    fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
                    src={article?.img}
                />
            </VStack>
            {article?.block.map(renderBlock)}
        </>
    );
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <div className={cls.avatarWrapper}>
                <AvatarDeprecated size={200} src={article?.img} className={cls.avatar} />
            </div>
            <TextDerpecated
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                theme={TextTheme.PRIMARY}
                size={TextSize.XL}
            />
            <div className={cls.articleInfo}>
                <IconDeprecated Svg={EyeIcon} className={cls.icon} />
                <TextDerpecated
                    className={cls.text}
                    text={String(article?.views)}
                    theme={TextTheme.PRIMARY}
                    size={TextSize.M}
                />
            </div>
            <div className={cls.articleInfo}>
                <IconDeprecated Svg={CalendarIcon} className={cls.icon} />
                <TextDerpecated className={cls.text} text={article?.createdAt} theme={TextTheme.PRIMARY} />
            </div>
            {article?.block.map(renderBlock)}
        </>
    );
};
/**
 * Компонент самой статьи состоящей из разных блоков (текст, код, изображение)
 * @param id - статьи
 */
export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    // вызываем хук который проверяет в режиме сторибук находится проект или нет __PROJECT__ !== 'storybook'
    useInitialEffect(() => dispatch(fetchArticleById(id)));

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    let content;

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated className={cls.avatar} width={200} height={200} border={'50%'} />
                <SkeletonDeprecated className={cls.title} width={300} height={32} />
                <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
                <SkeletonDeprecated className={cls.skeleton} width={'100%'} height={200} />
                <SkeletonDeprecated className={cls.skeleton} width={'100%'} height={200} />
            </>
        );
    } else if (error) {
        content = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text text={t('Произошла ошибка при загрузке статьи')} variant={'error'} align={'center'} />}
                off={
                    <TextDerpecated
                        text={t('Произошла ошибка при загрузке статьи')}
                        theme={TextTheme.ERROR}
                        align={TextAlign.CENTER}
                    />
                }
            />
        );
    } else {
        content = <ToggleFeatures feature={'isAppRedesigned'} on={<Redesigned />} off={<Deprecated />} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className ?? ''])}>{content}</div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);

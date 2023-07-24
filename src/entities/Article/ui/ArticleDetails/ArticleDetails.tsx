import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import DynamicModuleLoader, {type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {memo, useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Avatar from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import Icon from "shared/ui/Icon/Icon";
import {type ArticleBlock, ArticleBlockType} from "entities/Article/model/types/articles";
import ArticleCodeBlockComponent from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import ArticleImageBlockComponent from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import ArticleTextBlockComponent from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import Page from "shared/ui/Page/Page";

export interface ArticleDetailsProps {
    className?: string;
    id: string
}
const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
}

const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
    const {t} = useTranslation('article')
    const dispatch = useAppDispatch();

    // вызываем хук который проверяет в режиме сторибук находится проект или нет __PROJECT__ !== 'storybook'
    useInitialEffect(() => dispatch(fetchArticleById(id)))


    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock)=> {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id}/>;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id}/>;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id}/>;
        default: return null;
        }
    }, [])

    let content;

    if (isLoading) {
        content =(
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={"50%"}/>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={"100%"} height={200} />
                <Skeleton className={cls.skeleton} width={"100%"} height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text text={t('Произошла ошибка при загрузке статьи')} theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar}/>
                </div>
                <Text className={cls.title} title={article?.title} text={article?.subtitle} theme={TextTheme.PRIMARY} size={TextSize.L}/>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text className={cls.text}  text={String(article?.views)} theme={TextTheme.PRIMARY} size={TextSize.M}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>

                    <Text  className={cls.text} text={article?.createdAt} theme={TextTheme.PRIMARY}/>
                </div>
                {article?.block.map(renderBlock)}
            </>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className ?? ''])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
};

export default memo(ArticleDetails);
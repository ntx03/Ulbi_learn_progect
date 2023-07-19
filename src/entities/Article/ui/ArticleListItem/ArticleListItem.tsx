import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss';
import {memo, useCallback} from 'react';
import {type Article, ArticleBlockType, type ArticleTextBlock, ArticleView} from "../../model/types/articles";
import {Text, TextTheme} from 'shared/ui/Text/Text'
import Icon from "shared/ui/Icon/Icon";
import eye from '../../../../shared/assets/icons/eye.svg';
import Card from "shared/ui/Card/Card";
import {useHover} from "shared/lib/hooks/useHover/useHover";
import Avatar from "shared/ui/Avatar/Avatar";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import ArticleTextBlockComponent from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

const ArticleListItem = ({className, article, view}: ArticleListItemProps) => {

    const [isHover, bindHover] = useHover();
    console.log(isHover);
    const {t} = useTranslation('article');
    const navigate = useNavigate();

    const types: JSX.Element = <Text text={article.type.join(',')} theme={TextTheme.PRIMARY} className={cls.types}/>;
    const views: JSX.Element = (
        <>
            <Text text={String(article.views)} theme={TextTheme.PRIMARY} className={cls.views}/>
            <Icon Svg={eye} className={cls.svg}/>
        </>
    )

    const onOpenArticle = useCallback(()=> {
        navigate(`${RoutePath.article_details}${String(Number(article.id) + 1)}`)
    }, [article.id, navigate])

    if (view === ArticleView.BIG) {
        const textBlock = article.block.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className ?? '', cls[view]])}>
                <Card  >
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text text={article.user.username} className={cls.username} theme={TextTheme.PRIMARY}/>
                        <Text text={article.createdAt} className={cls.date} theme={TextTheme.PRIMARY}/>
                    </div>
                    <Text text={article.title} className={cls.title} theme={TextTheme.PRIMARY}/>
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE_INVERT} onClick={onOpenArticle}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className ?? '', cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    <Text text={article.createdAt} className={cls.date} theme={TextTheme.PRIMARY_INVERT}></Text>
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} theme={TextTheme.PRIMARY} className={cls.title}/>
            </Card>
        </div>
    )
};

export default memo(ArticleListItem);
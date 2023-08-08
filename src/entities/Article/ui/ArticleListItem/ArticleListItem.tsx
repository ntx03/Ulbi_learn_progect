import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss';
import {type HTMLAttributeAnchorTarget, memo} from 'react';
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

import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AppLink from "shared/ui/AppLink/ui/AppLink/AppLink";

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem = ({className, article, view, target}: ArticleListItemProps) => {

    // для пробы isHover
    const [isHover, bindHover] = useHover();
    const {t} = useTranslation('article');

    const types: JSX.Element = <Text text={article.type.join(',')} theme={TextTheme.PRIMARY} className={cls.types}/>;
    const views: JSX.Element = (
        <>
            <Text text={String(article.views)} theme={TextTheme.PRIMARY} className={cls.views}/>
            <Icon Svg={eye} className={cls.svg}/>
        </>
    )

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
                        <AppLink to={`${RoutePath.article_details}${String(Number(article.id))}`}>
                            <Button theme={ButtonTheme.OUTLINE_INVERT} >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        <AppLink to={RoutePath.article_details + article.id} {...bindHover} className={classNames(cls.ArticleListItem, {}, [className ?? '', cls[view]])} target={target}>
            <Card>
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
        </AppLink>
    )
};

export default memo(ArticleListItem);
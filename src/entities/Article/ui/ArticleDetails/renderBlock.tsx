import { type ArticleBlock } from '../../model/types/articles';
import { ArticleBlockType } from '../../model/consts/consts';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import cls from './ArticleDetails.module.scss';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id} />;
        default:
            return null;
    }
};

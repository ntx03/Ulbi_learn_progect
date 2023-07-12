import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import {memo} from "react";
import {type ArticleTextBlock} from "../../model/types/articles";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = ({className, block}: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className ?? ''])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block?.paragraphs && (
                block.paragraphs.map((paragraph, index) => {
                    return <Text text={paragraph} key={index} className={cls.paragraph} theme={TextTheme.PRIMARY}/>
                })

            )}
        </div>
    )
};

export default memo(ArticleTextBlockComponent);
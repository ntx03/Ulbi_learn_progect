import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleCodeBlock } from '../../model/types/articles';
import Code from '@/shared/ui/deprecated/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className ?? ''])}>
            <Code text={block.code}></Code>
        </div>
    );
};

export default memo(ArticleCodeBlockComponent);

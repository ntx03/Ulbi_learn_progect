import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleCodeBlock } from '../../model/types/articles';
import Code from '@/shared/ui/redesigned/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

/**
 * Блок с кодом в статье
 * @param block - часть статьи с кодом
 */
const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className ?? ''])}>
            <Code text={block.code}></Code>
        </div>
    );
};

export default memo(ArticleCodeBlockComponent);

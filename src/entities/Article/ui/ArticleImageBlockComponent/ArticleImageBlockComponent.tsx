import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleImageBlock } from '../../model/types/articles';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className ?? ''])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} theme={TextTheme.PRIMARY} />}
        </div>
    );
};

export default memo(ArticleImageBlockComponent);

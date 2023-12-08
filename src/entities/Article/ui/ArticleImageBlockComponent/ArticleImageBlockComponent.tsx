import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleImageBlock } from '../../model/types/articles';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

/**
 * блок статьи с текстом
 * @param block - блок статьи
 */
const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className ?? ''])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text text={block.title} align={'center'} variant={'primary'} />}
                    off={<TextDeprecated text={block.title} align={TextAlign.CENTER} theme={TextTheme.PRIMARY} />}
                />
            )}
        </div>
    );
};

export default memo(ArticleImageBlockComponent);

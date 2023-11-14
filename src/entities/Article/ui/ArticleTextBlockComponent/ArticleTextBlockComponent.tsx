import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleTextBlock } from '../../model/types/articles';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className ?? ''])}>
            {block.title && (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={block.title} className={cls.title} variant={'primary'} />}
                    off={<TextDeprecated title={block.title} className={cls.title} theme={TextTheme.PRIMARY} />}
                />
            )}
            {block?.paragraphs &&
                block.paragraphs.map((paragraph, index) => {
                    return (
                        <ToggleFeatures
                            key={index}
                            feature={'isAppRedesigned'}
                            on={<Text text={paragraph} key={index} className={cls.paragraph} variant={'primary'} />}
                            off={
                                <TextDeprecated
                                    text={paragraph}
                                    key={index}
                                    className={cls.paragraph}
                                    theme={TextTheme.PRIMARY}
                                />
                            }
                        />
                    );
                })}
        </div>
    );
};

export default memo(ArticleTextBlockComponent);

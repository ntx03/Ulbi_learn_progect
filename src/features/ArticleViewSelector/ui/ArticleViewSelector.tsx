import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { memo } from 'react';
import squareIconDeprecated from '../../../shared/assets/icons/fe_tiled.svg';
import lineIconDeprecated from '../../../shared/assets/icons/bi_list.svg';
import burgerIcon from '../../../shared/assets/icons/redisigned/burger.svg';
import plitkaIcon from '../../../shared/assets/icons/redisigned/plitka.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import IconDeprecated from '@/shared/ui/deprecated/Icon/Icon';
import { ArticleView } from '@/entities/Article';
import { toggleFeatures } from '@/shared/lib/features';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import Card from '@/shared/ui/redesigned/Card/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => plitkaIcon,
            off: () => lineIconDeprecated,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => burgerIcon,
            off: () => squareIconDeprecated,
        }),
    },
];

const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card border={'round'} className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className ?? ''])}>
                    <HStack gap={'8'}>
                        {viewTypes.map((viewType, index) => {
                            return (
                                <Icon
                                    clickable
                                    Svg={viewType.icon}
                                    className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                                    key={index}
                                    onClick={onClick(viewType.view)}
                                />
                            );
                        })}
                    </HStack>
                </Card>
            }
            off={
                <div className={classNames(cls.ArticleViewSelector, {}, [className ?? ''])}>
                    {viewTypes.map((viewType, index) => {
                        return (
                            <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} key={index}>
                                <IconDeprecated
                                    Svg={viewType.icon}
                                    width={30}
                                    height={30}
                                    className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                                />
                            </ButtonDeprecated>
                        );
                    })}
                </div>
            }
        />
    );
};

export default memo(ArticleViewSelector);

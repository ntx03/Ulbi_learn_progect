import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { memo } from 'react';
import squareIcon from '../../../shared/assets/icons/fe_tiled.svg';
import lineIcon from '../../../shared/assets/icons/bi_list.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';
import { ArticleView } from '@/entities/Article';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: lineIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: squareIcon,
    },
];

const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className ?? ''])}>
            {viewTypes.map((viewType, index) => {
                return (
                    <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} key={index}>
                        <Icon
                            Svg={viewType.icon}
                            className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                        />
                    </Button>
                );
            })}
        </div>
    );
};

export default memo(ArticleViewSelector);

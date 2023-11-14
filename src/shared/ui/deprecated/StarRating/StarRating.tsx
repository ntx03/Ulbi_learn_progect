import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { memo, useState } from 'react';
import StarIconDeprecated from '../../../assets/icons/star.svg';
import StarIcon from '../../../assets/icons/redisigned/star_fill.svg';
import IconDeprecated from '../Icon/Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import Icon from '../../redesigned/Icon/Icon';

export interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

const StarRating = ({ className, size = 30, selectedStars = 0, onSelect }: StarRatingProps) => {
    const [currentStarsCount, setСurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    // const [isHovered, setIsHovered] = useState(false);

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setСurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setСurrentStarsCount(0);
        }
    };
    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setСurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className ?? ''],
            )}>
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.normal]: currentStarsCount < starNumber,
                            [cls.selected]: isSelected,
                        },
                        [''],
                    ),
                    Svg: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => StarIcon,
                        off: () => StarIconDeprecated,
                    }),
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    // 'data-selected': currentStarsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Icon {...commonProps} clickable />}
                        off={<IconDeprecated {...commonProps} />}
                        key={starNumber}
                    />
                );
            })}
        </div>
    );
};

export default memo(StarRating);

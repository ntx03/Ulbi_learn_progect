import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss';
import React, {memo} from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    invertedColor?: boolean;
}

const Icon = ({className, Svg, invertedColor = false, ...otherProps}: IconProps) => {
    return (
        <Svg className={classNames(cls.Icon, {[cls.inverted]: invertedColor}, [className ?? ''])} {...otherProps}/>
    )
};

export default memo(Icon);
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss';
import React, {memo} from 'react';

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = ({className, Svg}: IconProps) => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className ?? ''])}/>
    )
};

export default memo(Icon);
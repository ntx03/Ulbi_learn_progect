import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import React, { memo } from 'react';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;
interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = ClickableIconProps | NonClickableIconProps;

const Icon = (props: IconProps) => {
    const { className, Svg, width = 32, clickable, height = 32, ...otherProps } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className ?? ''])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button type={'button'} className={cls.button} onClick={props.onClick}>
                {icon}
            </button>
        );
    }

    return icon;
};

export default memo(Icon);

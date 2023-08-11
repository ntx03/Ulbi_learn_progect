import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  PRIMARY_INVERT = "primary-invert",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
    S = "size_s",
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',

}


export const Text = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY_INVERT,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    return (

        <div
            className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

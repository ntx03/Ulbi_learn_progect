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

export const Text = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY_INVERT,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) => {
    return (
        <div
            className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

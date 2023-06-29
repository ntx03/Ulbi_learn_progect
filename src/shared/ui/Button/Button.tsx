import { type ButtonHTMLAttributes, memo } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = "",
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square ?? false,
        [cls.disabled]: disabled ?? false,
    };
    return (
        <button
            className={classNames(cls.Button, mods, [
                className ?? "",
                cls[theme ?? ""],
                cls[size ?? ""],
            ])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});

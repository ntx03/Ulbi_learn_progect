import { type ButtonHTMLAttributes, type FC } from "react";
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls.square]: square ?? false,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [
        className ?? "",
        cls[theme ?? ""],
        cls[size ?? ""],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

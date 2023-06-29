import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";
import { memo } from "react";

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => {
    return <div className={classNames(cls.Loader, {}, [className ?? ""])}></div>;
});

export default Loader;

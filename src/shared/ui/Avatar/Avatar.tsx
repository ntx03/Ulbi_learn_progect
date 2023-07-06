import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { type CSSProperties, useMemo } from "react";

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number | undefined;
}

const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size ?? 100,
            height: size ?? 100,
        };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
        />
    );
};

export default Avatar;

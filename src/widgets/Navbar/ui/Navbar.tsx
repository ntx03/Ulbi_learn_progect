import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ""])}>
      <div className={cls.links}></div>
    </div>
  );
}

export default Navbar;

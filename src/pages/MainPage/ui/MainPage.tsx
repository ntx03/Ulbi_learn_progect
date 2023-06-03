import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation("main");
    return (
        <div className={classNames(cls.MainPage, {}, [className ?? ""])}>
            {/* <BugButton/> */}
            <p className="title">{t("Главная страница")}</p>
        </div>
    );
};

export default MainPage;

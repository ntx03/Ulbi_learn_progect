import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import { Counter } from "entities/Counter";
import { memo } from "react";
import Page from "widgets/Page/Page";

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(({ className }: MainPageProps) => {
    const { t } = useTranslation("main");
    return (
        <Page className={classNames(cls.MainPage, {}, [className ?? ""])}>
            {/* <BugButton/> */}
            <p className="title">{t("Главная страница")}</p>
            <Counter />
        </Page>
    );
});

export default MainPage;

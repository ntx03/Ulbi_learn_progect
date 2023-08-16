import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import { Counter } from "entities/Counter";
import { memo } from "react";
import Page from "widgets/Page/Page";
import {VStack} from "shared/ui/Stack";

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(({ className }: MainPageProps) => {
    const { t } = useTranslation("main");
    return (
        <Page className={classNames(cls.MainPage, {}, [className ?? ""])}>
            {/* <BugButton/> */}
            <VStack max>
                <p className="title">{t("Главная страница")}</p>
                <Counter />
            </VStack>
        </Page>
    );
});

export default MainPage;

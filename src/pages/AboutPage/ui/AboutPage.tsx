import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import Page from "widgets/Page/Page";

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(({ className }: AboutPageProps) => {
    const { t } = useTranslation("about");
    return (
        <Page className={classNames(cls.AboutPage, {}, [className ?? ""])}>
            <p className="title">{t("О сайте")}</p>
        </Page>
    );
});

export default AboutPage;

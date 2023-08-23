import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import Page from "@/widgets/Page/Page";
import StarRating from "@/shared/ui/StarRating/StarRating";
import {RatingCard} from "@/entities/Rating";

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(({ className }: AboutPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.AboutPage, {}, [className ?? ""])}>
            <p className="title">{t("О сайте")}</p>
            <RatingCard title={t('Ваш отзыв') ?? ''} feedbackTitle={t('Оставьте отзыв о статье') ?? ''} hasFeedback={true}/>
        </Page>
    );
});

export default AboutPage;

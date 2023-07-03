import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input, InputTheme } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className ?? ""])}>
            <div className={cls.header}>
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t("Профиль пользователя")}
                ></Text>
                <Button className={cls.editBth} theme={ButtonTheme.OUTLINE_INVERT}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя") ?? ""}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия") ?? ""}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                />
            </div>
        </div>
    );
};

export default ProfileCard;

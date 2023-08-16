import { classNames } from "shared/lib/classNames/classNames";
import cls from "./EditableProfilePageHeader.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "entities/User";
import {getProfileData} from "features/editableProfileCard/selectors/getProfileData/getProfileData";
import {getProfileReadonly} from "features/editableProfileCard/selectors/getProfileReadonly/getProfileReadonly";
import {profileActions} from "features/editableProfileCard/slice/ProfileSlice";
import {updateProfileData} from "features/editableProfileCard/servises/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps {
  className?: string;
}

const EditableProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className ?? ""])}>
            <div className={cls.header}>
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t("Профиль пользователя")}
                ></Text>
                {canEdit && (
                    <div className={cls.btnWrapper}>
                        {readonly ? (
                            <Button
                                className={cls.editBth}
                                theme={ButtonTheme.OUTLINE_INVERT}
                                onClick={onEdit}
                            >
                                {t("Редактировать")}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    className={cls.editBth}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t("Отменить")}
                                </Button>
                                <Button
                                    className={cls.saveBth}
                                    theme={ButtonTheme.OUTLINE_INVERT}
                                    onClick={onSave}
                                >
                                    {t("Сохранить")}
                                </Button>
                            </>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default EditableProfilePageHeader;

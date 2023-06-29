import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import DynamicModuleLoader, {
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { profileReducer } from "entities/Profile/model/slice/ProfileSlice";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className ?? ""])}>
                {t("Profile page")}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

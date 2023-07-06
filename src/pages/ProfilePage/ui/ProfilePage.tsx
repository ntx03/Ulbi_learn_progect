import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import DynamicModuleLoader, {
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { profileReducer } from "entities/Profile/model/slice/ProfileSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData, ProfileCard } from "entities/Profile";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

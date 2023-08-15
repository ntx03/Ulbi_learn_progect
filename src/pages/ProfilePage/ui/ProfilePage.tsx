import { memo, } from "react";
import DynamicModuleLoader, {
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import {
    profileReducer,
} from "entities/Profile/model/slice/ProfileSlice";

import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import Page from "widgets/Page/Page";
import {EditableProfileCard} from "features/editableProfileCard";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <ProfilePageHeader />
                <EditableProfileCard/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

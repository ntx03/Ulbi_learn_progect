import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import DynamicModuleLoader, {
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import {
    profileActions,
    profileReducer,
} from "entities/Profile/model/slice/ProfileSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    ProfileCard,
} from "entities/Profile";
import { useSelector } from "react-redux";
import ProfilePageHeader from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { type Currency } from "entities/Currency";
import { type Country } from "entities/Country/model/types/country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Ошибка в заполнении страны"),
        [ValidateProfileError.INCORRECT_AGE]: t("Не корректный возраст"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Не корректные имя или фвмилия"
        ),
        [ValidateProfileError.NO_DATA]: t("Нет данных профиля"),
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback(
        (value?: string | undefined) => {
            dispatch(profileActions.updateProfile({ first: value }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ lastname: value }));
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ age: value }));
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ city: value }));
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );
    const onChangeUsername = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch]
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length &&
        validateErrors.map((err) => (
            <Text
                theme={TextTheme.ERROR}
                text={validateErrorTranslates[err]}
                key={err}
            />
        ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

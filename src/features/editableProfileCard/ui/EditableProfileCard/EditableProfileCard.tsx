import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/servises/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';
import DynamicModuleLoader, { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import EditableProfilePageHeader from '../EditableProfilePageHeader/EditableProfilePageHeader';

import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const reducers: ReducerList = {
        profile: profileReducer,
    };

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Ошибка в заполнении страны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Не корректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Не корректные имя или фвмилия'),
        [ValidateProfileError.NO_DATA]: t('Нет данных профиля'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback(
        (value?: string | undefined) => {
            dispatch(profileActions.updateProfile({ first: value }));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ lastname: value }));
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ age: value }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ city: value }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value: string | undefined) => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <EditableProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            data-testid='EditableProfileCard.Error'
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
            </div>
        </DynamicModuleLoader>
    );
});

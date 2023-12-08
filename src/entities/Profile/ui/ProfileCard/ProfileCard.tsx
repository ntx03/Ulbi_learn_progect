import { type Profile } from '../../../Profile/model/types/profile';
import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import ProfileCardDeprecated, {
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import ProfileCardRedesigned, {
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCountry: (country: Country) => void;
    onChangeCurrency: (currency: Currency) => void;
    readonly?: boolean;
}

/**
 * Карточка профиля пользователя
 * @param data - данные профиля
 * @param isLoading - состояние загрузки
 * @param error - состояние ошибки
 * @param onChangeLastName - функция которая заберет данные с input или select
 * @param onChangeFirstName - функция которая заберет данные с input или select
 * @param onChangeAge - функция которая заберет данные с input или select
 * @param onChangeCity - функция которая заберет данные с input или select
 * @param onChangeUsername - функция которая заберет данные с input или select
 * @param onChangeAvatar - функция которая заберет данные с input или select
 * @param onChangeCountry - функция которая заберет данные с input или select
 * @param onChangeCurrency - функция которая заберет данные с input или select
 * @param readonly - true or false
 */
const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    readonly,
}: ProfileCardProps) => {
    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedLoader />}
            />
        );
    }
    if (error) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<ProfileCardRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <ProfileCardRedesigned
                    data={data}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    readonly={readonly}
                />
            }
            off={
                <ProfileCardDeprecated
                    data={data}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    readonly={readonly}
                />
            }
        />
    );
};

export default ProfileCard;

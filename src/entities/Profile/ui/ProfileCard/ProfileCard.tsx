import { useTranslation } from 'react-i18next';
import { type Profile } from '../../../Profile/model/types/profile';
import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
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
    const { t } = useTranslation('profile');
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

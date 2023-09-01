import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { type Profile } from '../../../Profile/model/types/profile';
import Loader from '@/shared/ui/Loader/Loader';
import Avatar from '@/shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { type Country } from '@/entities/Country';

interface ProfileCardProps {
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
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className ?? ''])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} size={100} alt={t('ваш профиль') ?? ''} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    data-testid='ProfileCard.firstName'
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    data-testid={`ProfileCard.lastName`}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.country}
                    placeholder={t('Страна') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    // onChange={onChangeCountry}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { memo } from 'react';
import AvatarDeprecated from '@/shared/ui/deprecated/Avatar/Avatar';
import { Input as InputDeprecated, InputTheme } from '@/shared/ui/deprecated/Input/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';
import Loader from '@/shared/ui/deprecated/Loader/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text/Text';

export const ProfileCardDeprecatedLoader = () => {
    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
            <Loader />
        </div>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <Text
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </div>
    );
};
const ProfileCardDeprecated = ({
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

    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
    //             <LoaderDeprecated />
    //         </div>
    //     );
    // }
    // if (error) {
    //     return (
    //         <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
    //             <TextDeprecated
    //                 title={t('Произошла ошибка при загрузке профиля')}
    //                 text={t('Попробуйте обновить страницу')}
    //                 theme={TextTheme.ERROR}
    //                 align={TextAlign.CENTER}
    //             />
    //         </div>
    //     );
    // }
    return (
        <div
            className={classNames(cls.ProfileCardDeprecated, { [cls.editing]: !readonly }, [className ?? ''])}
            data-testid='ProfileCard'>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <AvatarDeprecated src={data?.avatar} size={100} alt={t('ваш профиль') ?? ''} />
                    </div>
                )}
                <InputDeprecated
                    value={data?.first}
                    placeholder={t('Ваше имя') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    data-testid='ProfileCard.firstName'
                />
                <InputDeprecated
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    data-testid={`ProfileCard.lastName`}
                />
                <InputDeprecated
                    value={data?.age}
                    placeholder={t('Ваш возраст') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <InputDeprecated
                    value={data?.city}
                    placeholder={t('Город') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <InputDeprecated
                    value={data?.country}
                    placeholder={t('Страна') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    // onChange={onChangeCountry}
                    readonly={readonly}
                />
                <InputDeprecated
                    value={data?.avatar}
                    placeholder={t('Аватар') ?? ''}
                    className={cls.input}
                    theme={InputTheme.INVERT}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <InputDeprecated
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

export default memo(ProfileCardDeprecated);

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ProfileCard/ProfileCard.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import Avatar from '@/shared/ui/redesigned/Avatar/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { InputTheme } from '@/shared/ui/deprecated/Input/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import Card from '@/shared/ui/redesigned/Card/Card';
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';
import Skeleton from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text/Text';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding={'24'} max>
            <VStack gap={'32'}>
                <HStack max justify={'center'}>
                    <Skeleton border={'50%'} width={128} height={128}></Skeleton>
                </HStack>
                <HStack gap={'32'} max>
                    <VStack gap={'16'} max>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                    </VStack>
                    <VStack gap={'16'} max>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                        <Skeleton width={'100%'} height={38}></Skeleton>
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <Text
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                variant={'error'}
                align={'center'}
            />
        </div>
    );
};

const ProfileCardRedesigned = ({
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
    return (
        <Card
            padding={'24'}
            className={classNames(cls.ProfileCardRedesigned, {}, [className ?? ''])}
            data-testid='ProfileCard'>
            <VStack>
                {data?.avatar && (
                    <HStack max justify={'center'} className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} size={128} alt={t('ваш профиль') ?? ''} />
                    </HStack>
                )}
            </VStack>

            <HStack gap={'24'} max align={'start'}>
                <VStack gap={'16'} max>
                    <Input
                        value={data?.first}
                        label={t('Ваше имя') ?? ''}
                        // className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeFirstName}
                        readonly={readonly}
                        data-testid='ProfileCard.firstName'
                    />
                    <Input
                        value={data?.lastname}
                        label={t('Ваше фамилия') ?? ''}
                        // className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeLastName}
                        readonly={readonly}
                        data-testid={`ProfileCard.lastName`}
                    />
                    <Input
                        value={data?.age}
                        label={t('Ваш возраст') ?? ''}
                        // className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeAge}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.city}
                        label={t('Город') ?? ''}
                        // className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />
                </VStack>
                <VStack gap={'16'} max>
                    <Input
                        value={data?.username}
                        label={t('Введите имя пользователя') ?? ''}
                        //   className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.avatar}
                        label={t('Аватар') ?? ''}
                        //   className={cls.input}
                        theme={InputTheme.INVERT}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />

                    <CurrencySelect
                        //  className={cls.input}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        //  className={cls.input}
                        //  className={cls.input}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </HStack>
        </Card>
    );
};

export default memo(ProfileCardRedesigned);

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfilePageHeader.module.scss';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/ProfileSlice';
import { updateProfileData } from '../../model/servises/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import Card from '@/shared/ui/redesigned/Card/Card';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

const EditableProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card padding={'16'} className={cls.headerRedesigned}>
                    <HStack max justify={'between'} className={classNames('', {}, [className ?? ''])}>
                        <Text variant={'primary'} title={t('Профиль пользователя')}></Text>
                        {canEdit && (
                            <div className={cls.btnWrapper}>
                                {readonly ? (
                                    <Button
                                        className={cls.editBth}
                                        variant={'outline'}
                                        onClick={onEdit}
                                        data-testid={`EditableProfilePageHeader.EditButton`}>
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack>
                                        <Button
                                            className={cls.editBth}
                                            variant={'outline'}
                                            onClick={onCancelEdit}
                                            data-testid={`EditableProfilePageHeader.CancelButton`}
                                            color={'error'}>
                                            {t('Отменить')}
                                        </Button>
                                        <Button
                                            className={cls.saveBth}
                                            variant={'outline'}
                                            onClick={onSave}
                                            color={'success'}
                                            data-testid={`EditableProfilePageHeader.SaveButton`}>
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <div className={classNames(cls.ProfilePageHeader, {}, [className ?? ''])}>
                    <div className={cls.header}>
                        <TextDeprecated theme={TextTheme.PRIMARY} title={t('Профиль пользователя')}></TextDeprecated>
                        {canEdit && (
                            <div className={cls.btnWrapper}>
                                {readonly ? (
                                    <ButtonDeprecated
                                        className={cls.editBth}
                                        theme={ButtonTheme.OUTLINE_INVERT}
                                        onClick={onEdit}
                                        data-testid={`EditableProfilePageHeader.EditButton`}>
                                        {t('Редактировать')}
                                    </ButtonDeprecated>
                                ) : (
                                    <>
                                        <ButtonDeprecated
                                            className={cls.editBth}
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid={`EditableProfilePageHeader.CancelButton`}>
                                            {t('Отменить')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            className={cls.saveBth}
                                            theme={ButtonTheme.OUTLINE_INVERT}
                                            onClick={onSave}
                                            data-testid={`EditableProfilePageHeader.SaveButton`}>
                                            {t('Сохранить')}
                                        </ButtonDeprecated>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            }
        />
    );
};

export default EditableProfilePageHeader;

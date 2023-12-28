import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import InputDeprecated from '@/shared/ui/deprecated/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/servises/loginByUsername/loginByUsername';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/gitLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import DynamicModuleLoader, { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import Input from '@/shared/ui/redesigned/Input/Input';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
/**
 * Форма модалки для авторизации
 * @param  onSuccess - функция которая будет работать после успешной авторизации(в данном случае в пропсе закрываем модалку)
 */
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('translation');

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();
    // получаем username из инпута
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    // Получаем пароль с инпута
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    // отправляем данные для авторизации
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [forceUpdate, onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <VStack gap={'16'} className={classNames(cls.LoginForm, {}, [className ?? ''])}>
                        <Text title={t('Форма авторизации') ?? ''} align={'center'} />
                        {error && <Text text={error} variant={'error'} />}
                        <Input
                            autofocus={true}
                            type='text'
                            className={cls.inputRedesigned}
                            placeholder={t('Имя пользователя логин') ?? ''}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type='text'
                            className={cls.inputRedesigned}
                            placeholder={t('Введите пароль') ?? ''}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            className={cls.loginBtnRedesigned}
                            variant={'outline'}
                            onClick={onLoginClick}
                            disabled={isLoading}>
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
                        <TextDeprecated title={t('Форма авторизации') ?? ''} />
                        {error && <TextDeprecated text={error} theme={TextTheme.ERROR} />}
                        <InputDeprecated
                            autofocus={true}
                            type='text'
                            className={cls.input}
                            placeholder={t('Имя пользователя логин') ?? ''}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type='text'
                            className={cls.input}
                            placeholder={t('Введите пароль') ?? ''}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}>
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;

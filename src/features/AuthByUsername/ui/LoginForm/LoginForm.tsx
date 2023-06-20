import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/servises/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation("translation");

    const dispatch = useDispatch();

    const { username, password, isLoading, error } = useSelector(getLoginState);

    // получаем username из инпута
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    // Получаем пароль с инпута
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    // отправляем данные для авторизации
    const onLoginClick = useCallback((): void => {
        dispatch(
            loginByUsername({
                username,
                password,
            })
        );
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ""])}>
            <Text title={t("Форма авторизации") ?? ""} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autofocus={true}
                type="text"
                className={cls.input}
                placeholder={t("Имя пользователя логин") ?? ""}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("Введите пароль") ?? ""}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;

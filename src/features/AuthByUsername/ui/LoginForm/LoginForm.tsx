import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/servises/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/gitLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import DynamicModuleLoader, {
    type ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation("translation");

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            })
        );
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;

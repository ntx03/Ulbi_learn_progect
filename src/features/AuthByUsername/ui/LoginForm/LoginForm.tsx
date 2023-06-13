import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation("translation");

    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    // const onLoginClick = useCallback((value: string): void => {}, []);
    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ""])}>
            <Input
                autofocus={true}
                type="text"
                className={cls.input}
                placeholder={t("Имя пользователя логин") ?? ""}
                onChange={onChangeUsername}
                value={loginForm?.username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("Введите пароль") ?? ""}
                onChange={onChangePassword}
                value={loginForm?.password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                // onClick={onLoginClick}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;

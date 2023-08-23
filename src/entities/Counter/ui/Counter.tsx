import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Counter.module.scss";

import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {memo} from "react";

interface CounterProps {
  className?: string;
}

export const Counter = memo(({ className }: CounterProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div className={classNames(cls.Counter, {}, [className ?? ""])}>
            <h1 data-testid="value-title" style={{margin: "17px 20px auto 0"}}>{counterValue}</h1>
            <div style={{display: "flex", gap: "10px"}}>
                <Button onClick={increment} data-testid="increment-btn" theme={ButtonTheme.OUTLINE_INVERT}>
                    {t("Увеличить")}
                </Button>
                <Button onClick={decrement} data-testid="decrement-btn" theme={ButtonTheme.OUTLINE_INVERT}>
                    {t("Уменьшить")}
                </Button>
            </div>
        </div>
    );
});

export default Counter;

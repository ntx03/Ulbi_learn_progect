import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Counter.module.scss";

import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
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
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t("Увеличить")}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t("Уменьшить")}
            </Button>
        </div>
    );
};

export default Counter;
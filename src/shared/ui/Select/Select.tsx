import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { type ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  value?: string;
  readonly?: boolean;
}

const Select = memo(
    ({ className, label, options, onChange, value, readonly }: SelectProps) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        const optionList = useMemo(() => {
            const result = options?.map((option) => {
                return (
                    <option
                        className={cls.option}
                        value={option.value}
                        key={option.value}
                    >
                        {option.content}
                    </option>
                );
            });
            return result;
        }, [options]);

        return (
            <div
                className={classNames(
                    cls.Wrapper,
                    { [cls.readonly]: readonly ?? false },
                    [className ?? ""]
                )}
            >
                {label && <span className={cls.lable}>{label + ">"}</span>}
                <select
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionList}
                </select>
            </div>
        );
    }
);

export default Select;

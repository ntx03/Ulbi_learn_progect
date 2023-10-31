import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

export interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: Array<SelectOption<T>>;
    onChange?: (value: T) => void;
    value?: T;
    readonly?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Select = <T extends string>({ className, label, options, onChange, value, readonly }: SelectProps<T>) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => {
        const result = options?.map((option) => {
            return (
                <option className={cls.option} value={option.value} key={option.value}>
                    {option.content}
                </option>
            );
        });
        return result;
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, { [cls.readonly]: readonly ?? false }, [className ?? ''])}>
            {label && <span className={cls.lable}>{label + '>'}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionList}
            </select>
        </div>
    );
};

export default Select;

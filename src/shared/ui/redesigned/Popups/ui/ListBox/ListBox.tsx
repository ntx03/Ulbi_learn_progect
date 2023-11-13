import { Fragment, type ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import pCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { type DropdownDirection } from '@/shared/types/ui';
import Icon from '../../../Icon/Icon';
import arrowIcon from '../../../../../assets/icons/redisigned/arrow_down.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
interface ListBoxProps<T extends string> {
    items?: Array<ListBoxItem<T>>;
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

/**
 * Кнопка с выпадающим списком (заредизайненная)
 * @param items - элементы выпадающего списка
 * @param value - значение элементов выпадающего списка
 * @param defaultValue - значение по умолчанию
 * @param onChange - функция отрабатывает при нажатии на список
 * @param readonly - флаг при true делает компонент только для чтения
 * @param direction - направление выпадения списка (по умолчаню 'bottomLeft')
 * @param label - заголовок компонента
 */
export default function ListBox<T extends string>({
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottomLeft',
    label,
}: ListBoxProps<T>) {
    const optionsClasses = [pCls[direction], pCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <>
            {label && <span className={classNames(cls.label, { [cls.readonly]: readonly ?? false }, [])}>{label}</span>}
            <HListbox
                as={'div'}
                className={classNames(cls.ListBox, { [cls.readonly]: readonly ?? false }, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}>
                <HListbox.Button className={cls.trigger}>
                    <Button
                        variant={'filled'}
                        className={classNames(cls.button, { [cls.readonly]: readonly ?? false }, [])}
                        addonRight={
                            <Icon
                                className={classNames(cls.icon, { [cls.readonly]: readonly ?? false }, [])}
                                Svg={arrowIcon}
                            />
                        }>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item: any) => (
                        <HListbox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                            [cls.selected]: item.selected,
                                        },
                                        [],
                                    )}>
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </>
    );
}

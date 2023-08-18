import {Fragment, type ReactNode, useState} from 'react';
import {Listbox as HListbox} from '@headlessui/react';
import cls from './ListBox.module.scss';
import pCls from '../../styles/popup.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from '../../../Button/Button';
import {type DropdownDirection} from "shared/types/ui";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export default function ListBox({items, className, value, defaultValue, onChange, readonly, direction = 'bottomLeft', label}: ListBoxProps) {

    const [selectedPerson, setSelectedPerson] = useState(value)
    const optionsClasses = [pCls[direction]];

    return (
        <>
            {label && <span className={classNames(cls.label, {[cls.readonly]: readonly ?? false}, [])}>{label + ">"}</span>}
            <HListbox as={'div'} className={classNames(cls.ListBox, {[cls.readonly]: readonly ?? false}, [className])} value={value} onChange={onChange} disabled={readonly}>
                <HListbox.Button className={cls.trigger}>
                    <Button theme={ButtonTheme.OUTLINE_INVERT} className={cls.button}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item: any) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({active, selected}) => (
                                <li className={classNames(cls.item, {[cls.active]: active, [cls.disabled]: item.disabled}, [])}>
                                    {/* {selected && '!!!'} */}
                                    {item.content}
                                </li>
                            )}

                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </>
    )
}

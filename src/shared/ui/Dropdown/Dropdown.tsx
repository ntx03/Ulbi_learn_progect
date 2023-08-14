import {Menu} from '@headlessui/react';
import cls from './Dropdown.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Fragment, type ReactNode} from "react";
import AppLink from '../AppLink/ui/AppLink/AppLink';

export interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

export interface DropdownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
}

export default function Dropdown(props: DropdownProps) {
    const {className, trigger, items} = props;
    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className ?? ''])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={cls.menu}>

                {items.map(item => {
                    const content = ({active}: { active: boolean }) =>
                        (
                            <button onClick={item.onClick} className={classNames(cls.item, {[cls.active]: active})}
                                disabled={item.disabled}>{item.content}</button>
                        )
                    if (item.href) {
                        return( <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={item.href}>
                            {content}
                        </Menu.Item>)
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={Math.random()*10}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
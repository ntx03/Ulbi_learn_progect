import {Menu} from '@headlessui/react';
import cls from './Dropdown.module.scss';
import pcls from '../../styles/popup.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import { type ReactNode} from "react";
import {Link} from "react-router-dom";

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
        <Menu as={'div'} className={classNames(pcls.Popup, {}, [className ?? ''])}>
            <Menu.Button className={pcls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items as={"div"} className={cls.menu}>
                {items.map((item, index) => {
                    const content = ({active}: { active: boolean }) =>
                        (
                            <button className={classNames(cls.item, {[cls.active]: active})}
                                key={Math.random()*10}>{item.content}</button>
                        )

                    const contentButton = ({active}: { active: boolean }) =>
                        (
                            <button onClick={item.onClick} className={classNames(cls.item, {[cls.active]: active})}
                            >{item.content}</button>
                        )

                    if (item.onClick){
                        return (
                            <Menu.Item  key={Math.random()*10}>
                                {contentButton}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Link} to={item.href ?? "/"}  key={Math.random()*10} onClick={()=> { console.log(1111); }}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
import { Popover as HPopover } from '@headlessui/react';
import cls from './Popover.module.scss';
import pCls from '../../styles/popup.module.scss';
import type { DropdownDirection } from '@/shared/types/ui';
import type { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
export interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger?: ReactNode;
    children: ReactNode;
}

export default function Popover({ className, trigger, direction = 'bottomRight', children }: PopoverProps) {
    const menuClasses = pCls[direction];
    return (
        <HPopover className={classNames(cls.Popover, {}, [className ?? '', pCls.Popup])}>
            <HPopover.Button as={'div'} className={pCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [className ?? '', pCls.Popup, menuClasses, pCls.menu])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}

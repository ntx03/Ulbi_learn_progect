import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss';
import React, {memo, type ReactNode, useCallback} from 'react';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import CopyIcon from '../../assets/icons/copy.svg'
import SVG from "*.svg";
import Icon from "shared/ui/Icon/Icon";

export  interface CodeProps {
    className?: string;
    text:  string;
}

const Code = ({className, text}: CodeProps) => {
    const onCopy = useCallback(()=> {
        navigator.clipboard.writeText(text);
    }, [text])
    return (
        <pre className={classNames(cls.Code, {}, [className ?? ''])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}><Icon Svg={CopyIcon} className={cls.icon}/></Button>

            <code>
                {text}
            </code>
        </pre>
    )
};

export default memo(Code);
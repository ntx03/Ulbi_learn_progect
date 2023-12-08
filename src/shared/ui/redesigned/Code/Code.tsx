import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import React, { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import CopyIcon from '../../../assets/icons/copy.svg';
import CopyIconRedesigned from '../../../../shared/assets/icons/redisigned/copy_text.svg';
import IconDeprecated from '../../deprecated/Icon/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import Icon from '../Icon/Icon';

export interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Компонент для отображения блока с кодом в статье
 * @param text - код для отображения
 */
const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className ?? ''])}>
                    <Icon Svg={CopyIconRedesigned} clickable onClick={onCopy} className={cls.copyBtn} />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className ?? ''])}>
                    <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                        <IconDeprecated Svg={CopyIcon} className={cls.icon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
        />
    );
};

export default memo(Code);

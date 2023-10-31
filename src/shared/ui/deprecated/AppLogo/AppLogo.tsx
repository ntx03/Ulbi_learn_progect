import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { memo } from 'react';
import { HStack } from '../Stack';
import AppSvg from '../../../assets/icons/avatarRedesigned.svg';
export interface AppLogoProps {
    className?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const AppLogo = ({ className }: AppLogoProps) => {
    return (
        <HStack max justify={'center'} className={classNames(cls.appLogoWrapper, {}, [className ?? ''])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
};

export default memo(AppLogo);

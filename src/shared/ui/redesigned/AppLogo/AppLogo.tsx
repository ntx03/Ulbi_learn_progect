import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { memo } from 'react';
import { HStack } from '../../deprecated/Stack';
import AppSvg from '../../../assets/icons/avatarRedesigned.svg';
export interface AppLogoProps {
    className?: string;
    size?: number;
}
const AppLogo = ({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack max justify={'center'} className={classNames(cls.appLogoWrapper, {}, [className ?? ''])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg width={size} height={size} color='black' className={cls.appLogo} />
        </HStack>
    );
};

export default memo(AppLogo);

import { memo, useState } from 'react';
import ListBox from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';
import { getFeaturesFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Skeleton from '@/shared/ui/redesigned/Skeleton/Skeleton';

export interface uiDesignSwitcherProps {
    className?: string;
}

const UiDesignSwitcher = ({ className }: uiDesignSwitcherProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAppRedesigned = getFeaturesFlag('isAppRedesigned');
    const [isLoading, setIsLoading] = useState(false);
    const items = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData?.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack>
            <Text text={t('Вариант интерфейса') ?? ''} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox value={isAppRedesigned ? 'new' : 'old'} items={items} onChange={onChange} />
            )}
        </HStack>
    );
};

export default memo(UiDesignSwitcher);

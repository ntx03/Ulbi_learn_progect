import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

export interface SettingsPageProps {
    className?: string;
}

const SettingsPage = ({ className }: SettingsPageProps) => {
    const { t } = useTranslation('');
    return (
        <Page className={classNames('', {}, [className ?? ''])}>
            <VStack gap={'16'}>
                <Text title={t('Настройки пользователя')} size={'l'} align={'center'} />
            </VStack>
            <HStack>
                <UiDesignSwitcher />
            </HStack>
        </Page>
    );
};

export default memo(SettingsPage);

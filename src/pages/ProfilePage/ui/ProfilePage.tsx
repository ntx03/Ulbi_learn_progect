import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page>
                <Text title={t('Ошибка при загрузке профиля!')} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <Page data-testid={'ProfilePage'}>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;

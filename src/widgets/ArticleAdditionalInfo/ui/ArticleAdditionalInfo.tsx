import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { type User } from '@/entities/User';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned/Button/Button';

export interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

const ArticleAdditionalInfo = ({ className, author, views, createdAt, onEdit }: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation('article');

    return (
        <VStack gap={'32'} className={classNames('', {}, [className ?? ''])}>
            {/* <HStack> */}
            {/*    <Avatar src={author.avatar} size={32} /> */}
            {/*    <Text text={author.username} bold /> */}
            {/*    <Text text={createdAt} bold /> */}
            {/* </HStack> */}
            <Button onClick={onEdit}>{t('Редактировать статью')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
};

export default memo(ArticleAdditionalInfo);

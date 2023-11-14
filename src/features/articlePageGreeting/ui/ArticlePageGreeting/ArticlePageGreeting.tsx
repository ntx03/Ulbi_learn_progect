import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import Modal from '@/shared/ui/redesigned/Modal/Modal';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
interface ArticlePageGreetingProps {
    className?: string;
}

/**
 * Приветствие нового пользователя, если он зашел на страницу со статьями первый раз
 */
export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { t } = useTranslation('article');
    const [isOpen, setISOpen] = useState(false);
    const { isArticlesPageWasOpen } = useJsonSettings();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isArticlesPageWasOpen) {
            setISOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpen: true }));
        }
    }, [dispatch, isArticlesPageWasOpen]);

    const onClose = () => {
        setISOpen(false);
    };

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Text
                title={t('Добро пожаловать на страницу гостей')}
                text={t('Здесь вы можете просматривать статьи на различные темы')}></Text>
        </Modal>
    );
});

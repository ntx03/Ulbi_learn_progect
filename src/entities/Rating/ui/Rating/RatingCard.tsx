import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Rating.module.scss';
import { memo, useCallback, useState } from 'react';
import Card from '@/shared/ui/deprecated/Card/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import StarRating from '@/shared/ui/deprecated/StarRating/StarRating';
import Modal from '@/shared/ui/redesigned/Modal/Modal';
import { Input } from '@/shared/ui/deprecated/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number | undefined) => void;
    onAccept?: (starsCount: number | undefined, feedback?: string) => void;
    rate?: number;
}

/**
 * Карточка с выставлением или отображением рейтинга
 */
export const RatingCard = memo((props: RatingProps) => {
    const { className, onCancel, onAccept, feedbackTitle, hasFeedback, title, rate } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeetback] = useState('');

    const onSelectStars = useCallback(
        (selectStarsCount: number) => {
            setStarsCount(selectStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack max gap={'32'}>
            <Text title={feedbackTitle}></Text>
            <Input placeholder={t('ваш отзыв') ?? ''} onChange={setFeetback} />
            <HStack max gap={'16'} justify={'end'}>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );
    return (
        <Card className={classNames(cls.Rating, {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                <Text
                    title={starsCount ? t('Спасибо за оценку!') : title}
                    theme={TextTheme.PRIMARY}
                    size={TextSize.L}
                />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                {modalContent}
            </Modal>
        </Card>
    );
});

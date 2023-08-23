import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Rating.module.scss';
import {memo, useCallback, useState} from 'react';
import Card from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text, TextSize, TextTheme} from "@/shared/ui/Text/Text";
import StarRating from "@/shared/ui/StarRating/StarRating";
import Modal from "@/shared/ui/Modal/Modal";
import {Input} from "@/shared/ui/Input/Input";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?:(starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingProps) => {
    const { className, onCancel, onAccept, feedbackTitle, hasFeedback, title } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeetback] = useState('');

    const onSelectStars = useCallback((selectStarsCount: number) => {
        setStarsCount(selectStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectStarsCount);
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(()=> {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(()=> {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount])
    const modalContent = (
        <VStack max gap={'32'}>
            <Text title={feedbackTitle}></Text>
            <Input placeholder={t('ваш отзыв') ?? ''}/>
            <HStack max gap={'16'} justify={'end'}>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
                <Button onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
            </HStack>
        </VStack>
    )
    return (
        <Card className={classNames(cls.Rating, {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                <Text title={title} theme={TextTheme.PRIMARY} size={TextSize.L}/>
                <StarRating size={40} onSelect={onSelectStars}/>
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                {modalContent}
            </Modal>
        </Card>
    );
});
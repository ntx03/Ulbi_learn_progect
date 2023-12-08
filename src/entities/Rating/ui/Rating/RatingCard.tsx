import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Rating.module.scss';
import { memo, useCallback, useState } from 'react';
import CardDeprecated from '@/shared/ui/deprecated/Card/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import StarRating from '@/shared/ui/deprecated/StarRating/StarRating';
import Modal from '@/shared/ui/redesigned/Modal/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import Card from '@/shared/ui/redesigned/Card/Card';
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
 * @param title - заголовок карточки рейтинга после выбора количества звезд
 * @param feedbackTitle - заголовок модалки отзыва
 * @param hasFeedback? - открывать модальное окно для коментария оценки ( если нет, то модалка не будет открываться для сбора комментариев)
 * @param onCancel - функция когда пользователь не хочет писать комментарий и нажимает на кнопку закрыть
 * @param onAccept? - функция когда пользователь пишет комментарий к отзыву
 * @param rate - количество звезд
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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <VStack max gap={'32'}>
                    <Text title={feedbackTitle} size={'m'}></Text>
                    <Input placeholder={t('ваш отзыв') ?? ''} onChange={setFeetback} className={cls.inputRedesigned} />
                    <HStack max gap={'16'} justify={'center'}>
                        <Button onClick={cancelHandler}>{t('Закрыть')}</Button>
                        <Button onClick={acceptHandler}>{t('Отправить')}</Button>
                    </HStack>
                </VStack>
            }
            off={
                <VStack max gap={'32'}>
                    <TextDeprecated title={feedbackTitle}></TextDeprecated>
                    <InputDeprecated placeholder={t('ваш отзыв') ?? ''} onChange={setFeetback} />
                    <HStack max gap={'16'} justify={'end'}>
                        <ButtonDeprecated onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                            {t('Закрыть')}
                        </ButtonDeprecated>
                        <ButtonDeprecated onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                </VStack>
            }
        />
    );
    const cardContent = (
        <>
            <VStack align={'center'} gap={'8'} max>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={starsCount ? t('Спасибо за оценку!') : title} variant={'primary'} size={'l'} />}
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку!') : title}
                            theme={TextTheme.PRIMARY}
                            size={TextSize.L}
                        />
                    }
                />

                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                {modalContent}
            </Modal>
        </>
    );
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card max border={'round'} padding={'24'} className={classNames(cls.RatingRedesigned, {}, [className])}>
                    {cardContent}
                </Card>
            }
            off={<CardDeprecated className={classNames(cls.Rating, {}, [className])}>{cardContent}</CardDeprecated>}
        />
    );
});

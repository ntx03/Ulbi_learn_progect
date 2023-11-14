import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { Input as InputDeprecated, InputTheme } from '@/shared/ui/deprecated/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormDelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import DynamicModuleLoader, { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import Card from '@/shared/ui/redesigned/Card/Card';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import SendIcon from '@/shared/assets/icons/redisigned/send_arrow.svg';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};
/**
 * Форма для отправки комментария к статье
 * @param onSendComment
 * @constructor
 */
const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('article');
    const text = useSelector(getAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        onSendComment(text ?? '');
    }, [onCommentTextChange, text, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card padding={'24'} border={'round'} max className={cls.AddCommentFormRedesigned}>
                        <HStack
                            max
                            gap={'8'}
                            className={classNames('', {}, [className ?? ''])}
                            align={'center'}
                            justify={'between'}>
                            <Input
                                className={cls.input}
                                theme={InputTheme.INVERT}
                                value={text}
                                onChange={onCommentTextChange}
                                placeholder={t('Введите текст комментария') ?? ''}
                                max
                            />
                            {/* <Button variant={'outline'} onClick={onSendHandler}> */}
                            {/*    {t('Отправить')} */}
                            {/* </Button> */}
                            <Icon
                                width={'32px'}
                                height={'32px'}
                                Svg={SendIcon}
                                clickable
                                onClick={onSendHandler}
                                className={cls.IconButton}
                            />
                        </HStack>
                    </Card>
                }
                off={
                    <div className={classNames(cls.AddCommentForm, {}, [className ?? ''])}>
                        <InputDeprecated
                            className={cls.input}
                            theme={InputTheme.INVERT}
                            value={text}
                            onChange={onCommentTextChange}
                            placeholder={t('Введите текст комментария') ?? ''}
                        />
                        <ButtonDeprecated theme={ButtonTheme.OUTLINE_INVERT} onClick={onSendHandler}>
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);

import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss';
import {memo, useCallback} from 'react';
import {Input, InputTheme} from "shared/ui/Input/Input";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import { useSelector} from "react-redux";
import {
    getAddCommentFormText
} from "../../model/selectors/addCommentFormDelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slice/addCommentFormSlice";
import DynamicModuleLoader, {type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";


export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
}
const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {

    const {t} = useTranslation('article');
    const text = useSelector(getAddCommentFormText);

    const dispatch = useAppDispatch();


    const onCommentTextChange = useCallback((value: string)=>{
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(()=> {
        onCommentTextChange('');
        onSendComment(text ?? '');
    },[onCommentTextChange, text, onSendComment])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.AddCommentForm, {}, [className ?? ''])}>
                <Input className={cls.input} theme={InputTheme.INVERT} value={text} onChange={onCommentTextChange} placeholder={t('Введите текст комментария') ?? ''}/>
                <Button theme={ButtonTheme.OUTLINE_INVERT} onClick={onSendHandler}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>
    )
};

export default memo(AddCommentForm);
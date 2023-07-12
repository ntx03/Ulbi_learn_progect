import {classNames} from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss';
import {memo} from 'react';
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import CommentCard from "../CommentCard/CommentCard";
import {type Comment} from "../../model/types/comment";

export interface CommentListProps {
    className?: string;
    comments?: Comment[] ;
    isLoading?: boolean;
}

const CommentList = ({className, comments = [], isLoading}: CommentListProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className ?? ''])}>
            {comments.length > 0  ? comments.map((comment, index) =>   <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={index}/> ): <Text theme={TextTheme.PRIMARY} text={t('Комментарии отсутстсуют')}/>}
        </div>
    )
};

export default memo(CommentList);
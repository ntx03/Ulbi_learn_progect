import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss';
import {memo} from 'react';
import Card from "@/shared/ui/Card/Card";


import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import {ArticleView} from "@/entities/Article/model/consts/consts";

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeleton = ({className,  view}: ArticleListItemSkeletonProps) => {

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border={'50%'} width={30} height={30} className={cls.img}/>
                        <Skeleton  width={150} height={16}  className={cls.username}/>
                        <Skeleton  width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton  width={250} height={24} className={cls.title}/>

                    <div className={cls.footer}>
                        <Skeleton  width={'100%'} height={200} />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton  width={200} height={200} className={cls.img}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.date}/>
                    <Skeleton width={130} height={16}/>
                </div>
                {/* <Skeleton width={150} height={16}/> */}
            </Card>
        </div>
    )
};

export default memo(ArticleListItemSkeleton);
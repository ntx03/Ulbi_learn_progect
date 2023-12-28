import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import CardRedesigned from '@/shared/ui/redesigned/Card/Card';
import CardDeprecated from '@/shared/ui/deprecated/Card/Card';
import SkeletonDeprecated from '@/shared/ui/deprecated/Skeleton/Skeleton';
import SkeletonRedesigned from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

/**
 * Отображение скелетона при загрузке списка статей (для плитки и списка)
 * @param view - big or small
 */
const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
    const Skeleton = toggleFeatures({
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
        name: 'isAppRedesigned',
    });

    const Card = toggleFeatures({ on: () => CardRedesigned, off: () => CardDeprecated, name: 'isAppRedesigned' });

    const ArticlesListBig = () => {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border={'50%'} width={30} height={30} className={cls.img} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />

                    <div className={cls.footer}>
                        <Skeleton width={'100%'} height={200} />
                    </div>
                </Card>
            </div>
        );
    };
    const ArticlesListBigRedesigned = () => {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
                <Card>
                    <VStack gap={'16'} className={cls.skeletonRedesignedContainer}>
                        <HStack max>
                            <Skeleton border={'50%'} width={30} height={30} />
                            <Skeleton width={150} height={25} border={'10px'} />
                        </HStack>
                        <Skeleton width={'98%'} height={40} border={'10px'} />
                        <Skeleton width={'90%'} height={40} border={'10px'} />
                        <Skeleton width={'85%'} height={30} border={'10px'} />
                        <Skeleton width={'98%'} height={200} border={'10px'} />
                        <VStack max>
                            <Skeleton width={'90%'} height={20} border={'5px'} />
                            <Skeleton width={'85%'} height={20} border={'5px'} />
                            <Skeleton width={'92%'} height={20} border={'5px'} />
                        </VStack>
                        <HStack max justify={'end'}>
                            <Skeleton width={'10%'} height={30} border={'18px'} />
                        </HStack>
                    </VStack>
                </Card>
            </div>
        );
    };
    const ArticlesListSkeletonSmall = () => {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
                <Card className={cls.card}>
                    <Skeleton width={300} height={300} />
                </Card>
            </div>
        );
    };
    const ArticlesListSkeletonSmallRedesigned = () => {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className ?? '', cls[view]])}>
                <VStack gap={'8'} max>
                    <Skeleton width={250} height={340} border={'40px'} />
                </VStack>
            </div>
        );
    };
    if (view === ArticleView.BIG) {
        return (
            <ToggleFeatures feature={'isAppRedesigned'} on={<ArticlesListBigRedesigned />} off={<ArticlesListBig />} />
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticlesListSkeletonSmallRedesigned />}
            off={<ArticlesListSkeletonSmall />}
        />
    );
};

export default memo(ArticleListItemSkeleton);

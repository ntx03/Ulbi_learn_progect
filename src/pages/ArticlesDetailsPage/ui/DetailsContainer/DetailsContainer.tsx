import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import Card from '@/shared/ui/redesigned/Card/Card';
import { ArticleRating } from '@/features/articleRating';

export interface DetailsContainerProps {
    className?: string;
}

/**
 * Компонент с карточкой статьи целиком и блоком оценки статьи
 */
const DetailsContainer = ({ className }: DetailsContainerProps) => {
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Card className={className} padding={'24'} border={'round'}>
                <ArticleDetails id={id!} />
            </Card>
            <ArticleRating articleId={id} />
        </>
    );
};

export default memo(DetailsContainer);

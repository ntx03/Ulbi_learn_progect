import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import Card from '@/shared/ui/redesigned/Card/Card';

export interface DetailsContainerProps {
    className?: string;
}

const DetailsContainer = ({ className }: DetailsContainerProps) => {
    const { id } = useParams<{ id: string }>();
    return (
        <Card className={className} padding={'24'} border={'round'}>
            <ArticleDetails id={id!} />
        </Card>
    );
};

export default memo(DetailsContainer);

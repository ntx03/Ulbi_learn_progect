import { type Comment } from '@/entities/Comment';
import { type EntityState } from '@reduxjs/toolkit';

export interface ArticlesDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}

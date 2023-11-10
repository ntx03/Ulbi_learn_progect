import { lazy } from 'react';

/**
 * Форма для отправки коммента к статье с lazy loading
 */
export const AddCommentFormAsync = lazy(async () => await import('./AddCommentForm'));

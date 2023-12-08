import '@/app/styles/index.scss';
import { type StoryFn } from '@storybook/react';

/**
 * Декоратор стилей сторибука
 */
export const StyleDecorator = (story: () => StoryFn) => story();

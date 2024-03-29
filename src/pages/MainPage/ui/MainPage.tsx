import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Counter } from '@/entities/Counter';

interface MainPageProps {
    className?: string;
}

/**
 * Главная страница сайта
 */
export const MainPage = memo(({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        <Page data-testid={'MainPage'} className={classNames(cls.MainPage, {}, [className ?? ''])}>
            <VStack max>
                <p className='title'>{t('Главная страница')}</p>
                <Counter />
            </VStack>
        </Page>
    );
});

export default MainPage;

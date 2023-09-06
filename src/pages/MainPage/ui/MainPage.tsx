import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { Counter } from '@/entities/Counter';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';

interface MainPageProps {
    className?: string;
}
const counter = toggleFeatures({
    name: 'isCounterEnabled',
    on: () => <Counter />,
    off: () => null,
});
export const MainPage = memo(({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    // const isCounterEnabled = getFeaturesFlag('isCounterEnabled') ?? true;
    return (
        <Page data-testid={'MainPage'} className={classNames(cls.MainPage, {}, [className ?? ''])}>
            {/* <BugButton/> */}
            <VStack max>
                <p className='title'>{t('Главная страница')}</p>
                {counter}
            </VStack>
        </Page>
    );
});

export default MainPage;

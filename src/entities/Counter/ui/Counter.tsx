import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Counter.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { memo } from 'react';

interface CounterProps {
    className?: string;
}

export const Counter = memo(({ className }: CounterProps) => {
    const { t } = useTranslation();

    // этот хук нужен для того, чтобы избавится от useSelector и возвращает уже готовый стейт. Надо заменить все в проекте по этому типу.
    const counterValue = useCounterValue();

    const { increment, decrement } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };
    return (
        <div className={classNames(cls.Counter, {}, [className ?? ''])}>
            <h1 data-testid='value-title' style={{ margin: '17px 20px auto 0' }}>
                {counterValue}
            </h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button onClick={handleIncrement} data-testid='increment-btn' theme={ButtonTheme.OUTLINE_INVERT}>
                    {t('Увеличить')}
                </Button>
                <Button onClick={handleDecrement} data-testid='decrement-btn' theme={ButtonTheme.OUTLINE_INVERT}>
                    {t('Уменьшить')}
                </Button>
            </div>
        </div>
    );
});

export default Counter;

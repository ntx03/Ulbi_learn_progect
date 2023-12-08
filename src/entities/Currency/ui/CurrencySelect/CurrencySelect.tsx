import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import ListBoxDeprecated from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Currency } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import ListBox from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange: (value: any) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
    { value: Currency.RUB, content: Currency.RUB },
];
/**
 * Выпадающий список с выбором валюты
 * @param value - value select
 * @param onChange - забираем выбранное значение
 * @param readonly - только для чтения
 */
const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack className={classNames('', {}, [className])}>
                    <ListBox
                        className={classNames('', {}, [])}
                        label={t('Валюта') ?? ''}
                        readonly={readonly}
                        items={options}
                        value={value}
                        onChange={onChange}
                        direction={'top'}
                    />
                </HStack>
            }
            off={
                <HStack className={classNames('', {}, [className])}>
                    {/* <p style={{'margin': '0'}}>{`Укажите валюту>`}</p> */}
                    <ListBoxDeprecated
                        className={classNames('', {}, [])}
                        label={t('Укажите валюту') ?? ''}
                        defaultValue={t('Укажите валюту') ?? ''}
                        readonly={readonly}
                        items={options}
                        value={value}
                        onChange={onChange}
                        direction={'top'}
                    />
                </HStack>
            }
        />
    );
});

export default CurrencySelect;

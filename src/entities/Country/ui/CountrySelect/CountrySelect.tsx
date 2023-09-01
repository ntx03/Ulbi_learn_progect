import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import ListBox from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange: (value: any) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.USA, content: Country.USA },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];
const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    return (
        <HStack className={classNames('', {}, [className])}>
            <ListBox
                label={t('Укажите страну') ?? ''}
                readonly={readonly}
                items={options}
                value={value}
                onChange={onChange}
                direction={'bottomLeft'}
            />
        </HStack>
    );
});

export default CountrySelect;

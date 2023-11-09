import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from '@/shared/ui/redesigned/Stack';
import ListBoxDeprecated from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import ListBox from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack className={classNames('', {}, [className])}>
                    <ListBox
                        label={t('Страна') ?? ''}
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
                    <ListBoxDeprecated
                        label={t('Укажите страну') ?? ''}
                        readonly={readonly}
                        items={options}
                        value={value}
                        onChange={onChange}
                        direction={'bottomLeft'}
                    />
                </HStack>
            }
        />
    );
});

export default CountrySelect;

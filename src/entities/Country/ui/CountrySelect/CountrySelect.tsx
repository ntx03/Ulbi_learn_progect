import Select from "shared/ui/Select/Select";

import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Country } from "entities/Country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: any) => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    {
        value: Country.USA,
        content: Country.USA,
    },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];
const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation("profile");
        return (
            <Select
                className={classNames("", {}, [className])}
                label={t("Укажите страну") ?? ""}
                readonly={readonly}
                options={options}
                value={value}
                onChange={onChange}
            />
        );
    }
);

export default CountrySelect;

import Select from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: any) => void;
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
const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation("profile");
        return (
            <Select
                className={classNames("", {}, [className])}
                label={t("Укажите валюту") ?? ""}
                readonly={readonly}
                options={options}
                value={value}
                onChange={onChange}
            />
        );
    }
);

export default CurrencySelect;

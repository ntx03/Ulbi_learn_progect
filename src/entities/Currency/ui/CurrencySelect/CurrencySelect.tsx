import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import ListBox from "@/shared/ui/Popups/ui/ListBox/ListBox";
import {HStack} from "@/shared/ui/Stack";
import {Currency} from "../../model/consts/consts";

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
const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation("profile");
        return (
            <HStack className={classNames('', {}, [className])}>
                {/* <p style={{'margin': '0'}}>{`Укажите валюту>`}</p> */}
                <ListBox
                    className={classNames("", {}, [])}
                    label={t("Укажите валюту") ?? ""}
                    defaultValue={t("Укажите валюту") ?? ""}
                    readonly={readonly}
                    items={options}
                    value={value}
                    onChange={onChange}
                    direction={'top'}
                />
            </HStack>
        );
    }
);

export default CurrencySelect;

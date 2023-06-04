import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { t } from "i18next";

interface PageErrorProps {
  className?: string;
}

const reloadPage = (): void => {
  location.reload();
};
const PageError = ({ className }: PageErrorProps) => {
  return (
    <div className={classNames(cls.PageError, {}, [className ?? ""])}>
      <p>{t(`Произошла непредвиденная ошибка`)}</p>
      <Button onClick={reloadPage} className={""} theme={ButtonTheme.CLEAR}>
        {t("Перезагрузить страницу")}
      </Button>
    </div>
  );
};

export default PageError;

import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/Sidebar/index';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('translation')
  const onToggle = () => {
    setCollapsed(collapsed => !collapsed);
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
      <button className={classNames(cls.button, {}, [])} onClick={onToggle}>{t('Переключатель')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </div>
  )
};

export default Sidebar;

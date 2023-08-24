import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import {useTranslation} from "react-i18next";
import Select, {type SelectOption} from "@/shared/ui/Select/Select";
import {useMemo} from "react";
import {type SortOrder} from "@/shared/types";
import {ArticleSortField} from "@/entities/Article";

    interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    }
const ArticleSortSelector = ({className, onChangeSort, sort, onChangeOrder, order}: ArticleSortSelectorProps) => {

    const {t} = useTranslation('article');

    const orderOption = useMemo<Array<SelectOption<SortOrder>>>(()=> [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        },
    ],
    [t])

    const sortFieldOption = useMemo<Array<SelectOption<ArticleSortField>>>(()=> [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        },
    ],
    [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className ?? ''])}>
            <Select options={sortFieldOption} label={t('Сортировать по') ?? ''} value={sort} onChange={onChangeSort} className={cls.sort}/>
            <Select options={orderOption} label={t('по') ?? ''} value={order} onChange={onChangeOrder} className={cls.order}/>
        </div>
    )
};


export default ArticleSortSelector;
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {memo} from "react";
import {Link} from "react-router-dom";


interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {
    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
            {/* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */}
            <Link style={{color: '#000000'}} to={'/articles/' + 1}>1</Link>
        </div>
    )
};

export default memo(ArticlePage);
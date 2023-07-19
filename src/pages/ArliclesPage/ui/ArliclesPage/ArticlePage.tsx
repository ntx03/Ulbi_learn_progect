import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {memo} from "react";
import {Link} from "react-router-dom";
import ArticleList from "entities/Article/ui/ArticleList/ArticleList";
import {type Article} from "entities/Article";
import {ArticleBlockType, ArticleType, ArticleView} from "entities/Article/model/types/articles";


interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {
    const article = {
        "id": "1",
        "title": "Javascript News",
        "subtitle": "Что нового в JS в 2022 году?",
        "img": "https://yt3.ggpht.com/ytc/AKedOLSWjjhkOwEcPjbO3fXtkTapXl4W4eD8NGqt9m5q=s900-c-k-c0x00ffffff-no-rj",
        "views": 1022,
        "user": {
            id: '1',
            username: "Andrey",
            avatar: 'https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album'
        },
        "createdAt": "26.02.2022",
        "type": [
            ArticleType.IT
        ],
        "block": [
            {
                "id": "1",
                "type": ArticleBlockType.TEXT,
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                "id": "2",
                "type": ArticleBlockType.CODE,
                "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                "id": "3",
                "type": ArticleBlockType.TEXT,
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                "id": "4",
                "type": ArticleBlockType.IMAGE,
                "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                "title": "Рисунок 1 - скриншот сайта"
            },
            {
                "id": "5",
                "type": ArticleBlockType.CODE,
                "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                "id": "6",
                "type": ArticleBlockType.TEXT,
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                "id": "7",
                "type": ArticleBlockType.IMAGE,
                "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                "title": "Рисунок 1 - скриншот сайта"
            },
            {
                "id": "8",
                "type": ArticleBlockType.TEXT,
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
                ]
            },
            {
                "id": "9",
                "type": ArticleBlockType.IMAGE,
                "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                "title": "Рисунок 1 - скриншот сайта"
            },
            {
                "id": "10",
                "type": ArticleBlockType.TEXT,
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ]
    } satisfies Article;
    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
            <ArticleList view={ArticleView.BIG} articles={new Array(16).fill(0).map((i, index)=>({...article, id: String(index)}))}/>
        </div>
    )
};

export default memo(ArticlePage);
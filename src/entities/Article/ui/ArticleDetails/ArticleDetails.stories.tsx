import type {Meta, StoryObj} from "@storybook/react";
import ArticleDetails, {type ArticleDetailsProps} from "./ArticleDetails";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator";
import {type Article, ArticleBlockType, ArticleType} from "entities/Article/model/types/articles";

const meta: Meta<typeof ArticleDetails> = {
    title: "entities/ArticleDetails",
    component: ArticleDetails,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleDetailsProps>;

const article: Article = {
    "id": "1",
    "title": "Javascript News",
    "subtitle": "Что нового в JS в 2022 году?",
    "img": "https://yt3.ggpht.com/ytc/AKedOLSWjjhkOwEcPjbO3fXtkTapXl4W4eD8NGqt9m5q=s900-c-k-c0x00ffffff-no-rj",
    "views": 1022 ,
    "createdAt": "26.02.2022",
    "type": [ArticleType.IT],
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
}

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({
        articleDetails: {
            isLoading: false,
            data: article
        }
    }
    )]
}
export const Loading: Story = {
    args: {},
    decorators: [ReduxDecorator({
        articleDetails: {
            isLoading: true,
            data: article
        }
    }
    )]
}

export const Error: Story = {
    args: {},
    decorators: [ReduxDecorator({
        articleDetails: {
            isLoading: false,
            data: article,
            error: 'Error'
        }
    }
    )]
}
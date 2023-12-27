## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run dev` - Запуск frontend проекта на webpack dev server
- `npm run dev:vite` - Запуск frontend проекта на vite
- `npm run dev:start` - Запуск frontend проекта на webpack dev server совместно с тестовым серсером имитируюшим бэкэнд
- `npm run dev:start:vite` - Запуск frontend проекта на vite совместно с тестовым серсером имитируюшим бэкэнд
- `npm run server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run fix:all` - Исправление ts и scss файлов линтером вместе сразу
  `npm run prettier` - Проверка кода приттером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:e2e` - Запуск е2е тестирования
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run visual:report` - Генерация полного отчета для скриншотных тестов
- `npm run visual:report:json` - Генерация json отчета для скриншотных тестов
- `npm run visual:report:html` - Генерация HTML отчета для скриншотных тестов
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов
- `npm run remove-feature-by-flag` - Скрипт который удаляет устаревшие? фичи по флагу

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-ulbi-tv-plugin*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
    args: {
        children: 'test button',
    },
    decorators: [],
};
export const MainSizeM: Story = {
    args: {
        children: 'test button',
        size: ButtonSize.M,
    },
    decorators: [],
};
export const MainSizeL: Story = {
    args: {
        children: 'test button',
        size: ButtonSize.L,
    },
    decorators: [],
};
export const MainSizeXL: Story = {
    args: {
        children: 'test button',
        size: ButtonSize.XL,
    },
    decorators: [],
};
export const MainDark: Story = {
    args: {
        children: 'test button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature-flag

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями 

{
   name: название фича-флага, 
   on: функция, которая отработает после Включения фичи 
   of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента
1. Название удаляемого фича-флага
2. Состояние (on\off)

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articlePageGreeting](src/features/articlePageGreeting)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [ArticleSortSelector](src/features/ArticleSortSelector)
- [ArticleViewSelector](src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [uiDesignSwitcher](src/features/uiDesignSwitcher)

## Страницы (pages)

- [AboutPage](src/pages/AboutPage)
- [AdminPanelPage](src/pages/AdminPanelPage)
- [ArliclesPage](src/pages/ArliclesPage)
- [ArticleEditPage](src/pages/ArticleEditPage)
- [ArticlesDetailsPage](src/pages/ArticlesDetailsPage)
- [ForbittenPage](src/pages/ForbittenPage)
- [MainPage](src/pages/MainPage)
- [NoFoundPage](src/pages/NoFoundPage)
- [ProfilePage](src/pages/ProfilePage)
- [SettingsPage](src/pages/SettingsPage)

## Виджеты (widgets)
- [ArticleAdditionalInfo](src/widgets/ArticleAdditionalInfo)
- [ArticlesFilters](src/widgets/ArticlesFilters)
- [Navbar](src/widgets/Navbar)
- [Page](src/widgets/Page)
- [PageError](src/widgets/PageError)
- [PageLoader](src/widgets/PageLoader)
- [ScrollSave](src/widgets/ScrollSave)
- [Sidebar](src/widgets/Sidebar)

## Универсальные компоненты (shared)
- [Text](src/shared/ui/redesigned/Text)
- [Tabs](src/shared/ui/redesigned/Tabs)
- [Stack](src/shared/ui/redesigned/Stack)
- [Skeleton](src/shared/ui/redesigned/Skeleton)
- [Portal](src/shared/ui/redesigned/Portal)
- [Popups](src/shared/ui/redesigned/Popups)
- [Overlay](src/shared/ui/redesigned/Overlay)
- [Modal](src/shared/ui/redesigned/Modal)
- [Input](src/shared/ui/redesigned/Input)
- [Icon](src/shared/ui/redesigned/Icon)
- [Drawer](src/shared/ui/redesigned/Drawer)
- [Code](src/shared/ui/redesigned/Code)
- [Card](src/shared/ui/redesigned/Card)
- [Button](src/shared/ui/redesigned/Button)
- [Avatar](src/shared/ui/redesigned/Avatar)
- [AppLogo](src/shared/ui/redesigned/AppLogo)
- [AppLink](src/shared/ui/redesigned/AppLink)
- [AppImage](src/shared/ui/redesigned/AppImage)

## Вспомогательные функции, хуки, конфиги и прочее
- [lib](src/shared/lib) - все вспомогательные библиотеки проекта
- [hooks](src/shared/lib/hooks) - кастомные хуки проекта
- [classNames](src/shared/lib/classNames/classNames.ts) - функция для удобного добавления классов стилей в classNames HTML разметки компонента
- [layouts](src/shared/layouts) - макеты страниц 
- [const](src/shared/const) - константы используемые в проекте
- [config](src/shared/config) - конфики для сторибука и i18n и прочих сторонних программ проекта
- [assets](src/shared/assets) - иконки и весь визуальный контент
- [api](src/shared/api) -  базовые настроики api бибилиотек 
- [ui](src/shared/ui) - все переиспользуемые компоненты (старого дизайна и нового)
- [types](src/shared/types) - типы typeScript общие
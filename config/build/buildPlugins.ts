import { type BuildOptions } from './types/config';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // создает html файл, можно задавать шаблон.
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // плагин для прогресса загрузки
        new webpack.ProgressPlugin(),
        // Этот плагин извлекает CSS в отдельные файлы. Он создает CSS-файл для каждого JS-файла, который содержит CSS. Он поддерживает загрузку CSS и исходных карт по требованию.
        new MiniCssExctractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // передаем в webpack переменную из вне ( конкретно ее использыем в i18n в конфиге)
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // копируем файлы из from в to (в нашем случае переводы)
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        // обнаруживаем кольцевые зависимости
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
        }),
    ];

    if (isDev) {
        // обновляем код страницы без перезагрузки самой страницы (вроде не очень работает)
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // анализируем бандл сайта если false то не открывается
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
        // этот плагин пересобирает проект если есть изменения в коде (например поменяли стили scss)
        plugins.push(new ReactRefreshWebpackPlugin());
        // этот плагин нужен для проверки типов в реальном времени в проекте, отдельно от сборщика (без пересборки проекта),
        // без него если изменить тип неправильно, то пересборки не будет и ошибка не подстветится
        plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return plugins;
}

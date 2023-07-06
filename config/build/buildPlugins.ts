import { type BuildOptions } from "./types/config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExctractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
    // создает html файл, можно задавать шаблон.
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // плагин для прогресса загрузки
        new webpack.ProgressPlugin(),
        // Этот плагин извлекает CSS в отдельные файлы. Он создает CSS-файл для каждого JS-файла, который содержит CSS. Он поддерживает загрузку CSS и исходных карт по требованию.
        new MiniCssExctractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        // передаем в webpack переменную из вне ( конкретно ее использыем в i18n в конфиге)
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
    // обновляем код страницы без перезагрузки самой страницы
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // анализируем бандл сайта если false то не открывается
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            })
        );
    }
    return plugins;
}

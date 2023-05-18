import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
export function buildPlugins(_a) {
    var paths = _a.paths, isDev = _a.isDev;
    return [
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
        }),
        // обновляем код страницы без перезагрузки самой страницы
        new webpack.HotModuleReplacementPlugin(),
    ];
}

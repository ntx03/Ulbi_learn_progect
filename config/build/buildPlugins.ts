import { BuildOptions } from './types/config';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
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
  ];
}

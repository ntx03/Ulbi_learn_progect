import { type BuildOptions } from './types/config';

import type webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoaders';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    // лоадер для scss
    const scssLoader = buildScssLoader(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    // декомпозиция загрузчиков
    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    // если не используем typescript - нужен babel-loader (пока отключили для быстроты загрузки)
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    return [scssLoader, fileLoader, codeBabelLoader, tsxCodeBabelLoader, svgLoader];
}

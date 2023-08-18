import { type BuildOptions } from "./types/config";
import MiniCssExctractPlugin from "mini-css-extract-plugin";
import type webpack from "webpack";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev} = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // лоадер для scss
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExctractPlugin.loader,
            // options - modules true - включаем css модули
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // декомпозиция загрузчиков
    const codeBabelLoader = buildBabelLoader({...options, isTSX: false});
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTSX: true});

    // если не используем typescript - нужен babel-loader (пока отключили для быстроты загрузки)
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    return [
        buildSvgLoader(),
        scssLoader,
        fileLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader
    ];
}

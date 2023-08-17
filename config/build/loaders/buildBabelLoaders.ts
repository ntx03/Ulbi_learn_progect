import {type BuildOptions} from "../types/config";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

export interface BuildBabelLoadersProps extends BuildOptions{
    isTSX?: boolean;
}

export const buildBabelLoader = ({isDev, isTSX} : BuildBabelLoadersProps) => {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    isDev && require.resolve("react-refresh/babel"),
                    ["@babel/plugin-transform-typescript", {isTSX}],
                    "@babel/plugin-transform-runtime",
                    // этот планин нужен чтобы удалить из сборки id data-testid. Выпиливает только в TSX файлах. Самописный плагин. Находится в папке babel.
                    isTSX && [babelRemovePropsPlugin, {props: ['data-testid']}]
                ].filter(
                    Boolean
                ),
            },
        },
    };
};

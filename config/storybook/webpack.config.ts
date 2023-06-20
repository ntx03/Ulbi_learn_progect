import type webpack from "webpack";
import { DefinePlugin } from "webpack";
import { type BuildPaths } from "../build/types/config";
import path from "path";
import { buildScssLoader } from "../build/loaders/buildScssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    // @ts-ignore
    config.resolve.modules.push(paths.src);
    // @ts-ignore
    config.resolve.extensions.push(".ts", ".tsx");
    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    // @ts-ignore
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    // @ts-ignore
    config.module.rules.push(buildSvgLoader());
    // @ts-ignore
    config.module.rules.push(buildScssLoader(true));
    // @ts-ignore
    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: true,
        })
    );

    return config;
};

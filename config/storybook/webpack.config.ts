import type webpack from 'webpack';
import { DefinePlugin } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        locales: path.resolve(__dirname, 'public', 'locales'),
    };

    config.resolve!.modules!.push(paths.src);

    config.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as webpack.RuleSetRule[];
    config.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module!.rules.push(buildSvgLoader());

    config.module!.rules.push(buildScssLoader(true));

    config.resolve!.alias = { '@': paths.src };

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};

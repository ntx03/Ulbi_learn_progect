import { BuildOptions } from './types/config';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExctractPlugin.loader,
      // options - modules true - включаем css модули
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  // если не используем typescript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, scssLoader];
}

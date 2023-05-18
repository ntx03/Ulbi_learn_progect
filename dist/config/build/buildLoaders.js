import MiniCssExctractPlugin from 'mini-css-extract-plugin';
export function buildLoaders(options) {
    var isDev = options.isDev;
    var babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    var fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    var svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };
    // лоадер для scss
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExctractPlugin.loader,
            // options - modules true - включаем css модули
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: function (resPath) { return Boolean(resPath.includes('.module.')); },
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
    // если не используем typescript - нужен babel-loader
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [babelLoader, typescriptLoader, scssLoader, svgLoader, fileLoader];
}

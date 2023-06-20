import MiniCssExctractPlugin from "mini-css-extract-plugin";

export const buildScssLoader = (isDev: boolean) => {
    return {
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
};

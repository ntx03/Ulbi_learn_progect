export function buildDevServer(options) {
    var port = options.port;
    return {
        port: port,
        // при запуске сервера открываем страницу в новой вкладке
        open: true,
        // если перейти по несуществующему роуту, то не пишет cannot get, а показывает что есть в компоненте app кроме того, что обернуто в Routes
        historyApiFallback: true,
        hot: true,
    };
}

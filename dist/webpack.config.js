import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
export default (function (env) {
    // переключает режим development или production
    var mode = env.mode || 'development';
    // настраиваем пути
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    // режим разработчика или продакшион
    var isDev = mode === 'development';
    // порт
    var PORT = env.port || 3000;
    // !!!!!!!сюда подключаем весь конфиг
    var config = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    });
    return config;
});

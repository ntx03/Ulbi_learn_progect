import { type BuildOptions } from './types/config';
import type webpack from 'webpack';

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
    return {
        // у этих файлов можно не указывать окончание в пути файлов
        extensions: ['.tsx', '.ts', '.js'],
        // Предпочитайте абсолютные пути
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        // Имя файла, которое будет использоваться при разрешении каталогов.
        mainFiles: ['index'],
        // Символ который надо указывать перед обсалютным путем, если нет ничего, то не надо ничего указывать
        alias: {
            '@': options.paths.src,
        },
    };
}

import { BuildPaths, BuildMode, buildEnv } from './config/build/types/config';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

export default (env: buildEnv) => {
  // переключает режим development или production
  const mode: BuildMode = env.mode || 'development';

  // настраиваем пути
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  // режим разработчика или продакшион
  const isDev = mode === 'development';

  // порт
  const PORT = env.port || 3000;

  // !!!!!!!сюда подключаем весь конфиг
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};

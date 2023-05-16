import { type BuildOptions } from './types/config';
import type { Configuration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
  const { port } = options;

  return {
    port,
    // при запуске сервера открываем страницу в новой вкладке
    open: true,
    // если перейти по несуществующему роуту, то не пишет cannot get, а показывает что есть в компоненте app кроме того, что обернуто в Routes
    historyApiFallback: true,
    hot: true,
  };
}

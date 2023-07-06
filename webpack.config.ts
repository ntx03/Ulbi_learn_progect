import {
    type buildEnv,
    type BuildMode,
    type BuildPaths,
} from "./config/build/types/config";
import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

export default (env: buildEnv) => {
    // настраиваем пути
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };
    // переключает режим development или production
    const mode: BuildMode = env.mode || "development";
    // режим разработчика или продакшион
    const isDev = mode === "development";
    const apiUrl = env.apiUrl || "http://localhost:8000";

    // порт
    const PORT = env.port || 3000;

    // !!!!!!!сюда подключаем весь конфиг
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: "frontend",
    });

    return config;
};

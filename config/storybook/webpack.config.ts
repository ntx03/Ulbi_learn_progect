import webpack from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildScssLoader } from "../build/buildScssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  // @ts-ignore
  config.resolve.modules.push(paths.src);
  // @ts-ignore
  config.resolve.extensions.push(".ts", ".tsx");
  // @ts-ignore
  config.module.rules.push(buildScssLoader(true));

  return config;
};

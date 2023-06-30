import type webpack from "webpack";
import { DefinePlugin } from "webpack";
import { type BuildPaths } from "../build/types/config";
import path from "path";
import { buildScssLoader } from "../build/loaders/buildScssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

  config.resolve!.modules!.push(paths.src);

  config.resolve!.extensions!.push(".ts", ".tsx");

  const rules = config.module!.rules as webpack.RuleSetRule[];
  config.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
      if ((rule.test as string).includes("svg")) {
          return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
  });

  config.module!.rules.push(buildSvgLoader());

  config.module!.rules.push(buildScssLoader(true));

  config.plugins!.push(
      new DefinePlugin({
          __IS_DEV__: true,
          __API__: JSON.stringify(""),
      })
  );

  return config;
};

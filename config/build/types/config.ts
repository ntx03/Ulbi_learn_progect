export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface buildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

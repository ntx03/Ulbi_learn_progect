declare module '*module.scss' {
    type IClassNames = Record<string, string>;

    // eslint-disable-next-line strict-null-checks/all
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import type React from 'react';

    // eslint-disable-next-line strict-null-checks/all
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

// eslint-disable-next-line @typescript-eslint/naming-convention,strict-null-checks/all
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention,strict-null-checks/all
declare const __API__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention,strict-null-checks/all
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

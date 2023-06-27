import {lazy} from "react";
// export const AboutPageAsync = lazy(async () => await import('./AboutPage'));

export const AboutPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                resolve(import("./AboutPage"));
            }, 1500);
        })
);

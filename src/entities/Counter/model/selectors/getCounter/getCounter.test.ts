import { getCounter } from "../getCounter/getCounter";
import { type StateSchema } from "app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

describe("getCounter", () => {
    test("should return counter value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});

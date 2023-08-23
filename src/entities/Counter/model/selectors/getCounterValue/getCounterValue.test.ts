import { getCounterValue } from "../getCounterValue/getCounterValue";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "@/app/providers/StoreProvider";

describe("getCounterValue", () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test("", () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});

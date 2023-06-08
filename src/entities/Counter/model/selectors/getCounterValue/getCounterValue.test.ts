import { getCounterValue } from "../getCounterValue/getCounterValue";

describe("getCounterValue", () => {
    const state = {
        counter: { value: 10 },
    };
    test("", () => {
        expect(getCounterValue(state)).toEqual(10);
    });
});

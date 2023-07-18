import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import { type Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string,
  ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});

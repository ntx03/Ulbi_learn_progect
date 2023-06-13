import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User } from "entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:8000/login", authData);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});

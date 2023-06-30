import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

// const baseURL = __IS_DEV__ ? "http://localhost:8000" : "https://praduction.ru";
export const $api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? "",
    },
});

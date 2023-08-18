import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";


// Define a service using a base URL and expected endpoints
export const rtkQueryApi = createApi({
    reducerPath: 'rtkQueryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? "";
            if (token) {
                headers.set('Authorization', token)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({}),
})

// Export hooks for usage in functional ui, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
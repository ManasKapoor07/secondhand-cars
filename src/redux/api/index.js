import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://mbc-backend-ep3l.onrender.com/";

export const apiReducer = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  tagTypes: [],
});

import { apiReducer } from ".";

const allApi = apiReducer.injectEndpoints({
  endpoints: (builder) => ({
    getCarList: builder.query({
      query: (params) => ({
        url: "/cars",
        method: "GET",
        body: params,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetCarListQuery } = allApi;

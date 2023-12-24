import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-shop-server.vercel.app/api/v1",
  }),
  tagTypes: ["user", "bike", "checkout"],
  endpoints: () => ({}),
});

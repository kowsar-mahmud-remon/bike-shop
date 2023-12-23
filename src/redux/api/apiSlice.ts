import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rider-server.vercel.app/api/v1",
  }),
  tagTypes: ["user", "bike", "checkout", "payment"],
  endpoints: () => ({}),
});

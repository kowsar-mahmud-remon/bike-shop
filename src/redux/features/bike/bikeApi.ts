import { api } from "../../api/apiSlice";

const bikeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBikes: build.query({
      query: () => "/bike",
      providesTags: ["bike"],
    }),

    getSingleBike: build.query({
      query: (id: any) => `/bike/${id}`,
      providesTags: ["bike"],
    }),

    createBike: build.mutation({
      query: (data: any) => ({
        url: `/bike/create-bike`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bike"],
    }),

    deleteBike: build.mutation({
      query: (id: any) => ({
        url: `/bike/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["bike"],
    }),

    updateBike: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/bike/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useCreateBikeMutation,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} = bikeApi;

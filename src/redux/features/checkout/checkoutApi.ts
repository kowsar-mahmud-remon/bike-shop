import { api } from "../../api/apiSlice";

const checkoutApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCheckouts: build.query({
      query: () => "/checkout",
      providesTags: ["checkout"],
    }),

    getSingleCheckout: build.query({
      query: (id: any) => `/checkout/${id}`,
      providesTags: ["checkout"],
    }),

    createCheckout: build.mutation({
      query: (data: any) => ({
        url: `/checkout/create-checkout`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["checkout"],
    }),

    deleteCheckout: build.mutation({
      query: (id: any) => ({
        url: `/checkout/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["checkout"],
    }),

    updateCheckout: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/checkout/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["checkout"],
    }),
  }),
});

export const {
  useGetAllCheckoutsQuery,
  useGetSingleCheckoutQuery,
  useCreateCheckoutMutation,
  useDeleteCheckoutMutation,
  useUpdateCheckoutMutation,
} = checkoutApi;

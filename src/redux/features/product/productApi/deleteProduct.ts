

import { baseApi } from "../../../api/baseApi";
const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const { useDeleteProductMutation } = productsApi;
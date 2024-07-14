import { baseApi } from "../../../api/baseApi";



const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags:['product']
    }),
  }),
});

export const {useAddProductMutation} = productApi
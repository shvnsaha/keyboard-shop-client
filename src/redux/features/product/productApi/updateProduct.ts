import { baseApi } from "../../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      updateProduct: builder.mutation({
        query: ({id,data}) => {
           console.log(id,data);
          return{
            url: `/products/${id}`,
          method: "PUT",
          body:data
          }
        },
        invalidatesTags: ['product'],
      }),
    }),
  });
  
  export const { useUpdateProductMutation } = productsApi;
import { baseApi } from "../../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query: () => ({
                method: 'GET',
                url: '/products'
              }),
              providesTags:['product']
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
              url: `/products/${id}`,
              method: "GET",
            }),
          }),
        })
    })


    export const {useGetProductsQuery,useGetSingleProductQuery} = productApi


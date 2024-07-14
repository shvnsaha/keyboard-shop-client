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
        })
    })


    export const {useGetProductsQuery} = productApi


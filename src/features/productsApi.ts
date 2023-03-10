import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


 const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query:() => 'products',
    })
  })
})

export default productsApi.reducer
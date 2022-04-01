import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const globalQuery = (url) => {
  return {
      url,
      params: {api_key: process.env.NEXT_PUBLIC_API_KEY}
  }
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://api.themoviedb.org/3/',
    }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => globalQuery('trending/movie/week')
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
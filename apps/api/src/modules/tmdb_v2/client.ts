import createClient from 'openapi-fetch'
import { paths } from './v3'

const { GET, PUT } = createClient<paths>({
  baseUrl: 'https://api.themoviedb.org/3/',
})

export const searchMulti = async (term: string) =>
  GET('/3/search/multi', {
    params: {
      query: { query: term },
    },
  })

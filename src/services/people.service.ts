import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use((config: AxiosRequestConfig) =>({
  headers: {
    'x-projectkey': 12343
  }
}))
// get a star wars person by id and return their name
export const swapiGetter = async (id: number): Promise<string> => {
  const result = await instance.get(`/people/${id}/`)
  return result?.data?.items
}

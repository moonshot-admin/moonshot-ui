import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { proxyPathContextStrats } from './constants';
import { getHostAndPort } from './host';

const [host, port] = getHostAndPort();
const contextStratApi = createApi({
  reducerPath: 'contextStratApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${host}:${port}` }),
  endpoints: (builder) => ({
    getAllContextStrategies: builder.query<string[], void>({
      query: () => proxyPathContextStrats,
      keepUnusedDataFor: 600,
    }),
  }),
});

const { useGetAllContextStrategiesQuery } = contextStratApi;

export { contextStratApi, useGetAllContextStrategiesQuery };

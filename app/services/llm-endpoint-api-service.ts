import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const host = process.env.MOONSHOT_API_URL || 'http://localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const llmEndpointApi = createApi({
  reducerPath: 'llmEndpointApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${host}:${port}` }),
  endpoints: (builder) => ({
    getLLMEndpoints: builder.query<LLMEndpoint[], void>({
      query: () => 'api/v1/llm_endpoints',
      keepUnusedDataFor: 0
    }),
    createLLMEndpoint: builder.mutation<
      LLMEndpointFormValues,
      LLMEndpointFormValues
    >({
      query: (endpointDetails) => {
        let body: LLMEndpointFormValues;
        try {
          body =
            endpointDetails.params != undefined
              ? {
                  ...endpointDetails,
                  params: JSON.parse(endpointDetails.params),
                }
              : endpointDetails;
        } catch (e) {
          console.error(e);
          body = endpointDetails;
        }
        return {
          url: 'api/v1/llm_endpoints',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

const { useGetLLMEndpointsQuery, useCreateLLMEndpointMutation } =
  llmEndpointApi;

export {
  llmEndpointApi,
  useGetLLMEndpointsQuery,
  useCreateLLMEndpointMutation,
};

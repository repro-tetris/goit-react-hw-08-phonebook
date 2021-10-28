import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts/",
      providesTags: ["contacts"],
    }),
    invalidatesTags: ["contacts"],
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contacts/",
        method: "POST",
        body: contact,
        providesTags: ["contacts"],
      }),
      invalidatesTags: ["contacts"],
    }),

    delContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        providesTags: ["contacts"],
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDelContactMutation,
  useAddContactMutation,
} = contactsApi;

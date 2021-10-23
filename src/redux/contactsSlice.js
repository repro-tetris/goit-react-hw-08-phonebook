import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://616d0dc037f997001745d805.mockapi.io/contacts",
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts/",
      providesTags: ["contacts"],
    }),
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/contacts",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/",
      providesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/",
        method: "POST",
        body: contact,
        providesTags: ["contacts"],
      }),
      invalidatesTags: ["contacts"],
    }),

    delContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
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

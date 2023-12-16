import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // fetchBaseQuery kani 3m be3ml axios
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // l getUsers hiey l method 2w l function hon wazifta te3ml query
    getUsers: builder.query({
      query: () => "users", // hon 3m 3aref l rout exp localhost/users
      providesTags: ["Users"], // lezm ykoun nafess l essm fina n2oul hayda metl reference
    }),
    createUser: builder.mutation({ // hon mutation la2n 3m beb3at data ye3ni fi data 3m tet8ayar
      query: (name) => ({
        url: "users", // rout
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"],// hon bas 23ml create lal user btytnafaz hayda l code li bi5ali l code li fo2 li bijib l data yeshte8l metl l useEffect ta2riban
    }),
  }),
});
export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
// li b2alb l const haydol custom hook byn3amalu automatic 3ibara 3an : 1-use 2- essm l method li 3mlta  3-iza kenet query 2w mutation
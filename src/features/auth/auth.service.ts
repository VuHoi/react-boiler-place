import { API_BASE_URL } from "config/env";
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "utils/axiosBaseQuery";

export const AUTH_API_REDUCER_KEY = "authApi";
export const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    /**
     * Sign In
     */

    signIn: builder.mutation({
      query: (payload) => ({
        method: "POST",
        url: `/users/login`,
        body: payload,
      }),
      transformResponse: (response: any, meta, arg) => {
        return response.data;
      },
    }),
    signInAuth: builder.mutation({
      query: (payload) => ({
        method: "POST",
        url: `/users/login/google`,
        body: payload,
      }),
      transformResponse: (response: any, meta, arg) => {
        return response.data;
      },
    }),

    signUp: builder.mutation({
      query: (payload) => ({
        method: "POST",
        url: `/users/sign-up`,
        body: payload,
      }),
      transformResponse: (response: any, meta, arg) => {
        return response.data;
      },
    }),

    me: builder.mutation<any, void>({
      query: (payload) => ({
        method: "GET",
        url: `/users/me`,
        body: payload,
      }),
      transformResponse: (response: any, meta, arg) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useMeMutation,
  useSignUpMutation,
  useSignInAuthMutation,
} = authApi;

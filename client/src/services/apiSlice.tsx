import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import EMS_CLIENT from "../api";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: EMS_CLIENT.get,
  //   prepareHeaders: (headers, { getState }) => {
  //     const {
  //       appSlice: { token },
  //     } = getState();
  //     console.log("states", { token });
  //     // const token = localStorage.getItem("token");

  //     headers.set("authorization", token ? token : "");
  //     console.log("states: ", token);
  //     return headers;

  //     // return headers;
  //   },
  // }),
  // endpoints: (builder) => ({
  //   getAllEmployees: builder.query({
  //     query: () => "/all-employees",
  //     method:"get",
  //   }),
  // }),
  baseQuery: fetchBaseQuery({
    baseUrl: "EMS_CLIENT",
    prepareHeaders: (headers, { getState }) => {
      // const {
      //   appSlice: { token },
      // } = getState();
      // console.log("states", { token });
      const token = localStorage.getItem("token");
      headers.set("token", token ? token : "");
      console.log("states: ", token);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "all-employees",
    }),
  }),
});

export const { useGetAllProductsQuery } = employeesApi;

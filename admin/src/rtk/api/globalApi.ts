import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag, Banner, Category, SubCategory, Size, MiniCategory, Color, Genre } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),

  tagTypes: ["SearchTag", "Banner", "Category", "SubCategory", "MiniCategory", "Size", "Color", "Genre"],
  endpoints: (builder) => ({
    getAllSearchTag: builder.query<SearchTag[], void>({
      query() {
        return {
          url: `/search-tag`,
        };
      },
      transformResponse: (res: SearchTag[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SearchTag"],
    }),

    getSingleSearchTag: builder.query<SearchTag, string>({
      query(id) {
        return {
          url: `/search-tag/${id}`,
        };
      },
      providesTags: ["SearchTag"],
    }),

    createSearchTag: builder.mutation<SearchTag, FormData>({
      query(newSearchTag) {
        return {
          url: "/search-tag",
          method: "POST",

          body: newSearchTag,
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    updateSearchTag: builder.mutation<SearchTag, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/search-tag/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    deleteSearchTag: builder.mutation<SearchTag, string>({
      query(id) {
        return {
          url: `/search-tag/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    // Banner
    getAllBanners: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
        };
      },
      providesTags: ["Banner"],
    }),

    getSingleBanner: builder.query<Banner, string>({
      query(id) {
        return {
          url: `/banner/${id}`,
        };
      },
      providesTags: ["Banner"],
    }),

    createBanner: builder.mutation<Banner, FormData>({
      query(newBanner) {
        return {
          url: "/banner",
          method: "POST",

          body: newBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation<Banner, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/banner/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation<Banner, string>({
      query(id) {
        return {
          url: `/banner/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Banner"],
    }),

    //Category=============================================>
    getAllCategory: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
        };
      },
      providesTags: ["Category"],
    }),

    getSingleCategory: builder.query<Category, string>({
      query(id) {
        return {
          url: `/category/${id}`,
        };
      },
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        return {
          url: "/category",
          method: "POST",

          body: newCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<Category, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/category/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<Category, string>({
      query(id) {
        return {
          url: `/category/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Category"],
    }),

    // subCategory
    getAllSubCategory: builder.query<SubCategory[], void>({
      query() {
        return {
          url: `/subCategory`,
        };
      },
      providesTags: ["SubCategory"],
    }),

    getSingleSubCategory: builder.query<SubCategory, string>({
      query(id) {
        return {
          url: `/subCategory/${id}`,
        };
      },
      providesTags: ["SubCategory"],
    }),

    createSubCategory: builder.mutation<SubCategory, FormData>({
      query(newCategory) {
        return {
          url: "/subCategory",
          method: "POST",

          body: newCategory,
        };
      },
      invalidatesTags: ["SubCategory"],
    }),

    updateSubCategory: builder.mutation<SubCategory, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/subCategory/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["SubCategory"],
    }),

    deleteSubCategory: builder.mutation<SubCategory, string>({
      query(id) {
        return {
          url: `/subCategory/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Category"],
    }),

    // miniCategory
    getAllMiniCategory: builder.query<MiniCategory[], void>({
      query() {
        return {
          url: `/miniCategory`,
        };
      },
      providesTags: ["MiniCategory"],
    }),

    getSingleMiniCategory: builder.query<MiniCategory, string>({
      query(id) {
        return {
          url: `/miniCategory/${id}`,
        };
      },
      providesTags: ["MiniCategory"],
    }),

    createMiniCategory: builder.mutation<MiniCategory, FormData>({
      query(newCategory) {
        return {
          url: "/miniCategory",
          method: "POST",

          body: newCategory,
        };
      },
      invalidatesTags: ["MiniCategory"],
    }),

    updateMiniCategory: builder.mutation<MiniCategory, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/miniCategory/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["MiniCategory"],
    }),

    deleteMiniCategory: builder.mutation<MiniCategory, string>({
      query(id) {
        return {
          url: `/miniCategory/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["MiniCategory"],
    }),

    //Size===============================================>
    getAllSize: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
        };
      },
      providesTags: ["Size"],
    }),

    createSize: builder.mutation<Size, FormData>({
      query(data) {
        return {
          url: "/size",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Size"],
    }),

    deleteSize: builder.mutation<Size, string>({
      query(id) {
        return {
          url: `/size/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Size"],
    }),

    //Color===============================================>
    getAllColor: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
        };
      },
      providesTags: ["Color"],
    }),

    createColor: builder.mutation<Color, FormData>({
      query(data) {
        return {
          url: "/color",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Color"],
    }),

    deleteColor: builder.mutation<Color, string>({
      query(id) {
        return {
          url: `/color/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Color"],
    }),

    //Genre===============================================>
    getAllGenre: builder.query<Genre[], void>({
      query() {
        return {
          url: `/genre`,
        };
      },
      providesTags: ["Color"],
    }),

    createGenre: builder.mutation<Genre, FormData>({
      query(data) {
        return {
          url: "/genre",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Genre"],
    }),

    getSingleGenre: builder.query<Genre, string>({
      query(id) {
        return {
          url: `/genre/${id}`,
        };
      },
      providesTags: ["Genre"],
    }),

    updateGenre: builder.mutation<Genre, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/genre/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["Genre"],
    }),

    deleteGenre: builder.mutation<Genre, string>({
      query(id) {
        return {
          url: `/genre/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Genre"],
    }),
  }),
});

export const {
  useGetAllSearchTagQuery,
  useCreateSearchTagMutation,
  useDeleteSearchTagMutation,
  useGetSingleSearchTagQuery,
  useUpdateSearchTagMutation,

  useGetAllBannersQuery,
  useGetSingleBannerQuery,
  useCreateBannerMutation,
  useDeleteBannerMutation,
  useUpdateBannerMutation,

  // category
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,

  // sub-category
  useCreateSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetAllSubCategoryQuery,
  useGetSingleSubCategoryQuery,

  // mini-category
  useCreateMiniCategoryMutation,
  useUpdateMiniCategoryMutation,
  useDeleteMiniCategoryMutation,
  useGetAllMiniCategoryQuery,
  useGetSingleMiniCategoryQuery,

  useCreateSizeMutation,
  useDeleteSizeMutation,
  useGetAllSizeQuery,

  useCreateColorMutation,
  useDeleteColorMutation,
  useGetAllColorQuery,

  useGetAllGenreQuery,
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useGetSingleGenreQuery,
  useUpdateGenreMutation,
} = globalApi;

"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import TopCategoryService, {TopCategory } from "../service/topCategoryService";


export function useAllTopCategories(): UseQueryResult<TopCategory[]> {
  const categoryService = new TopCategoryService();
  return useQuery(["topCategories"], () => categoryService.getAllTopCategories());
}

// create category
export function useCreateTopCategory(): UseMutationResult<TopCategory, Error, TopCategory> {
  const queryClient = useQueryClient();
  const categoryService = new TopCategoryService();

  return useMutation((newCategory: TopCategory) => categoryService.createTopCategory(newCategory), {
    onSuccess: () => {
      queryClient.invalidateQueries(["topCategory"]);
    },
  });
}

// get single category
export function useTopCategory(id: string): UseQueryResult<TopCategory> {
  const categoryService = new TopCategoryService();

  return useQuery(["topCategory", id], () => categoryService.getByTopCategoryId(id));
}

// update category
export function useUpdateTopCategory(): UseMutationResult<TopCategory, Error, any> {
  const queryClient = useQueryClient();
  const categoryService = new TopCategoryService();

  return useMutation(
    (updatedCategory: TopCategory) => categoryService.updateTopCategory("1", updatedCategory),
    {
      onSuccess: (data, updatedCategory) => {
        queryClient.setQueryData(["topCategory", updatedCategory.id], data);
      },
    }
  );
}

//  deleting a Category
export function useDeleteTopCategory(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient();
  const categoryService = new TopCategoryService();

  return useMutation((id: string) => categoryService.deleteTopCategory(id), {
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(["topCategory", id]); 
      queryClient.invalidateQueries(["topCategories"]); 
    },
  });
}

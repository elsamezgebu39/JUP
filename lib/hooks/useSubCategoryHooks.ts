"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import SubCategoryService, {SubCategory } from "../service/subCategoryService";


export function useAllSubCategories(): UseQueryResult<SubCategory[]> {
  const categoryService = new SubCategoryService();
  return useQuery(["subCategories"], () => categoryService.getAllSubCategories());
}

// create category
export function useCreateSubCategory(): UseMutationResult<SubCategory, Error, SubCategory> {
  const queryClient = useQueryClient();
  const categoryService = new SubCategoryService();

  return useMutation((newCategory: SubCategory) => categoryService.createSubCategory(newCategory), {
    onSuccess: () => {
      queryClient.invalidateQueries(["subCategory"]);
    },
  });
}

// get single category
export function useSubCategory(id: string): UseQueryResult<SubCategory> {
  const categoryService = new SubCategoryService();

  return useQuery(["subCategory", id], () => categoryService.getBySubCategoryId(id));
}

// delete category
export function useUpdateSubCategory(): UseMutationResult<SubCategory, Error, any> {
  const queryClient = useQueryClient();
  const categoryService = new SubCategoryService();

  return useMutation(
    (updatedCategory: SubCategory) => categoryService.updateSubCategory(`${updatedCategory.id}`, updatedCategory),
    {
      onSuccess: (data, updatedCategory) => {
        queryClient.setQueryData(["subCategory", updatedCategory.id], data);
      },
    }
  );
}

//  deleting a Category
export function useDeleteSubCategory(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient();
  const categoryService = new SubCategoryService();

  return useMutation((id: string) => categoryService.deleteSubCategory(id), {
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(["subCategory", id]); 
      queryClient.invalidateQueries(["subCategories"]); 
    },
  });
}

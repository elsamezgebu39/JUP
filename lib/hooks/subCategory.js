import { useQuery } from "@tanstack/react-query";
import SubCategoryService from "@lib/service/subCategory";

const useAllSubCategories = () => {
  return useQuery({
    queryKey: "all-subcategories",
    queryFn: () => SubCategoryService.getAllSubCategories(),
    onError: (error) => {
      console.error("Error fetching subcategories:", error);
    },
  });
};

const useSubCategoryById = (id) => {
  return useQuery({
    queryKey: ["subCategory", id],
    queryFn: () => SubCategoryService.getBySubCategoryId(id),
    onError: (error) => {
      console.error(`Error fetching subcategory with id ${id}:`, error);
    },
  });
};

export {
  useSubCategoryById,
  useAllSubCategories,
};

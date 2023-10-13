import { useQuery } from "@tanstack/react-query";
import TopCategoryService from "@lib/service/topCategory";

const useAllTopCategories = () => {
  return useQuery({
    queryKey: "all-top-categories",
    queryFn: () => TopCategoryService.getAllTopCategories(),
    onError: (error) => {
      console.error("Error fetching top categories:", error);
    },
  });
};

const useTopCategoryById = (id) => {
  return useQuery({
    queryKey: ["topCategory", id],
    queryFn: () => TopCategoryService.getByTopCategoryId(id),
    onError: (error) => {
      console.error(`Error fetching top category with id ${id}:`, error);
    },
  });
};

export {
  useTopCategoryById,
  useAllTopCategories,
};

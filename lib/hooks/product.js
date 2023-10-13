import { useQuery } from "@tanstack/react-query";
import ProductService from "@lib/service/product";

const useAllProducts = () => {
  return useQuery({
    queryKey: "all-products",
    queryFn: () => ProductService.getAllProducts(),
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
  });
};

const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => ProductService.getByProductId(id),
    onError: (error) => {
      console.error(`Error fetching product with id ${id}:`, error);
    },
  });
};

export {
  useProductById,
  useAllProducts,
};

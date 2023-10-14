"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import ProductService, {Product } from "../service/productService";


export function useAllProducts(): UseQueryResult<Product[]> {
  const productService = new ProductService();
  return useQuery(["products"], () => productService.getAllProducts());
}

// create product
export function useCreateProduct(): UseMutationResult<Product, Error, Product> {
  const queryClient = useQueryClient();
  const productService = new ProductService();

  return useMutation((newProduct: Product) => productService.createProduct(newProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
}

//* get single product
export function useProduct(id: string): UseQueryResult<Product> {
  const productService = new ProductService();

  return useQuery(["product", id], () => productService.getByProductId(id));
}

// get user products
export function useUserProducts(id: string): UseQueryResult<Product[]> {
  const productService = new ProductService();

  return useQuery(["userProduct", id], () => productService.getProductsByUserId(id));
}

// update product
export function useUpdateProduct(): UseMutationResult<Product, Error, any> {
  const queryClient = useQueryClient();
  const productService = new ProductService();

  return useMutation(
    (updatedProduct: Product) => productService.updateProduct("1", updatedProduct),
    {
      onSuccess: (data, updatedProduct) => {
        queryClient.setQueryData(["product", updatedProduct.id], data);
      },
    }
  );
}

//  deleting a Product
export function useDeleteProduct(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient();
  const productService = new ProductService();

  return useMutation((id: string) => productService.deleteProduct(id), {
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(["product", id]); 
      queryClient.invalidateQueries(["products"]); 
    },
  });
}

import http from "./httpService";
import { AxiosResponse } from "axios";

export interface Product {
  id?: string;
  user_id: string;
  sub_category_id: string;
  product_name: string;
  product_description: string;
  price: number;
}

export default class ProductService {
  // Get All Products
  async getAllProducts(): Promise<Product> {
    try {
      const { data }: any = await http.get(`/product`);
      return data;
    } catch (error) {
      throw new Error("Failed to get products");
    }
  }

  // Get Product by ID
  async getByProductId(productId: string): Promise<Product> {
    try {
      const { data }: AxiosResponse<Product> = await http.get(`/product/${productId}`);
      return data;
    } catch (error) {
      return error as any;
    }
  }

  // get user products
  async getProductsByUserId(userId: string): Promise<Product> {
    try {
      const { data }: AxiosResponse<Product> = await http.get(`/user_product/${userId}`);
      return data;
    } catch (error) {
      return error as any;
    }
  }

  // Create a new Product
  async createProduct(product: Product): Promise<Product> {
    try {
      const queryParams = new URLSearchParams(product as any).toString();
      const response: AxiosResponse<Product | any> = await http.post(
        `/product?${queryParams}`
      );
      console.log(queryParams)
      return response.data;
    } catch (error) {
      return error as any;
      // throw new Error("Failed to create products");
    }
  }

  // Update Product by ID
  async updateProduct(productId: string, updatedProduct: Product): Promise<Product> {
    try {
      const queryParams = new URLSearchParams(updatedProduct as any).toString();
      const response: AxiosResponse<Product | any | null> = await http.patch(
        `/product/${productId}?${queryParams}`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update product");
    }
  }

  // Delete product by ID
  async deleteProduct(productId: string): Promise<void> {
    try {
      await http.delete(`/product/${productId}`);
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  }
}

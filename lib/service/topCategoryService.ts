import http from "./httpService";
import { AxiosResponse } from "axios";

export interface TopCategory {
  id?: string;
  top_category_name: string;
}

export default class ProductService {
  // Get All  top Category
  async getAllTopCategories(): Promise<TopCategory> {
    try {
      const { data }: any = await http.get(`/top_category`);
      return data;
    } catch (error) {
      throw new Error("Failed to get Top Categories");
    }
  }

  // Get  top Category by ID
  async getByTopCategoryId(categoryId: string): Promise<TopCategory> {
    try {
      const { data }: AxiosResponse<TopCategory> = await http.get(`/top_category/${categoryId}`);
      return data;
    } catch (error) {
      return error as any;

    }
  }

  // Create a new  top Category
  async createTopCategory(category: TopCategory): Promise<TopCategory> {
    try {
      const queryParams = new URLSearchParams(category as any).toString();
      const response: AxiosResponse<TopCategory | any> = await http.post(
        `/top_category?${queryParams}`
      );
      return response.data;
    } catch (error) {
      return error as any;

    }
  }

  // Update  top Category by ID
  async updateTopCategory(categoryId: string, updatedCategory: TopCategory): Promise<TopCategory> {
    try {
      const response: AxiosResponse<TopCategory | any | null> = await http.put(
        `/top_category/${categoryId}`,
        updatedCategory
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update  top Category");
    }
  }

  // Delete  top Category by ID
  async deleteTopCategory(categoryId: string): Promise<void> {
    try {
      await http.delete(`/top_category/${categoryId}`);
    } catch (error) {
      throw new Error("Failed to delete top Category");
    }
  }
}

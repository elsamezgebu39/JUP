import http from "./httpService";
import { AxiosResponse } from "axios";

export interface SubCategory {
  id?: string;
  top_category_id: string;
  sub_category_name: string;
}

export default class SubCategoryService {
  // Get All sub Category
  async getAllSubCategories(): Promise<SubCategory> {
    try {
      const { data }: any = await http.get(`/sub_category`);
      return data;
    } catch (error) {
      throw new Error("Failed to get Sub Categories");
    }
  }

  // Get sub Category by ID
  async getBySubCategoryId(categoryId: string): Promise<SubCategory> {
    try {
      const { data }: AxiosResponse<SubCategory> = await http.get(`/sub_category/${categoryId}`);
      return data;
    } catch (error) {
      return error as any;
    }
  }

  // Create a new sub Category
  async createSubCategory(category: SubCategory): Promise<SubCategory> {
    try {
      const queryParams = new URLSearchParams(category as any).toString();
      const response: AxiosResponse<SubCategory | any> = await http.post(
        `/sub_category?${queryParams}`
      );
      return response.data;
    } catch (error) {
      return error as any;
    }
  }

  // Update sub Category by ID
  async updateSubCategory(categoryId: string, updatedCategory: SubCategory): Promise<SubCategory> {
    try {
      const response: AxiosResponse<SubCategory | any | null> = await http.put(
        `/sub_category/${categoryId}`,
        updatedCategory
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update sub Category");
    }
  }

  // Delete sub Category by ID
  async deleteSubCategory(categoryId: string): Promise<void> {
    try {
      await http.delete(`/sub_category/${categoryId}`);
    } catch (error) {
      throw new Error("Failed to delete sub Category");
    }
  }
}

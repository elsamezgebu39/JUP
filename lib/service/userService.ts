/** @format */
import http from "./httpService";
import { AxiosResponse } from "axios";

export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  user_name: string;
  verified: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  role: string;
  rating: number;
  password: string;
}

export default class UserService {
  // Get All users
  async getAllUsers(): Promise<User> {
    try {
      const { data }: any = await http.get(`/user`);
      return data;
    } catch (error) {
      throw new Error("Failed to get users");
    }
  }

  // Get user by ID
  async getByUserId(userId: string): Promise<User> {
    try {
      const { data }: AxiosResponse<User> = await http.get(`/user/${userId}`);
      return data;
    } catch (error) {
      return error as any;
      // throw new Error("Failed to get user");
    }
  }

  // Create a new user
  async createUser(user: User): Promise<User> {
    try {
      const queryParams = new URLSearchParams(user as any).toString();
      const response: AxiosResponse<User | any> = await http.post(
        `/user?${queryParams}`
      );
      return response.data;
    } catch (error) {
      return error as any;
      // throw new Error("Failed to create user");
    }
  }

  // Update user by ID
  async updateUser(userId: string, updatedUser: User): Promise<User> {
    try {
      const response: AxiosResponse<User | any | null> = await http.put(
        `/user/${userId}`,
        updatedUser
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  // Delete user by ID
  async deleteUser(userId: string): Promise<void> {
    try {
      await http.delete(`/user/${userId}`);
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}

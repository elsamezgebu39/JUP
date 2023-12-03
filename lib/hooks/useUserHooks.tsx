"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import UserService, { User } from "../service/userService";

/**
 ** This is fetching all users comment.
 *! fetching all users
 * TODO: refactoring the codes
 */

export function useAllUsers(): UseQueryResult<User[]> {
  const user = new UserService();

  return useQuery(["users"], () => user.getAllUsers());
}

/**
 ** Post_User
 */
export function useCreateUser(): UseMutationResult<User, Error, User> {
  const queryClient = useQueryClient();
  const userService = new UserService();

  return useMutation((newUser: User) => userService.createUser(newUser), {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
}

//* Read_Single_User
export function useUser(id: string): UseQueryResult<User> {
  const userService = new UserService();

  return useQuery(["user", id], () => userService.getByUserId(id));
}

//* Update_user
export function useUpdateUser(): UseMutationResult<User, Error, any> {
  const queryClient = useQueryClient();
  const userService = new UserService();

  return useMutation(
    (updatedUser: User) => userService.updateUser("1", updatedUser),
    {
      onSuccess: (data, updatedUser) => {
        queryClient.setQueryData(["user", updatedUser.id], data);
      },
    }
  );
}

// ! deleting a user
export function useDeleteUser(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient();
  const userService = new UserService();

  return useMutation((id: string) => userService.deleteUser(id), {
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(["user", id]); // Invalidate the user query to remove it from cache
      queryClient.invalidateQueries(["users"]); // Invalidate the users query to trigger a fresh fetch
    },
  });
}

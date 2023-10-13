import { useQuery } from "@tanstack/react-query";
import UserService from "@lib/service/user";

const useAllUsers = () => {
  return useQuery({
    queryKey: "all-users",
    queryFn: () => UserService.getAllUsers(),
    onError: (error) => {
      console.error("Error fetching users:", error);
    },
  });
};

const useUserById = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => UserService.getByUserId(id),
    onError: (error) => {
      console.error(`Error fetching user with id ${id}:`, error);
    },
  });
};

const useUserProductsId = (id) => {
  return useQuery({
    queryKey: ["userProducts", id],
    queryFn: () => UserService.getUserProducts(id),
    onError: (error) => {
      console.error(`Error fetching products for user with id ${id}:`, error);
    },
  });
};

export {
  useUserById,
  useAllUsers,
  useUserProductsId,
};

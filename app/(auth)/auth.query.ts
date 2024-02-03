// import { queryClient } from "@config/queryclient";
// import { useMutation } from "@tanstack/react-query";
// import { api } from "@config/api";
// import { queryKeys } from "@components/common/queryConstants";
// const changePassword = (changePasswordInputs: FormData) =>
//   api.post("/auth/change-password", changePasswordInputs);
// export const useChangePasswordMutation = () =>
//   useMutation({
//     mutationFn: changePassword,
//     onSuccess: (data) => {
//       queryClient.invalidateQueries([queryKeys.users]);
//     },
//     onError: (error: any) => {},
//     onSettled(data, error, variables, context) {
//       queryClient.invalidateQueries([queryKeys.users]);
//     },
//   });

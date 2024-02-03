// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { RiLockPasswordFill, RiPhoneFill } from "react-icons/ri";

// import LoadingSpinner from "@components/common/LoadingSpinner";
// import { ShowToastMessage } from "@components/common/toast/ShowToastMessage";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import { ErrorMessage } from "@components/common/ErrorMessage";
// import { api } from "@config/api";
// import { AxiosError } from "axios";
// import Link from "next/link";
// import { ShieldCheckIcon } from "@heroicons/react/20/solid";
// import { basePath } from "src/lib/constants";

// const verifyCodeSchema = Yup.object({
//   token: Yup.string().required("Verification code is required."),
//   newPassword: Yup.string()
//     .required("Last name is required")
//     .min(8, "Password must be at least 8 characters.")
//     .matches(/^\S+$/, "Password pattern don't match."),
//   confirmNewPassword: Yup.string().oneOf(
//     [Yup.ref("newPassword"), null],
//     "Passwords must match."
//   ),
// });

// export default function VerifyCodePage() {
//   const [loading, setLoading] = useState(false);
//   const [credentialError, setCredentialError] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [toggleShowPassword, setToggleShowPassword] = useState(false);
//   const [message, setMessage] = useState("");

//   const router = useRouter();

//   const formik = useFormik({
//     initialValues: {
//       token: "",
//       newPassword: "",
//       confirmNewPassword: "",
//     },
//     validationSchema: verifyCodeSchema,
//     onSubmit: async (values) => {
//       try {
//         const { token, newPassword } = values;
//         setLoading(true);
//         await api.patch("/auth/reset-password", { token, newPassword });
//         ShowToastMessage("success", "Password reset successfully.");
//         setLoading(false);
//         router.push(`/login`);
//       } catch (error: unknown) {
//         if (error instanceof AxiosError) {
//           const err = error.response?.data;
//           setMessage(err?.errors?.common);
//         }
//       }
//     },
//   });

//   return (
//     <div className="flex min-h-full bg-white">
//       <div className="flex w-1/2 flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
//         <div className="mx-auto w-full max-w-sm lg:w-96">
//           <div>
//             <picture>
//               <img
//                 className="h-16 w-auto"
//                 src="mot-logo.png"
//                 alt="Your Company"
//               />
//             </picture>

//             <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-700">
//               Reset your password
//             </h2>
//           </div>

//           <div>
//             <div className="mt-6">
//               <div className="text-red-400 text-sm mt-2 p-1 w-full flex items-center justify-center">
//                 <span>{message}</span>
//               </div>
//               <form onSubmit={formik.handleSubmit} className="space-y-6">
//                 <div className="">
//                   <label
//                     htmlFor="token"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Verification code
//                   </label>
//                   <div className="relative mt-2 rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <ShieldCheckIcon
//                         className="h-5 w-5 text-ethLightGreen/60"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       id="token"
//                       name="token"
//                       onChange={formik.handleChange}
//                       value={formik.values.token}
//                       type="text"
//                       autoComplete="current-password"
//                       required
//                       className={`block w-full appearance-none rounded-md border ${credentialError ? "border-red-400" : "border-gray-300"
//                         } px-3 pl-10 py-2 placeholder-gray-400 shadow-sm focus:border-ethLightGreen focus:outline-none focus:ring-ethLightGreen sm:text-sm`}
//                     />
//                     <ErrorMessage
//                       error={formik.errors.token}
//                       touched={formik.touched.token}
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="newPassword"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     New password
//                   </label>
//                   <div className="relative mt-1 rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <RiLockPasswordFill
//                         className="h-5 w-5 text-ethLightGreen/60"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       id="newPassword"
//                       name="newPassword"
//                       type={toggleShowPassword ? "text" : "password"}
//                       onChange={formik.handleChange}
//                       value={formik.values.newPassword}
//                       autoComplete="new-password"
//                       required
//                       className={`block w-full appearance-none rounded-md border ${credentialError ? "border-red-400" : "border-gray-300"
//                         } px-3 pl-10 py-2 placeholder-gray-400 shadow-sm focus:border-ethLightGreen focus:outline-none focus:ring-ethLightGreen sm:text-sm`}
//                     />
//                     <ErrorMessage
//                       error={formik.errors.newPassword}
//                       touched={formik.touched.newPassword}
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="confirmNewPassword"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Confirm new password
//                   </label>
//                   <div className="relative mt-1 rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <RiLockPasswordFill
//                         className="h-5 w-5 text-ethLightGreen/60"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       id="confirmNewPassword"
//                       name="confirmNewPassword"
//                       type={toggleShowPassword ? "text" : "password"}
//                       onChange={formik.handleChange}
//                       value={formik.values.confirmNewPassword}
//                       autoComplete="confirm-new-password"
//                       required
//                       className={`block w-full appearance-none rounded-md border ${credentialError ? "border-red-400" : "border-gray-300"
//                         } px-3 pl-10 py-2 placeholder-gray-400 shadow-sm focus:border-ethLightGreen focus:outline-none focus:ring-ethLightGreen sm:text-sm`}
//                     />
//                     <ErrorMessage
//                       error={formik.errors.confirmNewPassword}
//                       touched={formik.touched.confirmNewPassword}
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center rounded-md border border-transparent bg-ethLightGreen py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-ethLightGreen/80 focus:outline-none focus:ring-2 focus:ring-ethLightGreen focus:ring-offset-2 uppercase"
//                 >
//                   {loading && <LoadingSpinner />}
//                   <span className="ml-1">Reset</span>
//                 </button>
//                 <div className="text-sm w-full text-center">
//                   <Link
//                     href="/login"
//                     className="font-semibold text-ethLightGreen hover:text-ethDeepGreen"
//                   >
//                     Return to login
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" relative hidden w-1/2 flex-1 lg:block">
//         <picture>
//           <Image
//             className="absolute inset-0 h-full w-full object-cover"
//             height={1000}
//             width={1000}
//             src={`${basePath}/images/fuel-login-page-image.svg`}
//             alt="car at fuel station"
//           />
//         </picture>
//       </div>
//     </div>
//   );
// }

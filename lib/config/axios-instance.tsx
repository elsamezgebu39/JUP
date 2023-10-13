import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// Create an instance of Axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://aadaa.omishtujoy.com/api",
  timeout: 5000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    // console.log("Request interceptor:", config);
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
  },
  (error: AxiosError) => {
    // Handle request errors
    // console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log("Response interceptor:", response);

    return response;
  },
  (error: AxiosError) => {
    // Handle response errors
    const ExpectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;
    if (!ExpectedError) {
      console.log("Unexpected Error", error);
    }

    return Promise.reject(error); //pass control to catch
  }
);

export default axiosInstance;
